import React, { useEffect } from 'react'

const ComA = () => {
    useEffect(() => {
        console.log("mount");
        return () => {
            console.log("unmount");

        }
    }, [])

  return (
    <div>
      Componetnt a
    </div>
  )
}

export default ComA
