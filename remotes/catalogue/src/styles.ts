import styled from 'styled-components';

export const VersionBadge = styled.div`
  background-color: #f0f9ff;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const CataloguePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const CatalogueTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const CatalogueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const CatalogueCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
`;

export const CatalogueProductImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const CatalogueProductTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const CataloguePrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4299e1;
  margin-bottom: 1rem;
`;

export const ViewButton = styled.button`
  background-color: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3182ce;
  }
`;

export const NotFound = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const DetailsPage = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PrimaryButton = styled.button<{ $marginTop?: string; $marginBottom?: string }>`
  background-color: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${({ $marginTop }) => $marginTop ?? '0'};
  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? '0'};
`;

export const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const DetailsImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DetailsTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const DetailsPrice = styled.p`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

export const DetailsDescription = styled.p`
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const OptionRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SizeButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
`;

export const ColorOption = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: white;
`;

export const AddToCartButton = styled.button`
  background-color: #48bb78;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  width: 100%;
`;

export const ReviewsSection = styled.div`
  margin-top: 3rem;
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewCard = styled.div`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewComment = styled.p`
  margin-top: 0.5rem;
  color: #4a5568;
`;
