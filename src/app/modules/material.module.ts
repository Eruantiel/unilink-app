import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatDialogConfig,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatCardModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [
    MatDatepickerModule,
    MatDialogConfig,
  ]
})

export class MaterialModule {}
