import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:any[] = []
  constructor(private _sanitizer:DomSanitizer, private _postService:PostService) { }

  getYoutubeVideo(url:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this._postService.getPost().subscribe(
      (data:any)=>{
        console.log(data.data);
        this.posts = data.data;
      }
    )
  }

}
