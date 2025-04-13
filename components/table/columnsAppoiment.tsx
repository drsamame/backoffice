"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";

export const columnsAppoiment: ColumnDef<Appointment>[] = [
  {
    accessorKey: "id",
    header: "Usuario",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.id}</p>;
    },
  },
  {
    accessorKey: "schedule",
    header: "Cita",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-medium">
          {formatDateTime(appointment.schedule).dateOnly}
        </p>
      );
    },
  },
  {
    accessorKey: "notes",
    header: "Notas",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.notes}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Cantidad",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.amount}</p>;
    },
  },
  {
    accessorKey: "betType",
    header: "Tipo de apuesta",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.betType}</p>;
    },
  },
  {
    accessorKey: "location",
    header: "Ubicación",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.location}</p>;
    },
  },
  {
    accessorKey: "outcome",
    header: "Resultado",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium">{appointment.outcome}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
];
