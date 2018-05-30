const fp = require('fastify-plugin');

const noCache = (app, opts = {}, next) => {
	reply.header('Surrogate-Control', 'no-store');
	reply.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
	reply.header('Pragma', 'no-cache');
	reply.header('Expires', '0');

	next();
};

module.exports = fp(noCache, {
	fastify: '^1.0.0',
	name: 'fastify-no-cache'
});
