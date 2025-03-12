import logo  from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-30" />
        </div>

        {/* Links Section */}
        <div className="flex justify-center md:justify-start">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 text-lg">ABOUT US</a></li>
            <li><a href="#" className="hover:text-green-400 text-lg">OUR WORKS</a></li>
            <li><a href="#" className="hover:text-green-400 text-lg">CONTACT US</a></li>
            <li><a href="#" className="hover:text-green-400 text-lg">MEDIA CENTER</a></li>
          </ul>
        </div>

        {/* Privacy & Terms Section */}
        <div className="flex justify-center md:justify-start">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 text-lg">PRIVACY POLICY</a></li>
            <li><a href="#" className="hover:text-green-400 text-lg">TERMS OF SERVICE</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="text-center mt-6 md:mt-0">
          <h3 className="mb-2">FOLLOW US</h3>
          <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
