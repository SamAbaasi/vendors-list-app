
export interface Vendors {
    data: {
        finalResult: VendorType[],
        'open_count': number
    }

}
export interface VendorDataType {
    id: number;
    title: string;
    description: string;
    rate: number;
    countReview: number;
    costsForTwo: number;
    isZFExpress: boolean;
    deliveryFee: number;
    backgroundImage: string;
    logo: string;
}
export interface VendorType {
    data: VendorDataType
}
