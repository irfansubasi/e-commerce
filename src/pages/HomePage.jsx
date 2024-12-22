import PickCard from '@/components/PickCard';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <>
      <section className="carousel-section">
        <Carousel content={1} />
      </section>

      <section className="editorPick-section bg-[#FAFAFA]">
        <div className="editorPick-content container flex flex-col items-center py-20 gap-6 text-center">
          <h3>EDITOR&apos;S PICK</h3>
          <p className="text-secondTxt">
            Problems trying to resolve the conflict between
          </p>
          <div className="pick-cards flex flex-col md:flex-row w-full h-full gap-y-10 md:gap-x-6">
            <Link to="/" className="h-[40rem] w-full">
              <PickCard
                category="MEN"
                imgSrc="../assets/images/pickcard/pick1.jpg"
              />
            </Link>
            <Link to="/" className="h-[40rem] w-full">
              <PickCard
                category="WOMEN"
                imgSrc="../assets/images/pickcard/pick2.jpg"
              />
            </Link>
            <div className="flex flex-col gap-10 md:gap-y-4 w-full h-[40rem]">
              <Link to="/" className="h-[20rem] w-full">
                <PickCard
                  category="ACCESSORIES"
                  imgSrc="../assets/images/pickcard/pick3.jpg"
                />
              </Link>
              <Link to="/" className="h-[20rem] w-full">
                <PickCard
                  category="KIDS"
                  imgSrc="../assets/images/pickcard/pick4.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-content py-20 flex flex-col gap-6 text-center container">
          <h4 className="text-secondTxt">Featured Products</h4>
          <h3 className="text-txt">BESTSELLER PRODUCTS</h3>
          <p className="text-secondTxt">
            Problems trying to resolve the conflict between
          </p>
          <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-12">
            {/*'data geldiğinde burası değişecek'*/}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <Carousel content={2} />
      </section>
    </>
  );
}
