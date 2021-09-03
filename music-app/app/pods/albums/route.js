import Route from '@ember/routing/route';

export default class AlbumRoute extends Route {
  model() {
    return this.store.findAll('album');
  }
}
