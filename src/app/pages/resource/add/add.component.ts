import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { getResourceForm } from 'src/app/shared/forms/resource.form';
import { Resources } from 'src/app/shared/models/resources.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup | null = null;
  resource: Resources;
  list$: Observable<Resources[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService, private _snackBar: MatSnackBar) {
    this.resource = { name: "" };
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('resources').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  ngOnInit(): void {
    this.initForm();
    this.get();
  }

  initForm(): void {
    this.form = getResourceForm();
    this.form?.get('name')?.setValidators(Validators.required);
  }

  addResource(): void {
    this.resource.name = this.form?.get('name')?.value;
    this.service.add("resources", this.resource).then(() => {
      this._snackBar.open('New resource succesfully added', 'Neat', {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 1500
      });
    });
  }
}
