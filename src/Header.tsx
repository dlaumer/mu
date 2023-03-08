import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Button from "./Button";
import State from "./State";
import { Widget } from "./Widget";


type ConstructProperties = Pick<Header, "text" | "state">;

@subclass("mu.Header")
class Header extends Widget<ConstructProperties> {

    @property()
    text: string | undefined;

    @property()
    state: State | undefined;

    render() {
        return <div id="header">
            <div id="headerLeft" class="headerPart">
                <Button
                    domId="tools"
                    state={this.state}
                />
                <Button
                    domId="workspaces"
                    state={this.state}
                />
            </div>
            <div id="headerCenter" class="headerPart">
                <div id="languages" class="headerPart">
                    <Button
                        domId="ua"
                        state={this.state}

                    />
                    <Button
                        domId="en"
                        state={this.state}

                    />
                    <Button
                        domId="ru"
                        state={this.state}

                    />

                </div>
                <Button
                    domId="title"
                    state={this.state}

                />
                <div id="functions" class="headerPart">
                    <Button
                        domId="login"
                        state={this.state}

                    />
                    <Button
                        domId="help"
                        state={this.state}

                    />
                    <Button
                        domId="download"
                        state={this.state}

                    />
                </div>
            </div>
            <div id="headerRight" class="headerPart">
                <Button
                    domId="dimensions"
                    state={this.state}

                />
                <Button
                    domId="layers"
                    state={this.state}

                />
            </div>
        </div>;
    }
}

export default Header;
