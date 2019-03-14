import {async, TestBed} from '@angular/core/testing';
import { TicTacToeModule } from './tic-tac-toe.module';
import { TicTacToeComponent } from './components/tic-tac-toe.component';

describe('Tic Tac Toe module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TicTacToeModule],
    }).compileComponents();
  }));

  it('exports the TicTacToeComponent', () => {
    const fixture = TestBed.createComponent(TicTacToeComponent);
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  });
});
