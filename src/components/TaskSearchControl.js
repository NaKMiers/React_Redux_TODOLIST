import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class TaskSearchControl extends Component {
   constructor(props) {
      super(props)
      this.state = {
         keyword: ''
      }
   }

   onKeyDown = e => {
      if (e.keyCode === 27) {
         this.setState({ keyword: '' })
      }
      if (e.keyCode === 13) {
         this.onSearch()
      }
   }

   onChange = e => this.setState({ keyword: e.target.value })

   onSearch = () => {
      this.props.onSearchTask(this.state.keyword.trim().toLowerCase())
   }

   render() {
      return (
         <div className='col-lg-6 pd-0'>
            <div className='input-group'>
               <input
                  className='form-control'
                  placeholder='Search'
                  value={this.state.keyword}
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
               />
               <span className=''>
                  <button className='btn btn-primary' onClick={this.onSearch}>
                     <i className='fas fa-search mr-2'></i>
                     Go
                  </button>
               </span>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onSearchTask: keyword => dispatch(actions.searchTask(keyword))
})

export default connect(null, mapDispatchToProps)(TaskSearchControl)
