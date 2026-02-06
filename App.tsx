import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { QUESTIONS, ANIMAL_DATA } from "./constants";
import { AnimalKey, AnimalInfo } from "./types";
import html2canvas from "html2canvas";

type AppState = "START" | "PROGRESS" | "RESULT" | "VIEW_OTHER";
type MatchContext = "BEST" | "WORST" | null;

const App: React.FC = () => {
  const [state, setState] = useState<AppState>("START");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [lastChoice, setLastChoice] = useState<number | null>(null);
  const [viewingAnimal, setViewingAnimal] = useState<AnimalKey | null>(null);
  const [viewingContext, setViewingContext] = useState<MatchContext>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resultParam = params.get("result") as AnimalKey;
    if (resultParam && ANIMAL_DATA[resultParam]) {
      setViewingAnimal(resultParam);
      setState("RESULT");
    }
  }, []);

  const startTest = () => {
    try {
      window.history.replaceState({}, "", window.location.pathname);
    } catch (e) {}
    setState("PROGRESS");
    setCurrentStep(0);
    setAnswers([]);
    setLastChoice(null);
    setViewingAnimal(null);
    setViewingContext(null);
  };

  const resetToStart = () => {
    try {
      window.history.replaceState({}, "", window.location.pathname);
    } catch (e) {}
    setState("START");
    setCurrentStep(0);
    setAnswers([]);
    setLastChoice(null);
    setViewingAnimal(null);
    setViewingContext(null);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setAnswers((prev) => prev.slice(0, -1));
      setCurrentStep((prev) => prev - 1);
      setLastChoice(null);
    }
  };

  const handleChoice = (choiceIndex: number) => {
    setLastChoice(choiceIndex);
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setAnswers((prev) => [...prev, choiceIndex]);
        setCurrentStep((prev) => prev + 1);
        setLastChoice(null);
      }, 150);
    }
  };

  const showResult = () => {
    if (lastChoice !== null) {
      setAnswers((prev) => [...prev, lastChoice]);
      setState("RESULT");
    }
  };

  const calculateResult = useCallback((): AnimalInfo => {
    if (viewingAnimal && answers.length === 0)
      return ANIMAL_DATA[viewingAnimal];
    if (answers.length < QUESTIONS.length) return ANIMAL_DATA["RAT"];
    const scoreMap: Record<string, number> = {};
    Object.keys(ANIMAL_DATA).forEach((a) => (scoreMap[a] = 0));
    answers.forEach((choiceIdx, qIdx) => {
      const selectedChoice = QUESTIONS[qIdx]?.choices[choiceIdx];
      if (selectedChoice) {
        Object.entries(selectedChoice.scores).forEach(([animal, score]) => {
          scoreMap[animal] = (scoreMap[animal] || 0) + score;
        });
      }
    });
    const winner = (Object.keys(ANIMAL_DATA) as AnimalKey[]).reduce((a, b) =>
      scoreMap[a] >= scoreMap[b] ? a : b
    );
    return ANIMAL_DATA[winner];
  }, [answers, viewingAnimal]);

  const resultAnimal = useMemo(() => {
    if (state === "RESULT") return calculateResult();
    if (state === "VIEW_OTHER" && viewingAnimal)
      return ANIMAL_DATA[viewingAnimal];
    return null;
  }, [state, calculateResult, viewingAnimal]);

  const handleViewAnimal = (name: string, context: MatchContext) => {
    const key = (Object.keys(ANIMAL_DATA) as AnimalKey[]).find(
      (k) => ANIMAL_DATA[k].name === name
    );
    if (key) {
      setViewingAnimal(key);
      setViewingContext(context);
      setState("VIEW_OTHER");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#fdfbf7]">
      <div
        className={`max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col min-h-[680px] transition-all duration-300 ${
          state === "PROGRESS" ? "overflow-hidden" : "overflow-visible"
        }`}
      >
        {state === "START" && <StartScreen onStart={startTest} />}
        {state === "PROGRESS" && (
          <QuestionScreen
            currentStep={currentStep}
            totalSteps={QUESTIONS.length}
            question={QUESTIONS[currentStep]}
            onChoice={handleChoice}
            onBack={handleBack}
            selectedChoice={lastChoice}
            onShowResult={showResult}
          />
        )}
        {(state === "RESULT" || state === "VIEW_OTHER") && resultAnimal && (
          <ResultScreen
            animal={resultAnimal}
            onRestart={resetToStart}
            onViewAnimal={handleViewAnimal}
            isBrowsing={state === "VIEW_OTHER"}
            viewingContext={viewingContext}
            onGoBackToResult={() => {
              setState("RESULT");
              setViewingContext(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="p-10 text-center fade-in flex flex-col items-center justify-center flex-grow">
    <div className="mb-8 relative">
      <div className="absolute -inset-4 bg-orange-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="relative p-6 bg-white rounded-full shadow-inner border-2 border-orange-50">
        <span className="text-7xl">🏮</span>
      </div>
    </div>
    <h1 className="text-2xl font-bold mb-1 text-slate-800 leading-tight">
      내 성격과 가장 가까운
      <br />
      띠는 뭘까?
    </h1>
    <p className="text-orange-500 font-bold mb-8 text-sm tracking-widest uppercase">
      총 18문항
    </p>

    <div className="bg-slate-50 p-6 rounded-2xl mb-10 text-sm leading-relaxed text-slate-600 text-left border border-slate-100">
      <p className="mb-3 font-bold text-slate-800">
        아래 질문에는 정답이 없습니다.
      </p>
      <p>
        실제 상황에서 내가 더 자주 보이는 행동을 떠올리며 가장 가까운 선택지를
        골라주세요.
      </p>
    </div>

    <button
      onClick={onStart}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-200 text-lg"
    >
      테스트 시작하기
    </button>
  </div>
);

const QuestionScreen: React.FC<{
  currentStep: number;
  totalSteps: number;
  question: (typeof QUESTIONS)[0];
  onChoice: (idx: number) => void;
  onBack: () => void;
  selectedChoice: number | null;
  onShowResult: () => void;
}> = ({
  currentStep,
  totalSteps,
  question,
  onChoice,
  onBack,
  selectedChoice,
  onShowResult,
}) => {
  if (!question) return null;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div className="p-8 fade-in flex flex-col flex-grow">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={onBack}
            className={`text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors ${
              currentStep === 0 ? "invisible" : ""
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-xs font-bold">이전</span>
          </button>
          <div className="text-right">
            <span className="text-xs font-bold text-orange-500 tracking-wider">
              Q{currentStep + 1}
            </span>
            <span className="text-xs font-medium text-slate-300 ml-1">
              / {totalSteps}
            </span>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-orange-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-8 text-slate-800 leading-tight min-h-[3rem]">
          {question.question}
        </h2>
        <div className="space-y-3">
          {question.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => onChoice(idx)}
              className={`w-full text-left p-5 border-2 rounded-2xl transition-all group active:scale-[0.98] ${
                selectedChoice === idx
                  ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100 shadow-sm"
                  : "border-slate-100 hover:border-orange-200 hover:bg-slate-50"
              }`}
            >
              <span
                className={`text-sm font-semibold leading-relaxed ${
                  selectedChoice === idx ? "text-orange-700" : "text-slate-700"
                }`}
              >
                {choice.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      {currentStep === totalSteps - 1 && selectedChoice !== null && (
        <button
          onClick={onShowResult}
          className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all animate-bounce shadow-lg shadow-orange-200 text-lg"
        >
          결과 보기
        </button>
      )}
    </div>
  );
};

const AdPlaceholder: React.FC = () => {
  return (
    <div data-html2canvas-ignore="true" className="my-8 px-2">
      <a
        href="https://link.coupang.com/a/dHwZv9"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all hover:border-[#00b01b] group shadow-sm"
      >
        <div className="flex items-center p-3 gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop"
              alt="Rocket Fresh"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[8px] font-bold text-white bg-[#00b01b] px-1.5 py-0.5 rounded leading-none">
                로켓프레시
              </span>
              <span className="text-[8px] font-bold text-slate-300">AD</span>
            </div>
            <h3 className="text-slate-800 text-xs font-bold truncate leading-tight mb-0.5 group-hover:text-[#00b01b]">
              내일 아침 도착! 신선함 그대로
            </h3>
            <p className="text-slate-500 text-[10px] leading-tight mb-1 truncate">
              무료배송 혜택과 최저가 혜택을 확인하세요.
            </p>
            <div className="text-[10px] font-bold text-[#00b01b] flex items-center gap-1">
              장보러 가기{" "}
              <svg
                className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 py-1 px-3 text-[9px] text-slate-400 text-center border-t border-slate-50 leading-tight">
          "이 포스팅은 쿠팡 파트너스 활동의 일환으로 일정액의 수수료를
          제공받습니다."
        </div>
      </a>
    </div>
  );
};

const ResultScreen: React.FC<{
  animal: AnimalInfo;
  onRestart: () => void;
  onViewAnimal: (name: string, context: MatchContext) => void;
  isBrowsing: boolean;
  viewingContext: MatchContext;
  onGoBackToResult: () => void;
}> = ({
  animal,
  onRestart,
  onViewAnimal,
  isBrowsing,
  viewingContext,
  onGoBackToResult,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  const saveAsImage = async () => {
    if (!cardRef.current) return;
    setIsSaving(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#fdfbf7",
        useCORS: true,
        logging: false,
        ignoreElements: (el) => el.hasAttribute("data-html2canvas-ignore"),
      });
      const link = document.createElement("a");
      link.download = `zodiac_result_${animal.name}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      alert("이미지 저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  const copyToClipboard = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?result=${animal.key}`;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() =>
          alert("결과 링크가 복사되었습니다. 친구들에게 공유해보세요!")
        )
        .catch(() => alert("복사에 실패했습니다."));
    } else {
      const ta = document.createElement("textarea");
      ta.value = shareUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("나의 결과 전용 링크가 복사되었습니다!");
    }
  };

  const bgColor = isBrowsing
    ? viewingContext === "BEST"
      ? "bg-blue-50/40"
      : "bg-red-50/40"
    : "bg-[#fdfbf7]";

  return (
    <div
      className={`fade-in ${bgColor} flex flex-col h-full rounded-3xl transition-colors duration-500`}
    >
      <div
        className={`p-4 flex items-center justify-between sticky top-0 ${bgColor} backdrop-blur-sm z-20 rounded-t-3xl`}
      >
        {isBrowsing ? (
          <button
            onClick={onGoBackToResult}
            className="text-slate-400 hover:text-slate-600 flex items-center gap-1 font-bold text-xs"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            내 결과로 돌아가기
          </button>
        ) : (
          <div className="h-4"></div>
        )}
      </div>
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        <div ref={cardRef} className="p-6 pt-2 pb-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">
              {isBrowsing ? "" : "당신의 띠는"}{" "}
              <span className="text-orange-500">[{animal.name}]</span>
            </h1>
          </div>
          <div className="relative mb-10 flex justify-center">
            <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-orange-100 relative z-10">
              <span className="text-7xl">{animal.symbol}</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { l: "음양", v: animal.yinYang },
              { l: "오행", v: animal.element },
              { l: "계절", v: animal.season },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-3 rounded-2xl shadow-sm text-center border border-slate-100"
              >
                <div className="text-[10px] text-slate-400 font-bold mb-1">
                  {item.l}
                </div>
                <div className="text-sm font-bold text-slate-700">{item.v}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8">
            <p className="text-slate-700 text-sm leading-relaxed mb-8 font-medium italic">
              {animal.description}
            </p>
            <div className="space-y-4 mb-8">
              {animal.traits.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 leading-snug font-semibold">
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative pt-6 border-t border-slate-50 italic text-slate-500 text-sm text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                <span className="text-orange-200">✨</span>
              </div>
              "{animal.worryMessage}"
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-blue-500 tracking-widest uppercase ml-1">
                잘 맞는 띠
              </div>
              <div className="flex flex-col gap-2">
                {animal.bestMatches.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => onViewAnimal(m, "BEST")}
                    className="text-sm font-bold text-slate-700 bg-white px-4 py-3 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 transition-all text-left flex justify-between items-center group"
                  >
                    {m}
                    <svg
                      className="w-3 h-3 text-blue-300 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-red-400 tracking-widest uppercase ml-1">
                안 맞는 띠
              </div>
              <div className="flex flex-col gap-2">
                {animal.worstMatches.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => onViewAnimal(m, "WORST")}
                    className="text-sm font-bold text-slate-700 bg-white px-4 py-3 rounded-2xl border border-red-100 shadow-sm hover:border-red-400 transition-all text-left flex justify-between items-center group"
                  >
                    {m}
                    <svg
                      className="w-3 h-3 text-red-200 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <AdPlaceholder />
        </div>
      </div>
      <div className="p-6 bg-white border-t border-slate-50 space-y-4 rounded-b-3xl">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={saveAsImage}
            disabled={isSaving}
            className="flex-1 bg-white border border-slate-100 hover:border-orange-200 text-slate-800 font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-sm"
          >
            {isSaving ? (
              <span className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            )}
            <span className="text-sm font-bold">저장</span>
          </button>
          <button
            onClick={copyToClipboard}
            className="flex-1 bg-white border border-slate-100 hover:border-orange-200 text-slate-800 font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-sm"
          >
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="text-sm font-bold">공유하기</span>
          </button>
        </div>
        <button
          onClick={onRestart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-100 text-lg"
        >
          테스트 다시하기
        </button>
      </div>
    </div>
  );
};

export default App;
