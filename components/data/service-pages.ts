import {
  Layout,
  Gauge,
  Smartphone,
  Search,
  CalendarRange,
  Image as ImageIcon,
  Users,
  BarChart3,
  Target,
  FlaskConical,
  MousePointerClick,
  FileText,
  Link2,
  Megaphone,
  Lightbulb,
  Clapperboard,
  Map,
  PenTool,
  Palette,
  RefreshCw,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface Offering {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export interface ProcessStep {
  title: string;
  desc: string;
}
export interface Advantage {
  title: string;
  desc: string;
}
export interface ServicePage {
  slug: string;
  title: string;
  color: string;
  heroDesc: string;
  offerings: Offering[];
  process: ProcessStep[];
  advantages: Advantage[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "web-tasarim",
    title: "Web Tasarım",
    color: "#8B5CF6",
    heroDesc:
      "Modern, hızlı ve mobil uyumlu web siteleri tasarlıyoruz. Kullanıcı deneyimi odaklı tasarım, SEO dostu yapı ve tamamen size özel kodlama ile markanızı dijitalde öne çıkarıyoruz.",
    offerings: [
      { icon: Layout, title: "Özel Tasarım", desc: "Şablon değil; markanıza özel, sıfırdan tasarlanan benzersiz arayüzler." },
      { icon: Gauge, title: "Yüksek Performans", desc: "Saniyeler içinde açılan, Core Web Vitals'a uygun hızlı siteler." },
      { icon: Smartphone, title: "Mobil Uyumluluk", desc: "Her ekran boyutunda kusursuz görünen responsive tasarım." },
      { icon: Search, title: "SEO Dostu Altyapı", desc: "Arama motorlarında üst sıralara çıkmaya hazır temiz kod yapısı." },
    ],
    process: [
      { title: "Keşif", desc: "İhtiyaçlarınızı, hedeflerinizi ve hedef kitlenizi analiz ederiz." },
      { title: "Tasarım", desc: "Wireframe ve UI tasarımıyla sitenin görsel dilini oluştururuz." },
      { title: "Geliştirme", desc: "Temiz ve ölçeklenebilir kodla siteyi hayata geçiririz." },
      { title: "Yayın & Destek", desc: "Test eder, yayınlar ve sonrasında destek sağlarız." },
    ],
    advantages: [
      { title: "Özel Kodlama", desc: "Hazır temalar yerine ihtiyacınıza tam uyan çözümler." },
      { title: "Dönüşüm Odaklı", desc: "Ziyaretçiyi müşteriye çeviren akış ve çağrılar." },
      { title: "Uzun Vadeli Destek", desc: "Yayın sonrası bakım ve güncelleme desteği." },
    ],
  },
  {
    slug: "sosyal-medya",
    title: "Sosyal Medya",
    color: "#EC4899",
    heroDesc:
      "Instagram, TikTok ve LinkedIn hesaplarınızı uçtan uca yönetiyoruz. İçerik takvimi, görsel tasarım, topluluk yönetimi ve analiz raporlarıyla takipçiyi gerçek bir topluluğa dönüştürüyoruz.",
    offerings: [
      { icon: CalendarRange, title: "İçerik Takvimi", desc: "Planlı, tutarlı ve stratejik bir yayın akışı oluştururuz." },
      { icon: ImageIcon, title: "Görsel Tasarım", desc: "Markanıza özel reels, story ve gönderi tasarımları." },
      { icon: Users, title: "Topluluk Yönetimi", desc: "Yorum ve mesajlarla etkileşimi canlı tutarız." },
      { icon: BarChart3, title: "Analiz Raporları", desc: "Aylık performans raporlarıyla büyümeyi ölçeriz." },
    ],
    process: [
      { title: "Strateji", desc: "Marka sesinizi ve içerik yönünüzü belirleriz." },
      { title: "Üretim", desc: "Görsel ve metin içeriklerini üretiriz." },
      { title: "Yayın", desc: "En doğru zamanlarda paylaşır ve etkileşimi yönetiriz." },
      { title: "Optimizasyon", desc: "Verilere göre stratejiyi sürekli iyileştiririz." },
    ],
    advantages: [
      { title: "Organik Büyüme", desc: "Sahte takipçi değil, gerçek ve etkileşimli kitle." },
      { title: "Viral İçerik", desc: "Trendleri yakalayan yaratıcı içerik üretimi." },
      { title: "Şeffaf Raporlama", desc: "Her ay net, anlaşılır performans raporları." },
    ],
  },
  {
    slug: "meta-google-ads",
    title: "Meta & Google Ads",
    color: "#F97316",
    heroDesc:
      "Doğru hedef kitleye, doğru anda ulaşan reklam kampanyaları kurguluyoruz. A/B testleri, dönüşüm optimizasyonu ve detaylı raporlamayla reklam bütçenizi en verimli şekilde kullanıyoruz.",
    offerings: [
      { icon: Target, title: "Hedefli Kampanyalar", desc: "Doğru kitleye ulaşan hassas hedefleme stratejileri." },
      { icon: FlaskConical, title: "A/B Testleri", desc: "Kreatif ve metinleri test ederek en iyi performansı buluruz." },
      { icon: MousePointerClick, title: "Dönüşüm Optimizasyonu", desc: "Tıklamayı satışa çeviren huni optimizasyonu." },
      { icon: BarChart3, title: "Detaylı Raporlama", desc: "Harcama ve getirinin şeffaf takibi." },
    ],
    process: [
      { title: "Analiz", desc: "Hedeflerinizi ve rakip ortamını inceleriz." },
      { title: "Kurulum", desc: "Kampanya, piksel ve dönüşüm takibini kurarız." },
      { title: "Optimizasyon", desc: "Performansı günlük izler ve ayarlarız." },
      { title: "Ölçekleme", desc: "Çalışan kampanyaları kârlı şekilde büyütürüz." },
    ],
    advantages: [
      { title: "ROAS Odaklı", desc: "Vanity metrikler değil, reklam getirisi önceliğimiz." },
      { title: "Sürekli Test", desc: "Durmadan iyileştiren veri odaklı yaklaşım." },
      { title: "Şeffaf Bütçe", desc: "Her kuruşun nereye gittiğini net görürsünüz." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    color: "#3B82F6",
    heroDesc:
      "Google'da üst sıralara çıkmanızı sağlıyoruz. Teknik SEO, içerik stratejisi ve backlink çalışmalarıyla kalıcı organik trafik elde ediyor, aylık raporlarla ilerlemeyi şeffaf şekilde paylaşıyoruz.",
    offerings: [
      { icon: Layers, title: "Teknik SEO", desc: "Site hızı, indeksleme ve yapısal iyileştirmeler." },
      { icon: FileText, title: "İçerik Stratejisi", desc: "Arama niyetine uygun, değer üreten içerikler." },
      { icon: Link2, title: "Backlink Çalışması", desc: "Otorite kazandıran kaliteli bağlantılar." },
      { icon: BarChart3, title: "Aylık Raporlar", desc: "Sıralama ve trafik gelişiminin düzenli takibi." },
    ],
    process: [
      { title: "Denetim", desc: "Mevcut SEO durumunuzu baştan sona analiz ederiz." },
      { title: "Strateji", desc: "Anahtar kelime ve içerik planını oluştururuz." },
      { title: "Uygulama", desc: "Teknik ve içerik iyileştirmelerini hayata geçiririz." },
      { title: "İzleme", desc: "Sonuçları ölçer ve sürekli iyileştiririz." },
    ],
    advantages: [
      { title: "Kalıcı Sonuç", desc: "Reklam bittiğinde kaybolmayan organik trafik." },
      { title: "Beyaz Şapka", desc: "Google kurallarına uygun, güvenli yöntemler." },
      { title: "Rakip Analizi", desc: "Rakiplerinizin önüne geçecek veri odaklı planlama." },
    ],
  },
  {
    slug: "reklam",
    title: "Reklam",
    color: "#22C55E",
    heroDesc:
      "Marka bilinirliğinizi artıran 360° reklam çözümleri sunuyoruz. Strateji, kreatif üretim ve medya planlamasıyla doğru kanalda doğru mesajı ölçülebilir sonuçlarla buluşturuyoruz.",
    offerings: [
      { icon: Lightbulb, title: "Reklam Stratejisi", desc: "Hedefe uygun bütünleşik kampanya planlaması." },
      { icon: Clapperboard, title: "Kreatif Üretim", desc: "Dikkat çeken görsel ve video içerik üretimi." },
      { icon: Map, title: "Medya Planlaması", desc: "Doğru kanal ve bütçe dağılımı." },
      { icon: Megaphone, title: "Marka Bilinirliği", desc: "Markanızı doğru kitleye güçlü şekilde tanıtırız." },
    ],
    process: [
      { title: "Brief", desc: "Marka hedeflerinizi ve mesajınızı netleştiririz." },
      { title: "Konsept", desc: "Yaratıcı reklam konseptini geliştiririz." },
      { title: "Üretim", desc: "Kreatifleri ve kampanya varlıklarını üretiriz." },
      { title: "Yayın & Ölçüm", desc: "Yayınlar ve etkiyi ölçeriz." },
    ],
    advantages: [
      { title: "360° Yaklaşım", desc: "Tüm kanalları kapsayan bütünleşik çözümler." },
      { title: "Güçlü Kreatif", desc: "Akılda kalan, fark yaratan yaratıcı işler." },
      { title: "Ölçülebilir Etki", desc: "Her kampanyada net, raporlanabilir sonuçlar." },
    ],
  },
  {
    slug: "logo-tasarim",
    title: "Logo Tasarım",
    color: "#EF4444",
    heroDesc:
      "Markanızın özünü yansıtan özgün logo ve kurumsal kimlik tasarlıyoruz. Çoklu format teslimi ve sınırsız revizyon ile her platformda tutarlı, akılda kalıcı bir marka deneyimi sunuyoruz.",
    offerings: [
      { icon: PenTool, title: "Özgün Logo", desc: "Markanızın ruhunu yansıtan benzersiz tasarımlar." },
      { icon: Palette, title: "Kurumsal Kimlik", desc: "Renk paleti, tipografi ve marka kılavuzu." },
      { icon: Layers, title: "Çoklu Format", desc: "Baskı ve dijital için tüm formatlarda teslim." },
      { icon: RefreshCw, title: "Sınırsız Revizyon", desc: "Siz tam memnun olana kadar revizyon hakkı." },
    ],
    process: [
      { title: "Keşif", desc: "Marka değerlerinizi ve sektörünüzü inceleriz." },
      { title: "Eskiz", desc: "Farklı yönlerde konsept eskizleri sunarız." },
      { title: "Tasarım", desc: "Seçilen yönü ince detaylarına kadar işleriz." },
      { title: "Teslim", desc: "Tüm formatları ve marka kılavuzunu teslim ederiz." },
    ],
    advantages: [
      { title: "Özgünlük", desc: "Tamamen size ait, telifsiz ve benzersiz tasarım." },
      { title: "Bütünsel Kimlik", desc: "Sadece logo değil, eksiksiz marka sistemi." },
      { title: "Memnuniyet Garantisi", desc: "Sınırsız revizyonla kusursuz sonuç." },
    ],
  },
];

export const getServicePage = (slug: string) =>
  SERVICE_PAGES.find((s) => s.slug === slug);

/** Slug map for linking the home-page cards to their detail routes. */
export const SLUG_BY_TITLE: Record<string, string> = {
  "Web Tasarım": "web-tasarim",
  "Sosyal Medya": "sosyal-medya",
  "Meta & Google Ads": "meta-google-ads",
  SEO: "seo",
  Reklam: "reklam",
  "Logo Tasarımı": "logo-tasarim",
};
