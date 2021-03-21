
exports.seed = async function(knex) {
  //delete everything in the table and update to this
  await knex('products').truncate()

  await knex('products').insert([
    {
      name: 'Nike Air VaporMax EVO NRG',
      subtitle: `Men's Shoe`,
      image: '../../images/products/one.jpg',
      price: 160,
      availableColors: '2 colors',
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
    },
    {
      name: 'Nike Cosmic Unity',
      subtitle: `Women's Shoe`,
      image: '../../images/products/two.jpg',
      availableColors: '2 colors',
      price: 110,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: `Nike Metcon 6 By You`,
      subtitle: `Men's Shoe`,
      image: '../../images/products/three.jpg',
      availableColors: '3 colors',
      price: 85,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike React Infinity Run',
      subtitle: `Men's Shoe`,
      image: '../../images/products/four.jpg',
      availableColors: '5 colors',
      price: 225,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: `Nike Blazer Mid '77`,
      subtitle: `Men's Shoe`,
      image: '../../images/products/five.jpg',
      availableColors: '3 colors',
      price: 185,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Air Jordan XXXV',
      subtitle: `Women's Shoe`,
      image: '../../images/products/six.jpg',
      availableColors: '2 colors',
      price: 165,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Free TR8',
      subtitle: `Women's Shoe`,
      image: '../../images/products/seven.jpg',
      availableColors: '2 colors',
      price: 185,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Romaleos 4',
      subtitle: `Men's Shoe`,
      image: '../../images/products/eight.jpg',
      availableColors: '2 colors',
      price: 200,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike SuperRep Go',
      subtitle: `Men's Shoe`,
      image: '../../images/products/nine.jpg',
      availableColors: '2 colors',
      price: 130,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike HyperSpeed Court',
      subtitle: `Women's Shoe`,
      image: '../../images/products/ten.jpg',
      availableColors: '1 color',
      price: 120,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Air Max 97',
      subtitle: `Men's Shoe`,
      image: '../../images/products/eleven.png',
      availableColors: '1 color',
      price: 90,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike React Metcon Turbo',
      subtitle: `Women's Shoe`,
      image: '../../images/products/seven.png',
      availableColors: '2 colors',
      price: 125,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Air Max 270',
      subtitle: `Women's Shoe`,
      image: '../../images/products/eight.png',
      availableColors: '2 colors',
      price: 100,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Air Zoom SuperRep 2',
      subtitle: `Women's Shoe`,
      image: '../../images/products/five.png',
      availableColors: '2 colors',
      price: 110,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Metcom 6',
      subtitle: `Men's Shoe`,
      image: '../../images/products/one.jpg',
      availableColors: '2 colors',
      price: 120,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Space Hippie 03',
      subtitle: `Men's Shoe`,
      image: '../../images/products/two.jpg',
      availableColors: '2 colors',
      price: 85,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike Cosmic Unity Amalgam',
      subtitle: `Women's Shoe`,
      image: '../../images/products/three.jpg',
      availableColors: '2 colors',
      price: 145,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: `PG 5 "LA Drip"`,
      subtitle: `Men's Shoe`,
      image: '../../images/products/four.jpg',
      availableColors: '2 colors',
      price: 80,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike ZoomX Invincible Run Flyknit',
      subtitle: `Men's Shoe`,
      image: '../../images/products/five.jpg',
      availableColors: '2 colors',
      price: 85,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike SB BLZR Court',
      subtitle: `Men's Shoe`,
      image: '../../images/products/six.jpg',
      availableColors: '2 colors',
      price: 120,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'LeBron 18 Black/Electric',
      subtitle: `Men's Shoe`,
      image: '../../images/products/seven.jpg',
      availableColors: '2 colors',
      price: 200,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Roswell Rayguns Chuck 70',
      subtitle: `Women's Shoe`,
      image: '../../images/products/eight.jpg',
      availableColors: '2 colors',
      price: 135,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike SuperRep Cycle',
      subtitle: `Men's Shoe`,
      image: '../../images/products/nine.jpg',
      availableColors: '2 colors',
      price: 170,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: `Nike Roshe One`,
      subtitle: `Women's Shoe`,
      image: '../../images/products/ten.jpg',
      availableColors: '3 colors',
      price: 165,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  },
  {
      name: 'Nike DBreak-Type',
      subtitle: `Men's Shoe`,
      image: '../../images/products/eleven.png',
      availableColors: '1 color',
      price: 130.00,
      description: `The Nike Air Max Plus Men's Shoe brings back the legendary "Tuned" Air cushioning and energetic design lines of the 1998 original`
  }
  ])
};
