import { Review } from './review.model';

export class TwitterReview extends Review {

    public twitterId: string;
    public twitterAccountLink: string;

    constructor(twitterReview?: TwitterReview){
        super(twitterReview);
    }

}