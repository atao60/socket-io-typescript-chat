import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_MODULES } from '../../shared/material/material.module';

import { DialogUserComponent } from './dialog-user.component';

describe('DialogUserComponent', () => {
  let component: DialogUserComponent;
  let fixture: ComponentFixture<DialogUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUserComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        ...MATERIAL_MODULES
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
