import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListParagraphsComponent } from './component/list-paragraphs/list-paragraphs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListParagraphsComponent],
  exports: [
    ListParagraphsComponent
  ]
})
export class ParagraphsModule { }
