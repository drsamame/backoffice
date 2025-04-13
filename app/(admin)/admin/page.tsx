import { StatCard } from "@/components/StatCard";
import { getPaginatedAppointments } from "@/lib/actions/appointment.actions";
import { columnsAppoiment } from "@/components/table/columnsAppoiment";
import { DataTable } from "@/components/table/Datatable";
import { FilterForm } from "@/components/FilterForm";

export const revalidate = 0;

const AdminPage = async ({
  searchParams,
}: {
  searchParams: { page?: string; betType?: string };
}) => {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;

  const filters = {
    betType: searchParams.betType === "all" ? undefined : searchParams.betType,
  };

  const response = await getPaginatedAppointments(page, limit, filters);

  if (!response.success) {
    return <p>Error al cargar los datos.</p>;
  }

  const { data } = response;

  return (
    <>
      <section className="w-full space-y-4">
        <p className="text-dark-700">Consulta la información de la BD</p>
      </section>

      {data && (
        <>
          <section className="admin-stat">
            <StatCard
              type="appointments"
              count={data.scheduledCount}
              label="Citas Programada"
              icon={"/assets/icons/appointments.svg"}
            />
            <StatCard
              type="pending"
              count={data.pendingCount}
              label="Citas Pendientes"
              icon={"/assets/icons/pending.svg"}
            />
            <StatCard
              type="cancelled"
              count={data.cancelledCount}
              label="Citas Canceladas"
              icon={"/assets/icons/cancelled.svg"}
            />
          </section>
          <FilterForm currentBetType={filters.betType} />
          <DataTable
            columns={columnsAppoiment}
            data={data.appointments as Appointment[]}
            totalCount={data.totalCount}
            currentPage={data.page}
            totalPages={data.totalPages}
          />
        </>
      )}
    </>
  );
};

export default AdminPage;
