import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  clients: any[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getClients().subscribe((data: any) => {
      this.clients = data;
      data.forEach((client: any) => {
        this.invoiceService.getVehiclesByClientId(client.id).subscribe((vehicles: any) => {
          client.vehicles = vehicles;
        });
        this.invoiceService.getInvoicesByClientId(client.id).subscribe((invoices: any) => {
          client.invoices = invoices;
        });
      });
    });
  }
}
