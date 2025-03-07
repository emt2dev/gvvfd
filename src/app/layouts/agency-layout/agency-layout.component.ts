import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agency-layout',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './agency-layout.component.html',
  styles: ``
})
export class AgencyLayoutComponent {

}
