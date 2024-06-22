import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { ApiService } from 'src/app/services/API/api.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent implements OnInit {
  public themeClass: string = "ag-theme-quartz";
  rowData:any=[];
  gridOptions:GridOptions={
    domLayout:'autoHeight',
    animateRows: true,
    defaultColDef: {
      flex:1,
      wrapText: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      sortable: false,
      autoHeight: true,
    },
  }
  colDefs: ColDef[] = [
    { field: "fname" ,headerName:'First Name'  },
    { field: "lname" ,headerName:'Last Name'},
    { field: "email" ,headerName:'Email Id'},
    { field: "mobile" ,headerName:'Mobile Number'},
    { field: "gender" ,headerName:'Gendar'},
    { field: "addharnumber" ,headerName:'Aadhar Number'},
    { field: "pancard" ,headerName:'Pancard'},
    { field: "address" ,headerName:'Address'},
  ];
  constructor(private apiService:ApiService,
    private matDialog:MatDialog
  ) { }

  ngOnInit() {
    this.getCustomerList()
  }
  getCustomerList(){
      this.apiService.getCustomerList().subscribe((res)=>{
        console.log(res);
        this.rowData = res;
      })
  }
  onAddNewCustomer(){
    let addCustomerform = this.matDialog.open(AddCustomerComponent,{
      width:'50vw',
      height:'auto',
      autoFocus: false,
      disableClose: true,
      closeOnNavigation: true,
    });
    addCustomerform.afterClosed().subscribe((data: any) => {})
  }
}
