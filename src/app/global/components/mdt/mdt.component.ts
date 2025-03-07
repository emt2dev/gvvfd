import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MdtCallComponent } from '../mdt-call/mdt-call.component';

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
  apiData: any;
  rawData: any;
  ngOnInit(): void {
    this.apiData = signal<any[]>([
      {
        id: new Date(),
        type: 'CommercialFire'.replace(/([a-z])([A-Z])/g, '$1 $2'),
        location: `Gran Vista FD - Roblox - YoDog's house`,
        command: `Zayyy`,
        dispatchedOn: new Date().toISOString().split("T")[0],
        cadDisplay: `ENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSE`,
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
        location: `Yodog's house`,
        command: `Zayyy`,
        dispatchedOn: new Date().toISOString().split("T")[0],
        cadDisplay: `ENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSEENGINE 4 | LADDER 4 RESPOND TO STRUCTURE FIRE AT YODOG'S HOUSE`,
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
}
