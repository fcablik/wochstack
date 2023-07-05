import { Link } from '@remix-run/react'
import { ClientHeaderDropdown } from './dropdowns.tsx'


export function ClientHeader() {
	return (
		<header className="container mx-auto py-6">
			<nav className="flex justify-between">
				<Link to="/">
					<div className="font-light">LOGO/root route</div>
				</Link>
				<div className="flex items-center gap-10">
					<ClientHeaderDropdown />
				</div>
			</nav>
		</header>
	)
}



