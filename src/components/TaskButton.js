import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
class TaskButton extends Component {
   render() {
      return (
         <div className='mt-3 mb-3'>
            <button
               type='button'
               className='btn btn-success mr-2'
               onClick={this.props.onToggleFrom}
            >
               <i className='fas fa-plus mr-2'></i>
               Add Word
            </button>
         </div>
      )
   }
}

const mapStateToProps = state => ({ isDisplayForm: state.displayForm })

const mapDispatchToProps = dispatch => ({
   onToggleFrom: () => dispatch(actions.toggleForm())
})
export default connect(mapStateToProps, mapDispatchToProps)(TaskButton)
