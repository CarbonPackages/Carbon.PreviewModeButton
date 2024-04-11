import manifest from "@neos-project/neos-ui-extensibility";
import { connect } from "react-redux";
import { actions, selectors } from "@neos-project/neos-ui-redux-store";
import makeButton from "./makeButton";

const connector = connect(
    (state) => {
        return {
            documentNode: selectors.CR.Nodes.documentNodeSelector(state),
            editPreviewMode: selectors.UI.EditPreviewMode.currentEditPreviewMode(state),
        };
    },
    {
        setEditPreviewMode: actions.UI.EditPreviewMode.set,
    },
);

manifest("Carbon.PreviewMode:Button", {}, (globalRegistry, { frontendConfiguration }) => {
    const configurations = frontendConfiguration["Carbon.PreviewMode:Button"];

    if (!configurations || typeof configurations !== "object") {
        return;
    }
    const containerRegistry = globalRegistry.get("containers");
    const i18nRegistry = globalRegistry.get("i18n");
    const nodeTypesRegistry = globalRegistry.get("@neos-project/neos-ui-contentrepository");
    const fallbackNodeTypeName = "Neos.Neos:Document";

    for (const viewEditModeName in configurations) {
        let settings = configurations[viewEditModeName];
        if (settings === true) {
            settings = {
                nodeTypeName: fallbackNodeTypeName,
            };
        }
        if (!settings?.nodeTypeName) {
            settings.nodeTypeName = fallbackNodeTypeName;
        }
        const position = settings?.position || "start";
        const Button = makeButton({ viewEditModeName, settings, i18nRegistry, nodeTypesRegistry });
        containerRegistry.set(`SecondaryToolbar/Right/${viewEditModeName}`, connector(Button), position);
    }
});
