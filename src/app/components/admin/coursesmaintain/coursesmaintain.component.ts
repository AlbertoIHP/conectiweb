// Componentes generales
import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


//DATATABLE
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { ExampleDatabase, ExampleDataSource } from '../../../const/datasource.component';


//Componentes hijos (Agregar y editar)
import { AddcourseComponent } from './addcourse/addcourse.component'
import { EditcourseComponent } from  './editcourse/editcourse.component'

//Servicios
import { EventHandlerService } from '../../../services/EventHandler.service';
import { CourseService } from '../../../services/Course.service';

//Modelos
import { Course } from '../../../models/Course.model'
import { User } from '../../../models/User.model'


@Component({
  selector: 'app-coursesmaintain',
  templateUrl: './coursesmaintain.component.html',
  styleUrls: ['./coursesmaintain.component.css']
})
export class CoursesmaintainComponent implements OnInit {
  //Variables
  public totalCourses: Course[]
  public currentUser: User
  public searchByName: string

  //DATATABLE
  exampleDatabase;
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  displayedColumns = ['Acciones', 'Nombre', 'Jardin'];


  constructor(
    private courseService : CourseService,
    private eventService : EventHandlerService,
    private router: Router,
    public dialog: MatDialog)
  {
    if( ( this.currentUser = JSON.parse(localStorage.getItem('currentUser')).email ) )
    {
      this.eventService.singIn()
      this.refreshCourses()
    }
    else
    {
      this.router.navigate(['login'])
    }
  }

  ngOnInit()
  {
    // Se inicializa el datasource
    this.dataSource = new ExampleDataSource(new ExampleDatabase([]), this.paginator, this.sort, 'Courses');
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
    this.exampleDatabase = [];


    // Se obtiene el evento emitido desde agregar
    this.eventService.hasModified.subscribe( () => this.refreshCourses() );
  }

  public refreshCourses() : void
  {
    if( this.currentUser.role === 'teacher')
    {
      this.courseService.getTeacherCourses( this.currentUser.id ).subscribe( (data) => {
        console.log(data)
        this.totalCourses = data
        this.setDataBase( data )
      })
    }
    else if( this.currentUser.role === 'ceo' )
    {
      this.courseService.index().subscribe( (data) => {
        console.log(data)
        this.totalCourses = data
        this.setDataBase( data )
      })
    }

  }

  setDataBase( data )
  {
      //DATATABLE
      //Se asignan los datos obtenidos al datasource
      this.exampleDatabase = new ExampleDatabase( data );

      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort, 'Courses');
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
          .debounceTime(150)
          .distinctUntilChanged()
          .subscribe(() => {
            if (!this.dataSource) { return; }
            this.dataSource.filter = this.filter.nativeElement.value;
          });

  }

  deleteCourse( course )
  {
    this.courseService.delete( course.id ).subscribe( data => {
      console.log(data)
    })
  }


  editCourse( course )
  {
    //Se abre un dialogo para editar la alergia, se abre un componente hijo
    let dialogRef = this.dialog.open( EditcourseComponent, {
      //Los parámetros se asignan y se envían los datos necesarios
      width: '700px',
      data:
      {
       course: course,
       courseService: this.courseService
      }
    });
  }



  addCourse( )
  {
    //Se abre un dialogo para editar la alergia, se abre un componente hijo
    let dialogRef = this.dialog.open( AddcourseComponent, {
      //Los parámetros se asignan y se envían los datos necesarios
      width: '700px',
      data:
      {
       course: new Course(),
       courseService: this.courseService
      }
    });
  }





}

