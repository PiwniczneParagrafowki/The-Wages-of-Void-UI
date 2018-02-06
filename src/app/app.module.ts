import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DiaryModule} from './diary/diary.module';
import {ParagraphsModule} from './paragraphs/paragraphs.module';
import {DiaryComponent} from './diary/component/diary/diary.component';
import {ListParagraphsComponent} from './paragraphs/component/list-paragraphs/list-paragraphs.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiaryModule,
    ParagraphsModule,
    RouterModule.forRoot([
      {path: `diary`, component: DiaryComponent},
      {path: `paragraphs`, component: ListParagraphsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
