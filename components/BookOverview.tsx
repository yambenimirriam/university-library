import Image from 'next/image';

const BookOverview = ({
  title,
  author,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
  genre,
}: Book) => {
  return (
    <section className='book-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>
        <div className='book-info'>
          <p>
            By{' '}
            <span className='font-semibold text-light-200'>
              {author}
            </span>
          </p>
          <p>
            Category{' '}
            <span className='font-semibold text-light-200'>
              {genre}
            </span>
          </p>
          <div className='flex flex-row gap-1'>
            <Image
              src='icons/star.svg'
              width={22}
              height={22}
              alt='star'
            />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
