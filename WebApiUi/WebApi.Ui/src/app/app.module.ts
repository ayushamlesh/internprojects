import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsListComponent } from './components/drugs/drugs-list/drugs-list.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { FormsModule } from '@angular/forms';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { JwtInterceptor } from './components/login/user-login/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { DisplayDrugComponent } from './components/drugs/display-drug/display-drug.component';
import { UserCartComponent } from './components/drugs/user-cart/user-cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AdminorderListComponent } from './components/adminorder-list/adminorder-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugsListComponent,
    HomeListComponent,
    AddDrugComponent,
    EditDrugComponent,
    UserLoginComponent,
    SignUpComponent,
    DisplayDrugComponent,
    UserCartComponent,
    OrderListComponent,
    AdminorderListComponent,
    CheckoutComponent,
    ConfirmationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
