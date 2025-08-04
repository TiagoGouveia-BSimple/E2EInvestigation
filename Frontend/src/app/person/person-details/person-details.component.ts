import { Component, effect, inject, Input } from '@angular/core';
import { PersonViewModel } from '../Models/person-view-model';
import { PersonSignalService } from '../person-signal.service';

@Component({
  selector: 'app-person-details',
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  private personSignalService = inject(PersonSignalService);

  person: PersonViewModel | undefined;

  constructor() {
    effect(() => {
      this.person = this.personSignalService.selectedPerson();
    });
  }

  cancel(){
    this.personSignalService.setDetailsSelected(false);
  }
}
