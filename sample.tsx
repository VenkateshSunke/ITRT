import { withExperiment } from "probat";
import { PROBAT_COMPONENTS } from "probat";

export const sampleControl(){
  return (
    <div>testing this</div>
  );
};

const probatExperimentKey = "sample.tsx";
let sample = sampleControl;
if (PROBAT_COMPONENTS && probatExperimentKey in PROBAT_COMPONENTS) {
  const proposalId = PROBAT_COMPONENTS[probatExperimentKey]?.proposalId;
  if (proposalId) {
    sample = withExperiment(sampleControl, { proposalId });
  }
}
export default sample;