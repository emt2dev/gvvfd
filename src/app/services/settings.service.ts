import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  backlight = signal<boolean>(false);

  constructor() {
   }

  toggleBacklight() {
    console.log("prior: ", this.backlight());
    this.backlight.set(!this.backlight());
    console.log("after: ", this.backlight());
  }
}
