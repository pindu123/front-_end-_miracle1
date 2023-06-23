import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-lkids',
  templateUrl: './lkids.component.html',
  styleUrls: ['./lkids.component.css']
})
export class LkidsComponent implements OnInit{
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService,private router:Router,private sharedService: SharedService) {}

  

  ngOnInit() {

      this.service.getpost2()

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
