
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between px-2 sm:px-4 py-2">
        <div className="flex items-center justify-center md:gap-4">
          <Link to="/week1">
            <Button
              variant={location.pathname === "/week1" ? "default" : "outline"}
            >
              Первая неделя
            </Button>
          </Link>
          <Link to="/week2">
            <Button
              variant={location.pathname === "/week2" ? "default" : "outline"}
            >
              Вторая неделя
            </Button>
          </Link>
          <Link to="/week3">
            <Button
              variant={location.pathname === "/week3" ? "default" : "outline"}
            >
              Третья неделя
            </Button>
          </Link>
        </div>
        <div className="text-right items-center">
          <p className="font-semibold text-center">Платонова Ксения Николаевна</p>
          <p className="text-sm text-gray-600 text-center">Группа 22ИСП4-o9</p>
        </div>
      </div>
    </header>
  );
}
