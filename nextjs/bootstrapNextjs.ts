import * as express from 'express';
import * as next from 'next';
import * as morgan from 'morgan';

type APIResponse = {
    success: boolean;
    message: string;
};

const bootstrapNextjs = async (server: express.Express) => {
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    const handle = app.getRequestHandler();

    await app.prepare();

    // Middleware
    server.use(morgan('short'));

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

    server.get('/ping', (req, res) => { // SSR for the /ping page in NextJS
        return app.render(req, res, '/ping', req.query);
    });

    server.get('/test', (_, res) => { // Does not use NextJS app at all
        const result: APIResponse = { success: true, message: 'Back-end server is online.' };
        return res.json(result);
    });

    server.get('/', (req, res) => {
        const actualPage = '/ping';
        const queryParams = { slug: req.params.slug, name: req.params.name };
        app.render(req, res, actualPage, queryParams);
    });

    server.get('/_next/*', (req, res) => {
        return handle(req, res);
    });
};

export { bootstrapNextjs };
