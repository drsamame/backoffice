/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
};


declare interface CreateUserParams {
	name: string;
	email: string;
	phone?: string;
	password: string;
	repeatpassword: string;
}

declare interface LoginUser {
	email: string;
	password: string;
}

declare interface User {
	id: string;
	name: string;
	email: string;
	cellphone: string | null;
	emailVerified: string | null;
	role: string;
}

declare type Appointment = {
	id: string;
	schedule: Date;
	status: Status;
	notes: string | null; // Notas de la cita
	betType: string | null; // Tipo de apuesta (Deporte, Casino, Virtual)
	amount: number | null; // Monto asociado a la cita
	location: string | null; // Ubicación de la cita
	outcome: string | null; // Resultado de la cita (Ganada, Perdida, Pendiente)
	updatedAt: Date; // Fecha de última actualización
};
