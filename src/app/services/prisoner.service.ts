import { PrisonerInterface } from '../interfaces/prisoner-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrisonerService {

  nextId = 4;

  prisonerA: PrisonerInterface = {
    id: 0,
    name: 'Andrew Smith',
    dateOfBirth: new Date(1996, 10, 20),
    intakeDate: new Date(2014, 1, 1, 6, 30),
    prisonCellNumber: 1,
    locationHistory: [
      {
        locationName: 'cell',
        recordDate: new Date(2018, 1, 1, 6, 30)
      }, {
        locationName: 'cafateria',
        recordDate: new Date(2019, 2, 2, 6, 30)
      }, {
        locationName: 'nurse',
        recordDate: new Date(2019, 5, 2, 4, 30)
      },
    ]
  };

  prisonerB: PrisonerInterface = {
    id: 1,
    name: 'Bob Brown',
    dateOfBirth: new Date(1980, 5, 30),
    intakeDate: new Date(2014, 1, 1, 6, 30),
    prisonCellNumber: 2,
    locationHistory: [
      {
        locationName: 'cafateria',
        recordDate: new Date(2015, 3, 14, 6, 40)
      }, {
        locationName: 'nurse',
        recordDate: new Date(2016, 2, 2, 6, 30)
      }
    ]
  };

  prisonerC: PrisonerInterface = {
    id: 2,
    name: 'Charlie Petersburg',
    dateOfBirth: new Date(2000, 4, 2),
    intakeDate: new Date(2014, 1, 1, 6, 30),
    prisonCellNumber: 4,
    locationHistory: [
      {
        locationName: 'nurse',
        recordDate: new Date(2020, 1, 5, 6, 30)
      }
    ]
  };

  prisonerD: PrisonerInterface = {
    id: 3,
    name: 'Daniel Hensworth',
    dateOfBirth: new Date(2002, 2, 1),
    intakeDate: new Date(2019, 1, 15, 6, 30),
    prisonCellNumber: 4,
    locationHistory: [
      {
        locationName: 'nurse',
        recordDate: new Date(2019, 11, 23, 7, 30)
      }
    ]
  };

  prisonerList: PrisonerInterface[] = [this.prisonerA, this.prisonerB, this.prisonerC, this.prisonerD];

  getPrisonerList(): PrisonerInterface[] {
    return this.prisonerList;
  }

  addPrisoner(prisoner: PrisonerInterface): number {
    prisoner.id = this.nextId;
    this.nextId++;
    this.prisonerList.push(prisoner);
    return 200;
  }

  deletePrisoner(id: number): number {
    const index = this.prisonerList.findIndex(i => i.id === id);
    if (index === -1) {
      return 404;
    } else {
      this.prisonerList.splice(index, 1);
      return 200;
    }
  }

  editPrisoner(prisoner: PrisonerInterface): number {
    const index = this.prisonerList.findIndex(i => i.id === prisoner.id);
    if (index === -1) {
      return 404;
    } else {
      this.prisonerList[index] = prisoner;
      return 200;
    }
  }

  getPrisoner(id: number) {
    const index = this.prisonerList.findIndex(i => i.id === id);
    if (index === -1) {
      return 404;
    } else {
      return this.prisonerList[index];
    }
  }


}
