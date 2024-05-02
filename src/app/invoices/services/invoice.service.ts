import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Invoice } from "../model/invoice.entity";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl = 'http://localhost:3000';
  resourceEndpoint = '/clients';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.baseUrl}${this.resourceEndpoint}`);
  }

  getInvoicesByClientId(clientId: number) {
    return this.http.get(`${this.baseUrl}${this.resourceEndpoint}/${clientId}/invoices`);
  }

  getVehiclesByClientId(clientId: number) {
    return this.http.get(`${this.baseUrl}${this.resourceEndpoint}/${clientId}/vehicles`);
  }
}
