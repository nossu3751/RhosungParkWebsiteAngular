import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';




@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogEditorComponent implements OnInit{
  postForm:FormGroup;
  insertImageView:boolean = false;
  @ViewChild('content-area') contentInput:ElementRef | undefined;

  constructor(private formBuilder:FormBuilder, private _postService:PostService) { 
    this.postForm = formBuilder.group({
      title:['', [Validators.required]],
      category:[''],
      img:['', {updateOn: 'change'}],
      content:['',[Validators.required]]
    });
   
  }

  convertToHtml(text:string){
    let paragraphs:string[] = text.split(/\r?\n/g);
    for(let i = 0; i < paragraphs.length; i++){
      if(!paragraphs[i].includes('<img')){
        paragraphs[i] = "<div class='mb-3 sentence'>" + paragraphs[i] + "</div>";
      }
    }
    return paragraphs.join("");
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
      "content": this.postForm.get("content")?.value + '\n' + imgHtml + '\n'
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
        content: this.convertToHtml(this.postForm.get("content")?.value)
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
