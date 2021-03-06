import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model'
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router'
import { EventHandlerService } from '../../services/EventHandler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user : User
  public isLogging: boolean

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    public eventService: EventHandlerService  )
  {
    localStorage.clear()
    this.eventService.singOut()
    this.isLogging = false

    this.user = new User()
    this.user.email = "user3@gmail.com"
    this.user.password = "password"

  }

  public login() : void
  {
    this.isLogging = true
     this.authService.login( this.user.email, this.user.password ).subscribe( (data) => {
       console.log(data)
       if( data )
       {
         this.isLogging = false
         this.eventService.singIn()
         this.router.navigate(['home'])
       }
       else
       {
         this.isLogging = false
       }
     })
  }

}
