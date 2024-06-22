import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent implements OnInit {
  public themeClass: string = "ag-theme-quartz";
  rowData:any=[];

  colDefs: ColDef[] = [
    { field: "fname" ,headerName:'First Name', filter: true, floatingFilter: true },
    { field: "lname" ,headerName:'Last Name', filter: true, floatingFilter: true },
    { field: "email" ,headerName:'Email Id', filter: true, floatingFilter: true },
    { field: "mobile" ,headerName:'Mobile Number', filter: true, floatingFilter: true },
    { field: "gender" ,headerName:'Gendar', filter: true, floatingFilter: true },
    { field: "addharnumber" ,headerName:'Aadhar Number', filter: true, floatingFilter: true },
    { field: "pancard" ,headerName:'Pancard', filter: true, floatingFilter: true },
    { field: "address" ,headerName:'Address', filter: true, floatingFilter: true },
  ];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getCustomerList()
  }
  getCustomerList(){
      this.apiService.getCustomerList().subscribe((res)=>{
        console.log(res);
        this.rowData = res;
      })
  }

}
