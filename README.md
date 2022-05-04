## Requirements

You must have Node and Yarn installed on your computer [with the same versions than in our setup](https://github.com/lewagon/setup/blob/master/macos.md#nodejs). Check it with: 

```bash
node -v
yarn -v
# Compare the versions with the ones in the setup
```

If it's not the case, go back to the dedicated section of the [macOS](https://github.com/lewagon/setup/blob/master/macos.md#nodejs), [Windows](https://github.com/lewagon/setup/blob/master/windows.md#installing-some-gems) or [Ubuntu](https://github.com/lewagon/setup/blob/master/ubuntu.md#installing-some-gems) setup.

## Installation

First clone this repository to your laptop:

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
cd ~/code/dotfiles/<your_github_nickname>
echo 'export PATH="./bin:./node_modules/.bin:${PATH}"' >> zshrc
cd ~/code/<your_github_nickname>/my-js-project
source ~/.zshrc
```

This way you can run:

```bash
eslint lib
webpack-dev-server
```

Once a file has been updated in your text editor, you can run it with:

```bash
node lib/01_types.js
```
