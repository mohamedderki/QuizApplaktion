import { Injectable } from '@angular/core';
import { Fragen } from './Fragen';
@Injectable({
  providedIn: 'root'
})
export class Single
{
  SingleFragen: Fragen[] = [];
  constructor(){
    this.SingleFragen=[
      {
        FragenIndex: 1,
        Frage: 'In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories',
        Antwort:
        [
          {i:1,Antwort: "-dirmax",richtig: false,this: false},
          {i:2,Antwort: "-maxdepth",richtig:true,this: false},
          {i:3,Antwort: "-maxlevels",richtig: false,this: false},
          {i:3,Antwort: "-n",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 2,
        Frage: 'Which of the following commands can be used to download the RPM package kernel without installing it',
        Antwort:
        [
          {i:1,Antwort: "yum download --no-install kernel",richtig: false,this: false},
          {i:2,Antwort: "yumdownloader kernel",richtig:true,this: false},
          {i:3,Antwort: "rpm --download --package kernel",richtig: false,this: false},
          {i:4,Antwort: "rpmdownload kernel",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 3,
        Frage: 'Which of the following commands is used to change metadata and options for ext3 ilesystems',
        Antwort:
        [
          {i:1,Antwort: "mod3fs",richtig: false,this: false},
          {i:2,Antwort: "tune3fs",richtig:false,this: false},
          {i:3,Antwort: "mod2fs",richtig: false,this: false},
          {i:4,Antwort: "tune2fs",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 4,
        Frage: 'In compliance with the FHS, in which of the directories are man pages found',
        Antwort:
        [
          {i:1,Antwort: "usr/share/man",richtig: true,this: false},
          {i:2,Antwort: "/opt/man",richtig:false,this: false},
          {i:3,Antwort: "/usr/doc/",richtig: false,this: false},
          {i:4,Antwort: "/var/pkg/man",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 5,
        Frage: 'Which of the following files, located in a users home directory, contains the Bash history',
        Antwort:
        [
          {i:1,Antwort: ".bashrc_history",richtig:false,this: false},
          {i:2,Antwort: ".bash_histfile",richtig:false,this: false},
          {i:3,Antwort: ".history",richtig: false,this: false},
          {i:4,Antwort: ".bash_history",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 6,
        Frage: 'Which of the following statements describes a difference between GNU GRUB Legacy and GRUB 2',
        Antwort:
        [
          {i:1,Antwort: "GRUB 2 no longer requires a configuration file",richtig:false,this: false},
          {i:2,Antwort: "Partition numbers start at 0 in GRUB Legacy and 1 in GRUB 2",richtig:true,this: false},
          {i:3,Antwort: "The configuration file menu.lst (and grub.conf) have been replaced with grub.config.",richtig: false,this: false},
          {i:4,Antwort: "Grub-mkconfig only works with GRUB Legacy if the --version 1 option is used.",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 7,
        Frage: 'Which file should be edited to select the network locations from which Debian installation package files are loaded',
        Antwort:
        [
          {i:1,Antwort: "/etc/dpkg/dpkg.cfg",richtig:false,this: false},
          {i:2,Antwort: "/etc/apt/apt.conf",richtig:false,this: false},
          {i:3,Antwort: "/etc/apt/apt.conf.d",richtig: false,this: false},
          {i:4,Antwort: "/etc/apt/sources.list",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 8,
        Frage: 'Which of the following environment variables overrides or extends the list of directories holding shared libraries?',
        Antwort:
        [
          {i:1,Antwort: "LD_LOAD_PATH",richtig:false,this: false},
          {i:2,Antwort: "LD_LIB_PATH",richtig:false,this: false},
          {i:3,Antwort: " LD_LIBRARY_PATH",richtig: true,this: false},
          {i:4,Antwort: "LD_SHARE_PATH",richtig: false,this: false},
        ]
      },
      {
        FragenIndex: 9,
        Frage: 'In the vi editor, which of the following commands will copy the current line into the vi buffer',
        Antwort:
        [
          {i:1,Antwort: "c",richtig:false,this: false},
          {i:2,Antwort: "cc",richtig:false,this: false},
          {i:3,Antwort: "1c",richtig: false,this: false},
          {i:4,Antwort: "1y",richtig: true,this: false},
        ]
      },
      {
        FragenIndex: 10,
        Frage: 'Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination',
        Antwort:
        [
          {i:1,Antwort: "/etc/keys",richtig:false,this: false},
          {i:2,Antwort: "/proc/keys",richtig:false,this: false},
          {i:3,Antwort: "/etc/inittab",richtig: true,this: false},
          {i:4,Antwort: "/proc/inittab",richtig: false,this: false},
        ]
      }
    ]
  }
}
