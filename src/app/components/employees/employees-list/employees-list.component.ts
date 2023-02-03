import { Component ,OnInit } from '@angular/core';
import { Employee } from 'models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit  {

    employees: Employee[] = [
    { 
      id : '0000000001',
      name:'John Doe',
      email:'Jhon.doe@email.com',
      phone:998877665,
      salary: 10000,
      department: 'Human Resources'
    },
    {
      id : '0000000002',
      name:'Omar Castro',
      email:'Omar.Castro@email.com',
      phone:998877634,
      salary: 15000,
      department: 'Software'

    },
    {
      id : '0000000003',
      name:'Maria Lewis',
      email:'Maria.Lewis@email.com',
      phone:998877623,
      salary: 20000,
      department: 'Human Resources'

    },

  ];
  constructor() { }
  ngOnInit(): void {
      
  }

}

