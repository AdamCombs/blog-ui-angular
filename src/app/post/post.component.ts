import { PostService } from '../post.service';

import { url } from '../global-variables'

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnChanges {

  @Input() posts$: Post[];

  url: string = url;

  constructor(private service: PostService){
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  updatePosts(tag: string){
    return this.service.getBlogByTag(tag).subscribe(data => this.posts$ = data);
  }
}
