import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from './Models/person';
import { NewPerson } from './Models/new-person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private httpClient = inject(HttpClient);
  private readonly personApiBaseUrl = environment.personApiBaseUrl;

  constructor() { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.personApiBaseUrl}`);
  }

  createPerson(newPerson : NewPerson): Observable<Person>{
    return this.httpClient.post<Person>(`${this.personApiBaseUrl}`, newPerson);
  }
}
