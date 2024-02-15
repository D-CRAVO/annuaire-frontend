import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-autocomplete-filter',
  templateUrl: './autocomplete-filter.component.html',
  styleUrl: './autocomplete-filter.component.css'
})
export class AutocompleteFilterComponent implements OnInit{
  myControl = new FormControl('')
  options: string[] = ['One', 'Two', 'Three']
  filteredOptions: Observable<string[]>
  users: any

  constructor(
    private userService: UserService
  ){
    this.filteredOptions = new Observable<string[]>
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
