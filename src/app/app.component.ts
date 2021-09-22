import {Component} from '@angular/core';
import {CustomerModel} from "./models/customer.model";
import {CustomerService} from "./services/customer.service";
import {CountryModel} from "./models/country.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public customers: CustomerModel[] = [];
  public countries: CountryModel[] = [];

  public countryCode: string = '';
  public state: string = '';


  constructor(private customerService: CustomerService) {
    this.countries = [
      {name: 'Cameron', code: '(237)'},
      {name: 'Ethiopia', code: '(251)'},
      {name: 'Morocco', code: '(212)'},
      {name: 'Mozambique', code: '(258)'},
      {name: 'Uganda', code: '(256)'},
    ]

    this.customers = [
      {country: 'Cameron', countryCode: '237', state: 'OK', phoneNumber: '1234568789'}
    ]
  }

  onSubmit() {
    console.log(this.countryCode, this.state)
    this.customerService.getAll(this.countryCode, this.state).subscribe((response: any) => this.customers = [...response.customers])
  }
}
