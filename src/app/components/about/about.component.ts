import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}
    ngOnInit(): void {
        AOS.init();
    }
  
  // constructor(private router: Router) {}
  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       const tree = this.router.parseUrl(this.router.url);
  //       if (tree.fragment) {
  //         const element = document.getElementById(tree.fragment);
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //         }
  //       }
  //     }
  //   });
  // }  
}
