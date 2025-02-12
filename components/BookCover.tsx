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
  coverUrl: string;
}

const BookCover = ({
  className,
  variant,
  coverColor,
  coverUrl,
}: Props) => {
  return <div>BookCover</div>;
};

export default BookCover;
