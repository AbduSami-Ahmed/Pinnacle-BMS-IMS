import * as React from "react";
import { ActivityEvent } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Clock,
  PackageCheck,
  Truck,
  FileCheck2,
  RotateCcw,
  SearchCheck,
} from "lucide-react";

export interface RecentActivityFeedProps {
  activities: ActivityEvent[];
  isLoading?: boolean;
}

export function RecentActivityFeed({ activities, isLoading }: RecentActivityFeedProps) {
  const getEventIcon = (type: ActivityEvent["type"]) => {
    switch (type) {
      case "STOCK_PICKED":
        return <PackageCheck className="w-3.5 h-3.5 text-blue-600" />;
      case "STOCK_RECEIVED":
        return <Truck className="w-3.5 h-3.5 text-emerald-600" />;
      case "QUOTE_GENERATED":
        return <FileCheck2 className="w-3.5 h-3.5 text-purple-600" />;
      case "CORE_RETURN":
        return <RotateCcw className="w-3.5 h-3.5 text-amber-600" />;
      case "INVENTORY_AUDIT":
        return <SearchCheck className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <CardTitle>Recent Shop Activity</CardTitle>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit trail of picks, dock receipts, quotes, and core returns.
          </p>
        </div>
        <Badge variant="neutral">Live Audit Log</Badge>
      </CardHeader>

      <CardContent className="p-4">
        {isLoading ? (
          <div className="space-y-3 py-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-slate-100 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {activities.map((act) => (
              <div
                key={act.id}
                className="flex items-start gap-3 text-xs p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-200"
              >
                <div className="w-7 h-7 rounded bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                  {getEventIcon(act.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-900 truncate">
                      {act.title}
                    </span>
                    <span className="text-[10px] text-slate-400 shrink-0">
                      {act.timestamp}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                    {act.description}
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Operator: {act.operator}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
