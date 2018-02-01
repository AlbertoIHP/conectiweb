//Modulos Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';



//Modulos externos
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

//Servicios (Falta la asistencia)
import { ActivityService } from './services/Activity.service'
import { ChatService } from './services/Chat.service'
import { ChatUsersService } from './services/ChatUser.service'
import { ChildrenService } from './services/Children.service'
import { CommentService } from './services/Comment.service'
import { CourseService } from './services/Course.service'
import { DirectorService } from './services/Director.service'
import { GardenService } from './services/Garden.service'
import { LikeService } from './services/Like.service'
import { MessageService } from './services/Message.service'
import { ParentService } from './services/Parent.service'
import { PasswordResetService } from './services/PasswordReset.service'
import { TagService } from './services/Tag.service'
import { TaskService } from './services/Task.service'
import { TeacherService } from './services/Teacher.service'
import { UserService } from './services/User.service'
import { AuthenticationService } from './services/authentication.service'
import { EventHandlerService } from './services/EventHandler.service'

//Rutas
import { routing, appRoutingProviders } from './routes/app-routing.module';
import { TeachersComponent } from './components/statics/teachers/teachers.component';
import { ChildrensComponent } from './components/statics/childrens/childrens.component';
import { CoursesComponent } from './components/statics/courses/courses.component';
import { TeachersmaintainComponent } from './components/admin/teachersmaintain/teachersmaintain.component';
import { CoursesmaintainComponent } from './components/admin/coursesmaintain/coursesmaintain.component';
import { ChildrensmaintainComponent } from './components/admin/childrensmaintain/childrensmaintain.component';
import { ParentsComponent } from './components/statics/parents/parents.component';
import { ParentsmaintainComponent } from './components/admin/parentsmaintain/parentsmaintain.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeachersComponent,
    ChildrensComponent,
    CoursesComponent,
    TeachersmaintainComponent,
    CoursesmaintainComponent,
    ChildrensmaintainComponent,
    ParentsComponent,
    ParentsmaintainComponent,
    ProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [
    appRoutingProviders,
  	ActivityService,
  	ChatService,
  	ChatUsersService,
  	ChildrenService,
  	CommentService,
  	CourseService,
  	DirectorService,
  	GardenService,
  	LikeService,
  	MessageService,
  	ParentService,
  	PasswordResetService,
  	TagService,
  	TaskService,
  	TeacherService,
  	UserService,
  	AuthenticationService,
  	EventHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
