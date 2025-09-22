const { z } = require("zod");

const authSchema = z.object({
  provider: z.enum(["google", "github", "linkedin", "credentials"]),
  providerId: z.string().min(1, "providerId is required"),
  email: z
    .string()
    .email({ message: "Mail is valide" }) // email xatolik xabari
    .regex(
      /^(?!.*\.\.)([a-z0-9_'+-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
      {
        message: "Email is not valid",
      }
    ),
  name: z.string().min(1, "Must enter name"),
  avatar: z.string().nullable(),
  password: z.string().optional(),
});

module.exports = authSchema;
