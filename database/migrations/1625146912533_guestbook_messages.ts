import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GuestbookMessages extends BaseSchema {
  protected tableName = 'guestbook_messages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      table.string('message')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
