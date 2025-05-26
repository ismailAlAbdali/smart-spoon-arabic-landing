import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen rtl">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          الشروط والأحكام
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-right">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              مدة الاشتراك
            </h2>
            <ul className="space-y-3">
              <li>• مدة الاشتراك 26 يوم من الأحد إلى الخميس</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              الدفع والاشتراك
            </h2>
            <ul className="space-y-3">
              <li>• دفع مبلغ الاشتراك يكون قبل بيوم عن البدء في الاشتراك</li>
              <li>• التعويض متاح لمدة 5 ايام فقط بعد انتهاء الاشتراك</li>
              <li>
                • لا يمكن إلغاء الاشتراك او استرداد الاموال بعد تفعيل الاشتراك
              </li>
              <li>• يسمح بتحويل الاشتراك لشخص اخر بعد التنسيق مع الادارة</li>
              <li>
                • لانعتمد اي اشتراك بدون دفع ولا نعتمد نظام حجز العروض الا
                بالدفع المسبق
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              أنواع الاشتراكات وأوقات التوصيل
            </h2>
            <ul className="space-y-3">
              <li>
                • اوقات استلام الوجبات من الاحد الى الخميس من 9 صباحا الى 1:00
                مساء فقط في الاوقات المتفق عليها مسبقا
              </li>
              <li>
                • في حالة تغيير موقع استلام الوجبات يلتزم المشترك بإبلاغنا قبل
                24 ساعة
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              الوجبات والجدول الأسبوعي
            </h2>
            <ul className="space-y-3">
              <li>
                • يجب على المشترك ابلاغنا باي مشاكل صحية او مرضية قبل الاشتراك
              </li>
              <li>
                • الجدول الاسبوعي للوجبات كالتالي: وجبتين دجاج بنوعين مختلفة
                طوال الاسبوع، وجبة اللحم يتم توفيرها فقط ثلاثة ايام في الاسبوع
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
