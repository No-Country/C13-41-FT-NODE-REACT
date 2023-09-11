"use strict";
const { Medic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const medics = await Medic.findAll()

    let schedules = []
    const hours = [
      '0:00', '1:00', '2:00',
      '3:00', '4:00', '5:00',
      '6:00', '7:00', '8:00',
      '9:00', '10:00', '11:00',
      '12:00', '13:00', '14:00',
      '15:00', '16:00', '17:00',
      '18:00', '19:00', '20:00',
      '21:00', '22:00', '23:00'
    ]
    const duration = [15, 30, 45, 60]
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    function getRandomInt(min, max) {
      // Función para generar un número entero aleatorio entre min (incluido) y max (excluido)
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const getTwoItems = (arr) => {

      const randomIndex = getRandomInt(0, arr.length);
      let maxItem = arr[0];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxItem) {
          maxItem = arr[i];
        }
      }

      // Asegurarse de que el índice aleatorio sea diferente del índice del elemento más grande
      const secondMaxItem = maxItem !== arr[randomIndex] ? maxItem : arr[0];

      return [arr[randomIndex], secondMaxItem];
    }


    for (let i = 0; i < medics.length; i++) {
      for (let j = 0; j < 2; j++) {
        const aux = getTwoItems(hours)
        schedules.push({
          day: days[Math.floor(Math.random() * days.length)],
          initialHour: aux[0],
          finalHour: aux[1],
          status: true,
          duration: duration[Math.floor(Math.random() * duration.length)],
          medicId: medics[i].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }

    return await queryInterface.bulkInsert("Schedules", schedules);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Schedules", null, {});
  },
};
