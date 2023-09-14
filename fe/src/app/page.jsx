'use client';
import Landing from '../../Components/Landing/Landing';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Loader from '../../Components/Loader/Loader';
import { useEffect, useState } from 'react';
const HomePage = () => {
	// const router = useRouter();
	// const pathname = usePathname()
  // const searchParams = useSearchParams()
	// const url = `${pathname}${searchParams}`
	// const [loading, setLoading] = useState(true)
  // // Escucha cambios de ruta
  // useEffect(() => {
  //     if (url === '/result=success') {
  //       // Manejar la lógica para mostrar la página de pago exitoso
  //       router.push('/payment-success'); // Redirigir a una página específica de éxito
  //     }
			
	// 			setLoading(false)
    
  // }, []);
	return (
		// <>
		// {loading ? (
		// 	<Loader/>
		// ):(

		<Landing />
		// )}
		// </>
	);
};

export default HomePage;
