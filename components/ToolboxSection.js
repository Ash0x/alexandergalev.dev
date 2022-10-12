import { ToolboxIcon, devIcons } from '../public/icons'

export default function ToolboxSection() {
	return (
		<section className='mb-10 text-slate-900 dark:text-amber-500'>
			<span className='flex items-center mb-8'>
				<div className='py-2 px-2 border-2 border-slate-900 rounded-full mr-2'>
					<ToolboxIcon />
				</div>
				<h4 className='text-2xl text-accent font-semibold'>Toolbox</h4>
			</span>
			<ul className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
				{devIcons.map((icon) => (
					<li key={icon.title}>
						<i className={icon.iconName}></i>
						<span className='ml-1'>{icon.title}</span>
					</li>
				))}
			</ul>
		</section>
	)
}
