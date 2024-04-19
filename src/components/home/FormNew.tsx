import { useStoreData } from '@/hooks/data'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
export default function FormNew() {
    const data = useStoreData()

    return (
        <div>
            <form action="">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Primer nombre
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Ingresa tu primer nombre"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                Segundo nombre
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Ingresa tu segundo nombre"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Primer apellido
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Ingresa tu primer apellido"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                Segundo apellido
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Ingresa tu segundo apellido"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Correo electrónico
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="name"
                            type={'email'}
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Teléfono
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="name"
                            type={'number'}
                            placeholder="Ingresa tu teléfono"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Select Code Phone
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Select Code Phone"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Celular
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                type={'email'}
                                placeholder="Ingresa tu celular"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Select Country
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Select Country"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Select Department
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                type={'email'}
                                placeholder="Select Department"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Select City
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                type={'email'}
                                placeholder="Select City"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Dirección
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="name"
                            placeholder="Ingresa tu dirección"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                            * Código DANE
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="name"
                            required
                        />
                    </div>
                    <Button
                        className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:text-white"
                        type="submit">
                        Guardar
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