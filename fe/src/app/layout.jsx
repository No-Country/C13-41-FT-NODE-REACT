import './globals.css';
import { Inter } from 'next/font/google';
import { FilterProvider } from '@/contexts/Filters.context';
import { AuthProvider } from '@/contexts/Auth.context';
import { AppoinmentProvider } from '@/contexts/Appoinment.context';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Box } from '@mui/material';
import { colors } from './colors';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'Klinika',
	description: 'La plataforma de telemedicina "Klinika" es un proyecto innovador que tiene como objetivo revolucionar la forma en que las personas acceden a servicios médicos de calidad desde la comodidad de sus hogares. En un mundo cada vez más digitalizado, "Klinika" se presenta como una solución integral que permite a los pacientes conectarse con médicos y profesionales de la salud de manera remota, eliminando las barreras geográficas y facilitando un acceso rápido y seguro a la atención médica.',
	creator: 'C13-41-FT-NODE-REACT',
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<FilterProvider>
				<AppoinmentProvider>
					<html lang='en' className={inter.className}>
						<body>
							<Header />
							<Box component={'main'} sx={{ backgroundColor: colors.background }}>
								{children}
							</Box>
							<Footer />
						</body>
					</html>
				</AppoinmentProvider>
			</FilterProvider>
		</AuthProvider>
	);
}