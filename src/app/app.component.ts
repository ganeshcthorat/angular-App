import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  imgUrl ='https://www.gstatic.com/webp/gallery/1.webp';
  isDisabled = false;

  movie = [{ no: 1, film: 'The Transporter', Geners: 'Action', Release: 'August 23' },
  { no: 2, film: 'Homes', Geners: 'Action', Release: 'August 24' },
  { no: 3, film: 'Minions', Geners: 'Sci-fi', Release: 'August 24' },
  { no: 4, film: 'Spider Man', Geners: 'old', Release: 'August 25' },
  { no: 5, film: 'Thor', Geners: 'Horror', Release: 'August 26' },
  { no: 6, film: 'Avenger', Geners: 'Action', Release: 'August 25' },


  ];
  
Student=[
      {name:"A", Mark:35},
      {name:"B", Mark:85},
      {name:"C", Mark:32},
      {name:"D", Mark:39},
      {name:"E", Mark:20},
      {name:"F", Mark:36},
      {name:"G", Mark:25},
      {name:"H", Mark:65},
      {name:"I", Mark:55},
      {name:"J", Mark:68},
      {name:"K", Mark:2},
      {name:"L", Mark:31},
  ]

  Employe=[
    {dept:"Software",
    
    detail:[
      {id:1, name:"A", add:"Pune", Designation:"Testing Engi"},
      {id:2, name:"B", add:"Nashik", Designation:"Designer"},
      {id:3, name:"C", add:"Abd", Designation:"Testing Engi"},
      {id:4, name:"D", add:"Osmanabad", Designation:"Testing Engi"},
      {id:5, name:"E", add:"Beed", Designation:"Testing Engi"},
    ]
    
    },
    {dept:"Implementation",
    
    detail:[
      {id:6, name:"F", add:"Pune", Designation:"Project Co-ordinator"},
      {id:7, name:"G", add:"Nashik", Designation:"PM"},
      {id:8, name:"H", add:"Abd", Designation:"TL"},
      {id:9, name:"I", add:"Osmanabad", Designation:"Head of Dept"},
      {id:10, name:"J", add:"Beed", Designation:"Manager"},
    ]
    
    }
  ]
count = 0;
counter(){
  this.count++
  this.count ==10 ? this.isDisabled = true : this.isDisabled = false;
}
reset(){
  this.count--
  this.isDisabled = false
}
}
