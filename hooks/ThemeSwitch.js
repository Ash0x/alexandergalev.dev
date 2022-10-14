import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '../public/icons'

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<button
			aria-label={
				theme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
			}
			title={theme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'}
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark')
			}}
		>
			{theme === 'dark' ? (
				<MoonIcon aria-hidden='true' />
			) : (
				<SunIcon aria-hidden='true' />
			)}
		</button>
	)
}
