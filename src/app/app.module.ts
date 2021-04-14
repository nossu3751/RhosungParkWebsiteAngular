import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { WorkComponent } from './work/work.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WorkDisplayCardsComponent } from './work-display-cards/work-display-cards.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { YouTubePlayerModule } from "@angular/youtube-player";

const ROUTES: Routes = [
  {path:'', component:HomeComponent},
  {path:'work', component: WorkComponent},
  {path:'blog', component: BlogComponent},
  {path:'admin', component: AdminComponent},
  {path:'admin/login', component: AdminloginComponent},
  {path:'**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    BlogComponent,
    AdminComponent,
    ResumeComponent,
    FooterComponent,
    ErrorComponent,
    AdminloginComponent,
    WorkDisplayCardsComponent,
    BlogEditorComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FlexLayoutModule,
    PdfViewerModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
