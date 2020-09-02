import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  // ProjectName: string;
  // CustomerName: string;
  // Location: string;


  id
  updateFlag=false
  updateIndex
  public name : any = {  
    Project: "", Customer : "", Location : ""  
  };

  // creating routes to navigate between webpages
  constructor(private router:Router, public route: ActivatedRoute,) { }

  ngOnInit() {

    console.log(window.history.state)
    if(window.history.state.update){
      console.log(window.history.state)
      this.updateFlag=window.history.state.update

      this.updateIndex=window.history.state.index
      this.name=window.history.state.data
  }
  }
  

  onAdd = function(user: NgForm){
    
  }
  adddetails(name){
    this.router.navigateByUrl('', { state: { name: name } });  
  }

  cancel(){
    this.router.navigate(['']);
 }
 
 update(){
    this.router.navigateByUrl('', { state: { name: this.name,index: this.updateIndex } })
    this.name={}
    this.updateIndex=undefined
    this.updateFlag=false
 }
 
}

