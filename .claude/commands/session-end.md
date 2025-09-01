End the current development session by:

1. Check `.claude/sessions/.current-session` for the active session
2. If no active session, inform user there's nothing to end
3. Run code quality checks (if code was modified):
   - Run `npm run format` to check code formatting
   - Verify the build succeeds with `npm run build:local`
   - Report any issues found
4. If session exists, append a comprehensive summary including:
   - Session duration
   - Code quality status (formatting and build check results)
   - Git summary:
     * Total files changed (added/modified/deleted)
     * List all changed files with change type
     * Number of commits made (if any)
     * Final git status
   - Todo summary:
     * Total tasks completed/remaining
     * List all completed tasks
     * List any incomplete tasks with status
   - Key accomplishments
   - All features implemented
   - Problems encountered and solutions
   - Breaking changes or important findings
   - Dependencies added/removed
   - Configuration changes
   - Deployment steps taken
   - Lessons learned
   - What wasn't completed
   - Tips for future developers

5. If there are uncommitted changes:
   - Ask user if they want to commit and push changes
   - If yes, stage all changes with `git add -A`
   - Create commit with descriptive message summarizing the work
   - Push to the current branch with `git push origin <branch>`
6. Empty the `.claude/sessions/.current-session` file (don't remove it, just clear its contents)
7. Inform user the session has been documented and any git operations completed

The summary should be thorough enough that another developer (or AI) can understand everything that happened without reading the entire session.