import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ContactMeComponent {}
