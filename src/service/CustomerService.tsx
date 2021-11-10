import axios from 'axios'
import CustomerResponse from "../models/CustomerResponse";

export class CustomerService {
    getCustomersMedium() {
        return axios.get<CustomerResponse>('assets/demo/data/customers-medium.json')
            .then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios.get<CustomerResponse>('assets/demo/data/customers-large.json')
                .then(res => res.data.data);
    }

}
