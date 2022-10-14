import Link from 'next/link'
import { EmailIcon, GithubIcon, LinkedinIcon } from '../public/icons'

export default function Footer() {
	return (
		<footer className='flex items-center place-content-center'>
			<span className='text-slate-900 dark:text-amber-500'>
				&copy; {new Date().getFullYear()} Alexander Galev
			</span>
			<Link href='mailto:alex.galev@yahoo.com'>
				<a
					className='ml-5 m-1.5 text-slate-900 dark:text-amber-500 hover:text-amber-500 dark:hover:text-white'
					target='_blank'
					rel='noreferrer'
					aria-label='Email'
					title='Email'
				>
					<EmailIcon />
				</a>
			</Link>
			<Link href='https://github.com/Ash0x'>
				<a
					className='m-1.5 text-slate-900 dark:text-amber-500 hover:text-amber-500 dark:hover:text-white'
					target='_blank'
					rel='noreferrer'
					aria-label='Github'
					title='Github'
				>
					<GithubIcon />
				</a>
			</Link>
			<Link href='https://www.linkedin.com/in/alexander-galev-28952273/'>
				<a
					className='m-1.5 text-slate-900 dark:text-amber-500 hover:text-amber-500 dark:hover:text-white'
					target='_blank'
					rel='noreferrer'
					aria-label='LinkedIn'
					title='LinkedIn'
				>
					<LinkedinIcon />
				</a>
			</Link>
		</footer>
	)
}
