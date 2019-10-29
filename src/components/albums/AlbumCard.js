import React from 'react'

const AlbumCard = ({ title, artist, coverImage, id, handleAddAlbum }) => (

  <div className="column-is-one-third" value={id} key={id} >
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`Artist: ${artist.name}`}</h6>
    </div>
    <div className="image">
      <img src={coverImage}></img>
    </div>
    {handleAddAlbum && (<div onClick={handleAddAlbum} className="button" id={id}>
     Add to collection
    </div>)}
  </div >
)

export default AlbumCard
