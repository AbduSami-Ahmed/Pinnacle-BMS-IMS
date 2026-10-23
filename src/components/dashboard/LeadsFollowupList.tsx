"use client";

import * as React from "react";
import { SalesLead } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PhoneCall, CheckCircle2, UserCheck, X, Phone } from "lucide-react";

export interface LeadsFollowupListProps {
  leads: SalesLead[];
  isLoading?: boolean;
}

export function LeadsFollowupList({ leads, isLoading }: LeadsFollowupListProps) {
  const [selectedLead, setSelectedLead] = React.useState<SalesLead | null>(null);

  const getStatusBadge = (status: SalesLead["status"]) => {
    switch (status) {
      case "NEEDS_QUOTE":
        return <Badge variant="warning" withDot>Needs Quote</Badge>;
      case "FITMENT_VERIFICATION":
        return <Badge variant="info" withDot>Fitment Check</Badge>;
      case "FOLLOW_UP_REQUIRED":
        return <Badge variant="danger" withDot>Follow-up Due</Badge>;
      case "QUOTED":
        return <Badge variant="success" withDot>Quoted</Badge>;
    }
  };

  const getUrgencyBadge = (urgency: SalesLead["urgency"]) => {
    switch (urgency) {
      case "High":
        return <Badge variant="danger">High Priority</Badge>;
      case "Medium":
        return <Badge variant="warning">Medium</Badge>;
      default:
        return <Badge variant="neutral">Standard</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <CardTitle>Leads Requiring Follow-Up</CardTitle>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Commercial garage inquiries, phone requests, and online RFQs needing response.
          </p>
        </div>
        <Badge variant="neutral">
          {leads.length} open
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        {isLoading ? (
          <div className="space-y-3 py-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-slate-100 rounded animate-pulse" />
            ))}
          </div>
        ) : leads.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            title="All customer inquiries resolved"
            description="No pending garage requests or RFQs awaiting counter response."
          />
        ) : (
          <div className="divide-y divide-slate-100">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-slate-50/50 p-2 rounded"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-xs text-slate-900">
                      {lead.contactName}
                    </span>
                    {lead.companyName && (
                      <span className="text-xs text-slate-500 font-medium">
                        ({lead.companyName})
                      </span>
                    )}
                    {getUrgencyBadge(lead.urgency)}
                    <span className="text-[10px] text-slate-400">
                      via {lead.source} • {lead.createdAt}
                    </span>
                  </div>

                  <div className="text-xs text-slate-800 font-medium">
                    {lead.partRequested}
                  </div>

                  <div className="text-[11px] text-slate-500">
                    Vehicle: {lead.vehicleDetails}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {getStatusBadge(lead.status)}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedLead(lead)}
                    className="h-7 text-xs border-slate-300 hover:bg-slate-100"
                  >
                    <UserCheck className="w-3.5 h-3.5 mr-1 text-blue-600" />
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      {/* Lead Review Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40">
          <div className="bg-white rounded-md border border-slate-300 shadow-lg max-w-sm w-full p-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="font-semibold text-slate-900">Commercial Lead Inspection</h4>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 space-y-2.5">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded space-y-1">
                <div className="text-xs font-semibold text-slate-900">{selectedLead.contactName}</div>
                {selectedLead.companyName && (
                  <div className="text-slate-600 text-[11px] font-medium">{selectedLead.companyName}</div>
                )}
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-mono mt-1">
                  <Phone className="w-3 h-3" />
                  <span>{selectedLead.phone}</span>
                </div>
              </div>

              <div className="space-y-1 text-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Requirement</span>
                <p className="font-medium text-slate-900">{selectedLead.partRequested}</p>
                <p className="text-[11px] text-slate-500">Target Fitment: {selectedLead.vehicleDetails}</p>
              </div>

              <div className="p-2 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-900">
                Direct phone dialing and quote dispatch will connect to the Quotes & Customer CRM module.
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-end">
              <Button variant="primary" size="sm" onClick={() => setSelectedLead(null)}>
                Done Reviewing
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
