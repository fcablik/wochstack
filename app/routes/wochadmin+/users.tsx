import { type DataFunctionArgs, json } from "@remix-run/node"
import { requireAdmin } from '~/utils/permissions.server.ts'
import { Link, useLoaderData } from "@remix-run/react"
import { prisma } from '~/utils/db.server.ts'
import { getUserImgSrc } from "~/utils/misc.ts";
import { requireUserId } from "~/utils/auth.server.ts";


export async function loader({request }: DataFunctionArgs) {
    await requireAdmin(request);
    const userId = await requireUserId(request)
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            username: true,
            imageId: true,
        },
    });
    return json({ users });
}

export default function UsersIndex() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="container mx-auto">
            <h1 className="text-h1"></h1>
            <div className="bg-night-500 py-8 px-12 rounded-3xl">
                <ul className="flex gap-8 justify-center flex-wrap">
                    {data.users.map(user => (
                        <li key={user.id}>
                        <Link to={user.username} className="flex flex-col gap-2">
                            <img src={getUserImgSrc(user.imageId)} alt={user.name ?? user.username} className="rounded-full w-36 h-36" />
                            <div>{user.name}</div>
                            <div className="text-day-400">{user.username}</div>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
