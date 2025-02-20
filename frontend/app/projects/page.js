import Wrapper from "@/components/core/wrapper/Wrapper";
import styles from "./page.module.css";
import Heading from "@/components/core/ui/heading/Heading";
import Card from "@/components/card/Card";
import CardHolder from "@/components/card/CardHolder";
import AuthHandler from "@/components/core/auth/AuthHandler";

export default function WebAutomationTestCaseAgentPage() {
  return (
    <AuthHandler>
      <Wrapper>
        <Heading text={"Projects"} bgImage={"https://i.gifer.com/XPFZ.gif"} />
        <CardHolder>
          <Card
            projectName={"J.A.R.V.I.S"}
            date={"22 Jan 2025"}
            testCases={"239"}
            agent={"Web Automation TCA"}
          />
          <Card
            projectName={"Vision AI"}
            date={"15 Feb 2025"}
            testCases={"150"}
            agent={"Machine Learning Suite"}
          />
          <Card
            projectName={"Sentinel X"}
            date={"30 Dec 2024"}
            testCases={"312"}
            agent={"Security Analyzer"}
          />
          <Card
            projectName={"Quantum Flow"}
            date={"08 Mar 2025"}
            testCases={"198"}
            agent={"Performance Optimizer"}
          />
          <Card
            projectName={"Auto Debugger"}
            date={"10 Apr 2025"}
            testCases={"275"}
            agent={"Code Review AI"}
          />
          <Card
            projectName={"Cyber Shield"}
            date={"28 May 2025"}
            testCases={"400"}
            agent={"Penetration Tester"}
          />
          <Card
            projectName={"Aether Scan"}
            date={"05 Jun 2025"}
            testCases={"122"}
            agent={"Network Monitor"}
          />
          <Card
            projectName={"Phoenix Engine"}
            date={"17 Jul 2025"}
            testCases={"340"}
            agent={"Regression Tester"}
          />
          <Card
            projectName={"Echo Framework"}
            date={"01 Aug 2025"}
            testCases={"205"}
            agent={"API Validator"}
          />
          <Card
            projectName={"Neural Nexus"}
            date={"12 Sep 2025"}
            testCases={"180"}
            agent={"Deep Learning Debugger"}
          />
        </CardHolder>
      </Wrapper>
    </AuthHandler>
  );
}
