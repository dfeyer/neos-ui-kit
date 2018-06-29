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
      <a href="#" class="dropdown-item" onClick={(e) => this.neosItemSelectedHandler(e)}>
        { this.icon ? <div class="icon">
          <neos-icon name={this.icon} type={this.iconType}/>
        </div> : null }
        <div class="selected-label">{this.label}</div>
      </a>
    );
  }
}
