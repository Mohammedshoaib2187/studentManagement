import { Injectable } from '@angular/core';
import { User } from './modal';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userData:Array<User>=[];
  constructor() { }
  saveuser(user:Object){

  }
}
