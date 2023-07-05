import { type DataFunctionArgs } from '@remix-run/node'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { requireAdmin } from '~/utils/permissions.server.ts'

export async function loader({request }: DataFunctionArgs) {
    await requireAdmin(request)
	return null
}

export default function WochAdmin() {
	return (
		<div className="container mx-auto">
			<h5 className="text-center text-h3 font-light">Welcome to the dashboard of this Application</h5>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
