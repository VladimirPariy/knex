// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

	development: {
		client: 'mysql2',
		connection: {
			host: '127.0.0.1',
			user: 'test-user',
			password: 'password',
			database: 'users',
			charset: 'utf8'
		}
	},
	staging: {},
	production: {}
};
