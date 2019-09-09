## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:lewagon/webpack-boilerplate.git my-js-project
cd my-js-project
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Now you can run this:

```bash
yarn run lint
yarn run dev
```

Once a file has been updated in Sublime, you can run it with:

```bash
node lib/01_types.js
```
