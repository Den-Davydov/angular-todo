import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Border } from '../model/border';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  borders:Border[];



getBorders() {
  console.log('service');
  
   this.apiService.getBorder()
  .subscribe(borders => this.borders = borders);
  
}

addBorder(border:Border):Observable<Border[]>{
  console.log("add Border service");
  console.log(this.borders);
  this.apiService.getBorder()
  .subscribe(borders => this.borders = borders);
  console.log(this.borders);

  this.apiService.addBorder(border)
  .subscribe(border => this.borders.push(border));
  this.apiService.getBorder()
  .subscribe(borders => this.borders = borders);
  console.log(this.borders);
  
  return ;
}

deleteBorder(border:Border):Observable<Border[]>{
  console.log("delete Border service");
  this.getBorders();
    let index=this.borders.indexOf(border);
    if(index>-1){
      this.borders.splice(index,1)
    }
  return of(this.borders);
}

// deleteTodo(todo:Todo,border:Border):Observable<Border[]>{
//   console.log("delete Todo service");
//   this.getBorders();
//     let index=this.borders.indexOf(border);
//     let index1=this.borders[index].items.indexOf(todo);
//     if(index>-1 && index1>-1){
//       this.borders[index].items.splice(index1,1)
//     }
//   return of(this.borders);
// }

// editTodo(todo:Todo,border:Border):Observable<Border[]>{
//   this.getBorders();
//   let index1=this.borders.indexOf(border);
// let index=this.borders[index1].items.indexOf(todo);
// this.borders[index1].items[index].title=prompt("Edit todo",  this.borders[index1].items[index].title);
// return of(this.borders);
// }

// addTodo(todo:Todo, border:Border):Observable<Border[]>{
//   this.getBorders();
//   let index=this.borders.indexOf(border); 
//     console.log('add Todo Service') 
 
//  this.borders[index].items.push(todo)
//   return of(this.borders);
//   }



  constructor(private apiService:ApiService) { }
}
