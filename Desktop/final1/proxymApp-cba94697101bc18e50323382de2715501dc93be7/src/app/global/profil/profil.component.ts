import { Component, OnInit } from '@angular/core';
import { PersonneModule } from 'src/app/model/personne/personne.module';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-profil', 
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

border: boolean = false ;
disable:boolean=true ;
personne : PersonneModule = new PersonneModule();

  constructor(private personneservice : PersonneService) { 
    
  }

  ngOnInit(): void {
  }

  edit(){
this.border = true ;
this.disable=false ;
  }


}
