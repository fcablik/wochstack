import { Link } from "@remix-run/react";

export function ErrorHeader() {
	return (
		<div className='container mx-auto py-6'>
			<nav className="flex justify-between">
				<Link to="/">
					<div className="font-light">LOGO/root route</div>
				</Link>
				<Link to="/">
					<div className="font-light">Go Home</div>
				</Link>
			</nav>
		</div>
	)
}
