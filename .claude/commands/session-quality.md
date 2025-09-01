Run code quality checks on the codebase:

1. Check if any JavaScript/TypeScript files have been modified in the current git working directory
2. If files were modified:
   - Run `npm run format` to check code formatting
   - Run `npm run build:local` to verify the build succeeds
   - Report results clearly:
     * If all checks pass: "✅ Code quality check passed - formatting is correct and build succeeds!"
     * If issues found: List each issue type and affected files
3. Optionally check specific build environments if requested by user:
   - `npm run build:dev`
   - `npm run build:stag`
   - `npm run build:prod`
4. If issues are found, offer to:
   - Show detailed error messages
   - Suggest fixes (but don't auto-fix without permission)
   - Re-run after fixes are made

Note: This checks code formatting and build integrity for the Chrome extension project.