import React from 'react'

const AlbumCard = ({ title, artist, coverImage, id, addAlbum, removeAlbum, inRekordBox }) => (

  <div className="column-is-one-third album-card" value={id} key={id} >
    <div className="image">
      <img src={coverImage}></img>
    </div>
    
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`${artist.name}`}</h6>
    </div>
    {addAlbum && removeAlbum && (
      <div onClick={(inRekordBox === false) ? addAlbum : removeAlbum} className={`button ${(inRekordBox === false) ? 'button-primary' : 'button'}`} id={id}>
        {(inRekordBox === false) ? 'Add to collection' : 'Remove from collection'}</div>)}
  </div >
)

export default AlbumCard
