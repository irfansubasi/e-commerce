import { Clock, MessageSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogCard({ imgSrc }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative aspect-square">
        <img src={imgSrc} alt={imgSrc} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <h6 className="bg-red-500 text-white px-3 py-1 rounded">NEW</h6>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <nav className="flex gap-6">
          <Link to="/" className="text-accent hover:text-black">
            Google
          </Link>
          <Link to="/" className="text-secondTxt hover:text-accent">
            Trending
          </Link>
          <Link to="/" className="text-secondTxt hover:text-accent">
            New
          </Link>
        </nav>

        <h4 className="font-bold text-txt">
          Loudest à la Madison #1 (L&apos;integral)
        </h4>

        <p className="text-secondTxt">
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Clock size={15} color="#00A1C1" />
            <span className="small text-secondTxt">22 April 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={15} color="green" />
            <span className="small text-secondTxt">10 comments</span>
          </div>
        </div>

        <Link to="/">
          <h6 className="flex items-center text-secondTxt hover:text-accent">
            Learn More
            <ChevronRight color="#00A1C1" />
          </h6>
        </Link>
      </div>
    </div>
  );
}
