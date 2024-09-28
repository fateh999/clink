import { prisma } from "@/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface PageProps {
  params: { shortUrl: string };
}

export default async function ShortUrlRedirectPage({ params }: PageProps) {
  const { shortUrl } = params;

  const link = await prisma.link.findUnique({
    where: { shortUrl: String(shortUrl) },
  });

  if (link) {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    let ip = FALLBACK_IP_ADDRESS;
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
      ip = forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    ip = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;

    const userAgent = headers().get("user-agent") || "";
    const referrer = headers().get("referer") || "";

    await prisma.click.create({
      data: {
        linkId: link.id,
        ip: String(ip),
        userAgent: userAgent,
        referrer: referrer,
      },
    });

    redirect(link.originalUrl);
  } else {
    return <h1>404 - Link not found</h1>;
  }
}
