import { Link } from '@remix-run/react'
import { AdminHeaderDropdown } from './dropdowns.tsx'


export function AdminHeader() {
	return (
		<div className="py-2 px-5 border border-solid">
			<nav className="flex justify-between">
				<div className='flex items-center gap-5'>
					<Link to="/">
						<div className="font-light">home</div>
					</Link>
					<p>|</p>
					<Link to="/admin">
						<div className="font-light">dashboard</div>
					</Link>
				</div>
				<div className="flex items-center">
					<AdminHeaderDropdown />
				</div>
			</nav>
		</div>
	)
}
