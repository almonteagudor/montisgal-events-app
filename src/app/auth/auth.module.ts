import { NgModule } from '@angular/core';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    PrimeNGModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
