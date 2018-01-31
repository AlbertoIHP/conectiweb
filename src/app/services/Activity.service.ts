import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Activity } from '../models/Activity.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class ActivityService {

  public base = base.api+'activities/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Activity[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( activity: any )
  {
    activity.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ActivityString = JSON.stringify( activity )
    return this.http.post( this.base, ActivityString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Activity >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( activity: any, id )
  {
    activity.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ActivityString = JSON.stringify( activity )

    return this.http.put( this.base+id, ActivityString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}