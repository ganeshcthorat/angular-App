import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  movie = [{ no: 1, film: 'The Transporter', Geners: 'Action', Release: 'August 23' },
  { no: 2, film: 'Homes', Geners: 'Action', Release: 'August 24' },
  { no: 3, film: 'Minions', Geners: 'Sci-fi', Release: 'August 24' },
  { no: 4, film: 'Spider Man', Geners: 'old', Release: 'August 25' },
  { no: 5, film: 'Thor', Geners: 'Horror', Release: 'August 26' },
  { no: 6, film: 'Avenger', Geners: 'Action', Release: 'August 25' },


  ];

}
