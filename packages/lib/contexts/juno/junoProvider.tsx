import { PropsWithChildren } from "react"
import { JunoContext } from "./junoContext"

interface JunoProviderProps extends PropsWithChildren {
  satelliteId: string
}

export function JunoProvider(props: JunoProviderProps) {
  const { satelliteId, children } = props

  return (
    <JunoContext.Provider value={satelliteId}>
      {children}
    </JunoContext.Provider>
  )
}
