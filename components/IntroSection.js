import Image from 'next/image'

import SocialIcons from './Social-Icons'
import avatar from '../public/avatar.jpeg'

export default function IntroSection() {
	return (
		<section className='w-full flex flex-col-reverse md:flex-row justify-start text-slate-900 dark:text-amber-500 mt-20 mb-20'>
			<div className='flex-1 flex flex-col gap-y-4'>
				<h1 className='text-4xl'>Alexander Galev</h1>
				<h2 className='text-xl'>Software Developer</h2>
				<p className='max-w-sm'>
					Developing web applications throughout all software development
					lifecycle phases: designing, implementation, testing &amp; deployment.
				</p>
				<SocialIcons />
			</div>
			<div className='relative w-44 h-44 mb-6 md:mb-0 rounded-full overflow-hidden'>
				<Image src={avatar} layout='fill' alt='Alex Galev' priority />
			</div>
		</section>
	)
}
