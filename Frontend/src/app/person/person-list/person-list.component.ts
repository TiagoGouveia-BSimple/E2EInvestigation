import { Component, inject, Input } from '@angular/core';
import { PersonViewModel } from '../Models/person-view-model';
import { PersonSignalService } from '../person-signal.service';

@Component({
  selector: 'app-person-list',
  imports: [],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  private personSignalService = inject(PersonSignalService);

  @Input() personsInput: PersonViewModel[] = [];

  selectPerson(person : PersonViewModel){
    this.personSignalService.setSelectedPerson(person);
    this.personSignalService.setDetailsSelected(true);
  }
}
