import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Course } from '../models/Course.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class CourseService {

  public base = base.api+'courses/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Course[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( course: any )
  {
    course.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var courseString = JSON.stringify( course )
    return this.http.post( this.base, courseString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Course >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( course: any, id )
  {
    course.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var courseString = JSON.stringify( course )

    return this.http.put( this.base+id, courseString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}