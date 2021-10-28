import React from 'react';

function DisplayCode({product}) {
  return (
    product && (
      <div className='DisplayCode'>
            Title: {product.categories}
      </div>
    )
  );
}

export default DisplayCode;