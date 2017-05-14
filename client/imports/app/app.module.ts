import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component.web";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { HOME_DECLARATIONS } from './home';
import { SHARED_DECLARATIONS } from './shared';
import { AUTH_DECLARATIONS } from "./auth/index";

let moduleDefinition;

if (Meteor.isCordova) {
    moduleDefinition = {
        imports: [],
        declarations: [
            ...SHARED_DECLARATIONS
        ],
        providers: [],
        bootstrap: [],
        entryComponents: []
    }
}
else {
    moduleDefinition = {
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(routes),
            AccountsModule,
            MaterialModule,
            BrowserAnimationsModule
        ],
        declarations: [
            AppComponent,
            ...HOME_DECLARATIONS,
            ...SHARED_DECLARATIONS,
            ...AUTH_DECLARATIONS
        ],
        providers: [
            ...ROUTES_PROVIDERS
        ],
        bootstrap: [
            AppComponent
        ]
    }
}

@NgModule(moduleDefinition)
export class AppModule { }
