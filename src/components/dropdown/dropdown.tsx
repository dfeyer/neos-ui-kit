import {Component, Prop, State, Listen} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-dropdown',
  styleUrl: 'styles/dropdown.dark.scss',
  shadow: true
})
export class Dropdown {

  @Prop() label: string;
  @Prop() selectedLabel: string;
  @Prop() placeholder: string = 'Select a value...';

  @State() isOpen: boolean = false;
  @State() activeLabel: string;

  @Listen('neosItemSelected')
  neosItemSelectedHandler(event: CustomEvent) {
    this.activeLabel = event.detail;
    this.isOpen = false;
  }

  componentWillLoad() {
    this.activeLabel = this.selectedLabel;
  }

  toggle(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  wrapperClassName() {
    return classnames('dropdown-wrapper', {'dropdown-wrapper--open': this.isOpen});
  }

  render() {
    return (
      <div>
        <neos-form-input-wrapper label={this.label}>
          <slot name="metadata"/>
        </neos-form-input-wrapper>
        <div class={this.wrapperClassName()}>
          <a href="#" class="dropdown" onClick={(e) => this.toggle(e)}>
            <div class="icon">
              <neos-icon name="file"/>
            </div>
            <div class="selected-label">{this.activeLabel ? this.activeLabel : this.placeholder}</div>
            <div class="toggle">
              <neos-button squared theme="transparent">
                <neos-icon name="chevron-down" type="solid"></neos-icon>
              </neos-button>
            </div>
          </a>
          <div class="dropdown-list">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
