'use client';
import { Container } from '@mui/material';
import fakeConsultations from './fakeConsultationData';
import { useAuth } from '@/contexts/Auth.context';
import NearbyDoctorsSection from './NearbyDoctorsSection';
import ServicesSection from './ServicesSection';
import Greetings from './Greetings';
import UpcomingAppointments from './UpcomingAppointments';
const UserHomePage = () => {
	const { userData } = useAuth();
	function compareConsultationDates(a, b) {
		const dateA = new Date(a.consultTimestamp);
		const dateB = new Date(b.consultTimestamp);
		return dateA - dateB;
	}

	fakeConsultations.sort(compareConsultationDates);

	return (
		<Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 4, paddingY: 4 }}>
			<Greetings userData={userData} />
			<UpcomingAppointments userData={userData} />
			<ServicesSection />
			<NearbyDoctorsSection userData={userData} />
		</Container>
	);
};

export default UserHomePage;
