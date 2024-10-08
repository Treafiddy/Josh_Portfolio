/**
* This is intended to be a basic starting point for linting in your app.
* It relies on recommended configs out of the box for simplicity, but you can
* and should modify this configuration to best suit your team's needs.
*/
 
/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
    },
   
    // Base config
    extends: ["eslint:recommended"],
   
    overrides: [
      // React
      {
        files: ["**/*.{js}"],
        plugins: [],
        extends: [],
        settings: {
          react: {
            version: "detect",
          },
          formComponents: ["Form"],
          linkComponents: [
            { name: "Link", linkAttribute: "to" },
            { name: "NavLink", linkAttribute: "to" },
          ],
        },
      },
      // Node
      {
        files: [".eslintrc.js"],
        env: {
          node: true,
        },
      },
    ],
  };