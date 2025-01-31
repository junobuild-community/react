import { Button } from "../../Button"
import { useState } from "react"
import { Layout } from "../../layouts"

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="card">
        <Button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}