import logo from '../assets/images/logo.png';
import {
  User,
  Search,
  ShoppingCart,
  Menu,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="navbar-solid hidden md:flex bg-primary text-white items-center justify-between">
        <div className="navbar-contact p-3 flex items-center gap-8">
          <div className="flex gap-2">
            <Phone size={20} />
            <h6>(225) 555-0118</h6>
          </div>
          <div className="flex gap-2">
            <Mail size={20} />
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>
        <div>
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="navbar-social flex gap-4">
          <h6>Follow Us: </h6>
          <Instagram size={20} />
          <Youtube size={20} />
          <Facebook size={20} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <div className="flex gap-5 md:hidden">
          <User size={30} className="text-txt" />
          <Search size={30} className="text-txt" />
          <ShoppingCart size={30} className="text-txt" />
          <Menu size={30} className="text-txt" />
        </div>
        <nav className="hidden md:block">
          <ul className="md:flex text-secondTxt gap-8 items-center md:flex-row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-8 items-center text-accent">
          <div className="flex gap-3 items-center">
            <User size={18} />
            <Link to="/">Login</Link>
            <span>/</span>
            <Link to="/">Register</Link>
          </div>
          <Search size={18} />
          <ShoppingCart size={18} />
          <Heart size={18} />
        </div>
      </div>
      <nav>
        <ul className="md:hidden text-secondTxt flex flex-col gap-8 items-center py-24 md:flex-row">
          <li>
            <Link to="/" className="mobile-menu">
              Home
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="mobile-menu font-semibold" to="/">
              Pages
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
