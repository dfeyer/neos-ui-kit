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

  renderInput() {
    return (<input
      placeholder={this.placeholder}
      type="text"
      value={this.value}
    />)
  }

  renderInputWithLabel() {
    return (
      <label>
        <neos-label label={this.label}></neos-label>
        {this.renderInput()}
      </label>
    );
  }

  render() {
    return this.label ? this.renderInputWithLabel() : this.renderInput();
  }
}
