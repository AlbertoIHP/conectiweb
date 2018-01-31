import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventHandlerService } from '../../services/EventHandler.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
   private router: Router,
   public eventService: EventHandlerService   )
  {
    if( localStorage.getItem('currentUser') )
    {
      this.eventService.singIn()
    }
    else
    {
      this.router.navigate(['login'])
    }

  }

  ngOnInit()
  {

  }

}
