import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class TaskSortControl extends Component {
   render() {
      let { sort, onSortTask } = this.props

      return (
         <div className='col-lg-6'>
            <div className='dropdown'>
               <button
                  className='btn btn-primary'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
               >
                  Sort
                  <i className='fas fa-angle-down ml-2'></i>
               </button>
               <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
               >
                  <button
                     className='dropdown-item interactable'
                     onClick={() => onSortTask({ type: 'newest', value: 1 })}
                  >
                     <i className='fas fa-newspaper mr-2'></i>
                     Newest
                     <i
                        className={
                           sort.type === 'newest' && sort.value === 1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>

                  <button
                     className='dropdown-item interactable border-bottom'
                     onClick={() => onSortTask({ type: 'newest', value: -1 })}
                  >
                     <i className='fas fa-newspaper mr-2'></i>
                     Oldest
                     <i
                        className={
                           sort.type === 'newest' && sort.value === -1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>

                  <button
                     className='dropdown-item interactable border-top'
                     onClick={() => onSortTask({ type: 'title', value: 1 })}
                  >
                     <i className='fas fa-sort-alpha-down mr-2'></i>
                     Ascending
                     <i
                        className={
                           sort.type === 'title' && sort.value === 1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>

                  <button
                     className='dropdown-item interactable border-bottom'
                     onClick={() => onSortTask({ type: 'title', value: -1 })}
                  >
                     <i className='fas fa-sort-alpha-down-alt mr-2'></i>
                     Descending
                     <i
                        className={
                           sort.type === 'title' && sort.value === -1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>

                  <button
                     className='dropdown-item interactable border-top'
                     onClick={() => onSortTask({ type: 'status', value: 1 })}
                  >
                     <i className='fas fa-eye mr-2'></i>
                     Show
                     <i
                        className={
                           sort.type === 'status' && sort.value === 1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>

                  <button
                     className='dropdown-item interactable'
                     onClick={() => onSortTask({ type: 'status', value: -1 })}
                  >
                     <i className='fas fa-eye-slash mr-2'></i>
                     Hide
                     <i
                        className={
                           sort.type === 'status' && sort.value === -1
                              ? 'fas fa-check ml-2'
                              : ''
                        }
                     ></i>
                  </button>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({ sort: state.sortTask })

const mapDispatchToProps = dispatch => ({
   onSortTask: sort => dispatch(actions.sortTask(sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl)
