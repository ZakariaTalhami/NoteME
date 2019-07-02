export class Review {

    public reviewText: string;
    public reviewer: string;
    public reviewerOccupation: string;
    public profileImage;

    constructor(review?: Review){
        Object.assign(this, review);
    }

}