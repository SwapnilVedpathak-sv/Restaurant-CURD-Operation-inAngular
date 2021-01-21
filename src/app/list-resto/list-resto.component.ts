import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  showSpinner = true;
  constructor(private resto:RestoService) { }
  collection:any=[];
  ngOnInit(): void {

 this.resto.getList().subscribe((result)=>{
  this.showSpinner = false;
  console.warn(result);
  this.collection=result;
 })
  }
  deleteResto(item:any){
    console.warn("run",this.collection)
    this.collection.splice(item-1, 1)
    
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn(result)
    })
  }
  
  exit() {
    location.reload();
  }

}
