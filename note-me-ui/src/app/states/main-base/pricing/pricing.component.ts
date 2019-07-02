import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review/review.service';
import { PricePackageService } from 'src/app/services/pricing/price-package.service';
import { pricePackage } from 'src/app/models/pricing/pricePackage.model';
import { Review } from 'src/app/models/review/review.model';
import { TwitterReview } from 'src/app/models/review/twitterReview.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nm-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.less']
})
export class PricingComponent implements OnInit {

  private monthlyPricing: pricePackage[];
  private yearlyPricing: pricePackage[];
  private featuredReview: Review;
  private twitterReviews: TwitterReview[];
  private subscriptions: Subscription[];

  constructor(
    private reviewService: ReviewService,
    private pricingService: PricePackageService
  ) { }

  ngOnInit() {
    this.loadPricing();
    this.loadReviews();
  }

  private loadReviews() {
    // load the Featured Review
    this.subscriptions.push(
      this.reviewService.featuredReview.subscribe(
        (review) => {
          this.featuredReview = review;
        }
      )
    );

    // load the twitter reel reviews
    this.subscriptions.push(
      this.reviewService.twitterReviews.subscribe(
        (reviews) => {
          this.twitterReviews = reviews;
        }
      )
    );
  }

  private loadPricing() {
    // load monthly pricing
    this.subscriptions.push(
      this.pricingService.monthlyPricing.subscribe(
        (pricing) => {
          this.monthlyPricing = pricing;
        }
      )
    );

    // load yearly pricing
    this.subscriptions.push(
      this.pricingService.yearlyPricing.subscribe(
        (pricing) => {
          this.yearlyPricing = pricing;
        }
      )
    );
  }

  // clean subscriptions and data leak
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}