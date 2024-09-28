import { auth } from "./auth";
import { prisma } from "./prisma";

export async function getSessionUser() {
  const session = await auth();
  console.log(session);

  if (!session?.user?.email) {
    throw new Error("You must be logged in to create a short link.");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user?.id) {
    throw new Error("User not found");
  }

  return user;
}
