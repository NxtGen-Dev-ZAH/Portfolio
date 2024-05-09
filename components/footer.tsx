import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p>Email: zaheer.ahmad.contact@gmail.com</p>
            <p>Phone:0112022000 </p>
            <p>Address: unknown </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold"><button className="border-2 p-1 border-slate-500 rounded-lg"><Link href="https://www.linkedin.com/in/zaheerahmedabbasi/" target="_blank">Follow Us</Link></button></h2>
            <div className="flex gap-2">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-800" />
        <div className="text-center">
          <p>&copy; 2024 ZAHEER PORTFOLIO WEBSITE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
