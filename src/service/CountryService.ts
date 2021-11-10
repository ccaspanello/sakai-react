import axios from 'axios'
import CountryResponse from "../models/CountryResponse";

export class CountryService {

    getCountries() {
        return axios.get<CountryResponse>('assets/demo/data/countries.json')
            .then(res => res.data.data);
    }
}
