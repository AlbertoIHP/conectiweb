import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Like } from '../models/Like.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class LikeService {

  public base = base.api+'likes/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Like[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( like: any )
  {
    like.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var LikeString = JSON.stringify( like )
    return this.http.post( this.base, LikeString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Like >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( like: any, id )
  {
    like.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var LikeString = JSON.stringify( like )

    return this.http.put( this.base+id, LikeString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}