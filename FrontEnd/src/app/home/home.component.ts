import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peopledata=[{
    slno:"",
    name:"",
    review:"",
    imageurl:""
  }]

  constructor(public peopleservice:PeopleService) { }

  ngOnInit(): void{

    //Carosel data
    this.peopleservice.getpeople()
    .subscribe((data)=>{
    this.peopledata=JSON.parse(JSON.stringify(data));
    })

  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}
