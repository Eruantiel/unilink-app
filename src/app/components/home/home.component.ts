import { AddPrisonerDialogComponent } from '../add-prisoner-dialog/add-prisoner-dialog.component';
import { ViewLocationHistoryDialogComponent } from '../view-location-history-dialog/view-location-history-dialog.component';
import { PrisonerInterface } from '../../interfaces/prisoner-interface';
import { PrisonerService } from '../../services/prisoner.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prisonerList: PrisonerInterface[] = [];
  displayedColumns = ['name', 'dateOfBirth', 'intakeDate', 'prisonCellNumber', 'actions'];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private prisonerService: PrisonerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getLoadData();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getLoadData() {
    this.prisonerList = this.prisonerService.getPrisonerList();
    this.dataSource = new MatTableDataSource(this.prisonerList);
    this.dataSource.sort = this.sort;
  }

  showLocationHistory(prisoner) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '40vw';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.data = prisoner.locationHistory;

    this.dialog.open(ViewLocationHistoryDialogComponent, dialogConfig);
  }

  addPrisoner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '20vh';
    dialogConfig.minWidth = '40vw';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';

    this.dialog.open(AddPrisonerDialogComponent, dialogConfig)
    .afterClosed()
    .subscribe((data) => {
      if (data) {
        if (this.prisonerService.addPrisoner(data)) {
          this.getLoadData();
          this.openSnackBar('Prisoner added successfully', 'success-skin');
        }
      }
    });
  }

  deletePrisoner(prisoner) {
    if (this.prisonerService.deletePrisoner(prisoner.id) === 200) {
      this.getLoadData();
      this.openSnackBar('Prisoner deleted successfully', 'success-skin');
    } else {
      this.getLoadData();
      this.openSnackBar('Failed to delete prisoner', 'fail-skin');
    }
  }

  editPrisoner(prisoner) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '20vh';
    dialogConfig.minWidth = '40vw';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.data = prisoner;

    this.dialog.open(AddPrisonerDialogComponent, dialogConfig)
    .afterClosed()
    .subscribe((data) => {
      if (data) {
        if (this.prisonerService.editPrisoner(data) === 200) {
          this.getLoadData();
          this.openSnackBar('Prisoner successfully edited', 'success-skin');
        } else {
          this.getLoadData();
          this.openSnackBar('Failed to edit prisoner', 'fail-skin');
        }
      }
    });
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass,
      duration: 100000
    });
  }

}
