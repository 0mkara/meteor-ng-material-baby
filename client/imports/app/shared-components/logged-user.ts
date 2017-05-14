import { OnInit } from "@angular/core";
import { InjectUser } from "angular2-meteor-accounts-ui";

@InjectUser('user')
export class UserData implements OnInit {
    user: Meteor.User;
    ngOnInit() {
        return this.user;
    }
}
