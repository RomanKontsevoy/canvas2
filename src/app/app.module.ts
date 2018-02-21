import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FirstCanvasLessonComponent } from './first-canvas-lesson/first-canvas-lesson.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SecondCanvasLessonComponent } from './second-canvas-lesson/second-canvas-lesson.component';
import { ThirdCanvasLessonComponent } from './third-canvas-lesson/third-canvas-lesson.component';
import { FourthCanvasLessonComponent } from './fourth-canvas-lesson/fourth-canvas-lesson.component';
import { FifthCanvasLessonComponent } from './fifth-canvas-lesson/fifth-canvas-lesson.component';
import { SixthCanvasComponentComponent } from './sixth-canvas-component/sixth-canvas-component.component';
import { SeventhCanvasLessonComponent } from './seventh-canvas-lesson/seventh-canvas-lesson.component';
import { EighthCanvasComponentComponent } from './eighth-canvas-component/eighth-canvas-component.component';
import { NinthCanvasLessonComponent } from './ninth-canvas-lesson/ninth-canvas-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstCanvasLessonComponent,
    PageNotFoundComponent,
    MainMenuComponent,
    SecondCanvasLessonComponent,
    ThirdCanvasLessonComponent,
    FourthCanvasLessonComponent,
    FifthCanvasLessonComponent,
    SixthCanvasComponentComponent,
    SeventhCanvasLessonComponent,
    EighthCanvasComponentComponent,
    NinthCanvasLessonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'cl1', component: FirstCanvasLessonComponent},
      {path: 'cl2', component: SecondCanvasLessonComponent},
      {path: 'cl3', component: ThirdCanvasLessonComponent},
      {path: 'cl4', component: FourthCanvasLessonComponent},
      {path: 'cl5', component: FifthCanvasLessonComponent},
      {path: 'cl6', component: SixthCanvasComponentComponent},
      {path: 'cl7', component: SeventhCanvasLessonComponent},
      {path: 'cl8', component: EighthCanvasComponentComponent},
      {path: 'cl9', component: NinthCanvasLessonComponent},
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
