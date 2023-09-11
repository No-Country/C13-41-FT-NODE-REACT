"use strict";

const { Medic } = require('../models');

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

    medics.forEach((medic) => {
      links_url.forEach((link) => {
        const generatedLink = `${link}${medic.fullname}`;
        links.push({
          medicId: medic.id,
          link: generatedLink,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });
      
    return await queryInterface.bulkInsert("SocialNetworks", links);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("SocialNetworks", null, {});
  },
};
