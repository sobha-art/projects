import React from 'react';

const HomePage = () =>(
    <div className='homepage'>
        <div className='categories-container'>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>Html course</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>Java course</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>Python course</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>React course</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;