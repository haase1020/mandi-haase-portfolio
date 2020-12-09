
import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"



export default class MyGatsbyComponent extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
      };

  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
    alert("Thank you for subscribing!")
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }
render () {
    return (
        <div className="subscribe-form">
        <h4>Subscribe to my blog</h4>
        <form className="subscribe-form-group" onSubmit={this._handleSubmit}>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="subscribe-form-control"
            />
          <button type="submit" className="btn subscribe-btn">
            Join ✨
          </button>
        </form>
        </div>
    )
  }
}