import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';


interface CallAssignment {
  id: string;
  vehicle: string;
  crewCount: number;
}

interface MdtCall {
  id: string;
  type: string;
  location: string;
  dispatchedOn: string;
  command: string;
  cadDisplay: string;
  active: boolean;
  callAssignments: CallAssignment[];
}

@Component({
  selector: 'app-mdt-call',
  imports: [CommonModule],
  templateUrl: './mdt-call.component.html',
  styles: `
  /* Adding semi-realistic radio scanner glow effect */
  .glow-effect {
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3);
    border-radius: 8px;
  }

  .max-w-4xl {
    max-width: 800px; /* Set width to 800px to ensure consistent width */
  }

  /* Making background look more realistic with a gradient */
  .bg-gray-100 {
    background: linear-gradient(45deg, #f3f4f6, #d1d5db);
  }

  .bg-gray-600 {
    background: linear-gradient(45deg, #4b5563, #2d3748);
  }

  /* Adding hover effects for interactivity */
  .bg-gray-200:hover, .bg-gray-800:hover {
    background-color: #e5e7eb;
    transition: background-color 0.3s ease;
  }

  .blink {
  animation: blink-animation 2.5s step-start infinite;
}

@keyframes blink-animation {
  50% {
    opacity: 0;
  }
}

p {
font-family: "DS-Digital";
}
`

})

export class MdtCallComponent {
  callData = input.required<MdtCall>();
  radioData = {} as MdtCall;
  // callAssignments = CallAssignment[];
  
  ngOnInit(): void {

    this.radioData = this.callData();
    // this.callAssignments = this.radioData.callAssignments;
  }

  trackById(index: number, item: CallAssignment): string {
    return item.id;  // Use the unique `id` of each assignment to track items
  }
}
