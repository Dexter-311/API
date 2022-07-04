export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'MedMax API',
        version: '1.0.0',
        description: 'API for MedMax App'
      },
    },
    apis: ['./src/routes/*.js'],
  };