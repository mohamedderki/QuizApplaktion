import { Injectable } from '@angular/core';
import { Fragen } from './Fragen';
@Injectable({
  providedIn: 'root'
})
export class Multi
{
  MultiChoise: Fragen[] = [];
  constructor(){
    this.MultiChoise=[
      {
        FragenIndex: 1,
        Frage: 'What is true regarding the configuration of yum',
        Antwort:
        [
          {i:1,Antwort: "Changes to the repository configuration become active after running yum confupdate",richtig: false,this: false},
          {i:2,Antwort: "Changes to the yum configuration become active after restarting the yumd service",richtig:false,this: false},
          {i:3,Antwort: "The configuration of package repositories can be divided into multiple files",richtig: true,this: false},
          {i:3,Antwort: "Repository configurations can include variables such as $basearch or $releasever",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 2,
        Frage: 'Which of the following are modes of the vi editor',
        Antwort:
        [
          {i:1,Antwort: "edit mode",richtig: false,this: false},
          {i:2,Antwort: "insert mode",richtig:true,this: false},
          {i:3,Antwort: "change mode",richtig: false,this: false},
          {i:4,Antwort: "command mode",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 3,
        Frage: 'What is true regarding UEFI firmware',
        Antwort:
        [
          {i:1,Antwort: "It can read and interpret partition tables",richtig: false,this: false},
          {i:2,Antwort: "It can use and read certain file systems",richtig:true,this: false},
          {i:3,Antwort: "It stores its entire configuration on the /boot/ partition",richtig: false,this: false},
          {i:4,Antwort: "It is stored in a special area within the GPT metadata",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 4,
        Frage: 'When is the content of the kernel ring buffer reset',
        Antwort:
        [
          {i:1,Antwort: "When the ring buffer is explicitly reset using the command dmesg --clear",richtig: true,this: false},
          {i:2,Antwort: "When the ring buffer is read using dmesg without any additional parameters",richtig:false,this: false},
          {i:3,Antwort: "When the kernel loads a previously unloaded kernel module",richtig: false,this: false},
          {i:4,Antwort: "When the system is shut down or rebooted",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 5,
        Frage: 'Which of the following commands is used to modify quota settings',
        Antwort:
        [
          {i:1,Antwort: "editquota",richtig:false,this: false},
          {i:2,Antwort: "setquota",richtig:true,this: false},
          {i:3,Antwort: "edquota",richtig: true,this: false},
          {i:4,Antwort: "quotaset",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 6,
        Frage: 'hich of the following are modes of the vi editor',
        Antwort:
        [
          {i:1,Antwort: "insert mode",richtig:false,this: false},
          {i:2,Antwort: "insert mode",richtig:true,this: false},
          {i:3,Antwort: "review mode",richtig: false,this: false},
          {i:4,Antwort: "command mode",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 7,
        Frage: 'Which of the following directories on a 64 bit Linux system typically contain shared libraries',
        Antwort:
        [
          {i:1,Antwort: "/var/lib64/",richtig:false,this: false},
          {i:2,Antwort: "/usr/lib64/",richtig:true,this: false},
          {i:3,Antwort: "/opt/lib64/",richtig: false,this: false},
          {i:4,Antwort: "/lib64/",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 8,
        Frage: 'hich of the following are modes of the vi editor',
        Antwort:
        [
          {i:1,Antwort: "insert mode",richtig:false,this: false},
          {i:2,Antwort: "insert mode",richtig:true,this: false},
          {i:3,Antwort: "review mode",richtig: false,this: false},
          {i:4,Antwort: "command mode",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 9,
        Frage: 'Which of the following are modes of the vi editor',
        Antwort:
        [
          {i:1,Antwort: "edit mode",richtig: false,this: false},
          {i:2,Antwort: "insert mode",richtig:true,this: false},
          {i:3,Antwort: "change mode",richtig: false,this: false},
          {i:4,Antwort: "command mode",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 10,
        Frage: 'What is true regarding the configuration of yum',
        Antwort:
        [
          {i:1,Antwort: "Changes to the repository configuration become active after running yum confupdate",richtig: false,this: false},
          {i:2,Antwort: "Changes to the yum configuration become active after restarting the yumd service",richtig:false,this: false},
          {i:3,Antwort: "The configuration of package repositories can be divided into multiple files",richtig: true,this: false},
          {i:3,Antwort: "Repository configurations can include variables such as $basearch or $releasever",richtig: true,this: false},
        ]
      },

    ]
  }
}
