import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { EventMap } from "./events";

interface Event {
  name: keyof EventMap;
  payload: EventMap[keyof EventMap];
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

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
