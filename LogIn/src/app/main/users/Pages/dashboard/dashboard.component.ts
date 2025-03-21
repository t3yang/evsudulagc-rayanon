import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalSales = 15000;
  totalOrders = 120;
  totalProducts = 45;

  transactions = [
    { customer: 'John Doe', amount: 250, date: new Date() },
    { customer: 'Jane Smith', amount: 500, date: new Date() },
    { customer: 'Alice Brown', amount: 150, date: new Date() },
  ];

  newSale() {
    alert('Redirecting to new sale...');
  }

  manageProducts() {
    alert('Redirecting to product management...');
  }

  viewReports() {
    alert('Redirecting to reports...');
  }
}
