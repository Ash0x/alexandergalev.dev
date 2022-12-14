import Head from 'next/head'
import IntroSection from '../components/IntroSection'
import ToolboxSection from '../components/ToolboxSection'

export default function Home() {
	return (
		<>
			<Head>
				<title>Alex Galev|Software Developer</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<IntroSection />
			<ToolboxSection />
		</>
	)
}
