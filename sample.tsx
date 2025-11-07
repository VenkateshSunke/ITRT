import React from "react";
import { withExperiment } from "probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "probat/index";

const __PROBAT_KEY__ = "sample.tsx";

const Sample = () => {
  return (
    <div>testing this</div>
  );
};

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(Sample as any, { proposalId: meta.proposalId, registry: reg })
    : Sample;
})();
