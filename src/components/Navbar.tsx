import { Link } from "react-router-dom";
import SlideWraper from "./SlideWraper";

const Navbar = () => {
  // const { pathname } = useLocation();
  // const isBusiness = pathname === "/";

  return (
    <header className="mix-blend-difference backdrop-blur-md shadow-md py-[20px] px-4 fixed top-0 left-0 w-full z-[2]">
      <div className="flex justify-end max-w-[1200px] lg:mx-auto">
        <div className="flex gap-6 items-center">
          <SlideWraper>
            <Link to={"/"} className="text-[12px] hover:underline">
              Webminds Kupang
            </Link>
          </SlideWraper>
          <SlideWraper>
            <Link to={"/reymooy"} className="font-bold">
              Rey Mooy
            </Link>
          </SlideWraper>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
