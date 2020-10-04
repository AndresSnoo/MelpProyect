import { Contact } from './contact.model';
import {Address} from './address.model';

export class Restaurant {
    id: string;
    rating: number;
    name: string;
    contact: Contact;
    address: Address;
}