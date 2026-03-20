import ProgramPageTemplate from "@/components/shared/ProgramPageTemplate";

const FundingIntelligence = () => (
  <ProgramPageTemplate
    eyebrow="Funding intelligence and opportunity readiness"
    title="Too many funding options can quietly waste months of work"
    subtitle="For teams that need better funding routes, stronger prioritization and less wasted time across grants, vendor credits, partnerships and new opportunity paths."
    recognitionCopy="The team is scanning too many funding sources at once. Grant cycles pass without strong applications. Vendor credits expire unused. Partnership conversations stall. New funding paths keep appearing but none of them get enough attention to close. The problem is not a lack of opportunity. It is too many options without enough filtering."
    costCopy="Months of effort get spread across routes that never close. Team bandwidth gets consumed by scanning instead of executing. Strong opportunities slip past because weaker ones took up the space. Credits and partnerships stay on the table because nobody had the capacity to follow through."
    builtToDo="Help the team narrow the funding landscape to the routes that actually fit and build the filtering logic, prioritization criteria and readiness steps that turn scattered scanning into focused execution."
    whatChanges="Fewer routes running in parallel. Stronger applications. Better use of credits and partnerships. Faster, more confident decisions about what to pursue and what to let go."
    canInclude={[
      "Opportunity landscape mapping",
      "Funding source scoring and prioritization",
      "Grant readiness assessment",
      "Vendor credit and partnership evaluation",
      "Application strategy and timeline planning",
      "Proposal logic sharpening",
      "Full application building and tracking via INK (AI-supported)",
      "Automated monitoring for new matching calls",
    ]}
    comesOut="A clear, prioritized funding strategy and a fully set up INK workspace for ongoing monitoring and application building. Faster readiness for the routes that matter."
    bestFit="NGOs, universities, startups, accelerators and teams exploring new growth or funding routes."
    notThis="This is not a grant-writing service. It is a working process that uses the INK platform to make better funding decisions and execute on them with less waste."
    howStarts="With a free 30-minute working call or a 14-day free trial of the INK Agentic Platform."
    leadsTo="For most teams, the work naturally extends into ongoing use of the INK platform for proposal support, monitoring, and execution readiness. The program includes the full setup of your INK environment."
    showInkCTA={true}
  />
);

export default FundingIntelligence;
