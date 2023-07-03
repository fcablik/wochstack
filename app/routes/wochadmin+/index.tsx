import { type DataFunctionArgs } from '@remix-run/node'
import { Spacer } from '~/components/spacer.tsx'
import { requireAdmin } from '~/utils/permissions.server.ts'

export async function action({ request }: DataFunctionArgs) {
	await requireAdmin(request)
}

export default function CacheAdminRoute() {
	return (
		<div className="container mx-auto">
			<h3 className="text-h1">Welcome to the dashboard of this Application</h3>
			<Spacer size="2xs" />
		</div>
	)
}


export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error)

	return <div>An unexpected error occurred: {error.message}</div>
}
