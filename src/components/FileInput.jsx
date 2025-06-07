import './InputProduct.css';
const FileInput = () => {
  return (
    <div className='FileInput'>
      <p className='input_title'>상품 대표 이미지</p>
      <p className='input_placeholder'>상품 이미지를 첨부해 주세요.</p>
      <label htmlFor='product_img'>
        <div className='btn_upload'>파일 첨부</div>
      </label>
      <input type='file' style={{ display: 'none' }} id='product_img' />
    </div>
  );
};

export default FileInput;
