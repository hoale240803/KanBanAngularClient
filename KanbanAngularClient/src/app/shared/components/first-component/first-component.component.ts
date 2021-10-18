import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { DxContextMenuModule, DxListModule } from 'devextreme-angular';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    DxListModule,
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [ FirstComponentComponent ],
  exports: [ FirstComponentComponent ]
})

export class FirstComponentModule { }