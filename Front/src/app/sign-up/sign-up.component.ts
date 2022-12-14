import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  signupForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    id: [''],
    lastName: [''],
    cellphone: [''],
    businessName: [''],
    passwordVal: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  onLogin() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log(this.signupForm.value);
  }
}
