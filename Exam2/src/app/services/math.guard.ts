import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MathGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url = next.url;
    let first = Number(url[1]);
    let second = Number(url[2]);
    let ans = Number.isInteger(first/second);
    
    if(!ans) {
      this.router.navigate(['/bounced']);
    }
    return ans;
  }
}
