import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" assert { type: "json" };

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minifyWhitespace: true,
    minifySyntax: true,
    sourcemap: true,
    target: "es2020",
    format: "esm",
    splitting: true,
    legalComments: "none",
    entryPoints: {
        Plugin: "Resources/Private/Editor/manifest.js",
    },
    loader: {
        ".js": "tsx",
    },
    outdir: "Resources/Public",
    alias: extensibilityMap,
};

if (process.argv.includes("--watch")) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
