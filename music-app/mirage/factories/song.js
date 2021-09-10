import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.lorem.words();
  },

  lyrics() {
    return faker.lorem.paragraphs();
  },

  afterCreate(song, server) {
    server.create('genre', { name: faker.animal.dog(), song });
    server.createList('artist', Math.floor(Math.random() * 3) + 1, { song });
  }
});
