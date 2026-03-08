import ProgramPageTemplate from "@/components/shared/ProgramPageTemplate";

const AIAdoption = () => (
  <ProgramPageTemplate
    eyebrow="AI adoption for teams"
    title="AI inside the team is not the same thing as AI working well"
    subtitle="For organizations that want AI to become useful inside real workflows, not just another layer of confusion, experimentation or uneven habits across the team."
    recognitionCopy="Some team members use AI daily. Others avoid it entirely. There is no shared standard for when to use it, how to use it or what good usage looks like. Prompting is inconsistent. Tools multiply without clarity. The team is experimenting, but the experiment never stabilizes into something the whole team can rely on."
    costCopy="Uneven AI usage creates confusion, duplicated effort and missed potential. The team never builds shared habits. New tools get adopted and abandoned in cycles. The gap between AI-fluent and AI-avoidant members keeps widening and the promise of AI stays theoretical."
    builtToDo="Move AI from scattered experimentation to a shared operating standard, building the habits, workflows and agreements that make it useful across the team, not just for the early adopters."
    whatChanges="AI usage becomes consistent and deliberate. The team develops shared habits around prompting, tool selection and workflow integration. New tools get evaluated against clear criteria instead of impulse. The gap between team members narrows and AI starts saving time instead of adding confusion."
    canInclude={[
      "Current AI usage audit across roles and workflows",
      "Role-specific AI onboarding and training",
      "Prompt standardization and template development",
      "Tool evaluation and rationalization",
      "Habit design and adoption tracking",
      "Team-level AI operating agreements",
      "Integration with existing workflows",
    ]}
    comesOut="A team that uses AI consistently, deliberately and effectively. With shared habits, clear agreements about when and how AI fits into the work and less confusion across the board."
    bestFit="Companies, NGOs, educators and teams already experimenting with AI but lacking consistency."
    notThis="This is not an AI tools directory or a prompt engineering course. It is a structured process for making AI a shared practice inside the team, one that sticks."
    howStarts="With a free 30-minute working call focused on how AI is currently being used inside the team, where the gaps are and what would make the biggest difference."
    leadsTo="For some teams, AI adoption naturally connects to execution readiness or INK-supported workflows. For others, it stays focused on deepening the team's AI operating standard over time."
  />
);

export default AIAdoption;
