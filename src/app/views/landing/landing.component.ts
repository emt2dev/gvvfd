import { Component } from '@angular/core';
import { ActionsComponent } from '../../layouts/visitor-layout/components/actions/actions.component';
import { CommunityComponent } from '../../layouts/visitor-layout/components/community/community.component';
import { JoinComponent } from '../../layouts/visitor-layout/components/join/join.component';

@Component({
  selector: 'app-landing',
  imports: [ActionsComponent, CommunityComponent, JoinComponent],
  templateUrl: './landing.component.html',
  styles: ``
})
export class LandingComponent {

}
