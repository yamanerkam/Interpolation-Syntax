import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolation-syntax';
  // interpolation data binding one way binding
  // not to use in state changes 
  // cannot use anything that triggers state change such as +=
  name = 'kam'
  num1 = 2
  num2 = 3

  // two way data binding  => ngValue

}
