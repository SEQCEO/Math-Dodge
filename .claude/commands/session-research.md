Create a new research question file in `.claude/learnings/` with the format `YYYY-MM-DD-###-brief-description.md` where ### is a sequential number for that day.

The file MUST follow this EXACT structure:

```markdown
# Title
<!-- Concise, searchable title that captures the essence of the problem -->
<!-- Example: "Memory Leak in Redis Cluster During Failover" -->

## Query ID: [YYYY-MM-DD-###]
<!-- Unique identifier: Date + sequential number (e.g., 2024-01-15-001) -->

## Problem Statement
<!-- Detailed description of the issue or question -->
<!-- Include:
- What you're trying to achieve
- What's currently happening (expected vs actual behavior)
- Any error messages or symptoms
- When the problem occurs (always, sometimes, specific conditions)
-->

## Context & Environment
<!-- Technical context to help researchers understand the setup, include also the date like in July 2025 with ffmpeg 7.1.1 so that the context of the question is fully known -->

## Research Objectives
<!-- What specific information are you looking for? -->
- [ ] <!-- e.g., Root cause of the error -->
- [ ] <!-- e.g., Known workarounds or patches -->
- [ ] <!-- e.g., Similar issues in other versions -->
- [ ] <!-- e.g., Best practices to avoid this -->


---

# Research Answer

```

Steps:
1. Ask for the research question details if not provided
2. Generate appropriate title from the question (remove the HTML comments, just the title)
3. Check existing files to determine the next sequential number for today
4. Create the file with:
   - All HTML comments preserved as guidance
   - Problem Statement with detailed bullets filled based on the question
   - Context & Environment with current date and relevant technical details
   - Research Objectives as checkbox items based on what needs to be researched
   - Empty Research Answer section at the bottom
5. Inform the user of the file location

The user will research the question and add their findings in the Research Answer section.