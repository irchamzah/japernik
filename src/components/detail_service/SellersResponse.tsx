import Image from 'next/image';
import DropdownButton from '../ui_components/DropdownButton';
import { SellerResponse } from '@/lib/actions/sellerResponse.actions';
import { getUserByUserId } from '@/lib/actions/user.actions';

const SellersResponse = async ({
  sellerResponse,
}: {
  sellerResponse: SellerResponse[];
}) => {
  if (sellerResponse.length === 0) {
    return <></>;
  }
  const reviewer = await getUserByUserId(sellerResponse[0]?.userId);

  return (
    <>
      <hr />
      <div className='flex flex-col gap-2'>
        <DropdownButton
          labelDropdown={
            <div className='flex items-center gap-3'>
              <Image
                src={reviewer?.photo ?? ''}
                alt=''
                width={48}
                height={0}
                className='h-8 w-8 rounded-full'
              />
              <span className='text-sm font-bold'>Seller&apos;s Response</span>
            </div>
          }
        >
          <p className='ml-11 text-base font-medium text-gray-600'>
            {sellerResponse[0].response}
          </p>
        </DropdownButton>
      </div>
    </>
  );
};

export default SellersResponse;
