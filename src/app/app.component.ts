import { Component } from '@angular/core';
import { PrinputdataModel } from './shared/pr.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prinputdatas: PrinputdataModel;
  featureselect = 'prinput';
  onFeatureSelected(event: string) {
    this.featureselect = event;
    console.log(event);
  }

  onSaveprData(event: PrinputdataModel) {
    this.prinputdatas = event;
  }
}
