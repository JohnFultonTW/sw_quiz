module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [ "react" ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
