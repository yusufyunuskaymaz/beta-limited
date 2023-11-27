export type IProduct = {
    count:number;
    discount:string;
    id:string;
    image:string;
    name:string;
    originalPrice:number;
    price:number;
    rating:number;
}

export type IBasket = {
    basket:{
      basketList:IProduct[]
    }
  }