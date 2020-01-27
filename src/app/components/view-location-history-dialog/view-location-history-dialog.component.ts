import { LocationInterface } from 'src/app/interfaces/location-interface';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-view-location-history-dialog',
  templateUrl: './view-location-history-dialog.component.html',
  styleUrls: ['./view-location-history-dialog.component.scss']
})
export class ViewLocationHistoryDialogComponent implements OnInit {

  displayedColumns = ['locationName', 'recordDate'];
  data: LocationInterface[];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dialogRef: MatDialogRef<ViewLocationHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    this.data = dialogData;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

}
