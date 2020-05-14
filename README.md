# Framework.UI

## Structure directory

|-- app
    |-- modules*
       |-- [feature-component]
          |-- [+] component
          |-- [+] model **( if has )
          |-- [+] services ** ( if has )
          |-- home.module.ts
    |-- core
      |-- [+] authentication **( if has )
      |-- [+] guards
      |-- [+] http
      |-- [+] interceptors
      |-- [+] mocks
      |-- [+] services
      |-- [+] configs
      |-- core.module.ts
      |-- logger.service.ts
    |-- pages*
|-- assets
     |-- scss
          |-- [+] partials
          |-- [+] images (all imagens must be .webp extension)
          |-- styles.scss

### Folder Definitions

* core - Essentials services, components or any stuff to run your application

* pages - Component clusters to create a page, using only component declarations, with no service layers. (Must have routing)

* [feature-component] - Component with only one feature and / or variations of the same feature, depending on the same service layer
  * (It is not recommended to create dependency between the components created. If there is dependency, be careful not to generate coupling)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
