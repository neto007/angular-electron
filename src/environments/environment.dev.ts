// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `index.ts`, but if you do
// `ng build --env=prod` then `index.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const AppConfig = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyB_1iOhRSdRmEqWVEl8XtVZLSEM2r_cazY",
    authDomain: "electronapp-d2cb6.firebaseapp.com",
    databaseURL: "https://electronapp-d2cb6.firebaseio.com",
    projectId: "electronapp-d2cb6",
    storageBucket: "electronapp-d2cb6.appspot.com",
    messagingSenderId: "352468646900"
  },
  environment: 'DEV'
};
