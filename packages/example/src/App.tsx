import { initSatellite } from '@junobuild/core'
import { useEffect, FC } from 'react'
import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { Table } from './components/Table'
import { Auth, AuthGuard } from '@junobuild-community/react'
const App: FC = () => {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true
        }
      }))()
  }, [])

  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <main className="mx-auto max-w-(--breakpoint-2xl) py-16 px-8 md:px-24 [@media(min-height:800px)]:min-h-[calc(100dvh-128px)]">
          <h1 className="dark:text-white text-5xl md:text-6xl font-bold tracking-tight md:pt-24">
            Example App
          </h1>
          <p className="dark:text-white py-4 md:max-w-lg">
            Explore this demo app built with React, Tailwind,{' '}
            <a
              href="https://juno.build"
              rel="noopener noreferrer"
              target="_blank"
              className="underline">
              Juno
            </a>
            , and{' '}
            <a href="https://github.com/junobuild-community/react"
              rel="noopener noreferrer"
              target="_blank"
              className="underline">
              JunoBuild-Community/react
            </a> showcasing a practical application of these technologies.
          </p>

          {/* Auth Component that provides JunoBuild Auth user. */}
          <Auth>
            {/* AuthGuard prompts for a login if the user is not authenticated. */}
            <AuthGuard>
              <Table />
              <Modal />
            </AuthGuard>
          </Auth>
        </main>

        <Footer />

        <Background />
      </div>
    </>
  )
}

export default App
