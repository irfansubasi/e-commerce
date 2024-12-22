import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button/Button';
import { useEffect, useState } from 'react';

export default function Carousel({ content }) {
  const slideContent1 = [
    {
      season: 'SUMMER 2024',
      titleLine1: 'NEW COLLECTION',
      description:
        'We know how large objects will act, but things on a small scale.',
      buttonText: 'SHOP NOW',
      bg: 'heroBg1',
    },
    {
      season: 'SUMMER 2024',
      titleLine1: 'IT’S A SPECIAL GIFT',
      description:
        'We know how large objects will act, but things on a small scale.',
      buttonText: 'SHOP NOW',
      bg: 'heroBg2',
    },
  ];

  const slideContent2 = [
    {
      season: 'SUMMER 2024',
      titleLine1: 'Vito Classic Product',
      description:
        'We know how large objects will act, We know how are objects will act, We know.',
      buttonText: 'ADD TO CART',
      price: '$16.48',
      bg: 'heroBg3',
    },
    {
      season: 'SUMMER 2024',
      titleLine1: 'IT’S A SPECIAL GIFT',
      description:
        'We know how large objects will act, but things on a small scale.',
      buttonText: 'SHOP NOW',
      bg: 'heroBg4',
    },
  ];

  const slides = content === 2 ? slideContent2 : slideContent1;

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <ShadCarousel
      className="relative"
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((item, index) => (
          <CarouselItem
            key={index}
            className={`h-[83vh] w-full bg-${item.bg} bg-no-repeat bg-right md:bg-center bg-cover flex items-center relative`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-35 z-10"></div>
            <div className="text-white text-center md:text-start z-20">
              <div className="flex flex-col gap-8 items-center md:items-start container">
                <h5>{item.season}</h5>
                <h1>{item.titleLine1}</h1>
                <h4>{item.description}</h4>
                <div className="flex flex-col md:flex-row items-center gap-x-6">
                  {item.price && <h3>{item.price}</h3>}
                  <Button>
                    <h3>{item.buttonText}</h3>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <button
        className="absolute top-1/2 left-0"
        onClick={() => api?.scrollTo(current - 1)}
      >
        <ChevronLeft color="white" size={50} />
      </button>
      <button
        className="absolute top-1/2 right-0"
        onClick={() => api?.scrollTo(current + 1)}
      >
        <ChevronRight color="white" size={50} />
      </button>
    </ShadCarousel>
  );
}
