export interface InitialTypeCatalog {
    catalog: Product[],
    isLoading: boolean,
    error: string | null
}

export interface Catalog {
    items: Product[]
}

export interface Product {
    id: number, 
    image: string,
    name: string,
    price: number
}

export interface InitialTypeBasket {
    basket: Product[]
}