import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_MODULES } from '../shared/material/material.module';
import { SocketService } from './shared/services/socket.service';

import { ChatComponent } from './chat.component';
import { DialogUserComponent } from './dialog-user/dialog-user.component';

const dialogMock = {
  open: () => ({
    afterClosed: () => ({
      subscribe: () => {}
    })
  })
};

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SocketService, useValue: new SocketService() },
        { provide: MatDialog, useValue: dialogMock }
      ],
      declarations: [
        DialogUserComponent,
        ChatComponent
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ...MATERIAL_MODULES
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
