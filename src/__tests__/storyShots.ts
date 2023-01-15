import initStoryshots from "@storybook/addon-storyshots";
import { render } from "@testing-library/react";

const reactTestingLibrarySerializer = {
  //@ts-ignore
  // eslint-disable-next-line testing-library/no-node-access
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  //@ts-ignore
  test: (val) => val && val.hasOwnProperty("container"),
};

describe("Storybook snapshots", () => {
  initStoryshots({
    renderer: render,
    snapshotSerializers: [reactTestingLibrarySerializer],
  });
});
