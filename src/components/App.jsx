const favBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'TypeScript main' },
  { id: 'id-5', name: 'All about Node.js' },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return <li key="book.id">{book.name}</li>;
      })}
    </ul>
  );
};

export const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};
