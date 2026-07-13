import React from 'react'

function App() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-frame">
            <p className="hero-subtitle">00:00:00:01 /// COMPANY PROFILE & PRICE LIST</p>
            <h1 className="hero-title">MADILOG.STUDIO</h1>
            <p className="hero-tagline">Aschariudin — Videographer & Video Editor Freelance</p>
            <div className="hero-divider"></div>
            <div className="hero-footer">
              <div>
                <p>MADILOG STUDIO</p>
                <p>Kabupaten Jember, Jawa Timur</p>
              </div>
              <div>
                <p>Email |</p>
                <p>madilogstudio@gmail.com</p>
                <p>Instagram | @madilog.studio</p>
              </div>
              <div>
                <p>2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:01 — TENTANG KAMI</p>
            <h2 className="section-title">Satu Orang, Tim Produksi Lengkap</h2>
            <div className="section-divider"></div>
          </div>
          <p style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
            MADILOG STUDIO adalah layanan videografi & editing yang diperkenalkan oleh Aschariudin,
            berbasis di Jember, Jawa Timur. Dari perencanaan konsep, eksekusi syuting, sampai editing
            akhir akan saya kerjakan sendiri untuk menjaga kualitas serta memastikan pesan bisa
            tersampaikan dengan intonasi visual sesuai harapan.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">KAMERA & VISUAL</h3>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>iPhone 14 Pro — Kamera utama & konten retail</li>
                <li>Sony A6000</li>
                <li>DJI Air 2 — Aerial shots</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">AUDIO & PRODUKSI</h3>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>Mic Wireless 0.8 — Audio bersih di luar ruangan</li>
                <li>Mic Rode Go — Audio untuk narasi & V.O</li>
                <li>Lampu Hawkeye 014 — Lighting saat shooting & grading</li>
              </ul>
            </div>
          </div>
          <div className="service-cards">
            <div className="service-card">
              <p className="service-number">1</p>
            </div>
            <div className="service-card">
              <p className="service-number">3</p>
            </div>
            <div className="service-card">
              <p className="service-number" style={{ textAlign: 'right' }}>AERIAL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Layanan */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:02 — MODEL LAYANAN</p>
            <h2 className="section-title">Tiga Lapis Layanan, Satu Alur Kerja</h2>
            <div className="section-divider"></div>
          </div>
          <p style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
            Layanan dibagi dalam tiga model agar bisa lebih fleksibel. Kebutuhan kecil bisa jadi proyek kecil,
            kebutuhan besar bisa jadi kontrak besar, begitu pula kebutuhan tambahan bisa jadi pesanan terpisah.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">Satuan (Project-Based)</h3>
              <p style={{ fontSize: '0.85rem' }}>
                Layanan untuk proyek satu kali selesai, seperti video company profile, video promosi produk, dll.
                Cocok untuk kebutuhan yang spesifik dan jelas tenggatnya.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Retainer Bulanan</h3>
              <p style={{ fontSize: '0.85rem' }}>
                Layanan kontrak bulanan untuk kebutuhan konten rutin, seperti konten sosial media, video harian, dll.
                Cocok untuk brand yang butuh aset visual terus-menerus tanpa ribet.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Add-On & Upsell</h3>
              <p style={{ fontSize: '0.85rem' }}>
                Layanan tambahan di luar paket utama, seperti shooting ekstra hari, revisi lebih banyak, output lebih banyak, dll.
                Bisa ditambahkan kapan saja sesuai kebutuhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">01:00 — PORTFOLIO</p>
            <h2 className="section-title">Portofolio</h2>
            <div className="section-divider"></div>
          </div>
          <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
            Scan barcode untuk melihat beberapa proyek video yang pernah saya buat.
          </p>
          <div className="qr-container">
            <div className="qr-box">
              <div className="qr-code">QR CODE</div>
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>portfolio web</p>
            </div>
            <div className="brand-links">
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-orange)' }}>01</span> Link akun Brand yang Dikelola
              </p>
              <div className="brand-link-item">
                <span>SMA BUDI UTOMO</span> — <a href="https://www.instagram.com/smabudiutamojember/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/smabudiutamojember/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>SMA BUDI UTOMO</span> — <a href="https://www.instagram.com/smabudiutomoedugramav/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/smabudiutomoedugramav/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>NR Beauty</span> — <a href="https://www.instagram.com/nrbeauty_official/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/nrbeauty_official/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>Maton Coffee</span> — <a href="https://www.instagram.com/matoncoffee_jember/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/matoncoffee_jember/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>Desution Coffee</span> — <a href="https://www.instagram.com/desution.coffee/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/desution.coffee/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>Sama Coffee</span> — <a href="https://www.instagram.com/sama.coffee.id/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/sama.coffee.id/?hl=id</a>
              </div>
              <div className="brand-link-item">
                <span>Pesona Cosmetics Store</span> — <a href="https://www.instagram.com/pesona_cosmeticsofficial/?hl=id" target="_blank" rel="noopener noreferrer">https://www.instagram.com/pesona_cosmeticsofficial/?hl=id</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Pasar */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:02 — TARGET PASAR</p>
            <h2 className="section-title">Target Klien Prioritas</h2>
            <div className="section-divider"></div>
          </div>
          <ul className="target-list">
            <li className="target-item">
              <span className="target-letter">A</span>
              <div>
                <strong>UMKM / Cafe / Rekan Lokal</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  Prioritas utama — mudah ditemui langsung, kebutuhan tidak terlalu besar tapi rutin &amp; terus.
                </p>
              </div>
            </li>
            <li className="target-item">
              <span className="target-letter">B</span>
              <div>
                <strong>Digital Agency</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  Soalnya &amp; bisa ketemu langsung — agency butuh editor/video shooter freelance, cuma modal kenalan.
                </p>
              </div>
            </li>
            <li className="target-item">
              <span className="target-letter">C</span>
              <div>
                <strong>Brand / TikTok Shop / Shopee</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  Pesan lumayan banyak, cocok dengan model retainer volume besar.
                </p>
              </div>
            </li>
            <li className="target-item">
              <span className="target-letter">D</span>
              <div>
                <strong>Properti &amp; Event Organizer</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  Layanan premium — jenjang kerja sedikit lebih luas, harga jauh tinggi.
                </p>
              </div>
            </li>
            <li className="target-item">
              <span className="target-letter">E</span>
              <div>
                <strong>Influencer / Personal Brand</strong>
                <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  Fleksibel, rencana tapi personal &amp; konsep tidak tergesa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Price List */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:03 — PRICE LIST</p>
            <h2 className="section-title">Daftar Harga</h2>
            <div className="section-divider"></div>
          </div>
          <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
            Semua harga Negosiasi Rupiah (IDR). Jumlah bisa naik/turun — menyesuaikan kompleksitas &amp; durasi pengerjaan.
          </p>
          <div className="pricing-table">
            <div className="pricing-row pricing-header">
              <div>Layanan</div>
              <div>Keterangan</div>
              <div>Rentang Harga</div>
            </div>
            <div className="pricing-row">
              <div>Editing (video jadi)</div>
              <div>Harga dasar tanpa syuting</div>
              <div className="pricing-price">Rp150.000 - Rp500.000</div>
            </div>
            <div className="pricing-row">
              <div>Rumah vide + edit retail</div>
              <div>Tanpa konsep, sesi simple</div>
              <div className="pricing-price">Rp300.000 - Rp700.000</div>
            </div>
            <div className="pricing-row">
              <div>Company profile</div>
              <div>Shooting + edit + konsep</div>
              <div className="pricing-price">Rp1.500.000 - Rp3.500.000</div>
            </div>
            <div className="pricing-row">
              <div>Produk promo / iklan</div>
              <div>Shooting + edit + konsep</div>
              <div className="pricing-price">Rp500.000 - Rp2.000.000</div>
            </div>
            <div className="pricing-row">
              <div>Reel produk 30 video</div>
              <div>Shooting batch + edit (3-4 hari)</div>
              <div className="pricing-price">Rp2.500.000 - Rp4.000.000</div>
            </div>
            <div className="pricing-row">
              <div>Dokumentasi event / restoran profile</div>
              <div>Shooting + edit</div>
              <div className="pricing-price">Rp1.000.000 - Rp3.000.000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Price List (Lanjutan) */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:04 — PRICE LIST (LANJUTAN)</p>
            <h2 className="section-title">Dokumentasi Event &amp; Retainer Bulanan</h2>
            <div className="section-divider"></div>
          </div>
          <div className="pricing-table">
            <div className="pricing-row pricing-header">
              <div>Layanan</div>
              <div>Keterangan</div>
              <div>Rentang Harga</div>
            </div>
            <div className="pricing-row">
              <div>Dokumentasi event (satuan)</div>
              <div>1 acara, 1 hari</div>
              <div className="pricing-price">Rp800.000 - Rp1.500.000</div>
            </div>
            <div className="pricing-row">
              <div>+ Tambahan kamera</div>
              <div>Multi angle</div>
              <div className="pricing-price">+ Rp200.000 - Rp300.000</div>
            </div>
            <div className="pricing-row">
              <div>+ Tambahan drone</div>
              <div>Shooting aerial</div>
              <div className="pricing-price">+ Rp300.000</div>
            </div>
            <div className="pricing-row" style={{ backgroundColor: '#2d2d44' }}>
              <div><strong>RETAINER BULANAN</strong></div>
              <div></div>
              <div></div>
            </div>
            <div className="pricing-row">
              <div>Paket 8 video / bulan</div>
              <div>Termasuk konsep &amp; shooting (max 2 hari syuting)</div>
              <div className="pricing-price">Rp1.800.000 - Rp2.500.000</div>
            </div>
            <div className="pricing-row">
              <div>Paket 15 video / bulan</div>
              <div>Termasuk konsep &amp; shooting (max 4 hari syuting)</div>
              <div className="pricing-price">Rp3.000.000 - Rp4.000.000</div>
            </div>
            <div className="pricing-row">
              <div>Dokumentasi kontrak 3 bulan</div>
              <div>Diskon paket panjang</div>
              <div className="pricing-price">Diskon 10-15%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Price List (Tambahan) */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:04 — PRICE LIST (LANJUTAN)</p>
            <h2 className="section-title">Layanan Tambahan</h2>
            <div className="section-divider"></div>
          </div>
          <div className="pricing-table">
            <div className="pricing-row pricing-header">
              <div>Layanan</div>
              <div>Keterangan</div>
              <div>Rentang Harga</div>
            </div>
            <div className="pricing-row">
              <div>Store shooting (biaya per hari)</div>
              <div>Libur tanpa edit</div>
              <div className="pricing-price">Rp400.000 - Rp600.000</div>
            </div>
            <div className="pricing-row">
              <div>Store shooting (biaya per hari) + edit paket</div>
              <div>Edit sesuai jumlah output</div>
              <div className="pricing-price">Rp600.000 - Rp1.200.000</div>
            </div>
            <div className="pricing-row">
              <div>Same-day highlight event</div>
              <div>Edit langsung di hari yang sama</div>
              <div className="pricing-price">+ Rp300.000 - Rp500.000</div>
            </div>
            <div className="pricing-row">
              <div>Penambahan video panjang</div>
              <div>Per video tambahan</div>
              <div className="pricing-price">+ Rp150.000 - Rp300.000</div>
            </div>
            <div className="pricing-row">
              <div>Konsep &amp; storyboard (60 menit)</div>
              <div>Rapat konsep</div>
              <div className="pricing-price">+ Rp150.000</div>
            </div>
            <div className="pricing-row">
              <div>Buat Iklan</div>
              <div>Iklan reel / iklan panjang</div>
              <div className="pricing-price">Rp300.000 - Rp1.000.000</div>
            </div>
            <div className="pricing-row">
              <div>Tambah revision</div>
              <div>Lebih dari 3x revisi</div>
              <div className="pricing-price">+ Rp50.000 - Rp100.000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alur Kerja */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:05 — ALUR KERJA</p>
            <h2 className="section-title">Dari Brief Sampai Tayang</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>01</p>
              <p style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>02</p>
              <p style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>03</p>
              <p style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>04</p>
              <p style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>05</p>
            </div>
            <div>
              <p style={{ marginBottom: '1.3rem' }}><strong>Brief &amp; Perencanaan</strong><br />
              Diskusi kebutuhan, tujuan, dan pengerjaan yang akan kita buat.</p>
              <p style={{ marginBottom: '1.3rem' }}><strong>Konsepplan &amp; Gop</strong><br />
              Rencana shooting, list angle, dan daftar barang yang perlu disiapkan.</p>
              <p style={{ marginBottom: '1.3rem' }}><strong>Shooting/Pengambilan Video</strong><br />
              Pengambilan gambar sesuai konsep yang sudah disepakati.</p>
              <p style={{ marginBottom: '1.3rem' }}><strong>Editing &amp; Review</strong><br />
              Pengerjaan edit, review, revisi, sampai hasil sesuai harapan.</p>
              <p><strong>Pengiriman File Final</strong><br />
              File dikirim dalam resolusi terbaik dan mudah dibagikan.</p>
            </div>
          </div>
          <div className="card">
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>CATATAN KHUSUS UNTUK PENGGUNAAN</p>
            <p style={{ fontSize: '0.85rem' }}>
              — Selalu siapkan DP 50% di depan (proyek) atau pembayaran diawal (retainer) sebelum pengerjaan.<br />
              — Harga bisa menyesuaikan, tapi jangan sampai mempengaruhi kualitas hasil akhir.<br />
              — Add-on revision, bisa dijelaskan di depan untuk menghindari kesalahpahaman.
            </p>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section>
        <div className="container">
          <div className="section-header">
            <p className="section-number">00:06 — KONTAK</p>
            <h2 className="section-title">Siap Mulai Produksi?</h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-box">
              <p className="contact-title">KONTAK</p>
              <div className="contact-item">Nama: Aschariudin</div>
              <div className="contact-item">Posisi: Video Editor &amp; Videographer</div>
              <div className="contact-item">Kabupaten Jember, Jawa Timur</div>
              <div className="contact-item">WhatsApp: —</div>
              <div className="contact-item">Instagram: @madilog.studio</div>
              <div className="contact-item">Email: madilogstudio@gmail.com</div>
            </div>
            <div className="contact-box">
              <p className="contact-title">SILAHKAN BRIEF KITA</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                Ceritakan secara singkat apa kebutuhan Anda — akan saya cek terlebih dahulu.<br />
                Estimasi harga dan waktu bisa saya bikin sekalian untuk gambaran awal.
              </p>
              <p className="contact-cta">TERIMA KASIH</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
