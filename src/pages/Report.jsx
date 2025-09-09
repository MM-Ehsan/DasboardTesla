import React from "react";
import { VStack, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header.jsx";
import StatsCard from "../components/StatsCard.jsx";
import ActivityChart from "../components/ActivityChart.jsx";
import TopicsCard from "../components/TopicsCard.jsx";
import Leaderboard from "../components/Leaderboard.jsx";

export default function Reports() {
  return (
    <VStack align="stretch" spacing={8}>
      <Header />

      {/* Stats + Chart in one row */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} alignItems="stretch">
  {/* Left side: take full height, split into 2 equal rows */}
  <GridItem>
    <Grid templateRows="1fr 1fr" h="100%" gap={6}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <StatsCard variant="compact" title="Active Users" percent="27/80" percentPositive />
        <StatsCard variant="compact" title="Questions Answered" percent="3,298" percentPositive />
        <StatsCard variant="compact" title="Avg. Session Length" percent="2m 34s" percentPositive />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <StatsCard
          variant="compact"
          title="Starting Knowledge"
          percent="64%"
          percentPositive
          subtitle="Trend"
          trend={[45, 48, 50, 52, 60, 62, 64]}
        />
        <StatsCard
          variant="compact"
          title="Current Knowledge"
          percent="86%"
          percentPositive
          subtitle="Trend"
          trend={[60, 64, 70, 72, 78, 82, 86]}
        />
        <StatsCard
          variant="compact"
          title="Knowledge Gain"
          percent="34%"
          percentPositive
          subtitle="Since start"
          trend={[30, 32, 35, 38, 42, 48, 64]}
        />
      </SimpleGrid>
    </Grid>
  </GridItem>

  {/* Right side: Chart */}
  <GridItem>
    <ActivityChart />
  </GridItem>
</Grid>




{/* Topics Section */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
        <GridItem>
          <TopicsCard
  title="Weakest Topics"
  topics={[
    { 
      name: "Food Safety", 
      value: 74, 
      gradient: "linear-gradient(to right, #fbae6fff, #ff0707cf)",
      icon: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " 
    },
    { 
      name: "Compliance Basics Procedures", 
      value: 52, 
      gradient: "linear-gradient(to right, #fbae6fff, #ff0707cf)",
      icon: "https://images.unsplash.com/photo-1618015358954-344302f421a4?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      name: "Company Networking", 
      value: 35, 
      gradient: "linear-gradient(to right, #fbae6fff, #ff0707cf)",
      icon: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]}
/>

        </GridItem>
        <GridItem>
          <TopicsCard
  title="Strongest Topics"
  topics={[
    { 
      name: "Covid Protocols", 
      value: 95, 
      color: "green", 
      //gradient: "linear-gradient(to right, #fbae6fff, #ff0707cf)"
      icon: "https://images.unsplash.com/photo-1607326207820-989c6d53a0a2?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      name: "Cyber Security Basics", 
      value: 92, 
      color: "teal", 
      icon: "https://plus.unsplash.com/premium_photo-1723601137214-1d5bfe3181f6?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      name: "Social Media Policies", 
      value: 89, 
      color: "blue", 
      icon: "https://images.unsplash.com/photo-1672826979189-347dfa7d1fa5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
  ]}
/>

        </GridItem>
      </Grid>



      {/* Leaderboards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>

   <Leaderboard
  title="User Leaderboard"
  headingColor="gray"
  showAvatars={true}   // avatars visible here
  data={[
    { name: "Jesse Thomas", trend: "up", subtext: "635 points, 90% correct", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Thisal Mathiyazhagan", trend: "down", subtext: "580 points, 85% correct", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Aisha Khan", trend: "up", subtext: "550 points, 88% correct", avatar: "https://i.pravatar.cc/40?img=19" },
  ]}
/>

<Leaderboard
  title="Groups Leaderboard"
  data={[
    { name: "Team Alpha", trend: "up", subtext: "1200 points, 95% correct" },
    { name: "Team Beta", trend: "down", subtext: "1100 points, 89% correct" },
    { name: "Team Gamma", trend: "up", subtext: "980 points, 87% correct" },
  ]}
/>



</SimpleGrid>

    </VStack>
  );
}
