import { Injectable } from '@angular/core';
import { Fragen } from './Fragen';
@Injectable({
  providedIn: 'root'
})
export class Fill
{
  FillFragen: Fragen[] = [];
  constructor(){
    this.FillFragen=[
      {
        FragenIndex: 1,
        Frage: 'In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories',
        Antwort:
        [
          {i:2,Antwort: "-maxdepth",richtig:true,this: false},
        ]
      },
      {
        FragenIndex: 2,
        Frage: 'Which of the following commands can be used to download the RPM package kernel without installing it',
        Antwort:
        [
          {i:2,Antwort: "yumdownloader kernel",richtig:true,this: false},
        ]
      },
      {
        FragenIndex: 3,
        Frage: 'Which of the following commands is used to change metadata and options for ext3 ilesystems',
        Antwort:
        [
          {i:4,Antwort: "tune2fs",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 4,
        Frage: 'In compliance with the FHS, in which of the directories are man pages found',
        Antwort:
        [
          {i:1,Antwort: "usr/share/man",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 5,
        Frage: 'Which of the following files, located in a users home directory, contains the Bash history',
        Antwort:
        [
          {i:4,Antwort: ".bash_history",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 6,
        Frage: 'Which of the following statements describes a difference between GNU GRUB Legacy and GRUB 2',
        Antwort:
        [
          {i:2,Antwort: "Partition numbers start at 0 in GRUB Legacy and 1 in GRUB 2",richtig:true,this: false},
        ]
      },
      {
        FragenIndex: 7,
        Frage: 'Which file should be edited to select the network locations from which Debian installation package files are loaded',
        Antwort:
        [
          {i:4,Antwort: "/etc/apt/sources.list",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 8,
        Frage: 'Which of the following environment variables overrides or extends the list of directories holding shared libraries',
        Antwort:
        [
          {i:3,Antwort: " LD_LIBRARY_PATH",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 9,
        Frage: 'In the vi editor, which of the following commands will copy the current line into the vi buffer',
        Antwort:
        [
          {i:4,Antwort: "1y",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 10,
        Frage: 'Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination',
        Antwort:
        [
          {i:3,Antwort: "/etc/inittab",richtig: true,this: false},
        ]
      }
    ]
  }
}
