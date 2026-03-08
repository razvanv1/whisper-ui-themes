import ProgramPageTemplate from "@/components/shared/ProgramPageTemplate";

const ExecutionReadiness = () => (
  <ProgramPageTemplate
    eyebrow="Execution readiness review"
    title="High effort means very little when the work still struggles to move"
    subtitle="For teams dealing with slow decisions, delivery friction, weak traction or too many initiatives moving at once without enough progress."
    recognitionCopy="The team is working hard. Activity levels are high. But progress feels slow. Decisions pile up. Initiatives run in parallel without clear traction. New work keeps entering the system while old work never really leaves. The problem is not effort. It is the distance between effort and actual outcomes."
    costCopy="Slow decisions compound into missed deadlines and lost momentum. Parallel initiatives compete for bandwidth until none of them get enough. Delivery friction erodes morale over time. Good work gets buried under operational drag and the team stays busy while the outcomes stay flat."
    builtToDo="Identify and reduce the execution drag that sits between effort and outcomes, clearing decision backlogs, triaging initiatives and building a delivery rhythm that matches the team's actual capacity."
    whatChanges="Decisions move faster because there are fewer of them competing for attention. Priorities get clearer. The friction between intention and execution drops. The team starts feeling momentum again, not just activity."
    canInclude={[
      "Execution audit and friction mapping",
      "Decision backlog clearing",
      "Initiative triage and stop/fix/continue logic",
      "Delivery rhythm design",
      "Priority framework development",
      "Capacity and bandwidth assessment",
      "Progress tracking and accountability design",
    ]}
    comesOut="A team with less drag, clearer priorities and a delivery rhythm that actually works. Fewer things running at once, with more progress on each."
    bestFit="Delivery teams, implementation-heavy organizations and growing teams under pressure."
    notThis="This is not project management consulting or a productivity framework. It is a focused intervention to reduce the specific execution drag that sits between the team's effort and its outcomes."
    howStarts="With a free 30-minute working call focused on where execution is breaking down and what is causing the most friction right now."
    leadsTo="For some teams, this work connects naturally to AI adoption, funding intelligence or INK-supported workflow support. For others, it stays focused on building a sustainable delivery rhythm."
  />
);

export default ExecutionReadiness;
