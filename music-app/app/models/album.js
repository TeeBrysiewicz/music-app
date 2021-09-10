import Model, { attr, hasMany } from '@ember-data/model';

export default class AlbumModel extends Model {
  @hasMany('song') songs;
  @attr('string') name;
}
