export interface signin {
    email:string
    password:string
}

export interface signup extends signin{
    firstName:string
    lastName:string
    phoneNumber:string
    confirmPassword:string
    role:string
}

export interface user extends signup{
    address:string
    profilePic:string
    state:string
    country:string
    zipcode:number
}

export interface productDetail {
    color:string
    quantity:number
    price:number
    productImage: productImage[]
}

export type productImage = {
    filename:string
    path:string
    imageType:string
    order:number
}


export interface product{
    productId:string
    productName:string
    productTitle:string
    productDescription:string
    weight:number
    width:number
    height:number
    length:number
    productDetail?:productDetail[]
    offers?:number
}

export interface category{
    categoryId:number
    categoryName:string
    categoryTitle:string
    categoryDescription:string
    categoryImg:string
}

export type userAction = {
    type:string
    payload:any
}





