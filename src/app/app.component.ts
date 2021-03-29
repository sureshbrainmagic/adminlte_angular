import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout!: boolean;

  constructor(
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.layoutService.isCustomLayout.subscribe(value => {
      this.customLayout = value;
    });
  }
}
