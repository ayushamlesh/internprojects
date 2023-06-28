import { ActivatedRouteSnapshot } from '@angular/router';

export interface CustomActivatedRouteSnapshot extends ActivatedRouteSnapshot {
  data: {
    expectedRole: string;
  };
}