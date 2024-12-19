import logo from '../assets/images/logo.png';
import { User, Search, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-8">
      <div className="flex items-center justify-between">
        <a href="">
          <img className="w-28" src={logo} alt="logo" />
        </a>
        <div className="flex gap-5">
          <User size={30} className="text-txt" />
          <Search size={30} className="text-txt" />
          <ShoppingCart size={30} className="text-txt" />
          <Menu size={30} className="text-txt" />
        </div>
      </div>
      <nav>
        <ul className="text-secondTxt flex flex-col gap-8 items-center py-24">
          <li>
            <Link className="mobile-menu" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Product
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
