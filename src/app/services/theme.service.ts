import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _isDarkTheme$ = new BehaviorSubject<boolean>(true);
  readonly isDarkTheme$ = this._isDarkTheme$.asObservable();

  readonly mql$ = fromEvent(
    window.matchMedia('(prefers-color-scheme: dark)'),
    'change'
  ).pipe(
    shareReplay(),
    map((event: Event) => event.target as MediaQueryList)
  );

  constructor() {}

  toggle() {
    this._isDarkTheme$.next(!this._isDarkTheme$.value);
  }

  setLightTheme() {
    this._isDarkTheme$.next(false);
  }

  setDarkTheme() {
    this._isDarkTheme$.next(true);
  }
}
