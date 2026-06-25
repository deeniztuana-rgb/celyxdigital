import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Celyx Digital olarak kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi.",
};

const SECTIONS = [
  {
    title: "Topladığımız Bilgiler",
    body: "Bize doğrudan sağladığınız bilgileri toplarız — iletişim veya kayıt (onboarding) formlarımızı doldururken verdiğiniz ad, e-posta ve işletme bilgileri gibi. Ayrıca ziyaretçilerin sitemizle nasıl etkileşime girdiğini anlamak için analiz araçları aracılığıyla kullanım verileri de toplarız.",
  },
  {
    title: "Bilgilerinizi Nasıl Kullanıyoruz",
    body: "Topladığımız bilgileri; taleplerinizi yanıtlamak, pazarlama hizmetleri sunmak, web sitemizi geliştirmek ve ilgili güncellemeleri göndermek için kullanırız. Kişisel bilgilerinizi üçüncü taraflara satmıyoruz.",
  },
  {
    title: "Çerezler ve Takip",
    body: "Sitemiz, deneyiminizi geliştirmek ve analiz verileri toplamak için çerezler ve benzeri teknolojiler kullanır. Çerez ayarlarını tarayıcı tercihleriniz üzerinden kontrol edebilirsiniz.",
  },
  {
    title: "Üçüncü Taraf Hizmetler",
    body: "İşimizi yürütmek için Google Analytics, Meta Pixel ve e-posta platformları dahil güvenilir üçüncü taraf hizmetlerini kullanırız. Bu hizmetlerin, verilerinizi kullanımlarını düzenleyen kendi gizlilik politikaları bulunur.",
  },
  {
    title: "Veri Saklama",
    body: "Bilgilerinizi yalnızca hizmetlerimizi sunmak veya yasal yükümlülükleri yerine getirmek için gerekli olduğu süre boyunca saklarız. Bizimle iletişime geçerek verilerinizin silinmesini dilediğiniz zaman talep edebilirsiniz.",
  },
  {
    title: "Haklarınız",
    body: "Bulunduğunuz yere bağlı olarak, kişisel verilerinize erişme, bunları düzeltme veya silme haklarına sahip olabilirsiniz. Bu hakları kullanmak için celyxdigital@gmail.com adresinden bizimle iletişime geçin.",
  },
  {
    title: "İletişim",
    body: "Gizlilikle ilgili her türlü soru için celyxdigital@gmail.com adresinden bize e-posta gönderebilirsiniz. Mesajlarınıza 2 iş günü içinde yanıt veriyoruz.",
  },
];

export default function Page() {
  return (
    <main id="icerik" className="min-h-dvh bg-ink px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-3xl">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#CCFF00" }}
        >
          Yasal
        </p>
        <h1 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(40px,7vw,88px)]">
          Gizlilik Politikası
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/60">
          Kişisel verilerinizi nasıl topladığımız, kullandığımız ve
          koruduğumuz hakkında bilgi.
        </p>

        <div className="mt-14 space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {s.title}
              </h2>
              <p className="mt-3 leading-relaxed text-white/65">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
