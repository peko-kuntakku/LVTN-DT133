export interface Apartment {
    id: number,
    Apartment_Name: string,
    Capacity: number,
    Rent_Fee: string,
    Size: number,
    Description: string,
    Floor: number,
    Kitchen: number,
    Livingroom: number,
    Bedroom: number,
    Restroom: number,
    isSingle: boolean,
    properties: PropertyItemModel[],
    building: Building;
}

export interface PropertyItemModel {
    id: number,
    name: string,
    description: string,
    price: string,
    quantity: number,
    type: string,
}

export interface Building {
    id: number,
    Building_Name: string,
    Description: string,
    Num_of_Floor: number,
    location: LocationModel,
    services: ServiceItemModel[],
}

export interface LocationModel {
    id: number,
    country: string,
    district: string,
    num: number,
    province: string,
    street: string,
    ward: string,
}

export interface ServiceItemModel {
    id: number,
    name: string,
    description: string,
    price: string,
    type: string,
    unit: string,
    isCharged: boolean,
}