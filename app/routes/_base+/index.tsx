import type { V2_MetaFunction } from '@remix-run/node'
// import { logos } from './logos/logos.ts'
// import {
// 	Tooltip,
// 	TooltipContent,
// 	TooltipProvider,
// 	TooltipTrigger,
// } from '~/components/ui/tooltip.tsx'

export const meta: V2_MetaFunction = () => [{ title: 'Woch Stack' }]

export default function Index() {
	return (
		<main className='container mx-auto py-6'>
			<h3 className="text-center text-h3 font-light">welcome to the homepage of</h3>
			<h1 className="text-center text-mega font-light">wochstack app</h1>
		</main>
	)
}
