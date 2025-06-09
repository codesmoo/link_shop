import './ShopList.css';
import search_icon from './../assets/search.svg';
import ShopItem from './ShopItem';
import { getShopList } from '../api';
import { useEffect, useState } from 'react';

const ShopList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    let response;
    try {
      setIsLoading(true);
      setLoadingError(null);
      response = await getShopList();
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { list } = response;
    console.log(list);

    if (list) {
      setItems(list);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (isLoading) {
    return <div>로딩중입니다..</div>;
  }

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
        {items
          .filter((item) => item.id !== 606)
          .map((item) => (
            <ShopItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default ShopList;
