import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
const authToken = ""
    const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
    return next(authReq)
}
