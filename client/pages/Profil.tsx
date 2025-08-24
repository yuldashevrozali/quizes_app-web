import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Crown, 
  Calendar, 
  Trophy, 
  BookOpen, 
  Clock, 
  Target,
  Star,
  Award,
  CheckCircle
} from "lucide-react";

export default function Profil() {
  const [userStatus, setUserStatus] = useState<"Oddiy" | "Premium">("Oddiy");

  const userInfo = {
    name: "Aliyev Anvar",
    joinDate: "2024 yil yanvar",
    completedTests: 12,
    totalScore: 84,
    averageScore: 78,
    bestCategory: "Pedagogik mahorat",
    studyTime: "45 soat"
  };

  const achievements = [
    { title: "Birinchi test", icon: Trophy, completed: true },
    { title: "10 ta test yakunlangan", icon: Target, completed: true },
    { title: "80% dan yuqori natija", icon: Star, completed: true },
    { title: "Hamma kategoriyani sinovdan o'tkazish", icon: Award, completed: false }
  ];

  const recentTests = [
    { category: "Pedagogik mahorat", score: 85, date: "2024-01-15" },
    { category: "Psixologiya", score: 78, date: "2024-01-12" },
    { category: "Metodik yondashuv", score: 82, date: "2024-01-10" }
  ];

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
          <User className="h-12 w-12 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{userInfo.name}</h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge variant={userStatus === "Premium" ? "default" : "secondary"} className="text-lg px-3 py-1">
              {userStatus === "Premium" && <Crown className="h-4 w-4 mr-1" />}
              {userStatus}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Toggle */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5" />
                Foydalanuvchi statusi
              </CardTitle>
              <CardDescription>
                Platformadan foydalanish darajangizni tanlang
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={userStatus} 
                onValueChange={(value) => setUserStatus(value as "Oddiy" | "Premium")}
              >
                <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                  <RadioGroupItem value="Oddiy" id="oddiy" />
                  <Label htmlFor="oddiy" className="flex-1 cursor-pointer">
                    <div className="font-medium">Oddiy</div>
                    <div className="text-sm text-gray-500">Asosiy funksiyalar mavjud</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                  <RadioGroupItem value="Premium" id="premium" />
                  <Label htmlFor="premium" className="flex-1 cursor-pointer">
                    <div className="font-medium flex items-center gap-2">
                      <Crown className="h-4 w-4 text-yellow-600" />
                      Premium
                    </div>
                    <div className="text-sm text-gray-500">Barcha funksiyalar va qo'shimcha imkoniyatlar</div>
                  </Label>
                </div>
              </RadioGroup>
              {userStatus === "Premium" && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <Crown className="h-5 w-5" />
                    <span className="font-medium">Premium foydalanuvchi</span>
                  </div>
                  <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                    <li>Cheksiz test yechish imkoniyati</li>
                    <li>Batafsil natijalar tahlili</li>
                    <li>Maxsus metodologik materiallar</li>
                    <li>Individual maslahatlar</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                So'nggi testlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{test.category}</div>
                      <div className="text-sm text-gray-500">{test.date}</div>
                    </div>
                    <Badge variant={test.score >= 80 ? "default" : "secondary"}>
                      {test.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Yutuqlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 p-4 border rounded-lg ${
                        achievement.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.completed ? 'bg-green-100' : 'bg-gray-200'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          achievement.completed ? 'text-green-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          achievement.completed ? 'text-green-900' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </div>
                        {achievement.completed && (
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <CheckCircle className="h-3 w-3" />
                            Bajarildi
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-6">
          {/* Profile Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Statistika</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Qo'shildi</span>
                </div>
                <span className="font-medium">{userInfo.joinDate}</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Testlar</span>
                </div>
                <span className="font-medium">{userInfo.completedTests}</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">O'rtacha bal</span>
                </div>
                <span className="font-medium">{userInfo.averageScore}%</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">O'qish vaqti</span>
                </div>
                <span className="font-medium">{userInfo.studyTime}</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Eng yaxshi</span>
                </div>
                <span className="font-medium text-sm">{userInfo.bestCategory}</span>
              </div>
            </CardContent>
          </Card>

          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle>Maqsadlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Barcha kategoriyalarni yakunlash</span>
                  <span>2/3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>90% dan yuqori natija</span>
                  <span>1/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
