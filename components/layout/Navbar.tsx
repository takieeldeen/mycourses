import Image from "next/image";

function Navbar(): JSX.Element {
  return (
    <nav className="px-4 py-2 flex flex-col ">
      <div className="flex ">
        <Image
          src="/img/home/logo.png"
          height={60}
          width={120}
          alt="MyCourse Logo"
          priority
        />
        <button>Menu</button>
      </div>
      <form>
        <input type="text" placeholder="Search for course" />
      </form>
    </nav>
  );
}
export default Navbar;
