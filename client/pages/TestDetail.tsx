import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";

const testData = {
  "metodik-yondashuv": {
    title: "Metodik yondashuv",
    description: "Zamonaviy ta'lim metodlari va pedagogik yondashuvlar",
    questions: [
      {
        id: 1,
        question: "Pedagog o'quvchilarga ravon tilda, notiqlik qobiliyatini ishga solib, aniq faktlar asosida bilim beradi, ularning ko'nikma va malakalarini rivojlantiradi. U o'rganilayotgan mavzuning ifodalanayotgan voqeilikka, faktlarga to‘g‘ri kelishiga e'tibor qaratadi.Bunda unutqning asosiy xususiyatlaridan qay birini mohirona qo'llagan hisoblanadi?",
        options: [
          "Nutqring aniqligi va ta'sirchanligi",
          "Nutqning manitiqiyligi",
          "Nutqning tozaligi va ifodaliligi  ",
          "Nutqning go'zalligi "
        ],
        correct: 0
      },
      {
        id: 2,
        question: "Pedagogning o`z ustida ishlash bosqichlari nechta?",
        options: [
          "5ta",
          "6 ta",
          "3ta",
          "1ta"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "Blum taksonomiyasi nechta bosqichdan iborat?  ",
        options: [
          "6 ta",
          "5ta ",
          "4 ta ",
          "3 ta"
        ],
        correct: 0
      }
    ]
  },
  "psixologiya": {
    title: "Psixologiya",
    description: "Bolalar psixologiyasi va ta'limda psixologik omillar",
    questions: [
      {
        id: 1,
        question: "Bolalarda motivatsiyani oshirishning eng samarali usuli qaysi?",
        options: [
          "Doimiy tanqid qilish",
          "Muvaffaqiyatlarini e'tirof etish va rag'batlantirish",
          "Boshqa bolalar bilan taqqoslash",
          "Jazo berish"
        ],
        correct: 1
      },
      {
        id: 2,
        question: "Stressni kamaytirish uchun qanday usullar qo'llaniladi?",
        options: [
          "Ko'proq vazifa berish",
          "Nafas olish mashqlari va tinchlanish texnikasi",
          "Raqobatni kuchaytirish",
          "Tanaffuslarni qisqartirish"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "Bolalar psixologiyasida muhim omil nima?",
        options: [
          "Faqat intellektual rivojlanish",
          "Emotsional, ijtimoiy va intellektual rivojlanish",
          "Faqat fizik rivojlanish",
          "Faqat akademik yutuqlar"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "Mayl, havas, ichki qiziqish– bir shaxsning ikkinchi shaxsga, muayyan subyektlar guruhiga yoki qandaydir ijtimoiy hodisaga nisbatan ijobiy hissiy munosabati.   Qaysi tushuncha haqida gap bormoqda?",
        options: [
          "Simpatiy",
          "Antipatiya",
          "Empatiya",
          "Apatia"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "Hamdardlik, qayg'udosh bo'lish – bir shaxsning u tomonidan ikkinchi shaxsning fikrlari, xohish-istaklari, qiziqishlari, intilishlarining his etilishi, tushunilishi, qabul qilinishini ifodalovchi munosabati  ",
        options: [
          "Simpatiy",
          "Antipatiya",
          "Empatiya",
          "Apatia"
        ],
        correct: 2
      },
      {
        id: 6,
        question: "Yoqtirmaslik, xush ko‘rmaslik– bir shaxsning ikkinchi shaxsga, muayyan   subyektlar  guruhiga yoki qandaydir ijtimoiy hodisaga nisbatan salbiy hissiy munosabati ifodalovchi tushuncha ",
        options: [
          "Simpatiy",
          "Antipatiya",
          "Empatiya",
          "Apatia"
        ],
        correct: 1
      },
      {
        id: 7,
        question: "O’qituvchi dars davomida o’quvchilarga o’tilgan mavzular yuzasidan savollar berdi. So’ng o’quvchilar olgan bilimlarni qo’llash maqsadida kichik guruhlarda amaliy topshiriq bajardilar. Dars yakunida o’rganilgan mavzu yuzasidan o’z xulosalarini taqdimot qildilar. Shunda o’qituvchi qaysi dars turidan foydalandi? ",
        options: [
          "Yangi bilimlarni bayon qilish darsi   ",
          "O’rganilganlarni takrorlash va mustahkamlash darsi    ",
          "Aralash dars",
          "O‘quvchilarni bilim, ko‘nikma va malakalarini nazorat qilish darsi  "
        ],
        correct: 1
      },
      {
        id: 8,
        question: "Muammoni boshqa hodisalar bilan o’zaro aloqadorlikda idrok etish qobiliyati bu …..    ",
        options: [
          "Tezlik",
          "Aqliy teranlik",
          "Mantiqiy fikrlash",
          "Ijodkorlik"
        ],
        correct: 1
      },
      {
        id: 9,
        question: "Muammolarni hal qilish tezligi, kasbgab oid g’oyalarni ishlab chiqarish qobiliyati bu…",
        options: [
          "Tezlik",
          "Aqliy teranlik",
          "Mantiqiy fikrlash",
          "Ijodkorlik"
        ],
        correct: 0
      },
      {
        id: 10,
        question: "Yangi ilmiy g’oyalarni yaratishga bo’lgan intilish bu ….   ",
        options: [
          "Tezlik",
          "Aqliy teranlik",
          "Mantiqiy fikrlash",
          "Originallik"
        ],
        correct: 3
      },
    ]
  },
  "pedagogik-mahorat": {
    title: "Pedagogik mahorat",
    description: "Professional pedagogik ko'nikmalar va ularni rivojlantirish",
    questions: [
      {
        id: 1,
        question: "Samarali pedagog qanday xususiyatlarga ega bo'lishi kerak?",
        options: [
          "Faqat fan bo'yicha bilim",
          "Professional bilim, kommunikativ ko'nikmalar va empati",
          "Faqat tajriba",
          "Faqat nazariy bilim"
        ],
        correct: 1
      },
      {
        id: 2,
        question: "Dars rejasini tuzishda eng muhim jihat nima?",
        options: [
          "Vaqtni to'g'ri taqsimlash",
          "Maqsad, vazifa va natijalarni aniq belgilash",
          "Ko'proq materiallar tayyorlash",
          "Faqat darslik materiallariga tayanish"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "O'quvchilar bilan muloqotda qanday yondashuv to'g'ri?",
        options: [
          "Avtoritar yondashuv",
          "Hamkorlikka asoslangan yondashuv",
          "Befarq munosabat",
          "Haddan tashqari liberal yondashuv"
        ],
        correct: 1
      }
    ]
  }
};

export default function TestDetail() {
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  const testInfo = testData[category as keyof typeof testData];

  useEffect(() => {
    if (!testInfo || isCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testInfo, isCompleted]);

  if (!testInfo) {
    return (
      <div className="p-4 md:p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Test topilmadi</h1>
          <Button asChild>
            <Link to="/testlar">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Testlarga qaytish
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < testInfo.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleCompleteTest = () => {
    setIsCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    testInfo.questions.forEach((question) => {
      if (answers[question.id] === question.correct) {
        correct++;
      }
    });
    return { correct, total: testInfo.questions.length };
  };

  if (isCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score.correct / score.total) * 100);
    
    return (
      <div className="p-4 md:p-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              percentage >= 70 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {percentage >= 70 ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600" />
              )}
            </div>
            <CardTitle className="text-2xl">Test yakunlandi!</CardTitle>
            <CardDescription>Sizning natijangiz</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-4xl font-bold text-blue-600">
              {score.correct}/{score.total}
            </div>
            <div className="text-xl text-gray-700">
              {percentage}% to'g'ri javob
            </div>
            <div className={`text-lg font-medium ${
              percentage >= 70 ? 'text-green-600' : 'text-red-600'
            }`}>
              {percentage >= 70 ? 'A\'lo natija!' : 'Takrorlash tavsiya etiladi'}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/testlar">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Testlarga qaytish
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Qayta boshlash
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = testInfo.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / testInfo.questions.length) * 100;

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/testlar">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Testlarga qaytish
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{testInfo.title}</h1>
            <p className="text-gray-600">{testInfo.description}</p>
          </div>
          <div className="flex items-center gap-2 text-lg font-medium">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className={timeLeft < 300 ? 'text-red-600' : 'text-blue-600'}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Savol {currentQuestion + 1} / {testInfo.questions.length}</span>
          <span>{Math.round(progress)}% tugallandi</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">
            {currentQ.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={answers[currentQ.id]?.toString()} 
            onValueChange={(value) => handleAnswerChange(currentQ.id, parseInt(value))}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
        >
          Oldingi
        </Button>
        
        {currentQuestion === testInfo.questions.length - 1 ? (
          <Button 
            onClick={handleCompleteTest}
            disabled={answers[currentQ.id] === undefined}
            className="bg-green-600 hover:bg-green-700"
          >
            Testni yakunlash
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            disabled={answers[currentQ.id] === undefined}
          >
            Keyingi
          </Button>
        )}
      </div>
    </div>
  );
}
