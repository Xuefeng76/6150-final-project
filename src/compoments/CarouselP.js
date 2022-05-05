import { Carousel } from 'antd';

import "../styles/Carousel.css"

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

export default () => (
  <Carousel autoplay className='Carouse1a'>
    <div>
      <h3 ><img  src={require('../img/search.jpg')} alt='aa'/></h3>
    </div>
    <div>
    <h3 ><img  src={require('../img/search.jpg')} alt='aa'/></h3>
    </div>
    <div>
    <h3 ><img  src={require('../img/search.jpg')} alt='aa'/></h3>
    </div>
    
  </Carousel>
);