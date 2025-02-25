'use server'

import type { ReactElement } from 'react'

const BackgroundVideo = (): ReactElement => {
  return (
    <>
      <video
        className="aspect-video h-full w-full object-cover blur-sm"
        src="/background-video.mp4"
        muted
        autoPlay
        loop
      />
      {/* Bottom blur */}
      <div className="absolute -bottom-2 z-10 h-60 w-full rounded-t-2xl bg-gradient-to-t from-white pt-20" />
      <div className="absolute -bottom-2 z-10 h-20 w-full rounded-t-full bg-white pt-20 blur-xl" />
      <div className="absolute -bottom-2 z-10 h-60 w-full rounded-t-2xl bg-gradient-to-t from-white pt-20" />
    </>
  )
}

export default BackgroundVideo
