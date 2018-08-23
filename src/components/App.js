import React from 'react'
import BookList from './book-list'
import BookDetails from './book-details'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    )
  }
}
export default App
