import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import Button from '@/components/Button/Button';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="container flex flex-col md:flex-row justify-between items-center py-12 gap-y-8">
          <img src="../assets/images/logo.png" alt="logo" className="w-28" />
          <div className="flex gap-6">
            <Instagram size={20} color="#00A1C1" />
            <Youtube size={20} color="#00A1C1" />
            <Facebook size={20} color="#00A1C1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between container py-16 gap-y-12">
        <div className="flex flex-col gap-4">
          <h5 className="text-txt">Company Info</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Carrier
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                We are hiring
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-txt">Legal</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Carrier
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                We are hiring
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-txt">Features</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Business Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                User Analytic
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Live Chat
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Unlimited Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-txt">Resources</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                IOS & Android
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Watch a Demo
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                Customers
              </Link>
            </li>
            <li>
              <Link to="/" className="text-secondTxt hover:text-accent">
                API
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-txt">Get In Touch</h5>
          <div className="flex w-full max-w-sm items-center">
            <Input
              type="email"
              placeholder="Email"
              className="h-16 font-montserrat bg-gray-100 font-semibold rounded-none rounded-l-md"
            />
            <button
              type="submit"
              className="h-16 bg-accent btn-text text-white rounded-r-md px-6 hover:bg-primary"
            >
              Subscribe
            </button>
          </div>
          <span className="small text-secondTxt">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-8">
        <h6 className="text-secondTxt container text-center">
          Made With Love By{' '}
          <a
            className="underline underline-offset-4"
            href="https://linktr.ee/irfansubasi"
            target="_blank"
          >
            İrfan Subaşı
          </a>{' '}
          All Right Reserved
        </h6>
      </div>
    </footer>
  );
}
