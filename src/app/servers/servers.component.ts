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
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=false
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus = 'server was created'
  }

  onUpdateServerName(e){
    console.log(e.target.value);
    
    this.serverName = e.target.value
  }

}
