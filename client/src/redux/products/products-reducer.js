import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QTY } from "./products-actionTypes";

//images
import one from '../../images/products/1.jpg';
import two from '../../images/products/2.jpg';
import three from '../../images/products/3.jpg';
import four from '../../images/products/4.jpg';
import five from '../../images/products/5.jpg';
import six from '../../images/products/6.jpg';
import seven from '../../images/products/7.jpg';
import eight from '../../images/products/8.jpg';
import nine from '../../images/products/9.jpg';
import ten from '../../images/products/10.jpg';
import eleven from '../../images/products/11.jpg';
import twelve from '../../images/products/12.jpg';
import thirteen from '../../images/products/13.jpg';
import fourteen from '../../images/products/14.jpg';
import fifteen from '../../images/products/15.jpg';
import sixteen from '../../images/products/16.jpg';
import seventeen from '../../images/products/17.jpg';
import eighteen from '../../images/products/18.jpg';
import nineteen from '../../images/products/19.jpg';
import twenty from '../../images/products/20.jpg';
import twentyOne from '../../images/products/21.jpg';
import twentyTwo from '../../images/products/22.jpg';
import twentyThree from '../../images/products/23.jpg';
import twentyFour from '../../images/products/24.jpg';
import twentyFive from '../../images/products/25.jpg';

const initialState = {
  products: [
      {
        id: 1,
        name: 'Nike Air VaporMax EVO NRG',
        subTitle: `Men's Shoe`,
        image: one,
        price: 160,
        availability: '2 colors',
        newRealse: false,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 2,
        name: 'Nike Cosmic Unity',
        subTitle: `Women's Shoe`,
        image: two,
        availability: '2 colors',
        newRealse: false,
        price: 110,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 3,
        name: 'Air Jordan 11',
        subTitle: `Men's Shoe`,
        image: three,
        availability: '3 colors',
        newRealse: false,
        price: 85,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 4,
        name: 'Nike React Infinity Run',
        subTitle: `Men's Shoe`,
        image: four,
        availability: '5 colors',
        newRealse: false,
        price: 225,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 5,
        name: `Nike Blazer Mid '77`,
        subTitle: `Men's Shoe`,
        image: five,
        availability: '3 colors',
        newRealse: false,
        price: 185,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 6,
        name: 'Air Jordan XXXV',
        subTitle: `Women's Shoe`,
        image: six,
        availability: '2 colors',
        newRealse: false,
        price: 165,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 7,
        name: 'Nike Free TR8',
        subTitle: `Women's Shoe`,
        image: seven,
        availability: '2 colors',
        newRealse: false,
        price: 185,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 8,
        name: 'Nike Romaleos 4',
        subTitle: `Men's Shoe`,
        image: eight,
        availability: '2 colors',
        newRealse: true,
        price: 200,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 9,
        name: 'Nike SuperRep Go',
        subTitle: `Men's Shoe`,
        image: nine,
        availability: '2 colors',
        newRealse: false,
        price: 130,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 10,
        name: 'Nike HyperSpeed Court',
        subTitle: `Women's Shoe`,
        image: ten,
        availability: '2 colors',
        newRealse: false,
        price: 120,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 11,
        name: 'Air Jordan Mid 1',
        subTitle: `Men's Shoe`,
        image: eleven,
        availability: '1 color',
        newRealse: true,
        price: 90,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 12,
        name: 'Nike React Metcon Turbo',
        subTitle: `Women's Shoe`,
        image: twelve,
        availability: '2 colors',
        newRealse: true,
        price: 125,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 13,
        name: 'Nike Air Force 1',
        subTitle: `Women's Shoe`,
        image: thirteen,
        availability: '2 colors',
        newRealse: false,
        price: 100,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 14,
        name: 'Nike Air Zoom SuperRep 2',
        subTitle: `Women's Shoe`,
        image: fourteen,
        availability: '2 colors',
        newRealse: false,
        price: 110,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 15,
        name: 'Nike Metcom 6',
        subTitle: `Men's Shoe`,
        image: fifteen,
        availability: '2 colors',
        newRealse: false,
        price: 120,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 16,
        name: 'Jordan MA2',
        subTitle: `Men's Shoe`,
        image: sixteen,
        availability: '2 colors',
        newRealse: true,
        price: 85,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 17,
        name: 'Nike Cosmic Unity Amalgam',
        subTitle: `Women's Shoe`,
        image: seventeen,
        availability: '2 colors',
        newRealse: false,
        price: 145,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 18,
        name: `PG 5 "LA Drip"`,
        subTitle: `Men's Shoe`,
        image: eighteen,
        availability: '2 colors',
        newRealse: false,
        price: 80,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 19,
        name: 'Nike ZoomX Invincible Run Flyknit',
        subTitle: `Men's Shoe`,
        image: nineteen,
        availability: '2 colors',
        newRealse: false,
        price: 85,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 20,
        name: 'Nike SB BLZR Court',
        subTitle: `Men's Shoe`,
        image: twenty,
        availability: '2 colors',
        newRealse: false,
        price: 120,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 21,
        name: 'LeBron 18 Black/Electric',
        subTitle: `Men's Shoe`,
        image: twentyOne,
        availability: '2 colors',
        newRealse: true,
        price: 200,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 22,
        name: 'Roswell Rayguns Chuck 70',
        subTitle: `Women's Shoe`,
        image: twentyTwo,
        availability: '2 colors',
        newRealse: false,
        price: 135,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 23,
        name: 'Nike SuperRep Cycle',
        subTitle: `Men's Shoe`,
        image: twentyThree,
        availability: '2 colors',
        newRealse: false,
        price: 170,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 24,
        name: `Nike Blazer Mid '77`,
        subTitle: `Women's Shoe`,
        image: twentyFour,
        availability: '3 colors',
        newRealse: false,
        price: 165,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
        id: 25,
        name: 'Nike DBreak-Type',
        subTitle: `Men's Shoe`,
        image: twentyFive,
        availability: '1 color',
        newRealse: false,
        price: 130.00,
        description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    }
  ],
  cart: [],
  currentItem: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return
    default:
      return state;
  }
};

export default productsReducer;