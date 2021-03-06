# Star Wars api - React & Ts

A simple implementation of [SWApi.dev](https://swapi.dev/) with [Create React App](https://github.com/facebook/create-react-app) and Typescript.

  - React (Create-react-app)
  - Typescript
  - React Router
  - Tailwind ( + prettier-plugin-tailwindcss )

## To do

_initial requests_ 

- [x] Routing logic  
- [x] List characters  
- [x] List movies  
- [x] Movie card  
- [x] Character card  
- [x] Movie page  
- [x] Character page  
- [x] Basic styling with Tailwind

_enhancements_ 

- [x] Back button
- [ ] Components for People and Movies infos
- [x] API endpoint as constant in single external file
- [x] Fetch logic of components as external function or, better, custom hook  
- [x] Implement Abort Controller for fetch calls
- [ ] Different UI/functionality for home? Search?
- [ ] Pagination for People
- [ ] Advanced styling and Tailwind customization
- [ ] Planets ?
- [ ] Better solution for list keys (library?)

## Available Scripts

Since this project was bootstrapped with CRA, in the project directory you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
