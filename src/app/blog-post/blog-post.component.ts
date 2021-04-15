import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PostService } from '../services/post.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  loaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  absoluteUrl:string = window.location.href;
  post:BehaviorSubject<any> = new BehaviorSubject<any>({
    category:"",
    title:"",
    content:"",
    createdAt:"",
    updatedAt:""
  })

  constructor(private route:ActivatedRoute, private _postService:PostService, private clipboard:Clipboard) { }

  copyUrl(rootPath:string){
    let url = `${rootPath}`;
    this.clipboard.copy(url);
    alert("Copied the link!");
  }

  ngOnInit(): void {
    let postId = this.route.snapshot.params["id"];
    this._postService.getOnePost(postId).subscribe(data =>{
      console.log(data.data);
      this.post.next(data.data);
      this.loaded.next(true);
    })
  }

}

