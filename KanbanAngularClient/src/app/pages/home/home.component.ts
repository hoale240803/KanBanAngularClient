import { Component, NgModule } from '@angular/core';
import { FirstComponentComponent } from 'src/app/first-component/first-component.component';
import { FirstComponentModule } from 'src/app/shared/components/first-component/first-component.component';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
@NgModule({
  imports: [FirstComponentModule],
})
export class HomeComponent {
  constructor() {}
}
