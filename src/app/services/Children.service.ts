import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Children } from '../models/Children.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class ChildrenService {

  public base = base.api+'childrens/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Children[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( children: any )
  {
    children.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChildrenString = JSON.stringify( children )
    return this.http.post( this.base, ChildrenString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Children >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( children: any, id )
  {
    children.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ChildrenString = JSON.stringify( children )

    return this.http.put( this.base+id, ChildrenString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}