import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
