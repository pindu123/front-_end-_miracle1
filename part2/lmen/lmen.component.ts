import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-lmen',
  templateUrl: './lmen.component.html',
  styleUrls: ['./lmen.component.css']
})
export class LmenComponent {

  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService,private router:Router,private sharedService: SharedService) {}

  

  ngOnInit() {

      this.service.getPosts()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

    addToCart(post: any) {
      // Pass the selected row data to the shared service
      this.sharedService.addToCart(post);
      this.router.navigateByUrl('cart');
    }

}

