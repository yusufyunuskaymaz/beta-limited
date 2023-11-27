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

export type AxiosConfig = {
  headers: {
    "Session-ID": string|null;
  };
};

export type NavbarProps = {
  setProducts: React.Dispatch<React.SetStateAction<never[]>>;
};

export type ICardProps = {
  products:string[]
}