"use client";

import Wrapper from "@/components/core/wrapper/Wrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import styles from "./page.module.css";
import Heading from "@/components/core/ui/heading/Heading";
import AuthHandler from "@/components/core/auth/AuthHandler";

const data = [
  { name: "Jan", projects: 50, testCasesSuccess: 400, testCasesFail: 100 },
  { name: "Feb", projects: 60, testCasesSuccess: 300, testCasesFail: 120 },
  { name: "Mar", projects: 70, testCasesSuccess: 500, testCasesFail: 80 },
  { name: "Apr", projects: 80, testCasesSuccess: 450, testCasesFail: 90 },
  { name: "May", projects: 90, testCasesSuccess: 480, testCasesFail: 70 },
  { name: "Jun", projects: 100, testCasesSuccess: 350, testCasesFail: 110 },
];

const pieData = [
  { name: "Success", value: 400 },
  { name: "Fail", value: 100 },
];

const COLORS = ["#82ca9d", "#FF5733"];

const HomePage = () => {
  return (
    <AuthHandler>
      <Wrapper>
        <div className={styles.container}>
          <Heading
            text={"Dashboard Overview"}
            bgImage={"https://i.gifer.com/XPFZ.gif"}
          />
          <div className={styles.chartsGrid}>
            <div className={styles.chartBox}>
              <h2 className={styles.title}>Projects Created</h2>
              <p className={styles.subtitle}>
                Number of projects created over the past six months.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.chartBox}>
              <h2 className={styles.title}>
                Test Cases Generated Successfully
              </h2>
              <p className={styles.subtitle}>
                Monthly count of successfully generated test cases.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="testCasesSuccess" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.chartBox}>
              <h2 className={styles.title}>Test Cases Generation Failures</h2>
              <p className={styles.subtitle}>
                Overview of failed test case generations.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.chartBox}>
              <h2 className={styles.title}>Other Metrics</h2>
              <p className={styles.subtitle}>
                Additional performance indicators related to testing and
                projects.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Projects"
                    dataKey="projects"
                    stroke="#3498db"
                    fill="#3498db"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Wrapper>
    </AuthHandler>
  );
};

export default HomePage;
