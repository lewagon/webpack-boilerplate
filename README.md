## Teacher usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
mkdir -p ~/tmp && cd $_
git clone git@github.com:lewagon/javascript-101.git
cd javascript-101
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
```

Once a file has been updated in Sublime, you can run it with:

```bash
node lib/01_types_and_variables.js
```

## How was this repo generated?

Environment setup:

```bash
yarn init
yarn add --dev eslint
./node_modules/.bin/eslint --init
# How would you like to configure ESLint? Use a popular style guide
# Which style guide do you want to follow? Airbnb
# Do you use React? Yes
# What format do you want your config file to be in? JSON

# Opened .eslintrc.json and add rules:
# - "no-console": "off"
# - "quotes": [ "warn", "double", { "avoidEscape": true } ]

git init
echo "node_modules" >> .gitignore
git add .
git commit -m "JavaScript empty project with ESLint (Airbnb)"
```

Empty files created with:

```bash
mkdir lib
touch lib/01_types_and_variables.js
```
