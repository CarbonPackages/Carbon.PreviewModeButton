import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };

const watch = process.argv.includes("--watch");
const dev = process.argv.includes("--dev");
const minify = !dev && !watch;

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minifyWhitespace: minify,
    minifySyntax: minify,
    sourcemap: !minify,
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

if (watch) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
