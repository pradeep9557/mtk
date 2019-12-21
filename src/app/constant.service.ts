import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  BASE_URL = "http://localhost/projects/admin/mtalkies-api";
  fetchData = this.BASE_URL+'/fetchData';
}
