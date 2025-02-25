'use server'

import type { ReactElement } from 'react'

const BackgroundVideo = (): ReactElement => {
  return (
    <video
      className="aspect-video h-full w-full object-cover blur-sm"
      src="/background-video.mp4"
      muted
      autoPlay
      loop
    />
  )
}

export default BackgroundVideo
