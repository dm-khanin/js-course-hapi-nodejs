import * as path from 'path';

export default [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'ok';
    }
  },
  {
    method: 'GET',
    path: '/sample/{name}',
    handler: (req, h) => {
      return `Hello, ${req.params.name}!`;
    }
  },
  {
    method: 'GET',
    path: '/file',
    handler: (req, h) => {
      return h.file('./public/hello.html');
    }
  },

  {
    method: 'GET',
    path: '/page/{file*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../../public')
      }
    }
  },
]