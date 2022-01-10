import {Images,Colors} from 'theme';
    
export const categories = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  sale:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
export const materials = [
    {
        id:1,
        type:'women',
        name: 'Indya Kurti',
        price: 1599,
        size: 32, 
        img: Images.w1,
        info: 'Blue mirror Work kurti',
        color:'blue'
       
    },
    {
        id:2,
        type:'women',
        name: 'Crop Top',
        price: 650,
        size: 32,
        img: Images.w2,
        info: 'Black knotted crop top',
        color:'black'
  
    },
    {
        id:3,
        type:'women',
        name: 'Stripped top',
        price: 699,
        size: 32,
        img: Images.w3,
        info: 'top with yellow Strips',
        color:'white',
  
    },
    {
        id:4,
        type:'women',
        name: 'Roadstar ',
        price: 1200,
        size: 32,
        img: Images.w4,
        info: 'Orange top with woollen skirt',
        color:'coral'
  
    },
    {
        id:5,
        type:'women',
        name: 'Asthetic shirt',
        price: 799,
        size: 32,
        img: Images.w5,
        info: 'Abstract shirt with half-sleeves',
        color:'pink'
  
    },
    {
        id:6,
        type:'women',
        name: 'White Frock',
        price: 899,
        size: 32,
        img: Images.w6,
        info: 'Simple umbrella frock',
        color:'white'
  
    },
    {
      id:7,
      type:'women',
      name: 'Beige Tshirt',
      price: 499,
      size: 32,
      img: Images.w7,
      info: 'No print plain Tshirt',
      color:'chocolate'

    },
    {
      id:8,
      type:'man',
      name: 'Leather Jacket',
      price: 2899,
      size: 34,
      img: Images.m1,
      info: 'Black leather jacket',
      color:'black'
    },
    {
      id:9,
      type:'man',
      name: 'Black Tshirt',
      price: 499,
      size: 32,
      img: Images.m2,
      info: 'No print plain Tshirt',
      color:'black'
    },
    {
      id:10,
      type:'man',
      name: 'Mustard Hoodie',
      price: 1199,
      size: 32,
      img: Images.m3,
      info: 'Plain Hoodie',
      color:'yellow'
    },
    {
      id:11,
      type:'man',
      name: 'White Tshirt',
      price: 399,
      size: 32,
      img: Images.m4,
      info: 'No print plain Tshirt',
      color:'white'
    },
    {
      id:12,
      type:'man',
      name: 'Black Hoodie',
      price: 1299,
      size: 32,
      img: Images.m5,
      info: 'Plain Hoodie',
      color:'white'
    },
    {
      id:13,
      type:'man',
      name: 'White Shirt',
      price: 999,
      size: 32,
      img: Images.m6,
      info: 'Formal SlimFit Shirt',
      color:'white'
    },
    {
      id:14,
      type:'man',
      name: 'Red Sweatshirt',
      price: 1299,
      size: 32,
      img: Images.m7,
      info: 'SlimFit woolen sweatshirt',
      color:'red'
    },
    {
      id:15,
      type:'man',
      name: 'Fusion Sweatshirt',
      price: 1299,
      size: 32,
      img: Images.m8,
      info: 'Multicolor woolen sweatshirt',
      color:'orange'
    },
    {
      id:16,
      type:'women',
      name: 'Orange Shirt',
      price: 599,
      size: 32,
      img: Images.w8,
      info: 'Formal Orange Shirt',
      color:'orange'
    },
  ]

export const supportMaterial = [
  {
    iconName: "wallet-giftcard",
    backgroundColor:Colors.coralbg,
    textColor:Colors.pink,
    heading:"Your Orders",
    subHeading:['Track','Return','View an order'],
  },
  {
    iconName: "comment-question-outline",
    backgroundColor:Colors.lightYellow,
    textColor:Colors.orange,
    heading:"FAQs",
    subHeading:['What is No-Contact Deliver'
    ,'How can I return the product'],
  },
  {
    iconName: "arrow-left-right",
    backgroundColor:Colors.lightPurple,
    textColor:Colors.purple,
    heading:"Returns & Refunds",
    subHeading:['Return Policies','Refund Policies'],
  },
  {
    iconName: "cash-usd",
    backgroundColor:Colors.lightGreen,
    textColor:Colors.dullGreen,
    heading:"Payment",
    subHeading:['View Cashback details','Other Transactions'],
  },
  {
    iconName: "account",
    backgroundColor:Colors.coralbg,
    textColor:Colors.coral,
    heading:"Account Setting",
    subHeading:['Edit Password','Address details','Payment details'],
  }
] 