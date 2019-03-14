import { NgModule } from '@angular/core';
import { TicTacToeComponent } from './components/tic-tac-toe.component';

const components = [TicTacToeComponent];

@NgModule({
  declarations: components,
  exports: components
})
export class TicTacToeModule {
}
