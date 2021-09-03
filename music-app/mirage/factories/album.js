import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.animal.cat();
  },

  afterCreate(album, server) {
    server.createList('song', Math.floor(Math.random() * 6) + 1, { album });
  }
});
