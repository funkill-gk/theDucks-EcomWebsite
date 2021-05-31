import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="/home_banner.jpg"></img>
            </div>
            <div className="home__row">
                <Product 
                    id={9954653491}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                />
                <Product
                    id={9992343491}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                />
                <Product 
                    id={9942342991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5} />
                <Product 
                    id={9945644991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
                <Product 
                    id={9994523391}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
                <Product 
                    id={9954545991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
            </div>
            <div className="home__row">
                <Product
                    id={99343434991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                />
                <Product
                    id={9987878991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                />
                 <Product 
                    id={9945644991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
                <Product 
                    id={9994523391}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
                
               
            </div>
            <div className="home__row">
                <Product 
                    id={9777779991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                 />
                <Product 
                    id={9955555991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}
                />
                 <Product 
                    id={9945644991}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
                <Product 
                    id={9994523391}
                    title="Batman Toy"
                    price={999}
                    image="./product_one.jpg"
                    rating={5}/>
               
            </div>

        </div>
    )
}

export default Home
