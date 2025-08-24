import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pedagogik mahorat
            <span className="text-blue-600 block">rivojlantirishning</span>
            zamonaviy platformasi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pedagoglar uchun maxsus ishlab chiqilgan ta'lim platformasida o'z bilim va ko'nikmalaringizni 
            mustahkamlang, yangi metodlar bilan tanishing
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/testlar">
              Testlarni boshlash
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/biz-haqimizda">
              Batafsil ma'lumot
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Metodik yondashuvlar</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Zamonaviy ta'lim metodlari va pedagogik yondashuvlar bo'yicha chuqur bilimlar
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-lg">Psixologiya</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Bolalar psixologiyasi va ta'lim jarayonidagi psixologik omillar haqida
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg">Pedagogik mahorat</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Professional pedagogik ko'nikmalar va ularni rivojlantirish usullari
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-lg">Rivojlanish</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Doimiy o'sish va professional rivojlanish yo'llari
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Text */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">Xush kelibsiz!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-800 leading-relaxed">
            Pedagogik mahorat rivojlantirish platformasida siz turli xil testlar va mashg'ulotlar orqali 
            o'z professional bilimlaringizni mustahkamlashingiz mumkin. Platforma pedagoglarga:
          </p>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Zamonaviy ta'lim metodlari bilan tanishish imkoniyati</li>
            <li>Psixologik bilimlarni chuqurlashtirish</li>
            <li>Pedagogik mahorat ko'rsatkichlarini baholash</li>
            <li>Professional rivojlanish yo'nalishlarini aniqlash</li>
          </ul>
          <p className="text-blue-800">
            Testlarni yechish orqali o'z bilim darajangizni aniqlang va yangi yutuqlarga erishing!
          </p>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
          <div className="text-sm text-gray-600">Foydalanuvchilar</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-green-600">150+</div>
          <div className="text-sm text-gray-600">Test savollar</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-purple-600">25+</div>
          <div className="text-sm text-gray-600">Yo'nalishlar</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-orange-600">95%</div>
          <div className="text-sm text-gray-600">Mamnunlik</div>
        </div>
      </div>
    </div>
  );
}
