import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-create',
  imports: [RouterModule , FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
title = '';
body = '';
error = '';
constructor(private postService: PostServiceService , private router:Router){}
  Submit(){
    if(!this.title || !this.body){
    this.error='please fill these fileds';
    }
    const input = {
      title : this.title,
      body : this.body,
      id : 1,
    };
    // this.postService.createPost(input).subscribe()
    this.postService.createPost(input).subscribe()
    alert("post created")
   this.router.navigate(['posts']);
  }

}
