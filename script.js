// --- 1. KAMUS TERJEMAHAN ---
const translations = {
    en: {
        nav_return: "Return Policy",
        nav_legal: "Legal Notices",
        nav_data: "Data Policy",
        rp_title: "Refunds and Returns",
        rp_desc1: "At Zenqor Technologies, all digital product sales (scripts, server setups) are final. Refunds are only issued if the product is proven to be fundamentally broken and our support team cannot resolve the issue within 14 days.",
        rp_desc2: "Please open a ticket in our Discord or email us at info@zenqor.com.my for any inquiries regarding your purchase.",
        lg_title: "Terms of Service & Copyright",
        lg_desc1: "Welcome to Zenqor Technologies. By accessing or using our digital solutions, official corporate website, and FiveM development services, you agree to comply with and be bound by the following terms and conditions of use.",
        lg_desc2: "All content included on this site, such as text, graphics, logos, images, and software, is the property of Zenqor Technologies (SSM: 202603157897 / JM1045730-D) and protected by international copyright laws. Unauthorized reproduction or distribution is strictly prohibited.",
        dp_title: "Privacy & Data Protection",
        dp_desc1: "At Zenqor Technologies, system security and user privacy are our top priorities. We are committed to protecting the personal data you provide us in accordance with applicable data protection regulations.",
        dp_desc2: "We collect only essential information required to deliver our digital and FiveM services. We do not sell or share your personal data with unauthorized third parties. For any vulnerability reports or data deletion requests, please refer to our security policy or contact us directly at info@zenqor.com.my.",
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_contact: "Contact",
        nav_faq: "FAQ", nav_login: "ZT. Login", nav_store: "Store", 
        nav_careers_join: "Join the Zenqor Vanguard",
        nav_port_gaming: "Scripting Projects", nav_port_web: "Server Development",
        hero_badge: "Premium FiveM Development",
        hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
        hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization for gaming communities, enterprises, and digital platforms.",
        btn_portfolio: "View Scripts", btn_contact: "Hire Us",
        stat_1: "Scripts Released", stat_2: "Optimized Servers", stat_3: "Active Players", stat_gov: "Frameworks", stat_4: "Standalone Systems",
        about_title: "The Code Behind <span class='text-primary'>Immersive Roleplay</span>",
        about_sub: "We write clean, efficient, and well-optimized Lua scripts that add real depth to server gameplay without overloading your server resources.",
        tech_1: "Lua Scripting", tech_2: "NUI (HTML/CSS/JS)", tech_3: "MySQL Database", tech_4: "Server Optimization",
        srv_main_title: "Our <span class='text-primary'>Development Services</span>",
        srv_main_sub: "From highly optimized standalone tools to immersive roleplay systems.",
        srv_1_t: "Custom Lua Scripts", srv_1_d: "Tailor-made gameplay scripts including jobs, crime systems, mechanics, and economy.",
        srv_2_t: "Standalone Resources", srv_2_d: "Framework-agnostic tools and utilities that drop cleanly into any FiveM setup.",
        srv_3_t: "NUI & UI Design", srv_3_d: "Modern, responsive, and player-centric NUI interfaces built with HTML, CSS, and JS.",
        srv_4_t: "Framework Integration", srv_4_d: "Seamless compatibility and adaptation for QBCore, ESX, QBox, or custom frameworks.",
        srv_5_t: "Server Optimization", srv_5_d: "Profiling and reducing CPU/RAM usage to ensure stable server performance and high FPS.",
        srv_6_t: "Bug Fixing & Support", srv_6_d: "Troubleshooting legacy code, resolving framework errors, and missing export fixes.",
        srv_7_t: "Database Tuning", srv_7_d: "Optimizing SQL queries and database structures to eliminate server latency.",
        pg_hero_title: "Premium <span class='text-primary'>FiveM Resources</span>",
        pg_hero_sub: "Custom FiveM roleplay server scripting and website UI designs crafted to match your vision and business needs.",
        pg_1_t: "Malaysia Prayer Time & Adhan Notifications",  pg_1_d: "Malaysia Prayer Time & Adhan Notifications is built with a responsive design and provides accurate prayer times based on the official zones and regions of each state, verified by JAKIM.",
        pg_2_t: "Standalone Billing", pg_2_d: "Framework-agnostic invoicing tool that works instantly on any server architecture.",
        pg_3_t: "Immersive Crime System", pg_3_d: "Complex robberies, evidence tracking, and dynamic NPC interactions built in optimized Lua.",
        pw_hero_title: "Complete <span class='text-primary'>Server Setups</span>",
        pw_hero_sub: "Full-stack server configuration and backend architecture.",
        pw_1_t: "QBCore Server Base", pw_1_d: "Fully configured and optimized QBCore base ready for production and heavy roleplay.",
        pw_2_t: "ESX Performance Overhaul", pw_2_d: "Complete refactoring of legacy ESX servers to improve script ms timings and stability.",
        pw_3_t: "Custom Framework Architecture", pw_3_d: "Built-from-scratch server framework tailored exactly to a community's unique mechanics.",
        car_page_badge: "We Are Hiring",
        car_page_title: "Join the <span class='text-primary'>Development Team</span>",
        car_page_sub: "Work with elite Lua scripters and UI designers to build the next generation of FiveM roleplay experiences.",
        perk_1_t: "Remote Work", perk_1_d: "Flexible working hours and 100% remote work opportunities.",
        perk_2_t: "Revenue Sharing", perk_2_d: "Earn percentages from premium scripts sold on our Tebex store.",
        perk_3_t: "Skill Growth", perk_3_d: "Collaborate and learn advanced programming patterns and optimization techniques.",
        perk_4_t: "Modern Tooling", perk_4_d: "Work with the latest IDE setups, version control, and UI design workflows.",
        jobs_title: "Open <span class='text-primary'>Positions</span>",
        job_1_t: "Senior Lua Scripter", job_1_d: "Develop advanced server-side and client-side scripts. Deep knowledge of FiveM natives required.",
        job_2_t: "NUI / Front-End Developer", job_2_d: "Design sleek, modern in-game interfaces using React, Vue, or Vanilla JS.",
        job_3_t: "Server Infrastructure Tech", job_3_d: "Manage VPS/Dedicated servers, database environments, and anti-cheat implementations.",
        btn_apply: "Apply via Discord/Email",
        con_title: "Initialize <span class='text-primary'>Connection</span>",
        con_sub: "Partner with us to engineer your server's next big feature.",
        hq_title: "Headquarters", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Discord Tag / Name", ph_email: "Email Address", 
        opt_def: "Select Request Type", opt_1: "Custom Lua Script", opt_2: "Standalone Resource", opt_3: "NUI / UI Interface", opt_4: "Server Optimization / Bug Fix",
        ph_msg: "Script Specifications / Details", btn_submit: "Send Request",
        footer_sub: "Building Premium Scripts & Server Solutions for FiveM.",
        footer_copy: "© 2026 Zenqor Technologies (Malaysia). All rights reserved.",
        msg_sending: "Sending...", msg_success: "Request Delivered",
        faq_sub: "Find answers to common questions about our products and services.",
        faq_1_q: "How do I purchase a FiveM Script?", faq_1_a: "You can visit our official Tebex store by clicking the 'Store' button on our navigation menu. We support multiple secure payment gateways.",
        faq_2_q: "Do you offer custom server development?", faq_2_a: "Yes, we specialize in complete server setups and tailor-made framework development (QBCore & ESX). Please reach out via the Contact page.",
        faq_3_q: "Is technical support included?", faq_3_a: "Absolutely. All our premium resources come with priority technical support through our official Discord server.",
        
        tos_content: `
            <h3 style="color: var(--text-primary); margin-bottom: 20px; font-size: 1.5rem;">Terms of Service & Copyright</h3>
            <p style="margin-bottom: 15px;">Welcome to Zenqor Technologies. By accessing or using our digital solutions, official corporate website, and FiveM development services, you agree to comply with and be bound by the following terms.</p>
            <p style="margin-bottom: 25px;">Our Terms of Service were last updated on <strong>28 June 2026</strong>. Please read these terms carefully.</p>
            
            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">1. Interpretation and Definitions</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li><strong>"Company"</strong> refers to Zenqor Technologies (SSM: 202603157897 / JM1045730-D).</li>
                <li><strong>"Country"</strong> refers to Malaysia.</li>
                <li><strong>"Service"</strong> refers to our website and digital solutions.</li>
            </ul>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">2. User Accounts & Content</h4>
            <p style="margin-bottom: 15px;">When you create an account with Us, you must provide information that is accurate and complete. You are responsible for safeguarding your password.</p>
            <p style="margin-bottom: 20px;">You are solely responsible for the Content you post. You may not transmit any Content that is unlawful, offensive, defamatory, or infringes on any proprietary rights. We reserve the right to remove inappropriate Content.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">3. Intellectual Property & Copyright</h4>
            <p style="margin-bottom: 20px;">The Service and its original content (such as scripts, logos, and software) are the exclusive property of Zenqor Technologies and are protected by international copyright laws. Unauthorized reproduction or distribution is strictly prohibited.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">4. Limitation of Liability</h4>
            <p style="margin-bottom: 20px;">The entire liability of the Company shall be limited to the amount actually paid by you through the Service. The Service is provided "AS IS" without warranty of any kind.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">5. Governing Law</h4>
            <p style="margin-bottom: 20px;">The laws of Malaysia shall govern these Terms and your use of the Service.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">Contact Us</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li>By visiting our contact page: <a href="contact.html" style="color: var(--primary-blue);">Contact Us</a></li>
                <li>By email: <strong>info@zenqor.com</strong></li>
            </ul>
        `,

        rp_content: `
            <p><strong>Updated at:</strong> 29 June 2026</p>

            <h3>Definitions and key terms</h3>
            <p>To help explain things as clearly as possible in this Return & Refund Policy, every time any of these terms are referenced, are strictly defined as:</p>
            <ul>
                <li><strong>Company:</strong> when this policy mentions "Company," "we," "us," or "our," it refers to Zenqor Technologies, Bandar Mahkota Cheras, 43200 Selangor, Malaysia that is responsible for your information under this Return & Refund Policy.</li>
                <li><strong>Customer:</strong> refers to the company, organization or person that signs up to use the Zenqor Technologies Service to manage the relationships with your consumers or service users.</li>
                <li><strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Zenqor Technologies and use the services.</li>
                <li><strong>Service:</strong> refers to the digital and physical services provided by Zenqor Technologies as described in the relative terms (if available) and on this platform.</li>
                <li><strong>Website:</strong> Zenqor Technologies's site, which can be accessed via this URL.</li>
                <li><strong>You:</strong> a person or entity that is registered with Zenqor Technologies to use the Services.</li>
            </ul>

            <h3>Return & Refund Policy</h3>
            <p>Thanks for shopping at Zenqor Technologies. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you're exploring, evaluating, and purchasing our products.</p>
            <p>As with any shopping experience, there are terms and conditions that apply to transactions at Zenqor Technologies. We'll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Zenqor Technologies, you agree to the terms set forth below along with Zenqor Technologies's Privacy Policy.</p>
            <p>If there's something wrong with the item you bought, or if you are not happy with it, you will not be able to issue a refund for your item.</p>

            <h3>Refunds</h3>
            <p>We at Zenqor Technologies commit ourselves to serving our customers with the best products. Every single product that you choose is thoroughly inspected, checked for defects and packaged with utmost care. We do this to ensure that you fall in love with our products.</p>
            <p>Sadly, there are times when we may not have the product(s) that you choose in stock, or may face some issues with our inventory and quality check. In such cases, we may have to cancel your order. You will be intimated about it in advance so that you don't have to worry unnecessarily about your order. If you have purchased via Online payment (not Cash on Delivery), then you will be refunded once our team confirms your request. Users will be notified by email once a refund is completed.</p>
            <p>We carry out thorough quality check before processing the ordered item. We take utmost care while packing the product. At the same time we ensure that the packing is good such that the items won't get damaged during transit. Please note that Zenqor Technologies is not liable for damages that are caused to the items during transit or transportation.</p>
            
            <p>We follow certain policies to ensure transparency, efficiency and quality customer care:</p>
            <ul>
                <li>We DO NOT allow returns on sold products - online or in retail outlets.</li>
                <li>We DO NOT accept returned goods, as we believe that customers should get the best quality products.</li>
                <li>Refunds are NOT given for any purchases made - be they online or in retail store.</li>
                <li>Products with discounts cannot be refunded.</li>
                <li>We DO NOT encourage exchanges of our products.</li>
                <li>We DO NOT engage in reselling used products and discourage the same, because we cannot ensure the best quality products for our customers.</li>
            </ul>

            <p><strong>Additional Return Conditions (if applicable by exceptions):</strong></p>
            <ul>
                <li>The customer has to pay for the shipping in return.</li>
                <li>The product must have the receipt on the packaging. No refunds can be made without the receipt.</li>
                <li>Every product must come back in its original packaging. Products in new packaging will not be refunded.</li>
                <li>Damaged products cannot be refunded.</li>
            </ul>

            <p>For International Orders:</p>
            <ul>
                <li>We DO NOT support Exchanges or Returns.</li>
                <li>If you cancel the order before we process it and dispatch for shipping, a refund can be processed. Orders generally take 1-2 days to process before dispatch.</li>
                <li>Orders already in shipping cannot be returned, canceled or refunded.</li>
                <li>If you face any issues, please contact our Support Team immediately.</li>
            </ul>

            <h3>Your Consent</h3>
            <p>By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.</p>

            <h3>Changes To Our Return & Refund Policy</h3>
            <p>Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.</p>

            <h3>Contact Us</h3>
            <p>If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.</p>
            <ul>
                <li>Via Email: info@zenqor.com</li>
                <li>Via Phone Number: [Sila masukkan Nombor Telefon di sini]</li>
                <li>Via this Link: <a href="contact.html">Contact Page</a></li>
                <li>Via this Address: Bandar Mahkota Cheras, 43200 Selangor, Malaysia</li>
            </ul>
        `
    },
    ms: {
        nav_return: "Dasar Pemulangan",
        nav_legal: "Notis Perundangan",
        nav_data: "Dasar Data",
        rp_title: "Pemulangan dan Bayaran Balik",
        rp_desc1: "Di Zenqor Technologies, semua jualan produk digital (skrip, tetapan pelayan) adalah muktamad. Bayaran balik hanya dikeluarkan jika produk dibuktikan rosak sepenuhnya dan pasukan sokongan kami tidak dapat menyelesaikan isu tersebut dalam masa 14 hari.",
        rp_desc2: "Sila buka tiket di Discord kami atau e-mel kepada info@zenqor.com.my untuk sebarang pertanyaan mengenai pembelian anda.",
        lg_title: "Terma Perkhidmatan & Hak Cipta",
        lg_desc1: "Selamat datang ke Zenqor Technologies. Dengan mengakses atau menggunakan penyelesaian digital kami, laman web korporat rasmi, dan perkhidmatan pembangunan FiveM, anda bersetuju untuk mematuhi dan terikat dengan terma dan syarat penggunaan berikut.",
        lg_desc2: "Semua kandungan yang terdapat di laman web ini, seperti teks, grafik, logo, imej, dan perisian, adalah hak milik Zenqor Technologies (SSM: 202603157897 / JM1045730-D) dan dilindungi oleh undang-undang hak cipta antarabangsa. Pengeluaran semula atau pengedaran tanpa kebenaran adalah dilarang sama sekali.",
        dp_title: "Privasi & Perlindungan Data",
        dp_desc1: "Di Zenqor Technologies, keselamatan sistem dan privasi pengguna adalah keutamaan kami. Kami komited untuk melindungi data peribadi yang anda berikan kepada kami selaras dengan peraturan perlindungan data yang berkuat kuasa.",
        dp_desc2: "Kami hanya mengumpul maklumat penting yang diperlukan untuk menyampaikan perkhidmatan digital dan FiveM kami. Kami tidak menjual atau berkongsi data peribadi anda dengan pihak ketiga yang tidak dibenarkan. Untuk sebarang laporan kerentanan atau permintaan pemadaman data, sila rujuk dasar keselamatan kami atau hubungi kami terus di info@zenqor.com.my.",
        nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_contact: "Hubungi",
        nav_faq: "FAQ", nav_login: "ZT. Login", nav_store: "Kedai", 
        nav_careers_join: "Sertai Zenqor Vanguard",
        nav_port_gaming: "Projek Skrip", nav_port_web: "Pembangunan Pelayan",
        hero_badge: "Pembangunan FiveM Premium",
        hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
        hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas (standalone resources), dan pengoptimuman pelayan untuk komuniti permainan, perusahaan, serta platform digital.",
        btn_portfolio: "Lihat Skrip", btn_contact: "Lantik Kami",
        stat_1: "Skrip Dilancarkan", stat_2: "Pelayan Dioptimumkan", stat_3: "Pemain Aktif", stat_gov: "Frameworks", stat_4: "Sistem Standalone",
        about_title: "Kod Di Sebalik <span class='text-primary'>Roleplay Imersif</span>",
        about_sub: "Kami menulis skrip Lua yang kemas, efisien, dan dioptimumkan untuk menambah kedalaman corak permainan tanpa membebankan sumber pelayan anda.",
        tech_1: "Pengaturcaraan Lua", tech_2: "NUI (HTML/CSS/JS)", tech_3: "Pangkalan Data MySQL", tech_4: "Pengoptimuman Pelayan",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Pembangunan Kami</span>",
        srv_main_sub: "Daripada alatan standalone yang dioptimumkan kepada sistem 'roleplay' yang menyeluruh.",
        srv_1_t: "Skrip Lua Tersuai", srv_1_d: "Skrip permainan khas termasuk sistem pekerjaan, jenayah, mekanik, dan ekonomi.",
        srv_2_t: "Sumber Standalone", srv_2_d: "Alatan bebas framework yang mudah disepadukan terus ke dalam mana-mana pelayan FiveM.",
        srv_3_t: "Reka Bentuk NUI & UI", srv_3_d: "Antara muka NUI yang moden, responsif dan memfokuskan pemain menggunakan HTML, CSS, dan JS.",
        srv_4_t: "Integrasi Framework", srv_4_d: "Keserasian penuh dan penyesuaian untuk QBCore, ESX, QBox, atau framework tersuai.",
        srv_5_t: "Pengoptimuman Pelayan", srv_5_d: "Memantau dan mengurangkan penggunaan CPU/RAM untuk memastikan pelayan stabil dengan FPS tinggi.",
        srv_6_t: "Pembaikan Pepijat", srv_6_d: "Menyelesaikan isu kod lama, membaiki ralat framework, dan isu 'missing export'.",
        srv_7_t: "Konfigurasi Pangkalan Data", srv_7_d: "Mengoptimumkan pertanyaan SQL dan struktur pangkalan data untuk menghapuskan kelengahan (latency).",
        pg_hero_title: "Sumber FiveM <span class='text-primary'>Premium</span>",
        pg_hero_sub: "Skrip tersuai untuk pelayan roleplay FiveM serta reka bentuk UI laman web yang disesuaikan mengikut visi dan keperluan perniagaan anda.",
        pg_1_t: "Notifikasi Waktu Solat & Azan Malaysia", pg_1_d: "Notifikasi Waktu Solat & Azan Malaysia dibangunkan secara responsif dengan waktu solat yang tepat mengikut zon dan kawasan setiap negeri berdasarkan data yang disahkan oleh JAKIM.",
        pg_2_t: "Sistem Bil Standalone", pg_2_d: "Alatan invois bebas framework yang berfungsi serta-merta pada sebarang seni bina pelayan.",
        pg_3_t: "Sistem Jenayah Imersif", pg_3_d: "Sistem rompakan kompleks, penjejakan bukti, dan interaksi NPC dinamik dalam Lua yang dioptimumkan.",
        pw_hero_title: "Persediaan <span class='text-primary'>Pelayan Lengkap</span>",
        pw_hero_sub: "Konfigurasi penuh pelayan dan pembinaan seni bina sistem belakang (backend).",
        pw_1_t: "Asas Pelayan QBCore", pw_1_d: "Sistem asas QBCore yang telah dikonfigurasi sepenuhnya dan sedia untuk persekitaran pengeluaran serta 'roleplay' berskala besar.",
        pw_2_t: "Peningkatan Prestasi ESX", pw_2_d: "Penulisan semula kod pelayan ESX lama untuk membaiki kelajuan skrip (ms) dan kestabilan sistem.",
        pw_3_t: "Seni Bina Framework Tersuai", pw_3_d: "Membina framework pelayan dari asas, direka khusus mengikut mekanik unik sesebuah komuniti.",
        car_page_badge: "Kami Sedang Mengambil Pekerja",
        car_page_title: "Sertai <span class='text-primary'>Pasukan Pembangunan</span>",
        car_page_sub: "Bekerjasama dengan pengaturcara Lua dan pereka UI elit untuk membina masa hadapan pengalaman roleplay FiveM.",
        perk_1_t: "Kerja Jarak Jauh", perk_1_d: "Waktu kerja yang fleksibel dengan 100% peluang bekerja dari rumah.",
        perk_2_t: "Perkongsian Keuntungan", perk_2_d: "Raih peratusan daripada jualan skrip premium di kedai Tebex kami.",
        perk_3_t: "Pembangunan Kemahiran", perk_3_d: "Bekerjasama dan pelajari teknik pengoptimuman serta corak pengaturcaraan peringkat tinggi.",
        perk_4_t: "Alatan Moden", perk_4_d: "Bekerja dengan tetapan IDE terkini, kawalan versi, dan aliran kerja reka bentuk UI moden.",
        jobs_title: "Jawatan <span class='text-primary'>Kosong</span>",
        job_1_t: "Pengaturcara Lua Kanan", job_1_d: "Membangunkan skrip pelayan (server-side) dan pelanggan (client-side). Pengalaman mendalam tentang 'natives' FiveM diperlukan.",
        job_2_t: "Pembangun NUI / Muka Depan (Front-End)", job_2_d: "Mereka bentuk antara muka moden dan kemas dalam permainan menggunakan React, Vue, atau Vanilla JS.",
        job_3_t: "Juruteknik Infrastruktur Pelayan", job_3_d: "Menguruskan pelayan VPS/Dedicated, persekitaran pangkalan data, dan pelaksanaan sistem anti-cheat.",
        btn_apply: "Mohon melalui Discord/E-mel",
        con_title: "Mulakan <span class='text-primary'>Hubungan</span>",
        con_sub: "Bekerjasama dengan kami untuk merealisasikan ciri hebat pelayan anda yang seterusnya.",
        hq_title: "Ibu Pejabat", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Tag Discord / Nama", ph_email: "Alamat E-mel", 
        opt_def: "Pilih Jenis Permintaan", opt_1: "Skrip Lua Tersuai", opt_2: "Sumber Standalone", opt_3: "Antara Muka NUI / UI", opt_4: "Pengoptimuman Pelayan / Pembaikan Ralat",
        ph_msg: "Spesifikasi / Butiran Skrip", btn_submit: "Hantar Permintaan",
        footer_sub: "Membina Skrip Premium & Penyelesaian Pelayan untuk FiveM.",
        footer_copy: "© 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara.",
        msg_sending: "Menghantar...", msg_success: "Permintaan Berjaya Dihantar",
        faq_sub: "Cari jawapan bagi persoalan lazim mengenai produk dan perkhidmatan kami.",
        faq_1_q: "Bagaimana cara untuk saya membeli Skrip FiveM?", faq_1_a: "Anda boleh melawat kedai rasmi Tebex kami dengan mengklik butang 'Kedai' pada menu navigasi. Kami menyokong pelbagai gerbang pembayaran yang selamat.",
        faq_2_q: "Adakah anda menyediakan perkhidmatan pembangunan pelayan (server) tersuai?", faq_2_a: "Ya, kami pakar dalam persediaan pelayan lengkap dan pembangunan framework tersuai (QBCore & ESX). Sila hubungi kami melalui halaman Hubungi.",
        faq_3_q: "Adakah bantuan teknikal disediakan?", faq_3_a: "Sudah tentu. Semua sumber premium kami didatangkan dengan bantuan teknikal keutamaan melalui pelayan Discord rasmi kami.",
        
        tos_content: `
            <h3 style="color: var(--text-primary); margin-bottom: 20px; font-size: 1.5rem;">Terma Perkhidmatan & Hak Cipta</h3>
            <p style="margin-bottom: 15px;">Selamat datang ke Zenqor Technologies. Dengan mengakses atau menggunakan penyelesaian digital, laman web korporat rasmi, dan perkhidmatan pembangunan FiveM kami, anda bersetuju untuk mematuhi dan terikat dengan terma berikut.</p>
            <p style="margin-bottom: 25px;">Terma Perkhidmatan kami terakhir dikemas kini pada <strong>28 Jun 2026</strong>. Sila baca terma ini dengan teliti.</p>
            
            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">1. Tafsiran dan Definisi</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li><strong>"Syarikat"</strong> merujuk kepada Zenqor Technologies (SSM: 202603157897 / JM1045730-D).</li>
                <li><strong>"Negara"</strong> merujuk kepada Malaysia.</li>
                <li><strong>"Perkhidmatan"</strong> merujuk kepada laman web dan penyelesaian digital kami.</li>
            </ul>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">2. Akaun Pengguna & Kandungan</h4>
            <p style="margin-bottom: 15px;">Apabila anda membuat akaun dengan Kami, anda mesti memberikan maklumat yang tepat dan lengkap. Anda bertanggungjawab untuk menjaga kata laluan anda.</p>
            <p style="margin-bottom: 20px;">Anda bertanggungjawab sepenuhnya terhadap Kandungan yang anda siarkan. Anda tidak dibenarkan menghantar sebarang Kandungan yang menyalahi undang-undang, menyinggung perasaan, memfitnah, atau melanggar sebarang hak milik. Kami berhak untuk memadam Kandungan yang tidak sesuai.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">3. Harta Intelek & Hak Cipta</h4>
            <p style="margin-bottom: 20px;">Perkhidmatan dan kandungan asalnya (seperti skrip, logo, dan perisian) adalah hak milik eksklusif Zenqor Technologies dan dilindungi oleh undang-undang hak cipta antarabangsa. Pengeluaran semula atau pengedaran tanpa kebenaran adalah dilarang sama sekali.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">4. Had Liabiliti</h4>
            <p style="margin-bottom: 20px;">Keseluruhan liabiliti Syarikat adalah terhad kepada jumlah yang sebenarnya dibayar oleh anda melalui Perkhidmatan. Perkhidmatan disediakan "SEBAGAIMANA ADANYA" tanpa sebarang jaminan.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">5. Undang-undang yang Mengawal</h4>
            <p style="margin-bottom: 20px;">Undang-undang Malaysia akan mengawal Terma ini dan penggunaan Perkhidmatan oleh anda.</p>

            <h4 style="color: var(--text-primary); margin-top: 20px; margin-bottom: 10px;">Hubungi Kami</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li>Melalui halaman hubungan kami: <a href="contact.html" style="color: var(--primary-blue);">Hubungi Kami</a></li>
                <li>Melalui e-mel: <strong>info@zenqor.com</strong></li>
            </ul>
        `,

        rp_content: `
            <p><strong>Dikemas kini pada:</strong> 29 Jun 2026</p>

            <h3>Definisi dan terma utama</h3>
            <p>Untuk membantu menerangkan perkara sejelas mungkin dalam Polisi Pemulangan & Bayaran Balik ini, setiap kali mana-mana terma ini dirujuk, ia ditakrifkan dengan tegas sebagai:</p>
            <ul>
                <li><strong>Syarikat:</strong> apabila polisi ini menyebut "Syarikat," "kami," atau "kita," ia merujuk kepada Zenqor Technologies, Bandar Mahkota Cheras, 43200 Selangor, Malaysia yang bertanggungjawab ke atas maklumat anda di bawah Polisi Pemulangan & Bayaran Balik ini.</li>
                <li><strong>Pelanggan:</strong> merujuk kepada syarikat, organisasi atau individu yang mendaftar untuk menggunakan Perkhidmatan Zenqor Technologies.</li>
                <li><strong>Peranti:</strong> sebarang peranti yang bersambung ke internet seperti telefon, tablet, komputer atau peranti lain yang boleh digunakan untuk melawati Zenqor Technologies.</li>
                <li><strong>Perkhidmatan:</strong> merujuk kepada perkhidmatan digital dan fizikal yang disediakan oleh Zenqor Technologies seperti yang diterangkan dalam terma berkaitan di platform ini.</li>
                <li><strong>Laman Web:</strong> tapak Zenqor Technologies, yang boleh diakses melalui URL ini.</li>
                <li><strong>Anda:</strong> individu atau entiti yang berdaftar dengan Zenqor Technologies.</li>
            </ul>

            <h3>Polisi Pemulangan & Bayaran Balik</h3>
            <p>Terima kasih kerana membeli-belah di Zenqor Technologies. Kami menghargai hakikat bahawa anda gemar membeli apa yang kami bina. Kami juga ingin memastikan anda mempunyai pengalaman yang memuaskan semasa meneroka dan membeli produk kami.</p>
            <p>Seperti mana-mana pengalaman membeli-belah, terdapat terma dan syarat yang terpakai untuk transaksi di Zenqor Technologies. Perkara utama yang perlu diingat ialah dengan membuat pesanan atau pembelian di Zenqor Technologies, anda bersetuju dengan terma yang dinyatakan di bawah berserta Dasar Privasi Zenqor Technologies.</p>
            <p>Jika terdapat masalah dengan item yang anda beli, atau jika anda tidak berpuas hati dengannya, anda tidak akan dapat memohon bayaran balik untuk item tersebut.</p>

            <h3>Bayaran Balik</h3>
            <p>Kami di Zenqor Technologies komited untuk melayani pelanggan kami dengan produk terbaik. Setiap produk yang anda pilih diperiksa dengan teliti, disemak untuk sebarang kecacatan dan dibungkus dengan berhati-hati.</p>
            <p>Malangnya, ada kalanya kami mungkin tidak mempunyai produk yang anda pilih dalam stok, atau mungkin menghadapi isu inventori. Dalam kes sedemikian, kami mungkin terpaksa membatalkan pesanan anda. Anda akan dimaklumkan lebih awal. Jika anda telah membuat pembelian melalui pembayaran Dalam Talian (bukan Tunai Semasa Penghantaran), anda akan dibayar balik setelah pasukan kami mengesahkan permintaan anda. Pengguna akan dimaklumkan melalui e-mel setelah pemulangan wang selesai.</p>
            <p>Kami menjalankan pemeriksaan kualiti menyeluruh sebelum memproses item. Sila ambil perhatian bahawa Zenqor Technologies tidak bertanggungjawab untuk kerosakan yang disebabkan pada item semasa transit atau pengangkutan.</p>
            
            <p>Kami mematuhi dasar tertentu untuk memastikan ketelusan, kecekapan dan penjagaan pelanggan yang berkualiti:</p>
            <ul>
                <li>Kami TIDAK membenarkan pemulangan pada produk yang telah dijual.</li>
                <li>Kami TIDAK menerima barangan yang dipulangkan.</li>
                <li>Bayaran balik TIDAK diberikan untuk sebarang pembelian yang dibuat.</li>
                <li>Produk dengan diskaun tidak boleh dibayar balik.</li>
                <li>Kami TIDAK menggalakkan pertukaran produk kami.</li>
                <li>Kami TIDAK terlibat dalam menjual semula produk terpakai.</li>
            </ul>

            <p><strong>Syarat Pemulangan Tambahan (jika berkenaan melalui pengecualian):</strong></p>
            <ul>
                <li>Pelanggan perlu membayar kos penghantaran untuk pemulangan.</li>
                <li>Produk mesti mempunyai resit pada pembungkusan. Tiada bayaran balik akan dibuat tanpa resit.</li>
                <li>Setiap produk mesti dipulangkan dalam pembungkusan asalnya. Produk dalam pembungkusan baharu tidak akan dibayar balik.</li>
                <li>Produk yang rosak tidak boleh dibayar balik.</li>
            </ul>

            <p>Untuk Pesanan Antarabangsa:</p>
            <ul>
                <li>Kami TIDAK menyokong Pertukaran atau Pemulangan.</li>
                <li>Jika anda membatalkan pesanan sebelum kami memprosesnya untuk penghantaran, bayaran balik boleh diproses. Pesanan biasanya mengambil masa 1-2 hari untuk diproses.</li>
                <li>Pesanan yang sudah dalam penghantaran tidak boleh dikembalikan, dibatalkan atau dibayar balik.</li>
                <li>Jika anda menghadapi sebarang masalah, sila hubungi Pasukan Sokongan kami dengan segera.</li>
            </ul>

            <h3>Persetujuan Anda</h3>
            <p>Dengan menggunakan laman web kami, mendaftar akaun, atau membuat pembelian, anda dengan ini bersetuju dengan Polisi Pemulangan & Bayaran Balik kami dan bersetuju dengan termanya.</p>

            <h3>Perubahan Kepada Polisi Kami</h3>
            <p>Jika kami mengemas kini atau membuat sebarang perubahan pada dokumen ini, perubahan tersebut akan disiarkan secara jelas di sini. Jika anda tidak mahu bersetuju dengan Polisi ini, anda boleh memadamkan akaun anda.</p>

            <h3>Hubungi Kami</h3>
            <p>Jika, atas sebarang sebab, anda tidak berpuas hati dengan mana-mana barangan atau perkhidmatan yang kami sediakan, jangan teragak-agak untuk menghubungi kami.</p>
            <ul>
                <li>Melalui E-mel: info@zenqor.com</li>
                <li>Melalui Nombor Telefon: [Sila masukkan Nombor Telefon di sini]</li>
                <li>Melalui Pautan ini: <a href="contact.html">Halaman Hubungan</a></li>
                <li>Melalui Alamat ini: Bandar Mahkota Cheras, 43200 Selangor, Malaysia</li>
            </ul>
        `
    }
};

// --- 2. MULTI-LANGUAGE SYSTEM ---
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zenqor-lang', lang);
    document.documentElement.lang = lang;
    
    if(langToggle) {
        langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

if(langToggle) {
    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ms' : 'en');
    });
}
setLanguage(currentLang);

// --- 3. MULTI-DROPDOWN POP-UP LOGIC ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = toggle.getAttribute('data-target');
        const menu = document.getElementById(targetId);
        
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        
        menu.classList.toggle('show');
    });
});

window.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// --- 4. MOBILE MENU ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

if(navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if(e.target.closest('.dropdown-toggle')) return;
            navLinks.classList.remove('active');
        });
    });
}

// --- 5. SCROLL ANIMATION (REVEAL) ---
const revealElements = document.querySelectorAll('.reveal');
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// --- 6. CONTACT FORM SIMULATION ---
const form = document.getElementById('mainContactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = translations[currentLang]['btn_submit'];
        
        btn.textContent = translations[currentLang]['msg_sending'];
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = translations[currentLang]['msg_success'];
            btn.style.background = '#059669'; 
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1200);
    });
}

// --- 7. SCROLL TO TOP & WIDGETS ---
const scrollToTopBtn = document.getElementById('scrollToTop');
if(scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) scrollToTopBtn.classList.add('show');
        else scrollToTopBtn.classList.remove('show');
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

// --- 8. FAQ ACCORDION ---
const faqBtns = document.querySelectorAll('.faq-btn');
faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        const content = btn.nextElementSibling;
        const isActive = parent.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-content').style.maxHeight = null;
        });
        
        // Open if it wasn't active
        if(!isActive) {
            parent.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});