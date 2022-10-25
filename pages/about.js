import Head from 'next/head'
import Image from 'next/image'

import SocialIcons from '../components/Social-Icons'
import pic from '../public/LivesimplyCrop.jpg'

export default function About() {
	return (
		<>
			<Head>
				<title>Alex Galev|Software Developer</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1
				className='mb-12 text-2xl border-b border-black dark:border-amber-500
			 w-fit'
			>
				About Me
			</h1>
			<div className='flex flex-col md:flex-row-reverse pb-12'>
				<div className='flex-1 overflow-hidden rounded-md'>
					<Image
						src={pic}
						alt='Alex Galev'
						layout='responsive'
						className='rounded-md'
						priority
					/>
				</div>
				<div className='flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20'>
					<p>
						My name is Alexander Galev <span className='ampersand'>&amp;</span>{' '}
						I&apos;m a Software Developer, avid Photographer, Adventurous
						Traveller, Novice Skier <span className='ampersand'>&amp;</span>{' '}
						decent Rollerblader. Currently residing in Santa Barbara,
						California.
					</p>
					<p>
						I graduated with a B.A. in Industrial Economics in 2015{' '}
						<span className='ampersand'>&amp;</span> ultimately found passion
						for creating software. I first transitioned into Software
						Development in 2016. I have a strong desire to pursue a career
						working in a collaborative environment, where I can contribute to
						building meaningful software in a most modern{' '}
						<span className='ampersand'>&amp;</span> forward thinking way.
					</p>
					<p>
						My professional focus is on building web applications. My Frontend
						tech stack of choice includes React, Next.js, Tailwind CSS{' '}
						<span className='ampersand'>&amp;</span> I utilize Node.js + Express
						to build RESTful APIs.
					</p>
					<p>Get in touch and let&apos;s create something amazing together!</p>
					<SocialIcons />
				</div>
			</div>
		</>
	)
}
