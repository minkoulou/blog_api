// swagger/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi    = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blog — BACKEND — INF222 TP1',
      version: '1.0.0',
      description: `
        API REST pour gérer un blog simple.
        Développée dans le cadre du TP INF222 EC1: Programmation web (Développement Backend).

      `,
      contact: {
        name: 'INF222 EC1',
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur en local'
      }
    ],
  },
  apis: ['./routes/*.js'], // Cherche les commentaires Swagger dans les routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };