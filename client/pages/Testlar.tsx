import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Award, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testCategories = [
  {
    id: "metodik-yondashuv",
    title: "Metodik yondashuv",
    description: "Zamonaviy ta'lim metodlari va pedagogik yondashuvlar bo'yicha test",
    icon: BookOpen,
    color: "blue",
    questionsCount: 10,
    duration: "30 daqiqa",
    difficulty: "O'rta",
    participants: 234
  },
  {
    id: "psixologiya",
    title: "Psixologiya",
    description: "Bolalar psixologiyasi va ta'limda psixologik omillar",
    icon: Brain,
    color: "green",
    questionsCount: 20,
    duration: "25 daqiqa",
    difficulty: "Qiyin",
    participants: 189
  },
  {
    id: "pedagogik-mahorat",
    title: "Pedagogik mahorat",
    description: "Professional pedagogik ko'nikmalar va ularni rivojlantirish",
    icon: Award,
    color: "purple",
    questionsCount: 30,
    duration: "35 daqiqa",
    difficulty: "Oson",
    participants: 312
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700"
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    button: "bg-green-600 hover:bg-green-700"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    button: "bg-purple-600 hover:bg-purple-700"
  }
};

const difficultyColors = {
  "Oson": "bg-green-100 text-green-800",
  "O'rta": "bg-yellow-100 text-yellow-800",
  "Qiyin": "bg-red-100 text-red-800"
};

export default function Testlar() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Testlar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pedagogik bilimlaringizni sinovdan o'tkazing va professional darajangizni aniqlang
        </p>
      </div>

      {/* Test Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testCategories.map((category) => {
          const Icon = category.icon;
          const colors = colorClasses[category.color as keyof typeof colorClasses];
          
          return (
            <Card key={category.id} className={`hover:shadow-lg transition-all duration-300 border-2 ${colors.border} hover:scale-105`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{category.questionsCount} savol</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{category.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge className={difficultyColors[category.difficulty as keyof typeof difficultyColors]}>
                    {category.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{category.participants}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild className={`w-full ${colors.button}`}>
                  <Link to={`/test/${category.id}`}>
                    Testni boshlash
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">Test qoidalari</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Har bir savol uchun to'g'ri javob tanlash zarur</li>
            <li>Vaqt tugagach test avtomatik yakunlanadi</li>
            <li>Natijalar darhol ko'rsatiladi</li>
            <li>Testni qayta topshirish imkoniyati mavjud</li>
            <li>Eng yaxshi natijalar saqlash uchun ro'yxatdan o'ting</li>
          </ul>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-blue-600">75</div>
          <div className="text-sm text-gray-600">Jami savollar</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-gray-600">Test turlari</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-purple-600">735</div>
          <div className="text-sm text-gray-600">Ishtirokchilar</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-orange-600">4.8</div>
          <div className="text-sm text-gray-600">Reyting</div>
        </div>
      </div>
    </div>
  );
}
