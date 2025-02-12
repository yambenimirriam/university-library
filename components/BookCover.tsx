import { cn } from '@/lib/utils';
import BookCoverSvg from './BookCoverSvg';

type BookCoverVariant =
  | 'extraSmall'
  | 'medium'
  | 'small'
  | 'regular'
  | 'wide';

const variantStyles: Record<
  BookCoverVariant,
  string
> = {
  extraSmall: 'book-cover_extra_small',
  medium: 'book-cover_medium',

  small: 'book-cover_small',

  regular: 'book-cover_regular',

  wide: 'book-cover_wide',
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage?: string;
}

const BookCover = ({
  className,
  variant = 'regular',
  coverColor = '#012848',
  coverImage = 'https://placehold.co/400*600.png',
}: Props) => {
  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className='absolute z-10'
        style={{
          left: '12%',
          width: '87.5%',
          height: '88%',
        }}
      >
        <img
          src={coverImage}
          alt='Book Cover'
          className='rounded-sm object-fill fill'
        />
      </div>
    </div>
  );
};

export default BookCover;
