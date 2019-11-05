'use strict'

const {db, Product, User, Cart} = require('../server/db')
const {green, red} = require('chalk')

const users = [
  {
    firstName: 'Hermione',
    lastName: 'Granger',
    email: 'hg@hogwarts.com',
    password: '1234',
    cartId: 1
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'hp@hogwarts.com',
    password: '1234',
    cartId: 2
  },
  {
    firstName: 'Ron',
    lastName: 'Weasley',
    email: 'rw@hogwarts.com',
    role: 'admin',
    password: '1234',
    cartId: 3
  },
  {
    firstName: 'Raven',
    lastName: 'Darkhölme',
    email: 'mistique@shield.com',
    password: '1234',
    cartId: 3
  },
  {
    firstName: 'James',
    lastName: 'Howlett',
    email: 'jamesh@yahoo.com',
    role: 'admin',
    password: '1234',
    cartId: 4
  },
  {
    firstName: 'Gamora',
    lastName: 'Unkown',
    email: 'gog@yahoo.com',
    password: '1234',
    cartId: 5
  }
]

const products = [
  {
    sku: 111111,
    name: 'ballet slippers',
    brand: 'essie',
    imageUrl:
      'https://www.essie.com/-/media/Project/Loreal/Brand-Sites/Essie/Americas/US/products_nailpolish_hd/enamels/sheers/095008000176/ESSIE-enamel-ballet-slippers-pack-shot.jpg?h=530&w=530&la=en-US&hash=74B022D9046E99FA64B87876D255CDEEF90D4B4B',
    color: 'pink',
    description: 'Your favorite pink nail polish perfect for any occasion.',
    price: 6.99,
    rating: 4.0,
    quantity: 100,
    cartId: 1
  },
  {
    sku: 111112,
    name: 'blue-tiful horizon',
    brand: 'essie',
    imageUrl:
      'https://www.essie.com/-/media/Project/Loreal/Brand-Sites/Essie/Americas/US/products_nailpolish_hd/enamels/Blues/095008027890/ESSIE-enamel-blue-tiful-horizon-pack-shot.jpg?h=530&w=530&la=en-US&hash=5F47C94DCEAB9C339F4F18501AD745975A23850C',
    color: 'blue',
    description: 'A shimmery evening purple.',
    price: 6.99,
    rating: 3.0,
    quantity: 30,
    cartId: 2
  },
  {
    sku: 111113,
    name: 'Raisin The Bar',
    brand: 'OPI',
    imageUrl:
      'https://www.opi.com/sites/default/files/styles/product_photos/public/im-not-really-a-waitress-islh08-infinite-shine-22777754108_24.jpg?itok=mxSQMza-',
    color: 'red',
    description: 'A bold red for breaking that glass ceiling.',
    price: 13.0,
    rating: 3.7,
    quantity: 121,
    cartId: 3
  },
  {
    sku: 111114,
    name: 'Exotic Birds Do Not Tweet',
    brand: 'OPI',
    imageUrl:
      'https://www.opi.com/sites/default/files/styles/product_photos/public/exotic-birds-do-not-tweet-islf91-infinite-shine-22006699291_24.jpg?itok=CMtQiiyu',
    color: 'yellow',
    description:
      'Add a pop of color to your look with this warm splash of tropical sunshine',
    price: 13.0,
    rating: 3.2,
    quantity: 85,
    cartId: 1
  },
  {
    sku: 111115,
    name: 'Wild Card',
    brand: 'Sally Hansen',
    imageUrl:
      'https://cc2sallyhansen-res.cloudinary.com/image/upload/s--e_8aQFV_--/f_auto,fl_lossy,q_auto:best,w_600/v1/stage/074170460674_shc1828_ms_020wildcard_btl.png',
    color: 'gold',
    description:
      'Spice it up with this ultra-glittery gold. Special glitter used provides the same shimmery pop you want with easier removal.',
    price: 10.99,
    rating: 4.2,
    quantity: 250,
    cartId: null
  }
]

const carts = [
  {
    date: '2019-2-5',
    total: 20
  },
  {
    date: '2019-12-5',
    total: 50
  },
  {
    date: '2019-11-5',
    total: 10
  },
  {
    date: '2019-2-2',
    total: 22
  },
  {
    date: '2019-2-1',
    total: 18
  }
]

// const orders = [
//   {
//     date: '2018-2-5',
//     dateShipped: '2018-3-5',
//     dateDelivered: '2018-3-7',
//     quantity: 4,
//     billingAddress: '23 Smith street, apt 34',
//     shippingAddress: '23 Smith street, apt 34',
//     total: 34,
//     status: 'shipped'
//   },
//   {
//     date: '2019-2-2',
//     dateShipped: '2019-2-5',
//     dateDelivered: '2019-2-7',
//     quantity: 7,
//     billingAddress: '78 Apple street, apt 2',
//     shippingAddress: '78 Apple street, apt 2',
//     total: 10,
//     status: 'delivered'
//   },
//   {
//     date: '2019-4-10',
//     dateShipped: '2019-4-12',
//     dateDelivered: '2019-4-15',
//     quantity: 2,
//     billingAddress: '56 Raymond street, apt 7',
//     shippingAddress: '56 Raymond street, apt 7',
//     total: 34,
//     status: 'processing'
//   },
//   {
//     date: '2019-8-8',
//     dateShipped: '2019-8-10',
//     dateDelivered: '2019-8-12',
//     quantity: 4,
//     billingAddress: '20 Maple alley, apt 4',
//     shippingAddress: '20 Maple alley, apt 4',
//     total: 23,
//     status: 'shipped'
//   },
//   {
//     date: '2019-10-5',
//     dateShipped: '2019-10-8',
//     dateDelivered: '2019-10-10',
//     quantity: 2,
//     billingAddress: '110 5th avenue, floor 4',
//     shippingAddress: '110 5th avenue, floor 4',
//     total: 50,
//     status: 'shipped'
//   }
// ]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    carts.map(cart => {
      return Cart.create(cart)
    }),
    products.map(product => {
      return Product.create(product)
    }),
    users.map(user => {
      return User.create(user)
    })

    // orders.map(order => {
    //   return Order.create(order)
    // })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
