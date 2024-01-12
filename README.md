# Halfsies

[![Netlify Status](https://api.netlify.com/api/v1/badges/8df5e6e8-41ef-4033-bb94-66be32dd29dd/deploy-status)](https://app.netlify.com/sites/halfsies/deploys)

Halfies is a web app that keeps track of money owed between two moderately specific people.

## Setup
You will need two users to use the app. This is done by creating two users in AWS Cognito and adjusting `src/config/awsCognito.js` to match your user pool.

You will then want to install all node packages run:

    npm install

To build all front end assets run:

    npm run build

In order to run the project run:

    npm start

To lint and test run:

    npm test

## Upgrading Node Versoin

When upgrading Node be sure to change versions in `.nvmrc` as well as `.github\workflows\**\*`
