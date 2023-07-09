import { type DataFunctionArgs } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { AdminSidebar } from '~/components/admin/sidebar.tsx'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { requireAdmin } from '~/utils/permissions.server.ts'

export async function loader({request }: DataFunctionArgs) {
    await requireAdmin(request)
	return null
}

export default function AdminRoute() {
	return (
		<>
			<AdminSidebar />

			<main className="backend p-4 sm:ml-64">
				<Outlet />
			</main>
		</>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
