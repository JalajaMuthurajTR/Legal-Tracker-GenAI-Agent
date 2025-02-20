import Wrapper from "@/components/core/wrapper/Wrapper";
import styles from "./page.module.css";
import Heading from "@/components/core/ui/heading/Heading";
import MTCAForm from "@/components/form/MTCAForm";
import AuthHandler from "@/components/core/auth/AuthHandler";

export default function ManualTestCaseAgentPage() {
  return (
    <AuthHandler>
      <Wrapper>
        <Heading
          text={"Manual Test Case Agent"}
          bgImage={"https://i.gifer.com/XPFZ.gif"}
        />
        <MTCAForm />
      </Wrapper>
    </AuthHandler>
  );
}
