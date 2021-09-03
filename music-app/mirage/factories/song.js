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
    song.genre = server.create('genre', { name: 'House' });
  }
});
