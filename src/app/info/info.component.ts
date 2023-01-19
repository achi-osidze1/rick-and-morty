import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute) {  }
  name:string = ""
  status:string = ""

  ngOnInit(): void {
    this.activeroute.params.subscribe((params:Params)=>{
    this.name = params['name']
    this.status=params['status']
    console.log(params['name'], params['status']);
    })
  }

}
