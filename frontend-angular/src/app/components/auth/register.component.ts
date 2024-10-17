import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm : FormGroup;
  date = Date.now();
  showPassword = false;

  local_formats = [
    'en-US', 'en-GB'
  ]
  date_formats: Intl.DateTimeFormatOptions[] = [
    { month: 'long', day: 'numeric', year: 'numeric' },
    { month: 'short', day: 'numeric', year: 'numeric' }
  ];
  time_formats: Intl.DateTimeFormatOptions[] = [
    { hour: 'numeric', hour12: false, minute: 'numeric' },
    { hour: 'numeric', hour12: true, minute: 'numeric' }
  ];

  constructor(private auth: AuthService, private router: Router, formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      username: ['', {
        validators: [
          Validators.required,
          Validators.minLength(4)
        ]
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(4)
        ]
      }],
      birthday: ['', {
        validators: [
          Validators.required
        ]
      }],
      settings: formBuilder.group({
        locale: ['en-US'],
        date: [0],
        time: [1]
      })
    });
  }

  get locale() {
    return this.registerForm.get(["settings", "locale"])!.value;
  }

  tryRegister() {
    console.warn(this.registerForm.value);
    this.auth.tryRegisterWith(this.registerForm.value).subscribe(res => {
      if(res.valid){
        this.router.navigate(["login"]);
      }
      else{
        console.warn(res.error);
      }
    });
  }

  protected readonly formatDate = formatDate;
  protected readonly Intl = Intl;
}
