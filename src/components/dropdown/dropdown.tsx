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
  @State() isHovered: boolean = false;
  @State() activeLabel: string;

  @Listen('neosItemSelected')
  neosItemSelectedHandler(event: CustomEvent) {
    this.activeLabel = event.detail;
    this.isOpen = false;
    this.isHovered = false;
  }

  mouseEnterHandler() {
    this.isHovered = true;
  }

  mouseLeaveHandler() {
    this.isHovered = false;
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
      <div
        onMouseEnter={() => this.mouseEnterHandler()}
        onMouseLeave={() => this.mouseLeaveHandler()}
      >
        <neos-form-input-wrapper label={this.label}>
          <slot name="metadata" slot="metadata"/>
          <slot name="before" slot="before"/>
          <div class={this.wrapperClassName()}>
            <neos-dropdown-header
              label={this.activeLabel ? this.activeLabel : this.placeholder}
              open={this.isOpen}
              hovered={this.isHovered && this.isOpen === false}
              onClick={(e) => this.toggle(e)}
            ></neos-dropdown-header>
            <div class="dropdown-list">
              <slot/>
            </div>
          </div>
          <slot name="after" slot="after"/>
        </neos-form-input-wrapper>
      </div>
    );
  }
}
