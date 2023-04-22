import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import DropDown from "./DropDown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
    setIsDropdownOpen(false);
  };

  // 나중에 해당 주소에 맞추어서 갈 수 있도록 수정해야함

  return (
    <div className="relative">
      <header className="bg-main flex w-full relative z-20 px-4 py-3 items-center justify-between">
        <Image
          src="/icon/finger.svg"
          alt="Home"
          className="cursor-pointer hover:scale-125"
          width={30}
          height={39}
          priority
          onClick={handleHome}
        />
        <span
          className="text-2xl tracking-wider font-medium text-white"
          onClick={handleHome}
        >
          이상형 월드컵
        </span>
        <Image
          src="/icon/hambuger.svg"
          alt="dropdown"
          className="cursor-pointer hover:scale-125"
          width={30}
          height={22}
          priority
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </header>
      <DropDown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
    </div>
  );
};

export default Header;
