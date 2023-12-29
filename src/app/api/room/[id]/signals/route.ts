import {NextRequest} from "next/server"

import {requireAccessToken} from "@/app/_lib/require-access-token"
import {queryCreateSignal} from "@/room/queries/create-signal.query"

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
