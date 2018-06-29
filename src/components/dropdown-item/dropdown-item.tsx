import {Component, Prop, Event} from '@stencil/core';

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

  neosItemSelectedHandler() {
    this.neosItemSelected.emit(this.label);
  }

  render() {
    return (
      <a href="#" class="dropdown-item" onClick={() => this.neosItemSelectedHandler()}>
        { this.icon ? <div class="icon">
          <neos-icon name={this.icon} type={this.iconType}/>
        </div> : null }
        <div class="selected-label">{this.label}</div>
      </a>
    );
  }
}
