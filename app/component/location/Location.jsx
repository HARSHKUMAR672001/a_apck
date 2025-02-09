'use client'; // Required for using hooks in the App Router

import { usePathname, useSearchParams } from 'next/navigation';
import QuoteForm from "./Quote";
import LocationPage from "./Content";
const NewLocation = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const fullUrl = `${pathname}?${searchParams.toString()}`;

    return (
        <>
            <QuoteForm />
            <LocationPage url={fullUrl} />
        </>
    );
};

export default NewLocation;