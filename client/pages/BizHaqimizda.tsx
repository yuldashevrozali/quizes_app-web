import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Target, 
  Heart, 
  Award, 
  Lightbulb,
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Nargiza Karimova",
    role: "Ta'lim metodisti",
    description: "15 yillik tajribaga ega pedagog va ta'lim metodlari mutaxassisi"
  },
  {
    name: "Bobur Rahmatov",
    role: "Dasturchi",
    description: "Zamonaviy ta'lim texnologiyalari va web dasturlash mutaxassisi"
  },
  {
    name: "Malika Tosheva",
    role: "Psixolog",
    description: "Bolalar psixologiyasi va ta'lim psixologiyasi bo'yicha ekspert"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Keng qamrovli ta'lim",
    description: "Pedagogik mahoratning barcha jihatlarini qamrab oluvchi testlar va materiallar"
  },
  {
    icon: Users,
    title: "Jamoa ishi",
    description: "Pedagogllar o'rtasida tajriba almashish va hamkorlik imkoniyatlari"
  },
  {
    icon: Target,
    title: "Maqsadli yondashuv",
    description: "Har bir pedagog uchun individual rivojlanish yo'nalishlarini belgilash"
  },
  {
    icon: Award,
    title: "Sertifikatlar",
    description: "Yuqori natijalar uchun rasmiy sertifikatlar va diplomlar"
  }
];

export default function BizHaqimizda() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Biz haqimizda
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Pedagogik mahoratni rivojlantirish uchun zamonaviy va samarali ta'lim platformasi
        </p>
      </div>

      {/* Mission */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl text-blue-900">Bizning maqsadimiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-800 text-lg leading-relaxed text-center">
            Har bir pedagogning professional rivojlanishiga hissa qo'shish va ta'lim sifatini 
            oshirish uchun zamonaviy vositalar taqdim etish
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-blue-800">Faol foydalanuvchilar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-blue-800">Bajarilgan testlar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-blue-800">Mamnunlik darajasi</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Platformaning afzalliklari
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* About Platform */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            Platforma haqida
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            "Ta'lim" platformasi 2024-yilda pedagoglar uchun zamonaviy ta'lim vositalarini 
            taqdim etish maqsadida yaratilgan. Bizning platformamiz pedagoglarga o'z 
            professional mahoratlarini rivojlantirish, yangi metodlar bilan tanishish va 
            ta'lim sifatini oshirish imkoniyatini beradi.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Platformada turli xil testlar, metodik materiallar va ta'lim resurslari mavjud. 
            Har bir pedagog o'z bilim darajasini baholab, kerakli yo'nalishlarda o'z-o'zini 
            rivojlantirishi mumkin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Badge variant="secondary" className="p-3 justify-center">
              <Globe className="h-4 w-4 mr-2" />
              24/7 ochiq
            </Badge>
            <Badge variant="secondary" className="p-3 justify-center">
              <Users className="h-4 w-4 mr-2" />
              Hamjamiyat
            </Badge>
            <Badge variant="secondary" className="p-3 justify-center">
              <Award className="h-4 w-4 mr-2" />
              Sertifikatlar
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Bizning jamoa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-900">Biz bilan bog'laning</CardTitle>
          <CardDescription className="text-blue-700">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">info@talim.uz</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Telefon</div>
                <div className="text-sm text-gray-600">+998 71 123 45 67</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Manzil</div>
                <div className="text-sm text-gray-600">Toshkent, O'zbekiston</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
