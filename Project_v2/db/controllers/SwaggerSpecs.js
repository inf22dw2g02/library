const config =  require('../config/config');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "REST API",
      version: "1.0.0",
      description: "Rest API",
      contact: { name: "Your name" },
    },
    servers: [ {url: "http://localhost:8080"},],
    components: {
      securitySchemes: {
        oAuthSample: { 
            type: "oauth2",
            flows: {
              implicit: {
                   authorizationUrl: "http://localhost:8080/auth/google/" 
                        }
            /* <---- arbitrary name */
                    },
        security: [{   OAuth2: [] }]
      },
    },
  }};

const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml", "./router/router"],
    
  };

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;