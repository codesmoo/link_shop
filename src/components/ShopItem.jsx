import './ShopItem.css';
import shoe1 from './../assets/shoe1.svg';
import shop_img from './../assets/shop.svg';
// import like_fill from './../assets/like_fill.svg';
import like_empty from './../assets/like_empty.svg';

const ShopItem = () => {
  return (
    <div className='ShopItem'>
      <div className='shop_section'>
        <img className='shop_img' src={shop_img} />
        <div className='shop_info_wrapper'>
          <p className='shop_name font-semibold-18'>너구리 직구상점</p>
          <p className='shop_id font-regular-16'>@pumpkin</p>
        </div>
      </div>
      <p className='product_count font-medium-15'>대표 상품 3</p>
      <div className='img_section'>
        <img className='product_img' src={shoe1} />
        <img className='product_img' src={shoe1} />
        <img className='product_img' src={shoe1} />
      </div>
      <div className='like_section'>
        <img src={like_empty} />
        <span>65</span>
      </div>
    </div>
  );
};

export default ShopItem;
