import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uniquelist',
  templateUrl: './uniquelist.component.html',
  styleUrls: ['./uniquelist.component.css']
})
export class UniquelistComponent implements OnInit {
  itemInput:any[]=[];
  order:boolean = false;
  constructor() { }
  ngOnInit(){
    
  }
  remove(value:any){
    const index: number = this.itemInput.indexOf(value);
    this.itemInput.splice(index, 1);
  }
  
    
    OnAdd(searchValue:string) {  
      console.log("itemInput", this.itemInput)
      return this.itemInput.push(searchValue);
    }
  
    sort(){
      this.order = !this.order;
      this.itemInput.sort((n1,n2) => {       
       return (this.order)? n1.localeCompare(n2):n2.localeCompare(n1);
     });
    }
  }
