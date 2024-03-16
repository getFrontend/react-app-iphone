import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center p-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={18} />

        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            <li key={nav} className="">
              {nav}
            </li>;
          })}
        </ul>

        <div>
          <img src={searchImg} alt="search icon" width={18} height={18} />
          <img src={bagImg} alt="bag icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
