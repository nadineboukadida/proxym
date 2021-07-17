import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DemandeModule } from '../model/demande/demande.module';
import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  demandes: IDemandes[] =[];
  constructor(
    private firestore: AngularFirestore
  ) {

   
   }

   addDemande (payload : IDemandes) {
     return this.firestore.collection('demands').add(payload);
   }
   getdemandes (){
    return this.firestore.collection('demands').snapshotChanges()
  
   }
   getnumber(){
     return this.demandes.length;

}}

 

export interface IDemandes {
  id?: string ; 
  name :string;
  level : number ;
  types : string;
  date ?: Timestamp<any>;
}


