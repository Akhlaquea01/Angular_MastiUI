ng new <application-name> --create-application=false
ng generate library <library-name>
ng generate component <component-name> --project=masti-ui

ng generate module masti-module
ng generate component masti-button --module=masti-module
ng generate component masti-chips --module=masti-module

export * from './lib/masti-button/masti-button.component';

ng build masti-ui
cd dist/masti-ui
npm pack
npm publish
