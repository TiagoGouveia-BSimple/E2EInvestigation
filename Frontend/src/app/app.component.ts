import { Component } from '@angular/core';
import { PersonParentComponent } from './person/person-parent/person-parent.component';

@Component({
  selector: 'app-root',
  imports: [PersonParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
