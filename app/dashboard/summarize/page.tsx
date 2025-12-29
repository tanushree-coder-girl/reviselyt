import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Info } from "lucide-react";

export default function SummarizePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Exam Mode Summary
        </h1>
        <p className="text-gray-600 mt-1">
          Quick, structured revision for exams & interviews
        </p>
      </div>

      <Card className="shadow-lg border border-gray-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-semibold">
            What you’ll revise
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-4">
            {[
              "Main concept explained in simple language",
              "Important definitions & terminology",
              "Key points for fast revision",
              "Likely exam & interview questions",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex items-start gap-3 rounded-xl bg-purple-50 border border-purple-200 p-5">
        <Info className="h-5 w-5 text-purple-700 mt-0.5 shrink-0" />
        <p className="text-sm text-purple-800">
          Use Exam Mode just before tests or interviews for fast, focused
          revision.
        </p>
      </div>
    </div>
  );
}
