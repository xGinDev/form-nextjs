'use client'
import Image from "next/image";
import logo from '../../../public/plaza-soft.png'
import { useStoreData } from '@/hooks/data'

const Header = () => {

    const dataDummy = useStoreData()

    return (
        <header className="flex justify-center items-center py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sticky top-0 bg-white z-[999]">
            {
                dataDummy ? (
                    <Image src={dataDummy?.logo} alt={dataDummy?.portalTittle} width={80} height={80} className={'object-cover'}/>
                ): (
                    <Image src={logo} alt="logo"/>
                )
            }
        </header>
    )
}

export default Header