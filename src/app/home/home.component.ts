import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
i: any;

  constructor(private http:HttpClient) {}

  @Input()
  fname:string=""
  @Input()
  charStatus:string=""
  gender:string="All"
  searchWord:string=""

  arr:any [] = []
  charsearch:any = []
  randomarr:any [] = []

  ngOnInit():void{
    var api=""
      if(this.fname=="" && this.charStatus==""){
        api="https://rickandmortyapi.com/api/character"
      }else{
        this.fname=this.fname.split(" ")[0];
        api=`https://rickandmortyapi.com/api/character/?name=${this.fname}&status=${this.charStatus}`
      }

      this.http.get(api).subscribe((response:any) => {
      this.arr = response.results
      this.charsearch = response.results
      console.log(this.arr);
      let randIndex:number = Math.floor(Math.random() * (this.arr.length-6)+3)
      this.randomarr = this.arr.splice(randIndex,3)
      console.log(this.randomarr,randIndex);
    })
  }
  search(){
    if(this.searchWord!=""){
      this.arr=this.arr.filter((a)=>{return a.name.toLowerCase().includes(this.searchWord)})
    }else{
      this.arr=[].concat(this.charsearch)
    }
  }
}