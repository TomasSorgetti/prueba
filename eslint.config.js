import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier'; // Plugin para Prettier
import configPrettier from 'eslint-config-prettier'; // Deshabilita las reglas que Prettier maneja

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    settings: {
      react: {
        version: 'detect', // Detecta automáticamente la versión de React
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Integración de Prettier
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'no-mixed-spaces-and-tabs': 'off',
      'no-unused-vars': 'warn',
    },
  },
  configPrettier, // Deshabilita las reglas conflictivas de ESLint
];
