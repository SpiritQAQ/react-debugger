import { React, useState } from '@/reactFilter.js'

const Demo1 = () => {
  const [time, setTime] = useState(0)
  return (
    <>
      <button onClick={() => setTime(time + 1)}>Time + 1</button>
      <div style={{ fontSize: '30px' }}>{time}</div>
    </>
  )
}

export default Demo1
