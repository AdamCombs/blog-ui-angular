import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { Tag } from './tag.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Endless Staircase';

  posts$: Post[];
  tags$: Tag[];

  constructor(private service: PostService){
  }

  ngOnInit() {
    this.service.getAllBlogEntries().subscribe(data => this.posts$ = data);
    this.service.getAllTags().subscribe(data => this.tags$ = data);
  }

  updatePostsTag(tag: string){
    return this.service.getBlogByTag(tag).subscribe(data => this.posts$ = data);
  }

  updatePostsID(id: number){
    console.log(id);
    return this.service.getBlogByID(id).subscribe(data => this.posts$ = data);
  }
}
