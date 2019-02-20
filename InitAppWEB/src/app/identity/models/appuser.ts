import {AppUserAddress} from './address';
import { Sample } from 'src/app/samples/models/sample';
export interface AppUser {
    Username: string;
    Password: string;
    Address: AppUserAddress;
    Samples: Sample[];
}
