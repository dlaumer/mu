import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { Widget } from "./Widget";


type ConstructProperties = Pick<Button, "text" | "domId">;

@subclass("mu.Button")
class Button extends Widget<ConstructProperties> {

    @property()
    text: string | undefined;

    @property()
    domId: string | undefined;

    render() {
        return <div id={this.domId} class="button">{this.text}
        </div>;
    }
}

export default Button;
