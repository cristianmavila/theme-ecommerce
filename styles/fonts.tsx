import { JetBrains_Mono } from "next/font/google";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--fontFamiliesJetBrainsMono",
  weight: ["400", "500", "600", "700"],
});

export { JetBrainsMono };
