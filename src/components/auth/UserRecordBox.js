import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import AlbumCard from '../albums/AlbumCard'
import ProfileCard from '../auth/ProfileCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      userId: null,
      user: null
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {

    if (!this.state.user) return null
    console.log(this.state.user)
    return (
      <section className="padding-top center-page">
        <div>
          <div className="container">
            <h3>{`${this.state.user.username}'s record box`}</h3>
          </div>
          <div className="container flex-container">
            {this.state.user.rekordBox.map(album => (
              < AlbumCard key={album.deezerId}
                {...album}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard