import { useState, version } from 'react';

import {
  Content,
  Hero,
  HeroImage,
  HeroOverlay,
  HeroTagline,
  HeroTitle,
  PrimaryButton,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductTitle,
  Section,
  SectionTitle,
  VersionBadge,
} from './styles';

type AppProps = {
  onNavigate?: (path: string) => void;
  emitter?: unknown;
};

function App({ onNavigate }: AppProps) {
  const [count] = useState(0);
  console.log('useState working, count:', count);

  const handleViewDetails = (id: number) => {
    if (onNavigate) {
      onNavigate(`/catalogue/${id}`);
    }
  };

  return (
    <>
      <VersionBadge>React v{version}</VersionBadge>
      {/* <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment react 17
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement react 17
      </button>
      <span>Count react17: {count}</span> */}
      <Hero className="hero">
        <HeroImage alt="T-shirt collection" src="https://picsum.photos/seed/tshirts/1600/500" />
        <HeroOverlay>
          <HeroTitle>Express Yourself</HeroTitle>
          <HeroTagline>"Life is too short to wear boring t-shirts"</HeroTagline>
        </HeroOverlay>
      </Hero>

      <Content>
        <Section className="bestsellers">
          <SectionTitle>Best Sellers</SectionTitle>
          <ProductGrid>
            {[
              {
                id: 1,
                title: 'Cosmic Cat',
                image: 'https://picsum.photos/seed/cosmic-cat/300/300',
              },
              {
                id: 2,
                title: 'Pizza Ninja',
                image: 'https://picsum.photos/seed/pizza-ninja/300/300',
              },
              {
                id: 3,
                title: 'Pixel Art Gaming',
                image: 'https://picsum.photos/seed/pixel-gaming/300/300',
              },
            ].map((product) => (
              <ProductCard key={product.id}>
                <ProductImage
                  alt={product.title}
                  src={product.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://picsum.photos/300/300';
                    target.alt = `${product.title} (fallback)`;
                  }}
                />
                <ProductTitle>{product.title}</ProductTitle>
                <PrimaryButton onClick={() => handleViewDetails(product.id)}>
                  View Details
                </PrimaryButton>
              </ProductCard>
            ))}
          </ProductGrid>
        </Section>

        <Section className="new-arrivals">
          <SectionTitle>New Arrivals</SectionTitle>
          <ProductGrid>
            {[
              {
                id: 4,
                title: 'Robot DJ',
                image: 'https://picsum.photos/seed/robot-dj/300/300',
              },
              {
                id: 5,
                title: 'Zombie Unicorn',
                image: 'https://picsum.photos/seed/zombie-unicorn/300/300',
              },
              {
                id: 6,
                title: 'Taco Dragon',
                image: 'https://picsum.photos/seed/taco-dragon/300/300',
              },
            ].map((product) => (
              <ProductCard key={product.id}>
                <ProductImage
                  alt={product.title}
                  src={product.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://picsum.photos/300/300';
                    target.alt = `${product.title} (fallback)`;
                  }}
                />
                <ProductTitle>{product.title}</ProductTitle>
                <PrimaryButton $radius="5px" onClick={() => handleViewDetails(product.id)}>
                  View Details
                </PrimaryButton>
              </ProductCard>
            ))}
          </ProductGrid>
        </Section>
      </Content>
    </>
  );
}

export default App;
