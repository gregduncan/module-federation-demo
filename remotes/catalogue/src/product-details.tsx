import { useNavigate } from 'react-router-dom';

import {
  AddToCartButton,
  ColorOption,
  DetailsDescription,
  DetailsImage,
  DetailsPage,
  DetailsPrice,
  DetailsTitle,
  NotFound,
  OptionRow,
  PrimaryButton,
  ProductLayout,
  ReviewCard,
  ReviewComment,
  ReviewHeader,
  ReviewsList,
  ReviewsSection,
  Section,
  SizeButton,
} from './styles';

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
};

type Product = {
  title: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  reviews: Review[];
};

type ProductDetailsProps = {
  productId: string;
};

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const navigate = useNavigate();

  // Convert productId to number since it comes as a string from useParams
  const numericProductId = parseInt(productId, 10);

  // Mock product data - in a real app, this would come from an API
  const products: Record<number, Product> = {
    1: {
      title: 'Cosmic Cat T-Shirt',
      price: '$25.99',
      image: 'https://picsum.photos/seed/cosmic-cat/600/600',
      description:
        'Embrace the cosmic feline energy with our signature Cosmic Cat T-shirt. This premium cotton blend features a stunning design of a cat floating through space, surrounded by stars and nebulae. Perfect for both cat lovers and astronomy enthusiasts!',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy Blue'],
      reviews: [
        {
          id: 1,
          user: 'SpaceCatLover',
          rating: 5,
          comment: 'Amazing quality and the print is absolutely stunning!',
        },
        {
          id: 2,
          user: 'TShirtCollector',
          rating: 4,
          comment: 'Great fit and comfortable material. Colors are vibrant.',
        },
        {
          id: 3,
          user: 'FashionGuru',
          rating: 5,
          comment: 'Gets lots of compliments whenever I wear it!',
        },
      ],
    },
    2: {
      title: 'Pizza Ninja T-Shirt',
      price: '$23.99',
      image: 'https://picsum.photos/seed/pizza-ninja/600/600',
      description:
        "Who says ninjas can't enjoy pizza? This whimsical design features a stealthy ninja masterfully slicing a pizza with a katana. Made from 100% organic cotton, this shirt is as comfortable as it is funny.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Dark Grey', 'Red'],
      reviews: [
        {
          id: 1,
          user: 'PizzaWarrior',
          rating: 5,
          comment: 'Perfect combination of my two favorite things!',
        },
        {
          id: 2,
          user: 'NinjaFoodie',
          rating: 4,
          comment: 'Material is great, print quality is excellent.',
        },
      ],
    },
    3: {
      title: 'Pixel Gaming T-Shirt',
      price: '$24.99',
      image: 'https://picsum.photos/seed/pixel-gaming/600/600',
      description:
        'Take a trip down memory lane with our retro-inspired Pixel Gaming t-shirt. Featuring classic 8-bit graphics and a nostalgic design that will remind you of the golden age of gaming. Made with gamers in mind!',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Grey', 'Navy'],
      reviews: [
        { id: 1, user: 'RetroGamer', rating: 5, comment: 'This brings back so many memories!' },
        { id: 2, user: 'PixelArtist', rating: 5, comment: 'The design is perfectly executed.' },
        {
          id: 3,
          user: 'GameCollector',
          rating: 4,
          comment: 'Great quality, wish it came in more colors.',
        },
      ],
    },
    4: {
      title: 'Robot DJ T-Shirt',
      price: '$26.99',
      image: 'https://picsum.photos/seed/robot-dj/600/600',
      description:
        'Drop the beat with our Robot DJ t-shirt! This futuristic design features a cool robot mixing tracks on a holographic deck. Made from premium cotton with a touch of stretch for comfort.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Electric Blue', 'Silver'],
      reviews: [
        { id: 1, user: 'TechnoLover', rating: 5, comment: 'The design glows under UV light!' },
        { id: 2, user: 'RobotFan', rating: 4, comment: 'Cool design, fits great!' },
      ],
    },
  };

  const product = products[numericProductId];

  if (!product || Number.isNaN(numericProductId)) {
    return (
      <NotFound>
        <h1>Product not found</h1>
        <p>
          Product ID: {productId} (converted to: {numericProductId})
        </p>
        <PrimaryButton $marginTop="1rem" onClick={() => navigate('/catalogue')}>
          Back to Catalogue
        </PrimaryButton>
      </NotFound>
    );
  }

  return (
    <DetailsPage>
      <PrimaryButton $marginBottom="2rem" onClick={() => navigate('/catalogue')}>
        Back to Catalogue
      </PrimaryButton>

      <ProductLayout>
        <div>
          <DetailsImage
            alt={product.title}
            src={product.image}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/600/600';
              target.alt = `${product.title} (fallback)`;
            }}
          />
        </div>

        <div>
          <DetailsTitle>{product.title}</DetailsTitle>
          <DetailsPrice>{product.price}</DetailsPrice>
          <DetailsDescription>{product.description}</DetailsDescription>

          <Section>
            <h3>Available Sizes:</h3>
            <OptionRow>
              {product.sizes.map((size) => (
                <SizeButton key={size}>{size}</SizeButton>
              ))}
            </OptionRow>
          </Section>

          <Section>
            <h3>Available Colors:</h3>
            <OptionRow>
              {product.colors.map((color) => (
                <ColorOption key={color}>{color}</ColorOption>
              ))}
            </OptionRow>
          </Section>

          <AddToCartButton>Add to Cart</AddToCartButton>
        </div>
      </ProductLayout>

      <ReviewsSection>
        <h2>Customer Reviews</h2>
        <ReviewsList>
          {product.reviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewHeader>
                <strong>{review.user}</strong>
                <div>
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </ReviewHeader>
              <ReviewComment>{review.comment}</ReviewComment>
            </ReviewCard>
          ))}
        </ReviewsList>
      </ReviewsSection>
    </DetailsPage>
  );
};

export default ProductDetails;
