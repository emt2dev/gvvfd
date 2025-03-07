import { Component } from '@angular/core';
import { MdtComponent } from '../../../global/components/mdt/mdt.component';
import { TagoutBoardComponent } from '../../../layouts/agency-layout/components/tagout-board/tagout-board.component';
@Component({
  selector: 'app-dashboard',
  imports: [MdtComponent, TagoutBoardComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
