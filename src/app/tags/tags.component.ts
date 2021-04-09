import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post } from "../post.model";
import { Tag } from '../tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit{

  @Input() tags$: Tag[];

  posts$: Post[];

  @Output() updatePostByTag = new EventEmitter<string>();

  constructor(){
  }

  ngOnInit(){
  }

  clickTag(tag: string){
    this.updatePostByTag.emit(tag);
  }

}
