"use server";

import { prisma } from "@/prisma";
import { getSessionUser } from "@/user";

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function generateShortUrl(count: number) {
  return encodeBase62(count + 1);
}

const BASE62_CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encodeBase62(num: number): string {
  let encoded = "";
  while (num > 0) {
    const remainder = num % 62;
    encoded = BASE62_CHARS[remainder] + encoded;
    num = Math.floor(num / 62);
  }
  return encoded || BASE62_CHARS[0];
}

function saveLink(userId: string, originalUrl: string, shortUrl: string) {
  return prisma.link.create({
    data: {
      userId,
      originalUrl,
      shortUrl,
    },
  });
}

export async function createShortLink(originalUrl: string) {
  const user = await getSessionUser();

  if (!isValidUrl(originalUrl)) {
    throw new Error("Invalid URL provided.");
  }

  const shortUrl = generateShortUrl(Date.now());
  await saveLink(user.id, originalUrl, shortUrl);

  return {
    originalUrl,
    shortUrl,
  };
}
