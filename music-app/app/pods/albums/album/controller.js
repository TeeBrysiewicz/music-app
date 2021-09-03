import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AlbumController extends Controller {
  @tracked selectedSong;
  @tracked isAddingSong = true;
  @tracked newSongName;
  @tracked newSongLyrics;

  @action
  selectSong(song) {
    this.selectedSong = song;
  }

  @action
  async saveSong(e) {
    e.preventDefault();

    let newSong = this.store.createRecord('song', {
      name: this.newSongName,
      lyrics: this.newSongLyrics,
      album: this.model
    });

    let songs = await this.model.songs;
    songs.pushObject(newSong);
    await newSong.save().then(() => {
      this.model.save();
    });

    this.newSongName = '';
    this.newSongLyrics = '';
    this.isAddingSong = false;
  }
}
