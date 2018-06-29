import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-form-input-label',
  styleUrl: 'styles/form-input-label.dark.scss',
  shadow: true
})
export class FormInputLabel {

  @Prop() label: string;

  render() {
    return (
      <div class="label">
        <neos-label label={this.label}></neos-label>
        <div class="metadata">
          <slot/>
        </div>
      </div>
    );
  }
}
