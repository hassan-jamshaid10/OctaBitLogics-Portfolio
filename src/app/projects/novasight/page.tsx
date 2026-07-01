"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function NovaSightPage() {
  return (
    <ProjectDetailPage
      category="Data Engineering"
      name="NovaSight"
      tagline="Unified retail data lakehouse consolidating 200+ stores into a single governed platform."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90&auto=format&fit=crop"
      description="NovaSight is a cloud-native data lakehouse built on GCP for a national retail chain operating 200+ physical stores alongside three e-commerce channels. Siloed data across incompatible POS systems, ERP modules, and loyalty platforms made real-time inventory visibility impossible  resulting in 18% overstock rates, chronic out-of-stock events during peak demand, and customer analytics that were always 48 hours stale. The new platform consolidates every data source into a governed, query-optimised lakehouse powering same-day decisions."
      metrics={[
        { value: "200+",  label: "Stores unified" },
        { value: "15TB",  label: "Data under management" },
        { value: "48hr→", label: "Analytics delay eliminated" },
        { value: "18%↓",  label: "Overstock rate reduction" },
      ]}
      tech={[
        { name: "Apache Flink",  icon: "devicon-apachekafka-original",      color: "#E6526F" },
        { name: "Delta Lake",    icon: "devicon-apachespark-original",      color: "#00ADD4" },
        { name: "dbt",           icon: "devicon-python-plain",              color: "#FF694B" },
        { name: "BigQuery",      icon: "devicon-googlecloud-plain",         color: "#4285F4" },
        { name: "GCP",           icon: "devicon-googlecloud-plain",         color: "#4285F4" },
        { name: "Terraform",     icon: "devicon-terraform-plain",           color: "#7B42BC" },
        { name: "Looker",        icon: "devicon-python-plain",              color: "#5F6368" },
        { name: "Python",        icon: "devicon-python-plain",              color: "#3776AB" },
      ]}
      features={[
        { icon: "🔗", title: "CDC Multi-Source Ingestion",     detail: "Apache Flink Change Data Capture pipelines stream events from 200+ store POS systems (4 different vendors), 3 e-commerce platforms, and 12 ERP modules eliminating overnight batch reconciliation entirely." },
        { icon: "🏔️", title: "Delta Lake Lakehouse on GCS",   detail: "An open-format Delta Lake on Google Cloud Storage provides ACID transactions, time-travel queries for up to 30 days, and schema evolution without breaking downstream consumers across 15TB of retail data." },
        { icon: "🔧", title: "dbt Transformation Layer",       detail: "250+ dbt models implement business logic across raw, staging, intermediate, and mart layers. Column-level lineage, automated testing, and data documentation are generated on every deployment." },
        { icon: "📈", title: "BigQuery Semantic Layer",        detail: "Materialised BigQuery views expose business-ready tables to Looker dashboards and direct SQL consumers. Query acceleration through BI Engine reduces dashboard load times from 40 seconds to under 3 seconds." },
        { icon: "🏪", title: "Real-Time Inventory Signals",    detail: "Flink streaming aggregations compute store-level stock positions and replenishment triggers within 90 seconds of a sale giving supply chain teams actionable signals before shelves empty during peak demand." },
        { icon: "🔐", title: "Data Governance & Access Control", detail: "BigQuery column-level security, GCP IAM roles, and a centralised data catalogue enforce PII protection, role-based access, and GDPR compliance across all 200+ data consumers without manual provisioning." },
      ]}
      challenge="Data lived in 12 incompatible systems across 200+ stores with no unified view. Inventory decisions were based on 48-hour-old exports, causing 18% overstock across slow-moving SKUs while popular items sold out during peak periods. Customer analytics required 3-day manual ETL runs."
      solution="A GCP-native data lakehouse using Apache Flink for real-time CDC ingestion, Delta Lake for open-format ACID storage, dbt for governed transformations, and BigQuery as the analytical serving layer with Looker providing self-serve access to unified data for every business team."
      outcome="Merchandising teams now make restocking decisions on same-day data. Overstock rates dropped 18% in the first six months as demand signals became visible before inventory built up. Customer segmentation that previously took 3 days runs in 4 hours, enabling personalised campaigns at scale."
    />
  );
}
