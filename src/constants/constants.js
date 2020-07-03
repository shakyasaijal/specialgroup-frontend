import PATHS from 'routes';

export const categories = () => {
  return [
    {
      id: 1,
      name: 'Dress',
      img: 'https://i.pinimg.com/originals/6d/b2/cf/6db2cfd78fae829ff7de7f20a9891fd0.png',
    },
    {
      id: 2,
      name: 'Home Appliance',
      img: 'https://i.ya-webdesign.com/images/home-appliances-png-1.png',
    },
    {
      id: 3,
      name: 'Kitchen Appliance',
      img:
        'https://www.smeg.com/binaries/content/gallery/smeg/content-elements/cards/smf02pbeu_stand_mixer_2500x1783px_2.png/smf02pbeu_stand_mixer_2500x1783px_2.png/brx%3ApostcardDeskLarge',
    },
    {
      id: 4,
      name: 'Shoes',
      img: 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',
    },
  ];
};

export const categoriesForChips = () => {
  return [
    {
      id: 1,
      name: 'Dress',
      img: 'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014',
    },
    {
      id: 2,
      name: 'Home Appliance',
      img: 'https://www.fewabazar.com/images/thumbs/000/0008918_baltra-shine-mixer-grinder-bmg-146_415.jpeg',
    },
    {
      id: 3,
      name: 'Kitchen Appliance',
      img: 'https://www.fewabazar.com/images/thumbs/000/0008918_baltra-shine-mixer-grinder-bmg-146_415.jpeg',
    },
    {
      id: 4,
      name: 'Shoes',
      img:
        'https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50',
    },
    {
      id: 5,
      name: 'Wedding Red Dress',
      img: 'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014',
    },
    {
      id: 6,
      name: 'Made In Nepal',
      img: 'https://www.fewabazar.com/images/thumbs/000/0008918_baltra-shine-mixer-grinder-bmg-146_415.jpeg',
    },
    {
      id: 7,
      name: 'Dress',
      img: 'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014',
    },
    {
      id: 8,
      name: 'Home Appliance',
      img: 'https://www.fewabazar.com/images/thumbs/000/0008918_baltra-shine-mixer-grinder-bmg-146_415.jpeg',
    },
    {
      id: 9,
      name: 'Kitchen Appliance',
      img: 'https://www.fewabazar.com/images/thumbs/000/0008918_baltra-shine-mixer-grinder-bmg-146_415.jpeg',
    },
    {
      id: 10,
      name: 'Shoes',
      img:
        'https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50',
    },
  ];
};

export const featuredCategory = () => {
  return [
    {
      id: 1,
      name: 'Summer Dresses',
      img: 'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014',
    },
    {
      id: 2,
      name: 'American Perfumes',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41x7CvkglUL._AC_SY400_.jpg',
    },
    {
      id: 3,
      name: 'Leather Bags',
      img:
        'https://i0.wp.com/redhotfactory.com/wp-content/uploads/2019/07/Leather-Laptop-Bag-men-women.jpg?fit=1500%2C1500&ssl=1',
    },
    {
      id: 4,
      name: 'Medicals',
      img:
        'https://cdn.medisave.co.uk/media/catalog/product/cache/1/image/3288x/9df78eab33525d08d6e5fb8d27136e95/s/u/surgical-mask-fn-01a-type-ii-certified_1.jpg',
    },
    {
      id: 5,
      name: 'Covid19 Special Discounts',
      img:
        'https://www.gooplayer.co.uk/32902-large_default/anti-infection-kn95-masks-n90-5-layers-mask-particulate-respirator-pm25-protective-safety-like-kf94-ffp2-blue-masks.jpg',
    },
    {
      id: 6,
      name: 'House Holds',
      img: 'https://www.jaxgoods.com/prodimages/52489-DEFAULT-l.jpg',
    },
  ];
};

export const productsList = () => {
  return [
    {
      id: 1,
      name: 'Summer Dress',
      img: 'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014',
      price: '5000',
      wishlist: true,
      inStock: true,
      seller: { name: 'Namaste Super Market', id: 1 },
      brand: 'Gucci',
      oldPrice: '5500',
    },
    {
      id: 2,
      name: 'Polo Black',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41x7CvkglUL._AC_SY400_.jpg',
      price: '15000',
      wishlist: true,
      inStock: false,
      seller: { name: 'Namaste Super Market', id: 1 },
      brand: 'Gucci',
      oldPrice: '',
    },
    {
      id: 3,
      name: 'Leather Bag',
      img:
        'https://i0.wp.com/redhotfactory.com/wp-content/uploads/2019/07/Leather-Laptop-Bag-men-women.jpg?fit=1500%2C1500&ssl=1',
      price: '5000',
      wishlist: false,
      inStock: false,
      seller: { name: 'Sales Berry', id: 2 },
      brand: 'Gucci',
      oldPrice: '5200',
    },
    {
      id: 4,
      name: 'Surgical Mask',
      img:
        'https://cdn.medisave.co.uk/media/catalog/product/cache/1/image/3288x/9df78eab33525d08d6e5fb8d27136e95/s/u/surgical-mask-fn-01a-type-ii-certified_1.jpg',
      price: '25',
      wishlist: false,
      inStock: true,
      seller: { name: 'Sales Berry', id: 2 },
      brand: 'Sincere',
      oldPrice: '',
    },
    {
      id: 5,
      name: 'KN95 Mask',
      img:
        'https://www.gooplayer.co.uk/32902-large_default/anti-infection-kn95-masks-n90-5-layers-mask-particulate-respirator-pm25-protective-safety-like-kf94-ffp2-blue-masks.jpg',
      price: '150',
      wishlist: false,
      inStock: true,
      seller: { name: 'Sales Berry', id: 2 },
      brand: 'Sincere',
      oldPrice: '',
    },
    {
      id: 6,
      name: 'Mosquito Repellent',
      img: 'https://www.jaxgoods.com/prodimages/52489-DEFAULT-l.jpg',
      price: '95',
      wishlist: false,
      inStock: true,
      seller: { name: 'Saleways', id: 3 },
      brand: 'Polo',
      oldPrice: '',
    },
    {
      id: 7,
      name: '3D Printer',
      img:
        'https://cdn03.plentymarkets.com/ioseuwg7moqp/item/images/24930/full/Creality-LD-002R-----DLP-3D-printer-LD-002R-24930.jpg',
      price: '55000',
      wishlist: true,
      inStock: true,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'HP',
      oldPrice: '65000',
    },
    {
      id: 8,
      name: 'Sanitizer',
      img: 'https://media1.fdncms.com/inlander/imager/u/original/19237589/purell-hand-sanitizer-bottles.jpeg',
      price: '350',
      wishlist: false,
      inStock: true,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'HP',
      oldPrice: '',
    },
    {
      id: 9,
      name: 'Digital Watch',
      img: 'https://www.skmei-watch.com/wp-content/uploads/2019/10/16016-8o0yas.jpg',
      price: '5000',
      wishlist: true,
      inStock: false,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'Gucci',
      oldPrice: '',
    },
    {
      id: 10,
      name: 'Tuborg Beer',
      img:
        'https://previews.123rf.com/images/monticello/monticello1904/monticello190400090/122640065-poznan-pol-mar-28-2019-bottles-of-tuborg-beer-produced-by-a-danish-brewing-company-founded-in-1873-n.jpg',
      price: '350',
      wishlist: true,
      inStock: true,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'HP',
      oldPrice: '',
    },
    {
      id: 11,
      name: "Chief's Choice",
      img: getImageUrl('images/faker/products/chief.jpg'),
      price: '220',
      wishlist: false,
      inStock: false,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'Gucci',
      oldPrice: '230',
    },
    {
      id: 12,
      name: 'Johnson Baby Powder',
      img: getImageUrl('images/faker/products/johnson.jpeg'),
      price: '225',
      wishlist: false,
      inStock: true,
      seller: { name: 'Bhatbhateni', id: 4 },
      brand: 'Gucci',
      oldPrice: '230',
    },
  ];
};

export const productsWithBanner = () => {
  return [
    {
      id: 1,
      category: 'Groceries',
      categoryBanner: getImageUrl('images/faker/categories/Groceries.png'),
      subCategory: [
        {
          id: 1,
          name: 'Vegetables',
          image: getImageUrl('images/faker/vegetables/vegetables.jpg'),
          products: [
            {
              id: 1,
              name: 'Celery',
              image: getImageUrl('images/faker/vegetables/celery.jpg'),
              price: '100',
              wishlist: true,
              oldPrice: '120',
            },
            {
              id: 2,
              name: 'Asian Greens',
              image: getImageUrl('images/faker/vegetables/asianGreen.jpg'),
              price: '220',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Cauliflower',
              image: getImageUrl('images/faker/vegetables/cauli.jpg'),
              price: '150',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 4,
              name: 'Cucumber',
              image: getImageUrl('images/faker/vegetables/cucumber.jpg'),
              price: '125',
              wishlist: true,
              oldPrice: '150',
            },
          ],
        },
        {
          id: 2,
          name: 'Cold Drinks',
          image: getImageUrl('images/faker/subcategories/coldDrinks.png'),
          products: [
            {
              id: 1,
              name: 'Sprite Lime',
              image: getImageUrl('images/faker/products/sprite.png'),
              price: '220',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 2,
              name: 'Coca Cola Can',
              image: getImageUrl('images/faker/products/coke.png'),
              price: '220',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Tropicana Jar',
              image: getImageUrl('images/faker/products/tropicana.jpeg'),
              price: '620',
              wishlist: true,
              oldPrice: '700',
            },
            {
              id: 4,
              name: 'Australian Grown',
              image: getImageUrl('images/faker/products/american.png'),
              price: '510',
              wishlist: true,
              oldPrice: '550',
            },
            {
              id: 5,
              name: 'Real Juice',
              image: getImageUrl('images/faker/products/realJuice.jpg'),
              price: '210',
              wishlist: true,
              oldPrice: '',
            },
          ],
        },
        {
          id: 3,
          name: 'Snacks',
          image: getImageUrl('images/faker/subcategories/snacks.png'),
          products: [
            {
              id: 1,
              name: 'Lays',
              image: getImageUrl('images/faker/products/lays.jpg'),
              price: '150',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 2,
              name: "Chief's Choice",
              image: getImageUrl('images/faker/products/chief.jpg'),
              price: '220',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Bikano Dalmoth',
              image: getImageUrl('images/faker/products/dalmoth.jpg'),
              price: '110',
              wishlist: true,
              oldPrice: '150',
            },
            {
              id: 4,
              name: 'Birds Eye Fish',
              image: getImageUrl('images/faker/products/birdsEye.png'),
              price: '560',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 5,
              name: 'Agricana Banana Chips',
              image: getImageUrl('images/faker/products/banana.jpg'),
              price: '350',
              wishlist: true,
              oldPrice: '',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category: 'Beauty & Make Ups',
      categoryBanner: getImageUrl('images/faker/categories/beauty.png'),
      subCategory: [
        {
          id: 4,
          name: 'Perfume for men',
          image: getImageUrl('images/faker/subcategories/menPerfume.jpg'),
          products: [
            {
              id: 1,
              name: 'Berburry',
              image: getImageUrl('images/faker/products/berburry.jpg'),
              price: '2200',
              wishlist: true,
              oldPrice: '2500',
            },
            {
              id: 2,
              name: 'Polo Black',
              image: getImageUrl('images/faker/products/polo.jpeg'),
              price: '9500',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Black Jack',
              image: getImageUrl('images/faker/products/black.jpg'),
              price: '3200',
              wishlist: true,
              oldPrice: '3250',
            },
            {
              id: 4,
              name: 'Versace Limited Edition',
              image: getImageUrl('images/faker/products/versace.jpg'),
              price: '5500',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 5,
              name: 'Police Icon',
              image: getImageUrl('images/faker/products/policeIcon.jpg'),
              price: '15000',
              wishlist: true,
              oldPrice: '16500',
            },
          ],
        },
        {
          id: 5,
          name: 'Make Up',
          image: getImageUrl('images/faker/subcategories/makeup.jpg'),
          products: [
            {
              id: 1,
              name: 'Eye Lashes',
              image: getImageUrl('images/faker/products/eye.jpg'),
              price: '250',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 2,
              name: 'Artdeco',
              image: getImageUrl('images/faker/products/deco.jpg'),
              price: '650',
              wishlist: false,
              oldPrice: '675',
            },
            {
              id: 3,
              name: 'Cover | Fx',
              image: getImageUrl('images/faker/products/powder.jpeg'),
              price: '1250',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 4,
              name: 'MakeUp Brush Packs',
              image: getImageUrl('images/faker/products/brush.jpg'),
              price: '2250',
              wishlist: true,
              oldPrice: '2400',
            },
            {
              id: 5,
              name: 'Lipsticks Rainbow Pack',
              image: getImageUrl('images/faker/products/lipsticks.jpg'),
              price: '1250',
              wishlist: true,
              oldPrice: '',
            },
          ],
        },
        {
          id: 6,
          name: 'Unisex',
          image: getImageUrl('images/faker/subcategories/unisex.jpeg'),
          products: [
            {
              id: 1,
              name: 'Fog Perfume',
              image: getImageUrl('images/faker/products/fog.jpg'),
              price: '125',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 2,
              name: 'Johnson Baby Powder',
              image: getImageUrl('images/faker/products/johnson.jpeg'),
              price: '225',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Garnier Face wash',
              image: getImageUrl('images/faker/products/garnier.jpg'),
              price: '125',
              wishlist: true,
              oldPrice: '135',
            },
            {
              id: 4,
              name: 'Flexible Hair Brushes | Balon',
              image: getImageUrl('images/faker/products/balon.jpg'),
              price: '450',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 5,
              name: 'Glycerine',
              image: getImageUrl('images/faker/products/glycerin.jpg'),
              price: '95',
              wishlist: false,
              oldPrice: '',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      category: 'Kids Accessories',
      categoryBanner: getImageUrl('images/faker/categories/kids.png'),
      subCategory: [
        {
          id: 7,
          name: 'Kids Dresses',
          image: getImageUrl('images/faker/subcategories/kids.png'),
          products: [
            {
              id: 1,
              name: 'Half Jacket',
              image: getImageUrl('images/faker/products/hJacket.jpg'),
              price: '1250',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 2,
              name: 'Soft Jeans',
              image: getImageUrl('images/faker/products/jeans.jpg'),
              price: '950',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Velvet Trouser',
              image: getImageUrl('images/faker/products/velvet.jpg'),
              price: '2250',
              wishlist: true,
              oldPrice: '2500',
            },
            {
              id: 4,
              name: 'Woolen Caps',
              image: getImageUrl('images/faker/products/caps.jpg'),
              price: '550',
              wishlist: false,
              oldPrice: '',
            },
            {
              id: 5,
              name: 'Half Pants',
              image: getImageUrl('images/faker/products/hPants.jpeg'),
              price: '2300',
              wishlist: false,
              oldPrice: '',
            },
          ],
        },
        {
          id: 8,
          name: 'Toys',
          image: getImageUrl('images/faker/subcategories/toys.jpg'),
          products: [
            {
              id: 1,
              name: 'Remote Car',
              image: getImageUrl('images/faker/products/remote.jpg'),
              price: '3600',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 2,
              name: 'Helicopter',
              image: getImageUrl('images/faker/products/helicopter.jpg'),
              price: '5500',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 3,
              name: 'Barbies Set',
              image: getImageUrl('images/faker/products/barbie.jpg'),
              price: '3200',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 4,
              name: 'Fake Gun',
              image: getImageUrl('images/faker/products/toyGun.jpg'),
              price: '1500',
              wishlist: true,
              oldPrice: '',
            },
            {
              id: 5,
              name: 'Monster Truck',
              image: getImageUrl('images/faker/products/truck.jpg'),
              price: '1250',
              wishlist: true,
              oldPrice: '',
            },
          ],
        },
      ],
    },
  ];
};

export const accountSettings = () => {
  return [
    {
      title: 'Order History',
      icon: getImageUrl('images/order.png'),
      subtitle: 'View order histories',
      link: PATHS.ORDER_HISTORY,
    },
    {
      title: 'Login & Security',
      icon: getImageUrl('images/security.png'),
      subtitle: 'Edit phone, password',
      link: PATHS.LOGIN_SECURITY,
    },
    {
      title: 'Address',
      icon: getImageUrl('images/address.png'),
      subtitle: 'Edit city, address',
      link: PATHS.ADDRESS,
    },
  ];
};

export const mobileDrawerItems = () => {
  return [
    {
      name: 'Inbox',
      route: '/',
    },
    {
      name: 'Starred',
      route: '/',
    },
    {
      name: 'Categories',
      route: '/',
    },
    {
      name: 'Logout',
      route: '/',
    },
  ];
};

export const productDetails = () => {
  return {
    name: 'Fabric Finest Dress',
    brand: 'Milanoo',
    color: ['red', 'blue'],
    sizes: ['S', 'L', 'Xl'],
    vendor: 'Sincere Super Market',
    price: '5000',
    oldPrice: '5500',
    warranty: false,
    materialType: 'Fabric',
    images: [
      'https://m.media-amazon.com/images/I/71BCZLfIzVL._SR500,500_.jpg',
      'https://www-s.mlo.me/upen/v/201710/20171027/46909f73-1519-49cd-9c24-8036ab50bcb2.jpg',
      'https://www.lulus.com/images/product/xlarge/1125602_176698.jpg',
    ],
    description: '<ul><li>Imported</li><li>Machine Wash</li><li>No color fade</li></ul>',
    comments: [
      {
        question: 'Is it delivered to New Road as well?',
        answer: 'Yes we deliver all over Nepal.',
      },
      {
        question: 'Is it any discounts?',
        answer: 'No, it is fixed price.',
      },
      {
        question: 'Is it delivered to New Road as well?',
        answer: 'Yes we deliver all over Nepal.',
      },
      {
        question: 'Is it any discounts?',
        answer: 'No, it is fixed price.',
      },
      {
        question: 'Is it delivered to New Road as well?',
        answer: 'Yes we deliver all over Nepal.',
      },
      {
        question: 'Is it any discounts?',
        answer: 'No, it is fixed price.',
      },
    ],
  };
};

export const getImageUrl = (uri) => {
  return process.env.PUBLIC_URL + uri;
};

export const getPercentage = (oldPrice, currentPrice) => {
  const per = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);

  return -1 * per;
};
