import './ShopItem.css';

// import like_fill from './../assets/like_fill.svg';
import like_empty from './../assets/like_empty.svg';

const ShopItem = ({ id, likes, name, products, productsCount, shop }) => {
  console.log(id, likes, name, products, productsCount, shop);
  return (
    <div className='ShopItem'>
      <div className='shop_section'>
        <img className='shop_img' src={shop.imageUrl} />
        <div className='shop_info_wrapper'>
          <p className='shop_name font-semibold-18'>{name}</p>
          <p className='shop_id font-regular-16'>@{shop.urlName}</p>
        </div>
      </div>
      <p className='product_count font-medium-15'>대표 상품 {productsCount}</p>
      <div className='img_section'>
        {products.map((item) => (
          <img className='product_img' src={item.imageUrl} />
        ))}
      </div>
      <div className='like_section'>
        <img src={like_empty} />
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default ShopItem;
