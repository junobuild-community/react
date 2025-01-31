import { FC, PropsWithChildren } from "react"
import viteLogo from "../../assets/vite.svg"
import reactLogo from "../../assets/react.svg"
import { Footer } from "./footer"
export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {children}
      <Footer />
    </div>
  )
}
