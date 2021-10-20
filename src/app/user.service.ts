import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    // this.userData.push(user)
    return this.http.post(`https://studentadminapi.herokuapp.com/user-create`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://studentadminapi.herokuapp.com/user-list`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://studentadminapi.herokuapp.com/user-edit/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.post(`https://studentadminapi.herokuapp.com/user-edit/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.post(`https://studentadminapi.herokuapp.com/user-delete/${id}`,"")
  }
}
