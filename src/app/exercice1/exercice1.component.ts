import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {


  //exemple pour binder la propriete href du lien
  public lien : String ="https://dyma.fr/";

  //exemple pour le double data bind
  public nom : String ="par defaut bernard";

  // exemple pour la string interpolation exemple a part
  public stringInterpolation: String = "je suis une string interploation";




  constructor() { }

  ngOnInit() {
  }
  alerterUser() : void{
    alert('coucouu :)');
  }

}
