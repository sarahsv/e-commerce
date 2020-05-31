import React  from 'react';
import './Homepage.styles.scss';
const Homepage = () => {
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>HATS</div>
                        <div className='sub-title'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>JACKETS</div>
                        <div className='sub-title'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>SNEAKERS</div>
                        <div className='sub-title'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>WOMENS</div>
                        <div className='sub-title'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>MENS</div>
                        <div className='sub-title'>SHOP NOW</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
