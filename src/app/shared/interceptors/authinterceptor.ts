import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
const authToken =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODQwMTQxZDNmZDMwYWNlZjc5Y2RjN2U3ZjVlMTYzMyIsInN1YiI6IjYzZmEzYmRlNTcxNzZmMDBiY2JmOTIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VlGHFMSIJQMPVydl3aaejztwLEuO4uuNHqn9Lk1jBWk"
    const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
    return next(authReq)
}
