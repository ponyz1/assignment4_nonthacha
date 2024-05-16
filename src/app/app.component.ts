import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurrencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ass4';
}
