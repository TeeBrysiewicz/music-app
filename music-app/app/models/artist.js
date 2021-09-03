import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @hasMany('song') songs;
  @attr('string') name;
}
