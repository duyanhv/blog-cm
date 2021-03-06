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

  server.get('/admin', (_req, res) => {
    return res.sendFile(
      path.join(__dirname, '../../../public/admin_index.html')
    );
  });

  server.get('/admin/*', (_req, res) => {
    return res.sendFile(
      path.join(__dirname, '../../../public/admin_index.html')
    );
  });
};

const setupPublicRoutes = (server: express.Express, app: next.Server) => {
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

  server.get('/study-result/attendance-record', (req, res) => {
    const actualPage = '/study-result/attendance-record';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/study-result/grade-book', (req, res) => {
    const actualPage = '/study-result/grade-book';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/time-table/register', (req, res) => {
    const actualPage = '/time-table/register';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/time-table/:grade', (req, res) => {
    const actualPage = '/time-table/time-table-12';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/material-facilities', (req, res) => {
    const actualPage = '/introduction/material-facilities';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/activities', (req, res) => {
    const actualPage = '/introduction/activities';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/activities/:albumName', (req, res) => {
    const actualPage = '/introduction/activities-detail';
    const queryParams = {
      albumName: req.params.albumName
    };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/activities-detail', (_req, res) => {
    res.redirect(301, `/introduction/activities`);
  });

  server.get('/introduction/teachers', (req, res) => {
    const actualPage = '/introduction/teachers';
    const queryParams = {};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/teachers/:teacherId', (req, res) => {
    const actualPage = '/introduction/teachers-detail';
    const queryParams = {
      teacherId: req.params.teacherId
    };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/introduction/teachers-detail', (_req, res) => {
    res.redirect(301, `/introduction/teachers`);
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
