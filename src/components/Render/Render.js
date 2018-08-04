import React from 'react'
import Playlist from '../Playlist/Playlist'
import Send from '../Send/Send'
import Search from '../Search/Search'


const Render = (props) => {
    return (
    <div>
      <Search />
      <Playlist />
      <Send videoId={props.id}/>
    </div>
  )
}

export default Render
