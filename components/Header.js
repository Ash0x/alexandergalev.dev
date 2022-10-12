import { useState } from 'react'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XMarkIcon } from '../public/icons'

import ThemeSwitch from '../hooks/ThemeSwitch'

const navigation = [
	{ name: 'Home', id: 'home', href: '/' },
	// { name: 'Projects', id: 'projects', href: '/projects'},
	// { name: 'Blog', id: 'blog', href: '/blog'},
	{ name: 'About', id: 'about', href: '/about' }
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const [currentPage, setCurrentPage] = useState('home')

	const handleCurrentPage = (event) => {
		setCurrentPage(event.target.id)
	}

	return (
		<Disclosure as='nav' className='sticky top-0 z-50'>
			{({ open }) => (
				<>
					<div className='w-screen px-2 max-w-full sm:px-6 lg:px-8 backdrop-blur-sm'>
						<div className='flex h-14 items-center justify-between'>
							<Link href='/'>
								<a
									onClick={() => {
										setCurrentPage('home')
									}}
									className='flex flex-shrink-0 items-center hover:opacity-60'
								>
									<span className='text-slate-900 dark:text-white'>
										alexandergalev
									</span>
									<span className='text-amber-500'>.dev</span>
								</a>
							</Link>
							<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-amber-500 hover:text-slate-900 focus:ring-2 focus:ring-inset'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<ThemeSwitch />
							<div className='space-x-2 flex items-center justify-between sm:items-stretch sm:justify-start'>
								<div className='hidden sm:ml-6 sm:block mt-0.5'>
									<div className='flex space-x-6'>
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<a
													id={item.id}
													onClick={handleCurrentPage}
													className={classNames(
														item.id === currentPage
															? 'text-slate-900 dark:text-white'
															: '',
														'px-0 py-1 rounded-md text-sm font-medium link-underline text-amber-500'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Transition
						enter='transition duration-100 ease-out'
						enterFrom='transform scale-95 opacity-0'
						enterTo='transform scale-100 opacity-100'
						leave='transition duration-75 ease-out'
						leaveFrom='transform scale-100 opacity-100'
						leaveTo='transform scale-95 opacity-0'
					>
						<Disclosure.Panel className='sm:hidden backdrop-blur-sm'>
							{({ close }) => (
								<div className='space-y-1 px-2 pt-2 pb-3 items-center justify-between'>
									{navigation.map((item) => (
										<Link key={item.name} href={item.href} passHref>
											<Disclosure.Button
												as='a'
												id={item.id}
												onClick={(e) => {
													setCurrentPage(e.target.id)
													close()
												}}
												className={classNames(
													item.id === currentPage
														? 'text-amber-500 dark:text-white'
														: '',
													'flex items-centered px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white border-b border-b-slate-400 border-opacity-30 pb-2'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Disclosure.Button>
										</Link>
									))}
								</div>
							)}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}
