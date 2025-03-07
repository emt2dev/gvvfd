import { Component } from '@angular/core';
import { ActionsComponent } from '../../layouts/visitor-layout/components/actions/actions.component';
import { CommunityComponent } from '../../layouts/visitor-layout/components/community/community.component';
import { JoinComponent } from '../../layouts/visitor-layout/components/join/join.component';
import { MdtComponent } from '../../global/components/mdt/mdt.component';

@Component({
  selector: 'app-landing',
  imports: [ActionsComponent, CommunityComponent, JoinComponent, MdtComponent],
  templateUrl: './landing.component.html',
  styles: ``
})
export class LandingComponent {

}
