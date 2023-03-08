import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Button from "./Button";
import { Widget } from "./Widget";


type ConstructProperties = Pick<Header, "text">;

@subclass("mu.Header")
class Header extends Widget<ConstructProperties> {

    @property()
    text: string | undefined;

    render() {
        return <div id="header">
            <div id="headerLeft" class="headerPart">
                <Button
                    text="+ Tools"
                    domId="tools"
                />
                <Button
                    text="Workspaces"
                    domId="workspaces"
                />
            </div>
            <div id="headerCenter" class="headerPart">
                <div id="languages" class="headerPart">
                    <Button
                        text="UA"
                        domId="ua"
                    />
                    <Button
                        text="EN"
                        domId="en"
                    />
                    <Button
                        text="RU"
                        domId="ru"
                    />
                    <Button
                        text="CN"
                        domId="cn"
                    />
                </div>
                <Button
                    text="Mapping Ukraine"
                    domId="title"
                />
                <div id="functions" class="headerPart">
                    <Button
                        text="Login"
                        domId="login"
                    />
                    <Button
                        text="Help"
                        domId="help"
                    />
                    <Button
                        text="Download"
                        domId="download"
                    />
                </div>
            </div>
            <div id="headerRight" class="headerPart">
                <Button
                    text="2D/3D"
                    domId="dimensions"
                />
                <Button
                    text="+ Layers"
                    domId="layers"
                />
            </div>
        </div>;
    }
}

export default Header;
