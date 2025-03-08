import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MdtCallComponent } from '../mdt-call/mdt-call.component';
import { SettingsService } from '../../../services/settings.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mdt',
  imports: [CommonModule, MdtCallComponent],
  templateUrl: './mdt.component.html',
  styles: 
`
  p {
  font-family: "DS-Digital";
  }`
})
export class MdtComponent {
  settingsService = inject(SettingsService);
  apiData: any;
  rawData: any;
  toggleBacklight: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  // Use BehaviorSubject

  ngOnInit(): void {
    this.apiData = signal<any[]>([
      {
        id: new Date(),
        type: 'CommercialFire'.replace(/([a-z])([A-Z])/g, '$1 $2'),
        location: `DONUT SHOP`,
        command: `Zayyy`,
        dispatchedOn: new Date().toISOString().split("T")[0],
        cadDisplay: `ENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT DONUT SHOP`,
        active: true,
        callAssignments: [
          {
            id: new Date(),
            vehicle: 'Ambulance 1',
            crewCount: 3,
          },
          {
            id: new Date(),
            vehicle: 'Firetruck 2',
            crewCount: 5,
          },
        ],
      },
      {
        id: new Date(),
        type: 'CommercialFire'.replace(/([a-z])([A-Z])/g, '$1 $2'),
        location: `MAIN STREET`,
        command: `Zayyy`,
        dispatchedOn: new Date().toISOString().split("T")[0],
        cadDisplay: `ENGINE RESCUE 4 RESPOND TO MVA AT MAIN STREET`,
        active: false,
        callAssignments: [
          {
            vehicle: 'Ambulance 1',
            crewCount: 3,
          },
          {
            vehicle: 'Firetruck 2',
            crewCount: 5,
          },
        ],
      },
    ]);

    this.rawData = this.apiData();
  }

  backlightToggle() {
    console.log(this.toggleBacklight.value);  // Log current value
    this.toggleBacklight.next(!this.toggleBacklight.value);  // Update BehaviorSubject value
  }
}
