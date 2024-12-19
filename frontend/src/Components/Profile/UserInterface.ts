export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  profilePicture: string;
  bio: string;
  gender: string;
  followersCount: number;
  followingCount: number;
  isActive: boolean;
  posts: any[];
  comments: any[];
  likes: any[];
  following: any[];
  followers: any[];
}

export const userdata = {
  id: '',
  username: '',
  email: '',
  password: '',
  name: '',
  profilePicture: '',
  bio: '',
  gender: '',
  followersCount: 0,
  followingCount: 0,
  isActive: true,
  posts: [],
  comments: [],
  likes: [],
  following: [],
  followers: [],
};
