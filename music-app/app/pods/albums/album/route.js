import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('album', params.id, { include: 'songs,songs.artists,songs.genre' });
  }
});
