interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({
  title,
  books,
  containerClassName,
}: Props) => {
  return (
    <section className='containerClassName'>
      <h2 className='font-bebas-neue text-4xl text-light-100'>
        {title}
      </h2>
      <ul>
        {books.map((book) => ()};
      </ul>
    </section>
  );
};

export default BookList;
