import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Drug } from '../models/drug.model';
import { Observable } from 'rxjs';
import { AddCart } from '../models/addcart.model';
import { CartAdd } from '../models/cartadd.model';
import { OrderView } from '../models/orderView.model';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  getDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>(this.baseApiUrl + '/api/Drugs');

  }
  getDrug(id: string): Observable<Drug> {
    return this.http.get<Drug>(this.baseApiUrl + '/api/Drugs/' + id);
  }
  updateDrug(id: number, updateDrugRequest: Drug): Observable<Drug>{
    return this.http.put<Drug>(this.baseApiUrl + '/api/Drugs/' + id,updateDrugRequest)
  }
  deleteDrug(id: number): Observable<Drug> {
    return this.http.delete<Drug>(this.baseApiUrl + '/api/Drugs/' + id);
  }
  getDrugByName(name: string): Observable<any> {
    return this.http.get(this.baseApiUrl+'/api/Drugs/'+name);
  }
  postCart(addCartModel:AddCart)
  {
    return this.http.post(this.baseApiUrl + '/api/Cart',addCartModel);
  }
  getCart()
  {
    return this.http.get<AddCart[]>(this.baseApiUrl+'/api/Cart');
  }
  addOrder(cartAdd: CartAdd)
  {
    return this.http.post(this.baseApiUrl+'/api/Order',cartAdd);
  }
  deleteCart(id: number)
  {
    console.log(id);
    return this.http.delete(this.baseApiUrl+'/api/Cart/'+id);
  }
  getUserOrders()
  {
    return this.http.get(this.baseApiUrl+'/api/Order');
  }
  deleteOrder(id:number)
  {
    return this.http.delete(this.baseApiUrl+'/api/Order/'+id);
  }
  getAdminOrders() {
    return this.http.get(this.baseApiUrl+'/api/AdminOrders/');
  }
  getOrderByEmail(useremail:string):Observable<any>
  {
    return this.http.get(this.baseApiUrl+'/api/AdminOrders/'+useremail);
  }
  
  
}
