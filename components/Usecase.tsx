import { usecaseCarouselData } from '@/constants/constants';
import React from 'react'
import { Card, Carousel } from './ui/AppleCardsCarousel';

const Usecase = () => {
    const cards = usecaseCarouselData.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));
    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Flexauth in Action
            </h2>
            <Carousel items={cards} />
        </div>
    )
}

export default Usecase