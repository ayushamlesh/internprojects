import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private router: Router) { }

  placeOrder() {
    // Simulate order placement logic or any other actions you want to perform

    // Prepare data to pass to the confirmation component
    const orderDetails = {
      // Include any relevant order details here
      orderNumber: '123456789',
      orderDateTime: new Date().toISOString(),
      // ...
    };

    // Create navigation extras object to pass data
    const navigationExtras: NavigationExtras = {
      state: {
        order: orderDetails
      }
    };

    // Redirect to the Order Confirmation component with data
    this.router.navigate(['/confirmation'], navigationExtras);
  }
}