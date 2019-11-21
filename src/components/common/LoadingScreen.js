import React from 'react'

const LoadingScreen = ({ message }) => (
  <section className="center-page">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{message}</h1>
      </div>
    </div>
  </section>
)
export default LoadingScreen