import Image from "next/image";
import Link from "next/link";

export const Header = ({data, pages}) => {
    return (<header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
        <div className='flex flex-col justify-around h-full px-6 bg-header z-10'>
            <nav>
                {pages.map(page => {
                    return (<Link area-label={page.label} key={page.id} href={page.link} className=''>{page.label}</Link>);
                })}
            </nav>
            <h1 className=''>{data.name}</h1>
        </div>
        <Image priority height={400} width={2000} className='' src='/images/bg.jpg' alt='' aria-label=''/>
    </header>);
};

export default Header;