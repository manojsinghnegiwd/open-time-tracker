import { useState, useCallback } from "react"

const useTimer = (step = 1000) => {
  const [duration, setDuration] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<number | null>(null)

  const start = useCallback((initialDuration: number) => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    // creating a copy of duration so it can be used inside setInterval
    let newDuration = initialDuration

    const newIntervalId = setInterval(() => {
      newDuration = newDuration + 1
      setDuration(newDuration)
    }, step)

    setIntervalId(newIntervalId)
  }, [intervalId, setDuration, setIntervalId, step])

  const stop = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [intervalId, setIntervalId])

  return {duration, start, stop}
}

export default useTimer
