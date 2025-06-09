import './FileInput.css';
const FileInput = () => {
  return (
    <div className='FileInput'>
      <label htmlFor='product_img' className='font-semibold-14'>
        상품 대표 이미지
      </label>
      <input placeholder='상품 이미지를 첨부해 주세요.' disabled />
      <label className='img_btn' htmlFor='product_img'>
        <div className='btn_upload'>파일 첨부</div>
      </label>
      <input type='file' style={{ display: 'none' }} id='product_img' />
    </div>
  );
};

export default FileInput;
