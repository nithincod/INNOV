import React, { useState } from 'react';
import './shop.css';
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [detail, setDetail] = useState({});

    const detailpage = (product) => {
        setDetail(product);
        setShowDetail(true);
    };

    const closedetail = () => {
        setShowDetail(false);
    };

    return (
        <>
            {showDetail ? (
                <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.image} alt='' />
                        </div>
                        <div className='info'>
                            <h4># {detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                            <h3>${detail.price}</h3>
                            <button onClick={() => addtocart(detail)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            ) : null}
            <div className='shop'>
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>all categories</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}># All</li>
                                    <li onClick={() => Filter("electronics")}># electronics</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_left.avif' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                        </div>
                        <div className='product_box'>
                            <h2>Shop Product</h2>
                            <div className='product_container'>
                                {shop.map((curElm) => (
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt='' />
                                            <div className='icon'>
                                                <li><AiFillHeart /></li>
                                                <li onClick={() => detailpage(curElm)}><AiFillEye /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
