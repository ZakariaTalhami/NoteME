import { isDevMode, Inject, Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {
                url: this.prepareUrl(req.url)
            }
        )
        return next.handle(req);
    }

    private isAbsoluteUrl(url: string): boolean {
        let pattern = /^https?:\/\//i;
        return pattern.test(url);
    }

    private isApiPrefixed(url: string): boolean {
        let pattern = /^api\//i;
        return pattern.test(url);
    }

    private prepareUrl(url: string): string {
        if (isDevMode) {
            return (this.isAbsoluteUrl(url) || this.isApiPrefixed(url)) ? url : 'api/' + url
        } else {
            return url;
        }
    }
}