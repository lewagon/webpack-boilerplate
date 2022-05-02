## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:lewagon/webpack-boilerplate.git my-js-project
cd my-js-project
rm -rf .git
yarn install
code . # Open this folder in your text editor
```

Make sure you have `./node_modules/.bin` in your `$PATH`:

```bash
echo $PATH
# You should see `./node_modules/.bin` in the list
```

If it's not the case, add it: 

```bash
cd ~/code/dotfiles/YOUR-GITHUB-USERNAME
echo 'export PATH="./bin:./node_modules/.bin:${PATH}"' >> zshrc
source ~/.zshrc
```

This way you can run this:

```bash
eslint lib
webpack-dev-server
```

Once a file has been updated in your text editor, you can run it with:

```bash
node lib/01_types.js
```
