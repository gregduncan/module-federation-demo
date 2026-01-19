import styled from 'styled-components';

export const VersionBadge = styled.div`
  background-color: #f0f9ff;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const Hero = styled.div`
  position: relative;
  height: 500px;
  margin-bottom: 4rem;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroTagline = styled.p`
  font-size: 1.2rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Section = styled.div`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const ProductCard = styled.div`
  min-width: 250px;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProductTitle = styled.h3`
  margin-top: 1rem;
`;

export const PrimaryButton = styled.button<{ $radius?: string }>`
  background-color: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ $radius }) => $radius ?? '4px'};
  cursor: pointer;
  margin-top: 0.5rem;
`;
