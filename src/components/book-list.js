import React from 'react'
import { selectBook } from '../store/actions'
import { connect } from 'react-redux'

class BookList extends React.PureComponent {
  selectBook = (book) => {
    this.props.selectBook(book)
  }

  render() {
    return (
      <ul className="app">
        {this.props.books.map((book) => (
          <li key={book.title} onClick={() => this.selectBook(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const mapDispatchToProps = (dispatch) => ({
  selectBook: (payload) => dispatch(selectBook(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
