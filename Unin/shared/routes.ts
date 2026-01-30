import { z } from "zod";
import { insertContactSchema, contactSubmissions } from "./schema";

export const api = {
  contact: {
    submit: {
      method: "POST" as const,
      path: "/api/contact",
      input: insertContactSchema,
      responses: {
        201: z.custom<typeof contactSubmissions.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
