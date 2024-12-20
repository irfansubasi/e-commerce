import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Button from './Button/Button';

export default function Carousel() {
  const slideContent = [
    {
      season: 'SUMMER 2024',
      titleLine1: 'NEW COLLECTION',
      description:
        'We know how large objects will act, but things on a small scale.',
      buttonText: 'SHOP NOW',
      bg: 'heroBg1',
    },
    {
      season: 'SUMMER 2020',
      titleLine1: 'IT’S A SPECIAL GIFT',
      description:
        'We know how large objects will act, but things on a small scale.',
      buttonText: 'SHOP NOW',
      bg: 'heroBg2',
    },
  ];

  return (
    <ShadCarousel>
      <CarouselContent>
        {slideContent.map((item, index) => (
          <CarouselItem
            key={index}
            className={`h-[83vh] w-full bg-${item.bg} bg-no-repeat bg-top bg-cover flex items-center`}
          >
            <div className="text-white text-center md:text-start">
              <div className="flex flex-col gap-8 items-center md:items-start container">
                <h5>{item.season}</h5>
                <h1>{item.titleLine1}</h1>
                <h4>{item.description}</h4>
                <div>
                  <Button>
                    <h3>{item.buttonText}</h3>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </ShadCarousel>
  );
}
