'use client'
import { useStoreData } from '@/hooks/data'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import countries from '../../data/countriesPhoneCodes';
import colombiaMunicipios  from '../../data/colombiaMunicipiosDane';
import {useState} from "react";

interface Municipio {
    CODIGO_MUNICIPIO: string;
    NOMBRE_DEPARTAMENTO: string;
    NOMBRE_MUNICIPIO: string;
}

export default function FormNew() {
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>('');
    const [municipios, setMunicipios] = useState<Municipio[]>([]);

    const handleDepartamentoChange = (e: any) => {
        const departamento = e.target?.value;
        setSelectedDepartamento(departamento);

        // Filtrar los municipios por departamento seleccionado
        const municipiosFiltrados = colombiaMunicipios.filter(
            (municipio: any) => municipio.NOMBRE_DEPARTAMENTO === departamento
        );
        setMunicipios(municipiosFiltrados);
    };

    const data = useStoreData();

    console.log('colombiaMunicipios', colombiaMunicipios)

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
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="secondname">
                                Segundo nombre
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="secondname"
                                placeholder="Ingresa tu segundo nombre"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="first-lastname">
                                * Primer apellido
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="first-lastname"
                                placeholder="Ingresa tu primer apellido"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="second-lastname">
                                Segundo apellido
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="second-lastname"
                                placeholder="Ingresa tu segundo apellido"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="email">
                            * Correo electrónico
                        </Label>
                        <Input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="email"
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
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="phone-code">
                                * Selecciona tu país
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona tu país"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {countries.map(country => (
                                        <SelectItem key={country.iso2} value={country.iso2}>
                                            {country.nombre}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Celular
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                type={'number'}
                                placeholder="Ingresa tu celular"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Selecciona tu país
                            </Label>
                            <Input
                                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                                id="name"
                                placeholder="Selecciona tu país"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Selecciona tu departamento
                            </Label>
                            <Select  value={selectedDepartamento} onValueChange={handleDepartamentoChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona tu departamento"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from(new Set(colombiaMunicipios.map((municipio: any) => municipio.NOMBRE_DEPARTAMENTO))).map(
                                        (departamento: string, index: number) => (
                                            <SelectItem key={index} value={departamento}>
                                                {departamento}
                                            </SelectItem>
                                        )
                                    )}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
                                * Selecciona tu ciudad
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona tu ciudad"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {municipios.map((municipio: any, index: number) => (
                                        <SelectItem key={index} value={municipio.NOMBRE_MUNICIPIO}>
                                            {municipio.NOMBRE_MUNICIPIO}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
                        <label className="text-gray-600 dark:text-gray-400 required" htmlFor="dane">
                            * Código DANE
                        </label>
                        <input
                            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                            id="dane"
                            readOnly
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
