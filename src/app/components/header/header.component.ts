import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // currentActiveId(): String {
  //   this.router.
  //   return '';
  // }

  onTabChange($event: NgbTabChangeEvent) {
    console.log($event);
    this.router.navigate([$event.nextId]);
  }
}
