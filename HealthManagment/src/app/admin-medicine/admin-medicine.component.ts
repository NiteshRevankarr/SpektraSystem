import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminCrudService } from '../admin-crud.service';
import { Router } from '@angular/router';
import { AdminCategoryService } from '../admin-category.service';
import { CategoryModel } from './AdminCategory';
import { MedicineModel } from './AdminMedicine';

@Component({
  selector: 'app-admin-medicine',
  templateUrl: './admin-medicine.component.html',
  styleUrls: ['./admin-medicine.component.css']
})
export class AdminMedicineComponent implements OnInit{
  addMedicineForm!: FormGroup;
  editMedicineForm!: FormGroup;
  medicineModelObj: MedicineModel = new MedicineModel();
  medicineData!: any;
  row: any;
  categories: CategoryModel[] = [];
  categoryData: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private api: AdminCrudService,
    private category: AdminCategoryService,
    private route: Router
  ) {}



  ngOnInit(): void {
    this.addMedicineForm = this.formBuilder.group({
      id: ['', Validators.required],  
      image: ['', Validators.required],
      medname: ['', Validators.required],
      categoryName: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      expirationDate: ['', Validators.required],
      seller: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.editMedicineForm = this.formBuilder.group({
      id: ['', Validators.required],
      image: ['', Validators.required],
      medname: ['', Validators.required],
      categoryName: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      expirationDate: ['', Validators.required],
      seller: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getAllMedicine();
    this.getAllCategory();
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.editMedicineForm.patchValue({
      image: file
    });
  }

  postMedicineDetails() {
    const formData = new FormData();
    this.medicineModelObj.image = this.addMedicineForm.value.image;
    this.medicineModelObj.medname = this.addMedicineForm.value.medname;
    this.medicineModelObj.categoryName = this.addMedicineForm.value.categoryName;
    this.medicineModelObj.price = this.addMedicineForm.value.price;
    this.medicineModelObj.quantity = this.addMedicineForm.value.quantity;
    this.medicineModelObj.expirationDate = this.addMedicineForm.value.expirationDate;
    this.medicineModelObj.seller = this.addMedicineForm.value.seller;
    this.medicineModelObj.description = this.addMedicineForm.value.description;

    this.api.postMedicine(this.medicineModelObj).subscribe(res => {
      console.log(res);
      alert('Medicine Added Successfully');
      let ref = document.getElementById('cancel');
      ref?.click();
      this.addMedicineForm.reset();
      this.getAllMedicine();
    });
  }

  getAllMedicine() {
    this.api.getMedicine(DataView).subscribe(res => {
      this.medicineData = res;
      console.log(this.medicineData);
    });
  }

  getAllCategory() {
    this.category.getCategory(DataView).subscribe(res => {
      this.categoryData = res;
    });
  }

  deleteMedicine(row: any) {
    this.api.deleteMedicine(row.id).subscribe(res => {
      alert('Medicine deleted!');
      this.getAllMedicine();
    });
  }
  

  onEdit(row: any) {
    this.medicineModelObj.id = row.id;
    this.editMedicineForm.controls['id'].setValue(row.id);
    this.editMedicineForm.controls['image'].setValue(row.image);
    this.editMedicineForm.controls['medname'].setValue(row.medname);
    this.editMedicineForm.controls['categoryName'].setValue(row.categoryName);
    this.editMedicineForm.controls['price'].setValue(row.price);
    this.editMedicineForm.controls['quantity'].setValue(row.quantity);
    this.editMedicineForm.controls['expirationDate'].setValue(row.expirationDate);
    this.editMedicineForm.controls['seller'].setValue(row.seller);
    this.editMedicineForm.controls['description'].setValue(row.description);
  }

 

  updateMedicineDetails() {
    this.medicineModelObj.id = this.editMedicineForm.value.id;
    this.medicineModelObj.image = this.editMedicineForm.value.image;
    this.medicineModelObj.medname = this.editMedicineForm.value.medname;
    this.medicineModelObj.categoryName = this.editMedicineForm.value.categoryName;
    this.medicineModelObj.price = this.editMedicineForm.value.price;
    this.medicineModelObj.quantity = this.editMedicineForm.value.quantity;
    this.medicineModelObj.expirationDate = this.editMedicineForm.value.expirationDate;
    this.medicineModelObj.seller = this.editMedicineForm.value.seller;
    this.medicineModelObj.description = this.editMedicineForm.value.description;

    this.api.updateMedicine(this.medicineModelObj, this.medicineModelObj.id).subscribe(res => {
      alert('Successfully Updated');
      this.getAllMedicine();

      let ref = document.getElementById('cancel');
      ref?.click();
      this.editMedicineForm.reset();
      this.getAllMedicine();
    });
  }

}


