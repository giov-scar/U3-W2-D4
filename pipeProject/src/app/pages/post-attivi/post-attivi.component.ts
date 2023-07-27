import { Component, OnInit } from '@angular/core';
import { Post } from 'post';
import { PostService } from 'post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postServiceSvc: PostService) {
    this.posts = this.postServiceSvc.fetchData().then(() =>{
    this.posts = this.postServiceSvc.isActive();
  });
}
  ngOnInit(): void {
    this.posts = this.postServiceSvc.fetchData().then(() =>{
        this.posts = this.postServiceSvc.isActive();
    throw new Error('Method not implemented.');
  })
  }
  changePost(post:Post){
    this.postServiceSvc.changePost(post);
    this.posts = this.postServiceSvc.isActive();
  }
}
