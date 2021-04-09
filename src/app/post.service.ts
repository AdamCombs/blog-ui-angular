import { Injectable, Input, Output } from '@angular/core';
import { url } from './global-variables';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Tag } from './tag.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  allBlogURL: string = url.concat("/all_blog_entries");
  allTagsURL: string = url.concat("/all_tags");
  byTagURL: string = url.concat("/tag/");
  byBlogIDURL: string = url.concat("/single_blog/");

  constructor(private http: HttpClient){}

  getAllBlogEntries(){
    return this.http.get<Post[]>(this.allBlogURL);
  }

  getBlogByID(id: number){
    console.log(this.byBlogIDURL.concat(id.toString()));
    return this.http.get<Post[]>(this.byBlogIDURL.concat(id.toString()));
  }

  getBlogByTag(tag: string){
    return this.http.get<Post[]>(this.byTagURL.concat(tag));
  }

  getAllTags(){
    return this.http.get<Tag[]>(this.allTagsURL);
  }

}
