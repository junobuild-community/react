import { FC } from 'react'
export const Background: FC = () => {

  return (
    <div className="hidden sm:block fixed top-[400px] [@media(min-height:800px)]:top-2/4 right-0 -z-10 translate-x-2/4 lg:translate-x-1/3 -translate-y-2/4 min-h-[800px] h-[100dvh] aspect-square">
      <img
        src="./juno_illustration.svg"
        role="presentation"
        loading="lazy"
        alt="An astronaut floating in space around planet Juno orbited by satellites, stars in the background."
      />
    </div>
  )
}
