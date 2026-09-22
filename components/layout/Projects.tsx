import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@/src/i18n";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import SectionMainHeadings from "../SectionMainHeadings";
// #D9FE54
function Projects() {
	const t = useTranslations("projects");
	const locale = useLocale() as Locale;
	return (
		<section id="projects" className="w-full flex flex-col gap-24 section-scroll-margin">
			<SectionMainHeadings>{t("title")}</SectionMainHeadings>

			{/* PROJECT PRICE CATCH */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl ">
								<Link href={"https://price-catch.vercel.app/"} target="_blank" rel="noopener noreferrer">
									<Image
										src={"/static/images/price-catch-analytics-full-page-demo.png"}
										className="w-full"
										alt={
											locale === "tr"
												? "Price Catch fiyat takip ve rekabet analiz dashboard'u"
												: "Price Catch price tracking and competitive analysis dashboard"
										}
										width={1280}
										height={1280}
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading>Price Catch</ProjectHeading>
						{/* STACKS */}
						<div className="mb-4">
							<h3 className="font-semibold mb-4 text-black dark:text-black">{t("techStacks")}</h3>
							<ul className="flex gap-2">
								<li>
									<SiNextdotjs size={24} fill="#000000" />
								</li>
								<li>
									<SiTypescript size={24} fill="#3178c6" />
								</li>
								<li>
									<FaReact size={24} fill="#61dbfb" />
								</li>
								<li>
									<SiPrisma size={24} fill="#2d3748" />
								</li>
								<li>
									<SiPostgresql size={24} fill="#4169e1" />
								</li>
								<li>
									<SiTailwindcss size={24} fill="#06b6d4" />
								</li>
							</ul>
						</div>
						{locale === "tr" && (
							<Accordion type="single" collapsible className="project-accordion w-full ">
								<AccordionItem value="pricecatch-item-1">
									<AccordionTrigger>Ürün ve Rakip Fiyat Takibi</AccordionTrigger>
									<AccordionContent>
										Ürünlerin ve rakip fiyatlarının düzenli olarak izlenmesini ve fiyat değişikliklerinin
										kaydedilmesini sağlar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-2">
									<AccordionTrigger>Otomatik Fiyat Değişikliği Tespiti</AccordionTrigger>
									<AccordionContent>
										Monitoring kontrolleri sonucunda kendi ürünlerindeki ve rakiplerdeki fiyat hareketlerini tespit
										eder.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-3">
									<AccordionTrigger>Ürün Bazlı Rekabet Analizi</AccordionTrigger>
									<AccordionContent>
										Rakip hareketlerini ürün merkezinde birleştirerek her ürünün mevcut rekabet durumunu gösterir.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-4">
									<AccordionTrigger>Aksiyon Odaklı Durumlar</AccordionTrigger>
									<AccordionContent>
										Ürünleri &quot;Aksiyon gerekli&quot;, &quot;Takip et&quot;, &quot;Avantajlı&quot; gibi durumlarla
										önceliklendirerek yöneticinin dikkat etmesi gereken ürünleri öne çıkarır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-5">
									<AccordionTrigger>Analytics Dashboard</AccordionTrigger>
									<AccordionContent>
										Ürünlerdeki fiyat değişikliklerini, rakip hareketlerini ve en aktif ürün/rakipleri tek bir
										analytics ekranında sunar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-6">
									<AccordionTrigger>Piyasa Fiyat Pozisyonu</AccordionTrigger>
									<AccordionContent>
										Kendi ürün fiyatını mevcut rakip fiyatlarıyla karşılaştırarak ürünün piyasadaki fiyat sırasını
										gösterir.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-7">
									<AccordionTrigger>Fiyat Geçmişi ve Grafikler</AccordionTrigger>
									<AccordionContent>
										Ürün ve rakip fiyatlarının zaman içerisindeki değişimini grafik ve detaylı geçmiş kayıtlarıyla
										gösterir.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-8">
									<AccordionTrigger>Otomatik Monitoring</AccordionTrigger>
									<AccordionContent>
										Ürünler için belirlenen monitoring aralıklarına göre otomatik fiyat kontrolleri gerçekleştirir.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-9">
									<AccordionTrigger>Monitoring Durumu</AccordionTrigger>
									<AccordionContent>
										Sistem genelindeki monitoring durumunu ve aktif kontrol sayılarını global dashboard/sidebar
										üzerinden takip etmeyi sağlar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-10">
									<AccordionTrigger>Responsive SaaS Dashboard</AccordionTrigger>
									<AccordionContent>
										Ürün yönetimi, analytics, monitoring ve fiyat detaylarını farklı ekran boyutlarında kullanılabilir
										şekilde sunar.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{locale === "en" && (
							<Accordion type="single" collapsible className="project-accordion w-full ">
								<AccordionItem value="pricecatch-item-1">
									<AccordionTrigger>Product and Competitor Price Tracking</AccordionTrigger>
									<AccordionContent>
										Regularly monitors product and competitor prices and records price changes over time.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-2">
									<AccordionTrigger>Automatic Price Change Detection</AccordionTrigger>
									<AccordionContent>
										Detects price movements for both own products and competitors during monitoring checks.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-3">
									<AccordionTrigger>Product-Centric Competitive Analysis</AccordionTrigger>
									<AccordionContent>
										Combines competitor movements around each product to provide a clear view of its current
										competitive position.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-4">
									<AccordionTrigger>Action-Oriented Statuses</AccordionTrigger>
									<AccordionContent>
										Prioritizes products with statuses such as &quot;Act Now&quot;, &quot;Watch&quot;, and
										&quot;Advantage&quot; to highlight products requiring attention.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-5">
									<AccordionTrigger>Analytics Dashboard</AccordionTrigger>
									<AccordionContent>
										Provides a centralized view of product price changes, competitor movements, and the most active
										products and competitors.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-6">
									<AccordionTrigger>Market Price Position</AccordionTrigger>
									<AccordionContent>
										Compares the product&apos;s current price against valid competitor prices and displays its
										position within the market.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-7">
									<AccordionTrigger>Price History and Charts</AccordionTrigger>
									<AccordionContent>
										Visualizes changes in own and competitor prices over time with charts and detailed historical
										records.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-8">
									<AccordionTrigger>Automated Monitoring</AccordionTrigger>
									<AccordionContent>
										Automatically performs price checks according to each product&apos;s configured monitoring
										interval.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-9">
									<AccordionTrigger>Monitoring Status</AccordionTrigger>
									<AccordionContent>
										Provides an overview of the system monitoring state and active monitoring counts directly from the
										global dashboard/sidebar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pricecatch-item-10">
									<AccordionTrigger>Responsive SaaS Dashboard</AccordionTrigger>
									<AccordionContent>
										Provides a responsive interface for product management, analytics, monitoring, and detailed price
										analysis.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{/* PRIVATE SAAS NOTICE */}
						<div className="flex items-start gap-2 mt-6 text-zinc-500 dark:text-zinc-400">
							<FiLock size={16} className="mt-1 shrink-0" />
							<div>
								<p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
									{locale === "tr" ? "Private SaaS Project" : "Private SaaS Project"}
								</p>
								<p className="text-sm">
									{locale === "tr"
										? "Ticari kullanım amacıyla geliştirilen bu projenin kaynak kodu private repository'de tutulmaktadır."
										: "The source code is kept private as the project is being developed for commercial use."}
								</p>
							</div>
						</div>
						{/* CTA */}
						<div className="flex justify-end gap-2 mt-4">
							<Link
								href={"https://price-catch.vercel.app/"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 rounded-full font-bold primary-button-no-shadow"
							>
								{t("visitSiteLabel")}
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* PROJECT 1 E-COMMERCE */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl ">
								<Link href={"https://cems-react-ecommerce.netlify.app/"} target="_blank" rel="noopener noreferrer">
									<Image
										src={"/static/images/ecommerce-app-home-page.png"}
										className="w-full"
										alt="Cemre's personal image"
										width={576}
										height={1024}
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading> {locale === "tr" ? "E-ticaret Uygulaması" : "E-commerce App"}</ProjectHeading>
						{/* STACKS */}
						<div className="mb-4">
							<h3 className="font-semibold mb-4 text-black dark:text-black">{t("techStacks")}</h3>
							<ul className="flex gap-2">
								<li>
									<FaHtml5 size={24} fill="#e34c26" />
								</li>
								<li>
									<IoLogoCss3 size={24} fill="rebeccapurple" />
								</li>
								<li>
									<SiTailwindcss size={24} fill="#06b6d4" />
								</li>
								<li>
									<IoLogoJavascript size={24} fill="text-black" />
								</li>
								<li>
									<FaReact size={24} fill="#61dbfb" />
								</li>
							</ul>
						</div>
						{locale === "tr" && (
							<Accordion type="single" collapsible className="project-accordion w-full ">
								<AccordionItem value="item-1">
									<AccordionTrigger>Responsive(Duyarlı) Tasarım</AccordionTrigger>
									<AccordionContent>Tüm cihazlarda sorunsuz kullanım için optimize edilmiştir.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-2">
									<AccordionTrigger>Gelişmiş Arama ve Otomatik Tamamlama</AccordionTrigger>
									<AccordionContent>Hızlı ürün araması için entegre otomatik tamamlama işlevi sunar.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-3">
									<AccordionTrigger>Ana Sayfa Ürün Kaydırıcıları</AccordionTrigger>
									<AccordionContent>
										Öne çıkan ürünleri interaktif kaydırıcılar üzerinden gözden geçirin.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-4">
									<AccordionTrigger>Ürün Sayfası Gezinme</AccordionTrigger>
									<AccordionContent>Ana sayfadan bireysel ürün sayfalarına kolayca erişim sağlayın.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-5">
									<AccordionTrigger>Kalıcı Alışveriş Sepeti</AccordionTrigger>
									<AccordionContent>
										Ürünleri ekleyip çıkarabilir ve doğrulama gerekmeksizin yerel depolama üzerinden kalıcılığı
										koruyabilirsiniz.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-6">
									<AccordionTrigger>Özel İstek Listesi İşlevselliği</AccordionTrigger>
									<AccordionContent>
										İstek listenizi ürün ekleme/çıkarma işlevselliğiyle yönetin, alışveriş sepetine benzer şekilde
										depolanır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-7">
									<AccordionTrigger>İstek Listesi Sayfası</AccordionTrigger>
									<AccordionContent>
										Özel bir sayfada istek listesindeki tüm ürünleri görüntüleyin ve yönetin.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-8">
									<AccordionTrigger>Yol Haritası Gezinme</AccordionTrigger>
									<AccordionContent>
										Ürün ve kategori sayfalarında net ve erişilebilir gezinme için ekmek kırıntıları kullanılır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-9">
									<AccordionTrigger>Arama Sonuçlarını Filtreleme</AccordionTrigger>
									<AccordionContent>
										Arama sayfasında ürünleri kategori, marka veya her ikisine göre filtreleyin.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-10">
									<AccordionTrigger>URL Tabanlı Durum Yönetimi</AccordionTrigger>
									<AccordionContent>
										Arama sayfası filtreleri, URL&apos;ye yansıtılarak kolayca paylaşılır ve diğer kullanıcıların aynı
										filtrelenmiş sonuçları görmesine olanak tanır.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{locale === "en" && (
							<Accordion type="single" collapsible className="project-accordion w-full ">
								<AccordionItem value="item-1">
									<AccordionTrigger>Fully Responsive Design</AccordionTrigger>
									<AccordionContent>Optimized for seamless usage across all devices.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-2">
									<AccordionTrigger>Advanced Search with Autocomplete</AccordionTrigger>
									<AccordionContent>Integrated autocomplete functionality for quick product search.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-3">
									<AccordionTrigger>Homepage Product Sliders</AccordionTrigger>
									<AccordionContent>Browse featured products through interactive sliders.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-4">
									<AccordionTrigger>Product Page Navigation</AccordionTrigger>
									<AccordionContent>Easily navigate to individual product pages from the homepage.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-5">
									<AccordionTrigger>Persistent Shopping Cart</AccordionTrigger>
									<AccordionContent>
										Add and remove products with persistence via local storage, whether authenticated or not.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-6">
									<AccordionTrigger>Dedicated Wishlist Functionality</AccordionTrigger>
									<AccordionContent>
										Manage a wishlist with add/remove functionality, stored similarly to the cart.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-7">
									<AccordionTrigger>Wishlist Page</AccordionTrigger>
									<AccordionContent>View and manage all items in the wishlist on a dedicated page.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-8">
									<AccordionTrigger>Breadcrumb Navigation</AccordionTrigger>
									<AccordionContent>
										Clear and accessible navigation on product and category pages via breadcrumbs.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-9">
									<AccordionTrigger>Search Result Filtering</AccordionTrigger>
									<AccordionContent>Filter products by category, brand, or both on the search page.</AccordionContent>
								</AccordionItem>

								<AccordionItem value="item-10">
									<AccordionTrigger>URL-Based State Management</AccordionTrigger>
									<AccordionContent>
										Search page filters are reflected in the URL for easy sharing, allowing others to view the exact
										filtered results.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{/* CTA */}
						<div className="flex justify-end gap-2 mt-8">
							<Link
								href={"https://github.com/cemsjam/React-E-Commerce-App"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 font-bold text-black border border-black rounded-full bg-white hover:bg-black hover:text-white active:scale-95"
							>
								{t("sourceCodeLabel")}
							</Link>
							<Link
								href={"https://cems-react-ecommerce.netlify.app/"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 rounded-full font-bold primary-button-no-shadow"
							>
								{t("visitSiteLabel")}
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* PROJECT 2 WORDLE */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading>{locale === "tr" ? "Wordle Klonu" : "Wordle Clone"}</ProjectHeading>
						{/* STACKS */}
						<div className="mb-4">
							<h3 className="font-semibold mb-4 text-black dark:text-black">{t("techStacks")}</h3>
							<ul className="flex gap-2">
								<li>
									<FaHtml5 size={24} fill="#e34c26" />
								</li>
								<li>
									<IoLogoCss3 size={24} fill="rebeccapurple" />
								</li>

								<li>
									<IoLogoJavascript size={24} fill="text-black" />
								</li>
							</ul>
						</div>
						{locale === "tr" && (
							<Accordion type="single" collapsible className="project-accordion w-full">
								<AccordionItem value="wordle-item-1">
									<AccordionTrigger>Kelime Tahmin Oyunu</AccordionTrigger>
									<AccordionContent>
										Kullanıcıların sınırlı sayıda deneme ile beş harfli bir kelimeyi tahmin ettiği temel Wordle oyun
										mekaniklerini taklit eder.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-2">
									<AccordionTrigger>Kare Döndürme Animasyonu</AccordionTrigger>
									<AccordionContent>
										Her kare, tahmin edilen harfin doğru, doğru pozisyonda veya kelimede hiç olmadığını göstermek için
										döner.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-3">
									<AccordionTrigger>Tahminlere Geri Bildirim</AccordionTrigger>
									<AccordionContent>
										Kullanıcılar harf tahmin ederken, doğru ve yanlış tahminleri belirten renklerle görsel geri bildirim
										sağlanır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-4">
									<AccordionTrigger>Kelime Doğrulama</AccordionTrigger>
									<AccordionContent>
										Girilen kelimelerin geçerli beş harfli kelimeler olduğunu kontrol eder ve tahmini işleme alır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-5">
									<AccordionTrigger>Günlük Kelime Yarışması</AccordionTrigger>
									<AccordionContent>
										Orijinal Wordle konseptine benzer şekilde, oyuncuların tahmin etmesi için günlük bir kelime sunar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-6">
									<AccordionTrigger>Klavyeden Giriş Desteği</AccordionTrigger>
									<AccordionContent>
										Kullanıcıların tahminlerini doğrudan klavyelerinde yazarak daha kolay oynayabilmelerini sağlayan
										klavye giriş desteği sunar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-7">
									<AccordionTrigger>Responsive(Duyarlı) Tasarım</AccordionTrigger>
									<AccordionContent>
										Hem masaüstü hem de mobil cihazlarda sorunsuz bir şekilde oynanabilmesini sağlayan
										Responsive(Duyarlı) tasarım.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-8">
									<AccordionTrigger>Renk Kodlu İpuçları</AccordionTrigger>
									<AccordionContent>
										Karelerdeki renkler ipucu verir: doğru harf için yeşil, yanlış yerdeki harf için sarı ve yanlış
										harfler için gri.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-9">
									<AccordionTrigger>Kazanma/Kaybetme Bildirimleri</AccordionTrigger>
									<AccordionContent>
										Tüm denemeler tamamlandıktan sonra oyuncu kazandığında veya kaybettiğinde bildirimler gösterir.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{locale === "en" && (
							<Accordion type="single" collapsible className="project-accordion w-full">
								<AccordionItem value="wordle-item-1">
									<AccordionTrigger>Word Guessing Game</AccordionTrigger>
									<AccordionContent>
										Replicates the core Wordle gameplay where users guess a five-letter word within a limited number of
										attempts.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-2">
									<AccordionTrigger>Tile Flip Animation</AccordionTrigger>
									<AccordionContent>
										Each tile flips to reveal whether the guessed letter is correct, in the correct position, or not in
										the word at all.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-3">
									<AccordionTrigger>Feedback on Guesses</AccordionTrigger>
									<AccordionContent>
										Visual feedback is provided as users guess letters, with colors indicating correct and incorrect
										guesses.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-4">
									<AccordionTrigger>Word Validation</AccordionTrigger>
									<AccordionContent>
										Ensures that entered words are valid five-letter words before processing the guess.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-5">
									<AccordionTrigger>Daily Word Challenge</AccordionTrigger>
									<AccordionContent>
										Mimics the original Wordle concept of providing one daily word for players to guess.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-6">
									<AccordionTrigger>Keyboard Input Support</AccordionTrigger>
									<AccordionContent>
										Supports keyboard input for easier gameplay, where players can type directly on their keyboard to
										input guesses.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-7">
									<AccordionTrigger>Responsive Design</AccordionTrigger>
									<AccordionContent>
										Fully responsive, allowing gameplay on both desktop and mobile devices seamlessly.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-8">
									<AccordionTrigger>Color-coded Hints</AccordionTrigger>
									<AccordionContent>
										Colors on tiles change to provide hints: green for correct, yellow for misplaced, and gray for
										incorrect letters.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="wordle-item-9">
									<AccordionTrigger>Win/Loss Notifications</AccordionTrigger>
									<AccordionContent>
										Displays notifications when the player wins or loses after completing all attempts.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}
						{/* CTA */}
						<div className="flex gap-2 mt-8">
							<Link
								href={"https://github.com/cemsjam/Wordle-clone-with-vanilla-js"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 font-bold text-black border border-black rounded-full bg-white hover:bg-black hover:text-white active:scale-95"
							>
								{t("sourceCodeLabel")}
							</Link>
							<Link
								href={"https://cems-simplified-wordle-clone.netlify.app/"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 rounded-full font-bold primary-button-no-shadow"
							>
								{t("visitSiteLabel")}
							</Link>
						</div>
					</div>
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl self-center">
								<Link
									href={"https://cems-simplified-wordle-clone.netlify.app/"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={"/static/images/wordle-clone-app.png"}
										className="w-full"
										alt="Cemre's personal image"
										width={576}
										height={1024}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PROJECT 3 CROWDFUNDING */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl self-center">
								<Link
									href={"https://crowdfunding-product-page-cems.netlify.app/"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={"/static/images/crowdfunding.png"}
										className="w-full"
										alt="Cemre's personal image"
										width={576}
										height={1024}
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading>{locale === "tr" ? "Kitlesel Fonlama Sayfası" : "Crowdfunding Page"}</ProjectHeading>
						{/* STACKS */}
						<div className="mb-4">
							<h3 className="font-semibold mb-4 text-black dark:text-black">{t("techStacks")}</h3>
							<ul className="flex gap-2">
								<li>
									<FaHtml5 size={24} fill="#e34c26" />
								</li>
								<li>
									<IoLogoCss3 size={24} fill="rebeccapurple" />
								</li>
								<li>
									<IoLogoJavascript size={24} fill="text-black" />
								</li>
							</ul>
						</div>
						{locale === "tr" && (
							<Accordion type="single" collapsible className="project-accordion w-full">
								<AccordionItem value="feature-item-1">
									<AccordionTrigger>Responsive(Duyarlı) Tasarım</AccordionTrigger>
									<AccordionContent>
										Tamamen duyarlı tasarım, tüm cihazlarda ve ekran boyutlarında sorunsuz bir kullanıcı deneyimi
										sağlar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-2">
									<AccordionTrigger>Akıcı Geçişler</AccordionTrigger>
									<AccordionContent>
										Sayfa ve bileşenler arasında pürüzsüz geçişler ile kullanıcı deneyimini geliştirir.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-3">
									<AccordionTrigger>Modal Uygulaması</AccordionTrigger>
									<AccordionContent>
										JavaScript ile oluşturulan modallar, açıldığında klavye tuşlarının sıkışmasını önleyerek
										erişilebilirliği artırır.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-4">
									<AccordionTrigger>Klavye Tuş Sırası Kontrolü</AccordionTrigger>
									<AccordionContent>
										Modallar açıkken kullanıcıların sekme tuşu sırasını yakalayarak etkili ve erişilebilir bir gezinme
										sunar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-5">
									<AccordionTrigger>Özel Giriş Bileşenleri</AccordionTrigger>
									<AccordionContent>
										Herhangi bir ek kütüphane kullanılmadan sıfırdan oluşturulmuş özel giriş alanlarıyla benzersiz bir
										dokunuş sağlar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-6">
									<AccordionTrigger>Özel Açılır Menü İşlevselliği</AccordionTrigger>
									<AccordionContent>
										Kitaplık kullanmadan mobil cihazlarda gezinti için optimize edilmiş özel açılır menü işlevselliği
										sunar.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-7">
									<AccordionTrigger>Renk Paleti ve Tasarım Tutarlılığı</AccordionTrigger>
									<AccordionContent>
										Belirlenmiş renk paletlerinin ve tasarım yönergelerinin doğru bir şekilde uygulanmasıyla estetik bir
										uyum sağlanır.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}

						{locale === "en" && (
							<Accordion type="single" collapsible className="project-accordion w-full">
								<AccordionItem value="feature-item-1">
									<AccordionTrigger>Responsive Design</AccordionTrigger>
									<AccordionContent>
										A fully responsive layout ensures a seamless user experience across all devices and screen sizes.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-2">
									<AccordionTrigger>Smooth Transitions</AccordionTrigger>
									<AccordionContent>
										Enhances user experience with smooth transitions between pages and components.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-3">
									<AccordionTrigger>Modal Implementation</AccordionTrigger>
									<AccordionContent>
										Custom-built modals using JavaScript provide accessibility by trapping focus when open.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-4">
									<AccordionTrigger>Keyboard Tab Order Control</AccordionTrigger>
									<AccordionContent>
										Improves navigation by ensuring effective and accessible tab order trapping when modals are active.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-5">
									<AccordionTrigger>Custom Input Components</AccordionTrigger>
									<AccordionContent>
										Unique custom input fields, built from scratch without any additional libraries, add a personal
										touch.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-6">
									<AccordionTrigger>Custom Dropdown Functionality</AccordionTrigger>
									<AccordionContent>
										Optimized custom dropdowns for mobile navigation without relying on external libraries.
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="feature-item-7">
									<AccordionTrigger>Color Palette and Design Consistency</AccordionTrigger>
									<AccordionContent>
										Ensures aesthetic harmony through the precise implementation of predefined color palettes and design
										guidelines.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						)}

						{/* CTA */}
						<div className="flex justify-end gap-2 mt-8">
							<Link
								href={"https://github.com/cemsjam/Wordle-clone-with-vanilla-js"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 font-bold text-black border border-black rounded-full bg-white hover:bg-black hover:text-white active:scale-95"
							>
								{t("sourceCodeLabel")}
							</Link>
							<Link
								href={"https://cems-simplified-wordle-clone.netlify.app/"}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-[52px] min-w-[150px] gap-2 justify-center text-center items-center px-7 py-3 rounded-full font-bold primary-button-no-shadow"
							>
								{t("visitSiteLabel")}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

function ProjectHeading({ children }: { children: React.ReactNode }) {
	return <h4 className="text-4xl text-black dark:text-black font-bold mb-4">{children}</h4>;
}
function Toolbar() {
	return (
		<div className="h-8 bg-zinc-600  flex items-center p-1">
			{/* dots */}
			<div className="flex gap-2 ml-3">
				<div className="w-4 h-4 rounded-full bg-red-400"></div>
				<div className="w-4 h-4 rounded-full bg-white"></div>
				<div className="w-4 h-4 rounded-full bg-green-500"></div>
			</div>
		</div>
	);
}
