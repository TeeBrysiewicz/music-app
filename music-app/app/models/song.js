import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SongModel extends Model {
  @hasMany('artist') artists;
  @belongsTo('album') album;
  @belongsTo('genre') genre;
  @attr('string') name;
  @attr('string') lyrics;
}
