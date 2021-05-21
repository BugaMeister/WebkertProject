import { Component, Input, OnInit } from '@angular/core';
import { SERVICE_STATE } from 'src/app/shared/enums/service-state.enum';
import { getServiceForm } from 'src/app/shared/forms/service.form';
import { getNoteForm } from 'src/app/shared/forms/note.form';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { getResourceForm } from 'src/app/shared/forms/resource.form';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Service } from 'src/app/shared/models/service.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup | null = null;
  serviceObj?: Service;

  @Input()
  STATES: any = SERVICE_STATE;
  errorMessage: string | undefined;

  constructor(private service: FbBaseService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getServiceForm();
    this.form?.get('state')?.setValidators(Validators.required);
    this.form?.get('name')?.setValidators(Validators.required);
    this.form?.get('isServiceEnabled')?.setValue("true");
    this.form?.get('isStateful')?.setValue("true");
  }

  log(): void {
    //serviceDate A string. Date when the service was created (whatever its status).
    //hasStarted can calculated from start date

    this.form?.get('serviceDate')?.setValue(new Date());
    const startDate = Date.parse(this.form?.get("startDate")?.value) - Date.parse( this.form?.get('serviceDate')?.value);
    if(startDate > 0){
      this.form?.get('hasStarted')?.setValue("false");
    }else{
      this.form?.get('hasStarted')?.setValue("true");
    }

    if(Date.parse(this.form?.get("startDate")?.value) > Date.parse(this.form?.get("endDate")?.value)){
      this.errorMessage = "Start date can't be after end date";
    }else{
      //push to fb
      this.serviceObj = this.form?.value as unknown as Service;
      this.service.add("services", this.serviceObj).then(() => {
        this._snackBar.open('New service succesfully added', 'cool cool cool', {
          horizontalPosition: "center",
          verticalPosition: "bottom",
          duration: 1500
        });
      });
    }
    
  }

  get getNote(): FormArray {
    return this.form?.get('notes') as FormArray;
  }

  addNote(): void {
    const idFormArray = this.form?.get('notes') as FormArray;
    idFormArray.push(getNoteForm());
  }

  removeNote(index: number): void {
    const formArray = this.form?.get('resources') as FormArray;
    formArray.removeAt(index);
  }

  get getResource(): FormArray {
    return this.form?.get('resources') as FormArray;
  }

  addResource(): void {
    const idFormArray = this.form?.get('resources') as FormArray;
    idFormArray.push(getResourceForm());
  }

  removeResource(index: number): void {
    const formArray = this.form?.get('resources') as FormArray;
    formArray.removeAt(index);
  }

}
