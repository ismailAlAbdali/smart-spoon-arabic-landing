import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, UtensilsCrossed, Soup, Apple } from "lucide-react";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب" }),
  phone: z.string().min(10, { message: "يرجى إدخال رقم هاتف صحيح" }),
  mealsPerDay: z.string().min(1, { message: "يرجى اختيار عدد الوجبات" }),
  healthIssues: z.string(),
  message: z.string(),
});

const mealOptions = [
  {
    id: "2",
    label: "وجبتين يوميًا",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    description: "مناسب للأشخاص المشغولين",
  },
  {
    id: "3",
    label: "3 وجبات يوميًا",
    icon: <Soup className="h-6 w-6" />,
    description: "الخيار الأكثر شعبية",
  },
  {
    id: "4",
    label: "4 وجبات يوميًا",
    icon: <Apple className="h-6 w-6" />,
    description: "للرياضيين والمحترفين",
  },
];

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      mealsPerDay: "",
      healthIssues: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Format WhatsApp message
    const message =
      `*طلب اشتراك جديد*\n\n` +
      `الاسم: ${data.name}\n` +
      `رقم الهاتف: ${data.phone}\n` +
      `عدد الوجبات: ${mealOptions.find((m) => m.id === data.mealsPerDay)?.label}\n` +
      (data.healthIssues ? `المشاكل الصحية: ${data.healthIssues}\n` : "") +
      (data.message ? `ملاحظات إضافية: ${data.message}` : "");

    // Replace with your WhatsApp business number
    const whatsappNumber = "96897657795";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">اشترك الآن</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          اختر خطة الوجبات المناسبة لنمط حياتك
        </p>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل اسمك الكامل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الهاتف</FormLabel>
                    <FormControl>
                      <Input placeholder="99999999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mealsPerDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عدد الوجبات اليومية</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {mealOptions.map((option) => (
                        <Card
                          key={option.id}
                          className={`cursor-pointer transition-all duration-300 ${
                            field.value === option.id
                              ? "border-primary bg-primary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => field.onChange(option.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="flex justify-center mb-2">
                              {option.icon}
                            </div>
                            <h3 className="font-bold mb-1">{option.label}</h3>
                            <p className="text-sm text-muted-foreground">
                              {option.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="healthIssues"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      هل لديك أي مشاكل صحية؟
                      <span className="text-sm text-muted-foreground mr-2">
                        (اختياري)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="اذكر أي حساسية أو مشاكل صحية يجب أن نعرفها"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ملاحظات إضافية</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="أي ملاحظات أو تفضيلات خاصة..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "جاري إرسال الطلب..." : "تواصل معنا عبر واتساب"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
