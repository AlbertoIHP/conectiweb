import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Garden } from '../models/Garden.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class GardenService {

  public base = base.api+'gardens/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Garden[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( garden: any )
  {
    garden.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var GardenString = JSON.stringify( garden )
    return this.http.post( this.base, GardenString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Garden >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( garden: any, id )
  {
    garden.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var GardenString = JSON.stringify( garden )

    return this.http.put( this.base+id, GardenString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}