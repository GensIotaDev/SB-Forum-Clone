import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  hidePassword: boolean = true;
  form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      username: ['', {
        validators: [
          Validators.required
        ]
      }],
      password: ['', {
        validators: [
          Validators.required
        ]
      }],
      remember: [false]
    });
  }

  togglePassword(){
    this.hidePassword = !this.hidePassword;
  }
  submit(){
    this.authService.tryLoginWith(this.form.value).subscribe({
        error: (err) => console.log(err),
        complete: () => this.router.navigate(["/"])
    });
  }
}
