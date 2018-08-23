import React from 'react'
import { connect } from 'react-redux'

const BookDetails = ({ activeBook }) => {
  if (!activeBook) {
    return <div>Select a book to see the details</div>
  }

  return (
    <div>
      <div>Book details:</div>
      <div>{activeBook.title}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activeBook: state.activeBook,
})

export default connect(mapStateToProps)(BookDetails)
