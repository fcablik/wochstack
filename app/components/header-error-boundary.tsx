import { Link } from "@remix-run/react";

export function ErrorHeader() {
	return (
		<header className='container mx-auto py-6'>
			<nav className="flex justify-between">
				<Link to="/">
					<div className="font-light">LOGO/root route</div>
				</Link>
				<Link to="/">
					<div className="font-light">Go Home</div>
				</Link>
			</nav>
		</header>
	)
}
