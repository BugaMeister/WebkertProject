import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubscriptionLike } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { startWith, debounceTime, map, catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { SERVICE_STATE } from 'src/app/shared/enums/service-state.enum';
import { Service } from 'src/app/shared/models/service.model';

export function ServiceSearchForm() : FormGroup{
  return new FormGroup({
    name: new FormControl(''),
    state: new FormControl(''),
});
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  STATES = SERVICE_STATE;

  list$: Observable<Service[]> | null = null;

  options: string[] = [];
  form = ServiceSearchForm();
  filteredOptions$: Observable<string[]> | undefined;

  @Output()
  newItemEvent = new EventEmitter<FormGroup>();
  
  errorObject = null;

  listSub: SubscriptionLike | undefined;

  constructor(private fbs: FbBaseService) { }

  ngOnInit(): void {
    this.get();
    this.listSub = this.list$?.subscribe(item => {
      for(let i in item){
        this.options.push(item[i].name as string) ;
      }
    });

    this.filteredOptions$ = this.form?.get('name')?.valueChanges
    .pipe(
      startWith(''),
      debounceTime(250),
      map(value => this._filter(value))
    );
  }

  addNewItem(value: FormGroup) {
    this.newItemEvent.emit(value);
    this.form?.get('name')?.setValue("");
    this.form?.get('state')?.setValue("");
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.fbs.get('services').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
  ngOnDestroy(): void {
    this.listSub?.unsubscribe();
  }

}
