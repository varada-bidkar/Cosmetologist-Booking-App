import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './Home.css'
import Products from './Products'
import Booking from './Booking'
import Login from './Login'
export default function Home(){
    return(
        <>
       
        
       <div className="container3"  >
        
        <div className='box2'>
          <h2>Based Radiance Skincare</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa quos rem est dolor sint, necessitatibus laudantium id eligendi minus maxime minima architecto animi itaque, eos fugiat ab laboriosam. Ea.</p>
        <button>Buy kit</button>
        </div>
        </div>

        
        <div className='sale'>
          <div className='card1'>
          <h2>Sale is live</h2>
          </div>
          <div className='card2'>
            <img2/>
          <h2>Best Sellers</h2>
          </div>
          <div className='card3'>
            <img3/>
          <h2>Makeup</h2>
          </div>
          <div className='card4'>
            <img4/>
          <h2>Skin</h2>
          </div>
          <div className='card5'>
            <img5/>
          <h2>Hair</h2>
          </div>
          
        </div>

        <div className='container5'>
        
          <div className="card">
         
            <div className="vdo">
            

            </div>
            <div className="cards">
              <div className="a">
              <h3>Lip Gloss</h3>
              </div>
              <div className="b">
              <h3>Eye shadow</h3>
              </div>
            
            </div>
          </div>
        </div>

        <div className="cont1">
          
            <div className="cardd1">
                <h2>Quick Links</h2>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="cardd1">
                <h2>Help</h2>
                <p>Nykaa Network</p>
                <p>Buying Guides</p>
                <p>Store Locator</p>
                <p>Sell</p>
            </div>
            <div className="cardd1">
                <h2>Top Categories</h2>
                <p>Best Sellers</p>
                <p>Makeup</p>
                <p>Skin</p>
                <p>Hair</p>
            </div>
        </div>
        </>
    )

}

