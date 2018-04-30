import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.navCtrl.push(TabsPage);
  }
}
