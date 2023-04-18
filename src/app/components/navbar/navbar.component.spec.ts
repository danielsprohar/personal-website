import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../../app.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent },
          { path: 'contact', component: ContactComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to the home page', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const homeLink: HTMLAnchorElement | null = compiled.querySelector(
      '[data-test="homeLink"]'
    );

    expect(homeLink).toBeTruthy();
  });

  it('should have a link to the contact page', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const contactLink: HTMLAnchorElement | null = compiled.querySelector(
      '[data-test="contactLink"]'
    );

    expect(contactLink).toBeTruthy();
  });
});
