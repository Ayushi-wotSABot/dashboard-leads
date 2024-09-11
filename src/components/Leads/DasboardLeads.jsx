import Sidebar from "../Sidebar";
import LeadsSummaryCard from "./LeadsSummaryCard";
import SalesFunnel from "./SalesFunnel";
import LeadSourceTable from "./LeadSourceTable";
import JunkLeadCard from "./JunkLeadCard";
import LeadOwnerCard from "./LeadOwnerCard";
import Top10LeadSources from "./Top10LeadSources";
import Header from "./Header";

const leadSources = [
  {
    name: "Advertisement",
    leadsCreated: 2,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Cold Call",
    leadsCreated: 2,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "External Referral",
    leadsCreated: 1,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Online Store",
    leadsCreated: 2,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Partner",
    leadsCreated: 1,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Seminar Partner",
    leadsCreated: 1,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Web Download",
    leadsCreated: 1,
    converted: 0,
    customers: 0,
    conversionRate: 0,
  },
  {
    name: "Total",
    leadsCreated: 10,
    converted: "-",
    customers: "-",
    conversionRate: 0,
  },
];

const TopLeadSources = [
  { leadOwner: "1. Advertisement", recordCount: 2 },
  { leadOwner: "2. Cold Call", recordCount: 2 },
  { leadOwner: "3. External Referral", recordCount: 2 },
  { leadOwner: "4. Online Store", recordCount: 1 },
  { leadOwner: "5. Partner", recordCount: 1 },
  { leadOwner: "6. Seminar Partner", recordCount: 1 },
  { leadOwner: "7. Web Download", recordCount: 1 },
];

const leadOwners = [
  { name: "Sabu John Bosco", percentage: "100%", recordCount: 10 },
];

const junkLeadSource = []; // Add junk lead sources if available

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* Sidebar */}

        {/* Main Dashboard Content */}
        <div className="relative flex p-8 rounded-2xl ml-28 bg-[#F4F4F4]">
          <div className="absolute flex items-center -left-20 top-28 z-10">
            <Sidebar />
          </div>
          <div className="flex ml-28 space-x-6">
            {/* Column 1: Today's Leads, This Week's Leads, Top Lead Owners */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Today's Leads */}
              {/* This Week's Leads */}
              <LeadsSummaryCard />

              {/* Top Lead Owners */}
              <LeadOwnerCard leadOwners={leadOwners} />
            </div>

            {/* Column 2: Top 10 Lead Sources, Junk Lead by Source */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Top 10 Lead Sources */}
              <Top10LeadSources TopLeadSources={TopLeadSources} />

              {/* Junk Lead by Source */}

              <JunkLeadCard junkLeadSource={junkLeadSource} />
            </div>

            {/* Column 3: Sales Funnel and Lead Source Table */}
            <div className="flex flex-col items-center justify-center">
              {/* Sales Funnel */}
              <div className="w-full">
                <SalesFunnel />
              </div>

              {/* Lead Source Table */}
              <LeadSourceTable leadSources={leadSources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
