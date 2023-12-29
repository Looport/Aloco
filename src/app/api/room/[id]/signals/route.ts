import {NextRequest} from "next/server"

import {queryCreateSignal} from "@/room/queries/create-signal.query"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const POST = async (
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) => {
  const signal = await queryCreateSignal({
    accessToken: requireAccessToken(),
    roomId: id,
    ...(await req.json()),
  })

  return new Response(JSON.stringify(signal))
}
