import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gha-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'github-actions_example';
}
