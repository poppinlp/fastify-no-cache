import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

test.cb('default option', t => {
	const { app } = t.context;

	t.plan(6);
	app.register(plugin);

	app.inject(
		{
			method: 'GET',
			url: `/`
		},
		(err, res) => {
			t.is(err, null, 'should throw no error');
			t.is(res.payload, 'hello world', 'should have expected response payload');
			t.is(res.headers['surrogate-control'], 'no-store', 'should have expected response header surrogate-control');
			t.is(res.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate', 'should have expected response header cache-control');
			t.is(res.headers.pragma, 'no-cache', 'should have expected response header pragma');
			t.is(res.headers.expires, '0', 'should have expected response header expiresj');
			t.end();
		}
	);
});
