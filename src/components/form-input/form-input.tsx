import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-form-input',
  styleUrl: 'styles/form-input.dark.scss',
  shadow: true
})
export class FormInput {

  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() label: string;
  @Prop() type: string = 'text';
  @Prop() disabled: boolean = false;

  renderInput() {
    return (<input
      placeholder={this.placeholder}
      type={this.type}
      disabled={this.disabled}
      value={this.value}
    />)
  }

  renderInputWithLabel() {
    return (
      <label>
        <div class="label">
          <neos-label label={this.label}></neos-label>
          <div class="metadata">
            <slot name="metadata" />
          </div>
        </div>
        <div class="input">
          <slot name="before"/>
          {this.renderInput()}
          <slot name="after"/>
        </div>
      </label>
    );
  }

  render() {
    return this.label ? this.renderInputWithLabel() : this.renderInput();
  }
}
