import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  BrainCircuit,
  ClipboardList,
  CreditCard,
  Landmark,
  MonitorSmartphone,
  Package,
  QrCode,
  Truck,
  Undo2,
  Users,
} from "lucide-react";
import { paths } from "@/routes/paths";

export interface SectionArchData {
  title: string;
  icon: LucideIcon;
  category: string;
  intro: string;
  description: string;
  steps: string[];
  outcomes: string[];
  route: string;
}

export const sections: SectionArchData[] = [
  {
    title: "Products",
    icon: Package,
    category: "Catalog",
    intro: "A single source of truth for everything you sell.",
    description:
      "Your central product catalog. Every item, variant and price is defined once and published to every sales channel from the same core — so nothing ever goes out of sync and there are no duplicate listings to reconcile.",
    steps: ["Create / Import", "Variants & Pricing", "Publish to channels", "Sync availability"],
    outcomes: [
      "One canonical catalog feeding all channels",
      "SKU, variant and barcode management built in",
      "CSV import and bulk editing for fast onboarding",
    ],
    route: paths.products,
  },
  {
    title: "Inventory",
    icon: Boxes,
    category: "Stock",
    intro: "Real-time stock that always matches what's really on the shelf.",
    description:
      "A live stock ledger across every warehouse and branch. Orders reserve inventory automatically the moment they arrive, while purchases, transfers, returns and adjustments all run against one accurate count — no spreadsheets, no overselling.",
    steps: ["Purchase / Receive", "Stock ledger", "Reserve on order", "Transfer / Adjust"],
    outcomes: [
      "Multi-warehouse visibility with live availability",
      "Automatic reservation when orders land",
      "Low-stock alerts stop you running dry",
    ],
    route: paths.inventory,
  },
  {
    title: "Orders",
    icon: ClipboardList,
    category: "Sales",
    intro: "Every sale from every channel in one clean inbox.",
    description:
      "Whatever the source — Facebook, Messenger, WhatsApp, website, phone or POS — every order lands in a single inbox. The core validates it, reserves stock, confirms payment and moves the order through one consistent status workflow from sale to delivery.",
    steps: ["Incoming from channel", "Validate & reserve", "Payment & confirm", "Fulfil / Deliver"],
    outcomes: [
      "Unified order inbox across all channels",
      "Full COD life-cycle handled automatically",
      "Order status automation cuts manual work",
    ],
    route: paths.orders,
  },
  {
    title: "POS",
    icon: MonitorSmartphone,
    category: "Sales",
    intro: "Fast, reliable in-store billing connected to the whole system.",
    description:
      "A snappy billing screen for your physical store that shares the exact same core as every online channel. Prices, stock levels and customer history are instantly consistent — and it keeps working even when the internet drops.",
    steps: ["Ring up item", "Payment online / offline", "E-invoice & receipt", "Stock deducted live"],
    outcomes: [
      "Works offline without losing sales",
      "Accepts bKash and Nagad at the counter",
      "Receipt and e-invoice printing built in",
    ],
    route: paths.pos,
  },
  {
    title: "Customers",
    icon: Users,
    category: "CRM",
    intro: "Know every customer and every conversation they've had.",
    description:
      "Each customer is a single 360° profile holding the full history of their orders, payments and messages across every channel. Segment them, tag them and turn one-time buyers into loyal, repeat customers.",
    steps: ["Capture from sale", "360° profile", "Segments & tags", "Retention & loyalty"],
    outcomes: [
      "Complete history tied to one profile",
      "Segment and tag lists for targeted outreach",
      "Loyalty and re-purchase mechanics ready",
    ],
    route: paths.customers,
  },
  {
    title: "Payments",
    icon: CreditCard,
    category: "Payments",
    intro: "Collect and reconcile money without the guesswork.",
    description:
      "Captures and verifies every payment — card gateways, mobile financial services and cash on delivery — then settles and reconciles it cleanly back into your books, so your cash position is always accurate and disputes are easy to trace.",
    steps: ["Capture payment", "Verify gateway / MFS", "COD settlement", "Reconcile to books"],
    outcomes: [
      "Cards and MFS verified automatically",
      "COD settlements tracked to the taka",
      "Clean reconciliation into your ledgers",
    ],
    route: paths.payments,
  },
  {
    title: "Packaging & QR",
    icon: QrCode,
    category: "Fulfilment",
    intro: "Every parcel tagged, scanned and traceable end to end.",
    description:
      "Each parcel receives a unique QR label that ties the order to its courier network. Packing, dispatch and handover are all scanned, giving you full traceability from the pick-list to the delivery rider.",
    steps: ["Order assigned", "Generate QR label", "Pack & scan", "Hand to courier"],
    outcomes: [
      "Unique QR code on every parcel",
      "Pick list and label printing streamlined",
      "Traceable handoffs remove lost parcels",
    ],
    route: paths.packaging,
  },
  {
    title: "Courier",
    icon: Truck,
    category: "Fulfilment",
    intro: "National couriers wired straight into your order flow.",
    description:
      "Integrations with RedX, Pathao and other couriers dispatch, track and deliver orders automatically, streaming live status updates back into your order inbox — so you and your customers always know exactly where a parcel is.",
    steps: ["Dispatch request", "Pickup", "In transit", "Delivered / Tracking"],
    outcomes: [
      "RedX and Pathao ready out of the box",
      "Real-time status updates via webhooks",
      "Return-to-origin handling built in",
    ],
    route: paths.courier,
  },
  {
    title: "Returns",
    icon: Undo2,
    category: "Fulfilment",
    intro: "Turn returns from a headache into a controlled process.",
    description:
      "Return requests are received, validated and turned into a return-merchandise-authorisation (RMA). The courier picks it up, the item is inspected and it's either restocked into live inventory or refunded — all tracked back to the original order.",
    steps: ["Return request", "Approve / RMA", "Pickup & inspect", "Restock / refund"],
    outcomes: [
      "Structured RMA workflow for every return",
      "Condition checks decide restock or refund",
      "Automatic restock keeps counts accurate",
    ],
    route: paths.returns,
  },
  {
    title: "Finance",
    icon: Landmark,
    category: "Back office",
    intro: "Books that keep themselves, from every transaction.",
    description:
      "Every sale, settlement, fee and payout is journaled automatically into statements and reports that read like clean books — so you always know your margin, your dues and your cash flow without a month-end scramble.",
    steps: ["Transactions", "Auto journal", "Statements", "Reports & VAT"],
    outcomes: [
      "Automatic journal entries from every sale",
      "Settlement and fee views per channel",
      "VAT and tax reporting ready to go",
    ],
    route: paths.finance,
  },
  {
    title: "Analytics",
    icon: BarChart3,
    category: "Intelligence",
    intro: "A live view of the business while it's actually happening.",
    description:
      "Dashboards and reports are built directly on the live data spine, so sales, channel performance, products and customers update in real time as orders flow through the system — no refreshing, no export and re-import.",
    steps: ["Live data spine", "Aggregation", "Dashboards", "Decisions"],
    outcomes: [
      "Real-time KPIs across every channel",
      "Break performance down by product and channel",
      "Export reports whenever you need them",
    ],
    route: paths.analytics,
  },
  {
    title: "AI Assistant",
    icon: BrainCircuit,
    category: "Intelligence",
    intro: "Insight that's built on your own business data.",
    description:
      "AI sits on top of your live data to forecast demand, score the risk of each cash-on-delivery order and recommend exactly what to restock and when. It turns raw numbers into decisions — and can even take routine actions for you.",
    steps: ["Business data", "Models", "Forecast / risk", "Recommendations"],
    outcomes: [
      "Demand forecasting from your real history",
      "COD risk score on every order",
      "Smart restocking recommendations",
    ],
    route: paths.aiAssistant,
  },
];