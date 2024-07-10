'use client';
import { Service } from '@/lib/actions/service.actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // const router = useRouter();
  // const [searchQuery, setSearchQuery] = useState(params.searchQuery);

  // const { data, error } = useSWR(
  //   params.searchQuery ? `/api/search?searchQuery=${params.searchQuery}` : null,
  //   fetcher
  // );

  // const handleSearch = () => {
  //   router.push(`/search/service?searchQuery=${searchQuery}`);
  //   setSearchQuery(searchQuery);
  // };

  return (
    <>
      <div>
        {/* <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='-mr-1 w-full rounded-l-sm border px-4 py-2'
          placeholder='Cari jasa apa?'
          required
        />
        <button onClick={() => handleSearch()} className='bg-purple-500'>
          SEARCH
        </button>
        {error && <div>failed to load</div>}
        {data ? (
          <ul>
            {data.map((service: Service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )} */}
      </div>
    </>
  );
}
