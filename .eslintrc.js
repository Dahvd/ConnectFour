module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [ "error", 2 ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "space-in-parens": [ "error", "always", { "exceptions": [ "{}" ] } ],
    "block-spacing": [ "error", "always" ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "no-trailing-spaces": [ "error" ],
    "semi-spacing": [ "error", { "before": false, "after": true } ],
    "no-spaced-func": [ "error" ],
    "key-spacing": [ "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "minimum"
      }
    ],
    "max-len": [ "error" ],
    "space-before-blocks": [ "error", "always" ],
    "space-before-function-paren": [ "error", "never" ]
  }
};
