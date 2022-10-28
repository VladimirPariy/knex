/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
	return knex.schema
		.createTable('users', (table) => {
			table.increments('_id');
			table.string('firstname', 30).notNullable();
			table.string('lastName', 30).notNullable();
			table.string('email', 100).notNullable();
			table.string('avatar', 255);
			table.date('birthday');
			table.string('sex', 10);
			table.string('subscriptionTier', 30);
		});
};




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
	knex.schema.dropTable('users')
};
