import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../admin-medicine/AdminCategory';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminCategoryService } from '../admin-category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent  implements OnInit{

    formValue !:FormGroup;
    categoryModelObj: CategoryModel=new CategoryModel();
    categoryData!: any;
    row : any;
     constructor(private formbuilder: FormBuilder,
       private api : AdminCategoryService){ } 
     ngOnInit(): void{
       this.formValue = this.formbuilder.group({
         categoryName : [''],
       })
       this.getAllCategory();
     }
     postCategoryDetails(){
       this.categoryModelObj.categoryName = this.formValue.value.categoryName;
       this.api.postCategory(this.categoryModelObj)
       .subscribe(res=>{
         console.log(res);
         alert("Category Added Successfully")
         let ref = document.getElementById('cancle')
         ref?.click();
         this.formValue.reset();
         window.location.reload();
       })
     }
     
     getAllCategory() {
       this.api.getCategory(DataView).subscribe(res => {
         this.categoryData = res;
         this.api.setCategoryData(res);
       });
     }
   
   
     deleteCategory(row : any){
       this.api.deleteCategory(row.id)
       .subscribe(res=>{
         alert("Category deleted!!!")
         this.getAllCategory()
       })
     }
   
   }
   
  
