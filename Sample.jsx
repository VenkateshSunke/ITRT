import React from "react";
import { withExperiment } from "probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "probat/index";

const __PROBAT_KEY__ = "Sample.jsx";

const SampleButton = ({ label, onClick }) => {
  return (
   <div>I am testing this with jsx file</div>
  );
};

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(SampleButton as any, { proposalId: meta.proposalId, registry: reg })
    : SampleButton;
})();
