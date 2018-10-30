
# Eiswagentracking dolcevita

┈╭━━━━━━━━━━━─╮♪♫♪♪┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┃┈ＩＣＥ-ＣＲＥＡＭ ┈┈┃♫♪♫┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┃▔▔▔┊┏━┳━┓╭─╮┃♪♫┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┃╱╱╱┊┃╱┃╱┃┃▏│┃♪♫┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╭┻━━┳╯┃╱┃╱┃┃▏│┃♫┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃┛▂┗┊┈┗━┻━┛╰╥╯┃♪┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃╰┻╯┊┈┈┈┈┈┈┈║┈┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┗▃▃▃▃╭╮▃▃▃▃▃╭╮┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈╰╯┈┈╰╯┈┈┈┈┈╰╯┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.
## Make it work

Run `npm install` to get all needed dependencies
Add environments folder to src ... src/environments/
Then add environment.ts in the new folder. It should look like this: 

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',

  firebase: {
    YOUR API INFORMATION
  },

  mapbox: {
    accessToken: YOUR API KEY
  },

  googleMapsKey: YOUR API KEY

};

Also add images folder to backend
Then create .env file and add 

MONGODB_URI= YOUR DATABASE CONNECTION
JWT_KEY= YOUR KEY

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Documentation

Run `npm run compodoc` for a compodoc documentation server `http://localhost:8080/`.

