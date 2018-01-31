import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Director } from '../models/Director.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class DirectorService {

  public base = base.api+'directors/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Director[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( director: any )
  {
    director.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var DirectorString = JSON.stringify( director )
    return this.http.post( this.base, DirectorString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Director >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( director: any, id )
  {
    director.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var DirectorString = JSON.stringify( director )

    return this.http.put( this.base+id, DirectorString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}