import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <div className=" max-w-project mx-auto flex items-center justify-between px-4">
      {/* logo Image */}
      <Image
        src={'/Images/Logo.png'}
        alt="We
        b logo"
        width={75}
        height={34}
      />

      {/* Menus */}
      <div className="flex items-center justify-start gap-7">
        <Link href={'/'} className="p3 text-grey">
          About
        </Link>
        <Link href={'/'} className="p3 text-grey">
          Menu
        </Link>
        <Link href={'/'} className="p3 text-grey">
          Order Now
        </Link>
        <Link href={'/'} className="p3 text-grey">
          Blog
        </Link>
        <Link href={'/'} className="p3 text-grey">
          Contact
        </Link>
        <Link href={'/'} className="p3 text-grey">
          Cart
        </Link>
      </div>

      <div className="flex items-center justify-end gap-7">
        {/* sign in  */}
        <Link href={'/'} className="button-2 text-dark">
          Sign in
        </Link>

        {/*  */}
        <button className="button-dark button-2">Book a table</button>
      </div>
    </div>
  );
};

export default Header;
