import Image from 'next/image';
import NavLinks from './NavLinks';
import DateDisplay from './DateDisplay';
import PriceMarquee from './PriceMarquee';
import Link from 'next/link';
import UserMenu from './UserMenu';

const Navbar = () => {
   

    return (
        <nav className="w-full bg-white border-b border-gray-200 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                
               
                <Link href={'/'}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#05893E] rounded-full flex items-center justify-center text-xl">
                        <Image width={10} height={10} src={'/logo-icon.png'} alt='logo-icon'></Image>
                    </div>
                    
                    
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-gray-800 leading-tight">
                            বাজার দর
                        </h1>
                        <DateDisplay></DateDisplay>
                    </div>
                </div>
                </Link>

                
               <UserMenu />

            </div>
            <NavLinks></NavLinks>
            <PriceMarquee></PriceMarquee>
        </nav>
    );
};

export default Navbar;