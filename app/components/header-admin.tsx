import { Link } from '@remix-run/react'
import { AdminHeaderDropdown } from './dropdowns.tsx'


export function AdminHeader() {
	return (
		<div className="container py-2">
			<nav className="flex justify-between">
				<Link to="/">
					<div className="font-light">home</div>
				</Link>
				<div className="flex items-center gap-10">
					<AdminHeaderDropdown />
				</div>
			</nav>
		</div>
	)
}



