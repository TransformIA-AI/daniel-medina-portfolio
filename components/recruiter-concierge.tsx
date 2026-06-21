"use client";

import { useMemo, useState } from "react";
import { Bot, CalendarClock, Download, Send, ShieldCheck, UserRound } from "lucide-react";

import type { PortfolioDictionary } from "@/content/portfolio";

type Answer = {
  content: string;
  confidence: "high" | "medium" | "low";
  fitScore: number;
  cvHref: string;
  cvLabel: string;
  evidence: readonly string[];
};

type Message = {
  role: "user" | "assistant";
  content: string;
  answer?: Answer;
};

type RecruiterContent = PortfolioDictionary["recruiter"];

function selectAnswer(question: string, answers: RecruiterContent["answers"]): Answer {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("team") ||
    normalized.includes("people") ||
    normalized.includes("equipo") ||
    normalized.includes("personas") ||
    normalized.includes("operations") ||
    normalized.includes("operaciones") ||
    normalized.includes("p&l")
  ) {
    return answers.operations;
  }

  if (
    normalized.includes("public") ||
    normalized.includes("públic") ||
    normalized.includes("sector") ||
    normalized.includes("itsm") ||
    normalized.includes("ayesa")
  ) {
    return answers.publicSector;
  }

  if (
    normalized.includes("technical") ||
    normalized.includes("técnic") ||
    normalized.includes("tecnic") ||
    normalized.includes("cs50") ||
    normalized.includes("python") ||
    normalized.includes("foundation") ||
    normalized.includes("base")
  ) {
    return answers.technical;
  }

  if (
    normalized.includes("human") ||
    normalized.includes("hitl") ||
    normalized.includes("loop") ||
    normalized.includes("governance") ||
    normalized.includes("gobernanza")
  ) {
    return answers.hitl;
  }

  if (
    normalized.includes("role") ||
    normalized.includes("rol") ||
    normalized.includes("fit") ||
    normalized.includes("encaja") ||
    normalized.includes("encaje") ||
    normalized.includes("ai") ||
    normalized.includes("ia") ||
    normalized.includes("transformation") ||
    normalized.includes("transformación") ||
    normalized.includes("transformacion")
  ) {
    return answers.ai;
  }

  return answers.fallback;
}

export function RecruiterConcierge({ content }: { content: RecruiterContent }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: content.initialMessage
    }
  ]);
  const [input, setInput] = useState("");
  const [pendingApproval, setPendingApproval] = useState(false);

  const latestAnswer = useMemo(
    () => [...messages].reverse().find((message) => message.answer)?.answer,
    [messages]
  );

  function submit(question: string) {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    const answer = selectAnswer(trimmed, content.answers);
    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: answer.content, answer }
    ]);
    setInput("");
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-card">
        <div className="flex items-center justify-between gap-4 border-b border-line bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal">
              <Bot aria-hidden="true" size={19} />
            </div>
            <div>
              <p className="text-sm font-bold">{content.headerTitle}</p>
              <p className="text-xs text-white/55">{content.headerSubtitle}</p>
            </div>
          </div>
          <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">{content.statusChip}</span>
        </div>

        <div className="border-b border-teal/20 bg-mint px-5 py-3 text-sm leading-6 text-teal">
          <span className="inline-flex items-center gap-2 font-semibold">
            <ShieldCheck aria-hidden="true" size={15} />
            {content.boundaryLabel}
          </span>{" "}
          {content.boundaryText}
        </div>

        <div className="flex max-h-[30rem] min-h-80 flex-col gap-4 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <div className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`} key={`${message.role}-${index}`}>
              <div
                className={[
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
                  message.role === "user" ? "bg-ink text-white" : "bg-mint text-teal"
                ].join(" ")}
              >
                {message.role === "user" ? <UserRound aria-hidden="true" size={17} /> : <Bot aria-hidden="true" size={17} />}
              </div>
              <div className={`max-w-[82%] ${message.role === "user" ? "text-right" : ""}`}>
                <div
                  className={[
                    "rounded-lg px-4 py-3 text-sm leading-6",
                    message.role === "user" ? "bg-ink text-white" : "bg-mist text-ink"
                  ].join(" ")}
                >
                  {message.content}
                </div>
                {message.answer ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.answer.evidence.map((item) => (
                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate ring-1 ring-line" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-line p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {content.suggestedQuestions.slice(0, 4).map((question) => (
              <button
                className="focus-ring rounded-md border border-line bg-paper px-3 py-2 text-left text-xs font-medium text-slate transition hover:border-teal hover:text-teal"
                key={question}
                onClick={() => submit(question)}
                type="button"
              >
                {question}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              submit(input);
            }}
          >
            <input
              className="focus-ring min-h-11 flex-1 rounded-md border border-line bg-paper px-3 text-sm text-ink"
              onChange={(event) => setInput(event.target.value)}
              placeholder={content.inputPlaceholder}
              value={input}
            />
            <button
              className="focus-ring inline-flex min-h-11 w-11 items-center justify-center rounded-md bg-ink text-white transition hover:bg-carbon disabled:cursor-not-allowed disabled:bg-line"
              disabled={!input.trim()}
              type="submit"
            >
              <Send aria-hidden="true" size={17} />
              <span className="sr-only">{content.sendLabel}</span>
            </button>
          </form>
        </div>
      </div>

      <aside className="grid gap-5">
        <div className="rounded-lg border border-line bg-white p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{content.roleFit}</p>
          <p className="mt-4 text-5xl font-black tracking-tight text-teal">{latestAnswer?.fitScore ?? 0}</p>
          <p className="mt-1 text-sm font-semibold text-ink">{content.fitScoreSuffix}</p>
          <p className="mt-4 text-sm leading-6 text-slate">
            {content.confidence}: <span className="font-semibold text-ink">{latestAnswer?.confidence ?? content.pending}</span>
          </p>
        </div>

        <div className="rounded-lg border border-line bg-white p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{content.recommendedCv}</p>
          <p className="mt-4 text-lg font-bold text-ink">{latestAnswer?.cvLabel ?? content.askFirst}</p>
          {latestAnswer ? (
            <a
              className="focus-ring mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-carbon"
              download
              href={latestAnswer.cvHref}
            >
              <Download aria-hidden="true" size={15} />
              {content.download}
            </a>
          ) : null}
        </div>

        <div className="rounded-lg border border-line bg-white p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{content.approvalStatus}</p>
          <button
            className="focus-ring mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-teal px-4 text-sm font-semibold text-teal transition hover:bg-mint"
            onClick={() => setPendingApproval(true)}
            type="button"
          >
            <CalendarClock aria-hidden="true" size={15} />
            {content.requestInterview}
          </button>
          <p className="mt-4 text-sm leading-6 text-slate">
            {pendingApproval ? content.pendingApproval : content.approvalDefault}
          </p>
        </div>
      </aside>
    </div>
  );
}
