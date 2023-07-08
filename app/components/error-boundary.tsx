import {
	Link,
	isRouteErrorResponse,
	useParams,
	useRouteError,
} from '@remix-run/react'
import { type ErrorResponse } from '@remix-run/router'
import { getErrorMessage } from '~/utils/misc.ts'

type StatusHandler = (info: {
	error: ErrorResponse
	params: Record<string, string | undefined>
}) => JSX.Element | null

export function GeneralErrorBoundary({
	defaultStatusHandler = ({ error }) => (
		<>
			<p className='text-h2'>
				We are sorry, this page doesn't exist :(
				{/* {error.status} {error.data} */}
			</p>
			<p className='mt-4'>
				<span className='mr-2'>See</span><Link to="/" className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 gap-2'>homepage</Link>
			</p>
		</>
	),
	statusHandlers,
	unexpectedErrorHandler = error => (
		<p>{getErrorMessage(error)}</p>
	),
}: {
	defaultStatusHandler?: StatusHandler
	statusHandlers?: Record<number, StatusHandler>
	unexpectedErrorHandler?: (error: unknown) => JSX.Element | null
}) {
	const error = useRouteError()
	const params = useParams()

	if (typeof document !== 'undefined') {
		console.error(error)
	}

	return (
		<div className="container mx-auto flex flex-col items-center justify-center h-5/6">
			{isRouteErrorResponse(error)
				? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
						error,
						params,
				  })
				: unexpectedErrorHandler(error)}
		</div>
	)
}
