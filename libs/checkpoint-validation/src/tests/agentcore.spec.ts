import { it } from "vitest";
import initializer from "./agentcore_initializer.js";
import { specTest } from "../spec/index.js";
import { isSkippedCIEnvironment } from "./utils.js";

if (isSkippedCIEnvironment()) {
  it.skip(`${initializer.checkpointerName} skipped in CI because no Amazon Bedrock AgentCore Memory is available`, () => {});
} else {
  specTest(initializer);
}
