import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
public title2:string="Hello world!";
public redFlag:boolean=true;
public greenFlag:boolean=false;
public blueFlag:boolean=true;
public tempText:string="Good Morning";
public someAttr:string="some Value for attribute";
public color:string="darkgreen";
public showDivFlag:boolean=true;
public hiddenFlag:boolean=true;
public type:string="text";
public divValue:string="Initial Value";
getTextValue(){
return this.tempText;
}
changeText(){
this.tempText="Good Night";
this.someAttr="test1";
this.title2="title changed";
this.blueFlag=false;
this.redFlag=false;
this.greenFlag=true;
this.color="gray";
this.showDivFlag=false;
this.hiddenFlag=false;
this.type="password";
}
reset(){
this.tempText="Good Morning";
this.someAttr="test2";
this.title2="title Reset";
this.blueFlag=true;
this.redFlag=true;
this.greenFlag=false;
this.color="darkgreen";
this.showDivFlag=true;
this.hiddenFlag=true;
this.type="text";
}
changeDivText(){
this.divValue="changed value of div after div click";
}



  ngOnInit() {
  }

}