import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ContainerComponent} from './container/container.component';
import {FooterComponent} from './footer/footer.component';
import {CourseListComponent} from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CharLimitPipe } from './char-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerComponent,
    FooterComponent,
    CourseListComponent,
    CourseCardComponent,
    CharLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
