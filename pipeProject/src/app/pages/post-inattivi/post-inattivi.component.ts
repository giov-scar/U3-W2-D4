import { Component, OnInit } from '@angular/core';
import { Post } from 'post';
import { PostService } from 'post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit{

  posts: Post[] = [];


  constructor(private postServiceSvc: PostService) { }

  ngOnInit(): void {
    this.postServiceSvc.fetchData().then(() => {
      this.posts = this.postServiceSvc.isNotActive();
    })
    throw new Error('Method not implemented.');
  }

  changePost(post: Post) {
    this.postServiceSvc.changePost(post).then(() => {
      this.posts = this.postServiceSvc.isNotActive();
  });
}

}
