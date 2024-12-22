import { Link } from 'react-router-dom';
import placeholder from '../assets/images/pickcard/pick1.jpg';

//data geldiğinde burası değişecek
export default function ProductCard({ imgSrc }) {
  return (
    <>
      <div className="flex flex-col">
        <img
          className="w-full h-[30rem] object-cover"
          src={imgSrc ? imgSrc : placeholder}
        />
        <div className="py-6 flex flex-col gap-y-4">
          <h5 className="text-txt">Graphic Design</h5>
          <Link to="/" className="text-secondTxt">
            English Department
          </Link>
          <div className="price flex gap-x-4 justify-center">
            <h5 className="text-muted">$16.48</h5>
            <h5 className="text-customGreen">$6.48</h5>
          </div>
          <div className="flex justify-center space-x-2 mt-2">
            <div
              className={`w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400`}
            />
            <div
              className={`w-4 h-4 rounded-full bg-[#23856D] cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400`}
            />
            <div
              className={`w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400`}
            />
            <div
              className={`w-4 h-4 rounded-full bg-[#252B42] cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
