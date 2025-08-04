import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PersonViewModel } from '../Models/person-view-model';
import { PersonDataService } from '../person-data.service';
import { PersonListComponent } from '../person-list/person-list.component';
import { Person } from '../Models/person';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import { PersonCreateComponent } from '../person-create/person-create.component';
import { toPersonViewModel } from '../mapper/person.mapper';
import { PersonSignalService } from '../person-signal.service';

@Component({
  selector: 'app-person-parent',
  imports: [PersonListComponent, PersonDetailsComponent, PersonCreateComponent],
  templateUrl: './person-parent.component.html',
  styleUrl: './person-parent.component.css'
})
export class PersonParentComponent implements OnInit{
  private personDataService = inject(PersonDataService);
  private personSignalService = inject(PersonSignalService)
  
  persons = signal<PersonViewModel[]>([]);
  detailsSelected = this.personSignalService.detailsSelected;
  createSelected = this.personSignalService.createSelected;

  ngOnInit(){
    this.personDataService.getPersons().subscribe({
      next: (data) => {
        const personsVM = data.map(toPersonViewModel);
        this.persons.set(personsVM);
      },
      error: (err) => {
        alert("Error loading persons"),
        console.error(err)
      }
    });
  }

  constructor(){
    effect(() => {
      const createdPerson = this.personSignalService.createdPerson();
      if(createdPerson){
        this.persons.update(currentPersons => [...currentPersons, createdPerson]);
      }
    });
  }

  createPerson(){
    this.personSignalService.setCreateSelected(true);
  }
}
