import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllUser
{
  constructor(
  ){}

  GetUser()
  {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

}
