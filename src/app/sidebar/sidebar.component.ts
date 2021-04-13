import { PostService } from '../post.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

import { url } from '../global-variables'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  posts$: Post[];

  url: string = url;

  @Output() updatePostByID = new EventEmitter<number>();

  constructor(private service: PostService){
  }

  ngOnInit() {
    this.service.getAllBlogEntries().subscribe(data => this.posts$ = data);
  }

  clickPost(id: number){
    this.updatePostByID.emit(id);
  }

}
