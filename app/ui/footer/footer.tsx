import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Box 
} from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/service' },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-300 font-sans border-t border-zinc-800">
      <div className=" px-4 sm:px-6 lg:px-[80px] py-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-800/80">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
                src="/Frame%2033.svg"
                width={40}
                height={40}
                alt='Logo'
                />
            <span className="text-xl font-bold text-white tracking-wide">
              SquareUp
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#9EFF00] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Stay Connected Box */}
          <div className="flex items-center gap-4 bg-[#1e1e1e] border border-zinc-800 rounded-xl px-5 py-3">
            <span className="text-sm font-medium text-white whitespace-nowrap">
              Stay Connected
            </span>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="w-10 h-10 bg-[#262626] hover:bg-[#333] border border-zinc-700/50 rounded-lg flex items-center justify-center text-[#9EFF00] transition-colors duration-200"
                aria-label="Facebook"
              >
                {/* <Facebook className="w-4 h-4 fill-current" /> */}
                <Image
                    src={'/facebook.svg'}
                    width={20}
                    height={20}
                    alt='logo'
                    />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#262626] hover:bg-[#333] border border-zinc-700/50 rounded-lg flex items-center justify-center text-[#9EFF00] transition-colors duration-200"
                aria-label="Twitter"
              >
                {/* <Twitter className="w-4 h-4 fill-current" /> */}
                <Image
                    src={'/twiter.svg'}
                    width={20}
                    height={20}
                    alt='logo'
                    />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#262626] hover:bg-[#333] border border-zinc-700/50 rounded-lg flex items-center justify-center text-[#9EFF00] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                {/* <Linkedin className="w-4 h-4 fill-current" /> */}
                <Image
                    src={'/linkedin.svg'}
                    width={20}
                    height={20}
                    alt='logo'
                    />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          
          {/* Contact Details */}
          <div className="md:flex md:flex-wrap md:items-center justify-center md:justify-start gap-x-8 gap-y-3">
            <a 
              href="mailto:hello@squareup.com" 
              className="flex items-center gap-2 hover:text-white transition-colors duration-200 py-[20px]"
            >
              <Mail className="w-4 h-4 text-[#9EFF00]" />
              <span>hello@squareup.com</span>
            </a>

            <a 
              href="tel:+9191813232309" 
              className="flex items-center gap-2 hover:text-white transition-colors duration-200 py-[20px]"
            >
              <Phone className="w-4 h-4 text-[#9EFF00]" />
              <span>+91 91813 23 2309</span>
            </a>

            <div className="flex items-center gap-2 py-[20px] border-y-1 border-y-gray">
              <MapPin className="w-4 h-4 text-[#9EFF00]" />
              <span>Somewhere in the World</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-gray-500 text-center md:text-right">
            © 2023 SquareUp. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}