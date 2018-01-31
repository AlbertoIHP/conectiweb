import { Component } from '@angular/core';
import { EventHandlerService } from './services/EventHandler.service';
import { User } from './models/User.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  public isLogged: boolean = false
  public currentUser: User


  constructor( public eventService: EventHandlerService )
  {

    //Configuracion de eventos de la aplicacion
    this.eventService.isSingIn.subscribe( data => {
      this.isLogged = true
    })

    this.eventService.isSingOut.subscribe( data => {
      this.isLogged = false
    })


  }
}
