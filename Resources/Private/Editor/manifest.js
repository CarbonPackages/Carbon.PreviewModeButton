import manifest from "@neos-project/neos-ui-extensibility";
import Editor from "./Editor";

manifest("Carbon.PreviewMode:Button", {}, (globalRegistry) => {
    const containerRegistry = globalRegistry.get("containers");
    containerRegistry.set("SecondaryToolbar/Right/SideMenuViewToggleButton", Editor, "start");
});
