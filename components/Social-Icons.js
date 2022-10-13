import Link from 'next/link'

import { EmailIcon, GithubIcon, LinkedinIcon, PaperClipIcon } from '../public/icons'

export default function SocialIcons() {
	return (
		<div className='flex items-center'>
			<Link href='/Resumé.pdf'>
				<a
					className='flex items-center hover:text-amber-500 dark:hover:text-white py-1 px-3 border-2 hover:drop-shadow-md border-amber-500 hover:border-red-700 rounded focus:ring-2'
					target='_blank'
					rel='noreferrer'
					aria-label='View Resume'
					title='View Resume'
				>
					<PaperClipIcon className='block h-4 w-4' />
					Resume
				</a>
			</Link>
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
		</div>
	)
}
