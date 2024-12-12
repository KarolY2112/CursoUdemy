import { object, string, number, Output, array } from "valibot";

export const DraftProductSchema = object({
    name: string(),
    price: number()

})

export const ProductSchema = object( {
    id: number(),
    name: string(),
    price: number(),
})

export const ProductsSchema = array(ProductSchema)
export type Product = Output<typeof ProductSchema>