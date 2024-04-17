/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0EyGBV5aW7U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectGroup,
    SelectContent,
    Select,
    SelectLabel
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image";

export default function Form() {
    return (
        <div key="1" className="border-1 dark:border-gray-300 p-8 rounded-md shadow-md space-y-8 relative">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Creación de cliente PuraCarnes Hogar</h2>
            </div>
            <form action="">
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
                                    <SelectItem value="apple">Cédula de ciudadanía</SelectItem>
                                    <SelectItem value="banana">Cedula de extranjería</SelectItem>
                                    <SelectItem value="blueberry">NIT</SelectItem>
                                    <SelectItem value="grapes">Tarjeta de extranjería</SelectItem>
                                    <SelectItem value="pineapple">Registro Civil</SelectItem>
                                    <SelectItem value="pineapple">Tarjeta de identidad</SelectItem>
                                    <SelectItem value="pineapple">Pasaporte</SelectItem>
                                    <SelectItem value="pineapple">Documento de identificación extranjero</SelectItem>
                                    <SelectItem value="pineapple">Nit de otro país</SelectItem>
                                    <SelectItem value="pineapple">NUIP</SelectItem>
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
                            <a className="underline underline-offset-2 text-gray-600 dark:text-gray-400">
                                {' '} condiciones
                            </a>
                        </Label>
                    </div>
                    <Button className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:text-white" type="submit">
                        Contiuar
                    </Button>
                </div>
                <div className="flex justify-between items-center absolute bottom-4 w-[90%]">
                    <div className="flex flex-col">
                        <p>ID Sitio: 0</p>
                        <p>ID Canal: 1</p>
                    </div>
                    <div className="">
                        <Image src={'https://dummyimage.com/30x30'} width={30} height={30} alt={'Country'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}