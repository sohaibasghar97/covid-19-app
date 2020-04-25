import React, { Component } from 'react'
import Model from 'react-animated-modal'
import Player from 'react-player'
import { useState } from 'react'

const VideoPlyaer = () => {
    const [show,setModel] =useState(true)
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Model
        type={'bounceInDown'}
        visible={show}
        closemodal={() => {
          setModel(false)
        }}
      >
        <Player
          controls
          width={'100%'}
          height={'100%'}
          url={'https://www.youtube.com/watch?v=PSnSo9kYlH4'}
          onEnded={()=>{setModel(false)}}
        />
      </Model>
    </div>
  )
}

export default VideoPlyaer
