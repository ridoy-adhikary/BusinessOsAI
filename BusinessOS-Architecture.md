# BusinessOS — System Architecture & Workflow

All-in-one business operating system for Bangladesh — a unified platform connecting products, inventory, orders, customers, POS, payments, warehouses, packaging, QR verification, courier, delivery, returns, finance, marketing, analytics and AI into a single business core.

**Online · Offline / POS · Omnichannel · Multi-tenant SaaS · AI-driven**

## Contents

- [1. Actors & external systems](#1-actors-and-external-systems)
- [2. Business registration & onboarding](#2-business-registration-and-onboarding)
- [3. Owner dashboard — central control center](#3-owner-dashboard-central-control-center)
- [4. Product management](#4-product-management)
- [5. Inventory management](#5-inventory-management)
- [6. Multi-warehouse / multi-branch](#6-multi-warehouse-multi-branch)
- [7. Omnichannel sales → central order engine](#7-omnichannel-sales-central-order-engine)
- [8. Customer lifecycle & segmentation](#8-customer-lifecycle-and-segmentation)
- [9. Order processing lifecycle](#9-order-processing-lifecycle)
- [10. QR packaging workflow](#10-qr-packaging-workflow)
- [11. Payment workflow](#11-payment-workflow)
- [12. Bangladesh courier layer](#12-bangladesh-courier-layer)
- [13. Return workflow & policy](#13-return-workflow-and-policy)
- [14. POS workflow](#14-pos-workflow)
- [15. Supplier & purchase workflow](#15-supplier-and-purchase-workflow)
- [16. Finance workflow](#16-finance-workflow)
- [17. Employee roles & audit log](#17-employee-roles-and-audit-log)
- [18. Notification system](#18-notification-system)
- [19. Marketing module](#19-marketing-module)
- [20. Analytics module](#20-analytics-module)
- [21. AI business engine & assistant](#21-ai-business-engine-and-assistant)
- [22. Reporting module](#22-reporting-module)
- [23. Platform admin panel](#23-platform-admin-panel)
- [24. Subscription system](#24-subscription-system)
- [25. Complete data flow](#25-complete-data-flow)
- [26. Multi-tenant architecture](#26-multi-tenant-architecture)
- [27. Technical architecture](#27-technical-architecture)
- [28. Master flow — order to delivery](#28-master-flow-order-to-delivery)

## Legend

- **Blue** — Actors / entry points
- **Purple** — Core process
- **Amber** — Decision point
- **Green** — Data / storage
- **Coral** — External system
- **Pink** — AI / automation

## 1. Actors & external systems

Four actor types interact with BusinessOS; sales and operational data flow in from external channels and out to payment, courier and notification providers.

```mermaid
flowchart TB
  subgraph Actors["Platform actors"]
    OWNER[Business owner]:::actor
    EMP[Business employee]:::actor
    CUST[Customer]:::actor
    ADMIN[Platform administrator]:::actor
  end
  subgraph Ext["External systems"]
    FB[Facebook]:::ext
    MSG[Messenger]:::ext
    WA[WhatsApp]:::ext
    WEB[Business website]:::ext
    PHONE[Phone orders]:::ext
    POS[Physical shop / POS]:::ext
    PAY[Payment gateways]:::ext
    MFS[Mobile financial services]:::ext
    COUR[Courier companies]:::ext
    NOTIF[SMS / email / notifications]:::ext
  end
  BOS[(BusinessOS core)]:::store
  OWNER --> BOS
  EMP --> BOS
  CUST --> BOS
  ADMIN --> BOS
  FB --> BOS
  MSG --> BOS
  WA --> BOS
  WEB --> BOS
  PHONE --> BOS
  POS --> BOS
  BOS --> PAY
  BOS --> MFS
  BOS --> COUR
  BOS --> NOTIF
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 2. Business registration & onboarding

Every owner who signs up receives an isolated, multi-tenant workspace once payment and setup are complete.

```mermaid
flowchart TD
  A[Owner]:::actor --> B[Create account]:::proc
  B --> C[Verify phone / email]:::proc
  C --> D[Create business]:::proc
  D --> E[Enter business information]:::proc
  E --> F{Select business type}:::dec
  F --> F1[Online]:::proc
  F --> F2[Offline]:::proc
  F --> F3[Online + offline]:::proc
  F1 --> G[Select subscription plan]:::proc
  F2 --> G
  F3 --> G
  G --> H[Payment]:::ext
  H --> I[(Isolated tenant workspace created)]:::store
  I --> J[Owner dashboard]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 3. Owner dashboard — central control center

A single screen surfaces sales, stock, customer, courier, finance and AI signals, with every metric clickable through to its module.

```mermaid
flowchart TB
  DB[Owner dashboard]:::proc
  DB --> SALES["Sales & orders<br/>today, pending, delivered, cancelled"]:::proc
  DB --> PROD["Product & stock<br/>low / out of stock, best sellers"]:::proc
  DB --> CUST2["Customer stats<br/>new, returning, VIP, high-risk COD"]:::proc
  DB --> SHIP["Courier & shipping<br/>pickups, in-transit, delivered"]:::proc
  DB --> FIN["Finance<br/>expenses, fees, estimated profit"]:::proc
  DB --> AI2["Alerts & AI recommendations"]:::ai
  SALES --> ORD[(Orders module)]:::store
  PROD --> INV[(Inventory module)]:::store
  CUST2 --> CU[(Customers module)]:::store
  SHIP --> CR[(Courier module)]:::store
  FIN --> FI[(Finance module)]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 4. Product management

Products are created once and shared live across every sales channel, POS, inventory, orders and analytics — no duplication between systems.

```mermaid
flowchart TD
  A[Owner]:::actor --> B[Products]:::proc
  B --> C[Create product]:::proc
  C --> D["Product information<br/>name, price, SKU, barcode, QR, variants"]:::proc
  D --> E[Product created]:::proc
  E --> F[Inventory assigned]:::store
  F --> G{{Shared across channels}}:::dec
  G --> H1[Website]:::ext
  G --> H2[Facebook / online]:::ext
  G --> H3[POS]:::ext
  G --> H4[Inventory]:::store
  G --> H5[Orders]:::store
  G --> H6[Reports & analytics]:::ai
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 5. Inventory management

Stock moves through defined states and is recalculated in real time as sales land from any channel — for example, a base of 500 units minus 2 Facebook, 3 website and 1 POS sale, plus 1 return, always resolves to a single live available-stock number.

```mermaid
flowchart TD
  subgraph States["Inventory states"]
    S1[Available]:::store
    S2[Reserved]:::store
    S3[Damaged]:::store
    S4[Returned]:::store
    S5[In transit]:::store
    S6[Low stock]:::store
    S7[Out of stock]:::store
  end
  P[Purchase / stock receive]:::proc --> S1
  O[Online order]:::ext --> S2 --> SALE[Sale]:::proc --> DEC[Inventory decrease]:::proc
  POS2[POS sale]:::ext --> DEC
  R[Return]:::proc --> INSP{Inspection}:::dec
  INSP -->|Resellable| S1
  INSP -->|Damaged| S3
  WT[Warehouse transfer]:::proc --> S5
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 6. Multi-warehouse / multi-branch

Each location keeps its own stock ledger; transfers between locations require approval before the source decrements and destination increments.

```mermaid
flowchart TD
  BIZ[Business]:::actor --> W1[Main warehouse]:::store
  BIZ --> W2[Dhaka branch]:::store
  BIZ --> W3[Chittagong branch]:::store
  BIZ --> W4[Physical shop]:::store
  W1 -->|Transfer request| APR{Approval}:::dec
  APR -->|Approved| DEC2[Source stock decrease]:::proc
  DEC2 --> INC2[Destination stock increase]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 7. Omnichannel sales → central order engine

Every channel — Facebook, Messenger, WhatsApp, website, phone, POS, manual entry, API — feeds one standardized order record. There are no separate order systems per channel.

```mermaid
flowchart LR
  FB2[Facebook]:::ext --> CORE[(Central order engine)]:::store
  MSG2[Messenger]:::ext --> CORE
  WA2[WhatsApp]:::ext --> CORE
  WEB2[Website]:::ext --> CORE
  PHONE2[Phone]:::ext --> CORE
  SHOP[Physical shop / POS]:::ext --> CORE
  MAN[Manual order]:::ext --> CORE
  API2[API]:::ext --> CORE
  CORE --> STD["Standardized order<br/>ID, customer, items, price, status, courier, tracking"]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 8. Customer lifecycle & segmentation

Every order updates the customer's profile and rolls up into an automatic segment used across marketing, risk scoring and AI.

```mermaid
flowchart TD
  C1[Customer]:::actor --> C2[Browse / contact business]:::proc
  C2 --> C3[Place order]:::proc
  C3 --> C4[Customer profile created / updated]:::store
  C4 --> C5[Order history updated]:::store
  C5 --> C6[Customer statistics updated]:::store
  C6 --> CLASS{Classification}:::dec
  CLASS --> N1[New]:::proc
  CLASS --> N2[Returning]:::proc
  CLASS --> N3[VIP]:::proc
  CLASS --> N4[Inactive]:::proc
  CLASS --> N5[High-risk COD]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 9. Order processing lifecycle

The full path from a placed order to a completed sale, plus the exception states that can break in at any stage.

```mermaid
flowchart TD
  A1[Order received]:::proc --> A2[Order validation]:::proc
  A2 --> A3[Check product availability]:::proc
  A3 --> A4[Reserve inventory]:::store
  A4 --> A5[Payment verification]:::proc
  A5 --> A6[Order confirmation]:::proc
  A6 --> A7[Picking]:::proc
  A7 --> A8[Packing]:::proc
  A8 --> A9[QR generation]:::proc
  A9 --> A10[QR / product scan]:::proc
  A10 --> A11[Package verification]:::dec
  A11 --> A12[Ready for courier]:::proc
  A12 --> A13[Courier selection]:::proc
  A13 --> A14[Courier booking]:::ext
  A14 --> A15[Tracking number generated]:::store
  A15 --> A16[Courier pickup]:::ext
  A16 --> A17[In transit]:::ext
  A17 --> A18[Out for delivery]:::ext
  A18 --> A19[Delivered]:::ext
  A19 --> A20[Payment / COD settlement]:::proc
  A20 --> A21[Order completed]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

```mermaid
flowchart LR
  E0[Order lifecycle]:::proc -.-> E1[Order cancelled]:::dec
  E0 -.-> E2[Order failed]:::dec
  E0 -.-> E3[Payment failed]:::dec
  E0 -.-> E4[Out of stock]:::dec
  E0 -.-> E5[Customer refused]:::dec
  E0 -.-> E6[Delivery failed]:::dec
  E0 -.-> E7[Return requested]:::dec
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 10. QR packaging workflow

Every package gets a unique QR that a warehouse worker scans, then verifies against scanned product barcodes before it is cleared for courier handoff.

```mermaid
flowchart TD
  Q1[Order confirmed]:::proc --> Q2[Generate unique package QR]:::proc
  Q2 --> Q3[Warehouse worker opens packing task]:::actor
  Q3 --> Q4[Scan QR]:::proc
  Q4 --> Q5["System displays order details<br/>customer, address, items, COD amount"]:::store
  Q5 --> Q6[Worker scans product barcode / QR]:::proc
  Q6 --> Q7{Expected vs scanned match?}:::dec
  Q7 -->|Correct| Q8[Package verified]:::proc
  Q8 --> Q9[Packaging completed]:::proc
  Q9 --> Q10[Ready for courier]:::proc
  Q7 -->|Incorrect| Q11[Package mismatch alert]:::dec
  Q11 --> Q12[Fix package]:::proc
  Q12 --> Q6
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 11. Payment workflow

Online payments settle through a gateway immediately; COD collects cash at delivery and settles back through the courier.

```mermaid
flowchart TD
  P1[Order]:::proc --> P2{Payment method}:::dec
  P2 -->|Online payment| P3[Payment gateway]:::ext
  P3 --> P4[Payment verification]:::proc
  P4 --> P5[Paid]:::proc
  P2 -->|COD| P6[Calculate COD amount]:::proc
  P6 --> P7[Courier delivery]:::ext
  P7 --> P8[Cash collected]:::proc
  P8 --> P9[Courier settlement]:::ext
  P9 --> P10[Business account]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 12. Bangladesh courier layer

A courier abstraction layer compares multiple providers on price, speed and success rate, then recommends one for owner approval before booking.

```mermaid
flowchart TD
  CO1[BusinessOS]:::proc --> CO2[(Courier service layer)]:::store
  CO2 --> CA[Courier A]:::ext
  CO2 --> CB[Courier B]:::ext
  CO2 --> CC[Courier C]:::ext
  PK[Package ready]:::proc --> GET[Get courier options]:::proc
  GET --> CMP{"Compare couriers<br/>price, time, success rate"}:::dec
  CMP --> REC[Recommended courier]:::ai
  REC --> OA[Owner approval]:::actor
  OA --> CS[Create shipment]:::proc
  CS --> CAPI[Courier API]:::ext
  CAPI --> TRK[Tracking number]:::store
  TRK --> PU[Pickup]:::ext
  PU --> DEL[Delivery]:::ext
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 13. Return workflow & policy

Approved returns are inspected and routed back into available or damaged stock; every return updates order, inventory, customer, finance and analytics together.

```mermaid
flowchart TD
  R1[Customer]:::actor --> R2[Return request]:::proc
  R2 --> R3[Return reason]:::proc
  R3 --> R4{Merchant review}:::dec
  R4 -->|Reject| R5[Request rejected]:::proc
  R4 -->|Approve| R6[Courier pickup]:::ext
  R6 --> R7[Return received]:::proc
  R7 --> R8{Product inspection}:::dec
  R8 -->|Resellable| R9[Available inventory]:::store
  R8 -->|Damaged| R10[Damaged inventory]:::store
  R9 --> R11{Refund or exchange}:::dec
  R10 --> R11
  R11 --> R12[Update order, inventory, customer, finance, analytics]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

```mermaid
flowchart TD
  RP1[Owner]:::actor --> RP2[Return policy settings]:::proc
  RP2 --> RP3["Window, exchange, refund, conditions"]:::proc
  RP3 --> RP4[BusinessOS generates return policy]:::ai
  RP4 --> RP5["Displayed on website, product page,<br/>checkout, invoice, order page"]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 14. POS workflow

In-store sales run through the exact same order engine and inventory ledger as online sales — there is no separate POS database.

```mermaid
flowchart TD
  PO1[Customer enters shop]:::actor --> PO2[Cashier]:::actor
  PO2 --> PO3[Barcode scan]:::proc
  PO3 --> PO4[Product added to cart]:::proc
  PO4 --> PO5[Quantity & discount]:::proc
  PO5 --> PO6[Payment]:::proc
  PO6 --> PO7[Invoice]:::proc
  PO7 --> PO8[(Order created in central order engine)]:::store
  PO8 --> PO9[Inventory updated]:::store
  PO9 --> PO10[Customer history updated]:::store
  PO10 --> PO11[Finance & analytics updated]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 15. Supplier & purchase workflow

Low stock automatically triggers a reorder recommendation that the owner approves before it becomes a purchase order.

```mermaid
flowchart TD
  SU1[Inventory monitoring]:::proc --> SU2[Low stock]:::dec
  SU2 --> SU3[Reorder recommendation]:::ai
  SU3 --> SU4[Owner approval]:::actor
  SU4 --> SU5[Purchase order]:::proc
  SU5 --> SU6[Supplier]:::ext
  SU6 --> SU7[Goods received]:::proc
  SU7 --> SU8[Inventory updated]:::store
  SU8 --> SU9[Supplier payment recorded]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 16. Finance workflow

Every cost and revenue stream — sales, product cost, expenses, courier fees, gateway fees, refunds, supplier payments, COD settlements — feeds one financial engine.

```mermaid
flowchart TD
  F1[Sales]:::ext --> FE[(Financial engine)]:::store
  F2[Product costs]:::ext --> FE
  F3[Expenses]:::ext --> FE
  F4[Courier fees]:::ext --> FE
  F5[Payment fees]:::ext --> FE
  F6[Refunds]:::ext --> FE
  F7[Supplier payments]:::ext --> FE
  F8[COD settlements]:::ext --> FE
  FE --> FR[Revenue]:::proc
  FE --> FX[Expenses]:::proc
  FE --> FP[Estimated profit]:::proc
  FP --> FRP[Financial reports]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 17. Employee roles & audit log

Every action is permission-gated by role, and every sensitive change is written to an immutable audit trail.

```mermaid
flowchart TD
  EM1[Owner]:::actor --> EM2[Employees]:::proc
  EM2 --> EM3{Roles}:::dec
  EM3 --> R1b[Manager]:::proc
  EM3 --> R2b[Cashier]:::proc
  EM3 --> R3b[Warehouse worker]:::proc
  EM3 --> R4b[Packing worker]:::proc
  EM3 --> R5b[Accountant]:::proc
  EM3 --> R6b[Marketing manager]:::proc
  EA[Employee action]:::actor --> PC{Permission check}:::dec
  PC -->|Allowed| EX[Execute]:::proc
  PC -->|Denied| DA[Access denied]:::proc
  EX --> AL[(Audit log: user, action, timestamp, old/new value)]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 18. Notification system

A central notification engine fans key events out to owner, employee and customer across in-app, SMS, email and WhatsApp.

```mermaid
flowchart TD
  EV["Order & inventory events<br/>new order, low stock, delivered, refund"]:::proc --> NE[(Notification engine)]:::store
  NE --> ON[Owner notification]:::proc
  NE --> EN[Employee notification]:::proc
  NE --> CN[Customer notification]:::proc
  ON --> CH1[In-app]:::ext
  ON --> CH2[SMS]:::ext
  ON --> CH3[Email]:::ext
  ON --> CH4[WhatsApp]:::ext
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 19. Marketing module

Customer segments drive targeted campaigns, coupons and offers, and every resulting purchase feeds back into analytics.

```mermaid
flowchart TD
  M1[Customer data]:::store --> M2{Segmentation}:::dec
  M2 --> M3[VIP]:::proc
  M2 --> M4[New]:::proc
  M2 --> M5[Inactive]:::proc
  M2 --> M6[Returning]:::proc
  M2 --> M7[High value]:::proc
  M3 --> M8[Marketing campaign]:::ai
  M4 --> M8
  M5 --> M8
  M6 --> M8
  M7 --> M8
  M8 --> M9[Coupon / discount / offer]:::proc
  M9 --> M10[Customer notification]:::ext
  M10 --> M11[Purchase]:::proc
  M11 --> M12[Analytics]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 20. Analytics module

Analytics span sales, product, inventory, customer, courier, returns, finance and channel performance in one engine.

```mermaid
flowchart TB
  AN[Analytics engine]:::store --> AN1[Sales analytics]:::proc
  AN --> AN2[Product analytics]:::proc
  AN --> AN3[Inventory analytics]:::proc
  AN --> AN4[Customer analytics]:::proc
  AN --> AN5[Courier & return analytics]:::proc
  AN --> AN6["Channel analytics<br/>Facebook, website, POS, phone"]:::proc
  AN --> AN7[Finance analytics]:::proc
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 21. AI business engine & assistant

The AI layer reads across orders, products, inventory, customers, courier and finance to power forecasting, risk scoring and a conversational assistant the owner can question directly.

```mermaid
flowchart TD
  D1[Orders]:::store --> AIC[(AI business engine)]:::ai
  D2[Products]:::store --> AIC
  D3[Inventory]:::store --> AIC
  D4[Customers]:::store --> AIC
  D5[Courier]:::store --> AIC
  D6[Finance]:::store --> AIC
  AIC --> F11[Demand forecasting]:::proc
  AIC --> F22[COD risk prediction]:::proc
  AIC --> F33[Courier recommendation]:::proc
  AIC --> F44[Anomaly detection]:::proc
  AIC --> F55[Restocking recommendation]:::proc
  OW[Owner]:::actor --> ASK[AI business assistant]:::ai
  ASK -->|Ask a business question| AIC
  AIC -->|Plain-language answer| OW
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 22. Reporting module

Every module can generate an exportable report in PDF, CSV or Excel.

```mermaid
flowchart LR
  RM[Reporting module]:::proc --> RP1b[Sales report]:::store
  RM --> RP2b[Inventory report]:::store
  RM --> RP3b[Customer report]:::store
  RM --> RP4b[Finance report]:::store
  RM --> RP5b[Employee activity report]:::store
  RP1b --> EXP{Export}:::dec
  EXP --> PDF[PDF]:::ext
  EXP --> CSV[CSV]:::ext
  EXP --> XLS[Excel]:::ext
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 23. Platform admin panel

Platform administrators manage the business of the platform itself — tenants, subscriptions, integrations, system health — without unrestricted access to merchant data.

```mermaid
flowchart TD
  PA[Platform administrator]:::actor --> AD1[Businesses]:::proc
  PA --> AD2[Users & subscriptions]:::proc
  PA --> AD3[Platform revenue]:::proc
  PA --> AD4[Courier & payment integrations]:::proc
  PA --> AD5[System health & security]:::proc
  PA --> AD6[Platform analytics]:::proc
  AD1 -. restricted access .-> MB[(Merchant business data)]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 24. Subscription system

Business type and plan tier together determine feature access and usage limits — products, orders, employees, warehouses, AI usage.

```mermaid
flowchart TD
  SB[Business]:::actor --> SP{Select plan}:::dec
  SP --> SPO[Online]:::proc
  SP --> SPF[Offline]:::proc
  SP --> SPB[Online + offline]:::proc
  SPO --> ST{Plan tier}:::dec
  SPF --> ST
  SPB --> ST
  ST --> TB[Basic]:::proc
  ST --> TP[Professional]:::proc
  ST --> TE[Enterprise]:::proc
  TB --> SPAY[Subscription payment]:::ext
  TP --> SPAY
  TE --> SPAY
  SPAY --> FA[Feature access & usage limits]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 25. Complete data flow

The backbone chain that every transaction updates automatically, end to end.

```mermaid
flowchart LR
  PR[Product]:::store --> IN[Inventory]:::store --> OR[Order]:::store --> CU2[Customer]:::store --> PA2[Payment]:::store --> PK2[Packaging]:::proc --> QR2[QR]:::proc --> CR2[Courier]:::ext --> DL[Delivery]:::ext --> SE[Settlement]:::proc --> FI2[Finance]:::store --> ANL[Analytics]:::store --> AIF[AI]:::ai
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 26. Multi-tenant architecture

Every business operates in a fully isolated workspace, partitioned by tenant ID throughout the stack — Business A can never see Business B's data.

```mermaid
flowchart TD
  PL[Platform]:::store --> BA[Business A]:::proc
  PL --> BB[Business B]:::proc
  PL --> BC[Business C]:::proc
  BA --> BA1["Users, products, orders,<br/>customers, inventory, finance"]:::store
  BB --> BB1["Users, products, orders,<br/>customers, inventory, finance"]:::store
  BC --> BC1["Users, products, orders,<br/>customers, inventory, finance"]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 27. Technical architecture

A modular monolith to start, with clean module boundaries so high-load components — order processing, AI, courier integration — can split into services later.

```mermaid
flowchart TB
  FE2["Frontend<br/>React, Vite, Tailwind CSS"]:::proc --> BE2["Backend<br/>Node.js, NestJS / Express"]:::proc
  BE2 --> DBs[(PostgreSQL)]:::store
  BE2 --> CA2[(Redis cache)]:::store
  BE2 --> ST2[(Object storage)]:::store
  BE2 --> Q2[(Queue / worker jobs)]:::store
  BE2 --> AISV["AI service<br/>Python / FastAPI"]:::ai
  BE2 --> EXT2["External APIs<br/>payment, courier, Meta, SMS/Email"]:::ext
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

## 28. Master flow — order to delivery

The single highlighted flow the whole platform is built around: a customer's intent becomes revenue, inventory truth, and an AI insight, no matter which door they walked in through.

```mermaid
flowchart TD
  X1[Customer]:::actor --> X2["Facebook / website / phone / POS"]:::ext
  X2 --> X3[Central order engine]:::store
  X3 --> X4[Customer validation]:::proc
  X4 --> X5[Inventory check & reservation]:::store
  X5 --> X6[Payment]:::proc
  X6 --> X7[Order confirmation]:::proc
  X7 --> X8[Picking & packaging]:::proc
  X8 --> X9[QR generation & scan verification]:::proc
  X9 --> X10[Courier selection & booking]:::ext
  X10 --> X11["Pickup → in transit → out for delivery"]:::ext
  X11 --> X12[Delivered]:::ext
  X12 --> X13[COD settlement]:::proc
  X13 --> X14["Finance, customer, inventory, analytics updated"]:::store
  X14 --> X15[AI learning & insights]:::ai
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

The offline path runs the same core loop with a shorter front end:

```mermaid
flowchart LR
  Y1[Customer enters shop]:::actor --> Y2[POS]:::ext --> Y3[Barcode scan]:::proc --> Y4[Payment]:::proc --> Y5[Invoice]:::proc --> Y6[Central order engine]:::store --> Y7[Inventory update]:::store --> Y8[Finance]:::store --> Y9[Customer]:::store --> Y10[Analytics]:::store
  classDef actor fill:#1b2740,stroke:#5b8cff,color:#e7ebf3
  classDef proc fill:#221c3d,stroke:#8f7ee8,color:#e7ebf3
  classDef dec fill:#3a2c14,stroke:#f2b84b,color:#e7ebf3
  classDef store fill:#0f2e29,stroke:#3ad0a8,color:#e7ebf3
  classDef ext fill:#3a2019,stroke:#f0846a,color:#e7ebf3
  classDef ai fill:#3a1c2c,stroke:#e26ba0,color:#e7ebf3
```

---

*BusinessOS — architecture & workflow reference · generated diagram document*