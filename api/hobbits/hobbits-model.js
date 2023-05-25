const db = require('../../data/dbConfig.js');

module.exports = {
	insert,
	update,
	remove,
	getAll,
	getById,
};

function getAll() {
	return db('hobbits');
}

function getById(id) {
	return db('hobbits').where('id', id).first();
}

async function insert(hobbit) {
	return await db('hobbits')
		.insert(hobbit)
		.then(([id]) => {
			return db('hobbits').where('id', id).first();
		});
}
//eslint-disable-next-line
async function update(id, changes) {
	await db('hobbits').where({ id }).update(changes);
	return db('hobbits').where({ id }).first();
}
//eslint-disable-next-line
function remove(id) {
	return db('hobbits').where({ id }).delete();
}
