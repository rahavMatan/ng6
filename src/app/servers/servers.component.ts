import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverStatus= "none";
  serverName = '123'
  canCreateServer = false

  servers = ['s1','s2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=false
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.canCreateServer = true
    this.servers.push(this.serverName)
    this.serverStatus = 'server was created '+ this.serverName
  }

  onUpdateServerName(e){
   
    this.serverName = e.target.value
  }

}
