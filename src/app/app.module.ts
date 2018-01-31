import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Modulos
import { NbThemeModule } from '@nebular/theme';
import { LoginComponent } from './components/login/login.component'
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme'




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
import { routing, appRoutingProviders } from './routes/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NbSidebarModule,
	NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' })
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
	EventHandlerService,
	NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
