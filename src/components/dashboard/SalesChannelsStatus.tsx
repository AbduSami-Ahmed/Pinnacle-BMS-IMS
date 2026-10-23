import * as React from "react";
import { SalesChannel } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { Share2, RefreshCw } from "lucide-react";

export interface SalesChannelsStatusProps {
  channels: SalesChannel[];
  isLoading?: boolean;
}

export function SalesChannelsStatus({ channels, isLoading }: SalesChannelsStatusProps) {
  const getStatusBadge = (status: SalesChannel["status"]) => {
    switch (status) {
      case "HEALTHY":
        return <Badge variant="success" withDot>Online / Active</Badge>;
      case "SYNCING":
        return <Badge variant="info" withDot>Syncing Queue</Badge>;
      case "NEEDS_ATTENTION":
        return <Badge variant="danger" withDot>Attention Needed</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-emerald-600" />
            <CardTitle>Sales-Channel Status</CardTitle>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time feed across physical counter, wholesale portal, and marketplace syncs.
          </p>
        </div>
        <Badge variant="neutral">
          {channels.length} channels
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        {isLoading ? (
          <div className="space-y-3 py-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-14 bg-slate-100 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <span>{channel.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      ({channel.type})
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 text-slate-400" />
                    <span>Sync: {channel.lastSync}</span>
                  </div>
                </div>

                <div className="text-right space-y-0.5">
                  <div className="font-bold text-slate-900">
                    {formatCurrency(channel.revenueToday)}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {channel.ordersToday} orders today
                  </div>
                </div>

                <div className="shrink-0 hidden sm:block">
                  {getStatusBadge(channel.status)}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
