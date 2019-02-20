import { User } from './user';
import { Event } from './event';

export class Comment {
  content: string;
  user: User;
  event: Event;
}
