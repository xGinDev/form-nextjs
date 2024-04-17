import Image from "next/image";

export default function Img() {
    return (
        <div className={'hidden xl:flex'}>
            <Image src={`https://dummyimage.com/600x600`} width={600} height={600} alt={'Home'}/>
        </div>
    )
}