import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+"/posts")
  }
  createPost(data:Post):Observable<Post>{
    return this.http.post<Post>(this.apiUrl+"/posts",data)
  }
  findPost(id:string):Observable<Post>{
    return this.http.get<Post>(this.apiUrl+"/posts/"+id)
  }
  UpdatePost(id:string , data:Post):Observable<Post>{
    return this.http.put<Post>(this.apiUrl+"/posts/"+id , data)
  }
  deletePost(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/posts/"+id)
  }
  
}
