import { Link, useLoaderData } from '@remix-run/react'
import { json, type DataFunctionArgs } from '@remix-run/node'
import { ThemeSwitch } from '~/routes/resources+/theme/index.tsx'
import { getTheme } from '~/routes/resources+/theme/theme-session.server.ts'
import { AdminHeaderDropdown } from '../dropdowns.tsx'
import { requireAdmin } from '~/utils/permissions.server.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireAdmin(request)

    return json({
        requestInfo: {
            session: {
                theme: await getTheme(request)
            }
        }
    })
}

export function AdminHeader() {
	const data = useLoaderData<typeof loader>()

	return (
		<div className="py-2 px-5 border">
			<nav className="flex justify-between">
				<div className='flex items-center gap-5'>
					<Link to="/">
						<div className="font-light">homepage</div>
					</Link>
						<p>|</p>
					<Link to="/admin/">
						<div className="font-light">admin</div>
					</Link>
				</div>

				<div className="flex items-center">
					<ThemeSwitch userPreference={data.requestInfo.session.theme} />
					<AdminHeaderDropdown />
				</div>
			</nav>
		</div>
	)
}
