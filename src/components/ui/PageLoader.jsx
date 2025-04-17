import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = window.location.href;
  useEffect(() => {

    const handleStart = () => {
      document.body.style.overflowY = 'hidden'
      setIsLoading(true)
    }
    const handleComplete = () =>{
      document.body.style.overflowY = 'scroll'
      setIsLoading(false)
    } 

    handleStart() 
    const timer = setTimeout(() => {
      handleComplete()
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="load-wrapper" id="loader">
        <Loader2 className="animate-spin text-white"/>
    </div>
  )
}

