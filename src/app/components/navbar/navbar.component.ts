import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  readonly isDarkTheme$ = this.themeService.isDarkTheme$;

  constructor(private readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggle();
  }
}
