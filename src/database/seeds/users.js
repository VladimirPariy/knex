/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const createRandomUser = require('../../faker/faker.js')

exports.seed = async (knex) => {
	await knex('users').del()
		.then(() => {
			let arr = []
			for (let i = 0; i < 20; i++) {
				arr.push(createRandomUser());
			}
			return knex('users').insert(arr);
		})
};
