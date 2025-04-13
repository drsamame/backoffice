import { auth } from "@/auth";
const DashboardPage = async () => {
  const session = await auth();
  return (
    <>
      <section className="w-full space-y-4">
        <h1 className="header">Bienvenido 👋</h1>
        <p className="text-dark-700">
          Actualmente las funcionalidades de la aplicación son limitadas, pero
          estamos trabajando para mejorar la experiencia de usuario.
        </p>
      </section>
    </>
  );
};

export default DashboardPage;
