import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Teacher } from '../models/Teacher.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class TeacherService {

  public base = base.api+'teachers/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Teacher[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( teacher: any )
  {
    teacher.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TeacherString = JSON.stringify( teacher )
    return this.http.post( this.base, TeacherString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Teacher >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( teacher: any, id )
  {
    teacher.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TeacherString = JSON.stringify( teacher )

    return this.http.put( this.base+id, TeacherString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}