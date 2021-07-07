import { Knex } from 'knex'

exports.up = async (knex: Knex) => {
  const createIdAndTimestamps = (table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary()
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now())
    table.dateTime('deletedAt').index()
  }

  await knex.schema.createTable('phones', table => {
    createIdAndTimestamps(table);

    table.string('name').notNullable().index().unique();
    table.string('manufacturer').notNullable().index();
    table.string('description').nullable();
    table.string('color').notNullable();
    table.integer('price').notNullable().unsigned().defaultTo(199);
    table.string('imageFileName').nullable();
    table.string('screen').notNullable();
    table.string('processor').notNullable();
    table.integer('ram').notNullable().unsigned().defaultTo(2);
  })

};

exports.down = async (knex: Knex) => knex.schema.dropTableIfExists('phones');
