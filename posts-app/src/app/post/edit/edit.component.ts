import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router ,RouterModule } from '@angular/router';
import { PostServiceService } from '../post-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  imports: [RouterModule  , FormsModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
id = '';
title = '';
body = '';
error = '';
  constructor(private postService: PostServiceService , private router:Router , private route:ActivatedRoute){}
  ngOnInit():void{
    this.id = this.route.snapshot.params['postId']
    
    this.postService.findPost(this.id).subscribe( (post: Post)=>{

      this.title = post.title
      this.body = post.body
    });
  }
  Submit(){
    if(!this.title || !this.body){
    this.error='please fill these fileds';
    }
    const input = {
      title : this.title,
      body : this.body,
      id : 1 ,
    };
    // this.postService.createPost(input).subscribe()
    this.postService.UpdatePost(this.id , input).subscribe()
    alert("post Updated")
   this.router.navigate(['posts']);
  }
}
