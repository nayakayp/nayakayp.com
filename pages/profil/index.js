import Head from "next/head";
import { siteTitle } from "../../components/Layout/Layout";

import { Divider, PageHeading } from "../../components";

const profil = () => {
	return (
		<>
			<Head>
				<title>Artikel - {siteTitle}</title>
			</Head>
			<section className="">
				<PageHeading
					title="Tentang"
					subtitle="Frontend Engineer, Technical Writer and Marathon Runner"
				/>
				<article className="flex flex-col space-y-4">
					<p className="text-lg text-dark-400">
						Lulus di akhir tahun 2019 sebagai sarjana Teknik Elektro, melihat
						adanya ancaman covid di depan mata, apa yang kiranya saya sebagai
						calon pekerja butuhkan di dunia Industri? Skill apa yang kira-kira
						menjadi potensi ke depannya?{" "}
					</p>
					<p className="text-lg text-dark-400">
						Digitalisasi! Setiap orang pasti perlu website. Pada akhirnya
						memutuskan untuk bisa membuat website karena yakin skill ini yang
						sangat membantu dan dibutuhkan banyak orang. Sekaligus ingin
						menuntaskan dengan benar cita-cita dahulu untuk menjadi seorang web
						developer.
					</p>
					<p className="text-lg text-dark-400">
						Ketertarikan dengan pemrograman web ketika bertemu dengan mata
						kuliah algoritma & pemrograman. Betapa kagumnya ketika bisa paham
						dengan pemrograman kita bisa punya alat otomatis yang hanya patuh
						pada perintah kita. Karena dunia pemrograman sangat luas,
						ketertarikan saya lebih condong untuk mempelajari dunia web
						programming. Di sinilah dimulainya saya untuk belajar dasar HTML dan
						CSS.
					</p>
					<p className="text-lg text-dark-400">
						Tapi saya menyerah dengan cepatnya. Karena dirasa sangat sulit &
						lama untuk membuat website sederhana hanya dengan HTML dan CSS,
						akhirnya memutuskan untuk mencari solusi yang lebih mudah untuk
						membuat website. Hingga bertemu dengan Wordpress. Satu kata.
						Powerful! Saya dapat membuat website utuh tanpa programming kurang
						dari 1 pekan. Dari sitluah saya coba tawarkan ke orang terdekat jika
						ingin sebuah website dan akhirnya dapat beberapa projek kecil untuk
						sebagai awal mula freelancing.{" "}
					</p>
					<p className="text-lg text-dark-400">
						Hingga tiba suatu saat ada calon client yang direkomendasikan oleh
						teman. Si calon client butuh bantuan untuk dibuatkan website custom
						untuk sebuah lembaga amil zakat yang lumayan besar, semacam sistem
						informasi berbasis web untuk sekolah dari lembaga tersebut. Tapi
						saya yang saat itu hanya mampu membuat website menggunakan wordpress
						sadar diri untuk tidak mengambil projeknya dan berakhir
						merekomendasikan projek tersebut kepada teman yang mampu untuk
						mengerjakannya.
					</p>
					<p className="text-lg text-dark-400">
						Di sinilah terjadi titik balik, jika saja di awal tidak menyerah
						belajar saya pasti dapat membantu orang memecahkan masalahnya. Tanpa
						tedeng aling-aling dengan motto “falling in love with the pain”,
						hajar terus sampai benar-benar menjadi seorang fullstack developer.
						Selama aplikasinya berbasis web, apapun bisa dibuat dengan
						mengkombinasikan teknologi MERN (MongoDB - ExprerssJS - ReactJS -
						NodeJS).
					</p>
					<p className="text-lg text-dark-400">
						Hal yang patut disyukuri adalah momen ketika hampir selesai belajar
						teknologi MERN, ada tawaran dari seseorang untuk membantu membuat
						website seperti Gumroad, dimana platform ini merupakan e-commerce
						sebagai sarana jualan produk digital dengan sistem pembayaran
						cryptocurrency. My biggest income and project even when i just learn
						fullstack development. And the result? Pemiliknya dapat
						mengotomisasi penjualan, menjadikannya lebih produktif untuk fokus
						pada bisnisnya. Ternyata kesempatan kedua itu ada!
					</p>
					<p className="text-lg text-dark-400">
						Karena bisa web programming akhirnya bisa lebih banyak membantu
						orang yang membutuhkan, bekerja dimanapun, fleksibilitas dalam
						bekerja dan lebih menjadi orang yang produktif.
					</p>
					<p className="text-lg text-dark-400">
						After that? The show just go on, dengan diri ini yang jatuh cinta
						pada dunia pemrograman web karena impact untuk membantu orang lain
						lebih besar. Whether you wanna help someone or build something by
						yourself
					</p>
				</article>
			</section>
		</>
	);
};

export default profil;
