import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from '../utilityservice.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  getdata:any=[];
  allActData:any=[];
  getRecentData:any=[];
  recentActData:any=[];
  
  constructor(private _service:UtilityserviceService) { }

  ngOnInit(): void {
    this._service.getActs().subscribe(res=>
      {
        this.getdata=res;
  
        //this.totaluser=res.length;
        res.filter((x:any)=> {return x>1})
  
  
        console.log(this.getdata.length);
  
        console.log(this.getdata.filter((x:any)=> {return x.userId}))
        this.allActData=this.getdata.filter((x:any)=> {return x.userId})


  
      })  

      this._service.getFrequentlyAccessesActs().subscribe(res=>
        {
          this.getRecentData=res;
    
          //this.totaluser=res.length;
          res.filter((x:any)=> {return x>1})
    
    
          console.log(this.getdata.length);
    
          console.log(this.getdata.filter((x:any)=> {return x.userId}))
          this.recentActData=this.getdata.filter((x:any)=> {return x.userId})
  
  
    
        })  
    
  }

  

}

