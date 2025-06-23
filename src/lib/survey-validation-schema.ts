import * as Yup from "yup";

export const validationSchemas = [
  // Step 1
  Yup.object({
    creatorType: Yup.string().required(),
    followersCount: Yup.string().required(),
    platform: Yup.string().required(),
  }),
  // Step 2
  Yup.object({
    biggestChallenge: Yup.string().required(),
    platformOption: Yup.string().required(),
  }),
  // Step 3
  Yup.object({
    dailyInteractions: Yup.string().required(),
    missedOpportunities: Yup.string().required(),
  }),
  // Step 4
  Yup.object({
    automationInterest: Yup.string().required(),
    paymentWillingness: Yup.string().required(),
  }),
  // Step 5
  Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    instagram: Yup.string().required(),
  }),
];
