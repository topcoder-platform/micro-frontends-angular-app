# Topcoder Angular Microapp Example

This is a [single-spa](https://single-spa.js.org/) example Angular microapp.

> NOTE. This application have been configured to be run as child app of a single-spa application. So while this app can be deployed and run independently, we would need some frame [single-spa](https://single-spa.js.org/) which would load it. While technically we can achieve running this app as standalone app it's strongly not recommended by the author of the `single-spa` approch, see this [GitHub Issue](https://github.com/single-spa/single-spa/issues/640) for details.

## Requirements

- node - v10.22.1
- npm - v6.14.6
- Angular CLI 10

## NPM Commands

| Command               | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `npm start`           | Run server which serves production ready build from `dist` folder |
| `npm run dev`         | Run app in the development mode                                   |
| `npm run dev-https`   | Run app in the development mode using HTTPS protocol              |
| `npm run build`       | Build app for production and puts files to the `dist` folder      |
| `npm run lint`        | Check code for lint errors                                        |
| `npm run test`        | Run unit tests                                                    |

## Local Deployment

Inside the project folder run:

- `npm i` - install dependencies
- `npm run dev` - run app in development mode
- As this app can be loaded only inside a frame single-spa, you have to run a `mfe-core` frame app and configure it to use the URL `http://localhost:4200/main.js`.

## Deployment to Production

   - `npm i` - install dependencies
   - `npm build` - build code to `dist/micro-frontends-angular-app` folder
   - Now you can host `dist/micro-frontends-angular-app` folder using any static server. For example, you may run a simple `Express` server by running `npm start`.

### Deploying to Heroku

Make sure you have [Heroky CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and you have a Heroku account. And then inside the project folder run the next commands:

- If there is not Git repository inited yet, create a repo and commit all the files:
  - `git init`
  - `git add .`
  - `git commit -m'inital commit'`
- `heroku apps:create` - create Heroku app
- `git push heroku master` - push changes to Heroku and trigger deploying
- Now you have to configure frame app to use the URL provided by Heroku like `https://<APP-NAME>.herokuapp.com/main.js` to load this microapp.
