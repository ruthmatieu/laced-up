import Container from "../components/Container";
import WomenShoes from "../products/WomenShoes";
//import MenShoes from "../products/MenShoes";
//import AllShoes from "../products/AllShoes";
import ShoeItem from "../products/ShoeItem";
import Cart from "../components/Cart";
import { data } from "../data/data";

export const routes = [
    {
        path: '/',
        name: 'Homepage',
        exact: true,
        component: Container,
    },
    {
        path: '/cart',
        name: 'Cart',
        exact: true,
        component: Cart
    },
    {
        path: '/womens-shoes',
        name: 'Women Shoes',
        exact: true,
        component: WomenShoes,
        props: data
    },
    {
        path: '/mens-shoes',
        name: 'Men Shoes',
        exact: true,
        component: Container
    },
    {
        path: '/shoe/:id',
        name: 'Shoe Item',
        exact: true,
        component: ShoeItem
    },
    {
        path: '/login',
        name: 'Login',
        exact: true,
        component: Container
    },
    {
        path: '/register',
        name: 'Register',
        exact: true,
        component: Container
    }
]