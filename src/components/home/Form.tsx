/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0EyGBV5aW7U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectGroup,
    SelectContent,
    Select
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image";
import { useStoreData } from '@/hooks/data'

export default function Form() {

    const data = useStoreData()

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div key="1" className="border-1 dark:border-gray-300 p-8 rounded-md shadow-md space-y-8 relative">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Creación de cliente {data?.portalTittle}</h2>
            </div>
            <form action="" className={'flex flex-col justify-between'}>
                <div className="space-y-4">
                    <div className="flex justify-center items-center">
                        <RadioGroup defaultValue="comfortable" className={'flex'}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1"/>
                                <Label htmlFor="r1">Persona Natural</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2"/>
                                <Label htmlFor="r2">Persona Juridica</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Tipo de documento
                        </Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona tu tipo de documento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Cédula de ciudadanía">Cédula de ciudadanía</SelectItem>
                                    <SelectItem value="Cedula de extranjería">Cedula de extranjería</SelectItem>
                                    <SelectItem value="NIT">NIT</SelectItem>
                                    <SelectItem value="Tarjeta de extranjería">Tarjeta de extranjería</SelectItem>
                                    <SelectItem value="Registro Civil">Registro Civil</SelectItem>
                                    <SelectItem value="Tarjeta de identidad">Tarjeta de identidad</SelectItem>
                                    <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                                    <SelectItem value="Documento de identificación extranjero">Documento de identificación extranjero</SelectItem>
                                    <SelectItem value="Nit de otro país">Nit de otro país</SelectItem>
                                    <SelectItem value="NUIP">NUIP</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Número de documento
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="name"
                            placeholder="Ingresa tu número de documento"
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox className="text-gray-600 dark:text-gray-400" id="agreement" required/>
                        <Label className="text-sm font-normal text-gray-600 dark:text-gray-400" htmlFor="agreement">
                            Autorizo el tratamiento de mis datos personales registrados en este portal con las siguientes
                            <a href={data?.dataProtectionPolicy} target={'_blank'} className="underline underline-offset-2 text-gray-600 dark:text-gray-400">
                                {' '} condiciones
                            </a>
                        </Label>
                    </div>
                    <Button className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:text-white" type="submit">
                        Contiuar
                    </Button>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <p>ID Sitio: {data?.idSite}</p>
                        <p>ID Canal: {data?.idChannel}</p>
                    </div>
                    <div className="">
                        <Image src={'https://dummyimage.com/30x30'} width={30} height={30} alt={'Country'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}