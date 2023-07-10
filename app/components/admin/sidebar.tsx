import { Link, useMatches } from '@remix-run/react'

export function AdminSidebar() {
	const matches = useMatches()
	const { id } = matches[matches.length - 1]
	const routeAdmin = id.includes('admin')

    const sidebarClasslist = (routeAdmin ? 'admin sidebar' : 'sidebar')

	return (
		<div className={sidebarClasslist}>
			<button
				data-drawer-target="sidebar-multi-level-sidebar"
				data-drawer-toggle="sidebar-multi-level-sidebar"
				aria-controls="sidebar-multi-level-sidebar"
				type="button"
				className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="h-6 w-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
				</svg>
			</button>

			<aside
				id="sidebar-multi-level-sidebar"
				className="fixed z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<Link to="/admin/">
								<div className="font-light">dashboard</div>
							</Link>
						</li>
						<li>
							<Link to="/admin/cache/">
								<div className="font-light">cache</div>
							</Link>
						</li>
						<li>
							<Link to="/admin/users/">
								<div className="font-light">users</div>
							</Link>
						</li>
						<li>
							<Link to="/admin/usercreate/">
								<div className="font-light">add new user</div>
							</Link>
						</li>
						<li>
							<Link to="/admin/imports/">
								<div className="font-light">imports</div>
							</Link>
						</li>
						<li>
							<Link to="/admin/imports/texts">
								<div className="font-light">import texts</div>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	)
}
