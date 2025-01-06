import { Subject } from "rxjs";
import { WishItem } from "../model/wishItem";

interface EventMap {
  'removeWish': WishItem;
};

interface Event {
  name: keyof EventMap;
  payload: EventMap[keyof EventMap];
}

class EventService {

  private subject = new Subject<Event>();

  emit<K extends keyof EventMap>(name: K, payload: EventMap[K]) {
    this.subject.next({ name, payload });
  }

  listen<K extends keyof EventMap>(name: K, callback: (payload: EventMap[K]) => void) {
    this.subject.asObservable().subscribe((obj) => {
      if (obj.name === name) callback(obj.payload);
    });
  }

}

export default new EventService();
