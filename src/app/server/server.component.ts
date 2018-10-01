import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online {
            background-color:black;
        }
    `]
})
export class ServerComponent {
    constructor(){
        this.status = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.status === 'online' ? 'green' : 'red'
    }
}