import React from 'react';
import './category-item.style.scss';

const CategoryItem=({title})=>(
<div className='category-item'>
<div className='content-holder'>
     <h1 className='title'>{title}</h1>
<span className='subtitle'>know more</span>
</div>
</div>

);
export default CategoryItem;
