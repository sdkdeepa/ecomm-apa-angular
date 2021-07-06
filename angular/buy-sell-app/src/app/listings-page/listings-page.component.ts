import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

//RxJS & HTTPClient - to make Network requests in Angular
//RxJS is a library that makes it working with async and event based code  lot easier
//HTTP Client - an angular module to make the request to the server


@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];
s
  constructor(
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    //fetching our listing here will increase the code and will be hard to maintain. So create listing service.
    this.listingsService.getListings()
      .subscribe(listings => this.listings =listings)
  }
}