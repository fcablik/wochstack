import { Link } from '@remix-run/react'
import { ClientHeaderDropdown } from './dropdowns.tsx'
import { Button } from '@react-email/components'

export function ClientHeader() {
	return (
		<header className="container mx-auto py-6">
			<nav className="flex justify-between">
				<Link to="/">
					<div className="font-light">LOGO/root route</div>
				</Link>
				<div className="flex items-center gap-10">
					<ClientHeaderDropdown />
					<Link to="/login">Log In</Link>
				</div>
			</nav>
		</header>
	)
}



