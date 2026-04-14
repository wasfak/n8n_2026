"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SendForm() {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [target, setTarget] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const payload = { companyName, companyWebsite, target, notes };
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) setResult("Sent: " + JSON.stringify(data.data ?? data));
      else setResult("Error: " + (data?.error ?? res.statusText));
    } catch (err) {
      setResult(err as string);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <div>
        <label className="sr-only">Company name</label>
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company name"
          className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="sr-only">Company website</label>
        <input
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
          placeholder="Company website (https://...)"
          className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="sr-only">Target</label>
        <input
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Target"
          className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="sr-only">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm"
          rows={4}
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading} className="cursor-pointer">
          {loading ? "Sending..." : "Send"}
        </Button>
      </div>
      {result && <p className="mt-2 text-sm text-muted-foreground">{result}</p>}
    </form>
  );
}
