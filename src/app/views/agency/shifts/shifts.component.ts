import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { AgencyService } from '../../../services/agency.service';

@Component({
  selector: 'app-shifts',
  imports: [ReactiveFormsModule],
  templateUrl: './shifts.component.html',
  styles: ``
})
export class ShiftsComponent {
  agencyService = inject(AgencyService);
  rosterMembers = signal<any[]>([]);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadRosterMembers();
  }

  loadRosterMembers(): void {
    const data = this.agencyService.getRosterFromAPI();
    console.log(`shift component:\n${JSON.stringify(data)}`);
    // this.rosterMembers.set();
  }
  
}