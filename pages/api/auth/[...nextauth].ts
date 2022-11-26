import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import VKProvider from "next-auth/providers/vk";
import GithubProvider from "next-auth/providers/github";
import YandexProvider from "next-auth/providers/yandex";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_ID as string,
      clientSecret: process.env.YANDEX_SECRET as string,
    }),
    VKProvider({
      clientId: process.env.VK_ID as string,
      clientSecret: process.env.VK_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
