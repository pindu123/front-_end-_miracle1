import { Component } from '@angular/core';
// iimport { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) { }

  onSubmit() {
    // Perform form submission logic here

    // Redirect to the thank you page
    this.router.navigateByUrl('/thank');
  }
  }

