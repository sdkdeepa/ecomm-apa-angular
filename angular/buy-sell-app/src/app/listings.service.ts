import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })

}
// injected to any component and here it's listing
@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http:HttpClient,
  ) { }
  //here Observable is a generic type here
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions,
    );
  }
  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/users/11111/listings');
  }
  deleteListing(id:string): Observable<any>{
    return this.http.delete(`/api/listings/${id}`)
  }

  createListing(name: string, desciption: string, price: number):Observable<Listing>{
    return this.http.post<Listing>(
      '/api/listings',
      {name, desciption,price},
      httpOptions,
    )
  }

  editListing(id: string, name: string, description: string, price: number): Observable<Listing>{
    return this.http.post<Listing> (
      `/api/listings/${id}`,
      {name, description, price},
      httpOptions,
    )
  }
}
