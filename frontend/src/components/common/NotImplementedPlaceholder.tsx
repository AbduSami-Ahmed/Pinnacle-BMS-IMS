import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { 
  ArrowLeft, 
  Construction, 
  CheckCircle2, 
  Database, 
  Server, 
  ShieldAlert 
} from "lucide-react";

export interface NotImplementedPlaceholderProps {
  moduleName: string;
  moduleCategory?: string;
  description: string;
  plannedCapabilities: string[];
  plannedEndpoints?: string[];
  schemaFields?: string[];
}

export function NotImplementedPlaceholder({
  moduleName,
  moduleCategory = "Business Management System",
  description,
  plannedCapabilities,
  plannedEndpoints = [],
  schemaFields = [],
}: NotImplementedPlaceholderProps) {
  return (
    <div className="space-y-6">
      {/* Notice Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-amber-900">
              Demo Status: Module in Active Development
            </h3>
            <Badge variant="warning" withDot>
              Phase 2 Target
            </Badge>
          </div>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">
            The shell for <strong>{moduleName}</strong> is established. Live data operations will be connected to the NestJS backend and PostgreSQL database in the next development cycle.
          </p>
        </div>
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white border-amber-300 text-amber-900 hover:bg-amber-100">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Module Overview Card */}
      <Card>
        <CardHeader>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              {moduleCategory}
            </div>
            <CardTitle className="text-lg text-slate-900">
              {moduleName} Architecture & Roadmap
            </CardTitle>
            <CardDescription className="mt-1 text-slate-600">
              {description}
            </CardDescription>
          </div>
          <Badge variant="info">
            Specs Confirmed
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Planned Capabilities */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Scheduled Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {plannedCapabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded border border-slate-200 bg-slate-50 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            {plannedEndpoints.length > 0 && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
                  <Server className="w-3.5 h-3.5 text-blue-600" />
                  <span>NestJS REST API Endpoints</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-slate-600">
                  {plannedEndpoints.map((ep, idx) => (
                    <div key={idx} className="bg-white px-2 py-1 rounded border border-slate-200">
                      {ep}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {schemaFields.length > 0 && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  <span>Target PostgreSQL / Prisma Entity</span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {schemaFields.map((fld, idx) => (
                    <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                      {fld}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Disabled Actions / Preview Container */}
      <div className="p-6 border border-dashed border-slate-300 rounded-md bg-white text-center">
        <Construction className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h4 className="text-sm font-semibold text-slate-800">
          Interactive controls disabled during demo
        </h4>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
          Data entry forms and table mutations for {moduleName} are disabled to preserve demo consistency. To explore active workflow components, please visit the Dashboard.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="sm">
              Go to Dashboard
            </Button>
          </Link>
          <Button variant="outline" size="sm" disabled>
            Create New Record (Disabled)
          </Button>
        </div>
      </div>
    </div>
  );
}
