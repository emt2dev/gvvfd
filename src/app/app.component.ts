import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgencyStore } from './stores/agencyStore';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [AgencyStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gvvfd';
}
