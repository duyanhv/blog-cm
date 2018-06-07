const defaultConfig = {
  app: {
    port: 3001,
    prefix: 'api',
    defaultItemPerPageCount: 10,
    corsUrls: ['http://localhost:3001'],
    maxPageSize: 50,
    gridPage: {
      defaultPageSize: 10,
      pageSizes: [10, 20, 50],
    },
  },
  auth: {
    expiresIn: 60 * 60,
    secret: 'Ba2THViaoHd8Nn7tNNoRfWxrbi4u1oDefkQtdk01FzqY11Pr8dlM7fkkQnZJWKP',
    googleOauth: {
      clientID:
        '409216933033-ilmq668263gbod022e82s5djeiludg3s.apps.googleusercontent.com',
      clientSecret: 'hCEl-JtHCBaMae47qK3IhdM6',
      callbackURL: 'http://localhost:3001/api/users/auth/googleCallback',
    },
    facebookOauth: {
      clientID: '1895569223817635',
      clientSecret: 'a43313123e3e02be0845bbfce596be6b',
      callbackURL: 'http://localhost:3001/api/users/auth/facebookCallback',
    },
  },
  database: {
    mongoConnectionString: 'mongodb://localhost/techkids',
    mongoConnectionToken: 'mongoConnectionToken',
  },
  swagger: {
    title: 'Techkids Web Starter Kit API',
    description: 'API documentation',
    version: '1.0',
    url: '/api/docs',
    jsonUrl: '/api/docs.json',
    basePath: '/api',
    setHomeAsApiDoc: false,
  },
};

export default defaultConfig;
