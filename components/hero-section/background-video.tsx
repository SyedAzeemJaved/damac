'use server'

import type { ReactElement } from 'react'

const BackgroundVideo = (): ReactElement => {
  return (
    <video
      className="aspect-video blur-sm"
      src="/background-video.mp4"
      muted
      autoPlay
    />
  )
}

export default BackgroundVideo
