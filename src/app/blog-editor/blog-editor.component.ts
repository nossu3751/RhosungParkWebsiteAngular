import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';




@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit{
  postForm:FormGroup;
  insertImageView:boolean = false;

  constructor(private formBuilder:FormBuilder, private _postService:PostService) { 
    this.postForm = formBuilder.group({
      title:['', [Validators.required]],
      category:[''],
      img:['', {updateOn: 'change'}],
      content:['',[Validators.required]]
    })
  }

  getImg(){
    return this.postForm.get("img")?.value;
  }

  toggleInsertImageField(){
    this.insertImageView = !this.insertImageView
  }

  insertImage(img:string){
    let imgHtml:string = `<img src="${img}">`;
    this.postForm.patchValue({
      "content": this.postForm.get("content")?.value + '\n' +imgHtml
    })
    this.toggleInsertImageField();
    this.postForm.patchValue({"img":""});
    
  }

  submitPost(){
    if(this.postForm.invalid){
      alert("Please fill all required fields!")
    }else{
      let post = {
        title: this.postForm.get("title")?.value,
        category: this.postForm.get("category")?.value,
        content: this.postForm.get("content")?.value
      }
      this._postService.createPost(post).then(resolve =>{
        if(resolve == false){
          alert("Couldn't Create Post!");
        }else{
          alert("Successfully Posted Blog Content!");
          this.postForm.setValue({
            "title":"",
            "content":"",
            "category":"",
            "img":""
          })
        }
      })
    }
  }
  

  ngOnInit(): void {
    
  }
}
