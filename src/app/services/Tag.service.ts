import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Tag } from '../models/Tag.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class TagService {

  public base = base.api+'tags/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Tag[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( tag: any )
  {
    tag.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TagString = JSON.stringify( tag )
    return this.http.post( this.base, TagString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Tag >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( tag: any, id )
  {
    tag.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TagString = JSON.stringify( tag )

    return this.http.put( this.base+id, TagString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}