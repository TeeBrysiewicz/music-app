import { module, test } from 'qunit';
import { visit, click, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Albums', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Landing page renders', async function(assert) {
    this.server.create('album', { name: 'album one'});

    await visit('/');
    assert.equal(currentURL(), '/albums');

    assert.dom('[data-test=music-list-item]').exists();
  });
});
