"use client";

import * as React from "react";
import { PartItem } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatCurrency } from "@/lib/utils";
import {
  Search,
  AlertTriangle,
  PackagePlus,
  X,
  CheckCircle2,
  FilterX,
} from "lucide-react";

export interface LowStockTableProps {
  parts: PartItem[];
  isLoading?: boolean;
}

export function LowStockTable({ parts, isLoading }: LowStockTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("ALL");
  const [selectedStatus, setSelectedStatus] = React.useState("ALL");

  // Purchase Order Draft Modal state
  const [draftingPart, setDraftingPart] = React.useState<PartItem | null>(null);
  const [draftSuccess, setDraftSuccess] = React.useState<string | null>(null);

  // Filter parts
  const filteredParts = React.useMemo(() => {
    return parts.filter((part) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        part.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.oemNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.vehicleFitment.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "ALL" || part.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "ALL" ||
        (selectedStatus === "OUT" && part.status === "OUT_OF_STOCK") ||
        (selectedStatus === "LOW" && part.status === "LOW_STOCK");

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [parts, searchTerm, selectedCategory, selectedStatus]);

  const categories = React.useMemo(() => {
    const set = new Set(parts.map((p) => p.category));
    return Array.from(set);
  }, [parts]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("ALL");
    setSelectedStatus("ALL");
  };

  const handleCreateDraftPO = (part: PartItem) => {
    setDraftingPart(part);
    setDraftSuccess(null);
  };

  const handleConfirmDraftPO = () => {
    if (!draftingPart) return;
    setDraftSuccess(`PO Draft #PO-2026-${Math.floor(1000 + Math.random() * 9000)} generated for ${draftingPart.supplier}`);
    setTimeout(() => {
      setDraftingPart(null);
      setDraftSuccess(null);
    }, 2000);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <CardTitle>Low Stock & Out of Stock Action List</CardTitle>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Auto-parts requiring immediate replenishment or purchase order creation.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="neutral">
            Showing {filteredParts.length} of {parts.length} flagged items
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          <div className="sm:col-span-5">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by SKU, OEM #, part name, or vehicle..."
              icon={<Search className="w-3.5 h-3.5" />}
              aria-label="Filter low stock parts"
            />
          </div>

          <div className="sm:col-span-3">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by automotive category"
            >
              <option value="ALL">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
          </div>

          <div className="sm:col-span-2">
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              aria-label="Filter by stock status"
            >
              <option value="ALL">All Levels</option>
              <option value="OUT">Out of Stock (0)</option>
              <option value="LOW">Low Stock</option>
            </Select>
          </div>

          <div className="sm:col-span-2 flex items-center">
            {(searchTerm || selectedCategory !== "ALL" || selectedStatus !== "ALL") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetFilters}
                className="w-full text-xs text-slate-600 hover:text-slate-900"
              >
                <X className="w-3.5 h-3.5 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="space-y-2 py-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-slate-100 rounded animate-pulse" />
            ))}
          </div>
        ) : filteredParts.length === 0 ? (
          <EmptyState
            icon={<FilterX className="w-5 h-5 text-slate-400" />}
            title="No parts found matching filter criteria"
            description="Adjust your search term, OEM number, or category filters to view automotive inventory."
            action={
              <Button variant="outline" size="sm" onClick={handleResetFilters}>
                Reset Filter Settings
              </Button>
            }
          />
        ) : (
          /* Parts Table */
          <div className="overflow-x-auto border border-slate-200 rounded-md">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-2.5 px-3">Part # / OEM</th>
                  <th className="py-2.5 px-3">Description & Vehicle Fitment</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Bin Location</th>
                  <th className="py-2.5 px-3 text-right">On Hand / Min</th>
                  <th className="py-2.5 px-3 text-right">Unit Cost</th>
                  <th className="py-2.5 px-3">Stock Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredParts.map((part) => (
                  <tr key={part.id} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-3 align-top whitespace-nowrap">
                      <div className="font-mono font-bold text-slate-900">
                        {part.sku}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500">
                        OEM: {part.oemNumber}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top max-w-xs">
                      <div className="font-medium text-slate-900 leading-tight">
                        {part.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 truncate" title={part.vehicleFitment}>
                        {part.vehicleFitment}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top text-slate-600 whitespace-nowrap">
                      {part.category}
                    </td>
                    <td className="py-2.5 px-3 align-top font-mono text-slate-800 whitespace-nowrap">
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 text-[11px]">
                        {part.binLocation}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 align-top text-right whitespace-nowrap">
                      <span className={part.onHand === 0 ? "font-bold text-red-600" : "font-semibold text-amber-700"}>
                        {part.onHand}
                      </span>
                      <span className="text-slate-400"> / {part.minThreshold}</span>
                    </td>
                    <td className="py-2.5 px-3 align-top text-right font-medium text-slate-800 whitespace-nowrap">
                      {formatCurrency(part.unitCost)}
                    </td>
                    <td className="py-2.5 px-3 align-top whitespace-nowrap">
                      {part.status === "OUT_OF_STOCK" ? (
                        <Badge variant="danger" withDot>
                          Out of Stock
                        </Badge>
                      ) : (
                        <Badge variant="warning" withDot>
                          Low Stock
                        </Badge>
                      )}
                    </td>
                    <td className="py-2.5 px-3 align-top text-right whitespace-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCreateDraftPO(part)}
                        className="h-7 text-xs border-slate-300 hover:bg-slate-100"
                      >
                        <PackagePlus className="w-3.5 h-3.5 mr-1 text-blue-600" />
                        Draft PO
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>

      {/* PO Draft Confirmation Modal */}
      {draftingPart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40">
          <div className="bg-white rounded-md border border-slate-300 shadow-lg max-w-sm w-full p-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="font-semibold text-slate-900">Create Supplier PO Draft</h4>
              <button
                type="button"
                onClick={() => setDraftingPart(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {draftSuccess ? (
              <div className="py-4 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="font-semibold text-emerald-900">{draftSuccess}</div>
                <p className="text-[11px] text-slate-500">
                  Added to Orders &gt; Draft PO queue for authorization.
                </p>
              </div>
            ) : (
              <div className="py-3 space-y-2.5">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded space-y-1">
                  <div className="font-mono font-bold text-slate-900">
                    {draftingPart.sku} ({draftingPart.oemNumber})
                  </div>
                  <div className="text-slate-700">{draftingPart.name}</div>
                  <div className="text-[11px] text-slate-500">
                    Supplier: <strong>{draftingPart.supplier}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div className="p-2 border border-slate-200 rounded bg-white">
                    <span className="text-[10px] text-slate-400 block">Suggested Qty</span>
                    <strong className="text-sm text-slate-900">
                      {draftingPart.reorderPoint - draftingPart.onHand} units
                    </strong>
                  </div>
                  <div className="p-2 border border-slate-200 rounded bg-white">
                    <span className="text-[10px] text-slate-400 block">Est. Cost</span>
                    <strong className="text-sm text-slate-900">
                      {formatCurrency(
                        (draftingPart.reorderPoint - draftingPart.onHand) * draftingPart.unitCost
                      )}
                    </strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">
                  This simulates generating a purchase order draft. No live supplier API or payment is contacted in this demo.
                </p>

                <div className="pt-2 border-t border-slate-200 flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setDraftingPart(null)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleConfirmDraftPO}>
                    Confirm Draft
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
