import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Comment } from '../models/Comment.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class CommentService {

  public base = base.api+'comments/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Comment[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( comment: any )
  {
    comment.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var commentString = JSON.stringify( comment )
    return this.http.post( this.base, commentString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Comment >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( comment: any, id )
  {
    comment.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var commentString = JSON.stringify( comment )

    return this.http.put( this.base+id, commentString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}