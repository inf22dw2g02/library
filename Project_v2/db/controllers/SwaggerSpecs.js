const config = require('../config/config');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: { 
    title: "REST API",
    version: "1.0.0",
    description: "Rest API",
    contact: { name: "Your name" },
  },
  servers: [ {url: "http://localhost:8080"} ],
  components: {
    securitySchemes: {
      googleAuth: { 
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "http://localhost:8080/auth/google/",
            // tokenUrl: "https://oauth2.googleapis.com/token",
            scopes: {
              read: 'Read access to protected resources',
              write: 'Write access to protected resources'
            }
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml", "./router/router"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
