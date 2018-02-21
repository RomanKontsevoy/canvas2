import { Component, OnInit } from '@angular/core';
import { Version } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /* Mobile menu */

    const burger = document.querySelector('#burger');
    let hideMobileMenu = true;
    const verticalMenu: any = document.querySelector('nav>ul');
    const windowWidth = document.documentElement.clientWidth;
    function toggle() {  // switches whether the menu is displayed, or the page displays only the burger
      hideMobileMenu = !hideMobileMenu;
    }

    function showVerticalMenu() { // switch is toggling and menu is showing or not according to a state of toggle
      toggle();
      if (hideMobileMenu === false) {
        verticalMenu.style.display = 'inline-block';
      } else { verticalMenu.style.display = 'none'; }
    }

    function closeMenu(e) {    // closing menu by clicking on body except burger and menu
      const target = e.target;
      const burger = target.closest('#burger'); // target is not burger
      const showedMenu = target.closest('nav>ul');  // target is not menu
      if (!burger && !showedMenu) {  // if user clicked not on burger or menu, then function works
        hideMobileMenu = true;
        verticalMenu.style.display = 'none';
      }
    }
    burger.addEventListener('click', showVerticalMenu);
    window.addEventListener('click', closeMenu);

    /*---------------------------------*/

  }

}
