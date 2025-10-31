import { Outfit, Noticia_Text } from "next/font/google";

export const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const noticiaText = Noticia_Text({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const noticiaTextBold = Noticia_Text({
  weight: "700",
  style: ["normal", "italic"],
  subsets: ["latin"],
});
