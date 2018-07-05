import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-dropdown-header',
  styleUrl: 'styles/dropdown-header.dark.scss',
  shadow: true
})
export class Dropdown {

  @Prop() label: string;
  @Prop() selectedLabel: string;
  @Prop() placeholder: string = 'Select a value...';
  @Prop() open: boolean = false;
  @Prop() hovered: boolean = false;

  chevronIcon() {
    return this.open ? 'chevron-up' : 'chevron-down';
  }

  chevronTheme() {
    return this.hovered ? 'brand' : 'transparent';
  }

  render() {
    return (
      <a href="#" class="dropdown">
        <div class="icon">
          <neos-icon name="file"/>
        </div>
        <div class="selected-label">{this.label}</div>
        <div class="toggle">
          <neos-button squared theme={this.chevronTheme()}>
            <neos-icon name={this.chevronIcon()} type="solid"></neos-icon>
          </neos-button>
        </div>
      </a>
    );
  }
}
