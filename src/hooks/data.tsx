'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function useStoreData(): any | null {
    const searchParams = useSearchParams();

    const [storeData, setStoreData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const storeName = searchParams.get('storeName');
            if (typeof storeName === 'string') {
                try {
                    const response = await fetch(`https://devapi.plazasoftware.com.co:8100/api/CustomerPortal/Configuration?StoreName=${encodeURIComponent(storeName)}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }

                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        throw new Error('Response is not in JSON format');
                    }

                    const data = await response.json();
                    setStoreData(data);
                } catch (error) {
                    console.error('Error fetching store data:', error);
                }
            }
        };

        fetchData();
    }, [searchParams]);

    console.log('storeData', storeData);

    return storeData;
}
