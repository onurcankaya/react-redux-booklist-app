const INITIAL_STATE = [
  { title: 'Eloquent JS' },
  { title: "You Don't Know JS" },
  { title: 'JS: The Good Parts' },
]

export const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
