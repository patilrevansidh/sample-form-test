import React from 'react';
import { DROPDOWN_DATA } from '../../../Common/Constants/StringConstants';
import { Carousel } from 'antd';
import { Slide } from '../../../Common/Components/Slide';

export const CarouselView = ({ slidePosition, currentCount }) => {
  if (!currentCount) return <SlidePlaceHolder />
  const slideToBeDisplay = DROPDOWN_DATA.slice(0, currentCount);
  return (
    <Carousel autoplay={true} dotPosition={slidePosition}>
      {
        slideToBeDisplay.map(item =>
          <Slide label={item.label} />
        )
      }
    </Carousel>
  )
}


const SlidePlaceHolder = () => <div className='no-slide'>
  Please Selected Slides
</div>