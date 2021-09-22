import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SongComponent extends Component {
  @tracked isEditing = false;

  @action
  async updateSong(e) {
    e.preventDefault();
    await this.model.save();
  }

  @action
  cancel(e) {
    e.preventDefault();
    this.model.rollbackAttributes();
    this.isEditing = !this.isEditing;
  }
}
