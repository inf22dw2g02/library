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
  servers: [ {url: "http://192.168.1.79:8080"}, {url: "http://localhost:8080"}  ], // here u v to put ur machine ip
  components: {
    securitySchemes: {
      googleAuth: { 
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
            // authorizationUrl: "http://localhost:8080/auth/google/",
            tokenUrl: "https://oauth2.googleapis.com/token",
            // redirectUri: "https://oauth2.example.com/auth",
            redirectUri: "http://localhost:8080/auth/google/callback",
            scopes: {
              "https://www.googleapis.com/auth/gmail.readonly": "Read-only access to Gmail"
              // read: 'Read access to protected resources',
              // write: 'Write access to protected resources'
            },
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
