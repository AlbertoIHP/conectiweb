import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Message } from '../models/Message.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class MessageService {

  public base = base.api+'messages/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Message[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( message: any )
  {
    message.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var MessageString = JSON.stringify( message )
    return this.http.post( this.base, MessageString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Message >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( message: any, id )
  {
    message.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var MessageString = JSON.stringify( message )

    return this.http.put( this.base+id, MessageString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}