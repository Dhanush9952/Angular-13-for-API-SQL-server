import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";
  readonly PhotoUrl="http://localhost:5000/Photos";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/',val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees');
  }
  addEmployees(val:any){
    return this.http.post(this.APIUrl+'/Employees',val);
  }
  updateEmployees(val:any){
    return this.http.put(this.APIUrl+'/Employees',val);
  }
  deleteEmployees(val:any){
    return this.http.delete(this.APIUrl+'/Employees/',val);
  }

  UploadPhoto(val:any)
  {
    return this.http.post(this.APIUrl+'/Employees/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }
}
