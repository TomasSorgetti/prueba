export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72], // Limitar la longitud del encabezado del commit a 72 caracteres
  },
};
