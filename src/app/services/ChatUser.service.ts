import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { ChatUsers } from '../models/ChatUsers.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class ChatUsersService {

  public base = base.api+'chatsusers/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< ChatUsers[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( chatUsers: any )
  {
    chatUsers.access_token= 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChatUsersString = JSON.stringify( chatUsers )
    return this.http.post( this.base, ChatUsersString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< ChatUsers >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( chatUsers: any, id )
  {
    chatUsers.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChatUsersString = JSON.stringify( chatUsers )

    return this.http.put( this.base+id, ChatUsersString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}