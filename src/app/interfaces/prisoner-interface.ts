import { LocationInterface } from './location-interface';

export interface PrisonerInterface {
    id: number;
    name: string;
    dateOfBirth: Date;
    intakeDate: Date;
    prisonCellNumber: number;
    locationHistory: LocationInterface[];
}
