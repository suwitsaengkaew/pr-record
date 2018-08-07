import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureselect = 'prinput';
  onFeatureSelected(event: string) {
    this.featureselect = event;
    console.log(event);
  }
}
