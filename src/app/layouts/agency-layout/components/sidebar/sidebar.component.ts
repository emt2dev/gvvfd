import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styles: `/* Ensure <li> elements take up the full width of their parent */
ul.menu li {
  width: 100%;
}

/* Make the <a> elements fill their parent <li> element */
ul.menu li a {
  display: block;
  width: 100%;
  text-align: center; /* Optional: for centering text inside the button */
  padding: .5rem; /* Optional: adjust padding to make the button look better */
}
`
})
export class SidebarComponent {

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
