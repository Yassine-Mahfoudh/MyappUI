import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  deleteUsersurl: string;
  addUsersurl : string;
  getUsersurl: string;
  updateUserslurl: string;
  getCurrentUSer : string;
  

  constructor(private http:HttpClient,
    private authService:AuthService) {
    this.deleteUsersurl= 'http://localhost:8080/utilisateur/delete';
    this.getUsersurl= 'http://localhost:8080/utilisateur';
    this.addUsersurl= 'http://localhost:8080/utilisateur/add';
    this.updateUserslurl= 'http://localhost:8080/utilisateur/update';
    this.getCurrentUSer= 'http://localhost:8080/utilisateur/username';

   }

   deleteUsers(users : Users):Observable<Users>
    {
      return this.http.delete<Users>(this.deleteUsersurl+'/'+users.id);   
    }

   addUsers(users : Users):Observable<Users>{
     return this.http.post<Users>(this.addUsersurl,users);
    }
    getUsers():Observable<Users[]>
    {
      return this.http.get<Users[]>(this.getUsersurl);   
    }
     
    getCurrentUser()
    {
      return this.http.get(this.getCurrentUSer);}

    updateUsers(users : Users):Observable<Users>
    {
      return this.http.put<Users>(this.updateUserslurl,users);   
    }

}
