import './ShopList.css';
import search_icon from './../assets/search.svg';
import ShopItem from './ShopItem';
const ShopList = () => {
  return (
    <div className='ShopList'>
      <div className='search_section'>
        <span className='search_icon'>
          <img src={search_icon} />
        </span>
        <input
          className='search_input font-regular-18'
          placeholder='샵 이름으로 검색해 보세요.'
        />
      </div>
      <div className='shop_item_section'>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
};

export default ShopList;
