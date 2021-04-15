import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  posts:any[] = [];
  page = 1;
  count = 0;
  tableSize = 5;
  absoluteUrl:string = window.location.href;
  constructor(private _sanitizer:DomSanitizer, private _postService:PostService, private router:Router, private clipboard:Clipboard) { }

  getYoutubeVideo(url:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  copyUrl(rootPath:string, postId:string){
    let url = `${rootPath}/${postId}`;
    this.clipboard.copy(url);
    alert("Copied the link!");
  }

  ngOnInit(): void {
    this.fetchPosts();
    
  }

  fetchPosts(){
    this._postService.getPost().subscribe(
      (data:any)=>{
        console.log(data.data);
        this.posts = data.data;
      }
    )
  }

  goToPost(id:string){
    this.router.navigate([`blog/${id}`]);
  }

  onTableDataChange(event:any):void{
    console.log(event);
    this.page = event;
    this.fetchPosts();
  }

}
