import {useEffect, useReducer} from "react"

type State = {
  error?: null | any
  stream?: null | MediaStream
}

export const useMediaDevices = () => {
  const [state, dispatch] = useReducer(
    (st: State, ac: Partial<State>) => ({...st, ...ac}),
    {
      error: undefined,
      stream: undefined,
    }
  )

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        dispatch({error: null, stream})
      })
      .catch((error) => {
        dispatch({error, stream: null})
      })
  }, [])

  return state
}
