import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [HttpClientModule,JsonPipe,AsyncPipe,NgIf],
  providers:[BitcoinService],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  currencyKey:string = ""
  constructor(private bitcoin: BitcoinService, private route: ActivatedRoute,private router:Router ) { 

  }
  data: any;
  currencies: any = {};
  service = this.bitcoin.getData()
  ngOnInit(): void {
    this.currencyKey = this.route.snapshot.paramMap.get('Id') ?? '';
    this.getData();
  }

  getData() {
    this.bitcoin.getData().subscribe((data: any) => {
      this.currencies = data.bpi;
      this.data = this.currencies[this.currencyKey];
      // console.log("ba")
      // console.log(this.currencyKey)
      // console.log("aa")
      // console.log(this.currencies)

      
      // console.log(this.data)
    });
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  close(){
    this.router.navigate(['/'])
  }
}
