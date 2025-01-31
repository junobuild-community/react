import { FC, PropsWithChildren } from "react"
import { JunoContext } from "./junoContext"

interface JunoProviderProps extends PropsWithChildren {
  satelliteId: string
}

export const JunoProvider: FC<JunoProviderProps> = (props) => {
  const { satelliteId, children } = props

  return (
    <JunoContext.Provider value={satelliteId}>
      {children}
    </JunoContext.Provider>
  )
}
