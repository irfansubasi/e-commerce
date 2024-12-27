import { Link } from 'react-router-dom';
import { ChevronRight, Grid2x2, Rows2 } from 'lucide-react';
import ShopCategoryCard from '@/components/ShopCategoryCard';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Button from '@/components/Button/Button';
import ProductCard from '@/components/ProductCard';
import BrandsLogo from '@/components/BrandsLogo';

export default function ShopPage() {
  return (
    <>
      <section>
        <div className="bg-[#FAFAFA] py-12">
          <div className="flex flex-col md:flex-row gap-y-12 items-center justify-between container">
            <h3 className="text-txt">Shop</h3>
            <div className="flex gap-4">
              <Link to="/">Home</Link>
              <span>
                <ChevronRight color="#BDBDBD" />
              </span>
              <h6 className="text-muted">Shop</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/*data gelince burası değişecek*/}
        <div className="bg-[#FAFAFA] py-12">
          <div className="flex flex-col md:flex-row gap-4 container">
            <ShopCategoryCard bgUrl="CategoryCard1" />
            <ShopCategoryCard bgUrl="CategoryCard2" />
            <ShopCategoryCard bgUrl="CategoryCard3" />
            <ShopCategoryCard bgUrl="CategoryCard4" />
            <ShopCategoryCard bgUrl="CategoryCard5" />
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h6 className="text-secondTxt">Showing all 12 results</h6>
            <div className="flex gap-6">
              <h6 className="text-secondTxt">Views:</h6>
              <button>
                <Grid2x2 />
              </button>
              <button>
                <Rows2 color="#b3b3b3" />
              </button>
            </div>
            <div className="flex gap-6">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Price: Low to High</SelectLabel>
                    <SelectItem value="apple">Price: High to Low</SelectItem>
                    <SelectItem value="banana">Rating: Low to High</SelectItem>
                    <SelectItem value="blueberry">
                      Rating: High to Low
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button size="small">Filter</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 my-20">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination>
            <PaginationContent className="text-accent">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="text-muted cursor-no-drop"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="bg-secondary text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      <section>
        <div className="bg-[#FAFAFA] py-12">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <BrandsLogo
              imgSrc="../../assets/images/brands/fedex.png"
              url="https://www.fedex.com/"
            />
            <BrandsLogo
              imgSrc="../../assets/images/brands/paypal.png"
              url="https://www.paypal.com/"
            />
            <BrandsLogo
              imgSrc="../../assets/images/brands/stripe.png"
              url="https://www.stripe.com/"
            />
            <BrandsLogo
              imgSrc="../../assets/images/brands/aws.png"
              url="https://www.aws.com/"
            />
            <BrandsLogo
              imgSrc="../../assets/images/brands/shopify.png"
              url="https://www.shopify.com/"
            />
            <BrandsLogo
              imgSrc="../../assets/images/brands/ups.png"
              url="https://www.ups.com/"
            />
          </div>
        </div>
      </section>
    </>
  );
}
