import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import ProfileForm from './ProfileForm'
import LoadingScreen from '../common/LoadingScreen'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      loading: false,
      formData: {
        title: 'Update',
        noPasswordConfirmationField: true,
        noPasswordField: true
      }
    },
    this.formTitle = 'Update'
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    axios.get('api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log('errors', err))
  }

  toggleLoading() {
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put('/api/profile', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ splashMessage: res.data.message, data: res.data, loading: true }))
      .then(() => {
        this.toggleLoading()  
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  render() {
    console.log(this.state)
    if (this.state.loading) return (
      <LoadingScreen
        message={this.state.splashMessage}
      />
    )
    if (!this.state.data) return null
    return (
      <>
        <ProfileForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          profile={this.state.data}
          formData={this.state.formData}
        />
      </>
    )
  }
}

export default Profile