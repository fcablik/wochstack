import type { V2_MetaFunction } from '@remix-run/node'
import { stars } from './logos/logos.ts'
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
		<main className="">
			<h3 className="text-center text-h3 font-light">welcome to the</h3>
			<h1 className="text-center text-mega font-light">wochstack</h1>
		</main>
	)
}
