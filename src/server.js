import * as Hapi from 'hapi';
import * as Vision from 'vision';
import * as Inert from 'inert';
import routes from './routes';

module.exports = function() {
  const server = new Hapi.Server({
    port: '5000',
    routes: {
      cors: true
    }
  });


  server.register([
    Inert,
    // Vision
  ]).then(res => {
    console.log(res);
    server.route(routes);

    server.start().then(res => {
      console.log(res);
      console.log(`Server running at: ${server.info.uri}`);
    });
  });
}