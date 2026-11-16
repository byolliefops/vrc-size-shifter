import packageJson from "./package.json";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  compile: {
    target: "bun-windows-x64",
    outfile: `./dist/VRCSizeShifter_v${packageJson.version}`,
  },
});

await Bun.build({
  entrypoints: ["./src/index.ts"],
  compile: {
    target: "bun-linux-x64",
    outfile: `./dist/VRCSizeShifter_v${packageJson.version}_x64`,
  },
});

await Bun.build({
  entrypoints: ["./src/index.ts"],
  compile: {
    target: "bun-linux-arm64",
    outfile: `./dist/VRCSizeShifter_v${packageJson.version}_arm64`,
  },
});
