const getDoctorSchedule = async (doctorId) => {
  try {
    const response = await fetch(`http://localhost:3005/api/v1/schedule?medicId=${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`,
    }      
  });
  const data = await response.json();
  const schedules = data.data?.schedulesFound;
  return schedules
} catch (error) {
  console.log(error);
}
}

export default getDoctorSchedule