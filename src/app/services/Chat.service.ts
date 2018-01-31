import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Chat } from '../models/Chat.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class ChatService {

  public base = base.api+'chats/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Chat[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( chat: any )
  {
    chat.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChatString = JSON.stringify( chat )
    return this.http.post( this.base, ChatString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Chat >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( chat: any, id )
  {
    chat.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChatString = JSON.stringify( chat )

    return this.http.put( this.base+id, ChatString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}