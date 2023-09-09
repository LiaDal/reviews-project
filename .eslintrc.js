module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // "plugins": [
    //     "react"
    // ],
    // ignorePatters: [],
    "rules": {
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "checksVoidReturn": false,
        // "indent": [
        //     "error",
        //     4
        // ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "double"
        // ],
        // "semi": [
        //     "error",
        //     "always"
        // ]
    }
};