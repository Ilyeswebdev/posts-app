import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-show',
  imports: [RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})


export class ShowComponent {
  id = '';
  title = '';
  body = '';
constructor (private PostService : PostServiceService , private route:ActivatedRoute){}
  ngOnInit():void{
    this.id = this.route.snapshot.params['postId']
    console.log(this.id)
    this.PostService.findPost(this.id).subscribe((post: Post)=>{
      this.title = post.title
      this.body = post.body
    })

  }
}
