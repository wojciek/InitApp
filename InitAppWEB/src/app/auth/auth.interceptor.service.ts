import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = localStorage.getItem('authToken');

        if (authToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'Bearer ' + authToken)
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
