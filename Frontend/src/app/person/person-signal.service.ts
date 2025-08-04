import { Injectable, signal } from '@angular/core';
import { PersonViewModel } from './Models/person-view-model';

@Injectable({
  providedIn: 'root'
})
export class PersonSignalService {
  // person selected - used for details
  private selectedPersonSignal = signal<PersonViewModel | undefined>(undefined);
  readonly selectedPerson = this.selectedPersonSignal.asReadonly();

  setSelectedPerson(selected : PersonViewModel | undefined){
    this.selectedPersonSignal.set(selected);
  }

  // person created - used when new person is created
  private personCreatedSignal = signal<PersonViewModel | undefined>(undefined);
  readonly createdPerson = this.personCreatedSignal.asReadonly();
  setCreatedPerson(created : PersonViewModel | undefined){
    this.personCreatedSignal.set(created);
  }

  // details selected - used to signal parent componente that details is to be shown
  private detailsSelectedSignal = signal<boolean | undefined>(undefined);
  readonly detailsSelected = this.detailsSelectedSignal.asReadonly();
  setDetailsSelected(selected : boolean){
    this.detailsSelectedSignal.set(selected);
  }

  // create selected - used to signal parent component that create is to be shown
  private createSelectedSignal = signal<boolean | undefined>(undefined);
  readonly createSelected = this.createSelectedSignal.asReadonly();
  setCreateSelected(selected : boolean){
    this.createSelectedSignal.set(selected);
  }
}
