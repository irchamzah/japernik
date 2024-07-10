import { Suspense } from 'react';
import ServicePage from './ServicePage';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';

export default function SearchService({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loading />}>
          <ServicePage params={searchParams} />
        </Suspense>
      </Layout>
    </>
  );
}
