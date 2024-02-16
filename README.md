# Halfsies
[![test](https://github.com/troyblank/halfsies/actions/workflows/test.yml/badge.svg)](https://github.com/troyblank/halfsies/actions/workflows/test.yml)

Halfies is a web app that keeps track of money owed between two moderately specific people.

## Setup
You will need two users to use the app. This is done by creating two users in AWS Cognito and adjusting `src/config/awsCognito.js` to match your user pool.

### Node.js configuration

We use NVM to control Node.js versions.

### NVM setup - Mac

Make the nvm folder
```
mkdir ~/.nvm
```

Add to .bashrc:

```
# NVM
export NVM_DIR="$HOME/.nvm"
. "$(brew --prefix nvm)/nvm.sh"
```

Run this command to install `nvm`.

```
brew install nvm
```

[Check out this auto nvm script to make your life easier.](https://github.com/nvm-sh/nvm#deeper-shell-integration)

### Upgrading Node Version

When upgrading Node be sure to change versions in `.nvmrc` as well as `.github\workflows\**\*`

## Installing dependencies and run commands

You will want to make sure your node version matches the projects by running:

```
nvm use
```

You will then want to install all node packages. Run:

```
npm run install
```

In order to demo the project locally run:

```
npm run start
```

To lint and test run:

```
npm run test
```

To run unit testing to in watch mode run

```
npm run test:watch
```

## Test Coverage

We maintain 100% test coverage on this project. Coverage percentages will be printed to the terminal when you run `npm run test`. This makes it easier for a code reviewer to determine if tests need to be worked on. Feel free to add coverage ignores for files or lines that given no value in unit testing.  If the coverage is less than 100% on your branch, here's how you can find out which code is not yet being tested:

* after running `npm run test` you will see that an untracked `coverage` directory has been added to the root of the project. Copy the _full_ path to the `index.html` file within the `lcov-report` (it can be found somewhere like `file:///Users/your_name/projects_directory/halfsies/coverage/lcov-report/index.html`).

* using the coverage report in the browser, identify which files have less than 100% coverage for statements, branches, functions, or lines and write tests to cover those cases
