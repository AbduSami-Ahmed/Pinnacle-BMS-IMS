"use client";

import * as React from "react";
import { PendingOrder } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCart, ClipboardList, CheckCircle2, X } from "lucide-react";

export interface OrdersAwaitingFulfillmentProps {
  orders: PendingOrder[];
  isLoading?: boolean;
}

export function OrdersAwaitingFulfillment({
  orders,
  isLoading,
}: OrdersAwaitingFulfillmentProps) {
  const [activeOrder, setActiveOrder] = React.useState<PendingOrder | null>(null);

  const getStatusBadge = (status: PendingOrder["status"]) => {
    switch (status) {
      case "AWAITING_PICK":
        return <Badge variant="warning" withDot>Awaiting Pick</Badge>;
      case "PACKING":
        return <Badge variant="info" withDot>Packing</Badge>;
      case "READY_FOR_DISPATCH":
        return <Badge variant="success" withDot>Ready for Dispatch</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  const getCustomerTypeBadge = (type: PendingOrder["customerType"]) => {
    switch (type) {
      case "Wholesale Garage":
        return <Badge variant="info">Wholesale</Badge>;
      case "Fleet Account":
        return <Badge variant="neutral">Fleet</Badge>;
      case "Counter Retail":
        return <Badge variant="neutral">Counter</Badge>;
      case "E-Commerce":
        return <Badge variant="neutral">Online</Badge>;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-blue-600" />
            <CardTitle>Orders Awaiting Fulfilment</CardTitle>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Active counter and wholesale sales orders pending warehouse pick or dispatch.
          </p>
        </div>
        <Badge variant="neutral">
          {orders.length} in queue
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        {isLoading ? (
          <div className="space-y-2 py-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-slate-100 rounded animate-pulse" />
            ))}
          </div>
        ) : orders.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            title="Fulfilment queue is clear"
            description="All counter, wholesale, and marketplace orders have been picked and dispatched."
          />
        ) : (
          <div className="overflow-x-auto border border-slate-200 rounded-md">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-2.5 px-3">Order #</th>
                  <th className="py-2.5 px-3">Customer & Channel</th>
                  <th className="py-2.5 px-3">Vehicle / Scope</th>
                  <th className="py-2.5 px-3 text-right">Items & Total</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-3 align-top whitespace-nowrap">
                      <div className="font-mono font-bold text-slate-900">
                        {order.orderNumber}
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {order.placedAt}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 align-top">
                      <div className="font-medium text-slate-900">
                        {order.customerName}
                      </div>
                      <div className="mt-0.5">
                        {getCustomerTypeBadge(order.customerType)}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top text-slate-600 max-w-xs">
                      <div className="truncate" title={order.vehicleNote}>
                        {order.vehicleNote}
                      </div>
                      {order.priority === "URGENT" && (
                        <span className="text-[10px] text-red-600 font-semibold uppercase">
                          Priority Pick
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 align-top text-right whitespace-nowrap">
                      <div className="font-bold text-slate-900">
                        {formatCurrency(order.totalAmount)}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {order.itemsCount} line items
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="py-2.5 px-3 align-top text-right whitespace-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveOrder(order)}
                        className="h-7 text-xs border-slate-300 hover:bg-slate-100"
                      >
                        <ClipboardList className="w-3.5 h-3.5 mr-1 text-slate-600" />
                        Pick Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>

      {/* Order Pick Details Inspection Modal */}
      {activeOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40">
          <div className="bg-white rounded-md border border-slate-300 shadow-lg max-w-md w-full p-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-900">{activeOrder.orderNumber}</span>
                {getStatusBadge(activeOrder.status)}
              </div>
              <button
                type="button"
                onClick={() => setActiveOrder(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 space-y-2.5">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded space-y-1">
                <div className="text-slate-500 text-[11px]">Customer & Account</div>
                <div className="font-semibold text-slate-900 text-sm">{activeOrder.customerName}</div>
                <div className="text-slate-600">{activeOrder.vehicleNote}</div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block">Total Items</span>
                  <strong className="text-sm text-slate-900">{activeOrder.itemsCount} SKUs</strong>
                </div>
                <div className="p-2 border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block">Order Value</span>
                  <strong className="text-sm text-slate-900">{formatCurrency(activeOrder.totalAmount)}</strong>
                </div>
                <div className="p-2 border border-slate-200 rounded">
                  <span className="text-[10px] text-slate-400 block">Time Placed</span>
                  <strong className="text-xs text-slate-800">{activeOrder.placedAt}</strong>
                </div>
              </div>

              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-[11px] text-blue-900">
                <strong>Warehouse Pick Location:</strong> Items staged in Aisle B (Bins B-03, B-09) and Aisle A (Bin A-12).
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[11px] text-slate-400">Demo Inspection View</span>
              <Button variant="primary" size="sm" onClick={() => setActiveOrder(null)}>
                Close Pick Sheet
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
