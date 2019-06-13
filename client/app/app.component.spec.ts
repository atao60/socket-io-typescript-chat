import { async, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MATERIAL_MODULES } from './shared/material/material.module';

import { AppComponent } from './app.component';

const dialogMock = {
  open: () => ({
    afterClosed: () => {}
  })
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: dialogMock}
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ...MATERIAL_MODULES
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Typescript Chat'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Typescript Chat');
  }));

  it('should render menu in a mat-icon tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar mat-icon').textContent).toContain('menu');
  }));
});
