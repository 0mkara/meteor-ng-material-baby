import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { UserData } from '../shared-components/logged-user';
import template from './home.component.html';

@Component({
    selector: 'home',
    template
})
export class HomeComponent extends UserData {
}
