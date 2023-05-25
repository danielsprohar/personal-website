import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarComponent, RouterOutlet],
})
export class AppComponent implements OnDestroy, OnInit {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly themeService: ThemeService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    // Set the app theme based on the user's preferred color scheme
    this.themeService.mql$
      .pipe(
        takeUntil(this.destroy$),
        map((mql: MediaQueryList) => mql.matches)
      )
      .subscribe((isDarkTheme: boolean) => {
        if (isDarkTheme) {
          this.themeService.setDarkTheme();
        } else {
          this.themeService.setLightTheme();
        }
      });

    this.themeService.isDarkTheme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDarkTheme: boolean) => {
        this.setTheme(isDarkTheme);
      });
  }

  getRootElement(): HTMLElement {
    let node: HTMLElement = this.el.nativeElement.parentNode;
    while (node.parentElement !== null) {
      node = node.parentElement;
    }

    return node;
  }

  setTheme(isDarkTheme: boolean) {
    // Reference:
    // https://getbootstrap.com/docs/5.3/customize/color-modes/#enable-dark-mode
    const html: HTMLElement = this.getRootElement();
    this.renderer.setAttribute(
      html,
      'data-bs-theme',
      isDarkTheme ? 'dark' : ''
    );
  }
}
