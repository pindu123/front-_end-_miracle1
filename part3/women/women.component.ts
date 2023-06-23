import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  posts:any[]=[];
  title: any;
  cartItems: any[] = []; 
  

  constructor(private service:PostService,private router:Router,private sharedService: SharedService) {}

  

  ngOnInit() {

      this.service.getpost1()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });
      }
        addToCart(item: any) {
          // Pass the selected row data to the shared service
          this.sharedService.addToCart(item);
          this.router.navigateByUrl('cart');
        }

}
