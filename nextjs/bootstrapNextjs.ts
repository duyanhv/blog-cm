import * as express from 'express';
import * as next from 'next';
import * as morgan from 'morgan';
import * as path from 'path';

type APIResponse = {
  success: boolean;
  message: string;
};

const setupNextjsRoutes = (server: express.Express, _app: next.Server) => {
  server.use(express.static('public'));

  server.get('/admin/*', (_req, res) => {
    return res.sendFile(
      path.join(__dirname, '../../../public/admin_index.html')
    );
  });
};

const setupPublicRoutes = (server: express.Express, app: next.Server) => {
  const handle = app.getRequestHandler();

  server.get('/people', (req, res) => {
    const actualPage = '/ping';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/people/:slug', (req, res) => {
    const actualPage = '/ping';
    const queryParams = { slug: req.params.slug, name: req.params.name };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/people/:slug/:name', (req, res) => {
    const actualPage = '/ping';
    const queryParams = { slug: req.params.slug, name: req.params.name };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/ping', (req, res) => {
    // SSR for the /ping page in NextJS
    return app.render(req, res, '/ping', req.query);
  });

  server.get('/test', (_, res) => {
    // Does not use NextJS app at all
    const result: APIResponse = {
      success: true,
      message: 'Back-end server is online.'
    };
    return res.json(result);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });
};

const bootstrapNextjs = async (server: express.Express) => {
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });

  await app.prepare();

  // Middleware
  server.use(morgan('short'));

  setupNextjsRoutes(server, app);
  setupPublicRoutes(server, app);
};

export { bootstrapNextjs };
