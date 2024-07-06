import { Suspense } from 'react';
import HomePage from './HomePage';
import PageLoading from '@/components/PageLoading';

export default async function Home() {
  return (
    <Suspense fallback={<PageLoading />}>
      <HomePage />
    </Suspense>
  );
}
