import { FaBars } from 'react-icons/fa6'

const Header = () => {
	return (
		<header className=' flex items-center justify-between sticky top-0 z-40 px-3 py-4 text-white lg:px-16 bg-zinc-900 h-[10vh]'>
			<div className='flex items-center gap-4'>
				<img src='https://flowbite.com/docs/images/logo.svg'  alt='logo'/>
				<h2 className='text-lg font-bold md:text-2xl'>Geekfoods</h2>
			</div>
			
             
			<ul className='hidden gap-8 font-medium md:flex'>
				{['Home', 'Quote', 'Restaurants', 'Food', 'Contact'].map((item) =>
					item === 'Home' ? (
						<li
							key={item}
							className='text-blue-500 duration-200 cursor-pointer hover:text-blue-600'
						>
							{item}
						</li>
					) : (
						<li
							key={item}
							className='duration-200 cursor-pointer hover:text-blue-600'
						>
							{item}
						</li>
					)
				)}
			</ul>
		
            <button className='font-medium text-white  px-4 py-2 text-sm duration-200 bg-blue-600 rounded-md hover:bg-blue-700'>
			        Get Started
		    </button>
			<FaBars className='text-2xl cursor-pointer md:hidden' />
		</header>
	)
}

export default Header