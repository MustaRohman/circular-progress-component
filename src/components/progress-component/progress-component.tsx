import { Component, Prop } from "../../../node_modules/@stencil/core";

@Component({
    tag: 'progress-component',
    styleUrl: './progress-component.css',
    shadow: true
})
export class ProgresComponent {

    @Prop() message: string;

    render() {
        return (
            <div class="progress">
            </div>
        )
    }
}