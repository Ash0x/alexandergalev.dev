import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Padauk&display=optional'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
					></link>
				</Head>
				<body className='bg-slate-100 dark:text-amber-500 dark:bg-slate-900 transition-colors duration-300'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
