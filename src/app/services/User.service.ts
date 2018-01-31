import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { User } from '../models/User.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class UserService {

  public base = base.api+'users/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< User[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( user: any )
  {
    user.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var userString = JSON.stringify( user )
    return this.http.post( this.base, userString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< User >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( user: any, id )
  {
    user.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var userString = JSON.stringify( user )

    return this.http.put( this.base+id, userString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}