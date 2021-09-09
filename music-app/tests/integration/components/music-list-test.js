import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | music-list', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders 10 albums', async function(assert) {
    this.set('albums', this.server.createList('album', 10));

    await render(hbs`<MusicList @model={{this.albums}}/>`);

    let listItems = findAll('[data-test=music-list-item]');

    assert.equal(listItems.length, 10, '10 albums are rendered');
  });
});
