import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor(  private httpService: HttpService,) { }

  getCategories(){
       return this.httpService.get('mobile/market/categories',AuthConstants.TOKEN)
   }

   getCartriges(){
    return this.httpService.get('mobile/market/cartridges',AuthConstants.TOKEN)

   }

}
