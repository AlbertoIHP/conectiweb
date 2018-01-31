import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { Task } from '../models/Task.model'
import { AuthenticationService } from './authentication.service'
import { base } from './const'

@Injectable()
export class TaskService {

  public base = base.api+'tasks/'
  public options: RequestOptions
  public headers: Headers

  constructor ( private http: Http , public authService: AuthenticationService)
  {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { headers: this.headers } )
  }


  index (): Observable< Task[] >
  {

    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base, a ).map( ( res: Response ) => res.json() );
  }


  store ( task: any )
  {
    task.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TaskString = JSON.stringify( task )
    return this.http.post( this.base, TaskString, this.options).map( ( res: Response ) => res.json() )

  }


  show ( id ) : Observable< Task >
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.get( this.base+id, a ).map( ( res: Response ) => res.json() )
  }


  update ( task: any, id )
  {
    task.access_token = 'rpDYa3XOEkAtYk67v5lDYprLz8cdbguP'
    var TaskString = JSON.stringify( task )

    return this.http.put( this.base+id, TaskString, this.options ).map( ( res: Response ) => res.json() )
  }


  delete ( id )
  {
    var b = new Headers( { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.authService.token } )
    var a = new RequestOptions( { headers: b } )

    return this.http.delete( this.base+id, a ).map( ( res: Response ) => res.json() )
  }
}