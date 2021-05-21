import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { SERVICE_STATE } from 'src/app/shared/enums/service-state.enum';
import { getNoteForm } from 'src/app/shared/forms/note.form';
import { getResourceForm } from 'src/app/shared/forms/resource.form';
import { getServiceForm } from 'src/app/shared/forms/service.form';
import { Service } from 'src/app/shared/models/service.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  form: FormGroup | null = null;
  STATES: any = SERVICE_STATE;

  loaded: boolean = false;
  errorMessage: string | undefined;
  serviceObj?: Service;

  constructor(public dialogRef: MatDialogRef<CardComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,
    private fbs: FbBaseService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getServiceForm();
    this.form?.get('state')?.setValidators(Validators.required);
    this.form?.get('name')?.setValidators(Validators.required);

    for (let i in this.data.serviceData) {
      if (i != "resources" && i != "notes")
        this.form?.get(i)?.setValue(this.data.serviceData[i]);
    }
    if (this.data.serviceData.startDate != null)
      this.form?.get('startDate')?.setValue(this.data.serviceData.startDate.toDate());
    if (this.data.serviceData.endDate != null)
      this.form?.get('endDate')?.setValue(this.data.serviceData.endDate.toDate());
    for (let i in this.data.serviceData.resources) {
      const res = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(this.data.serviceData.resources[i].name)
      });
      this.form.get('resources')?.value.push(res);
      const idFormArray = this.form?.get('resources') as FormArray;
      idFormArray.push(res);
    }

    for (let i in this.data.serviceData.notes) {
      const res = new FormGroup({
        text: new FormControl(this.data.serviceData.notes[i].text)
      });
      this.form.get('notes')?.value.push(res);
      const idFormArray = this.form?.get('notes') as FormArray;
      idFormArray.push(res);
    }
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

  get getNotes(): FormArray {
    return this.form?.get('notes') as FormArray;
  }

  addNote(): void {
    const idFormArray = this.form?.get('notes') as FormArray;
    idFormArray.push(getNoteForm());
  }

  removeNote(index: number): void {
    const formArray = this.form?.get('notes') as FormArray;
    formArray.removeAt(index);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update(): void {
    if (this.form?.get("startDate")?.value != null && this.form?.get("endDate")?.value != null) {
      if (Date.parse(this.form?.get("startDate")?.value) > Date.parse(this.form?.get("endDate")?.value)) {
        this.errorMessage = "Start date can't be after end date";
      }
    } else {
      this.serviceObj = this.form?.value as unknown as Service;
      this.fbs.update("services", this.serviceObj.id as string, this.serviceObj).then(() => {
        this._snackBar.open(this.serviceObj?.name + ' was succesfully changed', 'cool cool cool', {
          horizontalPosition: "center",
          verticalPosition: "bottom",
          duration: 1500
        });
        this.dialogRef.close();
      });
    }

  }
}
