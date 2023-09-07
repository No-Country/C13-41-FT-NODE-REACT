"use strict";

const { Medic, Patient } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let links = [];

    const medics = await Medic.findAll();

    const links_url = [
      "https://www.facebook.com/",
      "https://www.linkedin.com/in/",
      "https://www.instagram.com/",
      "https://www.youtube.com/c/",
    ];

    const usedLinks = new Set();

    for (let i = 0; i < 120; i++) {
      const row = Math.floor(Math.random() * medics.length);
      const medic = medics[row];
      const medic_id = medic.id;

      for (let b = 0; b < 2; b++) {
        let link;
        let retries = 0;

        do {
          if (retries >= links_url.length) {
            break;
          }

          const randomLinkIndex = Math.floor(Math.random() * links_url.length);
          link = `${links_url[randomLinkIndex]}${medic.fullname}`;
          retries++;
        } while (usedLinks.has(link));

        usedLinks.add(link);

        links.push({
          medicId: medic_id,
          link: link,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    return await queryInterface.bulkInsert("SocialNetworks", links);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("SocialNetworks", null, {});
  },
};
