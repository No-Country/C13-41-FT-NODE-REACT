"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let specialties= []
    const specialtiesName = [
      'General Medicine',
      'Pediatrics',
      'Surgery',
      'Obstetrics and Gynecology',
      'Orthopedic Surgery',
      'Anesthesiology',
      'Radiology',
      'Emergency Medicine',
      'Psychiatry',
      'Neurology',
      'Dermatology',
      'Ophthalmology',
      'Internal Medicine',
      'Cardiology',
      'Gastroenterology',
      'Pulmonology',
      'Endocrinology',
      'Nephrology',
      'Urology',
      'Otolaryngology']
    for (let i = 0; i < 20; i++) {
      specialties.push({
        name: specialtiesName[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert("Specialties", specialties);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Specialties", null, {});
  },
};
