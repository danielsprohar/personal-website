import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {}
