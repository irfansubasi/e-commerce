import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ShopCategoryCard from '@/components/ShopCategoryCard';

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
    </>
  );
}
