import React from 'react'

export default function NewsItem({title,description,src,url}) {
  return (
    <div className="card mb-3 my-5 mx-3 d-inline-block" style={{ maxWidth:"350px" }}>
  <img src={src} style={{ height:"200px",width:"350px" }} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News Item successfully bla bala bla"}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}
