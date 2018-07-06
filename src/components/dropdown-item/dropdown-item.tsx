import {Component, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'neos-dropdown-item',
  styleUrl: 'styles/dropdown-item.dark.scss',
  shadow: true
})
export class DropdownItem {
  @Event() neosItemSelected: EventEmitter<string>;

  @Prop() label: string;
  @Prop() icon: string;
  @Prop() iconType: string = 'solid';

  neosItemSelectedHandler(e) {
    e.preventDefault();
    this.neosItemSelected.emit(this.label);
  }

  render() {
    return (
      <a href="#" class="item" onClick={(e) => this.neosItemSelectedHandler(e)}>
        <div class="icon">
          { this.icon ? <neos-icon name={this.icon} type={this.iconType}/> : null }
        </div>
        <div class="selected-label">{this.label}</div>
      </a>
    );
  }
}
