import { Component, inject } from '@angular/core';
import { PersonSignalService } from '../person-signal.service';
import { PersonDataService } from '../person-data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewPerson } from '../Models/new-person';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { toPersonViewModel } from '../mapper/person.mapper';

@Component({
  selector: 'app-person-create',
  imports: [ReactiveFormsModule],
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})
export class PersonCreateComponent{
  private personSignalService = inject(PersonSignalService);
  private personDataService = inject(PersonDataService);

  form : FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const newPerson : NewPerson = {
      name : this.form.value.name,
      age: this.form.value.age
    }

    this.personDataService.createPerson(newPerson).subscribe({
      next:(createdPerson) => {
        console.log("created person: ", createdPerson);
        const personVM = toPersonViewModel(createdPerson);
        this.personSignalService.setCreatedPerson(personVM);
        this.personSignalService.setCreateSelected(false);
      },
      error: (error) => {
        console.error("Error creating person", error);
      }
    })
  }

  cancel(){
    this.personSignalService.setCreateSelected(false);
  }
}
