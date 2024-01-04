import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.css']
})


export class UjfoglalasComponent{

cim = '';
datum = '';
fo = 0;
iranyitoszam = '';
nev = '';

constructor(private base: BaseService){}


  addFoglalas(){

    let cimcim = this.cim.toString();
    let datumdatum = this.datum.toString();
    let fofo = this.fo;
    let irany = this.iranyitoszam.toString();
    let nev = this.nev.toString();
    if(
      cimcim.length>0 &&
      datumdatum.length>0 &&
      irany.length>0 &&
      nev.length>0 &&
      this.fo>1 &&
      this.fo<17
      )
      {
        let foglalas: {
          cim: string,
          datum: string, 
          fo: number,
          iranyitoszam: string, 
          nev: string,
        }= {
          cim : cimcim,
          datum : datumdatum,
          fo : fofo,
          iranyitoszam : irany,
          nev : nev
        };

        this.base.addFoglalas(foglalas).subscribe({
          next:res => {
            console.log("siker")
          }
        })
      }else{console.log("valami nem jó")}
  }
}
