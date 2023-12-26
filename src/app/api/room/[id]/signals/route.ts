import {cookies} from "next/headers"
import {NextRequest} from "next/server"

import {queryCreateSignal} from "@/room/queries/create-signal.query"

export const POST = async (
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) => {
  const accessToken = cookies().get("accessToken")?.value
  if (!accessToken) throw new Error("No access token")

  const signal = await queryCreateSignal({
    accessToken,
    roomId: id,
    ...(await req.json()),
  })

  return new Response(JSON.stringify(signal))
}
