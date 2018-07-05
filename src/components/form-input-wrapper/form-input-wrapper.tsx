import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-form-input-wrapper',
  styleUrl: 'styles/form-input-wrapper.dark.scss',
  shadow: true
})
export class FormInputWrapper {

  @Prop() label: string;

  render() {
    return (
      <div class="label-wrapper">
        <div class="label">
          <neos-label label={this.label}></neos-label>
        </div>
        <div class="metadata">
          <slot name="metadata"/>
        </div>
        <div class="content">
          <slot name="before"/>
          <slot/>
          <slot name="after"/>
        </div>
      </div>
    );
  }
}
