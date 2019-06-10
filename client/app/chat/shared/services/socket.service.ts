import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';

import { Event } from '../model/event';
import { Message } from '../model/message';


@Injectable()
export class SocketService {
    private static readonly PORT: number = 3000;

    private serverUrl: string;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.serverUrl = 'http://localhost:' + SocketService.PORT;
    }

    public initSocket(): void {
        this.socket = socketIo(this.serverUrl);
    }

    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
