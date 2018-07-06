import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test('default option', async t => {
	const rsp = await fastify()
		.get('/', (request, reply) => {
			reply.send('hello world');
		})
		.register(plugin)
		.inject({
			method: 'get',
			url: '/'
		});

	t.is(rsp.payload, 'hello world', 'should have expected response payload');
	t.is(rsp.headers['surrogate-control'], 'no-store', 'should have expected response header surrogate-control');
	t.is(rsp.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate', 'should have expected response header cache-control');
	t.is(rsp.headers.pragma, 'no-cache', 'should have expected response header pragma');
	t.is(rsp.headers.expires, '0', 'should have expected response header expiresj');
});
