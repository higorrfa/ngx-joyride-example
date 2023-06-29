import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-joyride-example';

  constructor(private readonly joyrideService: JoyrideService) {}

  onClick() {
    this.joyrideService.startTour({
      steps: [
        'firstStep',
        'secondStep',
        'thirdStep',
        'fourthStep',
        'fifthStep',
      ],
      customTexts: {
        next: '>>',
        prev: '<<',
        done: 'Ok',
      },
    });
  }
}
