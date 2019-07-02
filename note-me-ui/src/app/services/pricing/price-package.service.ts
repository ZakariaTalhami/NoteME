import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pricePackage } from 'src/app/models/pricing/pricePackage.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PricePackageService {

  private _monthlyPricing: BehaviorSubject<pricePackage[]>;
  private _yearlyPricing: BehaviorSubject<pricePackage[]>;

  private monthPricingList: pricePackage[] = [
    {
      boardCount: 1,
      colabCount: 3,
      packageIcon: "asdsad",
      packageName: "Free Package",
      pricePerMonth: 0
    },
    {
      boardCount: 3,
      colabCount: 5,
      packageIcon: "asdsad",
      packageName: "Starter Package",
      pricePerMonth: 10
    },
    {
      boardCount: 10,
      colabCount: 20,
      packageIcon: "asdsad",
      packageName: "Growing Business",
      pricePerMonth: 50
    },
    {
      boardCount: -1,
      colabCount: -1,
      packageIcon: "asdsad",
      packageName: "Organization",
      pricePerMonth: 150
    }
  ]

  private yearPricingList: pricePackage[] = [
    {
      boardCount: 1,
      colabCount: 3,
      packageIcon: "asdsad",
      packageName: "Free Package",
      pricePerMonth: 0
    },
    {
      boardCount: 3,
      colabCount: 5,
      packageIcon: "asdsad",
      packageName: "Starter Package",
      pricePerMonth: 6
    },
    {
      boardCount: 10,
      colabCount: 20,
      packageIcon: "asdsad",
      packageName: "Growing Business",
      pricePerMonth: 40
    },
    {
      boardCount: -1,
      colabCount: -1,
      packageIcon: "asdsad",
      packageName: "Organization",
      pricePerMonth: 120
    }
  ]

  constructor(private http: HttpClient) {
    this._monthlyPricing = new BehaviorSubject<pricePackage[]>([]);
    this._yearlyPricing = new BehaviorSubject<pricePackage[]>([]);
  }


  public get monthlyPricing(): Observable<pricePackage[]> {
    if (this._monthlyPricing.getValue().length === 0) {
      // this.getPricingPackages()
      this._monthlyPricing.next(this.monthPricingList);
    }
    return this._monthlyPricing.asObservable()
  }

  public get yearlyPricing(): Observable<pricePackage[]> {
    if (this._yearlyPricing.getValue().length === 0) {
      // this.getPricingPackages()
      this._yearlyPricing.next(this.yearPricingList);
    }
    return this._yearlyPricing.asObservable()
  }

  private getPricingPackages() {
    this.http.get("").pipe(
      tap((data) => {
        this._monthlyPricing.next(data['monthly'])
        this._yearlyPricing.next(data['yearly'])
      })
    )
  }

}
