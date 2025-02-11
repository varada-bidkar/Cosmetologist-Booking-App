import './Products.css';
import { useState } from 'react';

export default function Products() {
  const [userSearch, setUserSearch] = useState('');
  const [toggle, setToggle] = useState(false);
  const [counter, setCount] = useState(0);


  

  const [products, setProducts] = useState([
    {
      Image: 'https://t4.ftcdn.net/jpg/08/02/02/19/360_F_802021915_IPHKO71bhU3jVLAiea5vFQXkHr68GxKe.jpg',
      title: 'Brightning Serum',
      price: 'Rs.2400',
      isAvailable: true,
    },
    {
      Image: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0baa8278-7f62-4684-96bb-06528cd89428.jpg?crop=4134%2C2325%2C0%2C215&resize=360',
      title: 'Acne serum',
      price: 'Rs.20000',
      isAvailable: false,
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdAMPTcpjI1XjWzadIP3N7E93NpdSqduPHw&s',
      title: 'Glow serum',
      price: 'Rs.600',
      isAvailable: true,
    },
    {
      Image: 'https://images.ctfassets.net/3s5io6mnxfqz/4IEHnYIrfzoxYOQTraepmO/c1d1eab003ecf5d8a29e9eb8bec94450/AdobeStock_272372014.jpeg?w=1920',
      title: 'Pigmentation serum',
      price: 'Rs.12020',
      isAvailable: false,
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveR6qanceIYfXcKH-2VeJLNr4XZqg4mydaQ&s',
      title: 'Hair Growth serum',
      price: 'Rs.12020',
      isAvailable: false,
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNStsnG73k5L5zNoyO15s8DOZfRl4bKRRXQ&s',
      title: 'Hair Fal control serum',
      price: 'Rs.12020',
      isAvailable: true,
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsG7GoPANGR6EjB9OiA38dEBUhOfL_AEuwWg&s',
      title: 'Shiny Hairs serum',
      price: 'Rs.12020',
      isAvailable: true,
    },
    {
      Image: 'https://usercontent.one/wp/www.hiyamarianne.com/wp-content/uploads/2022/04/Creative-still-life-photography-content-creation-for-Only-Curls-hair-beauty-products.-Product-photography-art-direction-and-styling-by-Marianne-Taylor._0003.jpg?media=1702567804',
      title: 'Curly Hair serum',
      price: 'Rs.12020',
      isAvailable: false,
    },
    {
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHcn2ynfVXsUW4DeJMPhyT3NoZLJL4MSbTA&s',
      title: 'Fairness serum',
      price: 'Rs.12020',
      isAvailable: true,
    },
    {
      Image: 'https://i0.wp.com/mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2d3596112610345.60180adae78f0.jpg?resize=494%2C609&ssl=1',
      title: 'Soft-skin serum',
      price: 'Rs.12020',
      isAvailable: false,
    },
    {
      Image: 'https://aventivestudio.com/wp-content/uploads/2022/01/skincare-product-photography-1024x576.jpg',
      title: 'Charcaol activated Mask',
      price: 'Rs.12020',
      isAvailable: true,
    },
    {
      Image: 'https://i.pinimg.com/736x/f6/5a/ff/f65afff5e59c10252e3aed7c7f75a823.jpg',
      title: 'A kit For Skincare',
      price: 'Rs.12020',
      isAvailable: false,
    },
  ]);

  return (
    <>

      <div className="container1">
        <div className="search">
          <input
            type="text"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            placeholder="Search for Products..."
          />
        </div>

        {products
          .filter((product) => product.title.toLowerCase().includes(userSearch.toLowerCase()))
          .map((product, key) => (
            <div className="card" key={key}>
              <img src={product.Image} alt={product.title} />
              <h2>{product.title}</h2>
              <div className="cardf">
                <p>{product.price}</p>
                <p className={product.isAvailable ? 'available' : 'out-of-stock'}>
                  {product.isAvailable ? 'Available' : 'Out of Stock'}
                </p>
              </div>
            </div>
          ))}
      </div>

      
    </>
  );


}
