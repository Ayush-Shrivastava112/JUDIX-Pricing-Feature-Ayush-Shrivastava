"use client";

import { cn } from "@/utils/cn_tw_merger";
import  Button  from "../components/ui/button";
import { useState } from 'react';

// Reusable SVG icons for features
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-[#30A381] flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9.5 13.5a.75.75 0 0 1-1.168.101l-4.5-5.25a.75.75 0 0 1 1.06-1.06l3.894 4.55L19.559 4.86a.75.75 0 0 1 .357-.234Z"
      clipRule="evenodd"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-red-500 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M6.72 6.72a.75.75 0 0 1 1.06 0L12 10.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L13.06 12l4.22 4.22a.75.75 0 1 1-1.06 1.06L12 13.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L10.94 12 6.72 7.78a.75.75 0 0 1 0-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const pricingData = {
  monthly: [
    {
      name: "LITE",
      price: "149",
      description: "Great for getting started",
      features: [
        { text: "500 case summaries", included: true },
        { text: "30 Advanced searches per month", included: true },
        { text: "100 MB storage for saved research", included: true },
        { text: "1 project (Research Folder )", included: true },
        { text: "7-day research history", included: true },
        { text: "Import shared research", included: false },
        { text: "Team collaboration", included: false },
      ],
      isPopular: false,
    },
    {
      name: "BASIC",
      price: "1249",
      description: "Great for solo-practitioners",
      features: [
        { text: "Unlimited case summaries", included: true },
        { text: "300 Advanced searches per month", included: true },
        { text: "5 GB storage for saved research", included: true },
        { text: "10 projects (Research Folders)", included: true },
        { text: "30-day research history", included: true },
        { text: "Import shared research", included: true },
        { text: "Team collaboration", included: false },
      ],
      isPopular: true,
    },
    {
      name: "PRO",
      price: "3499",
      description: "Most suited for teams and law firms",
      features: [
        { text: "Unlimited case summaries", included: true },
        { text: "Unlimited Advanced searches per month", included: true },
        { text: "30 GB storage for saved research", included: true },
        { text: "50 projects (Research Folders )", included: true },
        { text: "180-day research history", included: true },
        { text: "Import shared research", included: true },
        { text: "Team collaboration", included: true },
      ],
      isPopular: false,
    },
  ],
  yearly: [
    {
      name: "LITE",
      price: "119",
      description: "Great for getting started",
      features: [
        { text: "500 case summaries", included: true },
        { text: "30 Advanced searches per month", included: true },
        { text: "100 MB storage for saved research", included: true },
        { text: "1 project (Research Folder )", included: true },
        { text: "7-day research history", included: true },
        { text: "Import shared research", included: false },
        { text: "Team collaboration", included: false },
      ],
      isPopular: true,
    },
    {
      name: "BASIC",
      price: "999",
      description: "Great for solo-practitioners",
      features: [
        { text: "Unlimited case summaries", included: true },
        { text: "300 Advanced searches per month", included: true },
        { text: "5 GB storage for saved research", included: true },
        { text: "10 projects (Research Folders)", included: true },
        { text: "30-day research history", included: true },
        { text: "Import shared research", included: true },
        { text: "Team collaboration", included: false },
      ],
      isPopular: true,
    },
    {
      name: "PRO",
      price: "2799",
      description: "Most suited for teams and law firms",
      features: [
        { text: "Unlimited case summaries", included: true },
        { text: "Unlimited Advanced searches per month", included: true },
        { text: "30 GB storage for saved research", included: true },
        { text: "50 projects (Research Folders )", included: true },
        { text: "180-day research history", included: true },
        { text: "Import shared research", included: true },
        { text: "Team collaboration", included: true },
      ],
      isPopular: false,
    },
  ],
};

const faqs = [
  {
    question: "What is Judix, and how does it benefit law firms?",
    answer: "Judix simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder."
  },
  {
    question: "What is Judix, and how does it benefit law firms?",
    answer: "Judix simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder."
  },
  {
    question: "What is Judix, and how does it benefit law firms?",
    answer: "Judix simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder."
  },
  {
    question: "What is Judix, and how does it benefit law firms?",
    answer: "Judix simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder."
  },
  {
    question: "What is Judix, and how does it benefit law firms?",
    answer: "Judix simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder."
  },
];

const SocialIcon = ({ d, title }: { d: string; title: string }) => (
  <a href="#" className="text-white hover:text-neutral-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <title>{title}</title>
      <path d={d} />
    </svg>
  </a>
);

export default function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [hourlyValue, setHourlyValue] = useState(3000);
  const [hoursSaved, setHoursSaved] = useState(5);

  const billingHoursValue = hourlyValue * hoursSaved * 4;
  const moneySpent = isMonthly ? Number(pricingData.monthly[2].price) : Number(pricingData.yearly[2].price); 
  const netPotentialSavings = billingHoursValue - moneySpent;

  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-neutral-100 font-manrope">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center space-x-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAb1BMVEX///8KKD4TMEUSL0QeOU3o6+38/Pzz9PVjdoRMYnLZ3uFRZnZdcX/t7/Gapq9qfIqPnackP1M8VGXCys9XbHtxgo+4wcdFXGyFlJ/S2Nzh5Oertb0qRFcxSl1ugI15iZWyu8K9xcs5UWOlsLiJmKL65O4QAAADyUlEQVR4nO2c2XLqOhBFkfGAzWRm7GDCcP7/G69z6+SUAckaoOhN1V7PeeiFLbnVrc5gQAghhBBCCCGEEEIIIYQQQgghb6KYHcfNMF5O9ttMOpZwqvlCddiV0gGFkczVPYeTdFABlMMHj5+nUkvH5Uk60Wm0RGfp0LzIdgaPlr10cB5ML2YPpUbS4TmT9Xp8jkm27PdQai4dohN96+OXo3SQDqS53UOpb+kwraRjFw98k3Tt5oG+Cxu/gxqgM6+Ru4dSM+lozTymiZ9p8u3nodRVOmI9e18PUJPS30OpL+moH5mFeCh1ko77nkAPOJNsP8+jMJOtdOyPnJw/6zcgnhkrx0zrhuFKOmwd54U98nsiSJPM+7OIajKorCfER5NKOmg9M+8NLAY1SZyOiTcmhXTMBq6+DwXWpPZdKbAm3tlwDFsXXsV+JgtYk8ShxNXlkEhHbCLVNxdgTZKqMkVQ+D0UuWN8Uk6a/0MYNuvZVPcXPl9HsaLw9e733pWalmft/HXcpe9XaEm+NbtSdNRsPVe3lHgn0/j9Y3pl1o8qmfGPO+Qiz6Pv3BFpqqHJ0eYh02qwHDoummS26D89iuxXRWP7ebVxrcyrvhE5Wp1dNtSxbuXWuv1B/y6+AceS4kJ7Vkq3o/ufId7L7FbuJXfTa3/er3+3isXyKFTX8mnlqFHPhpoUK2Ne8wZcW4R/ucAm5r61xBiz0NPuoH5puQJtgQxCTDYymaAVf5Ncm93L429yAK2+rbzriEPADtsPlX9LB3ShBJgsMRdKgIk+9RKn8qy9KdiFEmACerUpxGQJWUksAkwwU68QE8z7ZkEmOeLrVYeYxIj5cB3QVVdqDPhQwkwQH0p9CDFRO7ztKwkzUWO43meoiRqhVSaCTYYjsKcSbNK+YFhrJbEXtY1cvpDm+qZPmKhotMU5Pz5l0n5YjisUlydNWpd1iXGG7B8QcyNalyv59OUVJj8Mm/GmFL1Dax8Sc0f2MvDrTE6iHq8zka+3vMYEYUDmFSYIHm7jlP2gDJGlT5rglFncRkNNbKTD7/CMCdY4smcPuwPagHioyQQlBf6H+8hulzGcR5iJzA06G/4mQjcarXjdvmlZgnq0eJlccD28hsIbzKbvL84m0nfirTjetoP3cDTBnRvpsLF74M4k3WA1+RAPqwnqLKWG3uvnH+TRe+MZdSLUwNnUxm4+Yb/qUuvLqTlyXmLg9Fit3yH+awEHvm6O8tEEq+nmxXSWN4tIxYfl5CQdCyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhDzDfwpXMJbuLei5AAAAAElFTkSuQmCC" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-neutral-900">Judix</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-body-sm text-neutral-600">
            <a href="#" className="hover:text-[#30A381]">Product</a>
            <a href="#" className="hover:text-[#30A381]">Pricing</a>
            <a href="#" className="hover:text-[#30A381]">Customers</a>
            <a href="#" className="hover:text-[#30A381]">About</a>
          </div>
          <Button className="bg-[#071b48] text-white">Request a Callback</Button>
        </div>
      </nav>

      {/* Pricing Page Header */}
      <header className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mt-16 lg:mt-32">
        <div className="text-body-sm text-neutral-500 uppercase tracking-widest font-semibold">Pricing</div>
        <h1 className="text-h1 font-bold text-neutral-900"><span className="text-[#30A381]">Smarter Legal Research</span> <br/> at the price of your daily coffee</h1>
        <p className="text-body-lg text-neutral-600">
          Start with 14 days free trial, upgrade when you need more.
        </p>
      </header>

      {/* Monthly/Yearly Toggle and Pricing Cards */}
      <section className="w-full max-w-6xl mt-16 flex flex-col items-center">
        {/* Toggle */}
        <div className="flex bg-neutral-200 p-1 rounded-full text-body-sm font-semibold text-neutral-600">
          <button
            onClick={() => setIsMonthly(true)}
            className={cn(
              "px-6 py-2 rounded-full transition-colors",
              isMonthly ? "bg-white text-[#30A381] shadow-sm" : ""
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={cn(
              "px-6 py-2 rounded-full transition-colors relative",
              !isMonthly ? "bg-white text-[#30A381] shadow-sm" : ""
            )}
          >
            Yearly 20% off
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                SALE
            </div>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
          {(isMonthly ? pricingData.monthly : pricingData.yearly).map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col items-center justify-between p-8 bg-white rounded-xl shadow-lg border border-neutral-300 transition-all duration-300",
                plan.isPopular ? "border-2 border-[#30A381] shadow-2xl" : ""
              )}
            >
              <div className="text-center">
                {plan.isPopular && (
                  <div className="inline-block bg-[#30A381]/10 text-[#30A381] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Popular
                  </div>
                )}
                <h2 className="text-h3 font-semibold text-neutral-900">{plan.name}</h2>
                <p className="text-body-lg text-neutral-600 mt-2">{plan.description}</p>
                <p className="mt-4 text-h1 font-bold text-neutral-900">
                  ₹{plan.price}
                  <span className="text-body-sm font-normal text-neutral-600"> / {isMonthly ? "mo" : "yr"}</span>
                </p>
              </div>
              <ul className="mt-8 space-y-4 text-neutral-600 text-body-md w-full">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? <CheckIcon /> : <CrossIcon />}
                    <span className="ml-2 leading-tight">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full font-bold bg-[#30A381] text-white hover:bg-[#2A9175]">
                {plan.isPopular ? `Level Up with ${plan.name}` : `Get Started with ${plan.name}`}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Add-on Card and Enterprise CTA */}
      <section className="w-full max-w-6xl mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add-on Card */}
        <div className="p-8 bg-white border border-[#30A381] rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-h3 font-semibold text-[#000000]">Ask your research queries directly on <span className="text-[#30A381]">WhatsApp</span></h3>
            <p className="mt-2 text-body-md text-neutral-600">
              Instant legal research on the go. Perfect for when you're away from your desk, in transit, or need quick clarity. Uses your existing usage quota.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-600 text-body-sm">
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Verified answers with citations</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Works with all plans</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Secure & seamless</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <p className="text-body-sm font-normal text-neutral-600">
              Save 50%
            </p>
            <p className="text-h2 font-bold text-neutral-900">
              ₹49 <span className="text-neutral-500 line-through text-body-sm font-normal">₹99</span>
            </p>
            <Button className="mt-2 w-full font-bold bg-[#30A381] text-white hover:bg-[#2A9175]">
              Add to Plan
            </Button>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="p-8 bg-white border border-neutral-300 rounded-xl shadow-md flex flex-col justify-center items-center text-center">
          <p className="mt-2 text-body-md text-neutral-600">
            ENTERPRISES TEAMS
          </p>
          <h3 className="text-h3 font-semibold text-neutral-900">Want custom pricing?</h3>
          <p className="mt-2 text-body-md text-neutral-600">
            Structure your plan according to your workload
          </p>
          <Button className="mt-4 w-full flex items-center justify-center font-bold bg-[#25528d] text-white hover:bg-[#26428d]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Schedule a meeting
          </Button>
        </div>
      </section>

      {/* Potential Savings Calculator */}
      <section className="w-full max-w-6xl mt-16 p-8 bg-white border border-[#30A381] rounded-xl shadow-md text-center">
        <h2 className="text-h2 font-semibold text-[#30A381]">Your Potential Savings</h2>
        <p className="mt-2 text-body-md text-neutral-600">
          Enter your hourly rate and research time to calculate your potential savings.
        </p>
        <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 text-left">
            <label htmlFor="hourly" className="text-body-sm text-neutral-600">Your hourly value</label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-body-lg font-bold">₹</span>
              <input
                type="number"
                id="hourly"
                value={hourlyValue}
                onChange={(e) => setHourlyValue(Number(e.target.value))}
                className="w-full pl-8 p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30A381]"
              />
            </div>
          </div>
          <div className="flex-1 text-left">
            <label htmlFor="hours" className="text-body-sm text-neutral-600">Number of hours saved per week</label>
            <input
              type="number"
              id="hours"
              value={hoursSaved}
              onChange={(e) => setHoursSaved(Number(e.target.value))}
              className="mt-1 w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30A381]"
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center p-4 bg-[#69C4B7] rounded-md text-neutral-900">
            <span className="text-body-sm font-medium">Billable hours value per month</span>
            <span className="text-body-lg font-semibold">₹{billingHoursValue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#69C4B7] rounded-md text-neutral-900">
            <span className="text-body-sm font-medium">Money spent on Judix per month</span>
            <span className="text-body-lg font-semibold">₹{isMonthly ? pricingData.monthly[2].price : pricingData.yearly[2].price}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#54B6A6] rounded-md mt-4 text-neutral-900">
            <span className="text-body-md font-bold">Net Potential Savings / month</span>
            <span className="text-h3 font-bold">₹{netPotentialSavings.toLocaleString()}</span>
          </div>
        </div>
        <p className="mt-6 text-body-sm text-neutral-600">
          On an average, every lawyer saves approx {hoursSaved} hours of billable hours on legal research while using Judix
        </p>
      </section>

      {/* Have any questions section */}
      <section className="w-full max-w-6xl mt-16 text-center">
  <p className="text-body-md text-neutral-600">Have any questions? Want to discuss?</p>
  <div className="flex justify-center mt-4">
    <Button className="w-fit flex items-center justify-center font-bold bg-[#071b48] text-white hover:bg-[#050a44]">
      Request a Callback
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25V17.25m0 0-3.6-3.6m3.6 3.6-3.6 3.6m-13.5-9h6" />
      </svg>
    </Button>
  </div>
</section>

      {/* Trusted by Section */}
      <div className="w-full max-w-6xl text-center text-body-sm font-bold text-neutral-500 my-12">
        TRUSTED BY OVER 1000 LAWYERS
      </div>

      {/* FAQ Section */}
      <section className="w-full max-w-6xl mt-16 mb-16">
        <h2 className="text-h2 font-semibold text-neutral-900">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 pb-4 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <span className="text-body-md font-semibold text-neutral-800">{faq.question}</span>
                <span className="text-neutral-500 text-3xl transition-transform duration-300 transform">
                  {openFAQ === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openFAQ === index ? "max-h-96 mt-4" : "max-h-0"
                )}
              >
                <p className="text-body-sm text-neutral-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#071b48] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-h3 font-bold text-white">Judix</h2>
            <p className="text-body-sm mt-2 text-white">Simplifying Legal Complexity with AI</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-body-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-body-sm text-white">
              <li>Legal Research</li>
              <li>AI Workspace</li>
              <li>Document Intelligence</li>
              <li>Case Management</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-body-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 3.53a6.5 6.5 0 0 1-1.859.506 3.861 3.861 0 0 0 1.696-1.78a8.318 8.318 0 0 1-2.008.767 4.092 4.092 0 0 0-7.005 3.754A11.666 11.666 0 0 1 .494 2.251a3.86 3.86 0 0 0 1.196 5.148 3.868 3.868 0 0 1-1.758-.485v.048a4.116 4.116 0 0 0 3.292 4.025 3.905 3.905 0 0 1-1.75.066 4.135 4.135 0 0 0 3.861 2.871A8.257 8.257 0 0 1 0 14.28a11.637 11.637 0 0 0 6.294 1.841c7.55 0 11.693-6.257 11.693-11.693V4.12A8.349 8.349 0 0 0 16 3.53Z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542V13.394h2.401zm-1.217-8.153c.801 0 1.408-.621 1.408-1.488s-.607-1.488-1.408-1.488c-.8 0-1.408.621-1.408 1.488s.607 1.488 1.408 1.488zM14.99 13.394V9.691c0-.629-.02-1.432-.824-2.028-.758-.574-1.764-.81-2.9-.81-1.226 0-2.186.417-2.766.958V6.169h-2.402s.033 6.643 0 7.225h2.402V9.654c0-.28.016-.575.101-.774.204-.478.744-.972 1.61-1.168.868-.202 1.83-.005 2.115.617V13.394h2.402z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14.1 3.531c-.13-.081-.302-.122-.489-.122H2.398c-.187 0-.358.04-.49.122-.13.08-.246.21-.328.375-.081.166-.123.376-.123.633v8.948c0 .257.042.467.123.633.082.165.198.295.328.375.131.082.302.122.489.122h11.214c.187 0 .358-.04.489-.122.13-.08.246-.21.328-.375.081-.166.123-.376.123-.633V4.532c0-.257-.042-.467-.123-.633-.082-.165-.198-.295-.328-.375zM12 11.25V8.5h1V11.25H12zM8.5 11.25V8.5h1V11.25H8.5zM5 11.25V8.5h1V11.25H5zM2.5 8.5h-.001V4.5h.001v4zM13.5 8.5h.001V4.5h-.001v4zM14 4.5v-.001h-2.5V4.5H14zm0 6.75h-1V8.5h1v2.75zm-1.5-.001h-1V8.5h1v2.75zM10.5 8.5h1V4.5h-1v4zM8.5 8.5h1V4.5h-1v4zM5 8.5h1V4.5h-1v4zM4.5 4.5h-2V8.5h2V4.5zM4 4.5V4.5h2V4.5H4zM2.5 11.25V8.5h1V11.25H2.5zM12 4.5h2v-.001h-2V4.5zM13 11.25h-2.5V8.5h2.5v2.75zm-3.5 0h-2.5V8.5h2.5v2.75zM8.5 11.25h-2.5V8.5h2.5v2.75zM5 11.25h-2.5V8.5h2.5v2.75zM2.5 8.5v-.001h-2V8.5h2zM2.5 11.25h.001V8.5h-.001v2.75z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-body-lg font-semibold mb-4 text-white">Request a Callback</h3>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#30A381]"
              />
              <Button className="mt-4 w-full bg-[#30A381] text-white hover:bg-[#2A9175]">Join us today !!</Button>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-white text-body-sm">
          Judix Labs © 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
