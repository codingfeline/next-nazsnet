'use client'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default function Gallery() {
  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/1.jpg', '/2.jpg', '/3.jpg']

  const onInit = () => {
    console.log('lightGallery has been initialized')
  }
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map(i => (
          <a href={i}>
            <img src={i} alt="img" />
          </a>
        ))}
      </LightGallery>
    </div>
  )
}
