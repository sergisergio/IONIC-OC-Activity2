import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from "../../pages/tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {

  mode: string;
  authForm: FormGroup;
  errorMessage;

  constructor(private authService: AuthService,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private formBuilder: FormBuilder,
              public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initForm();
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.mode === 'new') {
      this.authService.signUpUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else if (this.mode === 'connect') {
      this.authService.signInUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
}
