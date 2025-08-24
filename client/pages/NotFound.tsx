import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl font-bold text-red-600">404</span>
          </div>
          <CardTitle className="text-2xl text-gray-900">
            Sahifa topilmadi
          </CardTitle>
          <CardDescription className="text-lg">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Ehtimol, sahifa ko'chirilgan yoki o'chirilgan bo'lishi mumkin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Bosh sahifaga qaytish
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/testlar">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Testlarga o'tish
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
