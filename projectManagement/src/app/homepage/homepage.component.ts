import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  projectDetails =[];


  constructor(public router: Router,  public route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.projectDetails=[]
    if(localStorage.getItem('storageobjects'))
      {
        console.log(localStorage.getItem('storageobjects'))
        this.projectDetails=this.projectDetails.concat(JSON.parse (localStorage.getItem('storageobjects')))
      
      // updating the data 
      }
     if(window.history.state.name){
       console.log(window.history.state.index)
      if(window.history.state.index!=undefined||window.history.state.index!=null) {
        console.log(this.projectDetails[window.history.state.index])
        this.projectDetails[window.history.state.index]=window.history.state.name
        localStorage.setItem('storageobjects',JSON.stringify(this.projectDetails))

      }
      else{
        this.projectDetails.push(window.history.state.name)
       localStorage.setItem('storageobjects',JSON.stringify(this.projectDetails))
       
      }
      
     } 

  }
  addNewProject(){
    this.router.navigateByUrl("/addnewproject")
  }

  updateDetails(i,data){
    this.router.navigateByUrl('/addnewproject', { state: { update : true, index: i, data:data } });  
  }
  delete(i){    
      this.projectDetails.splice(i, 1);
      localStorage.setItem('storageobjects',JSON.stringify(this.projectDetails))
}
}
