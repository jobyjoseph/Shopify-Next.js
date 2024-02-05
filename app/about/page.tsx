import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';

export default function About() {
  const { base } = mockCatCardProps;
  return (
    <>
      <h1>About</h1>
      <CatCard {...base} />
    </>
  );
}
