import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-lmain',
  templateUrl: './lmain.component.html',
  styleUrls: ['./lmain.component.css']
})
export class LmainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const previousUrl = this.router.routerState.snapshot.url;
        if (previousUrl === '/lmain') {
          this.router.navigate(['/lmain']);
        }
      }
    });
  }
}
