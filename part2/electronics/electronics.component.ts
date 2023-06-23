import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  // posts:any[]=[];
  // title: any;

  

  // constructor(private service:PostService) {}

  

  // ngOnInit() {

  //     this.service.getpost3()

  //       .subscribe((response: any) => {

  //         this.posts = response;
  //         console.log(this.posts)

  //       });

  //   }



    posts: any[] = [];
  cartItems: any[] = []; // Array to store selected items

  constructor(private service: PostService, private router:Router) {}

  ngOnInit() {
    this.service.getpost3().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  addToCart(post: any) {
    this.cartItems.push(post); // Add selected item to the cart
    this.router.navigateByUrl('cart')
    
  }

}
