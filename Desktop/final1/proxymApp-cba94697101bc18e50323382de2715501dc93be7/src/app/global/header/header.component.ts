import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
frame : boolean = false ;
  @ViewChild('myDiv')
  myDiv!: ElementRef<HTMLElement>;

  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
  }

  activate(){
this.frame= !this.frame;
  }
  close(){
    this.triggerFalseClick()
  }


  triggerFalseClick() {
      let el: HTMLElement = this.myDiv.nativeElement;
    //  console.log(el);
      el.click();
  }
  logout(){
    this.triggerFalseClick()
    this.triggerFalseClick()
  this.loginservice.isLoggedin=false;
  this.loginservice.logout();
  }
}
