import HeroBanner from '@/components/presentation/HeroBanners/HeroBanner';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-[1170px] mx-auto ">
      <HeroBanner />
    </main>
  );
}
