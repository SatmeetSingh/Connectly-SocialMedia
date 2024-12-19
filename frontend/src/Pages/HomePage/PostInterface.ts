export interface Post {
  id: string;
  content: string;
  imageUrl: string;
  likesCount: number;
  commentCount: number;
  shareCount: number;
  userId: string;
  Share: number;
  location?: string;
  user: any[];
}

export const postData = {
  id: '',
  content: '',
  imageUrl: '',
  likesCount: 0,
  commentCount: 0,
  shareCount: 0,
  userId: '',
  share: 0,
  location: '',
  user: [],
};
