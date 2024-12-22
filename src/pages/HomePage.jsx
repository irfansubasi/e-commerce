import PickCard from '@/components/PickCard';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button/Button';
import BlogCard from '@/components/BlogCard';

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

      <section className="cta-section">
        <div className="cta-content my-12 md:my-0 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <img src="../assets/images/cta.png" alt="cta" className="w-full" />
          </div>
          <div className="flex w-full md:w-1/2 justify-center align-items">
            <div className="p-12 md:p-40 flex flex-col gap-8 justify-center text-center md:text-start">
              <h5 className="text-muted">SUMMER 2020</h5>
              <h2 className="text-txt">Part of the Neural Universe</h2>
              <h4 className="text-secondTxt">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Button>
                  <span className="btn-text">BUY NOW</span>
                </Button>
                <Button variant="outline">
                  <span className="btn-text">READ MORE</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-content container my-20 flex flex-col gap-16">
          <div className="text-center flex flex-col gap-6">
            <h6 className="text-accent">Practice Advice</h6>
            <h2 className="text-txt">Featured Posts</h2>
            <p className="text-secondTxt">
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-3">
            <BlogCard imgSrc="../assets/images/blog/card1.jpg" />
            <BlogCard imgSrc="../assets/images/blog/card2.jpg" />
            <BlogCard imgSrc="../assets/images/blog/card3.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}
