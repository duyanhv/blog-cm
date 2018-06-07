import * as express from 'express';
import * as next from 'next';
import * as morgan from 'morgan';
import * as path from 'path';

type APIResponse = {
  success: boolean;
  message: string;
};

const setupNextjsRoutes = (server: express.Express, app: next.Server) => {
  const handle = app.getRequestHandler();

  server.use(express.static('public'));

  server.get('/_next/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/admin/*', (_req, res) => {
    return res.sendFile(
      path.join(__dirname, '../../../public/admin_index.html')
    );
  });
};

const setupPublicRoutes = (server: express.Express, app: next.Server) => {
  // const handle = app.getRequestHandler();

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

  // server.get('/', (req, res) => {
  //   // SSR for the /ping page in NextJS
  //   return app.render(req, res, '/index', req.query);
  // });

  server.get('/test', (_, res) => {
    // Does not use NextJS app at all
    const result: APIResponse = {
      success: true,
      message: 'Back-end server is online.'
    };
    return res.json(result);
  });

  server.get('/', (req, res) => {
    const actualPage = '/index';
    const queryParams = { slug: req.params.slug, name: req.params.name };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/blog', (req, res) => {
    const actualPage = '/blog';
    const queryParams = { slug: req.params.slug, name: req.params.name };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/contact', (req, res) => {
    const actualPage = '/contact';
    const queryParams = { slug: req.params.slug, name: req.params.name };
    app.render(req, res, actualPage, queryParams);
  });

  // use pages/blogpost.jsx as /blog/:id
  server.get('/blog/:id', (req, res) => {
    const actualPage = '/blogpost';
    app.render(
      req,
      res,
      actualPage,
      Object.assign(
        {
          id: req.params.id,
          slug: req.params.slug, 
          name: req.params.name
        },
        req.query,
      )
    );
  });
  // redirect from /blogpost to /blog or /blogpost?id to /blog/:id 
  server.get('/blogpost', (req, res) => {
    if (req.query.id) {
      return res.redirect('/blog');
    }
    res.redirect(301, `/blog/${req.query.id}`);
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
