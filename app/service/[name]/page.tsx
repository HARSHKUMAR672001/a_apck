'use client'; 

import { usePathname, useSearchParams } from 'next/navigation';
const Newservices = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullUrl = `${pathname}?${searchParams.toString()}`;

  return (
    <>
    <h1>{fullUrl}</h1>
    </>
  );
};

export default Newservices;