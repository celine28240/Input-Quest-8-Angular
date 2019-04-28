import { Component, OnInit } from '@angular/core';

import { Developer} from '../common/developer.model';
import { Skill} from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new Developer("HENICHARD", "Céline", 42, "Femme", "Wild Code School",[
    new Skill ("Angular", "https://cdn.springpeople.com/media/Angular-1526190252.png","https://angular.io"),
    new Skill ("Javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/256px-Unofficial_JavaScript_logo_2.svg.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
  ]);
  
  constructor() { }

  ngOnInit() {
  }

}
