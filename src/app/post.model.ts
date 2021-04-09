import { Tag } from './tag.model';

export class Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  feature_image: string;
  tags: Tag[];
}
