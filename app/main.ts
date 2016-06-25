// import Angular's browser bootstrap function
import { bootstrap } from '@angular/platform-browser-dynamic';
// import AppComponent
import { AppComponent } from './app.component';

// Notice that we import the bootstrap function from @angular/platform-browser-dynamic, not @angular/core.
// Bootstrapping isn't core because there isn't a single way to bootstrap the app.
// True, most applications that run in a browser call the bootstrap function from this library.

// But it is possible to load a component in a different environment.
// We might load it on a mobile device with Apache Cordova or NativeScript.
bootstrap(AppComponent);