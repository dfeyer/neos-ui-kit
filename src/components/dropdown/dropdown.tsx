import {Component, Event, EventEmitter, Method, Prop, State, Listen} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-dropdown',
  styleUrl: 'styles/dropdown.dark.scss',
  shadow: true
})
export class Dropdown {
  @Event() neosOpen: EventEmitter;
  @Event() neosClose: EventEmitter;

  @Prop() label: string;
  @Prop() selectedLabel: string;
  @Prop() placeholder: string = 'Select a value...';

  @State() isOpen: boolean = false;
  @State() isHovered: boolean = false;
  @State() activeLabel: string;

  neosOpenHandler() {
    this.neosOpen.emit();
  }

  neosCloseHandler() {
    this.neosClose.emit();
  }

  @Listen('neosItemSelected')
  neosItemSelectedHandler(event: CustomEvent) {
    this.activeLabel = event.detail;
  }

  @Listen('mouseenter')
  mouseEnterHandler() {
    this.isHovered = true;
  }

  @Listen('mouseleave')
  mouseLeaveHandler() {
    this.isHovered = false;
  }

  componentWillLoad() {
    this.activeLabel = this.selectedLabel;
  }

  toggle(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    this.handleVisibilityChange();
  }

  handleVisibilityChange() {
    if (this.isOpen) {
      this.neosOpenHandler();
      setTimeout(() => {
        document.addEventListener('click', () => this.clickOutsideHandler(this), {once: true});
      }, 200);
    } else {
      this.neosCloseHandler();
    }
  }

  clickOutsideHandler(component) {
    component.close();
  }

  @Method()
  close() {
    this.isOpen = false;
    this.isHovered = false;
    this.handleVisibilityChange();
  }

  @Method()
  open() {
    this.isOpen = true;
    this.handleVisibilityChange();
  }

  wrapperClassName() {
    return classnames('wrapper', {'wrapper--open': this.isOpen});
  }

  render() {
    return (
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
          <div class="list">
            <slot/>
          </div>
        </div>
        <slot name="after" slot="after"/>
      </neos-form-input-wrapper>
    );
  }
}
