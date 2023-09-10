"use strict";

const { Medic, Patient } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let comments = []

    const medics = await Medic.findAll()
    const patients = await Patient.findAll()
    
    const commentsBody = [
      "provided exceptional care. I'm grateful for the expertise and compassion.",
      "was outstanding. The treatment exceeded my expectations.",
      "is simply remarkable. The pain relief and recovery have been life-changing.",
      "made my child's visit a breeze with her patience and care.",
      "is a true professional. The surgery was a success, and my vision has never been better.",
      "is an expert. Thanks to his guidance, I'm managing my condition with confidence.",
      "provided fantastic care. I felt comfortable discussing my health concerns.",
      "was exceptional in making me breathe better than ever after the procedure.",
      "is top-notch. My smile has been transformed, and the experience was painless.",
      "demonstrated truly outstanding dedication to her patients. Her care is commendable.",
      "provided a high level of care. I felt comfortable discussing sensitive issues.",
      "was life-changing with her therapy, helping me regain my mental health.",
      "care was exceptional, leaving my skin looking better than ever.",
      "is a true professional whose expertise saved my life.",
      "care was top-notch, significantly improving my child's health under her guidance.",
      "a skilled surgeon, ensured my eye surgery was a complete success.",
      "provided outstanding care. I'm back on my feet and pain-free.",
      "provided excellent care with thoroughness and attention to detail.",
      "work was fantastic, resulting in a healthy and beautiful smile.",
      "is a lifesaver whose prompt action during an emergency made all the difference.",
      "is caring and knowledgeable, ensuring a safe pregnancy.",
      "care was transformative, leading to a happier and healthier life.",
      "resolved my chronic ear issues with exceptional treatment.",
      "is a true gem, demonstrating compassion and expertise in patient care.",
      "improved my condition, giving me better control.",
      "significantly improved my lung function.",
      "got me back to an active lifestyle with no pain.",
      "care was excellent, with preventive advice improving my heart health.",
      "provided expertise and care for a manageable situation."
    ];
    
    
    for (let i = 0; i < 120; i++) {

      const row = Math.floor(Math.random() * medics.length);
      const medic = medics[row];

      for (let b = 0; b < 2; b++)
      {
        comments.push({
          medicId: medic.id,
          patientId: patients[Math.floor(Math.random() * patients.length)].id,
          description: medic.fullname + ' ' + commentsBody[Math.floor(Math.random() * commentsBody.length)],
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }
    return await queryInterface.bulkInsert("Comments", comments);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Comments", null, {});
  },
};
