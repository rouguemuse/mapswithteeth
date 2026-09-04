/**
 * MAPS WITH TEETH — DOMAIN: QUESTION DEPENDENCY & FOLLOW-UP MAP
 * Links structured matcher unknown fact keys directly to canonical intake questions.
 * Used by RouteResultCard to render inline interactive clarifications for POSSIBLE routes.
 */

import { INTAKE_QUESTIONS, IntakeQuestion } from "./questionRegistry";
import { SurvivorSituation } from "./types";

export interface ClarificationPrompt {
  factKey: keyof SurvivorSituation;
  question: IntakeQuestion;
  shortPrompt: string;
}

/**
 * Find the intake question corresponding to a specific SurvivorSituation field key.
 */
export function getQuestionForField(fieldKey: keyof SurvivorSituation): IntakeQuestion | undefined {
  return INTAKE_QUESTIONS.find((q) => q.survivorSituationField === fieldKey);
}

/**
 * Look up clarification prompts for an array of unknown fact keys emitted by the matcher.
 */
export function getClarificationPromptsForUnknowns(
  unknownFactKeys: string[],
  currentSituation: SurvivorSituation
): ClarificationPrompt[] {
  const prompts: ClarificationPrompt[] = [];

  for (const key of unknownFactKeys) {
    const fieldKey = key as keyof SurvivorSituation;
    // Check if situation already has a definitive value
    const currentValue = currentSituation[fieldKey];
    if (currentValue !== undefined && currentValue !== "UNKNOWN") {
      continue;
    }

    const question = getQuestionForField(fieldKey);
    if (question) {
      prompts.push({
        factKey: fieldKey,
        question,
        shortPrompt: question.plainLanguagePrompt
      });
    }
  }

  return prompts;
}
