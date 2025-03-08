import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shifts',
  imports: [ReactiveFormsModule],
  templateUrl: './shifts.component.html',
  styles: ``
})
export class ShiftsComponent {
  shiftForm!: FormGroup
  rosterMembers: any[] = []; 

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.shiftForm = this.fb.group({
      active: [false],
      rosterCount: [null, [Validators.required, Validators.min(1)]],
      callCount: [null, [Validators.required, Validators.min(1)]],
      commanderUserId: [null, Validators.required],
      hostUserId: [null, Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required],
      shiftAssignments: this.fb.array([this.createAssignment()])
    });
    // Simulate getting the roster members from a service or API
    this.loadRosterMembers();
  }

  loadRosterMembers(): void {
    // This is where you would fetch your roster members from an API or service
    this.rosterMembers = [
      { id: 1, discordName: 'JohnDoe', rpRank: 'Captain' },
      { id: 2, discordName: 'JaneSmith', rpRank: 'Lieutenant' },
      // Add more members as needed
    ];
  }
  get shiftAssignments() {
    return this.shiftForm.get('shiftAssignments') as FormArray;
  }

  createAssignment(): FormGroup {
    return this.fb.group({
      id: [null],
      isNew: [false],
      rosterMemberId: [null, Validators.required],
      isCommand: [false],
      isOfficer: [false],
      isMedical: [false],
      isProbationary: [false],
      unitCallSign: ['', [Validators.maxLength(8)]],
      vehicleCallSign: ['', [Validators.maxLength(20)]]
    });
  }

  addAssignment(): void {
    this.shiftAssignments.push(this.createAssignment());
  }

  removeAssignment(index: number): void {
    this.shiftAssignments.removeAt(index);
  }

  onSubmit(): void {
    if (this.shiftForm.valid) {
      const shiftData = this.shiftForm.value;
      console.log('Shift Data:', JSON.stringify(shiftData));

      // Send data to your Spring Boot API
      // this.http.post('http://your-api-endpoint/shift', shiftData)
      //   .subscribe(response => {
      //     console.log('API Response:', response);
      //   }, error => {
      //     console.error('Error submitting data:', error);
      //   });
    }
  }
}