import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { base } from './const'

@Injectable()
export class PasswordResetService {

  public base = base.api+'password-resets/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http )
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }



  store ( like: any )
  {
    like.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var LikeString = JSON.stringify( like )
    return this.http.post( this.base, LikeString, this.options).map( ( res: Response ) => res.json() )

  }



}