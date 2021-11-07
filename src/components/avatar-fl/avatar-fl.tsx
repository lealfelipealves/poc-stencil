import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'avatar-fl',
  styleUrl: 'avatar-fl.css',
  shadow: true,
})
export class AvatarFl {

  @Prop() nome: string;

  render() {
    return (
      <div class={`felipe`}>
        <h1>{this.nome}</h1>
      </div>
    );
  }

}
