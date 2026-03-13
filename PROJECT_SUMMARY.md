# Cloud Shokudo-raku: Data Analytics Dashboard
### Product Summary

---

## What is Cloud Shokudo-raku?

Cloud Shokudo-raku is a **data analytics platform for corporate cafeteria management**. It provides cafeteria operators and general affairs administrators with a centralized dashboard to monitor sales performance, track customer satisfaction, and analyze menu item performance — replacing manual Excel-based workflows with real-time, visual insights.

This product was developed following a Design Sprint that identified critical pain points across two user groups: **Kitchen Operations staff** (chefs managing food costs and waste) and **General Affairs administrators** (handling data entry and reporting). The sprint revealed that operational stress, system friction, and engagement gaps were blocking profitability and user satisfaction.

---

## Product Objectives

| Objective | Design Sprint Finding | How the Product Addresses It |
|-----------|----------------------|------------------------------|
| **Reduce operational stress** | Kitchen staff lack real-time data to manage costs and food waste | Live KPI dashboards with sales, goal tracking, and day-of-week trends |
| **Eliminate system friction** | Admins rely on Excel workarounds due to complex UIs | Clean, card-based interface with intuitive navigation and minimal clicks |
| **Increase user engagement** | Difficulty responding to dietary needs and retaining users | Per-item nutritional breakdowns, survey tracking, and satisfaction rankings |
| **Enable data-driven decisions** | No visibility into what sells, when, or why | Multi-timeframe analytics (week/month/year) across sales, items, and feedback |
| **Showcase product value to prospects** | Need for an interactive demo environment | Fully functional demo with realistic data, ready for client presentations |

---

## Core Features

### 1. Sales Analytics Dashboard (売上分析)

The primary view for cafeteria managers and administrators to understand revenue performance at a glance.

- **Sales Trend Line Chart** — Visualizes overall revenue with toggleable timeframes (week, month, year), showing patterns and growth trajectory
- **Key Metric Cards** — Surfaces the three numbers operators care about most: annual average sales (¥400,000), average transaction value (¥4,021), and daily customer count (70)
- **Goal Tracking Gauges** — Six circular KPI indicators showing progress toward operational targets, enabling managers to course-correct in real time
- **Day-of-Week Sales Breakdown** — Horizontal bar chart revealing which days drive the most revenue (e.g., Friday peaks at ¥410k), supporting staffing and inventory decisions
- **Category & Payment Mix** — Pie charts breaking down revenue by item category (main dishes 42%, sides 28%, drinks 19%, desserts 11%) and payment method (RakuPay 35%, employee card 30%, cash 25%)

### 2. Survey Analytics (アンケート)

Connects customer voice directly to operational decisions — a key gap identified in the design sprint.

- **Satisfaction Score & Volume** — Overall rating of 4.2/5 stars across 1,240 reviews, with month-over-month response growth tracking (+15%)
- **Menu Item Satisfaction Ranking** — Ranked list from highest (Lunch Plate: 4.8) to lowest (Pork Soup: 2.4), giving chefs clear signals on what to keep, improve, or retire
- **Recent Customer Feedback** — Individual review cards with timestamps and star ratings, surfacing specific praise and complaints
- **Satisfaction Trend** — 6-month line chart tracking whether changes are actually improving the dining experience
- **Response Volume by Month** — Bar chart ensuring survey participation stays healthy for statistically meaningful insights

### 3. Item Details (商品詳細)

Deep-dive analytics for individual menu items — directly enabling the "AI-Driven Menu Suggestions" initiative from the sprint.

- **Search & Filter** — Find any menu item by name or filter by category (main dishes, side menu)
- **Item-Level KPIs** — Daily and monthly average sales plus survey rating for the selected item
- **Frequently Bought Together** — Shows the top 4 items purchased alongside the selected menu item, supporting set meal design and cross-selling
- **Sales Trend per Item** — Dedicated line chart with week/month/year views for individual item performance
- **Nutritional Profile (Radar Chart)** — Six-axis visualization of protein, carbs, fat, fiber, sodium, and vitamins — addressing the sprint's finding around dietary restrictions and personalization
- **Purchase Composition** — Doughnut chart showing what percentage of an item's sales come from set meals vs. individual orders

### 4. AI Chat Assistant (チャット)

An intelligent conversational interface that interprets the graphs and data displayed on the dashboard, offering plain-language explanations and actionable insights.

- **Data Interpretation** — Reads the charts, KPIs, and trends visible on the current page and explains what they mean in simple terms (e.g., "Friday sales are 2x Monday — consider adding a premium option on Fridays")
- **Insight Generation** — Surfaces patterns and correlations that users might miss, such as linking a satisfaction dip to a specific menu change or highlighting unusual sales spikes
- **Contextual Awareness** — Persistent across all pages, so users can ask about sales data, survey results, or item performance from anywhere in the dashboard without switching views
- Accessible from the sidebar with minimize/restore capability
- Designed as the foundation for the sprint's "AI-Driven Menu Suggestions" initiative — the chatbot bridges the gap between raw data and the operational decisions chefs and admins need to make daily

---

## How This Maps to Design Sprint Goals

```
Design Sprint Priority          →  Product Feature
─────────────────────────────────────────────────────────────────
Live KPI Dashboards              →  Sales Dashboard with 6 goal gauges,
                                    metric cards, and multi-timeframe charts

AI-Driven Menu Suggestions       →  AI Chat Assistant that interprets dashboard
                                    data and offers actionable insights, paired
                                    with Item Details nutritional and sales data

"Schedule a Menu" Feature        →  Item Details view provides the data
                                    foundation for menu planning decisions

Dynamic Personalization          →  Nutritional breakdown radar chart and
                                    allergy-relevant item filtering

Interactive Demo Environment     →  This entire application serves as the
                                    interactive demo for prospective clients
```

---

## Target Users

**Mei (Chef / Kitchen Operations)**
> "I need to know what's selling, what's wasting, and what to cook tomorrow."

The Sales Dashboard and Item Details views give Mei real-time visibility into sales patterns, item performance, and customer preferences — replacing guesswork with data.

**Keiko (General Affairs / Admin)**
> "I spend hours in Excel pulling numbers that should be on a screen."

The dashboard's card-based layout and pre-built visualizations eliminate manual reporting. Keiko can check KPIs, review survey feedback, and track goals in minutes instead of hours.

**Takashi (Prospective Client / Decision Maker)**
> "Show me what this system actually looks like before I commit."

The fully functional demo environment lets Takashi explore real-looking analytics without requiring installation or credentials — directly addressing the sprint's "Interactive Demo Environment" initiative.

---

## Technical Overview

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Layout & Styling | Tailwind CSS v3 | Responsive, card-based UI |
| Data Visualization | Chart.js v4 | Line, bar, pie, radar, and doughnut charts |
| Interactivity | Vanilla JavaScript | Navigation, filtering, chat, state management |
| Icons | Font Awesome 6 | UI iconography |
| Persistence | localStorage | Chat history and UI state across pages |
| Architecture | Component-based (header, sidebar, chatbot) | Reusable modules loaded across all views |

---

## Summary

Cloud Shokudo-raku transforms cafeteria management from a reactive, spreadsheet-driven process into a proactive, data-informed operation. Every feature in this product traces back to a specific pain point uncovered during the Design Sprint — from reducing Mei's daily stress with live KPIs, to eliminating Keiko's Excel dependency with visual dashboards, to winning Takashi's confidence with an interactive demo that speaks for itself.
