import { dark } from "@clerk/themes";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp appearance={{ baseTheme: dark }} />;
}
