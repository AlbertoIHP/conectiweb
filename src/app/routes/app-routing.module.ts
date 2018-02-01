import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


//Componentes
import { LoginComponent } from '../components/login/login.component'
import { HomeComponent } from '../components/home/home.component'
import { ChildrensComponent } from '../components/statics/childrens/childrens.component'
import { CoursesComponent } from '../components/statics/courses/courses.component'
import { TeachersComponent } from '../components/statics/teachers/teachers.component'
import { ParentsComponent } from '../components/statics/parents/parents.component'
import { TeachersmaintainComponent } from '../components/admin/teachersmaintain/teachersmaintain.component'
import { ChildrensmaintainComponent } from '../components/admin/childrensmaintain/childrensmaintain.component'
import { CoursesmaintainComponent } from '../components/admin/coursesmaintain/coursesmaintain.component'
import { ParentsmaintainComponent } from '../components/admin/parentsmaintain/parentsmaintain.component'
import { ProfileComponent } from '../components/profile/profile.component'




const routes: Routes =
[
  //RUTAS MOBILE
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'statics/childrens',  component: ChildrensComponent },
  { path: 'statics/courses',  component: CoursesComponent },
  { path: 'statics/teachers',  component: TeachersComponent },
  { path: 'statics/parents',  component: ParentsComponent },
  { path: 'admin/childrens',  component: ChildrensmaintainComponent },
  { path: 'admin/courses',  component: CoursesmaintainComponent },
  { path: 'admin/teachers',  component: TeachersmaintainComponent },
  { path: 'admin/parents',  component: ParentsmaintainComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: '',  component: HomeComponent },

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

