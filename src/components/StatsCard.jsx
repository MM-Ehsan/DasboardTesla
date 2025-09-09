// src/components/StatsCard.jsx
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

/**
 * Small helper that creates an SVG path for a sparkline from an array of numbers.
 * Returns null if trend is falsy or length < 2.
 */
function buildSparklinePath(trend = [], width = 90, height = 28, padding = 2) {
  if (!trend || trend.length < 2) return null;

  const min = Math.min(...trend);
  const max = Math.max(...trend);
  const range = max - min || 1; // avoid division by zero

  const step = (width - padding * 2) / (trend.length - 1);
  const points = trend.map((v, i) => {
    const x = padding + i * step;
    const normalized = (v - min) / range; // 0..1
    const y = padding + (1 - normalized) * (height - padding * 2);
    return { x, y };
  });

  return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
}

export default function StatsCard({
  title,
  value,
  subtitle,
  // variant: "default" (large stat) or "compact" (small knowledge card)
  variant = "default",
  // for compact variant
  percent = null,        // e.g. "64%" or "+34%"
  percentPositive = true, // boolean to color percent (green/red)
  trend = null,           // array of numbers for small sparkline
}) {
  // compact layout (used for Starting/Current/Knowledge Gain)
  if (variant === "compact") {
    const path = buildSparklinePath(trend, 100, 28, 4);
    const percentColor = percentPositive ? "green.400" : "red.400";

    return (
      <Box
        bg="white"
        p={4}
        rounded="xl"
        shadow="md"
        border="1px solid"
        borderColor="gray.200"
        minW="0"
      >
        <Text fontSize="sm" color="gray.600" mb={2}>
          {title}
        </Text>

        <Flex align="center" justify="space-between">
          <Text fontSize="lg" fontWeight="bold">
            {percent ?? value}
          </Text>
          {/* a tiny sparkline on the right */}
          <Box as="span" aria-hidden>
            {path ? (
              <svg width="100" height="28" viewBox={`0 0 100 28`} preserveAspectRatio="none">
                <path d={path} stroke="#3182CE" strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* subtle area to match design (very light fill) */}
                <path
                  d={`${path} L 96 26 L 4 26 Z`}
                  fill="#3182CE"
                  opacity="0.06"
                  stroke="none"
                />
              </svg>
            ) : null}
          </Box>
        </Flex>

        {subtitle && (
          <Text fontSize="xs" color={percent ? percentColor : "gray.500"} mt={2}>
            {subtitle}
          </Text>
        )}
      </Box>
    );
  }

  // default large stat card
  return (
    <Box
      bg="white"
      p={6}
      rounded="xl"
      shadow="md"
      border="1px solid"
      borderColor="gray.200"
      minW="0"
    >
      <Text fontSize="sm" color="gray.500">
        {title}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={1}>
        {value}
      </Text>
      {subtitle && (
        <Text fontSize="sm" color="gray.400" mt={2}>
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
