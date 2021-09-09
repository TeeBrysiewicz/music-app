import { module, test } from 'qunit';
import { visit, click, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Albums', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Landing page renders and shows a list of albums', async function(assert) {
    this.server.create('album', { name: 'album one'});

    await visit('/');
    assert.equal(currentURL(), '/albums');
    assert.dom('[data-test=music-list-item]').exists();
  });

  test('user can select an album and see the songs for that album along with the lyrics', async function(assert) {
    this.server.create('album', { name: 'album one', lyrics: 'album one lyrics' });

    await visit('/');
    assert.equal(currentURL(), '/albums');
    assert.dom('[data-test=music-list-item]').exists();

    await click('[data-test=album-1');
    assert.equal(currentURL(), '/albums/1');

    assert.dom('[data-test=song-1-button]').exists();
    await click('[data-test=song-1-button]');
    assert.dom('[data-test=song-1-name]').exists();
    assert.dom('[data-test=song-1-lyrics]').exists();
  });

  test('user can add a song to an album', async function(assert) {
    this.server.create('album', { name: 'album one'});

    await visit('/');
    assert.equal(currentURL(), '/albums');
    assert.dom('[data-test=music-list-item]').exists();

    await click('[data-test=album-1');
    assert.equal(currentURL(), '/albums/1');

    await click('[data-test=add-song-button]');
    await fillIn('[data-test=new-song-name-input]', 'new song name');
    await click('[data-test=save-new-song-button');
    assert.dom('[data-test=song-2-button]').exists();
  });

  test('user can edit a song name', async function(assert) {
    this.server.create('album', { name: 'album one'});

    await visit('/');
    assert.equal(currentURL(), '/albums');
    assert.dom('[data-test=music-list-item]').exists();

    await click('[data-test=album-1');
    assert.equal(currentURL(), '/albums/1');

    await click('[data-test=song-1-button]');
    assert.dom('[data-test=edit-song-button]').exists();

    await click('[data-test=edit-song-button]');
    assert.dom('[data-test=song-name-input]').exists();

    await fillIn('[data-test=song-name-input]', 'edited song name');
    await click('[data-test=save-edit-song-button]');
    assert.dom('[data-test=song-1-name]').hasText('Song: edited song name');
  });
});
