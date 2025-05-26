import { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(10000);

  // Simulate visitor count increment
  useEffect(() => {
    // Start with a random count between 10000 and 15000
    const startCount = Math.floor(Math.random() * 5000) + 10000;
    setVisitorCount(startCount);

    // Increment visitor count randomly
    const timer = setInterval(
      () => {
        setVisitorCount((prev) => prev + 1);
      },
      Math.random() * 30000 + 20000,
    ); // Random interval between 20-50 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <a href="#" className="flex items-center">
              <img
                src="/logo-white.png"
                alt="Smart Spoon"
                className="h-24 w-auto"
              />
            </a>
            <p className="text-gray-400">
              خدمة توصيل وجبات صحية عالية البروتين للرياضيين ومحبي اللياقة
              البدنية. نقدم وجبات طازجة ومغذية لمساعدتك على تحقيق أهدافك.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  عن Smart Spoon
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex justify-start gap-4 mb-6">
              <a
                href="https://www.instagram.com/smart_spooon/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=96897657795"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"></path>
                  <path d="M20.52 3.449a12.803 12.803 0 0 0-9.05-3.75 12.803 12.803 0 0 0-11.101 6.45 12.806 12.806 0 0 0-.497 9.65L2 22l6.304-1.654a12.802 12.802 0 0 0 5.63 1.348c7.04 0 12.803-5.73 12.803-12.804 0-3.431-1.338-6.653-3.76-9.063zm.48 9.016a9.796 9.796 0 0 1-9.825 9.83 9.75 9.75 0 0 1-4.962-1.35l-.357-.214-3.682.964.984-3.59-.23-.372a9.791 9.791 0 0 1-1.34-4.962 9.802 9.802 0 0 1 9.826-9.831 9.867 9.867 0 0 1 7.029 2.92 9.877 9.877 0 0 1 2.922 7.03l-.008-.425z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Smart Spoon - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
