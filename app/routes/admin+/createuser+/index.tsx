import { type DataFunctionArgs } from '@remix-run/node'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { requireAdmin } from '~/utils/permissions.server.ts'

export async function loader({request }: DataFunctionArgs) {
    await requireAdmin(request)
	return null
}

export default function AdminCreateuserIndex() {
	return (
		<div className="container mx-auto flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Creating New User</h1>
				<p className="mt-3 text-body-md text-muted-foreground">
					Incoming.. Some other time..
				</p>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
