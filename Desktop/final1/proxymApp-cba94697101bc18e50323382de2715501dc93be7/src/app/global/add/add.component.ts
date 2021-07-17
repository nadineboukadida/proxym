import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeService } from 'src/app/service/demande.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
selected1 : boolean = false ;
selected2 : boolean = false ;
selected3 : boolean = false ;
selected4 : boolean = false ;
types : string ='';
 final !: {name :string ,types :string , level : number} ;

  constructor(private positionservice: PositionService,
    private demandeservice : DemandeService
    ) { 

  }

  ngOnInit(): void {
    this.positionservice.changePosition("add");
  
  }
select1 (){
  this.selected1=!this.selected1;
}
select2 (){
  this.selected2=!this.selected2;
}
select3 (){
  this.selected3=!this.selected3;
}
select4 (){
  this.selected4=!this.selected4;
}



onSubmit (myform: { name : string , 
   date :string ,paies:boolean, 
   attsalaire:boolean , 
   atttravail : boolean, certif:boolean}){
  console.log(myform);
  if (myform.paies)
  {

    this.types= this.types+"1";

  }
  if (myform.attsalaire==true)
  {
  
    console.log('hiiiii')
    this.types=this.types+"2";
  
  }
  if (myform.atttravail)
  {
    this.types= this.types+"3";
  }
  if (myform.certif)
  {
    this.types= this.types+"4";

  }

  this.final={name : myform.name ,
    
     types : this.types ,
     level:1
     
    }
  console.log(this.final)
  this.demandeservice.addDemande(this.final).then();
}



}
