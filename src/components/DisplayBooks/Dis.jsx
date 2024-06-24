import React from 'react'
import "./Dis.css"
import Navbar from '../Navbar'
import image from "./download.jpg"
import D from './D'

const Dis = () => {
  const productsArr = [
    {
      id: 1,
      title: "English Core ",

      donor: "Raj Kumar",

      imageUrl:
        "https://www.malikbooksellers.com/wp-content/uploads/2022/11/englishcore111647791906.webp",
    },

    {
      id: 2,
      title: "RD Sharma",

      donor: "Ratan Tata",

      imageUrl:
        "https://5.imimg.com/data5/ANDROID/Default/2023/7/328972060/TH/VT/EX/181736829/product-jpeg-1000x1000.jpg",
    },

    {
      id: 3,
      title: "Class VI Hindi",

      donor: "Ankit Roy",

      imageUrl:
        "https://sahitya.b-cdn.net/wp-content/uploads/2021/07/1672A-2.jpg",
    },

    {
      id: 4,
      title: "Political Science Isc",

      donor: "Romeo Rajkumar",

      imageUrl:
        "https://cdn01.sapnaonline.com/product_media/9788194509899/md_9788194509899_080620231526549.jpg",
    },
    {
      id: 4,
      title: "All in One Cpmt Sc",

      donor: "Techno Group",

      imageUrl:
        "https://cdn.arihantbooks.com/assets/ProductImage/9789359980355.jpg",
    },
    {
      id: 4,
      title: "Mannat",

      donor: "Shahruk Khan",

      imageUrl:
        "https://cms.buybooksindia.com/uploads/books/9789324198235_1617793323.jpg",
    },
    {
      id: 4,
      title: "Political Sc Class X",

      donor: "A Panda",

      imageUrl:
        "https://apcbooks.co.in/wp-content/uploads/2022/05/Understanding-ISC-Comp.-1-image.jpg",
    },
    {
      id: 4,
      title: "Class XI English",

      donor: "Bikas Dubey",

      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/l2rwzgw0/book/7/n/x/oswaal-cbse-chapterwise-topicwise-question-bank-class-11-applied-original-imagefm3ya4gy7nb.jpeg?q=90&crop=false",
    },
    {
      id: 4,
      title: "All in One English",

      donor: "SOA Foundation",

      imageUrl:
        "https://m.media-amazon.com/images/I/61e7GwZ6TjS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "Class XI Question Bank",

      donor: "SOA Foundation",

      imageUrl:
        "https://www.rachnasagar.in/assets/images/product/big/Applied-Mathematics-11.jpg",
    },
    {
      id: 4,
      title: "Applied Mathematics",

      donor: "SOA Foundation",

      imageUrl:
        "https://m.media-amazon.com/images/I/512SrTmYViS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "RD Sharma",

      donor: "SOA Foundation",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },

  ];

  return (
    <div className='dis'>
    <Navbar/>
        <div class="flex flex-row flex-wrap">
  {/* <div class="text-gray-700 text-center  px-4 py-2 m-2">
  
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={image} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></div> */}


{productsArr.map((product) => (
  <D prod={product}/>
            
          ))}

</div>
      
    </div>
  )
}

export default Dis
