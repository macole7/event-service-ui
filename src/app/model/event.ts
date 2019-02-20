import { Organizer } from './organizer';
import { User} from './user';

export class Event {
  id: number;
  name: string;
  date: string;
  address: string;
  organizer: Organizer;
  users: User[];
}
