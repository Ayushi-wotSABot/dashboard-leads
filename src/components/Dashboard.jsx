import Sidebar from './Sidebar';
import LeadsSummaryCard from './LeadsSummaryCard';
import SalesFunnel from './SalesFunnel';
import LeadSourceTable from './LeadSourceTable';
import JunkLeadCard from './JunkLeadCard';
import LeadOwnerCard from './LeadOwnerCard';
import Top10LeadSources from './Top10LeadSources';

const leadSources = [
  { name: 'Advertisement', leadsCreated: 2, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Cold Call', leadsCreated: 2, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'External Referral', leadsCreated: 1, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Online Store', leadsCreated: 2, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Partner', leadsCreated: 1, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Seminar Partner', leadsCreated: 1, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Web Download', leadsCreated: 1, converted: 0, customers: 0, conversionRate: 0 },
  { name: 'Total', leadsCreated: 10, converted: "-", customers: "-", conversionRate: 0 },
];

const topls = [
  { leadOwner: '1. Advertisement', recordCount: 2 },
  { leadOwner: '2. Cold Call', recordCount: 2 },
  { leadOwner: '3. External Referral', recordCount: 2 },
  { leadOwner: '4. Online Store', recordCount: 1 },
  { leadOwner: '5. Partner', recordCount: 1 },
  { leadOwner: '6. Seminar Partner', recordCount: 1 },
  { leadOwner: '7. Web Download', recordCount: 1 },
];

const loc = [
  { leadOwner: 'Sabu John Bosco', recordCount: 100 }
];

const junkLeadSource = []; // Add junk lead sources if available

const Dashboard = () => {
  return (
    <div className="flex ml-8 mt-8 border border-gray-100 bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex space-x-4">
          
          {/* Column 1: Today's Leads, This Week's Leads, Top Lead Owners */}
          <div className="flex flex-col space-y-4 w-72">
            {/* Today's Leads */}
            <LeadsSummaryCard
              title="TODAY'S LEADS"
              leadsCount={65}
              progress={70}
              progressLabel="70%"
            />
            
            {/* This Week's Leads */}
            <LeadsSummaryCard
              title="THIS WEEK'S LEADS"
              leadsCount={95}
              progress={80}
              progressLabel="80%"
              circularProgress={true} 
            />
            
            {/* Top Lead Owners */}
            <LeadOwnerCard loc={loc} />
          </div>

          {/* Column 2: Top 10 Lead Sources, Junk Lead by Source */}
          <div className="flex flex-col space-y-4 w-72 ">
            {/* Top 10 Lead Sources */}
            <Top10LeadSources topls={topls} />

            {/* Junk Lead by Source */}
            <div className="p-4 rounded-lg shadow-lg bg-blue-50 w-full ">
              <JunkLeadCard junkLeadSource={junkLeadSource} />
            </div>
          </div>

          {/* Column 3: Sales Funnel and Lead Source Table */}
          <div className="flex flex-col" style={{ marginLeft: '40px' }}> 
            {/* Sales Funnel */}
            <SalesFunnel />

            {/* Lead Source Table */}
            <LeadSourceTable leadSources={leadSources} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
