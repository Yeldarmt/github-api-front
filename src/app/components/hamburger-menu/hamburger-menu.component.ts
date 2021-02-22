import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickHambMenu() {
    this.showMenu = !this.showMenu;
  }

}
