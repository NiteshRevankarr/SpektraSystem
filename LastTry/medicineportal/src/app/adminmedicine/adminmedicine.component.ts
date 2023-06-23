import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../category/Category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { CategoryService } from '../category.service';
import { Order } from '../customerorder/customerorder';
import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';
import { Medicine } from './Medicine';
import { ToastrService } from 'ngx-toastr';




 

@Component({
  selector: 'app-adminmedicine',
  templateUrl: './adminmedicine.component.html',
  styleUrls: ['./adminmedicine.component.css']
})

export class AdminmedicineComponent implements OnInit {
  formValue!: FormGroup;
  orders: Order[] = [];
  totalSales: number = 0;
  totalOrders: number = 0;
  status = false;
  userCount!: number;

    medicineData: Medicine[] = [];
    categoryData: Category[] = [];
    selectedMedicine!: Medicine;
    addMedicineForm: FormGroup;
    editMedicineForm: FormGroup;
  
    finalValue: any;
    medicine:any;
    imageSrc!: string;

  
    @ViewChild('fileInputAdd', { static: false }) fileInputAdd!: ElementRef;
    @ViewChild('fileInputEdit', { static: false }) fileInputEdit!: ElementRef;

  
    constructor(private medicineService: MedicineService, private formBuilder: FormBuilder,
      private categoryService: CategoryService,private customerService: CustomerService,
      private loginservice:LoginService,
      private userCountService: UserCountService,private toastr: ToastrService) {
      this.addMedicineForm = this.formBuilder.group({

        image: ['', Validators.required],
        name: ['', Validators.required],
       // categoryID: ['', Validators.required],
        categoryName: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required],
        expirationDate: ['', Validators.required],
        seller: ['', Validators.required],
        description: ['', Validators.required],
      });
  
  

      this.editMedicineForm = this.formBuilder.group({
             medicineID: [''],
           image: ['', Validators.required],
           name: ['', Validators.required],
         //  categoryID: ['', Validators.required],
           categoryName: ['', Validators.required],
           price: ['', Validators.required],
           quantity: ['', Validators.required],
           expirationDate: ['', Validators.required],
           seller: ['', Validators.required],
           description: ['', Validators.required],
      });
  

    }
  

    ngOnInit(): void {
      this.getMedicines();
      this.getCategories();
      this.fetchOrders();
      this.fetchTotalSales();
      this.fetchTotalOrders();
      this.userCountService.getUserCount().subscribe(count => {
       this.userCount = count;
     });
   }
  
  
  
   
  fetchTotalSales(): void {
    this.customerService.getTotalSales().subscribe(
      (data: number) => {
        this.totalSales = data;
      },
      (error) => {
        console.error('Error fetching total sales:', error);
      }
    );
  }

  fetchTotalOrders(): void {
    this.customerService.getTotalOrders().subscribe(
      (data: number) => {
        this.totalOrders = data;
      },
      (error) => {
        console.error('Error fetching total orders:', error);
      }
    );
  }

  fetchOrders(): void {
    this.customerService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
 
  
    getMedicines(): void {
      this.medicineService.getMedicines().subscribe((data: Medicine[]) => {
        console.log('Medicines data:', data); // Add this line to log the data
        this.medicineData = data;
      });
    }
    
    onImageSelected(event: any, formControlName: string) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        if (file) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            // Store the image source (base64 data)
            this.imageSrc = e.target.result; 
            this.addMedicineForm.patchValue({ image: this.imageSrc});
          };
          // Convert the selected file to base64 data
          reader.readAsDataURL(file); 
        }
      }
    }


    onImageSelected1(event: any, formControlName: string) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
          const reader = new FileReader();
          if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              // Store the image source (base64 data)
              this.imageSrc = e.target.result; 
              this.editMedicineForm.patchValue({ image: this.imageSrc});
            };
            // Convert the selected file to base64 data
            reader.readAsDataURL(file); 
          }
      }
    }
    
  

    getCategories(): void {
      this.categoryService.getCategories().subscribe((data: Category[]) => {
        this.categoryData = data;
      });
  
    }

  
    addToggle() {
      this.status = !this.status;
    }
  
    onEdit(medicine: Medicine): void {
      this.selectedMedicine = { ...medicine };
      this.editMedicineForm.patchValue(this.selectedMedicine);

    }
  
  
    deleteMedicine(medicine: Medicine): void {
  this.medicineService.deleteMedicine(medicine.medicineID).subscribe(() => {
 this.medicineData = this.medicineData.filter((m) => m.medicineID !== medicine.medicineID);});
 this.toastr.info('Medicine deleted successfully');
}
  
  

 postMedicineDetails(): void {
  this.medicineService
      .addMedicine(this.addMedicineForm.value)
      .subscribe({ next: (data: Medicine) => {
        this.toastr.success('Medicine added successfully');
          console.log('Medicine added successfully:', data);
          console.log(data);
          this.getMedicines();
          this.addMedicineForm.reset();
        },

        error: (error) => {

          console.error('Error adding medicine:', error);

        }

      });

  }

  updateMedicineDetails(): void {
    this.medicineService
      .updateMedicine(this.editMedicineForm.value)
      .subscribe({
        next: (data: Medicine) => {
          this.toastr.success('Medicine updated successfully');
          console.log('Medicine updated successfully:', data);
          this.getMedicines();
          this.editMedicineForm.reset();
        },
        error: (error) => {
          console.error('Error updating medicine:', error);
        }
      });
  }
  


   
  

  clearFileInput(inputRef: string) {
    console.log('clearFileInput called with inputRef:', inputRef);
    if (inputRef === 'fileInputAdd') {
      this.fileInputAdd.nativeElement.value = '';
    } else if (inputRef === 'fileInputEdit') {
      this.fileInputEdit.nativeElement.value = '';
    }
  }
}
  
  
  
  
  









