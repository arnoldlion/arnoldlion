import { useEffect, useState } from "react"

export const Video = ({ mobileSrc, desktopSrc }) => {
  const [videoSrc, setVideoSrc] = useState(mobileSrc)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleResize = () => {
      setVideoSrc(window.innerWidth >= 768 ? desktopSrc : mobileSrc)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileSrc, desktopSrc])

  if (!isMounted) {
    return null // или лоадер
  }

  return (
    <video
      src={videoSrc}
      className={videoSrc === mobileSrc ? "main_video_mobile" : "main_video"}
      // loop
      muted
      playsInline
      autoPlay
      width="100%"
      height="auto"
    />
  )
}