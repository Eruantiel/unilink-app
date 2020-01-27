import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PrisonerService } from './../../services/prisoner.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PrisonerInterface } from 'src/app/interfaces/prisoner-interface';

@Component({
  selector: 'app-add-prisoner-dialog',
  templateUrl: './add-prisoner-dialog.component.html',
  styleUrls: ['./add-prisoner-dialog.component.scss']
})
export class AddPrisonerDialogComponent implements OnInit {

  passedData: PrisonerInterface;

  prisonerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    prisonCellNumber: new FormControl('', Validators.required),
    intakeDate: new FormControl('', Validators.required),
    locationHistory: new FormArray([], Validators.required)
  });

  get name() {return this.prisonerForm.get('name'); }
  get dateOfBirth() {return this.prisonerForm.get('dateOfBirth'); }
  get prisonCellNumber() {return this.prisonerForm.get('prisonCellNumber'); }
  get intakeDate() {return this.prisonerForm.get('intakeDate'); }
  get locationHistory() {return this.prisonerForm.get('locationHistory') as FormArray; }

  constructor(
    private prisonerService: PrisonerService,
    private dialogRef: MatDialogRef<AddPrisonerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: PrisonerInterface,
  ) {
    if (dialogData) {
      this.passedData = dialogData;
    }
  }

  ngOnInit() {
    if (this.passedData) {
      this.prisonerForm.patchValue(this.passedData);
      this.passedData.locationHistory.forEach((location) => {
        this.addLocation(location.recordDate, location.locationName);
      })
    } else {
      this.addLocation();
    }
  }

  addLocation(date?: Date, locationName?: string) {
    let inputDate: Date = null;
    let inputLocationName = '';
    if (date) {
      inputDate = date;
    }
    if (locationName) {
      inputLocationName = locationName;
    }


    this.locationHistory.push(
      new FormGroup({
        locationName: new FormControl(inputLocationName, Validators.required),
        recordDate: new FormControl(inputDate, Validators.required)
      })
    );
  }

  deleteLocation(i: number) {
    this.locationHistory.removeAt(i);
  }

  savePrisoner() {
    this.dialogRef.close(this.prisonerForm.value);
  }

}
