'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import dataDummy from '@/components/data/data';

export function useStoreData(): any | null {
    const searchParams = useSearchParams()

    const [storeData, setStoreData] = useState<any>(null);

    useEffect(() => {
        const storeName = searchParams.get('storeName');
        if (typeof storeName === 'string') {
            const filteredData = dataDummy.find((item: any) => item.portalTittle === storeName);
            setStoreData(filteredData);
        }
    }, [searchParams]);

    return storeData;
}
