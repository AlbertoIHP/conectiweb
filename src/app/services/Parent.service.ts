import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Parent } from '../models/Parent.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class ParentService {

  public base = base.api+'parents/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Parent[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( parent: any )
  {
    parent.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ParentString = JSON.stringify( parent )
    return this.http.post( this.base, ParentString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Parent >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( parent: any, id )
  {
    parent.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var ParentString = JSON.stringify( parent )

    return this.http.put( this.base+id, ParentString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}