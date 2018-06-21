import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-form-input',
  styleUrl: 'form-input.css',
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
        {this.label}
        {this.renderInput()}
      </label>
    );
  }
  
  render() {
    return this.label ? this.renderInputWithLabel() : this.renderInput();
  }
}
