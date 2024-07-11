import Filter from '@/components/all_services/Filter';
import Paging from '@/components/all_services/Paging';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import ServiceContainer from './ServiceContainer';

export default function ServicePage({
  params,
}: {
  params: { [key: string]: string | undefined };
}) {
  return (
    <>
      <ServiceDescription
        title={`Hasil dari ${params.searchQuery}`}
        description=''
      />
      <Filter />
      <Suspense fallback={<Loading />}>
        <ServiceContainer params={params} />
      </Suspense>
    </>
  );
}
