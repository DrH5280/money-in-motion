"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

const C={slate:"#1C1F2E",mid:"#252839",ivory:"#F5F0E8",dark:"#EDE7DC",teal:"#00D4B4",green:"#2ECC71",red:"#E05252"};
const TF="rgba(0,212,180,0.11)";
const GF="rgba(46,204,113,0.10)";
const RF="rgba(224,82,82,0.10)";

var GL={
  "accounting":"The system for tracking, recording, and reporting all financial activity in a business — turning transactions into information you can act on.",
  "accrual accounting":"Records revenue when earned and expenses when incurred, regardless of when cash actually moves.",
  "aicpa":"American Institute of CPAs — sets ethical standards, professional guidelines, and CPA exam requirements.",
  "bookkeeper":"A person who handles daily transaction recording — the foundation of accurate financial records.",
  "bookkeeping":"The day-to-day recording of every financial transaction.",
  "cash basis accounting":"Records transactions only when cash physically changes hands.",
  "cfo":"Chief Financial Officer — senior executive managing company finances and strategy.",
  "chart of accounts":"An organized master list of every account a business uses to record transactions.",
  "cpa":"Certified Public Accountant — a licensed professional who passed rigorous state exams.",
  "credit":"An entry on the right side of an account — part of every transaction in double-entry accounting.",
  "debit":"An entry on the left side of an account — part of every transaction in double-entry accounting.",
  "double-entry accounting":"Every transaction affects at least two accounts — always one debit and one credit.",
  "expenses":"Costs incurred to run the business and generate revenue.",
  "financial statements":"Formal reports summarizing a business financial activity — P&L, Balance Sheet, Cash Flow.",
  "forensic accountant":"Investigates financial records for fraud or legal disputes.",
  "gaap":"Generally Accepted Accounting Principles — the standard rules for financial reporting in the U.S.",
  "general ledger":"The master record of all financial accounts and transactions for a business.",
  "gross profit":"Revenue minus cost of goods sold — earnings before operating expenses.",
  "journal entry":"The formal record of a transaction, showing which accounts are debited and credited.",
  "loss":"What results when expenses exceed revenue.",
  "net income":"The bottom line: revenue minus all costs and expenses.",
  "overhead":"Ongoing business costs not tied to a specific project.",
  "profit":"What remains after subtracting all expenses from revenue. Also called net income.",
  "revenue":"Total money earned from selling products or services before any costs are subtracted.",
  "tax accountant":"Specialist in tax compliance and strategy.",
  "transaction":"Any financial event that changes the business financial position.",
  "1031 exchange":"An IRS provision allowing a real estate investor to defer capital gains taxes by reinvesting sale proceeds into a like-kind property.",
  "accounting equation":"The foundational rule: Assets = Liabilities + Equity. Every transaction keeps this balanced.",
  "accounts payable":"Money owed to vendors for goods or services already received.",
  "accounts receivable":"Money owed to the business by customers who haven't paid yet.",
  "accounting":"The system for tracking, recording, and reporting all financial activity in a business — turning transactions into information you can act on.",
  "accrual accounting":"Records revenue when earned and expenses when incurred, regardless of when cash moves.",
  "acos":"Advertising Cost of Sales — PPC spend divided by the revenue those ads generated. A key Amazon seller metric.",
  "amazon fba":"Fulfillment by Amazon — a service where Amazon stores, picks, packs, and ships a seller's inventory. FBA fees are a major cost.",
  "balance sheet":"A financial statement showing a business's assets, liabilities, and equity at a single point in time — a snapshot, not a movie.",
  "balance sheet":"A snapshot of what a business owns, owes, and is worth at a single point in time.",
  "bank reconciliation":"The process of matching transactions in your accounting software to your actual bank statements, catching errors and ensuring records are accurate.",
  "basis":"The original cost of an asset, used to calculate gain or loss when it's sold. In real estate, basis includes purchase price plus capital improvements.",
  "bonus depreciation":"An IRS provision allowing businesses to immediately deduct a large percentage of a qualifying asset's cost in the year of purchase.",
  "bookkeeper":"A person who handles the daily recording of financial transactions. Essential for keeping records current and accurate.",
  "capital gains":"Profit from selling an asset held for investment — taxed at different rates than ordinary income.",
  "capital gains":"Profit from selling an asset held for investment — taxed differently than ordinary income. Long-term (held 12+ months) rates are lower.",
  "cash flow statement":"Shows actual cash movement — operating, investing, and financing activities — over a period of time.",
  "cash flow":"The movement of money into and out of a business over time.",
  "chart of accounts":"The master list of every account a business uses to record transactions — the filing system of the entire business.",
  "class tracking":"A QuickBooks feature that allows transactions to be tagged to a specific project, property, or business unit — enabling project-level reporting.",
  "cloud accounting":"Accounting software hosted on the internet rather than on a local computer — accessible from any device, automatically backed up, and often integrable with other tools.",
  "construction loan":"A short-term loan funding a build, drawn in stages as work progresses.",
  "cost of goods sold":"The direct costs of producing what was sold. Abbreviated COGS.",
  "cost of goods sold":"The direct costs of producing what was sold. For Amazon sellers: product cost, platform fees, and direct fulfillment costs. Abbreviated COGS.",
  "cost segregation":"A tax study that breaks a real estate property into its component parts, allowing accelerated depreciation on certain elements.",
  "cpa":"Certified Public Accountant. A licensed professional who analyzes records, prepares financial statements, advises on tax strategy, and signs off on audited financials.",
  "current assets":"Assets expected to convert to cash or be used within one year.",
  "current liabilities":"Obligations due within one year.",
  "current ratio":"Current assets divided by current liabilities — a measure of short-term liquidity.",
  "current ratio":"Current assets divided by current liabilities. Above 1.0 means current assets exceed near-term obligations.",
  "debt-to-equity ratio":"Total liabilities divided by total equity. Shows how much of the business is financed by debt vs. owner capital.",
  "deduction":"An expense that reduces taxable income — the lower your taxable income, the lower your tax bill.",
  "depreciation":"The gradual reduction in a fixed asset's recorded value over its useful life, recognized as an expense — and a significant tax deduction.",
  "depreciation":"The gradual reduction in a fixed asset's recorded value over its useful life, recognized as an expense.",
  "draw schedule":"A predetermined timeline for when and how much of a construction loan can be pulled, typically tied to project milestones.",
  "draw schedule":"A predetermined timeline for when and how much of a construction loan can be pulled.",
  "entity structure":"The legal form a business takes — LLC, S-Corp, C-Corp, sole proprietorship, or partnership — with different tax and liability implications.",
  "equity":"The owner's stake in a business or property — what's left after all debts are paid.",
  "equity":"The owner's stake: assets minus liabilities.",
  "estimated taxes":"Quarterly tax payments made by self-employed individuals and business owners who don't have taxes withheld from a paycheck.",
  "estimated taxes":"Quarterly tax payments made by self-employed individuals who don't have taxes withheld from a paycheck.",
  "financing activities":"Cash flows from borrowing, repaying debt, or moving capital in or out of the business.",
  "fixed assets":"Long-term assets not intended for quick sale — property, equipment, vehicles.",
  "free cash flow":"Operating cash flow minus capital expenditures — cash generated after maintaining and growing assets.",
  "gross margin":"Gross profit as a percentage of revenue — how much of each revenue dollar survives after direct costs.",
  "gross profit":"Revenue minus cost of goods sold.",
  "hard costs":"Direct construction costs — materials, labor, subcontractors. The physical work of building.",
  "hard costs":"Direct construction costs — materials, labor, subcontractors.",
  "holding costs":"Ongoing expenses while owning a property — loan interest, insurance, utilities, property taxes during the project.",
  "holding costs":"Ongoing expenses while owning a property — loan interest, insurance, utilities, property taxes.",
  "inventory":"Goods held for sale — or in real estate, work in progress intended for sale.",
  "inventory":"Goods held for sale. For Amazon: products in the warehouse. Their value sits on the balance sheet until sold.",
  "investing activities":"Cash flows from buying or selling long-term assets — equipment, property, land.",
  "investor report":"A periodic financial summary shared with capital partners showing project status, funds deployed, costs to date, and projected returns.",
  "job costing":"Tracking all revenue and costs for each individual project separately, to determine that specific project's profitability.",
  "job costing":"Tracking revenue and costs for each individual project to determine its specific profitability.",
  "job costing":"Tracking revenue and costs per project to determine specific profitability.",
  "leverage":"Using borrowed money to control more assets than cash alone allows.",
  "llc":"Limited Liability Company — a flexible business structure providing liability protection and pass-through taxation.",
  "llc":"Limited Liability Company. A flexible business structure that separates personal and business liability. Can be taxed as a sole proprietor, partnership, or corporation.",
  "long-term liabilities":"Obligations due beyond one year.",
  "net income":"The bottom line on the P&L — starting point for the cash flow statement.",
  "net income":"The bottom line: revenue minus all costs and expenses.",
  "net margin":"Net income as a percentage of revenue — the final bottom line as a percentage.",
  "operating activities":"Cash flows from the core business operations — collecting revenue, paying expenses, managing working capital.",
  "operating cash flow":"The actual cash generated by core business operations — the most important section of the cash flow statement.",
  "operating cash flow":"The actual cash generated by core business operations.",
  "operating expenses":"Ongoing costs of running the business not tied to a specific project or sale.",
  "ordinary income":"Income taxed at standard income tax rates — wages, business profit, short-term capital gains.",
  "pass-through taxation":"Income from the business is reported on the owner's personal tax return rather than taxed at the corporate level. LLCs and S-Corps use this.",
  "ppc":"Pay-Per-Click advertising. On Amazon, PPC spend (Sponsored Products) is a significant operating expense that directly impacts net income.",
  "preferred return":"A minimum return an investor receives before the operator takes any profit share. Common in real estate partnerships.",
  "preferred return":"A minimum return an investor receives before the operator takes any profit share.",
  "profit and loss statement":"Shows revenue, costs, and expenses over a period of time. Also called P&L or income statement.",
  "profit and loss statement":"Shows revenue, costs, and expenses over a time period. Also called the P&L or income statement.",
  "profit and loss statement":"Shows revenue, costs, and expenses over a time period. Also called the P&L.",
  "qualified business income deduction":"A deduction allowing eligible self-employed individuals and small business owners to deduct up to 20% of qualified business income. Also called the QBI deduction.",
  "quickbooks":"The most widely used small business accounting software. Available in Online and Desktop versions. Connects to bank accounts, generates financial statements, and supports job costing.",
  "receipt capture":"The practice of photographing and digitally storing receipts at the point of purchase, typically via a mobile app, eliminating paper and reducing errors at tax time.",
  "retained earnings":"Cumulative profits kept in the business rather than distributed to owners.",
  "return on investment":"The profit generated as a percentage of the capital invested. Often abbreviated ROI.",
  "s-corp":"S Corporation. A tax election that allows business income to pass through to owners personally, while potentially reducing self-employment tax.",
  "self-employment tax":"The 15.3% tax paid by self-employed individuals covering Social Security and Medicare — both employer and employee portions.",
  "sku":"Stock Keeping Unit — a unique identifier for each distinct product a seller carries. Good accounting tracks profit and loss by SKU.",
  "soft costs":"Indirect project costs — permits, design fees, inspections, legal, financing costs.",
  "soft costs":"Indirect project costs — permits, design, inspections, legal, financing costs.",
  "waterfall":"A structured distribution schedule in a real estate deal that specifies the order and percentage in which profits are split between investors and operators.",
  "wave":"A free cloud-based accounting platform well-suited for freelancers and small operators. Includes invoicing, expense tracking, and basic reporting.",
  "working capital":"Current assets minus current liabilities — the cushion available for day-to-day operations.",
  "working capital":"Current assets minus current liabilities — the operational cushion.",
  "xero":"A cloud-based accounting platform popular with small businesses. Strong bank reconciliation features and a clean interface.",
  assets:"Everything a business owns that has monetary value.",
  depreciation:"The gradual reduction in a fixed asset's recorded value over its useful life, recognized as an expense.",
  equity:"The owner's stake: assets minus liabilities. What's truly yours after all debts.",
  inventory:"Goods held for sale, or in real estate, work in progress intended for sale.",
  leverage:"Using borrowed money to control more assets than cash alone allows.",
  liabilities:"Everything a business owes — loans, unpaid bills, contractor balances, obligations.",
  liquidity:"How quickly an asset can be converted to cash. Cash is perfectly liquid; construction in progress is not.",
  solvency:"A business's ability to meet its long-term financial obligations."
};

function dsp(k){
  var m={gaap:"GAAP",cpa:"CPA",aicpa:"AICPA",cfo:"CFO",llc:"LLC","s-corp":"S-Corp",sku:"SKU",ppc:"PPC",acos:"ACoS",roi:"ROI","amazon fba":"Amazon FBA"};
  return m[k.toLowerCase()]||(k.charAt(0).toUpperCase()+k.slice(1));
}

function Para(p){
  var text=p.text,onTerm=p.onTerm,parts=[],re=/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,last=0,m;
  while((m=re.exec(text))!==null){
    if(m.index>last)parts.push(<span key={last}>{text.slice(last,m.index)}</span>);
    var key=m[1].toLowerCase(),label=m[2]||m[1];
    parts.push(<span key={m.index} onClick={function(k){return function(){if(GL[k])onTerm(k);};}(key)} title={GL[key]?"Click for definition":undefined} style={{fontWeight:500,color:C.teal,cursor:GL[key]?"pointer":"default",borderBottom:GL[key]?"1.5px solid "+C.teal:"none",paddingBottom:1}}>{label}</span>);
    last=m.index+m[0].length;
  }
  if(last<text.length)parts.push(<span key={last}>{text.slice(last)}</span>);
  return <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:18,color:C.slate,lineHeight:1.9,marginBottom:20}}>{parts}</p>;
}

function fmt(n){if(isNaN(n))return"$0";var a=Math.abs(Math.round(n));return(n<0?"-$":"$")+a.toLocaleString();}
function pct(n,d){if(!d||isNaN(n)||isNaN(d))return"0.0%";return((n/d)*100).toFixed(1)+"%";}

var PL_PRESETS={
  "Spec House (4 Homes)":{rev1:960000,rev2:0,cogs1:520000,cogs2:180000,cogs3:40000,op1:32000,op2:8400,op3:6000,op4:4200,op5:14400,int:38000,tax:0},
  "Single Flip":{rev1:310000,rev2:0,cogs1:155000,cogs2:62000,cogs3:14000,op1:4800,op2:2400,op3:1200,op4:1800,op5:4000,int:14400,tax:0},
  "Amazon Store":{rev1:280000,rev2:12000,cogs1:148000,cogs2:0,cogs3:24000,op1:6000,op2:4800,op3:3600,op4:18000,op5:3200,int:4800,tax:0},
  "Blank":{rev1:0,rev2:0,cogs1:0,cogs2:0,cogs3:0,op1:0,op2:0,op3:0,op4:0,op5:0,int:0,tax:0},
};
var PL_LABELS={
  "Spec House (4 Homes)":{r1:"Home Sale Proceeds",r2:"Other Revenue",c1:"Land Acquisition",c2:"Construction (Labor + Materials + Subs)",c3:"Permits, Inspections & Closing Costs"},
  "Single Flip":{r1:"Sale Price",r2:"Other Revenue",c1:"Purchase Price",c2:"Renovation Costs",c3:"Closing & Transaction Costs"},
  "Amazon Store":{r1:"Product Sales Revenue",r2:"Other Revenue (Bundles, etc.)",c1:"Cost of Goods (Product Cost)",c2:"Platform / Fulfillment Fees",c3:"Shipping & Returns"},
  "Blank":{r1:"Revenue Source 1",r2:"Revenue Source 2",c1:"Direct Cost 1",c2:"Direct Cost 2",c3:"Direct Cost 3"},
};

var BS_PRESETS={
  "Spec House — Mid-Build":{cash:45000,ar:0,inv:280000,oca:8000,equip:28000,veh:32000,land:0,ofa:0,ap:24000,sl:0,cc:4200,cm:0,cl:210000,ll:0,oi:70000,re:0},
  "Post-Flip (After Sale)":{cash:162000,ar:0,inv:0,oca:4000,equip:28000,veh:32000,land:0,ofa:0,ap:0,sl:0,cc:0,cm:0,cl:0,ll:0,oi:70000,re:156000},
  "Amazon Store":{cash:34000,ar:5200,inv:88000,oca:3000,equip:9000,veh:0,land:0,ofa:0,ap:18000,sl:28000,cc:3800,cm:0,cl:0,ll:0,oi:50000,re:39400},
  "Blank":{cash:0,ar:0,inv:0,oca:0,equip:0,veh:0,land:0,ofa:0,ap:0,sl:0,cc:0,cm:0,cl:0,ll:0,oi:0,re:0},
};

var CF_PRESETS={
  "Spec House Year":{ni:117000,dep:14400,arc:0,ic:-280000,apc:24000,oo:0,eq:-28000,lnd:0,oi:0,lp:210000,lr:-38000,od:-45000,of:0,bc:12000},
  "Completed Flip":{ni:55600,dep:4000,arc:0,ic:0,apc:0,oo:0,eq:0,lnd:-229000,oi:0,lp:200000,lr:-14400,od:-20000,of:0,bc:20000},
  "Amazon Store":{ni:48000,dep:3200,arc:-5200,ic:-22000,apc:8000,oo:0,eq:-9000,lnd:0,oi:0,lp:28000,lr:-12000,od:-20000,of:0,bc:5000},
  "Blank":{ni:0,dep:0,arc:0,ic:0,apc:0,oo:0,eq:0,lnd:0,oi:0,lp:0,lr:0,od:0,of:0,bc:0},
};

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────
function PresetBar(props){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
      {Object.keys(props.presets).map(function(name){
        var active=props.current===name;
        return(
          <button key={name} onClick={function(){props.onSelect(name);}}
            style={{padding:"5px 12px",borderRadius:16,border:"1.5px solid "+(active?C.teal:"rgba(28,31,46,0.18)"),background:active?C.teal:"transparent",color:active?C.slate:C.slate,fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:active?500:300,cursor:"pointer",transition:"all 0.18s",opacity:active?1:0.7}}>
            {name}
          </button>
        );
      })}
    </div>
  );
}

function NI(props){
  return(
    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid rgba(28,31,46,0.05)"}}>
      <div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.slate,fontWeight:300,opacity:props.dim?0.45:1}}>{props.label}</div>
        {props.sub&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.35,marginTop:1,maxWidth:190,lineHeight:1.35}}>{props.sub}</div>}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:3,marginLeft:8,flexShrink:0}}>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.slate,opacity:0.3}}>$</span>
        <input type="number" value={props.value||""} onChange={function(e){props.onChange(Number(e.target.value)||0);}}
          style={{width:100,textAlign:"right",padding:"4px 6px",borderRadius:6,border:"1.5px solid rgba(28,31,46,0.12)",background:C.ivory,fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.slate}}/>
      </div>
    </div>
  );
}

function Row(props){
  var neg=props.value<0,col=props.color||(neg?C.red:C.slate);
  return(
    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:props.lg?"10px 11px":"6px 11px",background:props.bg||"transparent",borderRadius:props.bg?8:0,marginTop:props.bg?3:0}}>
      <div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:props.lg?14:12,color:col,fontWeight:props.bold?500:300}}>{props.label}</div>
        {props.sub&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:col,opacity:0.65,marginTop:1,maxWidth:210,lineHeight:1.3}}>{props.sub}</div>}
      </div>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:props.lg?15:12,fontWeight:props.bold?600:300,color:col,fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",marginLeft:10}}>{fmt(props.value)}</span>
    </div>
  );
}

function Chip(props){
  var col=props.type==="good"?C.green:props.type==="bad"?C.red:C.teal;
  var bg=props.type==="good"?GF:props.type==="bad"?RF:TF;
  return(
    <div style={{background:bg,borderLeft:"3px solid "+col,borderRadius:"0 7px 7px 0",padding:"8px 11px",marginTop:6}}>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.16em",textTransform:"uppercase",color:col,marginBottom:2}}>{props.label}</div>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:300,color:C.slate,lineHeight:1.55}}>{props.children}</div>
    </div>
  );
}

function SL(props){return <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.slate,opacity:0.38,marginBottom:4,marginTop:props.top?11:0,padding:"0 11px"}}>{props.children}</div>;}
function SH(props){return <div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:13,color:props.color||C.slate,marginBottom:2,marginTop:props.top?12:0}}>{props.children}</div>;}
function LR(props){return(<div style={{display:"flex",justifyContent:"space-between",padding:"2px 11px"}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.58}}>{props.label}</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,fontVariantNumeric:"tabular-nums"}}>{props.paren?"("+fmt(Math.abs(props.value))+")":fmt(props.value)}</span></div>);}
function Dv(){return <div style={{margin:"3px 11px",borderTop:"1px solid rgba(28,31,46,0.07)"}}/>;}

// ── P&L TOOL ─────────────────────────────────────────────────────────────────
function PLTool(){
  var ps=useState("Spec House (4 Homes)"); var preset=ps[0]; var setPreset=ps[1];
  var vs=useState(Object.assign({},PL_PRESETS["Spec House (4 Homes)"])); var v=vs[0]; var sv=vs[1];
  function s(k){return function(x){sv(function(p){var n=Object.assign({},p);n[k]=x;return n;});};}
  function load(name){setPreset(name);sv(Object.assign({},PL_PRESETS[name]));}
  var L=PL_LABELS[preset];
  var rev=v.rev1+v.rev2,cogs=v.cogs1+v.cogs2+v.cogs3,gp=rev-cogs;
  var opex=v.op1+v.op2+v.op3+v.op4+v.op5,opi=gp-opex,ni=opi-v.int-v.tax;
  var gm=rev?(gp/rev*100):0;
  return(
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",height:"100%",overflow:"hidden"}}>
      <div style={{overflowY:"auto",padding:"20px 22px",borderRight:"1px solid "+C.dark}}>
        <PresetBar presets={PL_PRESETS} current={preset} onSelect={load}/>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.45,marginBottom:14,lineHeight:1.55}}>
          {preset==="Spec House (4 Homes)"?"Annual P&L for a spec house operation — 4 homes sold. Numbers match the Module 7 example.":preset==="Single Flip"?"P&L for a single house flip — buy, renovate, sell. Great for deal-by-deal analysis.":preset==="Amazon Store"?"Annual P&L for an Amazon FBA seller — products, platform fees, marketing, and fulfillment.":"Enter your own numbers from any deal or business."}
        </p>
        <SH color={C.teal}>Revenue</SH>
        <NI label={L.r1} value={v.rev1} onChange={s("rev1")}/>
        <NI label={L.r2} value={v.rev2} onChange={s("rev2")} dim/>
        <SH top>Cost of Goods Sold</SH>
        <NI label={L.c1} value={v.cogs1} onChange={s("cogs1")}/>
        <NI label={L.c2} value={v.cogs2} onChange={s("cogs2")}/>
        <NI label={L.c3} value={v.cogs3} onChange={s("cogs3")}/>
        <SH top>Operating Expenses</SH>
        <NI label="Insurance & Licensing" value={v.op1} onChange={s("op1")}/>
        <NI label="Accounting & Legal" value={v.op2} onChange={s("op2")}/>
        <NI label="Software & Tools" value={v.op3} onChange={s("op3")}/>
        <NI label={preset==="Amazon Store"?"Advertising (PPC + Marketing)":"Marketing & Advertising"} value={v.op4} onChange={s("op4")}/>
        <NI label="Depreciation" value={v.op5} onChange={s("op5")} sub="Non-cash — reduces taxable income"/>
        <SH top>Below Operating Income</SH>
        <NI label={preset==="Amazon Store"?"Business Loan Interest":"Construction Loan Interest"} value={v.int} onChange={s("int")}/>
        <NI label="Taxes" value={v.tax} onChange={s("tax")}/>
      </div>
      <div style={{overflowY:"auto",padding:"20px 18px"}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.2em",color:C.teal,textTransform:"uppercase",marginBottom:8}}>Live P&L Statement</div>
        <div style={{background:"white",border:"1px solid "+C.dark,borderRadius:10,overflow:"hidden",marginBottom:12}}>
          <div style={{background:C.dark,padding:"9px 11px"}}><div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:13,color:C.slate}}>Profit & Loss Statement</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.4,marginTop:1}}>{preset} · All figures USD</div></div>
          <div style={{padding:"5px 0"}}>
            <SL>Revenue</SL>
            {v.rev1>0&&<LR label={L.r1} value={v.rev1}/>}
            {v.rev2>0&&<LR label={L.r2} value={v.rev2}/>}
            <Dv/><Row label="Total Revenue" value={rev} bold color={C.teal}/>
            <div style={{height:3}}/><SL top>Cost of Goods Sold</SL>
            {v.cogs1>0&&<LR label={L.c1} value={v.cogs1} paren/>}
            {v.cogs2>0&&<LR label={L.c2} value={v.cogs2} paren/>}
            {v.cogs3>0&&<LR label={L.c3} value={v.cogs3} paren/>}
            <Dv/><Row label="Total COGS" value={-cogs}/>
            <div style={{margin:"3px 5px"}}><Row label="Gross Profit" value={gp} bold lg bg={gp>=0?GF:RF} color={gp>=0?C.green:C.red} sub={"Gross Margin: "+pct(gp,rev)+" of each revenue dollar after direct costs"}/></div>
            <div style={{height:3}}/><SL top>Operating Expenses</SL>
            {v.op1>0&&<LR label="Insurance & Licensing" value={v.op1} paren/>}
            {v.op2>0&&<LR label="Accounting & Legal" value={v.op2} paren/>}
            {v.op3>0&&<LR label="Software & Tools" value={v.op3} paren/>}
            {v.op4>0&&<LR label="Marketing & Advertising" value={v.op4} paren/>}
            {v.op5>0&&<LR label="Depreciation" value={v.op5} paren/>}
            <Dv/><Row label="Total Operating Expenses" value={-opex}/>
            <div style={{margin:"3px 5px"}}><Row label="Operating Income" value={opi} bold lg bg={opi>=0?GF:RF} color={opi>=0?C.green:C.red} sub="Profit from core operations before interest and taxes"/></div>
            {(v.int>0||v.tax>0)&&<div><div style={{height:3}}/><SL top>Other Expenses</SL>{v.int>0&&<LR label="Interest Expense" value={v.int} paren/>}{v.tax>0&&<LR label="Taxes" value={v.tax} paren/>}</div>}
            <div style={{margin:"5px 5px 5px"}}><Row label="Net Income" value={ni} bold lg bg={ni>=0?TF:RF} color={ni>=0?C.teal:C.red} sub={"Bottom Line — "+pct(ni,rev)+" of every revenue dollar became profit"}/></div>
          </div>
        </div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.16em",textTransform:"uppercase",color:C.teal,marginBottom:5}}>What This Tells You</div>
        {gm>=25&&<Chip type="good" label="Strong Gross Margin">At {pct(gp,rev)}, project economics are solid — each revenue dollar keeps {pct(gp,rev)} after direct costs. {preset==="Amazon Store"?"For an Amazon seller, margins above 25% after platform fees indicate strong sourcing.":"Real estate deals in the 25–35% range are generally healthy."}</Chip>}
        {gm>0&&gm<25&&<Chip type="bad" label="Thin Gross Margin">At {pct(gp,rev)}, direct costs consume most revenue. Little room for overhead. {preset==="Amazon Store"?"Check product costs, platform fees, and PPC spend.":"Look closely at build costs and pricing."}</Chip>}
        {gm<=0&&rev>0&&<Chip type="bad" label="Gross Loss">Direct costs exceed revenue — structurally unprofitable before overhead is counted.</Chip>}
        {ni>0&&<Chip type="good" label="Profitable">{fmt(ni)} net income on {fmt(rev)} revenue. {v.int>0?"Interest expense ("+fmt(v.int)+") reduced operating income — debt structure shapes every deal's bottom line.":""}</Chip>}
        {ni<0&&opi>0&&<Chip type="bad" label="Operating Profit, Net Loss">Operationally profitable ({fmt(opi)}) but interest and taxes pushed it to a net loss. A financing problem, not a business performance problem.</Chip>}
        {v.op5>0&&<Chip type="neutral" label="Depreciation Note">{fmt(v.op5)} in depreciation reduced net income but no cash left the business. Actual cash position is {fmt(v.op5)} stronger than net income shows.</Chip>}
        {preset==="Amazon Store"&&v.op4>0&&<Chip type="neutral" label="Amazon Advertising">PPC and marketing ({fmt(v.op4)}) is {pct(v.op4,rev)} of revenue. For Amazon sellers, keeping ad spend under 15% of revenue is a healthy benchmark to watch.</Chip>}
      </div>
    </div>
  );
}

// ── BALANCE SHEET TOOL ────────────────────────────────────────────────────────
function BSTool(){
  var ps=useState("Spec House — Mid-Build"); var preset=ps[0]; var setPreset=ps[1];
  var vs=useState(Object.assign({},BS_PRESETS["Spec House — Mid-Build"])); var v=vs[0]; var sv=vs[1];
  function s(k){return function(x){sv(function(p){var n=Object.assign({},p);n[k]=x;return n;});};}
  function load(name){setPreset(name);sv(Object.assign({},BS_PRESETS[name]));}
  var ca=v.cash+v.ar+v.inv+v.oca,fa=v.equip+v.veh+v.land+v.ofa,ta=ca+fa;
  var curL=v.ap+v.sl+v.cc+v.cm,ltL=v.cl+v.ll,tl=curL+ltL;
  var calcEq=ta-tl,statedEq=v.oi+v.re,diff=Math.abs(calcEq-statedEq),bal=diff<2;
  return(
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",height:"100%",overflow:"hidden"}}>
      <div style={{overflowY:"auto",padding:"20px 22px",borderRight:"1px solid "+C.dark}}>
        <PresetBar presets={BS_PRESETS} current={preset} onSelect={load}/>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.45,marginBottom:14,lineHeight:1.55}}>
          {preset==="Spec House — Mid-Build"?"Balance sheet 6 weeks into construction. The project owns land + work in progress, funded mostly by the construction loan.":preset==="Post-Flip (After Sale)"?"Balance sheet after the home sells and the loan is paid off. See how equity builds when the liability clears.":preset==="Amazon Store"?"Balance sheet for a growing Amazon FBA business — inventory is the biggest asset, funded partly by a business loan.":"Enter your own numbers. Set equity equal to Assets minus Liabilities to balance the equation."}
        </p>
        <SH color={C.teal}>Current Assets</SH>
        <NI label="Cash" value={v.cash} onChange={s("cash")}/>
        <NI label="Accounts Receivable" value={v.ar} onChange={s("ar")} sub="Money owed to you"/>
        <NI label={preset==="Amazon Store"?"Inventory (Products in Warehouse)":preset==="Post-Flip (After Sale)"?"Inventory / Work in Progress":"Construction in Progress (Inventory)"} value={v.inv} onChange={s("inv")}/>
        <NI label="Other Current Assets" value={v.oca} onChange={s("oca")} dim/>
        <SH top>Fixed Assets</SH>
        <NI label={preset==="Amazon Store"?"Equipment & Office":"Equipment & Tools"} value={v.equip} onChange={s("equip")}/>
        <NI label="Vehicles" value={v.veh} onChange={s("veh")}/>
        <NI label="Land (held long-term)" value={v.land} onChange={s("land")} sub="Does not depreciate"/>
        <SH top>Current Liabilities</SH>
        <NI label={preset==="Amazon Store"?"Accounts Payable (Suppliers)":"Accounts Payable (Subs + Vendors)"} value={v.ap} onChange={s("ap")}/>
        <NI label="Short-Term Loans" value={v.sl} onChange={s("sl")}/>
        <NI label="Credit Card Balance" value={v.cc} onChange={s("cc")}/>
        <SH top>Long-Term Liabilities</SH>
        <NI label={preset==="Amazon Store"?"Business Loan":"Construction Loan"} value={v.cl} onChange={s("cl")}/>
        <NI label="Other Long-Term Debt" value={v.ll} onChange={s("ll")} dim/>
        <SH top>Owner's Equity</SH>
        <NI label="Owner Capital Invested" value={v.oi} onChange={s("oi")}/>
        <NI label="Retained Earnings" value={v.re} onChange={s("re")} sub="Cumulative profits kept in business"/>
      </div>
      <div style={{overflowY:"auto",padding:"20px 18px"}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.2em",color:C.teal,textTransform:"uppercase",marginBottom:8}}>Live Balance Sheet</div>
        <div style={{background:bal?TF:RF,border:"2px solid "+(bal?C.teal:C.red),borderRadius:8,padding:"9px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:9}}>
          <span style={{fontSize:17}}>{bal?"✓":"✗"}</span>
          <div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,color:bal?C.teal:C.red}}>{bal?"Equation Balanced":"Out of Balance — Adjust Equity"}</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.5,marginTop:1}}>{fmt(ta)} Assets = {fmt(tl)} Liabilities + {fmt(calcEq)} Equity</div>
          </div>
        </div>
        <div style={{background:"white",border:"1px solid "+C.dark,borderRadius:10,overflow:"hidden",marginBottom:10}}>
          <div style={{background:C.dark,padding:"9px 11px"}}><div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:13,color:C.slate}}>Balance Sheet</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.4,marginTop:1}}>{preset} · As of Today</div></div>
          <div style={{padding:"5px 0"}}>
            <SL>Current Assets</SL>
            {v.cash>0&&<LR label="Cash" value={v.cash}/>}
            {v.ar>0&&<LR label="Accounts Receivable" value={v.ar}/>}
            {v.inv>0&&<LR label={preset==="Amazon Store"?"Inventory":"Construction in Progress"} value={v.inv}/>}
            {v.oca>0&&<LR label="Other Current Assets" value={v.oca}/>}
            <Dv/><Row label="Total Current Assets" value={ca} bold/>
            <div style={{height:3}}/><SL top>Fixed Assets</SL>
            {v.equip>0&&<LR label="Equipment & Tools" value={v.equip}/>}
            {v.veh>0&&<LR label="Vehicles" value={v.veh}/>}
            {v.land>0&&<LR label="Land" value={v.land}/>}
            <Dv/>
            <div style={{margin:"3px 5px"}}><Row label="TOTAL ASSETS" value={ta} bold lg bg={TF} color={C.teal}/></div>
            <div style={{height:5}}/><SL top>Current Liabilities</SL>
            {v.ap>0&&<LR label="Accounts Payable" value={v.ap} paren/>}
            {v.sl>0&&<LR label="Short-Term Loans" value={v.sl} paren/>}
            {v.cc>0&&<LR label="Credit Card Balance" value={v.cc} paren/>}
            <Dv/><Row label="Total Current Liabilities" value={-curL} bold/>
            <div style={{height:3}}/><SL top>Long-Term Liabilities</SL>
            {v.cl>0&&<LR label={preset==="Amazon Store"?"Business Loan":"Construction Loan"} value={v.cl} paren/>}
            {v.ll>0&&<LR label="Other Long-Term Debt" value={v.ll} paren/>}
            <Dv/><Row label="Total Liabilities" value={-tl} bold/>
            <div style={{height:3}}/><SL top>Equity</SL>
            {v.oi>0&&<LR label="Owner Capital" value={v.oi}/>}
            {v.re!==0&&<LR label="Retained Earnings" value={v.re}/>}
            <Dv/>
            <div style={{margin:"3px 5px 5px"}}><Row label="TOTAL LIABILITIES + EQUITY" value={tl+statedEq} bold lg bg={bal?TF:RF} color={bal?C.teal:C.red}/></div>
          </div>
        </div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.16em",textTransform:"uppercase",color:C.teal,marginBottom:5}}>What This Tells You</div>
        <Chip type="neutral" label="The Accounting Equation">Assets ({fmt(ta)}) = Liabilities ({fmt(tl)}) + Equity ({fmt(calcEq)}). {bal?"Every dollar is accounted for.":"Set equity inputs to match Assets minus Liabilities."}</Chip>
        {preset==="Spec House — Mid-Build"&&<Chip type="neutral" label="Mid-Build Snapshot">Construction in progress ({fmt(v.inv)}) is the largest asset — it's classified as inventory because it's intended for sale. The construction loan ({fmt(v.cl)}) funds most of it. Equity ({fmt(calcEq)}) is your down payment and capital.</Chip>}
        {preset==="Post-Flip (After Sale)"&&<Chip type="good" label="After the Flip">Compare this to mid-build: inventory gone, loan gone, cash and retained earnings up. This is how equity accumulates across successful deals.</Chip>}
        {preset==="Amazon Store"&&<Chip type="neutral" label="Inventory-Heavy Business">Inventory ({fmt(v.inv)}) is {pct(v.inv,ta)} of total assets — common for Amazon FBA. Managing this number carefully prevents cash from getting trapped in unsold products.</Chip>}
        {ta>0&&<Chip type={tl/ta<0.7?"good":"bad"} label="Leverage Ratio">{pct(tl,ta)} of assets financed by debt. {tl/ta<0.7?"Reasonable leverage.":"Highly leveraged — manageable with strong cash flow but less margin for error."}</Chip>}
        {calcEq>0&&<Chip type="good" label="Positive Equity">{fmt(calcEq)} net worth after all debts — what you'd keep if everything liquidated at book value today.</Chip>}
        {calcEq<=0&&ta>0&&<Chip type="bad" label="Negative Equity">Liabilities exceed assets at book value. {preset==="Spec House — Mid-Build"?"Normal mid-construction — equity rebuilds at closing when the home sells and the loan is repaid.":"Watch this closely."}</Chip>}
      </div>
    </div>
  );
}

// ── CASH FLOW TOOL ────────────────────────────────────────────────────────────
function CFTool(){
  var ps=useState("Spec House Year"); var preset=ps[0]; var setPreset=ps[1];
  var vs=useState(Object.assign({},CF_PRESETS["Spec House Year"])); var v=vs[0]; var sv=vs[1];
  function s(k){return function(x){sv(function(p){var n=Object.assign({},p);n[k]=x;return n;});};}
  function load(name){setPreset(name);sv(Object.assign({},CF_PRESETS[name]));}
  var opAdj=v.dep+v.arc+v.ic+v.apc+v.oo,cfOp=v.ni+opAdj;
  var cfInv=v.eq+v.lnd+v.oi,cfFin=v.lp+v.lr+v.od+v.of;
  var net=cfOp+cfInv+cfFin,end=v.bc+net;
  return(
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",height:"100%",overflow:"hidden"}}>
      <div style={{overflowY:"auto",padding:"20px 22px",borderRight:"1px solid "+C.dark}}>
        <PresetBar presets={CF_PRESETS} current={preset} onSelect={load}/>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.45,marginBottom:14,lineHeight:1.55}}>
          {preset==="Spec House Year"?"Full year for a spec house operator — notice how building inventory consumed cash even though the year was profitable.":preset==="Completed Flip"?"A single flip from purchase to sale. See how the loan funded the purchase and was repaid at closing.":preset==="Amazon Store"?"Amazon FBA year — inventory investment and loan fund growth, but watch how both consume cash.":"Enter your own numbers. Use negatives for cash paid out."}
        </p>
        <SH color={C.teal}>Operating Activities</SH>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.35,marginBottom:7,lineHeight:1.4}}>Starts with net income, adjusted for non-cash items and working capital changes.</p>
        <NI label="Net Income (from P&L)" value={v.ni} onChange={s("ni")}/>
        <NI label="Add Back: Depreciation" value={v.dep} onChange={s("dep")} sub="Non-cash — add back to reach actual cash"/>
        <NI label="Change in Accounts Receivable" value={v.arc} onChange={s("arc")} sub="Negative = more owed to you (not collected)"/>
        <NI label="Change in Inventory" value={v.ic} onChange={s("ic")} sub="Negative = more inventory built or purchased"/>
        <NI label="Change in Accounts Payable" value={v.apc} onChange={s("apc")} sub="Positive = owe more to vendors"/>
        <SH top>Investing Activities</SH>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.35,marginBottom:7,lineHeight:1.4}}>Cash spent on long-term assets. Enter purchases as negative numbers.</p>
        <NI label={preset==="Completed Flip"?"Property Purchased":"Equipment / Tools Purchased"} value={v.eq} onChange={s("eq")} sub="Enter as negative"/>
        <NI label={preset==="Completed Flip"?"":"Land / Other Property"} value={v.lnd} onChange={s("lnd")} sub={preset==="Completed Flip"?"":"Enter as negative"} dim={preset==="Completed Flip"}/>
        <SH top>Financing Activities</SH>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.35,marginBottom:7,lineHeight:1.4}}>Loans, repayments, and owner draws. Repayments and draws are negative.</p>
        <NI label={preset==="Amazon Store"?"Business Loan Received":"Construction Loan Proceeds"} value={v.lp} onChange={s("lp")}/>
        <NI label="Loan Repayments" value={v.lr} onChange={s("lr")} sub="Enter as negative"/>
        <NI label="Owner Draw / Distribution" value={v.od} onChange={s("od")} sub="Enter as negative"/>
        <SH top>Starting Position</SH>
        <NI label="Cash at Beginning of Period" value={v.bc} onChange={s("bc")}/>
      </div>
      <div style={{overflowY:"auto",padding:"20px 18px"}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.2em",color:C.teal,textTransform:"uppercase",marginBottom:8}}>Live Cash Flow Statement</div>
        <div style={{background:"white",border:"1px solid "+C.dark,borderRadius:10,overflow:"hidden",marginBottom:10}}>
          <div style={{background:C.dark,padding:"9px 11px"}}><div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:13,color:C.slate}}>Statement of Cash Flows</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.slate,opacity:0.4,marginTop:1}}>{preset} · For the Period</div></div>
          <div style={{padding:"5px 0"}}>
            <SL>Operating Activities</SL>
            <LR label="Net Income" value={v.ni}/>
            {v.dep!==0&&<LR label="Add: Depreciation" value={v.dep}/>}
            {v.arc!==0&&<LR label="Change in Receivables" value={v.arc}/>}
            {v.ic!==0&&<LR label="Change in Inventory" value={v.ic}/>}
            {v.apc!==0&&<LR label="Change in Payables" value={v.apc}/>}
            <Dv/>
            <div style={{margin:"2px 5px"}}><Row label="Net Cash from Operations" value={cfOp} bold bg={cfOp>=0?GF:RF} color={cfOp>=0?C.green:C.red}/></div>
            <div style={{height:3}}/><SL top>Investing Activities</SL>
            {v.eq!==0&&<LR label={preset==="Completed Flip"?"Property Purchased":"Equipment Purchased"} value={v.eq}/>}
            {v.lnd!==0&&<LR label="Land / Property" value={v.lnd}/>}
            {v.oi!==0&&<LR label="Other Investing" value={v.oi}/>}
            <Dv/>
            <div style={{margin:"2px 5px"}}><Row label="Net Cash from Investing" value={cfInv} bold bg={cfInv>=0?GF:RF} color={cfInv>=0?C.green:C.red}/></div>
            <div style={{height:3}}/><SL top>Financing Activities</SL>
            {v.lp!==0&&<LR label="Loan Proceeds" value={v.lp}/>}
            {v.lr!==0&&<LR label="Loan Repayments" value={v.lr}/>}
            {v.od!==0&&<LR label="Owner Draw" value={v.od}/>}
            <Dv/>
            <div style={{margin:"2px 5px"}}><Row label="Net Cash from Financing" value={cfFin} bold bg={cfFin>=0?GF:RF} color={cfFin>=0?C.green:C.red}/></div>
            <div style={{height:4}}/><div style={{margin:"0 11px",borderTop:"2px solid rgba(28,31,46,0.1)"}}/>
            <LR label="Cash at Beginning" value={v.bc}/>
            <div style={{display:"flex",justifyContent:"space-between",padding:"2px 11px"}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.55}}>Net Change in Cash</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:net>=0?C.green:C.red,fontWeight:500,fontVariantNumeric:"tabular-nums"}}>{fmt(net)}</span></div>
            <Dv/>
            <div style={{margin:"4px 5px 5px"}}><Row label="Cash at End of Period" value={end} bold lg bg={end>=0?TF:RF} color={end>=0?C.teal:C.red}/></div>
          </div>
        </div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.16em",textTransform:"uppercase",color:C.teal,marginBottom:5}}>What This Tells You</div>
        <Chip type="neutral" label="Profit vs. Cash">Net income was {fmt(v.ni)} but cash from operations was {fmt(cfOp)}. The {fmt(Math.abs(cfOp-v.ni))} gap comes from non-cash items and timing differences — this is why profit and cash are never the same number.</Chip>
        {preset==="Spec House Year"&&v.ic<0&&<Chip type="neutral" label="Inventory Consumed Cash">Building {fmt(Math.abs(v.ic))} in new construction absorbed most of the operating cash. The business was profitable but cash went into work-in-progress — it comes back at closing.</Chip>}
        {preset==="Completed Flip"&&<Chip type="neutral" label="The Flip Cycle">The loan funded the purchase (financing in), the sale repaid it (financing out), and the profit stayed as cash. This is the basic cash cycle of every flip — borrow to buy, sell to repay.</Chip>}
        {preset==="Amazon Store"&&v.ic<0&&<Chip type="neutral" label="Inventory Investment">Buying {fmt(Math.abs(v.ic))} in new inventory consumed cash even though the business was profitable. For Amazon sellers, inventory timing is the #1 cash flow challenge.</Chip>}
        {cfOp>0&&<Chip type="good" label="Positive Operating Cash Flow">The core business generated {fmt(cfOp)} in actual cash — profit turning into real money in the bank.</Chip>}
        {cfOp<0&&v.ni>0&&<Chip type="bad" label="Profitable but Cash Negative">Profitable on paper but operating cash is negative. Money is earned but not yet collected — or tied up in inventory.</Chip>}
        {end<0&&<Chip type="bad" label="Cash Warning">Ending cash is negative. The business can't meet obligations without more funding — a liquidity crisis regardless of what the P&L shows.</Chip>}
        {cfFin>0&&cfOp<0&&<Chip type="neutral" label="Funded by Borrowing">Cash position maintained by debt, not operations. Common in real estate — but operations must generate cash before loans come due.</Chip>}
      </div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────


function StatementShell(props){
  return(
    <div style={{background:"white",border:"1px solid #d0cfc9",borderRadius:4,overflow:"hidden",fontFamily:"'DM Sans',sans-serif",marginBottom:props.mb||0}}>
      {/* Header — mimics QuickBooks report header */}
      <div style={{borderBottom:"2px solid "+C.slate,padding:"18px 24px 14px",textAlign:"center"}}>
        <div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:19,color:C.slate,letterSpacing:"0.01em"}}>{props.company}</div>
        <div style={{fontSize:16,fontWeight:500,color:C.slate,marginTop:3}}>{props.title}</div>
        <div style={{fontSize:12,color:"#666",marginTop:2}}>{props.period}</div>
      </div>
      <div style={{padding:"0 0 16px"}}>
        {props.children}
      </div>
    </div>
  );
}

function SectionHeader(props){
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"12px 24px 3px",borderTop:props.borderTop?"1px solid #e8e6e0":undefined,marginTop:props.borderTop?10:0}}>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,color:C.slate,textTransform:"uppercase",letterSpacing:"0.06em"}}>{props.label}</span>
      {props.right&&<span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#666",textTransform:"uppercase",letterSpacing:"0.06em"}}>{props.right}</span>}
    </div>
  );
}

function LineItem(props){
  var indent=props.indent||0;
  var isNeg=typeof props.value==="number"&&props.value<0;
  var col=props.color||(isNeg?C.red:C.slate);
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"2px 24px",paddingLeft:(24+indent*18)+"px",background:props.shaded?"#faf9f6":undefined}}>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:props.muted?"#888":C.slate,fontStyle:props.italic?"italic":undefined,fontWeight:props.bold?500:300}}>{props.label}</span>
      {props.value!==undefined&&<span style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:props.bold?500:300,color:col,fontVariantNumeric:"tabular-nums",minWidth:90,textAlign:"right"}}>{typeof props.value==="number"?fmt(props.value):props.value}</span>}
    </div>
  );
}

function TotalLine(props){
  var isNeg=typeof props.value==="number"&&props.value<0;
  var col=props.color||(isNeg?C.red:C.slate);
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"5px 24px",borderTop:"1px solid "+(props.doubleLine?"#999":"#ccc"),borderBottom:props.doubleLine?"3px double #999":undefined,marginTop:props.mt||4,marginBottom:props.mb||0,background:props.highlighted?"rgba(0,212,180,0.06)":undefined}}>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:600,color:props.color||C.slate}}>{props.label}</span>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:props.large?15:13,fontWeight:700,color:col,fontVariantNumeric:"tabular-nums",minWidth:90,textAlign:"right"}}>{typeof props.value==="number"?fmt(props.value):props.value}</span>
    </div>
  );
}

function Spacer(){return <div style={{height:6}}/>;}

function NoteLine(props){
  return(
    <div style={{display:"flex",justifyContent:"space-between",padding:"2px 24px"}}>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",fontStyle:"italic"}}>{props.label}</span>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal,fontWeight:500,minWidth:90,textAlign:"right"}}>{props.value}</span>
    </div>
  );
}

// ── P&L STATEMENT ─────────────────────────────────────────────────────────────
function PLStatement(){
  // Project breakdown
  var projects=[
    {name:"Project 1 — 412 Ridgemont Ln", sale:348000, hc:200000, sc:16700, hold:25000},
    {name:"Project 2 — 88 Sycamore Dr",   sale:312000, hc:178000, sc:14200, hold:22000},
    {name:"Project 3 — 207 Blue Heron Ct",sale:364000, hc:206000, sc:18100, hold:38000},
  ];
  var totalRev=projects.reduce(function(s,p){return s+p.sale;},0);
  var totalHC=projects.reduce(function(s,p){return s+p.hc;},0);
  var totalSC=projects.reduce(function(s,p){return s+p.sc;},0);
  var totalHold=projects.reduce(function(s,p){return s+p.hold;},0);
  var totalCOGS=totalHC+totalSC+totalHold;
  var grossProfit=totalRev-totalCOGS;
  var opex={
    "Accounting & CPA Fees":14400,
    "Insurance — General Liability":8200,
    "Vehicle & Mileage":7600,
    "Software & Subscriptions":3800,
    "Marketing & Listing Costs":9600,
    "Office & Administrative":4200,
    "Professional Development":4200,
  };
  var totalOpex=Object.values(opex).reduce(function(s,v){return s+v;},0);
  var opinc=grossProfit-totalOpex;
  var interest=42000;
  var netIncome=opinc-interest;
  var [expanded,setExpanded]=useState(false);
  var [showProjects,setShowProjects]=useState(false);
  return(
    <StatementShell company="[Your LLC]" title="Profit & Loss" period="January 1 – December 31, 2024" mb={0}>
      <SectionHeader label="Income"/>
      {showProjects
        ? projects.map(function(p,i){return <LineItem key={i} label={p.name} value={p.sale} indent={1}/>;})
        : <LineItem label="Home Sale Proceeds (3 Projects)" value={totalRev} indent={1}/>
      }
      <button onClick={function(){setShowProjects(function(s){return !s;});}}
        style={{margin:"2px 24px 4px",fontSize:10,color:C.teal,background:"none",border:"none",cursor:"pointer",padding:0,letterSpacing:"0.05em",fontFamily:"'DM Sans',sans-serif"}}>
        {showProjects?"▲ Hide project detail":"▼ Show project detail"}
      </button>
      <TotalLine label="Total Income" value={totalRev} color={C.slate}/>
      <Spacer/>
      <SectionHeader label="Cost of Goods Sold"/>
      <LineItem label="Hard Costs" muted/>
      <LineItem label="Construction Labor & Subcontractors" indent={2} value={Math.round(totalHC*0.62)}/>
      <LineItem label="Materials & Supplies" indent={2} value={Math.round(totalHC*0.38)}/>
      <LineItem label="Soft Costs" muted indent={1}/>
      <LineItem label="Permits & Inspections" indent={2} value={Math.round(totalSC*0.45)}/>
      <LineItem label="Architect & Design Fees" indent={2} value={Math.round(totalSC*0.33)}/>
      <LineItem label="Closing Costs (Sale)" indent={2} value={Math.round(totalSC*0.22)}/>
      <LineItem label="Holding Costs" muted indent={1}/>
      <LineItem label="Construction Loan Interest" indent={2} value={Math.round(totalHold*0.58)}/>
      <LineItem label="Insurance — Builder's Risk" indent={2} value={Math.round(totalHold*0.24)}/>
      <LineItem label="Utilities & Property Taxes" indent={2} value={Math.round(totalHold*0.18)}/>
      <TotalLine label="Total Cost of Goods Sold" value={-totalCOGS} color={C.slate}/>
      <Spacer/>
      <TotalLine label="Gross Profit" value={grossProfit} color={grossProfit>0?C.green:C.red} highlighted mt={2} mb={2}/>
      <NoteLine label="Gross Margin" value={pct(grossProfit,totalRev)}/>
      <Spacer/>
      <SectionHeader label="Operating Expenses" borderTop/>
      {(expanded?Object.entries(opex):Object.entries(opex).slice(0,4)).map(function(e,i){return <LineItem key={i} label={e[0]} value={e[1]} indent={1}/>;}) }
      {!expanded&&<LineItem label={"+"+(Object.keys(opex).length-4)+" more expense categories..."} muted indent={1} italic/>}
      <button onClick={function(){setExpanded(function(s){return !s;});}}
        style={{margin:"2px 24px 4px",fontSize:10,color:C.teal,background:"none",border:"none",cursor:"pointer",padding:0,letterSpacing:"0.05em",fontFamily:"'DM Sans',sans-serif"}}>
        {expanded?"▲ Collapse":"▼ Expand all expenses"}
      </button>
      <TotalLine label="Total Operating Expenses" value={-totalOpex} color={C.slate}/>
      <Spacer/>
      <TotalLine label="Operating Income" value={opinc} color={opinc>0?C.green:C.red} highlighted mt={2} mb={2}/>
      <Spacer/>
      <SectionHeader label="Other Expenses" borderTop/>
      <LineItem label="Construction Loan Interest Expense" indent={1} value={interest}/>
      <TotalLine label="Total Other Expenses" value={-interest}/>
      <Spacer/>
      <TotalLine label="NET INCOME" value={netIncome} color={netIncome>0?C.teal:C.red} doubleLine highlighted large mt={6} mb={4}/>
      <NoteLine label="Net Margin" value={pct(netIncome,totalRev)}/>
    </StatementShell>
  );
}

// ── AMAZON P&L ────────────────────────────────────────────────────────────────
function AmazonPL(){
  var grossSalesTotal=248000;
  var yourShare=0.30;
  var yourRev=Math.round(grossSalesTotal*yourShare);
  var cogs={
    "Product Cost (COGS)":91200,
    "Amazon FBA Fees":26400,
    "Referral Fees (15%)":37200,
    "Inbound Freight & Prep":7200,
  };
  var totalCogsAll=Object.values(cogs).reduce(function(s,v){return s+v;},0);
  var yourCOGS=Math.round(totalCogsAll*yourShare);
  var yourGP=yourRev-yourCOGS;
  var opexAll={"PPC Advertising (Sponsored Products)":43600,"Helium 10 / Software":2800,"Storage & Long-Term Storage Fees":3200,"Returns Processing":2800,"Miscellaneous":1600};
  var totalOpexAll=Object.values(opexAll).reduce(function(s,v){return s+v;},0);
  var yourOpex=Math.round(totalOpexAll*yourShare);
  var yourNI=yourGP-yourOpex;
  return(
    <StatementShell company="[Amazon FBA Business] — Your 30% Share" title="Profit & Loss (Allocated)" period="July 1 – December 31, 2024 (6 Months)" mb={0}>
      <div style={{margin:"8px 24px 0",padding:"8px 12px",background:"rgba(0,212,180,0.06)",borderRadius:4,border:"1px solid rgba(0,212,180,0.2)"}}>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal,fontWeight:400}}>This statement reflects your 30% equity allocation. Full business figures are noted in italics.</span>
      </div>
      <Spacer/>
      <SectionHeader label="Income"/>
      <LineItem label="Product Sales Revenue (your 30%)" value={yourRev} indent={1}/>
      <LineItem label="Full business revenue: $248,000" indent={1} muted italic/>
      <TotalLine label="Total Income" value={yourRev} color={C.slate}/>
      <Spacer/>
      <SectionHeader label="Cost of Goods Sold"/>
      {Object.entries(cogs).map(function(e,i){return <LineItem key={i} label={e[0]+" (your 30%: "+fmt(Math.round(e[1]*yourShare))+")"} value={e[1]} indent={1} muted/>;})}
      <LineItem label="Your allocated COGS (30%)" value={yourCOGS} indent={1} bold/>
      <TotalLine label="Total Cost of Goods Sold (your share)" value={-yourCOGS} color={C.slate}/>
      <Spacer/>
      <TotalLine label="Gross Profit (your share)" value={yourGP} color={yourGP>0?C.green:C.red} highlighted mt={2} mb={2}/>
      <NoteLine label="Gross Margin" value={pct(yourGP,yourRev)}/>
      <Spacer/>
      <SectionHeader label="Operating Expenses" borderTop/>
      {Object.entries(opexAll).map(function(e,i){return <LineItem key={i} label={e[0]+" (your 30%: "+fmt(Math.round(e[1]*yourShare))+")"} value={e[1]} indent={1} muted/>;})}
      <LineItem label="Your allocated OpEx (30%)" value={yourOpex} indent={1} bold/>
      <TotalLine label="Total Operating Expenses (your share)" value={-yourOpex} color={C.slate}/>
      <Spacer/>
      <TotalLine label="NET INCOME (your 30% share)" value={yourNI} color={yourNI>0?C.teal:C.red} doubleLine highlighted large mt={6} mb={4}/>
      <NoteLine label="Net Margin" value={pct(yourNI,yourRev)}/>
      <NoteLine label="Annualized (your share)" value={fmt(yourNI*2)}/>
    </StatementShell>
  );
}

// ── BALANCE SHEET ─────────────────────────────────────────────────────────────
function BSStatement(){
  var cash=38000,fixedNet=52000,ta=cash+fixedNet;
  var cc=3200,tl=cc,equity=86800,tlpluseq=tl+equity;
  return(
    <StatementShell company="[Your LLC]" title="Balance Sheet" period="As of December 31, 2024" mb={0}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
        {/* LEFT — ASSETS */}
        <div style={{borderRight:"1px solid #e8e6e0"}}>
          <SectionHeader label="Assets"/>
          <LineItem label="Current Assets" bold muted/>
          <LineItem label="Checking — Business Operating" value={35200} indent={2}/>
          <LineItem label="Savings — Project Reserve" value={2800} indent={2}/>
          <LineItem label="Accounts Receivable" value={0} indent={2} muted/>
          <LineItem label="Construction in Progress" value={0} indent={2} muted/>
          <TotalLine label="Total Current Assets" value={cash} mt={6}/>
          <Spacer/>
          <LineItem label="Fixed Assets" bold muted/>
          <LineItem label="Ford F-250 Work Truck" value={38000} indent={2}/>
          <LineItem label="Equipment & Tools" value={24000} indent={2}/>
          <LineItem label="Less: Accumulated Depreciation" value={-10000} indent={2} color="#999"/>
          <TotalLine label="Total Fixed Assets (Net)" value={fixedNet} mt={6}/>
          <Spacer/>
          <TotalLine label="TOTAL ASSETS" value={ta} doubleLine large color={C.teal} highlighted mt={4} mb={4}/>
        </div>
        {/* RIGHT — LIABILITIES + EQUITY */}
        <div>
          <SectionHeader label="Liabilities & Equity"/>
          <LineItem label="Current Liabilities" bold muted/>
          <LineItem label="Business Credit Card" value={3200} indent={2}/>
          <LineItem label="Accounts Payable" value={0} indent={2} muted/>
          <LineItem label="Current Portion — Loans" value={0} indent={2} muted/>
          <TotalLine label="Total Current Liabilities" value={tl} mt={6}/>
          <Spacer/>
          <LineItem label="Long-Term Liabilities" bold muted/>
          <LineItem label="Construction Loans (all paid)" value={0} indent={2} muted/>
          <TotalLine label="Total Long-Term Liabilities" value={0} mt={6}/>
          <Spacer/>
          <TotalLine label="Total Liabilities" value={tl} mt={2}/>
          <Spacer/>
          <LineItem label="Owner's Equity" bold muted/>
          <LineItem label="Member Capital Contributions" value={45000} indent={2}/>
          <LineItem label="Retained Earnings — Prior Years" value={0} indent={2}/>
          <LineItem label="Net Income — Current Year" value={equity-45000} indent={2}/>
          <TotalLine label="Total Equity" value={equity} mt={6} color={C.green}/>
          <Spacer/>
          <TotalLine label="TOTAL LIABILITIES + EQUITY" value={tlpluseq} doubleLine large color={C.teal} highlighted mt={4} mb={4}/>
          <div style={{display:"flex",justifyContent:"center",padding:"6px 24px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(0,212,180,0.08)",borderRadius:4,padding:"5px 12px"}}>
              <span style={{fontSize:16,color:C.teal}}>✓</span>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal,fontWeight:500}}>Assets = Liabilities + Equity ({fmt(ta)} = {fmt(tl)} + {fmt(equity)})</span>
            </div>
          </div>
        </div>
      </div>
      {/* Key ratios row */}
      <div style={{borderTop:"1px solid #e8e6e0",padding:"12px 24px",marginTop:8}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:"#888",marginBottom:8}}>Key Ratios</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
          {[
            {label:"Current Ratio",value:(cash/tl).toFixed(2)+"x",note:"Current assets / current liabilities",color:C.green},
            {label:"Working Capital",value:fmt(cash-tl),note:"Current assets minus current liabilities",color:C.green},
            {label:"Debt-to-Equity",value:(tl/equity).toFixed(2)+"x",note:"Total liabilities / total equity",color:C.teal},
          ].map(function(r){return(
            <div key={r.label} style={{background:"#faf9f6",borderRadius:4,padding:"10px 12px",border:"1px solid #e8e6e0"}}>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:"#888",marginBottom:3}}>{r.label}</div>
              <div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:20,color:r.color}}>{r.value}</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:"#aaa",marginTop:2,lineHeight:1.3}}>{r.note}</div>
            </div>
          );})}
        </div>
      </div>
    </StatementShell>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────


function CapstoneTabs(){
  var ts=useState("pl");var tab=ts[0];var setTab=ts[1];
  var TABS=[{id:"pl",label:"Spec House P&L",icon:"📊"},{id:"amz",label:"Amazon P&L",icon:"📦"},{id:"bs",label:"Balance Sheet",icon:"⚖️"}];
  var desc=tab==="pl"?"This is exactly what your CPA produces and QuickBooks generates. Click expand arrows to see project detail.":tab==="amz"?"Your 30% allocated share. Full business figures shown in italics alongside your allocation.":"The balance sheet is a two-column document — assets on the left, liabilities and equity on the right. They must always equal each other.";
  return(
    <div style={{marginBottom:40}}>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
        {TABS.map(function(t){var a=tab===t.id;return(
          <button key={t.id} onClick={function(){setTab(t.id);}} style={{padding:"6px 14px",borderRadius:16,border:"1.5px solid "+(a?C.teal:"rgba(28,31,46,0.2)"),background:a?C.teal:"transparent",color:a?C.slate:C.slate,fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:a?500:300,cursor:"pointer",display:"flex",alignItems:"center",gap:5}}>
            <span>{t.icon}</span><span>{t.label}</span>
          </button>
        );})}
      </div>
      <div style={{display:"flex",alignItems:"flex-start",gap:8,background:TF,border:"1px solid rgba(0,212,180,0.25)",borderRadius:8,padding:"10px 14px",marginBottom:16}}>
        <span style={{color:C.teal,fontSize:15,marginTop:1}}>💡</span>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,color:C.slate}}>{desc}</span>
      </div>
      {tab==="pl"&&<PLStatement/>}
      {tab==="amz"&&<AmazonPL/>}
      {tab==="bs"&&<BSStatement/>}
    </div>
  );
}

function ToolCallout(props){
  var isBs=props.tool==="bs";
  var isPl=props.tool==="pl";
  return(
    <div style={{marginBottom:52}}>
      <div style={{borderTop:"2px solid "+C.dark,marginBottom:40}}/>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.22em",color:C.teal,textTransform:"uppercase",marginBottom:12}}>Interactive Tool</div>
      <h3 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:24,color:C.slate,marginBottom:8}}>{isBs?"Explore a Real Balance Sheet":isPl?"Explore a Real P&L Statement":"Explore a Real Cash Flow Statement"}</h3>
      <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:16,color:C.slate,opacity:0.65,marginBottom:20,lineHeight:1.75}}>{isBs?"Switch between Spec House Mid-Build, Post-Flip, and Amazon Store presets. Change any number and watch the equation respond — exactly what QuickBooks shows.":isPl?"Change any number and watch the P&L recalculate instantly. Switch between Spec House, Single Flip, Amazon, and Blank presets.":"Switch presets to see how cash moves differently across business types. This statement explains why profitable businesses sometimes run out of money."}</p>
      <div onClick={function(){setView("tool-"+(props.tool||"pl"));if(scrollRef.current)scrollRef.current.scrollTop=0;}} style={{background:C.mid,borderRadius:14,padding:"24px 28px",cursor:"pointer",transition:"opacity 0.2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.88";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
        <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div style={{fontSize:32}}>{isBs?"⚖️":"💵"}</div>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:18,color:C.ivory,marginBottom:4}}>{isBs?"Balance Sheet Explorer":isPl?"P&L Statement Explorer":"Cash Flow Explorer"}</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:C.ivory,opacity:0.65}}>{isBs?"Presets: Mid-Build · Post-Flip · Amazon · Blank":isPl?"Presets: Spec House · Single Flip · Amazon · Blank":"Presets: Spec House Year · Completed Flip · Amazon · Blank"}</div>
          </div>
          <div style={{background:TF,border:"1px solid "+C.teal,borderRadius:8,padding:"10px 18px",textAlign:"center",flexShrink:0}}>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.teal,marginBottom:3}}>Click to Open</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.ivory}}>Opens in Tools →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Certificate(){
  return(
    <div style={{marginTop:52,background:C.mid,borderRadius:20,padding:"44px 40px",textAlign:"center",border:"2px solid "+C.teal}}>
      <div style={{fontSize:40,marginBottom:16}}>🎓</div>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.22em",color:C.teal,textTransform:"uppercase",marginBottom:12}}>Course Complete</div>
      <h2 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:30,color:C.ivory,letterSpacing:"-0.02em",marginBottom:8}}>Money in Motion</h2>
      <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:17,color:C.ivory,opacity:0.65,lineHeight:1.75,maxWidth:420,margin:"0 auto 24px"}}>You've completed all 14 modules. You can read financial statements, speak the language of capital, and understand the numbers behind every deal.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,maxWidth:440,margin:"0 auto"}}>
        {["14 Modules","3 Statement Types","Real-World Application"].map(function(item){return(<div key={item} style={{background:"rgba(0,212,180,0.1)",borderRadius:8,padding:"10px 6px"}}><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal,fontWeight:400,lineHeight:1.4}}>{item}</div></div>);})}
      </div>
    </div>
  );
}

var ALL_MODS=[

  { id:1, label:"Module 1 · 30 min", title:"What Is Accounting\n& Why It Matters",
    intro:"The language every entrepreneur needs to speak — and the tool that tells you whether a deal actually worked.",
    sections:[
      { title:"Why This Matters to You", paras:[
        "Imagine you sold a spec house for $310,000. Six months of work. Your investor is calling. Was it a success? Before you can answer honestly, you need to know total costs, what you owe the investor, whether subs are paid, and what's left for you. That answer comes from [[accounting]].",
        "[[accounting|Accounting]] is the system that turns business activity into information you can act on. It tells you whether a deal made money, whether a business is healthy, and whether you're building toward something real.",
        "Every business you'll be part of — spec houses, flips, Amazon teams, investor partnerships — runs on [[accounting]]. The people at the table with capital speak this language. The more fluently you speak it, the stronger your position.",
      ]},
      { title:"What Accounting Actually Is", paras:[
        "At its core, [[accounting]] is the system for tracking, recording, and reporting what happens financially in a business. Think of it as a scoreboard — tracking dollars in, dollars out, what's owned, and what's owed.",
        "[[bookkeeping|Bookkeeping]] is the day-to-day part: every time money moves — you pay a subcontractor, a deposit clears, you pull a draw — that gets recorded. [[accounting|Accounting]] is stepping back to analyze all those records and understand what they mean.",
        "Think of it this way: [[bookkeeping]] is keeping a detailed food diary every day. [[accounting|Accounting]] is having a nutritionist review that diary and tell you whether your diet is actually working. You need both.",
      ]},
      { title:"Who Uses Accounting Information?", paras:[
        "[[accounting|Accounting]] isn't just for tax time. The [[financial statements]] it produces are used by almost everyone connected to a business.",
        "Investors use [[financial statements]] to decide whether to put money in — or ask for it back. Lenders use them to evaluate credit. You use them to see if the business is actually working and where costs are running high.",
        "In real estate: when you present a spec house deal, report on a flip, or summarize Amazon results to your team, that communication runs through [[accounting]]. Being able to read and speak to those numbers is expected in serious business conversations.",
      ]},
      { title:"The Rules of the Game: GAAP", paras:[
        "In U.S. accounting, the agreed-upon rules are called [[gaap|GAAP]] — Generally Accepted Accounting Principles. [[gaap|GAAP]] ensures that when two businesses both report $500,000 in [[revenue]], they mean exactly the same thing.",
        "Under [[gaap|GAAP]], businesses use one of two methods. [[accrual accounting|Accrual accounting]] records [[revenue]] when earned and [[expenses]] when incurred — even if cash hasn't moved. [[cash basis accounting|Cash basis accounting]] only records when cash changes hands. Investors typically prefer accrual because it shows a fuller picture.",
        "You don't need to memorize every rule — but when a [[cpa|CPA]] mentions 'GAAP financials,' you now know they mean documents prepared to a verifiable, standardized format.",
      ]},
      { title:"Profit, Cash Flow, and Why Both Matter", paras:[
        "[[profit|Profit]] — [[revenue]] minus all [[expenses]] — is the most basic measure of success. But a business can be profitable on paper and still run out of money. That's where [[cash flow]] becomes critical.",
        "[[profit|Profit]] is what the scoreboard shows. [[cash flow|Cash flow]] determines whether the lights stay on. You'll go deep on this distinction in Module 9 — it's one of the most important concepts in all of business finance.",
        "Success looks different across your ventures. A spec house has a clear start and end — you measure [[profit]] at closing. An Amazon business is ongoing — tracking monthly [[revenue]], [[expenses]], and [[cash flow]] continuously. Same concepts, different rhythms.",
      ]},
      { title:"How Accountants Can Help You", paras:[
        "You don't need to become a [[cpa|CPA]]. But you need to know enough to work with one effectively. Entrepreneurs who get the most value from their accountants ask the right questions and actually understand the answers.",
        "A skilled accountant does more than taxes. They help you structure deals, track project-by-project [[profit]], advise on entity structure, flag problems early, and present credible numbers to investors and lenders.",
        "The goal of this course is financial literacy — fluent enough in the language of numbers to hold your own in any business conversation, evaluate deals with clear eyes, and build things that actually work.",
      ]},
    ],
    cfu:["In your own words, what's the difference between bookkeeping and accounting? Try to use an example from real estate or any business you've been part of.",
         "Name two people — other than yourself — who might want to look at a business's financial statements. What would each of them be looking for?"],
    assessment:{ title:"Putting It in Your Own Words",
      scenario:"You just wrapped up your first spec house. A friend thinking about real estate asks: \"So how do you know if a project actually made money?\"\n\n1. What is accounting, and why is it the tool you'd use to answer that question?\n\n2. Your friend says \"I'll just track everything in my head.\" Explain the difference between bookkeeping and accounting, and why both matter.\n\n3. Besides you, who else might want to know the financial results — and why would each of them care?",
      sys:"You are a warm, direct accounting tutor for Money in Motion. Module 1 covered: what accounting is vs bookkeeping, who uses financial statements, GAAP basics, accrual vs cash basis, profit vs cash flow concept, and how CPAs help. Give mentor-style feedback in 3 paragraphs: what they got right, any gaps corrected kindly, and one real-world connection to spec houses or investors. No grades. Warm tone.",
    },
    yt:{ title:"Accounting 101 — What Is Accounting?", ch:"Accounting Stuff", why:"Covers the same foundational concepts from Module 1. A great way to see the same ideas explained visually.", url:"https://www.youtube.com/watch?v=yYX4bvQSqbo" },
  },
  { id:2, label:"Module 2 · 30 min", title:"The People Behind\nthe Numbers",
    intro:"Knowing who does what — and when to hire them — is one of the most practical business skills you'll build.",
    sections:[
      { title:"Why It Matters Who You Hire", paras:[
        "As you get into deals, you'll need people around you who understand numbers. Hiring wrong in accounting is expensive twice — once when you pay them, and again when you fix what they missed.",
        "There's a spectrum of accounting professionals, from entry-level [[bookkeeper|bookkeepers]] to licensed [[cpa|CPAs]] to senior [[cfo|CFOs]]. Each does something different. You need to know what each is capable of so you can build the right team at the right time.",
        "Think of it like a construction crew: you don't hire an architect to swing a hammer, and you don't ask a laborer to pull permits. The right person for the right job — same principle applies to accounting.",
      ]},
      { title:"Bookkeepers vs. CPAs: Know the Difference", paras:[
        "A [[bookkeeper]] handles day-to-day recording — categorizing expenses, reconciling bank accounts, making sure every dollar that moved gets logged in the right place. They're the engine that keeps records current.",
        "A [[cpa|CPA]] works at a higher level. They analyze the records the bookkeeper maintains, produce [[financial statements]], advise on tax strategy, and help you make decisions. Think of the bookkeeper as a photographer taking daily pictures — and the CPA as the editor turning those pictures into a story you can act on.",
        "In practice: most small business owners hire a part-time [[bookkeeper]] and bring in a [[cpa|CPA]] for quarterly reviews, annual taxes, and major financial decisions. Running a business without a bookkeeper is like managing a construction project without tracking what's been spent — it catches up with you.",
      ]},
      { title:"The CPA: What the License Actually Means", paras:[
        "Not every accountant is a [[cpa|CPA]]. The designation requires passing one of the hardest professional licensing exams in the U.S., meeting state education requirements, and completing supervised work experience. It's earned.",
        "A licensed [[cpa|CPA]] can legally sign off on audited [[financial statements]] — the kind investors and lenders may require. More importantly, they're held to professional standards by state licensing boards. If they do something wrong, there are real consequences. That accountability protects you.",
        "Not all CPAs specialize in the same things. A CPA who works with salaried employees won't give you the same value as one who knows real estate investors and small business operators. Specialty matters — you're looking for someone who knows your world.",
      ]},
      { title:"The AICPA and Why Standards Matter", paras:[
        "The [[aicpa|AICPA]] — American Institute of Certified Public Accountants — is the national body that governs the profession. It sets the code of ethics all CPAs must follow, develops the CPA exam, and establishes professional standards.",
        "When you hire a [[cpa|CPA]], they operate within this framework. There's accountability beyond just your handshake. If something goes wrong, there's a formal process — that matters when you're working with investors or lenders.",
        "You don't need to know the AICPA's rules in detail. But when a professional says they're a licensed CPA, they're telling you they're accountable to something larger than just your agreement.",
      ]},
      { title:"Other Specialists You'll Encounter", paras:[
        "A [[tax accountant]] focuses narrowly on tax compliance and strategy — minimizing what you owe legally, structuring transactions efficiently, catching deductions. For anyone doing real estate deals, this specialization is critical.",
        "A [[cfo|CFO]] — Chief Financial Officer — oversees a company's entire financial picture: strategy, reporting, cash management, investor relations. Early-stage businesses can't usually afford a full-time CFO, but a trusted CPA often plays this advisory role informally.",
        "You may also encounter [[forensic accountant|forensic accountants]] — professionals who investigate financial records for fraud or legal disputes. As you work with investors and partners, knowing this role exists is useful.",
      ]},
      { title:"Choosing the Right Professional", paras:[
        "At your stage: a [[bookkeeper]] (or bookkeeping software) for monthly records, and a [[cpa|CPA]] who specializes in real estate investors and small business owners. Don't hire a CPA who mostly works with W-2 employees — their mindset is different.",
        "When you interview a [[cpa|CPA]], ask: Do you work with real estate investors? Have you set up LLCs for property-holding? How do you handle job costing for construction? The right CPA will have clear answers. The wrong one will give vague reassurances.",
        "A great accountant is a proactive partner — they call you before tax season to discuss strategy, flag issues early, and help you think about new ventures before you close. If your accountant only appears in April, you're not getting full value.",
      ]},
    ],
    cfu:["In your own words, explain the difference between a bookkeeper and a CPA. If you were starting a real estate venture today, which would you hire first — and why?",
         "Name two types of accounting specialists from this module. For each one, describe a real situation where someone in your business world might need them."],
    assessment:{ title:"Building Your Team",
      scenario:"Skip tells you: \"Now that you're doing deals, you need to get your accounting set up properly. Go find yourself a good CPA.\"\n\n1. What's the difference between a bookkeeper and a CPA — and why might you need both as your business grows?\n\n2. Write three questions you would ask a CPA when interviewing them for your real estate business. What answers would make you trust them?\n\n3. What does it mean that a CPA is \"licensed\" — and why does that accountability matter when you're working with investors?",
      sys:"Warm accounting tutor. Module 2 covered: bookkeepers vs accountants vs CPAs, CPA licensing, the AICPA, tax accountants, CFOs, forensic accountants, and how to choose the right professional. Give 3-paragraph feedback: what they got right, gaps corrected kindly, and a practical connection to investor conversations. Warm tone, no grades.",
    },
    yt:{ title:"Bookkeeper vs. Accountant vs. CPA", ch:"Accounting Stuff", why:"Breaks down exactly the distinctions in Module 2. Watch to reinforce who does what and which one you need.", url:"https://www.youtube.com/watch?v=_F6a0ddbjtI" },
  },
  { id:3, label:"Module 3 · 30 min", title:"The Accounting\nFramework",
    intro:"Every financial record in every business runs on the same underlying logic. Once you understand the framework, the rest of accounting clicks.",
    sections:[
      { title:"Everything Starts With Accounts", paras:[
        "In accounting, an 'account' isn't a bank account — it's a category. Every type of financial activity gets its own account so you can track and analyze it separately. A spec house project might have accounts for land costs, construction materials, subcontractor payments, permits, and sale proceeds.",
        "The organized master list of all these categories is called the [[chart of accounts]]. Think of it as the filing system for the entire business. When a [[transaction]] happens — you buy lumber, receive a deposit, pay a utility bill — it gets sorted into the right account.",
        "The more clearly defined your accounts, the more clearly you can see where money went — and whether each deal actually worked. Vague accounts produce vague answers. Specific accounts produce specific insights.",
      ]},
      { title:"The Accounting Equation: The Rule That Never Breaks", paras:[
        "There is one rule in accounting that is always, without exception, true: [[assets]] = [[liabilities]] + [[equity]]. This is the [[accounting equation]], and it is the foundation on which every financial record is built.",
        "Read it this way: everything a business owns ([[assets]]) was financed either by borrowing ([[liabilities]]) or by the owners ([[equity]]). There's no third option. Buy a property for $200K using $50K down and a $150K loan — asset $200K, liability $150K, equity $50K. The equation balances.",
        "Every [[transaction]] changes the numbers — but the equation must always stay in balance. If it doesn't, something was recorded wrong. This built-in check is one of the reasons accounting is so reliable when done correctly.",
      ]},
      { title:"Debits and Credits — Without the Confusion", paras:[
        "Here's where most beginners get confused: in accounting, [[debit]] and [[credit]] don't mean 'add' and 'subtract.' They simply mean 'left side' and 'right side' of an account. Every [[transaction]] affects at least two accounts. This is [[double-entry accounting]].",
        "The easier way to understand it: every financial event has two sides to the story. When you buy $3,000 of lumber with cash, two things happen — you gained materials (materials account goes up) and you lost cash (cash account goes down). Both sides of that story get recorded. That's all debits and credits are.",
        "[[double-entry accounting|Double-entry accounting]] creates a self-checking system. If every [[transaction]] has a matching debit and credit, errors get caught automatically. A transaction that only has one entry breaks the system and gets flagged. Far more reliable than a simple spreadsheet.",
      ]},
      { title:"What Counts as a Transaction?", paras:[
        "A [[transaction]] is any event that changes the financial position of the business. This includes sales, purchases, payments to contractors, loan draws, loan repayments, and even recording [[depreciation]] on equipment.",
        "One important distinction: signing a contract is NOT a [[transaction]]. A contract is a promise. The transaction happens when money or obligation actually moves — when the deposit clears, when an invoice is due, when payment is made. Until value actually transfers, there's nothing to record.",
        "In real estate, deals involve a lot of paperwork before money moves. The accounting doesn't care about the paperwork — it cares about the moment something of value actually changes hands. Understanding this will help you read [[financial statements]] and know what's recorded vs. what's still pending.",
      ]},
      { title:"The Accounting Cycle", paras:[
        "Every accounting period follows the same sequence. This is the [[accounting cycle]]: analyze transactions → record them as [[journal entry|journal entries]] → post to the [[general ledger]] → prepare a trial balance → produce [[financial statements]].",
        "Modern software automates most of these steps. When a [[bookkeeper]] categorizes a transaction in QuickBooks, they're recording a [[journal entry]]. The software posts it to the [[general ledger]] and updates balances automatically. What once took days by hand now happens instantly.",
        "Understanding the [[accounting cycle]] tells you what your bookkeeper is actually doing and helps you ask better questions. When a number looks wrong, you can ask 'which journal entry created this?' rather than just shrugging at a report you don't trust.",
      ]},
      { title:"Building the Habit of Organization", paras:[
        "The best accounting system fails if it isn't fed accurate, timely information. Non-negotiable habits: separate business and personal finances completely, document every expense, and reconcile accounts monthly.",
        "For real estate, tracking each project in its own set of accounts — called job costing — is essential for knowing whether each deal made money. You'll go deep on this in Module 10. But the foundation is here: clean records, separated by project, from day one of every deal.",
        "Poor records don't just cause tax headaches — they cost money. Missed deductions, misread performance, deals that look profitable but aren't — all trace back to records that weren't kept properly. The discipline you build now compounds into financial clarity that most people in your space simply don't have.",
      ]},
    ],
    cfu:["The accounting equation is Assets = Liabilities + Equity. In your own words, explain what this means. Then give a simple example using a real estate deal or business situation.",
         "What's the difference between a transaction and a signed contract? Why does this distinction matter in accounting?"],
    assessment:{ title:"Your Buddy's New Business",
      scenario:"Your buddy is starting a handyman business and tells you: \"I'm just going to keep a spreadsheet with money coming in and money going out. That's all I need, right?\"\n\n1. Based on the accounting equation, what is your buddy's spreadsheet missing — and why does that gap matter for understanding whether his business is truly healthy?\n\n2. What is double-entry accounting in plain language — and what problem does it solve that a simple income/expense spreadsheet doesn't?\n\n3. Your buddy pays $800 cash for new tools. In plain English, describe the two things that just happened in his business records — and why both need to be captured.",
      sys:"Warm accounting tutor. Module 3 covered: chart of accounts, the accounting equation, debits and credits conceptually, double-entry accounting, what counts as a transaction vs a contract, the accounting cycle, and organized records. No math. Give 3-paragraph feedback: what they got right, gaps corrected, and a practical real-world connection. Warm tone, no grades.",
    },
    yt:{ title:"Debits and Credits & the Accounting Equation", ch:"Accounting Stuff", why:"One of the best explanations of debits, credits, and the accounting equation available. Watch it and Module 3's framework will click.", url:"https://www.youtube.com/watch?v=VhwZ9t2b3Zk" },
  },
  { id:4, label:"Module 4 · 30 min", title:"Assets —\nWhat You Own",
    intro:"Assets are the foundation of your financial picture. Understanding what they are and how they're categorized is how you start reading what a business actually owns.",
    sections:[
      { title:"Back to the Accounting Equation", paras:[
        "You learned that the [[accounting equation]] is: [[assets]] = [[liabilities]] + [[equity]]. Now let's go deep on the left side — [[assets]] — and understand exactly what belongs there and why.",
        "Assets appear on the [[balance sheet]], a financial statement that shows a snapshot of what a business owns and owes at a single moment in time. When an investor asks 'What does this business look like right now?' — the [[balance sheet]] is the answer.",
        "As you move through real estate deals and business ventures, you'll be asked about assets regularly — by lenders evaluating a loan, by investors reviewing a proposal, by partners assessing what you bring to a deal.",
      ]},
      { title:"What Is an Asset?", paras:[
        "An asset must meet three criteria: it must be owned or controlled by the business, it must be expected to provide future economic benefit, and it must have measurable monetary value. That covers cash, property, equipment, vehicles, [[inventory]], and even money owed to you.",
        "Assets aren't limited to physical things. If a customer owes you $15,000 after a completed project, that's [[accounts receivable]] — an asset. The money isn't in your account yet, but you have a documented right to receive it.",
        "For a spec house builder, assets might include: the land purchased, the structure under construction, materials on-site, the construction account balance, and tools and equipment. Each has monetary value and contributes to the business's financial position.",
      ]},
      { title:"Current Assets: The Liquid Layer", paras:[
        "[[current assets]] are those expected to be converted to cash or used up within one year. The most common: cash, [[accounts receivable]], and [[inventory]]. These represent the short-term financial health of the business.",
        "For a spec house builder, the biggest current asset while a project is underway is often the property itself — because the plan is to sell it within the year. That construction-in-progress sits on the books as [[inventory]] (a current asset) until the sale closes. For an Amazon seller, [[inventory]] in the warehouse is also a current asset — it's expected to become cash when it sells.",
        "Strong current assets — especially cash — mean a business can pay its bills, fund the next deal, and weather unexpected costs. A business that's profitable but low on current assets can still get into serious trouble quickly.",
      ]},
      { title:"Fixed Assets: The Long Game", paras:[
        "[[fixed assets]] — also called non-current assets — are long-term items used in the business, not intended for quick sale. Property you plan to hold, heavy equipment, company vehicles, computers — these support operations over multiple years.",
        "Here's an important real estate distinction: the spec house you're building is NOT a fixed asset — it's [[inventory]]. You intend to sell it. But your construction truck? Fixed asset. Your table saw? Fixed asset. Land held for ten years as a long-term investment? Fixed asset. The category depends on intent, not just what the item is.",
        "Land behaves differently from other fixed assets — it doesn't wear out, so you can't [[depreciation|depreciate]] it. A piece of land bought for $80,000 stays on the books at $80,000 indefinitely, even if its market value changes significantly.",
      ]},
      { title:"Depreciation: When Value Fades", paras:[
        "When you buy a fixed asset like a truck, you can't count the entire purchase as an expense in year one — even though you paid it all at once. Instead, [[depreciation]] spreads that cost over the asset's useful life. A $30,000 truck over 5 years = $6,000/year in depreciation expense.",
        "[[depreciation]] matters for two reasons: it matches the cost of the asset to the periods it's generating value (more accurate), and it's a real expense that reduces your taxable income even though no cash left your account. Your [[cpa|CPA]] will track this carefully — it's one of the most significant tax tools available to business owners.",
        "Real estate investors use [[depreciation]] strategically. Investment properties can be depreciated over 27.5 years (residential) — meaning a property that's [[appreciation|appreciating]] in market value is simultaneously generating depreciation expense on paper, shielding [[revenue]] from taxes.",
      ]},
      { title:"Assets in Your Business World", paras:[
        "Every venture has a different asset profile. A spec house during construction: main asset is the work-in-progress property (current asset / [[inventory]]), plus tools and equipment ([[fixed assets]]), plus the project bank account (cash). After the sale closes, the property becomes cash and the picture changes completely.",
        "For an Amazon business, [[inventory]] is typically the largest asset — and managing it well is critical. Too much ties up cash. Too little means missed sales. The inventory line on the [[balance sheet]] tells investors how much money is sitting in unsold products.",
        "Get in the habit of asking: what does this business own? What's liquid, and what's locked up long-term? A business that looks profitable but has most of its value tied up in illiquid assets may struggle to operate day-to-day.",
      ]},
    ],
    cfu:["What's the difference between a current asset and a fixed asset? Give one real example of each from a real estate context and one from an Amazon business.",
         "Explain depreciation in your own words. Why is it recorded as an expense even though no cash left the business when it's recorded?"],
    assessment:{ title:"What Does the Project Own?",
      scenario:"An investor considering a spec house deal asks: \"Walk me through what the project actually owns right now.\" The house is six weeks into construction.\n\n1. List at least four assets the project likely has. For each one, identify whether it's a current asset or a fixed asset — and explain why you categorized it that way.\n\n2. You mention the construction truck. The investor asks, \"Is it losing value?\" Explain depreciation to them in plain terms.\n\n3. The investor asks why the spec house itself is listed as inventory rather than a fixed asset. How would you explain the distinction?",
      sys:"Warm accounting tutor. Module 4 covered: what an asset is, current assets vs fixed assets, accounts receivable, inventory, cash, depreciation conceptually, appreciation, the balance sheet intro, and how asset profiles differ across real estate and Amazon businesses. Give 3-paragraph feedback: what they got right, gaps corrected kindly, and a practical connection to investor conversations. Warm tone, no grades.",
    },
    yt:{ title:"Assets — Current vs. Fixed Assets Explained", ch:"Accounting Stuff", why:"A clear visual walkthrough of current vs. fixed assets with real-world examples. Great for reinforcing Module 4 before moving on.", url:"https://www.youtube.com/watch?v=CMv1zlZhb4Q" },
  },
  { id:5, label:"Module 5 · 30 min", title:"Liabilities & Equity\n— What You Owe & Own",
    intro:"The right side of the accounting equation tells the story of how a business is financed. Understanding it changes how you read every deal.",
    sections:[
      { title:"The Right Side of the Equation", paras:[
        "In Module 4 you went deep on [[assets]] — everything a business owns. Now it's time for the right side of the [[accounting equation]]: [[liabilities]] + [[equity]]. This side answers: how was everything you own actually paid for?",
        "Every asset was financed one of two ways — borrowed money ([[liabilities]]) or the owner's own capital ([[equity]]). A spec house bought for $250,000 using a $200,000 [[construction loan]] and $50,000 of your own cash: $200,000 is a liability, $50,000 is equity, the asset is $250,000. The equation balances.",
        "Lenders and investors look at this ratio constantly — how much is borrowed vs. owned tells them how much risk is in the deal. The clearer you are on this, the more credible you look across the table.",
      ]},
      { title:"What Are Liabilities?", paras:[
        "[[liabilities|Liabilities]] are financial obligations — what the business owes to outside parties. This includes bank loans, unpaid subcontractor invoices, credit card balances, construction draws not yet repaid, and any other commitment requiring future payment.",
        "A critical distinction: signing a contract to buy materials is not yet a liability. The liability appears when goods or services are actually delivered and you're obligated to pay. Until something transfers, there's nothing to record.",
        "Liabilities aren't inherently bad. Used strategically, they're how you scale — doing more deals than your cash alone allows. The risk is when liabilities outpace your ability to service them, especially when a project runs long or a sale falls through.",
      ]},
      { title:"Current vs. Long-Term Liabilities", paras:[
        "[[current liabilities]] are due within one year: unpaid subcontractor invoices ([[accounts payable]]), short-term credit lines, near-term loan payments. These directly affect cash flow and need active management.",
        "[[long-term liabilities]] extend beyond one year: a construction loan rolling into a mortgage, a multi-year business loan, a [[notes payable|note payable]] to a private lender. These shape the long-term financial structure of the deal or business.",
        "For a spec house, your biggest liability during construction is almost always the [[construction loan]] — a short-term instrument that funds the build in stages called draws. Understanding draw schedules, interest costs, and loan maturity dates is essential deal knowledge you'll build on in Module 10.",
      ]},
      { title:"Equity: What's Actually Yours", paras:[
        "[[equity]] is the residual — what's left after subtracting all [[liabilities]] from all [[assets]]. A project with $300,000 in assets and $220,000 in liabilities has $80,000 in equity. That's what the owner keeps if everything were liquidated at book value.",
        "[[owner's equity]] grows two ways: putting more capital in, or the business generating [[retained earnings]] — profits kept in the business rather than distributed. It shrinks when the business loses money or when owners take money out (called a draw).",
        "In investor deals, equity is where the conversation about ownership and returns lives. When a capital partner puts in $120,000 expecting a 20% return, they're talking about their equity position — their claim on the deal's value.",
      ]},
      { title:"Leverage: A Double-Edged Tool", paras:[
        "[[leverage]] — using borrowed money to control more assets than cash allows — is one of the core mechanics of real estate wealth-building. With $50,000 of your own money and $200,000 borrowed, you control a $250,000 asset. If it appreciates to $300,000, your $50K equity became $100K — a 100% return on your own capital.",
        "The same math works in reverse. If costs overrun or the market shifts, the liability is fixed while the asset value drops. Your equity gets squeezed — or wiped out. This is why serious investors scrutinize debt structure carefully.",
        "The balance sheet shows exactly where you stand: what you own, what you owe, and the gap between them. For every deal you enter, ask: what does the liability structure look like, and what happens to equity if something goes wrong?",
      ]},
      { title:"Reading the Right Side in Real Life", paras:[
        "When you sit across from Skip or a capital partner and they ask about the financials, they're mentally running the [[accounting equation]]. What does the project own, what does it owe, and what's the equity cushion? Clean answers to those three questions signal financial fluency.",
        "For an Amazon business, liabilities might include inventory purchased on a business card, a small business loan, or outstanding supplier balances. Equity is built-up retained profits reinvested over time. Same logic, smaller numbers.",
        "As your ventures grow you'll see complex liability structures — multiple lenders, seller financing, investor notes, partnership layers. The vocabulary you're building now is the foundation for all of it.",
      ]},
    ],
    cfu:["Explain the difference between current liabilities and long-term liabilities. Give one example of each from a real estate project.",
         "In your own words, what is equity? How does it grow — and what can shrink it?"],
    assessment:{ title:"The Deal Structure Conversation",
      scenario:"A private lender asks: Walk me through how this spec house deal is structured financially.\n\nProject details: Land and construction value: $280,000. Construction loan balance: $210,000. Your own capital invested: $70,000.\n\n1. Using the accounting equation, explain the project's financial structure in plain terms.\n\n2. The lender asks: What happens to your equity if construction costs run $30,000 over budget?\n\n3. Why might a lender care about how much of your own money is in the deal — not just whether the numbers pencil out?",
      sys:"Warm accounting tutor. Module 5 covered liabilities, current vs long-term liabilities, construction loans, equity, owner equity, retained earnings, and leverage. Give 3-paragraph feedback: what they got right, gaps corrected kindly, and a practical connection to investor conversations. No grades.",
    },
    yt:{ title:"Liabilities and Equity Explained", ch:"Accounting Stuff", why:"Covers current and long-term liabilities, equity, and the right side of the balance sheet — exactly what Module 5 introduced.", url:"https://www.youtube.com/watch?v=YZyBSU6YdmM" },
  },
  { id:6, label:"Module 6 · 30 min", title:"Revenue, Costs\n& Expenses",
    intro:"Once you understand what a business owns and owes, the next question is: how does it make and spend money? This is where the income picture comes alive.",
    sections:[
      { title:"The Income Picture", paras:[
        "So far you've been looking at the balance sheet side of accounting — a snapshot in time. Now we shift to the income side: [[revenue]], costs, and [[operating expenses]], which track what happened over a period of time. This is the world of the [[profit and loss statement]].",
        "You'll read a full P&L in Module 7 — and you'll have an interactive version to explore live numbers. First, you need the building blocks: what counts as revenue, a cost, and an expense — because these are not the same thing.",
        "The income picture is what most people mean when they ask whether a business is doing well. But a strong P&L can coexist with serious cash problems, and a weak quarter doesn't always mean the business is failing.",
      ]},
      { title:"Revenue: The Top Line", paras:[
        "[[revenue]] is the total money earned from selling products or services — before any costs are deducted. The [[top line]] of the P&L. For a spec house builder, revenue is the sale price at closing. For an Amazon seller, it's total product sales.",
        "Under [[accrual accounting]], you record revenue when it's earned — when the product is delivered — even if payment hasn't arrived. Under [[cash basis accounting]], you record it when cash hits your account. For a spec house, accrual revenue is recognized at closing.",
        "One common mistake: confusing revenue with profit. A project generating $310,000 in revenue can easily produce a loss if costs weren't managed. Revenue tells you what came in the front door — not what you kept.",
      ]},
      { title:"Cost of Goods Sold: The Direct Costs", paras:[
        "[[cost of goods sold]] — COGS — is the direct cost of producing what was sold. For a spec house, COGS includes land acquisition, all construction costs, and direct project expenses. For an Amazon seller, COGS is primarily the cost of products sold.",
        "COGS is tied directly to revenue — it only exists when a sale happens. If you built two spec houses but only sold one this quarter, you only recognize COGS for the sold one. Costs for the unsold house sit on the balance sheet as [[inventory]] until the sale closes.",
        "[[gross profit]] equals [[revenue]] minus COGS. This is the first bottom line — how much you made before overhead. Strong gross profit means your core project or product economics work.",
      ]},
      { title:"Operating Expenses: The Cost of Running the Business", paras:[
        "[[operating expenses]] are the ongoing costs of running the business — not tied to any specific project. Business insurance, accounting software, marketing, professional fees, and non-project staff all live here.",
        "The distinction between COGS and [[operating expenses]] matters because they tell different stories. High COGS means thin project margins. High operating expenses mean heavy overhead — you're spending too much to run the business regardless of how many deals you close.",
        "For a small real estate operation, operating expenses might be modest. But they keep running whether revenue does or not. In a slow quarter, those fixed costs matter more than ever.",
      ]},
      { title:"Depreciation, Payroll, and Net Income", paras:[
        "[[depreciation]] is a real operating expense even though no cash leaves the business when it's recorded. It reduces taxable income — a significant benefit your CPA tracks carefully.",
        "[[payroll]] is typically one of the largest expense categories for businesses with staff. For a small real estate operation it may be minimal early on; for an Amazon operation with warehouse employees it becomes a major line item directly affecting [[net income]].",
        "Both illustrate why [[net income]] isn't the same as cash in hand. Depreciation reduces income without touching your bank account. Payroll costs cash immediately. Understanding what drives each number — cash or non-cash — is essential for reading financial results accurately.",
      ]},
      { title:"When Profit and Cash Diverge", paras:[
        "A company can show strong [[net income]] and still be running out of cash. This happens because of timing. Revenue is recognized when earned; cash arrives later. Expenses are incurred; payment comes earlier or later.",
        "A spec house builder who closes two deals in Q4 might show excellent profitability for the year — but if those closings were delayed from Q3, they spent months paying [[holding costs]], loan interest, and operating expenses with no revenue coming in.",
        "This gap is why the cash flow statement exists — and why you need all three financial statements to understand a business fully. The P&L tells you what you earned. The cash flow statement tells you what actually moved. Module 9 covers both clearly.",
      ]},
    ],
    cfu:["What is the difference between COGS and operating expenses? Give one specific example of each from a spec house business.",
         "Why can a business show a profit on the P&L and still struggle with cash? Describe the mechanism in your own words."],
    assessment:{ title:"Reading the Income Picture",
      scenario:"Reviewing your spec house business after year one:\n\nTotal sale revenue from 2 homes closed: $590,000\nLand and construction costs (COGS): $420,000\nBusiness operating expenses: $18,000\nDepreciation on tools and equipment: $4,000\n\n1. Calculate gross profit and net income. Show your work and explain what each number means.\n\n2. Your friend says you made almost $600K — you're crushing it! What would you tell them for a more accurate picture?\n\n3. You had a profitable year but felt cash-strapped all summer. Explain at least two reasons why that could happen.",
      sys:"Warm accounting tutor. Module 6 covered revenue, COGS, gross profit, operating expenses, depreciation, payroll, net income, and the profit vs cash gap. Assessment uses simple numbers and asks for calculation plus conceptual understanding. Give 3-paragraph feedback: math and reasoning check, gaps corrected, and a practical real estate insight. No grades.",
    },
    yt:{ title:"Revenue, Expenses and Profit Explained", ch:"Accounting Stuff", why:"Walks through revenue, COGS, gross profit, and net income clearly. Perfect reinforcement before you read a full P&L in Module 7.", url:"https://www.youtube.com/watch?v=0--AvwZabIQ" },
  },
  { id:7, label:"Module 7 · 30 min", title:"Reading the P&L",
    intro:"The profit and loss statement is the most common financial document in business. This module teaches you to read one — and use the interactive tool below to explore live numbers.",
    tool:"pl",
    sections:[
      { title:"What the P&L Actually Is", paras:[
        "The [[profit and loss statement]] — P&L or [[income statement]] — summarizes a business's financial performance over a specific period. Unlike the balance sheet (a snapshot), the P&L is a movie: everything that happened between two dates.",
        "Every P&L follows the same flow: [[revenue]] at the top, subtract [[cost of goods sold]], arrive at [[gross profit]], subtract [[operating expenses]] for [[operating income]], subtract interest and taxes, land at [[net income]] — the [[bottom line]].",
        "This document is what Skip reviews when evaluating a business, what investors look at when assessing a deal, and what your CPA uses for taxes. Getting comfortable reading a P&L is one of the highest-leverage skills you can build right now.",
      ]},
      { title:"The P&L Structure — Line by Line", paras:[
        "The P&L starts with [[revenue]] — the [[top line]]. High revenue means nothing if costs consumed all of it.",
        "Subtract [[cost of goods sold]] from revenue and you get [[gross profit]]. A builder with $960K revenue and $740K COGS has $220K gross profit — a [[gross margin]] of about 23%. Is that good? Depends on market and cost structure — and it's a number worth tracking across every project.",
        "Below gross profit come [[operating expenses]]. Subtract those from gross profit for [[operating income]]. Then subtract interest and taxes for [[net income]] — the [[bottom line]].",
      ]},
      { title:"Gross Margin: The Efficiency Signal", paras:[
        "[[gross margin]] — gross profit divided by revenue — measures efficiency independent of size. A $2M business at 28% gross margin is running similarly to a $500K business at 28%. Scale differs; efficiency is comparable.",
        "For a spec house business, tracking gross margin across projects tells you whether margins are holding or compressing — an early signal of cost problems before they become a crisis.",
        "For an Amazon business, gross margin is often compressed by platform fees, shipping, and returns. Knowing your margin answers: can this product be profitable at scale? — before you over-invest.",
      ]},
      { title:"What the P&L Doesn't Tell You", paras:[
        "The P&L is powerful but limited. It doesn't show cash position — a business can have strong profit and be cash-strapped. It doesn't show what's owned or owed — that's the balance sheet. It doesn't show where cash actually went — that's the cash flow statement.",
        "P&Ls can be misleading in timing. Under [[accrual accounting]], a builder who signed contracts on three homes in December might show strong revenue even though no cash from those sales has arrived yet.",
        "Financial fluency means reading all three statements together. But the P&L is the right starting point because it answers the most common question: is this business making money?",
      ]},
      { title:"Job Costing and the Real Estate P&L", paras:[
        "A spec house P&L looks different from a typical business P&L. Revenue is lumpy — it shows up at closing. COGS is large relative to revenue. And overhead is often lean for smaller operators.",
        "The most valuable tool in real estate is [[job costing]] — a separate mini P&L for each project. Revenue from that sale, COGS for that build, allocated overhead. This shows not just whether the business is profitable overall, but whether each specific deal worked.",
        "When Skip reviews a deal, he's running a mental P&L: what came in, what it cost, what the overhead was, what was left. The more clearly you can walk through that structure with real numbers, the more prepared you look.",
      ]},
    ],
    cfu:["What is gross profit, and what does it tell you that net income doesn't? Why are both important?",
         "A business shows $800,000 in revenue on its P&L but the owner says they're barely breaking even. Name two things you'd look at to understand how that's possible."],
    assessment:{ title:"Analyzing the Numbers",
      scenario:"A friend wants to invest in a house-flipping operation and shares their P&L:\n\nRevenue (4 homes sold): $960,000\nCost of Goods Sold: $740,000\nGross Profit: $220,000\nOperating Expenses: $65,000\nOperating Income: $155,000\nInterest Expense: $38,000\nNet Income: $117,000\n\n1. Walk your friend through this P&L — what does each line mean and what does the overall picture say?\n\n2. Calculate the gross margin. Does this seem reasonable for real estate? What might compress it?\n\n3. If they made $117K, why does the owner say he was stressed about money all year?",
      sys:"Warm accounting tutor. Module 7 covered P&L structure, gross margin, what the P&L does not show, job costing, and tax vs management P&Ls. Assessment asks student to read and interpret a real P&L including gross margin calculation and profit vs cash concepts. Give 3-paragraph feedback: quality of analysis, gaps corrected, and one insight about reading financials like an investor. No grades.",
    },
    yt:{ title:"How to Read a Profit and Loss Statement", ch:"Accounting Stuff", why:"A clear walkthrough of a real P&L statement — exactly what Module 7 covered. See the structure come alive with real numbers.", url:"https://www.youtube.com/watch?v=hrSUq4wcd0g" },
  },
  { id:8, label:"Module 8 · 30 min", title:"Reading the\nBalance Sheet",
    intro:"The balance sheet is the financial equivalent of a health checkup — it tells you what a business owns, what it owes, and whether it's built on solid ground.",
    tool:"bs",
    sections:[
      { title:"The Snapshot vs. the Movie", paras:[
        "You've already learned the three main financial statements. The [[profit and loss statement]] is a movie — it shows what happened over a period of time. The [[balance sheet]] is a snapshot — it shows exactly where things stand at one specific moment. Same business, two completely different lenses.",
        "When an investor or lender asks 'what does this business look like right now?' — they want the [[balance sheet]]. When they ask 'how did it perform this year?' — they want the P&L. Reading both together gives you the full picture. The balance sheet without the P&L is a photo without context. The P&L without the balance sheet is a story without a setting.",
        "In real estate, the balance sheet shifts dramatically across the lifecycle of a project. Mid-construction it looks one way — heavy [[liabilities]], a large [[inventory]] asset, thin [[equity]]. Post-sale it looks entirely different — loan gone, cash up, [[retained earnings]] growing. The interactive tool in this module lets you switch between those stages and see that transformation happen.",
      ]},
      { title:"The Left Side: What the Business Owns", paras:[
        "[[assets]] sit on the left side of the balance sheet, organized by [[liquidity]] — how quickly they convert to cash. [[current assets]] come first: cash (most liquid), [[accounts receivable]] (money owed to you, liquid soon), [[inventory]] (liquid when sold). These represent the business's near-term financial capacity.",
        "[[fixed assets]] come next: equipment, vehicles, property held long-term. These support operations over many years rather than converting to cash quickly. For a spec house builder, a construction truck is a fixed asset. The house being built is [[inventory]] — a current asset — because it's intended for sale.",
        "When you look at a balance sheet, scan the asset side first: how much is liquid vs. locked up? A business that looks asset-rich but is mostly illiquid can run into cash trouble fast even when the numbers look large.",
      ]},
      { title:"The Right Side: How It Was Financed", paras:[
        "[[liabilities]] and [[equity]] sit on the right side — the answer to how every asset was paid for. [[current liabilities]] come first: unpaid contractor invoices ([[accounts payable]]), credit card balances, the current portion of any loan due within the year. These need active management.",
        "[[long-term liabilities]] follow — the [[construction loan]] balance, multi-year loans, private lender notes. Below liabilities sits [[equity]]: owner capital invested plus [[retained earnings]] built up over time. Equity is the cushion — what's truly yours after all debts are settled.",
        "The right side tells the story of how the business got to where it is. A business funded mostly with equity is conservative — the owner has more at stake and less debt risk. A highly leveraged business used debt aggressively — more potential upside, less room for error. Both exist in real estate. Understanding which you're looking at matters.",
      ]},
      { title:"Key Ratios: Reading Health at a Glance", paras:[
        "Two ratios make the balance sheet instantly readable. The [[current ratio]] — current assets divided by [[current liabilities]] — shows short-term financial health. Above 1.0 means current assets exceed near-term obligations. Below 1.0 is a warning that the business may struggle to meet near-term payments.",
        "[[working capital]] — current assets minus current liabilities — is the dollar version of the same idea. Positive working capital is the operational cushion between what you have available and what you owe soon. For a spec house mid-build, a low current ratio and thin working capital is expected and manageable if the loan is structured correctly and a sale is on the horizon.",
        "The [[debt-to-equity ratio]] — total liabilities divided by total equity — shows [[leverage]]. A ratio of 2.0 means the business is twice as funded by debt as by owner capital. For real estate, moderate leverage is normal. But a very high ratio means thin equity protection — if asset values drop even modestly, equity can disappear quickly.",
      ]},
      { title:"What the Balance Sheet Doesn't Tell You", paras:[
        "The balance sheet is recorded at historical cost, not market value. A piece of land bought five years ago for $80,000 sits on the books at $80,000 — even if it's now worth $200,000. Equipment [[depreciation|depreciates]] on a schedule, not according to market value. Book value and market value diverge significantly in real estate.",
        "The balance sheet also doesn't show cash flow, profitability, or momentum. A business can have strong assets and still be bleeding cash. It can have thin equity and still be highly profitable. That's why all three statements matter — the balance sheet, the P&L, and the [[cash flow statement]] together tell the complete story.",
        "When evaluating a deal or a partner, ask for all three. A business that only shows you the P&L is showing you one dimension. A business that shows you all three is showing you it has nothing to hide — and that it understands its own financial picture.",
      ]},
      { title:"Reading a Real Estate Balance Sheet", paras:[
        "Every real estate deal has a natural balance sheet arc. It starts with an asset purchase, funded by investor capital and a loan. Mid-project, the balance sheet shows a large inventory asset offset by the loan liability, with equity being the invested capital. At closing, inventory converts to cash, the loan is repaid, and equity grows by the profit amount.",
        "[[job costing]] — tracking financials project by project — means each deal can have its own mini balance sheet. Sophisticated operators maintain this so they can show investors exactly what each project owns and owes at any point. This is the level of clarity that builds credibility with capital partners.",
        "As you grow, you'll hold multiple assets simultaneously — projects under construction, cash reserves, equipment, held property. Reading your own balance sheet fluently means you can answer the question every investor eventually asks: 'Tell me what your business looks like right now.' That answer should come without hesitation.",
      ]},
    ],
    cfu:[
      "What is the difference between the balance sheet and the P&L? If a lender asked 'what does this project look like right now?' — which would you hand them and why?",
      "Explain the current ratio in your own words. If a spec house project has $344,000 in current assets and $28,200 in current liabilities, what is the current ratio — and what does it tell you?",
    ],
    assessment:{ title:"Is This Business Healthy?",
      scenario:"A real estate operator is pitching you on a partnership. They share their current balance sheet:\n\nCurrent Assets: Cash $28,000 · Construction in Progress $310,000 · Other $6,000\nFixed Assets: Equipment $32,000 · Vehicles $38,000\nTotal Assets: $414,000\n\nCurrent Liabilities: Accounts Payable $42,000 · Credit Card $8,600\nLong-Term Liabilities: Construction Loan $290,000\nTotal Liabilities: $340,600\nEquity: $73,400\n\n1. Calculate the current ratio and working capital. What do these numbers tell you about the short-term financial health of this business?\n\n2. The operator says the business is in great shape because it has $414,000 in assets. What would you push back on — and what does the balance sheet actually show?\n\n3. What additional financial statement would you ask for before making a partnership decision — and what specific question would it answer that this balance sheet can't?",
      sys:"Warm accounting tutor for a high school graduate learning for real estate. Module 8 covered balance sheet structure, assets (current and fixed), liabilities (current and long-term), equity, current ratio, working capital, debt-to-equity, what the balance sheet doesn't show, and reading a real estate balance sheet. Assessment includes simple math and conceptual analysis. Give 3-paragraph mentor feedback: check math and analysis, correct gaps kindly, and one insight about reading balance sheets like an investor. No grades.",
    },
    yt:{ title:"How to Read a Balance Sheet", ch:"Accounting Stuff", why:"A clear walkthrough of a real balance sheet — assets, liabilities, equity, and what each section tells you. Exactly what Module 8 covered, with visuals.", url:"https://www.youtube.com/watch?v=CMv1zlZhb4Q" },
  },

  { id:9, label:"Module 9 · 30 min", title:"Reading the Cash\nFlow Statement",
    intro:"The cash flow statement is the document that explains what the P&L can't — where money actually went, and why profitable businesses sometimes run out of it.",
    tool:"cf",
    sections:[
      { title:"Why This Statement Exists", paras:[
        "After Module 6, you know that [[net income]] and actual cash are not the same thing. A business records revenue when it's earned, not when it's collected. It records [[depreciation]] as an expense even though no cash leaves the account. It builds [[inventory]] that sits on the balance sheet as an asset but consumes real cash to produce. The [[profit and loss statement]] captures none of this timing.",
        "The [[cash flow statement]] bridges that gap. It starts with net income and makes a series of adjustments to arrive at how much cash actually moved. The result tells you not just whether a business made money, but whether it generated real, spendable cash.",
        "For entrepreneurs in real estate and product-based business, the cash flow statement is often more important than the P&L. You can survive a bad quarter on the P&L if you have cash. You cannot survive running out of cash even if the P&L looks strong. This statement is the early warning system that tells you which situation you're in.",
      ]},
      { title:"The Three Sections", paras:[
        "The [[cash flow statement]] is organized into three sections, each telling a different part of the cash story. [[operating activities]] is the core — how much cash the business generated from its actual operations. [[investing activities]] shows cash spent on or received from long-term assets. [[financing activities]] shows cash from borrowing, repaying debt, or moving capital in and out.",
        "Reading the three sections together tells you something a single number can't. A business with strong operating cash flow, heavy investing outflows, and moderate financing inflows is a growing company funding growth with its own operations and some debt. A business with negative operating cash flow and heavy financing inflows is surviving on borrowed money — a very different picture.",
        "The pattern you'll see most often in early real estate: operating cash flow is negative or low (cash tied up in construction), investing is heavily negative (properties purchased), and financing is strongly positive (construction loans drawn). This is the normal cash rhythm of a spec house business — knowing when it's normal and when it becomes a problem is the skill this module builds.",
      ]},
      { title:"Operating Activities: The Most Important Section", paras:[
        "[[operating cash flow]] starts with [[net income]] and adjusts for everything that made cash different from profit. The most common adjustments: add back [[depreciation]] (non-cash expense that reduced income without touching cash), subtract increases in [[accounts receivable]] (revenue earned but not collected), subtract increases in [[inventory]] (cash spent building or buying products not yet sold), add increases in [[accounts payable]] (expenses incurred but not yet paid — you kept the cash longer).",
        "Each adjustment connects directly to your world. When you build a spec house, construction spending shows up as an increase in inventory — a cash drain in the operating section even though the P&L hasn't recognized the cost yet. When a customer owes you money after closing, the outstanding balance appears as an increase in receivables — revenue on the P&L, not yet cash in the bank.",
        "A consistently positive [[operating cash flow]] is the strongest financial health signal a business can show. It means the core operation — not loans, not asset sales — is generating real cash. For an investor evaluating your business, this number carries more weight than net income because it can't be inflated by accounting choices the way profit can.",
      ]},
      { title:"Investing and Financing Activities", paras:[
        "[[investing activities]] shows cash flows related to long-term assets — buying equipment, purchasing land, acquiring property. These are almost always negative for a growing business. A spec house operator buying tools and vehicles will show significant negative investing cash flow in early years. That's not a red flag — it's a growth signal. The question to ask: did this spending make the business better?",
        "[[financing activities]] captures all cash flows related to debt and ownership: loan proceeds received, loan principal repaid, owner draws. For a spec house business, this section is often large — construction loans drawn and repaid with each project cycle. The pattern matters. A business consistently borrowing more to maintain cash is dependent on debt. A business repaying loans and distributing profit is self-sustaining.",
        "Pay close attention to the owner draw line in financing. It's appropriate to take money out as projects close. But the timing relative to [[operating cash flow]] matters — taking draws when operations are cash-negative means drawing from reserves, not from earnings. That's a subtle but important distinction your CPA and partners will notice.",
      ]},
      { title:"Free Cash Flow: The Number Investors Watch", paras:[
        "[[free cash flow]] is [[operating cash flow]] minus what was spent on maintaining and growing long-term assets (capital expenditures, usually found in investing activities). It represents what the business truly generated after keeping itself operational.",
        "For a real estate operator, free cash flow in any given year can be deeply negative because you're investing heavily in new projects — and that's fine if those projects will return cash at closing. What investors care about is whether the pattern is sustainable: is the business generating enough operating cash to eventually fund its own growth without perpetually depending on new loans?",
        "When you present financials to a capital partner, they'll often recast your cash flow statement — stripping out one-time items, normalizing owner compensation, calculating their version of free cash flow. Understanding how they're reading the statement lets you walk into that conversation prepared rather than caught off guard.",
      ]},
      { title:"How All Three Statements Connect", paras:[
        "The three financial statements are a system. Net income from the [[profit and loss statement]] is the starting point for the [[cash flow statement]]'s operating section. The ending cash balance on the cash flow statement should match the cash line on the [[balance sheet]]. Changes in assets and liabilities on the balance sheet explain many of the adjustments in the operating section.",
        "When you review financials, check these connections. If net income is strong but operating cash flow is deeply negative, dig into the adjustments — something is consuming cash the P&L doesn't show. If ending cash doesn't match the balance sheet, something was recorded incorrectly. These connections are the self-checking mechanism of good accounting.",
        "Being able to explain all three statements and how they connect is a significant marker of financial fluency. Most people can read a P&L. Fewer can read a balance sheet. Very few can explain a cash flow statement and what it tells you about the real health of a business. That's the level this course is building toward.",
      ]},
    ],
    cfu:[
      "Why does the cash flow statement start with net income and then make adjustments — rather than just tracking cash in and cash out directly?",
      "A spec house business shows $120,000 in net income for the year but only $18,000 in operating cash flow. Name at least two specific things that could explain the gap between those two numbers.",
    ],
    assessment:{ title:"Finding the Real Story",
      scenario:"A friend's house-flipping business had a great year on the P&L — $93,000 in net income. But in December he called you panicked: he couldn't make payroll and used a personal credit card to cover a subcontractor invoice.\n\nHe shares his annual cash flow statement:\n\nOperating Activities:\n  Net Income: $93,000\n  Add: Depreciation: $6,200\n  Change in Inventory (new builds): -$340,000\n  Change in Accounts Payable: +$42,000\n  Net Cash from Operations: -$198,800\n\nInvesting Activities:\n  Equipment Purchased: -$18,000\n  Net Cash from Investing: -$18,000\n\nFinancing Activities:\n  Construction Loan Proceeds: $310,000\n  Loan Repayments: -$88,000\n  Owner Draw: -$55,000\n  Net Cash from Financing: $167,000\n\nNet Change in Cash: -$49,800\nBeginning Cash: $62,000\nEnding Cash: $12,200\n\n1. Walk through each section of this statement. What story does each section tell?\n\n2. He made $93,000 in profit but ended the year with $12,200 in cash. Using the statement, explain specifically what happened to the money.\n\n3. He's planning a $40,000 owner draw in January because the P&L shows he made plenty. What would you tell him — and what number on this statement supports your advice?",
      sys:"Warm accounting tutor for a high school graduate learning for real estate. Module 9 covered: why the cash flow statement exists, the three sections (operating, investing, financing), operating cash flow adjustments (depreciation add-back, inventory, receivables, payables), investing vs operating classification, the financing section and owner draws, free cash flow, and how all three statements connect. Assessment uses a real cash flow statement and asks for section-by-section analysis and practical advice. Give 3-paragraph mentor feedback: quality of analysis and whether they identified what consumed cash, gaps corrected clearly, and one practical cash management insight for real estate. No grades.",
    },
    yt:{ title:"How to Read a Cash Flow Statement", ch:"Accounting Stuff", why:"The clearest explanation of all three cash flow sections available. Watch after Module 9 — the operating activities adjustments will click in a new way.", url:"https://www.youtube.com/watch?v=DiVPAjgmnj0" },
  },
  { id:10, label:"Module 10 · 30 min", title:"Accounting for\nReal Estate Projects",
    intro:"You've learned the language. Now it's time to apply it — deal by deal, project by project, the way real estate operators actually track their numbers.",
    sections:[
      { title:"Job Costing: The Foundation of Project Accounting", paras:[
        "General accounting tells you how the business is doing overall. [[job costing]] tells you how each specific deal did. For a real estate operator, this distinction is everything — you can have a profitable year while hiding a losing project inside the numbers. [[job costing]] makes that visible.",
        "In practice, [[job costing]] means setting up a separate set of accounts for each project from the moment it starts. Every dollar spent — land acquisition, subcontractor payments, permits, materials, loan interest — gets assigned to that project. Every dollar of revenue from the sale gets assigned to it too. At the end, you have a clean project-level [[profit and loss statement]]: this is what the deal cost, this is what it sold for, this is what it made.",
        "The discipline starts on day one. If you wait until a project closes to try to reconstruct what was spent, you'll miss expenses, misallocate costs, and produce a number you can't fully trust. Set up the project account before you close on land. Record every expense in real time. This habit separates operators who know their margins from those who guess at them.",
      ]},
      { title:"The Anatomy of a Spec House P&L", paras:[
        "A spec house project P&L has a specific structure that every real estate operator should be able to read and build. Revenue is simple: the sale price at closing. Cost of Goods Sold breaks into three layers: [[hard costs]] (all construction labor, materials, and subcontractor costs — the actual build), [[soft costs]] (permits, design fees, inspections, legal, financing origination), and [[holding costs]] (loan interest, insurance, utilities, and property taxes during the construction and marketing period).",
        "Subtract all three from the sale price and you get gross profit — what the project generated before any overhead allocation. Then subtract a proportional share of your business [[operating expenses]] (your CPA, software, vehicle costs, marketing for the listing) and you arrive at the project's contribution to net income. Some operators track overhead allocation; others look at gross profit per project and track overhead separately at the business level. Both approaches are valid — the key is consistency.",
        "A useful benchmark: healthy spec house gross margins (before overhead) typically run 20–30% of sale price in most markets. If a project comes in below 15%, understand why — material overruns, scope creep, extended hold time, pricing concessions. That post-project analysis is where the learning lives. Each deal should make you a better operator on the next one.",
      ]},
      { title:"Construction Loans and Draw Mechanics", paras:[
        "Understanding how a [[draw schedule]] works is essential for managing cash flow on any build. A construction loan isn't deposited in full at closing — it's released in draws, typically tied to project milestones: foundation poured, framing complete, rough mechanicals in, drywall, trim and finish, final. Each draw requires an inspection, and the lender releases funds only after confirming the milestone is met.",
        "From an accounting perspective, each draw is a debit to your construction project account (increasing inventory/work in progress) and a credit to the construction loan liability (increasing what you owe). The interest that accrues on the drawn balance is a [[holding costs|holding cost]] — recorded as an expense on the project P&L even though it's paid monthly from operating cash.",
        "The practical implication: you need to fund the gap. Draws come after milestone completion, but subcontractors often want payment at or before that milestone. Managing the float between when you pay subs and when the draw funds arrive is one of the most common cash flow challenges in spec house construction. Knowing your [[draw schedule]] before you break ground — and having enough working capital to cover the gaps — is part of running a professional operation.",
      ]},
      { title:"Investor Reporting: Speaking the Language of Capital", paras:[
        "If you raise capital from investors, you take on a reporting obligation. An [[investor report]] typically covers: funds deployed to date, current project status, costs incurred vs. budget, projected completion and sale timeline, expected [[return on investment]], and any material changes or risks. Depending on the deal structure, this might be monthly, quarterly, or at key milestones.",
        "Understanding the deal structure determines what you report. A simple [[preferred return]] deal: the investor gets their capital back first, plus a fixed return (say 10% annualized), before you take any profit. A [[waterfall]] structure is more complex — different return tiers trigger different profit splits. Your job in reporting is to show exactly where the deal stands relative to these thresholds at all times.",
        "The investors who trust you most are the ones who receive clear, consistent reporting without having to ask for it. A one-page project summary with actuals vs. budget, timeline vs. plan, and a clear statement of projected returns is often all you need. Professionals don't chase their operators for updates. Build a reporting cadence and stick to it — it's one of the clearest signals that you run a serious operation.",
      ]},
      { title:"Hold vs. Flip: Different Accounting, Different Goals", paras:[
        "A flip and a rental property are accounted for differently from the moment of purchase. A flip is [[inventory]] — bought to be sold as part of normal business activity. A rental property is a [[fixed assets|fixed asset]] — bought to hold, generate income, and potentially appreciate. This distinction affects how costs are recorded, when income is recognized, and what tax treatment applies.",
        "For a rental property, you set up separate income and expense tracking: rental income, mortgage interest, property taxes, insurance, maintenance, management fees, and [[depreciation]]. Depreciation on residential rental property is spread over 27.5 years — meaning a $300,000 property generates roughly $10,900 in annual depreciation expense that shelters rental income from taxes. This is one of the most powerful tax advantages in real estate.",
        "If you eventually sell a rental property you've held for more than a year, the gain is taxed as long-term [[capital gains]] rather than ordinary income — a meaningful tax rate difference. And if you reinvest those proceeds into another property using a [[1031 exchange]], you can defer those taxes indefinitely. These are conversations to have with your CPA before you buy, not after you sell.",
      ]},
      { title:"Building the Habit from Day One", paras:[
        "Every project needs its own bank account or at minimum its own set of tracking categories in your accounting software. Never co-mingle project funds — not between projects, not between business and personal. Commingling makes accurate [[job costing]] impossible and creates legal exposure if any investor or partner ever questions the numbers.",
        "Track everything in real time. Take a photo of every receipt. Log every payment the day it's made. Reconcile your project accounts monthly. Your [[balance sheet]] should always show a clear picture of what each project owns (its work-in-progress value) and owes (its draw balance). If you can't answer 'how much has this project cost to date?' on any given day, your records need to improve.",
        "The operators who can close a project and produce a clean, itemized project P&L within a week of closing are the ones who attract better capital partners, get better loan terms, and build businesses that scale. That level of financial discipline doesn't happen automatically — it's built through consistent habits, good software, and ideally a bookkeeper who understands construction accounting. Module 13 covers the tools that make all of this manageable.",
      ]},
    ],
    cfu:[
      "What is job costing, and why does a real estate operator need it even when their overall business is profitable?",
      "Describe the three cost layers in a spec house P&L: hard costs, soft costs, and holding costs. Give one real example of each.",
    ],
    assessment:{ title:"Your First Project Review",
      scenario:"You just closed on your first spec house. Here are the numbers:\n\nSale Price: $348,000\n\nHard Costs: Land $72,000 · Framing & Rough Work $58,000 · Mechanical (plumbing, HVAC, electrical) $34,000 · Finish Work $28,000 · Landscaping & Final $8,000\n\nSoft Costs: Permits & Inspections $4,200 · Architect & Design $3,800 · Closing Costs (sale) $8,700\n\nHolding Costs: Construction Loan Interest (8 months) $9,600 · Insurance $2,400 · Utilities $1,800\n\nOverhead Allocation: $6,500 (your share of annual business operating costs)\n\n1. Build this project's P&L. Calculate total hard costs, total soft costs, total holding costs, gross profit, gross margin, and net income. Show your work.\n\n2. Your investor put in $85,000 and expects a 15% preferred return ($12,750). After paying the investor back in full (capital + return), what is left for you?\n\n3. On your next project, what is one thing you would do differently based on what these numbers show you?",
      sys:"Warm accounting tutor for a high school graduate learning real estate accounting. Module 10 covered job costing, the spec house P&L structure (hard costs, soft costs, holding costs), draw schedules, investor reporting, and hold vs. flip accounting. Assessment asks for a full project P&L calculation and strategic reflection. Check the math carefully: total hard costs $200,000, soft costs $16,700, holding costs $13,800, total COGS $230,500, gross profit $117,500, gross margin 33.8%, net income after overhead $111,000. For question 2: investor capital return $85,000 + preferred return $12,750 = $97,750 total to investor. Remaining for operator: $111,000 - $97,750 = $13,250. A common mistake is forgetting to return the investor capital and only subtracting the preferred return. Give 3-paragraph mentor feedback: math accuracy and project analysis, any gaps, and one practical insight about managing margins or investor relationships. Warm tone, no grades.",
    },
    yt:{ title:"Real Estate Accounting — Job Costing for Flippers", ch:"Bigger Pockets / Real Estate Accounting Pros", why:"Covers project-level accounting for real estate investors — exactly the job costing framework Module 10 introduced. Practical and directly applicable.", url:"https://www.youtube.com/watch?v=ozjo8wx3O_I" },
  },

  { id:11, label:"Module 11 · 30 min", title:"Accounting for\nProduct-Based Business",
    intro:"The accounting principles are the same — but product businesses have their own rhythms, metrics, and traps. This module translates what you've learned into the Amazon and product seller world.",
    sections:[
      { title:"COGS in a Product Business", paras:[
        "In a real estate deal, [[cost of goods sold]] is land plus construction. In a product business, COGS is the direct cost of acquiring or producing each unit you sell. For an [[amazon fba|Amazon FBA]] seller, that means: the cost you paid the supplier for each unit, the cost to ship it to Amazon's warehouse (inbound freight), and the FBA fee Amazon charges to pick, pack, and ship each order. Everything else — advertising, software, your own time — lives in [[operating expenses]].",
        "Getting COGS right is non-negotiable for product businesses because it directly determines [[gross margin]] — the number that tells you whether your product can actually be profitable at scale. If your landed unit cost (product + inbound freight) is $12 and Amazon charges a $4.50 FBA fee and a 15% referral fee on a $35 sale price ($5.25), your total COGS per unit is $21.75. That leaves $13.25 in gross profit — a 37.9% gross margin before advertising, returns, or overhead.",
        "The discipline here is tracking COGS per [[sku]], not just in aggregate. Different products have different margins. A brand can have one SKU generating 45% gross margin and another at 18%. Managing at the aggregate level hides that reality. Knowing which products are profitable and which are dragging down your numbers is the difference between growing intelligently and scaling a problem.",
      ]},
      { title:"Inventory: The Asset That Consumes Cash", paras:[
        "[[inventory]] is simultaneously your most important asset and your biggest cash trap. When you purchase inventory from a supplier, cash leaves your account but revenue hasn't been recognized yet — that product sits on the [[balance sheet]] as an asset until it sells. The moment it sells, inventory value moves from the balance sheet to COGS on the [[profit and loss statement]], and revenue is recognized.",
        "This timing creates the cash flow gap you learned about in Module 9. A fast-growing Amazon business might be generating strong profits on paper while its owner feels perpetually cash-strapped — because every dollar of profit is immediately being reinvested into the next inventory order to keep up with sales velocity. Understanding this cycle is crucial for planning: you need to know your inventory turn rate (how many times per year your inventory sells through) and how much cash is tied up in the pipeline at any given time.",
        "Inventory valuation also matters for accuracy. The two most common methods: FIFO (First In, First Out — the first units purchased are assumed sold first, which matches the natural physical flow of most inventory) and weighted average cost (all units averaged together). FIFO is the most widely used and most intuitive method. Your CPA will confirm the method that best fits your business — but understanding the concept means you can have an informed conversation about it.",
      ]},
      { title:"The Amazon-Specific P&L", paras:[
        "An Amazon FBA business P&L has a specific structure worth knowing before you open your first QuickBooks account. Revenue is gross sales — the total paid by customers including any shipping revenue. COGS is product cost + inbound freight + FBA fees + referral fees. Gross profit is what's left. Below the line: [[ppc]] advertising spend (Sponsored Products, Sponsored Brands), software subscriptions (Helium 10, Jungle Scout, Inventory Lab), storage fees for slow-moving inventory, and returns processing.",
        "[[ppc]] deserves special attention because it's both an [[operating expenses|operating expense]] and a direct driver of revenue. Your [[acos]] — advertising cost of sales — tells you how efficiently your ad spend is generating sales. An ACoS of 20% means you spent $20 in ads for every $100 in revenue those ads produced. Whether that's acceptable depends entirely on your margins. If your gross margin is 40%, a 20% ACoS leaves 20% for other expenses and profit. If your gross margin is 22%, you're essentially breaking even on ad-driven sales.",
        "Returns are another Amazon-specific cost that many new sellers underestimate. Amazon's return policy is generous, and in some categories return rates run 10–20%. Each return costs you the FBA return processing fee and potentially the product itself if it's unsellable. Tracking returns as a percentage of revenue — and accounting for them in your COGS calculation — gives you a more honest gross margin than many sellers carry on their books.",
      ]},
      { title:"Cash Flow in an Inventory Business", paras:[
        "Amazon pays sellers on a two-week disbursement cycle, with a two-week reserve hold — meaning cash you earned this week may not hit your bank account for three to four weeks. When you layer supplier payment terms on top (most require 30–50% upfront, balance on shipment), you end up with a cash cycle that can easily stretch 60–90 days from when you pay for inventory to when you receive cash from Amazon.",
        "Managing this cycle requires understanding your working capital needs at each growth stage. A business doing $30,000 in monthly sales with 60-day cash cycle needs approximately $60,000 in working capital to operate smoothly — just to keep inventory funded between payment and receipt. When sales double, that working capital requirement doubles too. This is why product businesses often take on a business line of credit or inventory financing — not because they're unprofitable, but because growth eats cash faster than disbursements return it.",
        "The practical implication for your accounting: maintain a cash flow projection alongside your P&L. Know what cash is coming in from Amazon disbursements each week and what cash is going out for inventory orders. A 13-week cash flow projection — updated weekly — is the tool that keeps a growing product business from running into a wall. Your bookkeeper or CPA can help build the template; the discipline of updating it is yours.",
      ]},
      { title:"Connecting Product Metrics to Financial Statements", paras:[
        "Amazon sellers track a lot of platform metrics: BSR (Best Seller Rank), sessions, conversion rate, review count, ACoS, TACOS (Total Advertising Cost of Sales). These are useful operational indicators — but they're not accounting. Understanding how these metrics connect to your financial statements makes you a more sophisticated operator.",
        "Conversion rate affects revenue. Session count affects revenue. ACoS directly determines advertising expense and therefore operating income. Inventory turn rate determines how efficiently your cash is working — a product turning 12 times per year ties up far less working capital than one turning 3 times per year. Return rate flows directly into COGS and gross margin. When you see a metric move, you should be able to trace its financial impact.",
        "The operators who build durable Amazon businesses are the ones who manage both layers simultaneously — the platform dashboard and the financial statements. Platform metrics tell you what's happening in the marketplace. Financial statements tell you whether you're actually building value. Connecting the two is where business sophistication lives — and it's exactly the fluency this course is building.",
      ]},
    ],
    cfu:[
      "For an Amazon FBA seller, what costs belong in COGS and what costs belong in operating expenses? Give two specific examples of each.",
      "Explain the cash flow gap in an inventory business in your own words. Why might a profitable Amazon seller feel cash-strapped?",
    ],
    assessment:{ title:"Reading the Amazon Business",
      scenario:"A friend runs an Amazon FBA business and asks you to help him understand his numbers. Here's his monthly summary:\n\nGross Sales: $48,000\nCOGS: Product Cost $18,200 · FBA Fees $4,800 · Referral Fees $7,200 · Inbound Freight $1,400\nTotal COGS: $31,600\nGross Profit: $16,400\n\nOperating Expenses: PPC Advertising $7,200 · Software Subscriptions $480 · Returns Processing $960\nTotal Operating Expenses: $8,640\nNet Income: $7,760\n\n1. Calculate the gross margin and net margin. What does each number tell you about the health of this business?\n\n2. PPC spend is $7,200 on $48,000 in revenue — an overall ACoS of 15%. Your friend thinks this is great. What additional information would you want before agreeing with him?\n\n3. Your friend wants to double his revenue next month by ordering twice as much inventory. Based on what you know about inventory businesses, what financial questions should he answer before making that decision?",
      sys:"Warm accounting tutor for a high school graduate learning product business accounting. Module 11 covered COGS structure for Amazon FBA (product cost, FBA fees, referral fees, inbound freight), gross margin per SKU, inventory as an asset and cash trap, the Amazon P&L structure, PPC and ACoS, returns, the cash flow cycle, and connecting platform metrics to financial statements. Assessment asks for margin calculation and strategic financial analysis. Gross margin is 34.2% ($16,400/$48,000), net margin is 16.2% ($7,760/$48,000). Give 3-paragraph mentor feedback: math accuracy, quality of strategic analysis, and one practical insight about scaling inventory businesses. Warm tone, no grades.",
    },
    yt:{ title:"Amazon FBA Accounting — How to Track Your Numbers", ch:"Accounting Stuff / FBA accounting channels", why:"Covers the Amazon-specific P&L structure, COGS calculation, and the cash flow dynamics that Module 11 introduced. Watch before setting up your first tracking system.", url:"https://www.youtube.com/watch?v=smvCTIx--zw" },
  },

  { id:12, label:"Module 12 · 30 min", title:"Tax Basics for\nSmall Business",
    intro:"You don't need to become a tax expert. You need to know enough to make smart decisions — and to work with your CPA like a partner rather than a passive client.",
    sections:[
      { title:"Entity Structure: Your First Major Tax Decision", paras:[
        "How you structure your business legally has a direct impact on how you're taxed, how your liability is protected, and how you're perceived by investors and lenders. The most common structures for small business owners in real estate and e-commerce: sole proprietorship (simplest, but no liability protection and full self-employment tax), [[llc|LLC]] (flexible, provides liability protection, taxed as a pass-through by default), [[s-corp|S-Corp]] (an LLC or corporation that makes a tax election, potentially reducing self-employment tax), and partnership (for multi-member ventures).",
        "The [[llc]] is often the starting point — it separates your personal assets from business liability and provides [[pass-through taxation]], meaning business income shows up on your personal return rather than being taxed twice at the corporate level. For real estate, many operators hold each property in its own LLC, with a management LLC on top — creating liability separation between projects. This is a conversation to have with both your CPA and an attorney.",
        "The [[s-corp]] election becomes worth examining when your net income consistently exceeds roughly $50,000 annually. In an S-Corp, you pay yourself a reasonable salary (subject to [[self-employment tax]] — 15.3%), and the remaining profit passes through as a distribution (not subject to self-employment tax). The potential savings can be meaningful at higher income levels. But S-Corps have additional complexity: payroll setup, payroll taxes, and more rigorous record-keeping requirements. Your CPA will help you model whether the savings justify the cost.",
      ]},
      { title:"Deductions: Reducing What You Owe Legally", paras:[
        "A [[deduction]] is an expense that reduces your taxable income. The lower your taxable income, the lower your tax bill. Most ordinary and necessary business expenses are deductible — and understanding this changes how you look at every business cost you incur.",
        "For real estate operators, key deductions include: mortgage interest on investment properties, property taxes, insurance, repairs and maintenance (for rental properties), property management fees, travel to and from properties for business purposes, and professional services (CPA, attorney, property inspector fees). For [[amazon fba|Amazon]] sellers: cost of goods, advertising, software subscriptions, shipping, professional development, and a portion of your phone and internet if used for business.",
        "Home office deduction is available if you use a dedicated space exclusively for business — you can deduct a proportional share of rent/mortgage, utilities, and internet. Vehicles used for business can be deducted either at the standard mileage rate (keep a mileage log) or using actual expenses. Both require documentation. The IRS doesn't take your word for it — every deduction needs a receipt or record. A habit of capturing every receipt digitally, organized by category, turns tax time from a scramble into a formality.",
      ]},
      { title:"Depreciation as a Tax Tool", paras:[
        "You learned in Module 4 that [[depreciation]] reduces net income even though no cash leaves the business. This is not just an accounting technicality — it's one of the most powerful tax tools available to real estate investors. A residential rental property is depreciated over 27.5 years; commercial over 39 years. That means a $300,000 property generates roughly $10,900/year in depreciation expense that can offset rental income — potentially making taxable profit far lower than accounting profit.",
        "[[bonus depreciation]] — an IRS provision that has allowed businesses to immediately deduct a large percentage of qualifying asset costs in the purchase year — has been a significant benefit for business owners buying equipment, vehicles, and certain property improvements. The rules and percentages change with tax legislation, so this is a conversation to have with your CPA each year before making major capital purchases.",
        "[[cost segregation]] is a more advanced strategy where an engineer and accountant break a property down into its component parts — appliances, flooring, landscaping, certain fixtures — and accelerate depreciation on those components from 27.5 years to 5, 7, or 15 years. The result is dramatically more depreciation in the early years of ownership, significantly reducing taxable income. For properties above $500,000, the tax savings often justify the cost segregation study. This is squarely in CPA territory — but knowing it exists means you can ask the right questions.",
      ]},
      { title:"The 1031 Exchange and Capital Gains", paras:[
        "When you sell an investment property, the gain is generally taxed as [[capital gains]]. If you held the property for more than a year, it qualifies for long-term capital gains rates — currently 0%, 15%, or 20% depending on your income, compared to ordinary income tax rates that can reach 37%. The distinction between short-term (less than 12 months) and long-term holding matters significantly in your deal planning.",
        "The [[1031 exchange]] allows you to defer capital gains taxes by rolling the proceeds from a sale directly into a like-kind property. Done correctly with a qualified intermediary, the gain is deferred — potentially indefinitely, as you can chain multiple exchanges together. This is how sophisticated real estate investors have built portfolios across decades without paying capital gains until a final sale (or eliminating them entirely through stepped-up basis at death). The rules are specific: timelines, like-kind requirements, and use of a qualified intermediary are all non-negotiable.",
        "For your current stage, the most important thing to know is: don't make decisions about selling investment properties without talking to your CPA first. The tax implications of a sale can be significant — and the decision to exchange vs. sell outright should be modeled financially, not made on instinct. Understanding that this tool exists, what it does, and when it matters is enough to ensure you're asking the right questions at the right time.",
      ]},
      { title:"Working With Your CPA: Getting Full Value", paras:[
        "Most small business owners treat their CPA like a tax preparer — they hand over records in April and receive a return. The most financially sophisticated operators treat their CPA like a strategic advisor — they meet quarterly, ask forward-looking questions, and use tax strategy to make better business decisions year-round.",
        "The questions that distinguish proactive clients: 'What entity structure makes the most sense for where my business is going?' 'If I buy this property or piece of equipment before year-end, what's the tax impact?' 'Am I making enough [[estimated taxes|estimated tax payments]] to avoid underpayment penalties?' 'Should I accelerate or defer income given my projected income this year vs. next?' These questions can only be answered by someone who knows your situation — and they save money.",
        "[[estimated taxes]] are quarterly payments made by self-employed individuals and business owners who don't have taxes withheld automatically. If you're self-employed and expect to owe more than $1,000 in taxes for the year, you're generally required to make these payments in April, June, September, and January. Failing to do so results in underpayment penalties. Your CPA will help you calculate the right amounts — but knowing this system exists means you're not caught off-guard by a large tax bill in April.",
      ]},
    ],
    cfu:[
      "What is the difference between an LLC and an S-Corp election? What is the tax advantage of the S-Corp structure, and when does it typically become worth considering?",
      "Name three specific deductions available to a real estate operator and three available to an Amazon seller. Why is keeping documentation of these expenses important?",
    ],
    assessment:{ title:"The Tax Strategy Conversation",
      scenario:"You've had your best year yet: $140,000 in net income from spec house projects (through your LLC), and $60,000 from your Amazon business (sole proprietorship). You're meeting with your CPA to review the year and plan ahead.\n\n1. Based on what you learned in Module 12, what two entity structure questions should you ask your CPA going into this meeting — and why are they worth asking at this income level?\n\n2. You purchased a $32,000 truck this year used exclusively for business (visiting job sites, materials runs, property viewings). What deduction options exist for this vehicle — and what documentation would your CPA need to support the deduction?\n\n3. You're considering selling a rental property you've held for 18 months that has appreciated by $85,000. What are the two main tax strategies your CPA would likely discuss with you — and what is the key question you'd need to answer before deciding which path to take?",
      sys:"Warm accounting tutor for a high school graduate learning tax basics for small business. Module 12 covered entity structures (LLC, S-Corp, pass-through taxation), deductions, depreciation as a tax tool, bonus depreciation, 1031 exchange, capital gains (short vs. long term), cost segregation, and working proactively with a CPA including estimated taxes. Assessment asks for conceptual application of tax strategy — not precise calculations. Give 3-paragraph mentor feedback: quality of their strategic thinking, any gaps corrected clearly, and one insight about the value of proactive CPA relationships. Warm tone, no grades.",
    },
    yt:{ title:"LLC vs S-Corp — Tax Differences Explained", ch:"Accounting Stuff / ClearValue Tax", why:"Covers entity structure and the S-Corp tax election clearly. Directly reinforces the most important decision new business owners face in Module 12.", url:"https://www.youtube.com/watch?v=D3Y1EEtb1cA" },
  },
  { id:13, label:"Module 13 · 30 min", title:"Accounting Tools\n& Technology",
    intro:"The concepts you've learned don't live in spreadsheets — they live in software. This module shows you exactly which tools real operators use, what each one does, and how to set them up to work for your business.",
    sections:[
      { title:"Why the Right Tool Changes Everything", paras:[
        "Good accounting habits are only as effective as the system that captures them. A shoebox of receipts and a running spreadsheet might get you through your first year — but they won't scale, they won't produce the [[profit and loss statement]] your CPA needs, and they won't give you the project-level clarity that serious investors expect. The right software turns your daily financial activity into organized, searchable, reportable records automatically.",
        "The good news: modern accounting software has eliminated most of the complexity that used to require an accounting degree to navigate. The bad news: there are a lot of options, and choosing the wrong one wastes time and creates migration headaches later. This module helps you choose correctly from the start.",
        "The goal isn't to become your own bookkeeper — it's to understand the tools well enough to set them up correctly, keep them current, and review the reports they generate with confidence. You'll still want a [[bookkeeper]] handling the day-to-day and a [[cpa]] reviewing the output. But understanding the system means you can catch problems, ask better questions, and never be surprised by what the software shows.",
      ]},
      { title:"QuickBooks: The Industry Standard", paras:[
        "[[quickbooks]] is the accounting software your CPA almost certainly uses, your lenders are familiar with, and your investors expect. QuickBooks Online (QBO) is the cloud-based version — accessible from any browser or mobile device, with automatic bank feeds, and seamless sharing with your accountant. For most small business operators in real estate and e-commerce, QuickBooks Online is the right starting point.",
        "For real estate specifically, [[quickbooks]] supports [[class tracking]] — the feature that makes [[job costing]] possible. Each project gets assigned as a class, and every transaction (subcontractor payment, permit fee, draw receipt, sale proceeds) gets tagged to that class. At any point you can pull a P&L by class and see exactly how each project is performing. This is the feature that separates operators who know their margins from those who guess.",
        "QuickBooks also connects directly to your business bank accounts and credit cards, automatically importing transactions for categorization. It generates [[profit and loss statement|P&L statements]], [[balance sheet|balance sheets]], [[cash flow statement|cash flow statements]], and custom reports on demand. The Simple Start plan handles most solo operator needs. Plus or Advanced adds class tracking and more robust reporting — worth the extra cost if you're running multiple projects simultaneously.",
      ]},
      { title:"Wave, Xero, and When to Use Them", paras:[
        "[[wave]] is free accounting software that handles invoicing, expense tracking, and basic financial reporting. For someone just starting out — running one or two projects, no employees, minimal complexity — Wave is a reasonable place to begin. The limitation: no native [[job costing]], limited customization, and you'll likely outgrow it quickly as the business scales. It's a starting point, not a long-term home for a growing real estate or e-commerce operation.",
        "[[xero]] is a strong QuickBooks alternative used widely outside the U.S. and growing in popularity domestically. It has excellent bank reconciliation tools, a clean interface, and solid integrations with third-party apps. If your CPA or bookkeeper recommends Xero, trust that recommendation — the platform itself is excellent. The practical reality: most U.S.-based CPAs and bookkeepers with real estate experience work primarily in QuickBooks, so unless your team prefers Xero, QBO is generally the path of least resistance.",
        "The honest answer: the specific platform matters less than using it consistently and correctly. A well-maintained Wave account beats a neglected QuickBooks account every time. Choose the tool that your accounting team supports, set it up right, and then actually use it. The worst accounting system is the one that has a subscription but no current data in it.",
      ]},
      { title:"Amazon and E-Commerce Specific Tools", paras:[
        "Amazon sellers need tools that bridge the gap between Amazon's Seller Central reporting and their accounting software. Amazon's native reports are detailed but not accounting-ready — they require translation before they can be imported into QuickBooks or Xero. Several tools solve this problem: A2X is the most widely used, automating the reconciliation of Amazon disbursements and mapping them correctly to [[cost of goods sold]], advertising, fees, and refunds in your accounting software.",
        "For inventory management, tools like Inventory Lab, SellerBoard, or Helium 10 provide SKU-level profitability tracking that Amazon's native tools don't offer well. These calculate your true [[gross margin]] per product after all fees, giving you the product-level clarity that drives good sourcing and pricing decisions. These are operational tools, not accounting tools — but they feed the data your accounting system needs.",
        "As your Amazon business scales, the accounting complexity scales with it: multi-currency transactions if you sell internationally, state sales tax nexus obligations triggered by FBA warehouse locations, complex COGS calculations across multiple supplier invoices. This is when having a CPA who specializes in Amazon e-commerce — not just a general small business accountant — becomes genuinely important. The tax landscape for Amazon sellers has significant complexity that generalists often miss.",
      ]},
      { title:"Bank Accounts, Receipts, and the Daily Discipline", paras:[
        "Before any software can work properly, you need the right banking infrastructure. The non-negotiables: a dedicated business checking account (never co-mingle personal and business funds), a dedicated business credit card for business expenses (generates a clean statement that maps directly to expense categories), and ideally a separate account for each active real estate project. This structure makes [[bank reconciliation]] — matching your records to your actual bank statements — straightforward rather than painful.",
        "[[receipt capture]] is the habit that makes tax season painless and deductions defensible. Every receipt gets photographed the moment you receive it — at the hardware store, at the permit office, after a business lunch. Apps like Dext (formerly Receipt Bank) or QuickBooks' built-in receipt capture scan and categorize receipts automatically, attaching them to the correct transaction in your accounting software. The IRS requires documentation for all deductions. A receipt photographed and filed the day you buy something is a receipt you'll still have three years later when you need it.",
        "The weekly accounting routine that keeps everything current: reconcile bank accounts (10 minutes), review and categorize any uncategorized transactions (10 minutes), check project cost-to-date on any active jobs (5 minutes). That's 25 minutes a week that eliminates the chaos of trying to reconstruct a year of records in March. The operators who build real financial clarity do it through consistent, boring weekly habits — not heroic catch-up sessions.",
      ]},
      { title:"Building Your Accounting Team", paras:[
        "Think of your accounting infrastructure as a three-layer system. Layer one is the software — QuickBooks or Xero, set up correctly with the right [[chart of accounts]] and class structure from day one. Layer two is a [[bookkeeper]] — a part-time professional who keeps the software current, reconciles accounts monthly, and flags anything that looks wrong. You should not be doing your own bookkeeping if you're doing more than one or two deals per year; your time is worth more than what a good bookkeeper costs.",
        "Layer three is your [[cpa]] — a licensed professional who reviews the bookkeeper's work quarterly, advises on tax strategy, files your returns, and helps you make major financial decisions. Your CPA should be someone who has worked with real estate investors and small business operators specifically — their specialized knowledge pays for itself many times over in tax savings and avoided mistakes. Meet with your CPA at least quarterly, not just at tax time.",
        "The total cost of this infrastructure — software, bookkeeper, CPA — for a small operator doing two to four real estate projects per year or a growing Amazon business might run $500–$1,200 per month. That number sounds significant until you consider what it's protecting: accurate financial records that support lender relationships, investor confidence, defensible tax returns, and strategic decisions made on real data rather than guesswork. It's not overhead. It's infrastructure.",
      ]},
    ],
    cfu:[
      "What is class tracking in QuickBooks, and how does it enable job costing for a real estate operator? Why does this matter for a business running multiple projects at once?",
      "Describe your ideal weekly accounting routine. What three habits, if done consistently, would keep your financial records current and reliable?",
    ],
    assessment:{ title:"Setting Up for Success",
      scenario:"You're about to start your second spec house project. You've been keeping records in a spreadsheet but your CPA told you it's time to move to proper accounting software. You also have a small Amazon business on the side.\n\n1. Which accounting software would you choose for your real estate business, and why? What specific feature would you use to track each project separately?\n\n2. Describe the banking infrastructure you would set up before the project starts. Why does having separate accounts matter — not just for organization, but financially and legally?\n\n3. You're building your accounting team. Describe the three layers of that team and what role each one plays. What would you look for specifically when hiring a bookkeeper and CPA for your real estate business?",
      sys:"Warm accounting tutor for a high school graduate learning real estate accounting tools. Module 13 covered QuickBooks (including class tracking for job costing), Wave, Xero, Amazon-specific tools (A2X, Inventory Lab), bank account structure, receipt capture, the weekly accounting routine, and building a three-layer accounting team (software, bookkeeper, CPA). Assessment asks for practical application — software choice, banking setup, and team structure. Give 3-paragraph mentor feedback: quality of their practical thinking, any gaps corrected, and one insight about why accounting infrastructure pays for itself in a growing business. Warm tone, no grades.",
    },
    yt:{ title:"QuickBooks Online Tutorial for Small Business", ch:"QuickBooks", why:"The official QuickBooks walkthrough covers exactly the setup you need — chart of accounts, bank connections, and running basic reports. Watch this before you open your first account.", url:"https://www.youtube.com/watch?v=2epZ-nvu5s4" },
  },

  { id:14, label:"Module 14 · 45 min", title:"Putting It\nAll Together",
    intro:"This is the capstone. Everything you've learned across 13 modules comes together in one realistic, complex scenario. Read carefully. Think like an operator. There are no shortcuts here — and that's the point.",
    sections:[
      { title:"You've Come a Long Way", paras:[
        "Fourteen modules ago, you started with a simple question: what is accounting, and why does it matter? You now know the answer — not just conceptually, but practically. You can read a [[profit and loss statement]] and know what each line means. You can look at a [[balance sheet]] and assess the financial health of a deal. You can trace the difference between net income and [[operating cash flow]] and explain exactly why they diverge.",
        "You know the vocabulary that serious business conversations require — [[hard costs]] and [[soft costs]], [[holding costs]] and [[draw schedule]], [[preferred return]] and [[waterfall]], [[cost of goods sold]] and [[gross margin]], [[depreciation]] and [[1031 exchange]], [[equity]] and [[leverage]], [[estimated taxes]] and [[llc]]. These aren't just terms anymore. They're tools you can use in real conversations with Skip, with investors, with lenders, with your CPA.",
        "The goal of this final module is to put everything to work in one realistic scenario. You'll play the role of operator, investor analyst, and strategic advisor — all at once. Take your time. Reference earlier modules if you need to. Use the glossary. Ask your tutor questions. This is a final assessment, not a final exam — the goal is learning, not judgment.",
      ]},
      { title:"The Business Picture So Far", paras:[
        "Let's orient you in the scenario before the assessment begins. You've been operating for two years. Your spec house business runs through an [[llc]]. You've completed three projects — the third just closed last month. You're also a member of an Amazon FBA team, holding a 30% equity stake in a business your partner manages day-to-day.",
        "You have a relationship with two private investors who have participated in your last two projects. One of them — a retired contractor — is considering increasing his involvement. He wants to see your complete financial picture before the next deal. You have a meeting with him in three days.",
        "You're also preparing for a CPA meeting next week where you'll discuss year-end tax strategy. Two questions on the table: whether to make an S-Corp election for next year, and whether to reinvest gains from a recently sold investment property through a [[1031 exchange]] rather than paying capital gains tax. The decisions have a deadline.",
      ]},
      { title:"Reading the Room: Three Financials", paras:[
        "Before the assessment scenario, review these three simplified financial snapshots from your business. You'll reference them in your responses.\n\n**Your Spec House Business — Year-to-Date P&L (3 projects):**\nTotal Revenue: $1,024,000 · Total COGS (hard, soft, holding): $718,000 · Gross Profit: $306,000 · Gross Margin: 29.9% · Operating Expenses: $52,000 · Operating Income: $254,000 · Interest Expense: $42,000 · Net Income: $212,000\n\n**Amazon Business — Last 6 Months (your 30% share):**\nGross Sales (your share): $74,400 · COGS: $48,600 · Gross Profit: $25,800 · Gross Margin: 34.7% · PPC + OpEx: $16,200 · Net Income (your share): $9,600\n\n**Your Current Balance Sheet (business):**\nCurrent Assets: Cash $38,000 · Construction in Progress (next project) $0 · Receivables $0 · Total Current: $38,000\nFixed Assets: Truck + Equipment $52,000 · Total Assets: $90,000\nLiabilities: Credit Card $3,200 · Total Liabilities: $3,200\nEquity: $86,800",
        "Take a few minutes to read these three statements carefully before continuing. Notice what each one tells you — and what questions each one raises. Think about how they connect to each other. A strong response to the assessment will draw on all three.",
        "One observation to carry forward: your business is profitable and your balance sheet is relatively clean — low liabilities, meaningful equity, decent cash. But your cash position ($38,000) is modest for a business that runs projects costing $200,000+. That tension is part of what your investor meeting and CPA conversation will need to address.",
      ]},
    ],
    cfu:[
      "Looking at the three financial snapshots above, what is your combined net income across both businesses this year (annualizing the Amazon figure)? What does your overall gross margin picture look like — and what does that tell you about the health of each business?",
      "Your balance sheet shows $86,800 in equity and $38,000 in cash, with no active projects underway. You want to start a new spec house project that will require $240,000 in total costs (land + construction). Describe the financial gap and how you would think about bridging it.",
    ],
    assessment:{ title:"The Full Picture",
      scenario:"It's the day before your investor meeting. You're preparing a one-page financial summary and anticipating his questions. You also need to clarify your position heading into the CPA meeting.\n\n— INVESTOR MEETING —\n\n1. Your investor asks: 'Walk me through how your business performed this year.' Using the P&L above, give him a clear verbal summary of your spec house business performance — revenue, margins, what worked, and one thing you'd improve. Don't just read numbers — interpret them the way an operator would.\n\n2. He asks: 'How are you thinking about the next project financially — specifically where the capital is coming from and what the deal structure would look like?' Based on your balance sheet and cash position, explain how you'd structure a new $240,000 project and what role you'd want him to play.\n\n3. He asks: 'What does the Amazon business contribute, and is it worth your time?' Use your Amazon figures (and your 30% stake) to give him an honest, financially grounded answer.\n\n— CPA MEETING —\n\n4. Your CPA asks whether you're ready to make an S-Corp election. Based on what you learned in Module 12, explain in your own words what the election does, at what income level it typically starts making sense, and whether you think you're at that point based on your current numbers.\n\n5. The property you recently sold generated an $88,000 capital gain. Your CPA presents two options: pay long-term capital gains tax now, or execute a 1031 exchange into a new investment property. Explain the tradeoff between these two options and what additional information you'd need before deciding.\n\n6. Final reflection: Looking back across all 14 modules, identify the single most important accounting concept or habit you're taking away — and explain specifically how you'll apply it in the next 12 months of your business.",
      sys:"You are a warm, direct, expert accounting tutor for Money in Motion — a course for a high school graduate learning accounting for real estate and small business. This is the Module 14 capstone assessment. The student has completed 13 prior modules covering: what accounting is, the accounting team, the accounting framework, assets, liabilities and equity, revenue/costs/expenses, reading the P&L, reading the balance sheet, reading the cash flow statement, real estate project accounting, Amazon/product business accounting, tax basics, and accounting tools.\n\nThe assessment has 6 questions covering: P&L interpretation, deal structuring and capital planning, evaluating a business stake, S-Corp election analysis, 1031 exchange vs. capital gains tradeoff, and personal reflection.\n\nKey financial details to reference:\n- Spec house YTD: $1,024,000 revenue, $718,000 COGS, $306,000 gross profit (29.9% margin), $52,000 opex, $254,000 operating income, $42,000 interest, $212,000 net income\n- Amazon (30% share, 6 months): $74,400 revenue, $48,600 COGS, $25,800 gross profit (34.7%), $16,200 PPC+opex, $9,600 net income\n- Balance sheet: $38,000 cash, $52,000 fixed assets, $3,200 liabilities, $86,800 equity\n- New project needs: $240,000 total costs\n- Capital gain: $88,000 long-term\n- S-Corp consideration: combined income ~$230,000+\n\nGive substantive, warm mentor-style feedback across all 6 questions in 4-5 paragraphs total — this is the capstone so go deeper than usual. Assess: quality of financial interpretation, strategic thinking, conceptual accuracy, and practical application. Identify what they got right across the range, correct any significant gaps, and close with a genuine acknowledgment of how far they've come and what they're now equipped to do. Make this feel like a real mentor reviewing real work. No grades. Warm, direct, substantive.",
    },
    yt:{ title:"Complete Accounting Overview for Small Business Owners", ch:"Accounting Stuff", why:"A comprehensive review of everything this course covered — financial statements, key concepts, and how it all connects. The perfect final watch to consolidate everything you've learned.", url:"https://www.youtube.com/watch?v=_F6a0ddbjtI" },
  },
];

var MLIST=[
  {id:1,title:"What Is Accounting & Why It Matters",on:true},
  {id:2,title:"The People Behind the Numbers",on:true},
  {id:3,title:"The Accounting Framework",on:true},
  {id:4,title:"Assets — What You Own",on:true},
  {id:5,title:"Liabilities & Equity",on:true},
  {id:6,title:"Revenue, Costs & Expenses",on:true},
  {id:7,title:"Reading the P&L",on:true},
  {id:8,title:"Reading the Balance Sheet",on:true},
  {id:9,title:"Reading the Cash Flow Statement",on:true},
  {id:10,title:"Accounting for Real Estate Projects",on:true},
  {id:11,title:"Accounting for Product-Based Business",on:true},
  {id:12,title:"Tax Basics for Small Business",on:true},
  {id:13,title:"Accounting Tools & Technology",on:true},
  {id:14,title:"Putting It All Together",on:true},
];

var TOOLS=[
  {id:"pl",label:"P&L Statement",icon:"📊",desc:"Profit & Loss Explorer"},
  {id:"bs",label:"Balance Sheet",icon:"⚖️",desc:"Assets & Liabilities"},
  {id:"cf",label:"Cash Flow",icon:"💵",desc:"Cash Movement Explorer"},
];

export default function Course(){
  var vs=useState("home");var view=vs[0];var setView=vs[1];
  var ms=useState(null);var mid=ms[0];var setMid=ms[1];
  var br=useState(true);var bar=br[0];var setBar=br[1];
  var ds=useState(function(){try{return JSON.parse(localStorage.getItem("mim_all")||"[]");}catch(e){return[];}});
  var done=ds[0];var setDone=ds[1];
  var ts=useState(null);var term=ts[0];var setTerm=ts[1];
  var cas=useState({});var cfuA=cas[0];var setCfuA=cas[1];
  var css=useState({});var cfuS=css[0];var setCfuS=css[1];
  var ats=useState({});var asmT=ats[0];var setAsmT=ats[1];
  var afs=useState({});var asmF=afs[0];var setAsmF=afs[1];
  var als=useState(false);var asmL=als[0];var setAsmL=als[1];
  var chs=useState(false);var chat=chs[0];var setChat=chs[1];
  var mgs=useState([]);var msgs=mgs[0];var setMsgs=mgs[1];
  var ins=useState("");var inp=ins[0];var setInp=ins[1];
  var cls=useState(false);var cL=cls[0];var setCL=cls[1];
  var endRef=useRef(null);
  var scrollRef=useRef(null);
  var scrollPos=useRef(0);
  var cfuDraft=useRef({});
  var asmDraft=useRef({});

  useEffect(function(){try{localStorage.setItem("mim_all",JSON.stringify(done));}catch(e){};},[done]);
  useEffect(function(){if(endRef.current)endRef.current.scrollIntoView({behavior:"smooth"});},[msgs,cL]);
  useLayoutEffect(function(){
    if(view==="mod"&&scrollRef.current){
      scrollRef.current.scrollTop=scrollPos.current;
    }
  });

  var pct=Math.round(done.length/MLIST.length*100);
  var courseComplete=done.length===MLIST.length;
  var mod=ALL_MODS.find(function(m){return m.id===mid;});
  var isToolView=view.indexOf("tool-")===0;
  function goMod(id){setMid(id);setView("mod");if(scrollRef.current)scrollRef.current.scrollTop=0;scrollPos.current=0;}

  function submitAsm(){
    var t=(asmDraft.current[mid]!==undefined?asmDraft.current[mid]:(asmT[mid]||""));if(!t.trim()||asmL||!mod)return;
    setAsmL(true);setAsmF(function(p){var n=Object.assign({},p);n[mid]="";return n;});
    fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:mod.id===14?1200:900,
        system:mod.assessment.sys,
        messages:[{role:"user",content:"Scenario:\n"+mod.assessment.scenario+"\n\nStudent response:\n"+t}]})
    }).then(function(r){return r.json();}).then(function(d){
      var tx=d.content&&d.content.find(function(b){return b.type==="text";});
      setAsmF(function(p){var n=Object.assign({},p);n[mid]=tx?tx.text:"Unable to load feedback.";return n;});
      setAsmL(false);
    }).catch(function(){setAsmF(function(p){var n=Object.assign({},p);n[mid]="Connection issue — try again.";return n;});setAsmL(false);});
  }

  function sendChat(){
    if(!inp.trim()||cL||!mod)return;
    var u=inp.trim();setInp("");
    var m2=msgs.concat([{role:"user",content:u}]);
    setMsgs(m2);setCL(true);
    var sys="You are the AI tutor for Money in Motion, an accounting course for a high school graduate learning for real estate and small business. Student is on Module "+mod.id+": "+mod.title.replace("\n"," ")+". Warm, direct, encouraging. Real estate and small business examples. Max 2-3 paragraphs.";
    fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:600,system:sys,messages:m2})
    }).then(function(r){return r.json();}).then(function(d){
      var tx=d.content&&d.content.find(function(b){return b.type==="text";});
      setMsgs(m2.concat([{role:"assistant",content:tx?tx.text:"Try again."}]));setCL(false);
    }).catch(function(){setMsgs(m2.concat([{role:"assistant",content:"Connection issue."}]));setCL(false);});
  }

  var EB={fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.22em",color:C.teal,textTransform:"uppercase",marginBottom:12};
  var TA={width:"100%",padding:"14px 16px",borderRadius:10,border:"1.5px solid rgba(28,31,46,0.1)",background:C.ivory,fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:300,color:C.slate,resize:"vertical",lineHeight:1.75};

  function Home(){return(
    <div style={{padding:"52px 52px 80px 0"}}>
      <div style={{marginBottom:52}}>
        <div style={EB}>14-Module Course · ~30 min each</div>
        <h1 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:52,letterSpacing:"-0.02em",color:C.slate,lineHeight:1.05,marginBottom:18}}>Money in Motion</h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:19,color:C.slate,opacity:0.68,maxWidth:500,lineHeight:1.8}}>A practical accounting course built for entrepreneurs.</p>
      </div>
      {courseComplete&&<div style={{background:TF,border:"1.5px solid "+C.teal,borderRadius:14,padding:"20px 24px",marginBottom:32,maxWidth:560}}><div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:26}}>🎓</span><div><div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:18,color:C.teal,marginBottom:2}}>Course Complete!</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:C.slate,opacity:0.7}}>All 14 modules finished. The tools and glossary are yours to use anytime.</div></div></div></div>}
      <div style={{marginBottom:48}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",color:C.slate,opacity:0.45,textTransform:"uppercase"}}>Your Progress</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.teal,fontWeight:500}}>{done.length} / {MLIST.length} complete</span></div>
        <div style={{background:C.dark,borderRadius:6,height:5,maxWidth:560}}><div style={{background:C.teal,height:5,borderRadius:6,width:pct+"%",transition:"width 0.6s"}}/></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:740}}>
        {MLIST.map(function(m){var d=done.includes(m.id);return(
          <div key={m.id} onClick={function(){if(m.on)goMod(m.id);}} onMouseEnter={function(e){if(m.on)e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={function(e){e.currentTarget.style.transform="translateY(0)";}} style={{background:d?TF:C.dark,border:"1.5px solid "+(d?C.teal:m.on?"rgba(28,31,46,0.13)":"transparent"),borderRadius:14,padding:"20px 22px",cursor:m.on?"pointer":"default",opacity:m.on||d?1:0.38,transition:"all 0.2s"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:d?C.teal:C.slate,opacity:d?1:0.42}}>Module {m.id}</span>{d?<span style={{color:C.teal,fontSize:15}}>✓</span>:(!m.on&&<span style={{fontSize:12,opacity:0.3}}>🔒</span>)}</div>
            <p style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:15,color:C.slate,lineHeight:1.45}}>{m.title}</p>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.slate,opacity:0.38,marginTop:5}}>{m.id===14?"45 min":"30 min"}</p>
          </div>
        );})}
      </div>
    </div>
  );}

  function ToolView(){
    var activeTool=view.replace("tool-","");
    return(
      <div style={{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"}}>
        <div style={{padding:"20px 52px 16px",borderBottom:"1px solid "+C.dark,flexShrink:0}}>
          <div style={EB}>Financial Statement Tools</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {TOOLS.map(function(t){var a=activeTool===t.id;return(
              <button key={t.id} onClick={function(){setView("tool-"+t.id);}} style={{padding:"7px 14px",borderRadius:8,border:"1.5px solid "+(a?C.teal:"rgba(28,31,46,0.15)"),background:a?TF:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:15,color:a?C.teal:C.slate,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
                <span>{t.icon}</span><span>{t.label}</span>
              </button>
            );})}
          </div>
        </div>
        <div style={{flex:1,overflow:"hidden"}}>
          {activeTool==="pl"&&<PLTool/>}
          {activeTool==="bs"&&<BSTool/>}
          {activeTool==="cf"&&<CFTool/>}
        </div>
      </div>
    );
  }

  function ModView(){
    if(!mod)return null;
    var at=asmT[mod.id]||"",af=asmF[mod.id]||"";
    var isCapstone=mod.id===14;
    return(
      <div style={{padding:"52px 52px 100px 0",maxWidth:700}}>
        <button onClick={function(){setView("home");if(scrollRef.current)scrollRef.current.scrollTop=0;scrollPos.current=0;}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.teal,background:"none",border:"none",cursor:"pointer",padding:0,marginBottom:24}}>← Back to Course</button>
        <div style={{marginBottom:52}}>
          <div style={EB}>{mod.label}</div>
          <h1 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:44,letterSpacing:"-0.02em",color:C.slate,lineHeight:1.1,marginBottom:18,whiteSpace:"pre-line"}}>{mod.title}</h1>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:18,color:C.slate,opacity:0.65,lineHeight:1.75}}>{mod.intro}</p>
          {!isCapstone&&<div style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:18,background:TF,borderRadius:8,padding:"8px 14px"}}><span style={{color:C.teal}}>💡</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.teal}}>Tap any <strong style={{borderBottom:"1.5px solid "+C.teal}}>teal underlined term</strong> to see its definition</span></div>}
        </div>
        {mod.sections.map(function(s,si){
          var isCapstoneFin=isCapstone&&s.title==="Reading the Room: Three Financials";
          return(
            <div key={si} style={{marginBottom:48}}>
              <h2 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:21,color:C.slate,marginBottom:18,paddingBottom:14,borderBottom:"1px solid "+C.dark}}>{s.title}</h2>
              {isCapstoneFin
                ? <div><p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:18,color:C.slate,lineHeight:1.9,marginBottom:24}}>{s.paras[0]}</p><CapstoneTabs/>{s.paras.slice(1).map(function(p,pi){return <Para key={pi} text={p} onTerm={setTerm}/>;})}</div>
                : s.paras.map(function(p,pi){return <Para key={pi} text={p} onTerm={setTerm}/>;})
              }
            </div>
          );
        })}
        {mod.tool&&<ToolCallout tool={mod.tool}/>}
        <div style={{borderTop:"2px solid "+C.dark,margin:"52px 0"}}/>
        <div style={{marginBottom:52}}>
          <div style={EB}>Check for Understanding</div>
          <h3 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:26,color:C.slate,marginBottom:10}}>Before You Continue</h3>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:16,color:C.slate,opacity:0.6,marginBottom:28,lineHeight:1.7}}>Not graded — just for you. Writing it down makes it stick.</p>
          {mod.cfu.map(function(q,qi){var k=mod.id+"-"+qi;return(
            <div key={qi} style={{background:C.dark,borderRadius:14,padding:"22px 24px",marginBottom:20}}>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:400,fontSize:17,color:C.slate,lineHeight:1.75,marginBottom:16}}>{q}</p>
              <textarea defaultValue={cfuA[k]||""} onChange={function(e){cfuDraft.current[k]=e.target.value;}} placeholder="Write your answer here..." style={Object.assign({},TA,{minHeight:90})}/>
              <button onClick={function(){if(cfuDraft.current[k]!==undefined){setCfuA(function(p){var n=Object.assign({},p);n[k]=cfuDraft.current[k];return n;});}setCfuS(function(p){var n=Object.assign({},p);n[k]=true;return n;});}} style={{marginTop:10,padding:"7px 18px",background:cfuS[k]?C.teal:"transparent",color:cfuS[k]?C.slate:C.teal,border:"1.5px solid "+C.teal,borderRadius:7,fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:500,cursor:"pointer",transition:"all 0.2s"}}>{cfuS[k]?"✓ Saved":"Save Answer"}</button>
            </div>
          );})}
        </div>
        <div style={{marginBottom:52}}>
          <div style={EB}>{isCapstone?"Capstone Assessment":"Module Assessment"}</div>
          <h3 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:26,color:C.slate,marginBottom:8}}>{mod.assessment.title}</h3>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:16,color:C.slate,opacity:0.6,marginBottom:24,lineHeight:1.7}}>{isCapstone?"This is the final assessment — six questions covering two real business meetings. Take your time. Submit when ready for your tutor's full review.":"Read the scenario and respond in your own words. Submit for personalized tutor feedback."}</p>
          <div style={{background:C.mid,borderRadius:14,padding:"24px 28px",marginBottom:24}}>
            <div style={Object.assign({},EB,{marginBottom:14})}>{isCapstone?"Your Scenario":"Scenario"}</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:300,color:C.ivory,lineHeight:1.9,whiteSpace:"pre-line"}}>{mod.assessment.scenario}</div>
          </div>
          <textarea defaultValue={at} onChange={function(e){asmDraft.current[mod.id]=e.target.value;}} placeholder={isCapstone?"Address all six questions in your response...":"Write your response here..."} style={Object.assign({},TA,{minHeight:isCapstone?320:200})}/>
          <button onClick={submitAsm} disabled={asmL} style={{marginTop:14,padding:"12px 28px",background:!asmL?C.teal:C.dark,color:!asmL?C.slate:"rgba(28,31,46,0.35)",border:"none",borderRadius:10,fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:500,cursor:at.trim()&&!asmL?"pointer":"not-allowed",transition:"all 0.2s"}}>{asmL?"Sending...":"Submit for Feedback →"}</button>
          {asmL&&<div style={{display:"flex",alignItems:"center",gap:12,marginTop:16,padding:"14px 20px",background:"rgba(28,31,46,0.04)",borderRadius:10,border:"1px solid rgba(28,31,46,0.08)"}}>
            <div style={{display:"flex",alignItems:"center",gap:3}}>
              <span className="mim-dot"></span>
              <span className="mim-dot"></span>
              <span className="mim-dot"></span>
            </div>
            <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:"#1C1F2E",opacity:0.6}}>Your tutor is reviewing your response — this usually takes 15–30 seconds.</span>
          </div>}
          {af&&<div style={{marginTop:28,background:C.dark,borderLeft:"4px solid "+C.teal,borderRadius:"0 14px 14px 0",padding:"24px 28px"}}><div style={EB}>Tutor Feedback</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,fontWeight:300,color:C.slate,lineHeight:1.85,whiteSpace:"pre-wrap",marginTop:8}}>{af}</div></div>}
        </div>
        <div style={{background:C.mid,borderRadius:18,padding:"28px 32px",marginBottom:52}}>
          <div style={Object.assign({},EB,{marginBottom:14})}>Watch to Reinforce</div>
          <h3 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:20,color:C.ivory,marginBottom:4}}>{mod.yt.title}</h3>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.teal,marginBottom:14}}>{mod.yt.ch}</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:300,color:C.ivory,opacity:0.75,lineHeight:1.75,marginBottom:22}}>{mod.yt.why}</p>
          <button onClick={function(){window.open(mod.yt.url,"_blank");}} style={{display:"inline-flex",alignItems:"center",gap:8,background:C.teal,color:C.slate,padding:"10px 22px",borderRadius:8,fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:500,border:"none",cursor:"pointer"}}>▶ Watch on YouTube</button>
        </div>
        {done.includes(mod.id)
          ?<div>{isCapstone&&<Certificate/>}<div style={{textAlign:"center",padding:24,color:C.teal,fontFamily:"'DM Sans',sans-serif",fontSize:17,fontWeight:500}}>✓ Module {mod.id} Complete{isCapstone?" — Course finished. Well done.":""}</div></div>
          :<button onClick={function(){setDone(function(p){return p.concat([mod.id]);});setView("home");if(scrollRef.current)scrollRef.current.scrollTop=0;scrollPos.current=0;}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.88";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}} style={{width:"100%",padding:16,background:C.teal,color:C.slate,border:"none",borderRadius:12,fontFamily:"'Syne',serif",fontSize:18,fontWeight:600,cursor:"pointer"}}>{isCapstone?"Complete the Course →":"Mark Module "+mod.id+" Complete →"}</button>
        }
      </div>
    );
  }

  function GlossView(){return(
    <div style={{padding:"52px 52px 100px 0"}}>
      <button onClick={function(){setView("home");if(scrollRef.current)scrollRef.current.scrollTop=0;scrollPos.current=0;}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.teal,background:"none",border:"none",cursor:"pointer",padding:0,marginBottom:24}}>← Back</button>
      <div style={EB}>Course Reference</div>
      <h1 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:44,letterSpacing:"-0.02em",color:C.slate,marginBottom:40}}>Glossary</h1>
      <div style={{display:"grid",gap:12}}>
        {Object.entries(GL).sort(function(a,b){return a[0].localeCompare(b[0]);}).map(function(e){return(
          <div key={e[0]} style={{background:C.dark,borderRadius:12,padding:"18px 22px"}}>
            <p style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:17,color:C.teal,marginBottom:6}}>{dsp(e[0])}</p>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:16,color:C.slate,lineHeight:1.75}}>{e[1]}</p>
          </div>
        );})}
      </div>
    </div>
  );}

  return(
    <div>
      <style dangerouslySetInnerHTML={{__html:"@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');*{box-sizing:border-box;margin:0;padding:0;}textarea{font-family:'DM Sans',sans-serif!important;}input[type=number]{outline:none;}input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;}input[type=number]:focus{border-color:"+C.teal+"!important;box-shadow:0 0 0 3px rgba(0,212,180,0.12)!important;}::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background:rgba(28,31,46,0.18);border-radius:4px;}@keyframes mim-bounce{0%,80%,100%{transform:translateY(0);opacity:0.3;}40%{transform:translateY(-5px);opacity:1;}}.mim-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#1C1F2E;margin:0 2px;animation:mim-bounce 1.4s infinite;}.mim-dot:nth-child(2){animation-delay:0.2s;}.mim-dot:nth-child(3){animation-delay:0.4s;}"}}/>
      <div style={{display:"flex",height:"100vh",background:C.ivory,overflow:"hidden"}}>
        <div style={{width:bar?288:0,minWidth:bar?288:0,background:C.slate,height:"100vh",overflow:"hidden",transition:"all 0.3s",flexShrink:0}}>
          <div style={{width:288,height:"100%",overflowY:"auto",padding:"28px 20px"}}>
            <div style={{marginBottom:28,paddingLeft:4,display:"flex",alignItems:"center",gap:4}}><span style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:16,color:C.ivory,letterSpacing:"0.04em"}}>Money in Motion</span><span style={{color:C.teal,fontSize:20}}>·</span></div>
            <div style={{marginBottom:24,paddingLeft:4}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",color:C.ivory,opacity:0.38,textTransform:"uppercase"}}>Progress</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal}}>{pct}%</span></div>
              <div style={{background:C.mid,borderRadius:3,height:2.5}}><div style={{background:C.teal,height:2.5,borderRadius:3,width:pct+"%",transition:"width 0.5s"}}/></div>
            </div>
            {[{l:"⌂  Dashboard",v:"home"},{l:"⊞  Glossary",v:"gloss"}].map(function(x){return(<button key={x.v} onClick={function(){setView(x.v);if(scrollRef.current)scrollRef.current.scrollTop=0;scrollPos.current=0;}} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 12px",marginBottom:2,borderRadius:8,background:view===x.v?TF:"transparent",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontSize:15,color:view===x.v?C.teal:C.ivory}}>{x.l}</button>);})}
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.18em",color:C.ivory,opacity:0.28,textTransform:"uppercase",margin:"14px 0 6px 12px"}}>Tools</div>
            {TOOLS.map(function(t){var active=view==="tool-"+t.id;return(
              <button key={t.id} onClick={function(){setView("tool-"+t.id);}} style={{display:"flex",alignItems:"center",gap:8,width:"100%",textAlign:"left",padding:"7px 12px",borderRadius:8,marginBottom:1,background:active?TF:"transparent",border:"none",cursor:"pointer"}}>
                <span style={{fontSize:15}}>{t.icon}</span>
                <div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:active?C.teal:C.ivory,opacity:active?1:0.75}}>{t.label}</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.ivory,opacity:0.35}}>{t.desc}</div></div>
              </button>
            );})}
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:500,letterSpacing:"0.18em",color:C.ivory,opacity:0.28,textTransform:"uppercase",margin:"14px 0 6px 12px"}}>Modules</div>
            {MLIST.map(function(m){var d=done.includes(m.id),cur=view==="mod"&&mid===m.id;return(
              <button key={m.id} onClick={function(){if(m.on)goMod(m.id);}} style={{display:"flex",alignItems:"flex-start",gap:10,width:"100%",textAlign:"left",padding:"7px 12px",borderRadius:8,marginBottom:1,background:cur?TF:"transparent",border:"none",cursor:m.on?"pointer":"default",opacity:m.on||d?1:0.28}}>
                <span style={{fontSize:9,marginTop:4,color:d||cur?C.teal:C.ivory,flexShrink:0,minWidth:12}}>{d?"✓":m.on?"●":"○"}</span>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:cur||d?C.teal:C.ivory,lineHeight:1.4,opacity:cur?1:0.75}}>{m.id}. {m.title}</span>
              </button>
            );})}
          </div>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{background:C.ivory,borderBottom:"1px solid "+C.dark,padding:"14px 52px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
            <button onClick={function(){setBar(function(b){return !b;});}} style={{background:"none",border:"none",cursor:"pointer",fontSize:19,color:C.slate,opacity:0.45,padding:"2px 4px"}}>☰</button>
            <div style={{display:"flex",gap:8}}>
              <button onClick={function(){setView("tool-pl");}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.teal,background:"none",border:"1px solid rgba(0,212,180,0.4)",borderRadius:6,padding:"6px 12px",cursor:"pointer"}}>📊 Tools</button>
              <button onClick={function(){setView("gloss");}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.teal,background:"none",border:"1px solid rgba(0,212,180,0.4)",borderRadius:6,padding:"6px 12px",cursor:"pointer"}}>Glossary</button>
            </div>
          </div>
          <div ref={scrollRef} onScroll={function(e){if(view==="mod")scrollPos.current=e.target.scrollTop;}} style={{flex:1,overflow:isToolView?"hidden":"auto",padding:isToolView?"0":"0 0 0 52px"}}>
            {view==="home"&&<Home/>}
            {view==="mod"&&<ModView/>}
            {view==="gloss"&&<GlossView/>}
            {isToolView&&<ToolView/>}
          </div>
        </div>
        {term&&(<div onClick={function(){setTerm(null);}} style={{position:"fixed",inset:0,background:"rgba(28,31,46,0.55)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center"}}><div onClick={function(e){e.stopPropagation();}} style={{background:C.ivory,borderRadius:18,padding:"32px 36px",maxWidth:420,margin:24,boxShadow:"0 24px 80px rgba(28,31,46,0.3)"}}><div style={EB}>Definition</div><h3 style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:26,color:C.slate,marginBottom:14}}>{dsp(term)}</h3><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:17,fontWeight:300,color:C.slate,lineHeight:1.85}}>{GL[term]}</p><button onClick={function(){setTerm(null);}} style={{marginTop:22,padding:"9px 22px",background:C.teal,color:C.slate,border:"none",borderRadius:8,fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:500,cursor:"pointer"}}>Got it</button></div></div>)}
        <div style={{position:"fixed",bottom:24,right:24,zIndex:200}}>
          {chat&&(<div style={{position:"absolute",bottom:68,right:0,width:348,height:460,background:C.ivory,borderRadius:18,boxShadow:"0 20px 60px rgba(28,31,46,0.22)",display:"flex",flexDirection:"column",overflow:"hidden",border:"1px solid "+C.dark}}>
            <div style={{background:C.slate,padding:"15px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
              <div><div style={{fontFamily:"'Syne',serif",fontWeight:600,fontSize:16,color:C.ivory}}>Ask Your Tutor</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.teal,marginTop:2}}>{mod?"Module "+mod.id+" · "+mod.title.replace("\n"," "):"Money in Motion"}</div></div>
              <button onClick={function(){setChat(false);}} style={{background:"none",border:"none",color:C.ivory,opacity:0.5,cursor:"pointer",fontSize:24,lineHeight:1}}>×</button>
            </div>
            <div style={{flex:1,overflowY:"auto",padding:"14px 16px",display:"flex",flexDirection:"column",gap:10}}>
              {msgs.length===0&&<div style={{textAlign:"center",padding:"28px 12px"}}><div style={{fontSize:30,marginBottom:10}}>💬</div><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.slate,opacity:0.5,lineHeight:1.7}}>Got a question? Ask anything — no question is too basic.</p></div>}
              {msgs.map(function(m,i){return(<div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}><div style={{maxWidth:"82%",padding:"10px 13px",borderRadius:m.role==="user"?"14px 14px 3px 14px":"14px 14px 14px 3px",background:m.role==="user"?C.teal:C.dark,fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:C.slate,lineHeight:1.65}}>{m.content}</div></div>);})}
              {cL&&<div style={{display:"flex"}}><div style={{background:C.dark,padding:"10px 14px",borderRadius:"14px 14px 14px 3px",fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.slate,opacity:0.45}}>Thinking...</div></div>}
              <div ref={endRef}/>
            </div>
            <div style={{padding:10,borderTop:"1px solid "+C.dark,display:"flex",gap:8,flexShrink:0}}>
              <input value={inp} onChange={function(e){setInp(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter"&&!e.shiftKey)sendChat();}} placeholder="Ask a question..." style={{flex:1,padding:"9px 13px",borderRadius:8,border:"1.5px solid "+C.dark,background:C.dark,fontFamily:"'DM Sans',sans-serif",fontSize:15,color:C.slate}}/>
              <button onClick={sendChat} disabled={!inp.trim()||cL} style={{padding:"9px 14px",background:inp.trim()?C.teal:C.dark,border:"none",borderRadius:8,cursor:inp.trim()?"pointer":"default",fontSize:17,transition:"background 0.2s"}}>→</button>
            </div>
          </div>)}
          <button onClick={function(){setChat(function(o){return !o;});}} onMouseEnter={function(e){e.currentTarget.style.transform="scale(1.08)";}} onMouseLeave={function(e){e.currentTarget.style.transform="scale(1)";}} style={{width:52,height:52,borderRadius:"50%",background:C.teal,border:"none",cursor:"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,212,180,0.4)",transition:"transform 0.2s"}}>{chat?"×":"💬"}</button>
        </div>
      </div>
    </div>
  );
}
