import { useNavigate, useParams } from 'react-router-dom';

import ProductDetails from './product-details';
import {
  CatalogueCard,
  CatalogueGrid,
  CataloguePage,
  CataloguePrice,
  CatalogueProductImage,
  CatalogueProductTitle,
  CatalogueTitle,
  ViewButton,
} from './styles';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

function Catalogue() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId?: string }>();

  const handleViewDetails = (productId: number) => {
    navigate(`/catalogue/${productId}`);
  };

  // If we have a productId parameter, show the product details
  if (productId) {
    return <ProductDetails productId={productId} />;
  } else {
    console.log('No productId found');
  }

  // Otherwise show the product list
  const products: Product[] = [
    {
      id: 1,
      title: 'Cosmic Cat T-Shirt',
      price: '$25.99',
      image: 'https://picsum.photos/seed/cosmic-cat/300/300',
    },
    {
      id: 2,
      title: 'Pizza Ninja T-Shirt',
      price: '$23.99',
      image: 'https://picsum.photos/seed/pizza-ninja/300/300',
    },
    {
      id: 3,
      title: 'Pixel Gaming T-Shirt',
      price: '$24.99',
      image: 'https://picsum.photos/seed/pixel-gaming/300/300',
    },
    {
      id: 4,
      title: 'Robot DJ T-Shirt',
      price: '$26.99',
      image: 'https://picsum.photos/seed/robot-dj/300/300',
    },
    {
      id: 5,
      title: 'Zombie Unicorn T-Shirt',
      price: '$27.99',
      image: 'https://picsum.photos/seed/zombie-unicorn/300/300',
    },
    {
      id: 6,
      title: 'Taco Dragon T-Shirt',
      price: '$25.99',
      image: 'https://picsum.photos/seed/taco-dragon/300/300',
    },
  ];

  return (
    <CataloguePage>
      <CatalogueTitle>Our T-Shirt Collection</CatalogueTitle>

      <CatalogueGrid>
        {products.map((product) => (
          <CatalogueCard key={product.id}>
            <CatalogueProductImage
              alt={product.title}
              src={product.image}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/300/300';
                target.alt = `${product.title} (fallback)`;
              }}
            />
            <CatalogueProductTitle>{product.title}</CatalogueProductTitle>
            <CataloguePrice>{product.price}</CataloguePrice>
            <ViewButton onClick={() => handleViewDetails(product.id)}>View Details</ViewButton>
          </CatalogueCard>
        ))}
      </CatalogueGrid>
    </CataloguePage>
  );
}

export default Catalogue;
