export class pricePackage {

    public packageName: string;
    public pricePerMonth: number;
    public boardCount: number;
    public colabCount: number;
    public packageIcon;

    constructor(pricePackage?: pricePackage) {
        Object.assign(this, pricePackage);
    }

}