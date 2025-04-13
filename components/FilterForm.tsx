"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";
import SubmitButton from "./SubmitButton";
import { Button } from "./ui/button";
interface FilterFormProps {
  currentBetType?: string;
  isLoading?: boolean;
}

export const FilterForm = ({ currentBetType, isLoading }: FilterFormProps) => {
  const router = useRouter();
  const [betType, setBetType] = useState(currentBetType || "Deporte");

  const handleFilter = () => {
    const query = new URLSearchParams();
    query.set("betType", betType); // Actualiza el filtro de tipo de apuesta
    query.set("page", "1"); // Reinicia la paginación al cambiar el filtro
    router.push(`?${query.toString()}`);
  };

  return (
    <div className="filter-form w-full  self-baseline -mb-5!">
      <div className="max-w-[500px] w-full flex  gap-4">
       
        <Select
          value={betType}
          onValueChange={(e) => setBetType(e)}
          defaultValue={"Deporte"}
        >
          <SelectTrigger className="shad-select-trigger ">
            <SelectValue placeholder="Tipo de Apuesta" />
          </SelectTrigger>
          <SelectContent className="shad-select-content">
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="Deporte">Deporte</SelectItem>
            <SelectItem value="Casino">Casino</SelectItem>
            <SelectItem value="Virtual">Virtual</SelectItem>
          </SelectContent>
        </Select>
        <Button
          asChild
          type="button"
          onClick={handleFilter}
          disabled={isLoading}
          className={"shad-primary-btn w-full cursor-pointer"}
        >
          {isLoading ? (
            <div className="flex items-center gap-4 ">
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="animate-spin"
              />
              Cargando...
            </div>
          ) : (
            <h1>Filtrar</h1>
          )}
        </Button>
      </div>
    </div>
  );
};
