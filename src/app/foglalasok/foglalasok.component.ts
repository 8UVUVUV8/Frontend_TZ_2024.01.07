import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent{
  foglalasok:any;

  constructor(private base: BaseService){
    this.getFoglalasok();
  }
    

  getFoglalasok() {
    this.base.getFoglalasok().subscribe({
      next: data => {
        this.foglalasok = data;
        console.log(this.foglalasok)
      },
      error: err =>{
        console.log('hiba az adatok lekérésében');
      }
    });
  }
}
