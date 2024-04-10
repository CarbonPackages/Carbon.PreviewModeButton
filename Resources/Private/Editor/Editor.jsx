import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { neos } from "@neos-project/neos-ui-decorators";
import { actions, selectors } from "@neos-project/neos-ui-redux-store";
import { IconButton } from "@neos-project/react-ui-components";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    nodeTypesRegistry: globalRegistry.get("@neos-project/neos-ui-contentrepository"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.PreviewMode:Button"),
}));

function MultipleToggleButtons(props) {
    const registry = props?.nodeTypesRegistry?._registry;
    const documentNodeType = props?.documentNode.nodeType;
    const config = props?.config;
    console.log("config", config);
    if (!registry || !documentNodeType || !config) {
        return null;
    }

    return Object.entries(config).map(([key, settings]) => (
        <SingleToggleButton
            documentNodeType={documentNodeType}
            registry={registry}
            props={props}
            viewEditModeName={key}
            settings={settings}
        />
    ));
}

function SingleToggleButton({ documentNodeType, registry, props, viewEditModeName, settings }) {
    const nodeTypeName = settings?.nodeTypeName;
    if (!nodeTypeName) {
        return null;
    }
    const [shouldRender, setShouldRender] = useState(false);
    const icon = settings?.icon || "fas fa-pencil";
    const label = settings?.label || null;
    const { editPreviewMode, setEditPreviewMode, i18nRegistry } = props;

    useEffect(() => {
        // nodeTypesRegistry.isOfType(documentNode.nodeType, nodeTypeName) doesn't return superTypes
        // so we need to implement our own function to check if the node has the mixin
        setShouldRender(hasMixin({ documentNodeType, nodeTypeName, registry }));

        // this will cause the current page to reload, but it's a protection
        // mechanism prevent this mode to be activated on page that has not this node type
        if (shouldRender === false && editPreviewMode === viewEditModeName) {
            setEditPreviewMode("inPlace");
        }
    }, [props]);

    if (!shouldRender) {
        return null;
    }

    const title = label ? i18nRegistry.translate(label) : null;

    return (
        <IconButton
            icon={icon}
            isPressed={editPreviewMode === viewEditModeName}
            aria-label={title}
            title={title}
            onClick={() => {
                setEditPreviewMode(editPreviewMode === viewEditModeName ? "inPlace" : viewEditModeName);
            }}
        />
    );
}

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

function hasMixin({ documentNodeType, nodeTypeName, registry }) {
    if (documentNodeType === nodeTypeName) {
        return true;
    }
    for (const item of registry) {
        if (item.key !== documentNodeType) {
            continue;
        }
        const superTypes = item?.value?.superTypes;
        if (!superTypes) {
            return false;
        }
        for (const key in superTypes) {
            if (key == nodeTypeName) {
                return superTypes[key];
            }
        }
        return false;
    }
    return false;
}

export default neosifier(connector(MultipleToggleButtons));
