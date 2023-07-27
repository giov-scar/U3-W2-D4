import { Post } from 'post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  URL: string = 'http://localhost:3000/posts';

  posts: Post[] = [];

  constructor() {}

  fetchData(): any {
    return fetch(this.URL)
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;
      });
  }
  get getPosts(): Post[] {
    return this.posts;
  }

  changePost(post: Post) {
    post.active = post.active === true ? false : true;

    return fetch(this.URL + '/' + post.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then(
      (response) => console.log(response),

      (error) => console.error('Error:', error)
    );
  }

  isActive() {
    return this.posts.filter((post) => post.active === true);
  }

  isNotActive() {
    return this.posts.filter((post) => post.active !== true);
  }
}
