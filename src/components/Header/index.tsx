import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full p-6 mb-2 flex justify-between">
      <Image src={'/next.svg'} width={120} height={100} alt="logo" />
      <div className='flex items-center gap-1'>
      </div>
    </header>
  );
};
export default Header;
