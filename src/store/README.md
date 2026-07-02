# store/

Placeholder for global client state (e.g. Zustand) — not needed yet since no
screens currently require cross-route client state beyond form-local state.

Suggested next step when wiring up real auth:
- `useSessionStore` — current authenticated user + onboarding progress.
- `useOnboardingDraftStore` — persists in-progress onboarding form state
  across steps before the final submit (so users can navigate Back without
  losing data).
