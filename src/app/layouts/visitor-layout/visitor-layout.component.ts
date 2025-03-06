import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-visitor-layout',
  imports: [NavbarComponent, HeroComponent, DisclaimerComponent, RouterOutlet, FooterComponent],
  templateUrl: './visitor-layout.component.html',
  styles: ``
})
export class VisitorLayoutComponent {

}
