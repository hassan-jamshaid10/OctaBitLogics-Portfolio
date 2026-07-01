"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function DataFlowPage() {
  return (
    <ProjectDetailPage
      category="Data Engineering"
      name="DataFlow"
      tagline="Real-time financial transaction pipeline 4M+ events per day, sub-800ms end-to-end latency."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=90&auto=format&fit=crop"
      description="DataFlow is a high-throughput, fault-tolerant streaming data platform built for a leading fintech company processing over 4 million financial transactions daily. The system replaced a legacy nightly batch pipeline that caused 4-hour delays in fraud detection signals, missed regulatory reporting windows, and an inability to act on customer behaviour in real time. The new architecture delivers end-to-end latency under 800ms from event ingestion to warehouse availability."
      metrics={[
        { value: "4M+",   label: "Events per day" },
        { value: "<800ms", label: "End-to-end latency" },
        { value: "99.99%", label: "Pipeline uptime" },
        { value: "4hrs→",  label: "Fraud signal delay eliminated" },
      ]}
      tech={[
        { name: "Apache Kafka",  icon: "devicon-apachekafka-original",    color: "#231F20" },
        { name: "Apache Spark",  icon: "devicon-apachespark-original",    color: "#E25A1C" },
        { name: "dbt",           icon: "devicon-python-plain",            color: "#FF694B" },
        { name: "Snowflake",     icon: "devicon-postgresql-plain",        color: "#29B5E8" },
        { name: "Airflow",       icon: "devicon-python-plain",            color: "#017CEE" },
        { name: "Python",        icon: "devicon-python-plain",            color: "#3776AB" },
        { name: "Terraform",     icon: "devicon-terraform-plain",         color: "#7B42BC" },
        { name: "AWS",           icon: "devicon-amazonwebservices-plain",  color: "#FF9900" },
      ]}
      features={[
        { icon: "⚡", title: "Kafka Streaming Ingestion",      detail: "A 24-partition Kafka cluster ingests 50,000+ events per second from payment gateways, ATMs, mobile wallets, and card networks with guaranteed exactly-once delivery semantics." },
        { icon: "🔄", title: "Spark Structured Streaming",     detail: "Apache Spark Structured Streaming applies multi-stage enrichment, PII tokenisation, schema validation, and deduplication within 400ms feeding the fraud model before transactions fully settle." },
        { icon: "🏛️", title: "Snowflake Data Warehouse",       detail: "Validated events land in Snowflake through micro-batch COPY commands. dbt models apply business logic across 60+ transformation layers with full column-level lineage tracked in the data catalogue." },
        { icon: "🔁", title: "Airflow Orchestration",          detail: "DAGs manage scheduled aggregations, regulatory report generation, SLA enforcement, and automated backfill operations. PagerDuty integration triggers on-call alerts within 2 minutes of any degradation." },
        { icon: "🛡️", title: "Data Quality & Observability",   detail: "Great Expectations data quality checks run on every micro-batch. Monte Carlo monitors freshness, volume, and schema drift across 400+ tables catching anomalies before they reach downstream consumers." },
        { icon: "📊", title: "Real-Time Fraud Signals",        detail: "Streaming aggregations compute velocity features, rolling averages, and behavioural baselines that the fraud ML model consumes within 800ms of transaction initiation cutting false negatives by 34%." },
      ]}
      challenge="A legacy nightly batch pipeline processed all financial transactions in a single overnight job, producing fraud detection signals 4 hours after the fact, missing intraday regulatory reporting windows, and leaving the data team with no ability to act on real-time customer behaviour."
      solution="A cloud-native streaming architecture built on Kafka, Spark Structured Streaming, and Snowflake with dbt handling transformation logic and Airflow managing orchestration, SLA monitoring, and automated recovery delivering sub-second data freshness at fintech scale."
      outcome="Fraud detection signals now arrive within 800ms of transaction initiation, cutting fraud losses by 22% in the first quarter post-launch. Regulatory reports are generated intraday without manual intervention, and the data team ships new analytical models in days rather than weeks."
    />
  );
}
