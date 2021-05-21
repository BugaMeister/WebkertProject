import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Service } from 'src/app/shared/models/service.model';
import { EditServiceComponent } from '../edit-service/edit-service.component';
import { RemoveComponent } from '../remove-dialog/remove.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title = 'Filmek';

  @Input()
  service?: Service;

  constructor(private fbs: FbBaseService, private router: Router, private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveComponent, {
      data: { name: this.service?.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fbs.delete("services", this.service?.id as string).then(() => {
          const snackBarRef = this._snackBar.open(this.service?.name + ' service succesfully removed', 'Cancel', {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 3000
          });
          snackBarRef.onAction().subscribe(() => {
            this.fbs.add("services", this.service);
          });
        });
      }
    }, err => {
      console.warn(err);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditServiceComponent, {
      data: { serviceData: this.service },
      backdropClass: 'backdropBackground',
      panelClass: 'editDialogBackground',
    });

  }

}
