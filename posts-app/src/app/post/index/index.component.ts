import { Component } from '@angular/core';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
posts : Post[]= []
constructor(private postService : PostServiceService){}
  ngOnInit():void{
    this.LoadPosts()
  }
  deletPost(id:number){
    if(confirm("Are you sure to delete this Post ?")){
      this.postService.deletePost(id).subscribe(()=>{
        this.LoadPosts()
      })
    }
  }
  LoadPosts(){
    this.postService.getPosts().subscribe((data:Post[])=>{
      this.posts = data ;
      })
  }
}
