import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [HttpClientModule,JsonPipe,AsyncPipe,NgFor,RouterModule,FormsModule,NgIf],
  providers:[BitcoinService],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  constructor(private bitcoin:BitcoinService){
    
  }
  data: any;
  currencies: any = {};
  time: any = {};
  timeUpdate:any
  service = this.bitcoin.getData()
  ngOnInit(): void {
    this.getData();
    this.getTime()
  }

  getData() {
    this.bitcoin.getData().subscribe((data: any) => {
      this.currencies = data.bpi;
    });
  }
  getTime() {
    this.bitcoin.getData().subscribe((data: any) => {
      this.time = data.time;
      // console.log("qqq")
      // console.log(data.time)
    });
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  getObjectKeysTime(obj: any): string[] {
    // console.log("kkk")
    // console.log(this.data.time)
    return Object.keys(obj);
  }
  
  
}
