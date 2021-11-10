import Country from "./Country";

export interface Representative {
    name: string;
    image: string
}

export default interface Customer{
    id: number
    name: string
    country: Country
    company: string
    date: string
    status: string
    activity: number
    representative: Representative
}
