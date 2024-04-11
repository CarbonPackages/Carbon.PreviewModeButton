import React, { useEffect, useState } from "react";
import { IconButton } from "@neos-project/react-ui-components";

export default function makeButton({ viewEditModeName, settings, i18nRegistry, nodeTypesRegistry }) {
    return function Button({ documentNode, editPreviewMode, setEditPreviewMode }) {
        const [shouldRender, setShouldRender] = useState(false);
        const icon = settings?.icon || "fas fa-pencil";
        const label = settings?.label || null;
        const nodeTypeName = settings.nodeTypeName;
        const registry = nodeTypesRegistry?._registry;
        const documentNodeType = documentNode.nodeType;

        useEffect(() => {
            // nodeTypesRegistry.isOfType(documentNode.nodeType, nodeTypeName) doesn't return superTypes
            // so we need to implement our own function to check if the node has the mixin
            setShouldRender(hasMixin({ documentNodeType, nodeTypeName, registry }));

            // this will cause the current page to reload, but it's a protection
            // mechanism prevent this mode to be activated on page that has not this node type
            if (shouldRender === false && editPreviewMode === viewEditModeName) {
                setEditPreviewMode("inPlace");
            }
        }, [documentNode]);

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
    };
}

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
