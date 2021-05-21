import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<Service[]> | null = null;
  service: Service | undefined;
  scrollButton: boolean = false;

  errorObject = null;

  constructor(private fbs: FbBaseService, private scrollDispatcher: ScrollDispatcher) { }

  getServices($event: FormGroup): void {
    this.errorObject = null;
    this.list$ = this.fbs.getServiceFiltered('services', $event.get('name')?.value, $event.get('state')?.value).pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
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

  ngOnInit(): void {
    this.get();
    this.scrollDispatcher.scrolled().subscribe(x => {
      if (document.documentElement.scrollTop > 400) {
        this.scrollButton = true;
      } else {
        this.scrollButton = false;
      }
    });
  }

  goTop(): void {
    document.documentElement.scrollTop = 0;
  }

}
