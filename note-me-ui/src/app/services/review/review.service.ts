import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { TwitterReview } from 'src/app/models/review/twitterReview.model';
import { Review } from 'src/app/models/review/review.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private _twitterReviews: BehaviorSubject<TwitterReview[]>;
  private _featuredReview: BehaviorSubject<Review>;

  private featuredReviewList: Review = {
    profileImage: "fill with somehing better",
    reviewText: "jakfj afasfjka lkajkf askjfass asjfakj akjfn kjafnka kjk jkanfkjlas asflkjasf asasd as ss kasdfa slkkla fnasjkss js sajjkas",
    reviewer: "The king of pizza",
    reviewerOccupation: "Pizza king"
  }

  private twitterReviewsList: TwitterReview[] = [
    {
      profileImage: "fill with somehing better",
      reviewText: "jakfj afasfjka lkajkf askjfass asjfakj akjfn kjafnka kjk jkanfkjlas asflkjasf asasd as ss kasdfa slkkla fnasjkss js sajjkas",
      reviewer: "The king of pizza",
      reviewerOccupation: "Pizza king",
      twitterAccountLink: "some link to somewhere",
      twitterId: "the id of the reviewer"
    },
    {
      profileImage: "fill with somehing better",
      reviewText: "jakfj afasfjka lkajkf askjfass asjfakj akjfn kjafnka kjk jkanfkjlas asflkjasf asasd as ss kasdfa slkkla fnasjkss js sajjkas",
      reviewer: "The king of pizza 2",
      reviewerOccupation: "Pizza king",
      twitterAccountLink: "some link to somewhere",
      twitterId: "the id of the reviewer"
    },
    {
      profileImage: "fill with somehing better",
      reviewText: "jakfj afasfjka lkajkf askjfass asjfakj akjfn kjafnka kjk jkanfkjlas asflkjasf asasd as ss kasdfa slkkla fnasjkss js sajjkas",
      reviewer: "The king of pizza 3",
      reviewerOccupation: "Pizza king",
      twitterAccountLink: "some link to somewhere",
      twitterId: "the id of the reviewer"
    },
  ]

  constructor(private http: HttpClient) {
    this._featuredReview = new BehaviorSubject<Review>(undefined);
    this._twitterReviews = new BehaviorSubject<TwitterReview[]>([]);
  }

  
  public get twitterReviews() : Observable<TwitterReview[]> {
    if(this._twitterReviews.getValue().length === 0){
      // this.getReelReviews();
      this._twitterReviews.next(this.twitterReviewsList);
    }
    return this._twitterReviews.asObservable();
  }
  

  public get featuredReview(): Observable<Review> {
    if (!this._featuredReview.getValue()) {
      // this.getFeatureReview();
      this._featuredReview.next(this.featuredReviewList);
    }
    return this._featuredReview.asObservable();
  }


  private getFeatureReview() {
    this.http.get<Review>("")
      .pipe(
        tap((review) => {
          this._featuredReview.next(review);
        })
      );
  }

  private getReelReviews() {
    this.http.get<Review>("")
      .pipe(
        tap((reviews) => {
          this._featuredReview.next(reviews);
        })
      );
  }

}
