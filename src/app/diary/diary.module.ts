import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './component/diary/diary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiaryComponent],
  exports: [
    DiaryComponent
  ]
})
export class DiaryModule { }
