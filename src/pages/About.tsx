import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Coins,
  Eye,
  Globe2,
  Handshake,
  Leaf,
  Network,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Sprout,
  Truck,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoUrl from "@/assets/agritrust-logo.png";

const processSteps = [
  {
    step: "01",
    title: "Register a Batch",
    description:
      "Producers record product details, photos, location data, and harvest metadata before the batch enters the supply chain.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Anchor Proof on Hedera",
    description:
      "Traceability events are written to Hedera so important batch history can be verified without relying on a single private database.",
    icon: Network,
  },
  {
    step: "03",
    title: "Verify with a Scan",
    description:
      "Consumers, distributors, and buyers can scan a QR code to review origin, tokenization status, and authenticity signals.",
    icon: ScanSearch,
  },
];

const benefits = [
  {
    title: "Producers",
    description:
      "Protect authentic harvests, prove origin, and build stronger access to premium buyers who value transparency.",
    icon: Users,
    items: ["Authenticity records", "Brand protection", "Better market trust"],
  },
  {
    title: "Consumers",
    description:
      "See where food comes from, understand its journey, and make purchases with more confidence.",
    icon: ShieldCheck,
    items: ["Transparent product history", "Fraud risk visibility", "Instant QR verification"],
  },
  {
    title: "Distributors",
    description:
      "Reduce sourcing risk, strengthen compliance workflows, and share verifiable proof with downstream partners.",
    icon: Truck,
    items: ["Supply chain confidence", "Audit-ready records", "Differentiated inventory"],
  },
];

const technology = [
  {
    title: "Hedera Consensus Service",
    description:
      "Creates tamper-resistant event logs for supply chain milestones, making provenance easier to audit across organizations.",
    icon: ShieldCheck,
  },
  {
    title: "Hedera Token Service",
    description:
      "Represents agricultural batches with digital certificates that can be tied to QR verification and ownership records.",
    icon: Coins,
  },
  {
    title: "AI Risk Intelligence",
    description:
      "Helps review batch data, summarize provenance, detect suspicious patterns, and make traceability insights easier to understand.",
    icon: Brain,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About | AgroDex</title>
        <meta
          name="description"
          content="Learn how AgroDex uses Hedera blockchain and AI to fight food fraud and improve agricultural traceability."
        />
      </Helmet>
      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-background border-b border-gray-100 dark:border-slate-800">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
              <motion.div
                className="space-y-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-bold">
                  <Leaf className="h-4 w-4" />
                  About AgroDex
                </div>
                <div className="space-y-5">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Building trusted food supply chains with{" "}
                    <span className="text-emerald-600">blockchain and AI</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                    AgroDex is an agricultural traceability platform that helps producers,
                    consumers, and distributors verify product origin, reduce food fraud,
                    and create confidence from farm registration to final purchase.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7"
                    >
                      Register a Batch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/verify" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 font-bold px-7"
                    >
                      Verify a Product
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-emerald-100 dark:border-emerald-950/30 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 shadow-xl"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                <div className="flex items-center gap-4 border-b border-gray-100 dark:border-slate-800 pb-6">
                  <img
                    src={logoUrl}
                    alt="AgroDex logo"
                    className="h-16 w-16 rounded-xl bg-white dark:bg-slate-950 p-2 shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      Traceability Network
                    </p>
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                      Farm to verified proof
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    { label: "Origin records", icon: Globe2 },
                    { label: "Fraud signals", icon: ShieldAlert },
                    { label: "AI summaries", icon: Brain },
                    { label: "Stakeholder trust", icon: Handshake },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-950/60 p-4"
                    >
                      <div className="rounded-lg bg-emerald-100 dark:bg-emerald-950/50 p-2">
                        <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="font-semibold text-gray-800 dark:text-slate-200">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              <div className="space-y-5">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  What is AgroDex?
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                  A shared source of truth for agricultural products
                </h2>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  AgroDex combines batch registration, QR verification, Hedera-backed
                  proof, and AI-assisted risk intelligence so agricultural products can
                  carry verifiable history as they move through the market.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Mission",
                    text: "Make authentic agricultural products easier to prove, discover, and trust.",
                    icon: Leaf,
                  },
                  {
                    title: "Goals",
                    text: "Improve traceability, reduce fraud, support honest producers, and give buyers clearer information.",
                    icon: Eye,
                  },
                ].map(({ title, text, icon: Icon }) => (
                  <Card key={title} className="h-full border-gray-100 dark:border-slate-800">
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        {text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/10 dark:to-orange-950/10 border-y border-red-100/70 dark:border-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-bold">
                <ShieldAlert className="h-4 w-4" />
                The problem we solve
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                Food fraud breaks trust across the entire supply chain
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                Mislabeling, unverifiable origin claims, incomplete records, and opaque
                handoffs can hurt consumers and honest producers alike. AgroDex helps turn
                scattered supply chain information into verifiable product history.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                  AgroDex follows the batch from registration to verification with a
                  practical workflow for real agricultural operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {processSteps.map(({ step, title, description, icon: Icon }) => (
                  <Card key={step} className="h-full border-gray-100 dark:border-slate-800">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/50">
                          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-4xl font-extrabold text-emerald-100 dark:text-emerald-950/40">
                          {step}
                        </span>
                      </div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-slate-950 dark:to-background border-y border-gray-100 dark:border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Hedera + AI Technology
                </h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Hedera provides verifiable infrastructure for supply chain proof, while AI
                  helps interpret data and surface traceability risks faster.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technology.map(({ title, description, icon: Icon }) => (
                  <Card key={title} className="h-full border-gray-100 dark:border-slate-800">
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Benefits for Every Stakeholder
                </h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                  AgroDex is designed for the people who grow, move, sell, and buy food.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map(({ title, description, icon: Icon, items }) => (
                  <Card key={title} className="h-full border-gray-100 dark:border-slate-800">
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/50">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-gray-900 dark:text-white">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        {description}
                      </p>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-gray-700 dark:text-slate-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Mission & Vision
              </h2>
              <p className="text-lg sm:text-xl text-emerald-50 leading-relaxed">
                AgroDex exists to make trustworthy agricultural commerce easier. Our
                vision is a food ecosystem where product claims can be checked, honest
                producers are rewarded, and every stakeholder can participate in a more
                transparent market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-gray-100 font-bold px-8"
                  >
                    Start Tracing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-bold px-8"
                  >
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
