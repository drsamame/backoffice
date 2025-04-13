import Image from 'next/image';
// import LoginTabs from '@/components/LoginTabs';
import LoginForm from '@/components/forms/LoginForm';
export default function Home() {
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						alt="apuestatotal"
						src="/assets/images/full.png"
						height={1000}
						width={1000}
						className="mb-12 h-9 -m-4 w-fit"
					></Image>
					<section className="mb-12 space-y-4">
						<h1 className="header">¡Bienvenido! 👋</h1>
						<p className="text-dark-700">Ingresa tus credenciales</p>
					</section>
					{/* <LoginTabs /> */}
					<LoginForm />
					<div className="text-14-regular mt-20 flex justify-between">
						<p className="justify-items-end text-dark-600 xl:text-left">
							© 2025 Arquitectura - Apuesta Total®
						</p>
					</div>
				</div>
			</section>

			<Image
				src="/assets/images/onboarding-img.jpg"
				width={1000}
				height={1000}
				alt="patient"
				className="side-image max-w-[50%] h-[100vh]"
			/>
		</div>
	);
}
