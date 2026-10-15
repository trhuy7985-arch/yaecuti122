<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ thống Học tập - YAECUTE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Thư viện Socket.io Client CDN (An toàn khi chạy trên GitHub Pages) -->
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>

    <!-- Thư viện MathJax -->
    <script>
        MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f3f4f6;
        }
        .text-navy { color: #1a365d; }
        .text-custom-red { color: #c51624; }
        .bg-custom-red { background-color: #c51624; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        .nav-item.active {
            background-color: #fef2f2;
            color: #c51624;
            font-weight: 700;
            border: 1px solid #fee2e2;
        }
        .nav-item.active i {
            color: #c51624 !important;
        }

        .watermark-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            opacity: 0.04;
            overflow: hidden;
            z-index: 0;
            transform: rotate(-15deg) scale(1.5);
        }
        .watermark-text {
            font-size: 24px;
            font-weight: bold;
            color: #000;
            padding: 40px;
            white-space: nowrap;
        }

        .custom-radio {
            width: 24px;
            height: 24px;
            border: 2px solid #cbd5e1;
            border-radius: 50%;
            cursor: pointer;
            display: inline-block;
            position: relative;
        }
        .custom-radio.selected {
            border-color: #3b82f6;
        }
        .custom-radio.selected::after {
            content: '';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 12px; height: 12px;
            background-color: #3b82f6;
            border-radius: 50%;
        }

        @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-view {
            animation: fadeSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* === CSS CHO TRỢ LÝ GEMINI === */
        .gemini-fab {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #1A73E8, #8AB4F8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(26, 115, 232, 0.4);
            cursor: pointer;
            z-index: 100;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gemini-fab:hover {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 6px 20px rgba(26, 115, 232, 0.6);
        }

        .gemini-chat-panel {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 350px;
            height: 500px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 99;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px) scale(0.95);
            transform-origin: bottom right;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gemini-chat-panel.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }
        
        .sparkle-icon {
            color: white;
            font-size: 28px;
            filter: drop-shadow(0 0 2px rgba(255,255,255,0.8));
            animation: pulse-glow 2s infinite alternate;
        }

        @keyframes pulse-glow {
            from { filter: drop-shadow(0 0 2px rgba(255,255,255,0.5)); transform: scale(1); }
            to { filter: drop-shadow(0 0 8px rgba(255,255,255,1)); transform: scale(1.05); }
        }

        /* === CSS CHO MÀN HÌNH MỞ ĐẦU (PHOENIX INTRO) === */
        #phoenix-intro {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: linear-gradient(180deg, #0f172a 0%, #1e3a8a 45%, #b91c1c 85%, #f59e0b 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
        }

        #phoenix-intro.fade-out {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .intro-sun {
            position: absolute;
            bottom: -80px;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, #fef08a 0%, #f97316 50%, transparent 70%);
            border-radius: 50%;
            filter: blur(20px);
            opacity: 0.75;
            animation: sunPulse 2.5s ease-out forwards;
        }

        .intro-cloud {
            position: absolute;
            fill: rgba(255, 255, 255, 0.12);
            animation: cloudFloat 3s linear forwards;
        }

        .phoenix-wrapper {
            position: relative;
            z-index: 10;
            width: 360px;
            height: 360px;
            animation: phoenixSoar 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .wing-left {
            transform-origin: 250px 245px;
            animation: flapLeft 0.38s ease-in-out infinite alternate;
        }
        .wing-right {
            transform-origin: 250px 245px;
            animation: flapRight 0.38s ease-in-out infinite alternate;
        }
        .tail-feathers {
            transform-origin: 250px 290px;
            animation: tailWave 0.5s ease-in-out infinite alternate;
        }

        .intro-brand-text {
            position: absolute;
            bottom: 12%;
            z-index: 20;
            color: #fff;
            font-weight: 900;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            text-shadow: 0 4px 20px rgba(245, 158, 11, 0.8);
            animation: textReveal 2.2s ease-out forwards;
        }

        @keyframes phoenixSoar {
            0% { transform: translate(-35vw, 35vh) rotate(32deg) scale(0.45); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translate(35vw, -38vh) rotate(32deg) scale(1.25); opacity: 0; }
        }

        @keyframes flapLeft {
            0% { transform: rotate(-8deg) scaleX(1); }
            100% { transform: rotate(16deg) scaleX(0.78); }
        }

        @keyframes flapRight {
            0% { transform: rotate(8deg) scaleX(1); }
            100% { transform: rotate(-16deg) scaleX(0.78); }
        }

        @keyframes tailWave {
            0% { transform: rotate(-4deg); }
            100% { transform: rotate(4deg); }
        }

        @keyframes sunPulse {
            0% { transform: scale(0.8); opacity: 0.4; }
            100% { transform: scale(1.3); opacity: 0.9; }
        }

        @keyframes cloudFloat {
            0% { transform: translateX(0); }
            100% { transform: translateX(-80px); }
        }

        @keyframes textReveal {
            0% { opacity: 0; transform: translateY(15px) scale(0.95); }
            30% { opacity: 1; transform: translateY(0) scale(1); }
            85% { opacity: 1; transform: translateY(0) scale(1.03); }
            100% { opacity: 0; transform: translateY(-10px) scale(1.05); }
        }

        /* === CSS CHO HIỆU ỨNG LOGO BOUNCE KHI BẤM BẮT ĐẦU THI === */
        #logo-bounce-overlay {
            position: fixed;
            inset: 0;
            z-index: 9998;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(8px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
        }

        #logo-bounce-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .bounce-logo-img {
            width: 190px;
            height: 190px;
            object-fit: contain;
            filter: drop-shadow(0 12px 24px rgba(26, 54, 93, 0.18));
            animation: customLogoBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
        }

        .bounce-logo-shadow {
            width: 110px;
            height: 14px;
            background: radial-gradient(ellipse, rgba(26, 54, 93, 0.28) 0%, transparent 75%);
            border-radius: 50%;
            margin-top: 8px;
            animation: customShadowBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
        }

        @keyframes customLogoBounce {
            0% { transform: translateY(-35px) scaleX(0.96) scaleY(1.04); }
            80% { transform: translateY(0px) scaleX(1.02) scaleY(0.98); }
            100% { transform: translateY(8px) scaleX(1.12) scaleY(0.88); }
        }

        @keyframes customShadowBounce {
            0% { transform: scale(0.65); opacity: 0.35; }
            100% { transform: scale(1.15); opacity: 0.85; }
        }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden relative">

    <!-- ================= 0. MÀN HÌNH INTRO PHƯỢNG HOÀNG BAY (2.5s) ================= -->
    <div id="phoenix-intro" onclick="skipIntro()" title="Nhấn để bỏ qua">
        <div class="intro-sun"></div>

        <svg class="intro-cloud w-96 h-32 top-1/4 left-10" viewBox="0 0 400 120">
            <path d="M40,90 Q10,90 10,65 Q10,40 45,40 Q60,10 105,15 Q145,5 170,35 Q210,30 225,60 Q260,65 250,90 Z" />
        </svg>
        <svg class="intro-cloud w-[450px] h-36 bottom-1/4 right-10" viewBox="0 0 400 120" style="animation-duration: 4s;">
            <path d="M60,95 Q30,95 30,70 Q30,45 65,45 Q85,15 130,20 Q175,10 200,40 Q240,35 255,65 Q290,70 280,95 Z" />
        </svg>

        <div class="phoenix-wrapper">
            <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-[0_0_25px_rgba(251,146,60,0.85)]">
                <defs>
                    <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#fef08a" />
                        <stop offset="45%" stop-color="#f97316" />
                        <stop offset="85%" stop-color="#dc2626" />
                        <stop offset="100%" stop-color="#7f1d1d" />
                    </linearGradient>
                    <linearGradient id="bodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff" />
                        <stop offset="30%" stop-color="#fde047" />
                        <stop offset="75%" stop-color="#ea580c" />
                        <stop offset="100%" stop-color="#b91c1c" />
                    </linearGradient>
                    <linearGradient id="tailGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stop-color="#f97316" />
                        <stop offset="60%" stop-color="#ef4444" />
                        <stop offset="100%" stop-color="#fef08a" stop-opacity="0" />
                    </linearGradient>
                </defs>

                <!-- Đuôi Phượng Hoàng -->
                <g class="tail-feathers">
                    <path d="M250,290 C235,350 200,410 165,475 C210,430 235,375 248,310 Z" fill="url(#tailGrad)" />
                    <path d="M250,290 C265,350 300,410 335,475 C290,430 265,375 252,310 Z" fill="url(#tailGrad)" />
                    <path d="M250,295 C220,360 170,400 130,445 C180,415 220,375 245,310 Z" fill="url(#tailGrad)" opacity="0.8" />
                    <path d="M250,295 C280,360 330,400 370,445 C320,415 280,375 255,310 Z" fill="url(#tailGrad)" opacity="0.8" />
                    <path d="M250,290 Q242,390 250,490 Q258,390 250,290 Z" fill="url(#bodyGrad)" />
                </g>

                <!-- Cánh Trái -->
                <g class="wing-left">
                    <path d="M245,235 C175,165 85,135 15,175 C65,195 110,220 55,245 C110,245 145,255 100,285 C155,275 190,275 160,310 C200,295 225,280 245,270 Z" fill="url(#wingGrad)" />
                    <path d="M245,240 C190,190 120,170 60,195 C105,210 135,230 100,250 C145,245 175,255 150,280 C190,270 220,265 245,260 Z" fill="#fde047" opacity="0.45" />
                </g>

                <!-- Cánh Phải -->
                <g class="wing-right">
                    <path d="M255,235 C325,165 415,135 485,175 C435,195 390,220 445,245 C390,245 355,255 400,285 C345,275 310,275 340,310 C300,295 275,280 255,270 Z" fill="url(#wingGrad)" />
                    <path d="M255,240 C310,190 380,170 440,195 C395,210 365,230 400,250 C355,245 325,255 350,280 C310,270 280,265 255,260 Z" fill="#fde047" opacity="0.45" />
                </g>

                <!-- Thân, Đầu & Mào Phượng Hoàng -->
                <g>
                    <path d="M250,150 L250,105 M250,152 Q232,125 215,120 M250,152 Q268,125 285,120" stroke="#fef08a" stroke-width="3.5" stroke-linecap="round" fill="none" />
                    <circle cx="250" cy="102" r="4" fill="#fff" />
                    <circle cx="213" cy="119" r="3" fill="#fde047" />
                    <circle cx="287" cy="119" r="3" fill="#fde047" />
                    <path d="M250,138 C242,165 234,215 240,260 C244,285 247,300 250,315 C253,300 256,285 260,260 C266,215 258,165 250,138 Z" fill="url(#bodyGrad)" />
                </g>
            </svg>
        </div>

        <div class="intro-brand-text text-xl md:text-2xl">
            YAECUTE EDUCATION
        </div>
    </div>

    <!-- ================= 0.5 HIỆU ỨNG LOGO BOUNCE KHI BẤM BẮT ĐẦU THI ================= -->
    <div id="logo-bounce-overlay">
        <img src="https://i.postimg.cc/Gm0gGjnj/Gemini-Generated-Image-gqn1iggqn1iggqn1.png" alt="VLCM Logo Bounce" class="bounce-logo-img">
        <div class="bounce-logo-shadow"></div>
        <p class="mt-6 text-navy font-extrabold text-sm tracking-widest uppercase animate-pulse">Đang tải dữ liệu phòng thi...</p>
    </div>

    <!-- ================= 1. GIAO DIỆN ĐĂNG NHẬP / ĐĂNG KÝ ================= -->
    <div id="view-auth" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-y-auto py-10 transition-opacity duration-500">
        <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative z-10 border border-gray-100">
            <div class="flex justify-center items-center mb-8">
                <img src="https://i.postimg.cc/Gm0gGjnj/Gemini-Generated-Image-gqn1iggqn1iggqn1.png" alt="VLCM Logo" class="h-16 object-contain">
            </div>

            <div class="flex mb-6 bg-gray-50 rounded-lg p-1">
                <button id="tab-login" onclick="switchAuth('login')" class="flex-1 py-2 text-sm font-bold rounded-md bg-white shadow-sm text-navy transition-all">Đăng nhập</button>
                <button id="tab-register" onclick="switchAuth('register')" class="flex-1 py-2 text-sm font-bold rounded-md text-gray-400 hover:text-navy transition-all">Đăng ký</button>
            </div>

            <form id="form-login" onsubmit="performLogin(event)" class="block">
                <div id="login-error" class="hidden mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center font-semibold border border-red-200">
                    Email hoặc mật khẩu không chính xác!
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-bold text-navy mb-2">Email</label>
                    <div class="relative">
                        <i class="fa-regular fa-envelope text-gray-400 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></i>
                        <input id="login-email" type="email" required class="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white text-sm" placeholder="Nhập email (VD: admin@gmail.com)">
                    </div>
                </div>
                <div class="mb-2">
                    <label class="block text-sm font-bold text-navy mb-2">Mật khẩu</label>
                    <div class="relative">
                        <i class="fa-solid fa-lock text-gray-400 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></i>
                        <input id="login-password" type="password" required class="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white text-sm" placeholder="Nhập mật khẩu (VD: 123)">
                    </div>
                </div>
                <button type="submit" class="w-full py-3 mt-4 bg-custom-red hover:bg-red-800 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
                    Đăng nhập
                </button>
            </form>

            <form id="form-register" onsubmit="performRegister(event)" class="hidden">
                <div id="register-msg" class="hidden mb-4 p-3 text-sm rounded-lg text-center font-semibold border"></div>
                <div class="mb-4">
                    <label class="block text-sm font-bold text-navy mb-2">Họ và tên</label>
                    <div class="relative">
                        <i class="fa-regular fa-user text-gray-400 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></i>
                        <input id="reg-name" type="text" required class="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder="Ví dụ: Trần Văn Huy">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-bold text-navy mb-2">Email</label>
                    <div class="relative">
                        <i class="fa-regular fa-envelope text-gray-400 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></i>
                        <input id="reg-email" type="email" required class="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder="email@gmail.com">
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-bold text-navy mb-2">Mật khẩu</label>
                    <div class="relative">
                        <i class="fa-solid fa-lock text-gray-400 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></i>
                        <input id="reg-password" type="password" required class="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder="Tạo mật khẩu">
                    </div>
                </div>
                <button type="submit" class="w-full py-3 bg-navy hover:bg-blue-900 text-white font-bold rounded-xl shadow-lg transition-all" style="background-color: #1a365d;">
                    Tạo tài khoản mới
                </button>
            </form>
        </div>
    </div>

    <!-- ================= 2. HỆ THỐNG CHÍNH ================= -->
    <div id="app-container" class="h-screen flex-col hidden w-full bg-gray-50">
        <!-- === HEADER === -->
        <header class="bg-white py-3 px-6 flex items-center justify-between border-b border-gray-200 z-30 shrink-0 gap-4">
            <!-- 1. Khu vực Logo -->
            <div class="flex items-center gap-3 w-auto lg:w-64 shrink-0">
                <button onclick="toggleMobileSidebar()" class="md:hidden text-gray-500 hover:text-navy transition-colors mr-1">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
                <div class="flex items-center cursor-pointer" onclick="switchView('home')">
                    <img src="https://i.postimg.cc/Gm0gGjnj/Gemini-Generated-Image-gqn1iggqn1iggqn1.png" alt="VLCM Logo" class="h-14 object-contain">
                </div>
            </div>

            <!-- 2. Thanh tìm kiếm -->
            <div class="flex flex-1 max-w-3xl mx-2 md:mx-4">
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
                    </div>
                    <input id="global-search-input" type="text" oninput="handleSearchExam(this.value)" class="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all hover:bg-gray-100" placeholder="Tìm kiếm đề thi (VD: TSA, Toán, Vật Lí, Hóa, Sinh)...">
                </div>
            </div>

            <!-- 3. Khu vực User -->
            <div class="flex items-center gap-5 justify-end w-auto lg:w-64 shrink-0">
                <button onclick="showToast('Bạn không có thông báo mới nào!')" class="relative text-gray-500 hover:text-navy transition">
                    <i class="fa-regular fa-bell text-xl"></i>
                    <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                <div class="relative" id="profile-container">
                    <div class="flex items-center gap-3 cursor-pointer select-none" onclick="toggleDropdown()">
                        <div id="display-user-avatar" class="w-9 h-9 bg-navy rounded-full flex items-center justify-center text-white text-xs font-bold" style="background-color: #1a365d;">U</div>
                        <div class="hidden md:block text-left">
                            <div id="display-user-name" class="text-sm font-bold text-navy leading-tight">Người dùng</div>
                            <div class="text-xs text-gray-500 leading-tight">Học viên</div>
                        </div>
                        <i class="fa-solid fa-chevron-down text-gray-400 text-xs ml-1"></i>
                    </div>

                    <div id="profile-dropdown" class="absolute right-0 mt-4 w-56 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 hidden z-50 overflow-hidden">
                        <div class="py-1">
                            <a href="javascript:void(0)" onclick="switchView('settings')" class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700 font-medium">
                                <i class="fa-regular fa-user w-5 text-center mr-2 text-gray-400"></i> Thông tin cá nhân
                            </a>
                            <div class="h-px bg-gray-100 my-1 mx-2"></div>
                            <a href="javascript:void(0)" onclick="logoutUser(event)" class="flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-bold">
                                <i class="fa-solid fa-arrow-right-from-bracket w-5 text-center mr-2 text-red-500"></i> Đăng xuất
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- === THÂN TRANG === -->
        <div class="flex flex-1 overflow-hidden relative">
            <!-- Overlay đóng Sidebar trên Mobile -->
            <div id="mobile-sidebar-backdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 bg-black/40 z-20 hidden md:hidden"></div>

            <!-- Sidebar -->
            <aside id="main-sidebar" class="w-64 bg-white border-r border-gray-200 flex-col py-6 px-4 hidden md:flex shrink-0 fixed md:static inset-y-0 left-0 z-30 h-full">
                <nav class="flex-1 space-y-2">
                    <a href="javascript:void(0)" onclick="switchView('home')" id="nav-home" class="nav-item active flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
                        <i class="fa-solid fa-house w-5 text-center text-gray-400"></i> Trang chủ
                    </a>
                    <a href="javascript:void(0)" onclick="switchView('exam-list')" id="nav-exam-list" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
                        <i class="fa-solid fa-file-pen w-5 text-center text-gray-400"></i> Thư viện Đề thi TSA
                    </a>
                    <a href="javascript:void(0)" onclick="switchView('exam-hsa-list')" id="nav-exam-hsa-list" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
    <i class="fa-solid fa-compass-drafting w-5 text-center text-emerald-500"></i> Thư viện Đề thi HSA
</a>
                    <a href="javascript:void(0)" onclick="switchView('exam-school-list')" id="nav-exam-school-list" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
                        <i class="fa-solid fa-graduation-cap w-5 text-center text-gray-400"></i> Đề thi Trường/Sở
                    </a>
                    <a href="javascript:void(0)" onclick="switchView('realtime-exam')" id="nav-realtime-exam" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
                        <i class="fa-solid fa-bolt w-5 text-center text-orange-400"></i> Phòng Thực Chiến
                    </a>
                    <a href="javascript:void(0)" onclick="switchView('documents')" id="nav-documents" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm mt-2">
                        <i class="fa-solid fa-folder-open w-5 text-center text-gray-400"></i> Tài liệu học tập
                    </a>
                    <a href="javascript:void(0)" onclick="switchView('history')" id="nav-history" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm mt-2">
                        <i class="fa-solid fa-clock-rotate-left w-5 text-center text-gray-400"></i> Lịch sử làm bài
                    </a>
                </nav>

                <!-- KHỐI CHUỖI HỌC TẬP (STREAK) -->
                <div class="mt-4 mb-2 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-4 flex items-center gap-3 shadow-sm relative group cursor-default">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500 text-lg shrink-0">
                        <i class="fa-solid fa-fire-flame-curved" id="streak-icon"></i>
                    </div>
                    <div>
                        <div class="text-[10px] font-extrabold text-orange-800 uppercase tracking-widest">Chuỗi học tập</div>
                        <div class="text-lg font-black text-orange-600 leading-none mt-1"><span id="streak-days-count">0</span> ngày</div>
                    </div>
                    
                    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center z-50 shadow-lg">
                        Hoàn thành ít nhất 1 bài thi mỗi ngày để duy trì ngọn lửa! 🔥
                        <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                </div>

                <div class="border-t border-gray-100 pt-4 mt-2">
                    <a href="javascript:void(0)" onclick="switchView('settings')" id="nav-settings" class="nav-item flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-navy font-semibold transition-colors text-sm">
                        <i class="fa-solid fa-gear w-5 text-center text-gray-400"></i> Cài đặt tài khoản
                    </a>
                </div>
            </aside>

            <!-- Main Content Area -->
            <main class="flex-1 overflow-y-auto p-6 md:p-8 relative">
                
                <!-- 2.0 KẾT QUẢ TÌM KIẾM NHANH -->
                <div id="view-search-results" class="hidden max-w-6xl mx-auto">
                    <div class="mb-6 flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-extrabold text-navy">Kết quả tìm kiếm</h2>
                            <p id="search-Summary-text" class="text-gray-500 mt-1 text-sm"></p>
                        </div>
                        <button onclick="clearSearch()" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-bold">Đóng tìm kiếm</button>
                    </div>
                    <div id="search-exam-container" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
                </div>

                <!-- 2.1 TRANG CHỦ -->
                <div id="view-home" class="block animate-view">
                    <div class="flex flex-col xl:flex-row gap-6 mb-10">
                        <div class="flex-1 bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-center border border-gray-100">
                            <h2 class="text-3xl font-extrabold text-navy mb-2">Chào mừng trở lại! 👋</h2>
                            <p class="text-gray-500">Hãy tiếp tục hành trình chinh phục kiến thức của bạn hôm nay.</p>
                        </div>
                    </div>

                    <div class="flex justify-between items-end mb-6">
                        <h3 class="text-2xl font-extrabold text-navy">Bắt đầu học</h3>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <!-- 1. Card Chuyển tới Phòng Solo TSA -->
                        <div onclick="switchView('exam-list')" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex flex-col h-full">
                            <div class="h-40 bg-purple-50 flex items-center justify-center">
                                <span class="text-4xl font-extrabold text-purple-900 opacity-80">TSA & BMC</span>
                            </div>
                            <div class="p-6 flex flex-col flex-1">
                                <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-[10px] font-bold rounded mb-3 w-max"><i class="fa-solid fa-laptop-file mr-1"></i> THƯ VIỆN ĐỀ</span>
                                <h4 class="font-bold text-navy text-lg leading-tight mb-2">Luyện đề Đánh giá tư duy</h4>
                                <p class="text-xs text-gray-500 mb-6 flex-1">Cập nhật đề thi mới nhất từ HUST</p>
                                <button class="w-full py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-lg transition-colors text-sm pointer-events-none">Xem danh sách đề</button>
                            </div>
                        </div>

                        <!-- 2. Card Chuyển tới Thư viện Đề HSA (MỚI THÊM VÀO NGAY SAU TSA) -->
                        <div onclick="switchView('exam-hsa-list')" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex flex-col h-full">
                            <div class="h-40 bg-emerald-50 flex items-center justify-center relative overflow-hidden">
                                <span class="text-4xl font-extrabold text-emerald-900 opacity-80 z-10">HSA - VNU</span>
                            </div>
                            <div class="p-6 flex flex-col flex-1">
                                <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded mb-3 w-max uppercase tracking-wider">
                                    <i class="fa-solid fa-compass-drafting mr-1"></i> ĐGNL ĐHQGHN
                                </span>
                                <h4 class="font-bold text-navy text-lg leading-tight mb-2">Luyện đề Đánh giá năng lực</h4>
                                <p class="text-xs text-gray-500 mb-6 flex-1">Định lượng, Định tính & Khoa học chuẩn cấu trúc HSA</p>
                                <button class="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-lg transition-colors text-sm pointer-events-none">
                                    Xem danh sách đề
                                </button>
                            </div>
                        </div>

                        <!-- 3. Card Chuyển tới Đề thi Trường/Sở -->
                        <div onclick="switchView('exam-school-list')" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex flex-col h-full">
                            <div class="h-40 bg-blue-50 flex items-center justify-center relative overflow-hidden">
                                <span class="text-4xl font-extrabold text-blue-900 opacity-80 z-10">THPT & SỞ GD</span>
                            </div>
                            <div class="p-6 flex flex-col flex-1">
                                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded mb-3 w-max uppercase tracking-wider">
                                    <i class="fa-solid fa-school mr-1"></i> THI THỬ 2026
                                </span>
                                <h4 class="font-bold text-navy text-lg leading-tight mb-2">Đề thi Trường/Sở</h4>
                                <p class="text-xs text-gray-500 mb-6 flex-1">Tổng hợp đề thi thử bám sát cấu trúc mới của Bộ GD&ĐT</p>
                                <button class="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold rounded-lg transition-colors text-sm pointer-events-none">
                                    Xem danh sách đề
                                </button>
                            </div>
                        </div>

                        <!-- 4. Card Chuyển tới Phòng Thực chiến Socket -->
                        <div onclick="switchView('realtime-exam')" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex flex-col h-full">
                            <div class="h-40 bg-orange-50 flex items-center justify-center relative overflow-hidden">
                                <span class="text-4xl font-extrabold text-orange-900 opacity-80 z-10">Thực Chiến</span>
                            </div>
                            <div class="p-6 flex flex-col flex-1">
                                <span class="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-[10px] font-bold rounded mb-3 w-max uppercase tracking-wider"><i class="fa-solid fa-users mr-1"></i> MULTIPLAYER</span>
                                <h4 class="font-bold text-navy text-lg leading-tight mb-2">Phòng Thi Trực Tiếp</h4>
                                <p class="text-xs text-gray-500 mb-6 flex-1">Thi đấu Real-time cùng bạn bè</p>
                                <button class="w-full py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-900 font-bold rounded-lg transition-colors text-sm pointer-events-none">Vào Phòng Ngay</button>
                            </div>
                        </div>
                    </div>

                    <!-- BẢNG VÀNG CHUỖI HỌC TẬP -->
                    <div class="mt-12 mb-6 flex justify-between items-end">
                        <div>
                            <h3 class="text-2xl font-extrabold text-navy">Bảng Vàng Nỗ Lực 🏆</h3>
                            <p class="text-gray-500 text-sm mt-1">Top những học viên giữ lửa học tập kiên trì nhất</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <ul id="streak-leaderboard-list" class="divide-y divide-gray-100">
                            <li class="p-8 text-center text-gray-400 font-medium">Đang tải dữ liệu...</li>
                        </ul>
                    </div>
                </div>

                <!-- 2.2 DANH SÁCH ĐỀ THI LÝ THUYẾT (Solo TSA) -->
                <div id="view-exam-list" class="hidden max-w-6xl mx-auto">
                    <div class="mb-6">
                        <h2 class="text-2xl font-extrabold text-navy">Kỳ thi Đánh giá tư duy TSA</h2>
                        <p class="text-gray-500 mt-1">Luyện tập với các đề thi chuẩn cấu trúc mới nhất.</p>
                    </div>
                    <!-- Thanh chuyển Tab 4 phần TSA -->
                    <div class="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-gray-100 w-max max-w-full">
                        <button onclick="filterTSA('math')" id="tab-tsa-math" class="tsa-tab px-6 py-2.5 rounded-lg font-bold text-sm bg-purple-50 text-purple-700 transition-colors">Tư duy Toán học</button>
                        <button onclick="filterTSA('reading')" id="tab-tsa-reading" class="tsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Tư duy Đọc hiểu</button>
                        <button onclick="filterTSA('science')" id="tab-tsa-science" class="tsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Tư duy Khoa học</button>
                        <button onclick="filterTSA('comprehensive')" id="tab-tsa-comprehensive" class="tsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Đề Tổng hợp</button>
                    </div>
                    <div id="tsa-exam-container" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
                </div>
                <!-- 2.2B DANH SÁCH ĐỀ THI HSA (4 PHẦN) -->
<div id="view-exam-hsa-list" class="hidden max-w-6xl mx-auto">
    <div class="mb-6">
        <h2 class="text-2xl font-extrabold text-navy">Kỳ thi Đánh giá năng lực HSA (ĐHQG Hà Nội)</h2>
        <p class="text-gray-500 mt-1">Luyện tập đầy đủ 3 phần thi thành phần và đề tổng hợp chuẩn cấu trúc mới nhất.</p>
    </div>
    <!-- Thanh chuyển Tab 4 phần HSA -->
    <div class="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-gray-100 w-max max-w-full">
        <button onclick="filterHSA('math')" id="tab-hsa-math" class="hsa-tab px-6 py-2.5 rounded-lg font-bold text-sm bg-emerald-50 text-emerald-700 transition-colors">
            Tư duy Định lượng (Toán)
        </button>
        <button onclick="filterHSA('language')" id="tab-hsa-language" class="hsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">
            Tư duy Định tính (Văn)
        </button>
        <button onclick="filterHSA('science')" id="tab-hsa-science" class="hsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">
            Khoa học & Tiếng Anh
        </button>
        <button onclick="filterHSA('comprehensive')" id="tab-hsa-comprehensive" class="hsa-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">
            Đề Tổng hợp HSA
        </button>
    </div>
    <div id="hsa-exam-container" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
</div>

                <!-- 2.3 DANH SÁCH ĐỀ THI TRƯỜNG/SỞ -->
                <div id="view-exam-school-list" class="hidden max-w-6xl mx-auto">
                    <div class="mb-6">
                        <h2 class="text-2xl font-extrabold text-navy">Kỳ thi thử THPT & Sở Giáo dục</h2>
                        <p class="text-gray-500 mt-1">Luyện tập với các đề thi chuẩn cấu trúc 2026 từ các trường chuyên trên cả nước.</p>
                    </div>
                    <!-- Thanh chuyển Tab 4 môn -->
                    <div class="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-gray-100 w-max max-w-full">
                        <button onclick="filterTHPT('math')" id="tab-math" class="thpt-tab px-6 py-2.5 rounded-lg font-bold text-sm bg-blue-50 text-blue-700 transition-colors">Toán học</button>
                        <button onclick="filterTHPT('physics')" id="tab-physics" class="thpt-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Vật lý</button>
                        <button onclick="filterTHPT('chemistry')" id="tab-chemistry" class="thpt-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Hóa học</button>
                        <button onclick="filterTHPT('biology')" id="tab-biology" class="thpt-tab px-6 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-50 transition-colors">Sinh học</button>
                    </div>
                    <div id="thpt-exam-container" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
                </div>

                <!-- 2.4 PHÒNG THI TRỰC TIẾP (SOCKET.IO / GIẢ LẬP ĐẤU TRỰC TIẾP) -->
                <div id="view-realtime-exam" class="hidden h-full flex-col">
                    <div class="mb-6 flex flex-wrap justify-between items-center shrink-0 gap-4">
                        <div>
                            <h1 class="text-2xl font-extrabold text-navy">Phòng Thực Chiến 🔴</h1>
                            <p class="text-gray-500 text-sm mt-1">Thi đấu tốc độ trực tiếp cùng các học viên khác.</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <span id="room-status" class="px-4 py-2 bg-yellow-100 text-yellow-700 font-bold rounded-lg text-sm flex items-center gap-2">
                                <i class="fa-solid fa-circle-play"></i> Sẵn sàng ghép trận
                            </span>
                            <button id="btn-start-exam" onclick="startRealtimeExam()" class="px-5 py-2.5 bg-custom-red text-white font-bold rounded-lg shadow hover:bg-red-800 transition text-sm">
                                Bắt đầu thi đấu
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                        <div class="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col overflow-y-auto">
                            <div id="rt-exam-waiting" class="flex-1 flex flex-col items-center justify-center text-center">
                                <div class="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-4">
                                    <i class="fa-solid fa-stopwatch text-4xl text-custom-red"></i>
                                </div>
                                <h2 class="text-2xl font-bold text-navy mb-2">Đấu Trường Tốc Độ!</h2>
                                <p class="text-gray-500 max-w-md">Nhấn nút <b>"Bắt đầu thi đấu"</b> ở góc phải phía trên để tranh tài trả lời nhanh 5 câu hỏi trắc nghiệm cùng các đối thủ trong phòng.</p>
                            </div>

                            <div id="rt-exam-content" class="hidden flex-1 flex flex-col">
                                <div class="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                                    <span id="rt-question-progress" class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Câu 1/5</span>
                                    <span id="rt-question-timer" class="text-sm font-black text-custom-red font-mono">15s</span>
                                </div>
                                <div id="rt-live-question-text" class="text-lg font-bold text-navy mb-6 leading-relaxed"></div>
                                <div id="rt-live-options" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto"></div>
                            </div>
                        </div>

                        <div class="w-full lg:w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col shrink-0">
                            <h3 class="text-lg font-bold text-navy mb-4 border-b border-gray-100 pb-2 flex justify-between items-center">
                                <span>Bảng xếp hạng Trực tiếp</span>
                                <i class="fa-solid fa-trophy text-yellow-500"></i>
                            </h3>
                            <ul id="rt-live-leaderboard" class="space-y-3 overflow-y-auto flex-1">
                                <li class="text-center text-gray-400 text-sm py-4">Nhấn "Bắt đầu thi đấu" để vào bảng xếp hạng...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 2.5 TÀI LIỆU -->
                <div id="view-documents" class="hidden max-w-5xl mx-auto">
                    <div class="mb-8">
                        <h1 class="text-2xl font-extrabold text-navy">Tài liệu học tập & Ghi chú</h1>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="lg:col-span-1">
                            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 class="text-lg font-bold text-navy mb-4 border-b border-gray-100 pb-2">Thêm tài liệu</h3>
                                <form onsubmit="addDocument(event)">
                                    <div class="mb-4">
                                        <input id="doc-title" type="text" required class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Tên tài liệu hoặc link ghi chú...">
                                    </div>
                                    <button type="submit" class="w-full py-2.5 bg-navy text-white font-bold rounded-lg shadow-md transition text-sm" style="background-color: #1a365d;">Lưu tài liệu</button>
                                </form>
                            </div>
                        </div>
                        <div class="lg:col-span-2">
                            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[400px]">
                                <h3 class="text-lg font-bold text-navy mb-4 border-b border-gray-100 pb-2">Danh sách tài liệu</h3>
                                <div id="document-list" class="space-y-4"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2.7 LỊCH SỬ LÀM BÀI -->
                <div id="view-history" class="hidden max-w-5xl mx-auto">
                    <div class="mb-8">
                        <h1 class="text-2xl font-extrabold text-navy">Lịch sử làm bài</h1>
                        <p class="text-gray-500 mt-1">Xem lại kết quả, thời gian hoàn thành và đáp án chi tiết các bài thi của bạn.</p>
                    </div>
                    <div id="exam-history-container" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[400px] flex flex-col">
                        <div class="text-center text-gray-400 font-medium py-10 mt-10">Đang tải dữ liệu...</div>
                    </div>
                </div>

                <!-- 2.6 CÀI ĐẶT -->
                <div id="view-settings" class="hidden max-w-4xl mx-auto">
                    <div class="mb-8">
                        <h1 class="text-2xl font-extrabold text-navy">Hồ sơ cá nhân</h1>
                    </div>
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                        <form onsubmit="saveSettings(event)">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Họ và tên</label>
                                    <input id="profile-name" type="text" required class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Email</label>
                                    <input id="profile-email" type="email" disabled class="w-full px-3 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 text-sm cursor-not-allowed">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Ngày sinh</label>
                                    <input id="profile-dob" type="date" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Số điện thoại</label>
                                    <input id="profile-phone" type="tel" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Ví dụ: 0912345678">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Trường học</label>
                                    <input id="profile-school" type="text" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Ví dụ: THPT...">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-navy mb-2">Lớp</label>
                                    <input id="profile-class" type="text" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Ví dụ: 12A1">
                                </div>
                            </div>
                            <div class="mt-8 flex justify-end">
                                <button type="submit" class="px-6 py-2.5 rounded-lg font-bold text-white bg-custom-red hover:bg-red-800 shadow-md text-sm">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="toast-success" class="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50 pointer-events-none">
                    <i class="fa-solid fa-circle-check text-lg"></i>
                    <span id="toast-message" class="font-semibold text-sm">Thao tác thành công!</span>
                </div>
            </main>
        </div>
    </div>

    <!-- ================= 3. MODAL XÁC NHẬN VÀO THI SOLO ================= -->
    <div id="modal-confirm" class="hidden fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-[#fff5f5] opacity-90" style="background-image: radial-gradient(#fecdd3 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="relative bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-md p-8 md:p-10 border border-gray-100 z-10 mx-4">
            <div class="flex justify-center mb-4">
                <img src="https://i.postimg.cc/Gm0gGjnj/Gemini-Generated-Image-gqn1iggqn1iggqn1.png" alt="VLCM Logo" class="h-16 object-contain animate-bounce">
            </div>
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Xác nhận thông tin dự thi</h2>
            <div class="space-y-4 mb-8">
                <div class="flex items-center">
                    <div class="w-32 text-gray-500 text-sm flex items-center gap-2 shrink-0"><i class="fa-regular fa-user"></i> Họ tên</div>
                    <div class="font-bold text-gray-800" id="confirm-name">...</div>
                </div>
                <div class="flex items-start">
                    <div class="w-32 text-gray-500 text-sm flex items-center gap-2 shrink-0"><i class="fa-regular fa-file-lines"></i> Kíp thi</div>
                    <div class="font-bold text-gray-800" id="confirm-exam-name">...</div>
                </div>
                <div class="flex items-center">
                    <div class="w-32 text-gray-500 text-sm flex items-center gap-2 shrink-0"><i class="fa-regular fa-clock"></i> Thời gian</div>
                    <div class="font-bold text-gray-800" id="confirm-time">...</div>
                </div>
                <div class="flex items-center">
                    <div class="w-32 text-gray-500 text-sm flex items-center gap-2 shrink-0"><i class="fa-solid fa-list-ul"></i> Số câu hỏi</div>
                    <div class="font-bold text-gray-800" id="confirm-questions">...</div>
                </div>
            </div>
            <p class="text-sm text-gray-600 italic mb-6">Lưu ý: Hệ thống sẽ bắt đầu tính giờ ngay khi bạn nhấn Bắt đầu thi.</p>
            <button onclick="startActualExam()" class="w-full bg-[#b91c1c] hover:bg-red-800 text-white font-bold py-3.5 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2 mb-4">
                <i class="fa-regular fa-circle-play"></i> Bắt đầu thi
            </button>
            <div class="flex justify-between items-center text-sm text-[#b91c1c] font-semibold">
                <button onclick="closeConfirmModal()" class="hover:underline flex items-center gap-1"><i class="fa-solid fa-arrow-left"></i> Quay lại</button>
            </div>
        </div>
    </div>

    <!-- ================= 4. PHÒNG THI SOLO ================= -->
    <div id="view-active-exam" class="hidden fixed inset-0 bg-[#f8f9fa] z-50 flex flex-col">
        <header class="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-20">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-[#b91c1c] text-white flex items-center justify-center font-black rounded text-lg">B</div>
                <h1 class="text-base md:text-xl font-bold text-gray-900 truncate max-w-md md:max-w-2xl" id="active-exam-title">...</h1>
            </div>
            <button onclick="submitExam()" class="md:hidden px-4 py-1.5 bg-[#b91c1c] text-white text-sm font-bold rounded-lg">Nộp bài</button>
        </header>
        <div class="flex-1 flex flex-col md:flex-row overflow-hidden p-4 md:p-6 gap-6 relative">
            <div class="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-y-auto relative flex flex-col">
                <div class="watermark-bg" id="watermark-container"></div>
                <div id="exam-content-container" class="p-6 md:p-8 relative z-10 flex-1">
                    <!-- HTML danh sách câu hỏi -->
                </div>
            </div>
            <div class="w-full md:w-80 flex flex-col gap-6 shrink-0 max-h-60 md:max-h-full md:h-full">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                    <h3 class="font-bold text-gray-800 border-b border-gray-100 pb-3 mb-4 hidden md:block">Thông tin thí sinh</h3>
                    <div class="hidden md:flex items-center gap-2 mb-4 text-gray-700">
                        Họ tên: <span class="font-bold text-black" id="exam-student-name">...</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-600 text-sm">Thời gian còn lại</span>
                        <span class="text-2xl font-black text-gray-900 font-mono tracking-wider" id="countdown-timer">00:00:00</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex-1 hidden md:flex flex-col overflow-hidden">
                    <h3 class="font-bold text-gray-800 text-sm text-center mb-4">Danh sách câu hỏi</h3>
                    <div class="flex justify-center gap-4 text-[10px] text-gray-500 mb-6">
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-gray-100 border border-gray-300 rounded-full"></div> Chưa làm</div>
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-red-600 rounded-full"></div> Đã trả lời</div>
                    </div>
                    <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div class="grid grid-cols-5 gap-3" id="question-grid"></div>
                    </div>
                    <div class="pt-4 mt-4 border-t border-gray-100">
                        <button onclick="submitExam()" class="w-full bg-[#b91c1c] hover:bg-red-800 text-white font-bold py-2.5 rounded-lg transition-colors">Nộp bài</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ================= 5. KẾT QUẢ HIỆN ĐẠI ================= -->
    <div id="view-exam-result" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-gray-50 overflow-y-auto py-10">
        <div class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 p-8 md:p-12 relative z-10 border border-gray-100 flex flex-col items-center">
            <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">
                <i class="fa-solid fa-check-double"></i>
            </div>
            
            <h2 class="text-3xl font-black text-navy mb-2">Hoàn thành bài thi!</h2>
            <p class="text-gray-500 font-medium mb-8 text-center" id="result-exam-title">Tên kì thi</p>

            <div class="w-full bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100 flex flex-col items-center justify-center">
                <div class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4" id="result-score-label">ĐIỂM SỐ</div>
                <div class="text-6xl font-black text-custom-red tracking-tighter" id="result-score-value">0.00</div>
                <div class="text-sm font-semibold text-blue-600 mt-4 bg-blue-50 px-4 py-1.5 rounded-full" id="result-exam-type-badge">Hệ số</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
                <div class="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
                    <i class="fa-regular fa-clock text-gray-400 text-xl mb-2"></i>
                    <div class="text-xs text-gray-500 font-bold mb-1">THỜI GIAN LÀM</div>
                    <div class="text-lg font-black text-navy" id="result-time-spent">00:00</div>
                </div>
                <div class="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
                    <i class="fa-solid fa-bullseye text-green-500 text-xl mb-2"></i>
                    <div class="text-xs text-gray-500 font-bold mb-1">ĐỘ CHÍNH XÁC</div>
                    <div class="text-lg font-black text-navy" id="result-accuracy">0%</div>
                </div>
                <div class="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
                    <i class="fa-solid fa-chart-simple text-blue-500 text-xl mb-2"></i>
                    <div class="text-xs text-gray-500 font-bold mb-1">SỐ CÂU ĐÚNG</div>
                    <div class="text-lg font-black text-navy" id="result-correct-count">0/0</div>
                </div>
            </div>

            <div class="flex gap-4 w-full">
                <button onclick="closeResultAndGoHome()" class="flex-1 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors">
                    Trở về thư viện
                </button>
                <button onclick="openReviewExam()" class="flex-1 py-3.5 bg-custom-red hover:bg-red-800 text-white font-bold rounded-xl shadow-lg transition-colors">
                    Xem đáp án chi tiết
                </button>
            </div>
        </div>
    </div>
    
    <!-- ================= MÀN HÌNH XEM LẠI ĐÁP ÁN ================= -->
    <div id="view-exam-review" class="hidden fixed inset-0 bg-[#f8f9fa] z-50 flex flex-col">
        <header class="bg-white h-16 border-b border-gray-200 flex items-center px-6 shrink-0 shadow-sm z-20 justify-between">
            <div class="flex items-center gap-3 truncate">
                <div class="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-black rounded text-lg shrink-0"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h1 class="text-base md:text-xl font-bold text-gray-900 truncate">Chi tiết bài làm: <span id="review-exam-title">...</span></h1>
            </div>
            <button onclick="closeReviewAndGoHome()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg transition-colors text-sm shrink-0">
                <i class="fa-solid fa-arrow-left mr-2"></i> Quay lại
            </button>
        </header>
        <div class="flex-1 flex flex-col md:flex-row overflow-hidden p-4 md:p-6 gap-6 relative">
            <div class="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-y-auto relative flex flex-col">
                <div id="review-content-container" class="p-6 md:p-8 relative z-10 flex-1">
                    <!-- JS sẽ tự động đổ danh sách câu hỏi xem lại vào đây -->
                </div>
            </div>

            <div class="w-full md:w-80 flex flex-col gap-6 shrink-0 max-h-52 md:max-h-full md:h-full">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex-1 flex flex-col overflow-hidden">
                    <h3 class="font-bold text-gray-800 text-sm text-center mb-4">Mức độ hoàn thành</h3>
                    <div class="flex justify-center gap-4 text-[10px] text-gray-500 mb-6 font-bold uppercase">
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-green-500 rounded-full"></div> Đúng trọn vẹn</div>
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-red-500 rounded-full"></div> Sai / Thiếu ý</div>
                    </div>
                    <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div class="grid grid-cols-5 gap-3" id="review-question-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ================= TRỢ LÝ GEMINI ================= -->
    <div class="gemini-fab" onclick="toggleGeminiChat()">
        <i class="fa-solid fa-wand-magic-sparkles sparkle-icon"></i>
    </div>

    <div id="gemini-chat-panel" class="gemini-chat-panel border border-blue-100">
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-400 p-4 flex justify-between items-center text-white shrink-0">
            <div class="flex items-center gap-2 font-bold">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                Trợ lý Gemini Pro
            </div>
            <button onclick="toggleGeminiChat()" class="hover:bg-white/20 p-1.5 rounded-full transition"><i class="fa-solid fa-xmark"></i></button>
        </div>
        
        <!-- Khu vực hiển thị tin nhắn -->
        <div id="gemini-messages" class="flex-1 p-4 overflow-y-auto bg-gray-50/50 text-sm space-y-4">
            <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700">
                    Chào bạn! Mình là trợ lý AI tích hợp Gemini Pro. Bạn cần giải thích câu hỏi nào hay muốn ôn tập lý thuyết phần nào hôm nay?
                </div>
            </div>
        </div>

        <!-- Ô nhập liệu -->
        <div class="p-3 bg-white border-t border-gray-100 shrink-0">
            <form onsubmit="sendGeminiMessage(event)" class="relative">
                <input id="gemini-input" type="text" autocomplete="off" class="w-full bg-gray-100 border border-gray-200 text-sm rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-blue-400 focus:bg-white transition-colors" placeholder="Hỏi trợ lý AI...">
                <button type="submit" class="absolute right-1.5 top-1.5 w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors">
                    <i class="fa-solid fa-paper-plane text-xs"></i>
                </button>
            </form>
        </div>
    </div>
    
    <!-- ================= 6. JAVASCRIPT ================= -->
    <script src="data.js"></script>
    <script>
        // --- CÁC BIẾN TOÀN CỤC ---
        let currentSessionEmail = null;
        let currentUser = null;
        let currentExamId = null;
        let currentExamType = 'TSA'; 
        let userAnswers = {}; 
        let totalExamTime = 0;
        let currentExamTime = 0;
        let soloTimerInterval;
        let lastActiveViewBeforeReview = 'exam-list';

        // --- TỰ ĐỘNG TẮT MÀN HÌNH INTRO PHƯỢNG HOÀNG SAU 2.5 GIÂY ---
        function skipIntro() {
            const intro = document.getElementById('phoenix-intro');
            if (intro && !intro.classList.contains('fade-out')) {
                intro.classList.add('fade-out');
                setTimeout(() => intro.remove(), 600);
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(skipIntro, 2500);
        });

        // --- HÀM CHẠY HIỆU ỨNG LOGO BOUNCE ---
        function playLogoBounce(callback) {
            const overlay = document.getElementById('logo-bounce-overlay');
            overlay.classList.add('active');
            setTimeout(() => {
                overlay.classList.remove('active');
                if (typeof callback === 'function') callback();
            }, 1000);
        }

        // --- ĐÓNG / MỞ SIDEBAR TRÊN ĐIỆN THOẠI ---
        function toggleMobileSidebar() {
            const sidebar = document.getElementById('main-sidebar');
            const backdrop = document.getElementById('mobile-sidebar-backdrop');
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('flex');
                backdrop.classList.remove('hidden');
            } else {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('flex');
                backdrop.classList.add('hidden');
            }
        }

        // --- HÀM RENDER THẺ ĐỀ THI DÙNG CHUNG (ĐÃ THÊM MÀU XANH NGỌC CHO HSA) ---
        function buildExamCardHTML(exam) {
            const isTSA = exam.type === 'TSA';
            const isHSA = exam.type === 'HSA';
            const isUrlImg = exam.img && (exam.img.startsWith('http://') || exam.img.startsWith('https://') || exam.img.startsWith('data:'));
            
            const coverBgClass = isTSA ? 'bg-purple-100' : (isHSA ? 'bg-emerald-100' : 'bg-blue-100');
            const iconColorClass = isTSA ? 'text-purple-300' : (isHSA ? 'text-emerald-300' : 'text-blue-300');
            const btnBgClass = isTSA ? 'bg-purple-600 hover:bg-purple-700' : (isHSA ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700');
            const qIconBgClass = isTSA ? 'bg-purple-50 text-purple-600' : (isHSA ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-500');
            const actualCount = (allExamsData[exam.id] && allExamsData[exam.id].length > 0) ? allExamsData[exam.id].length : exam.questionsCount;

            const mediaHTML = isUrlImg
                ? `<img src="${exam.img}" class="w-full h-full object-cover" alt="Cover" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x200?text=YAECUTE+EXAM';">`
                : `<i class="fa-solid ${exam.img || 'fa-file-signature'} text-6xl ${iconColorClass}"></i>`;

            return `
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
                    <div class="relative h-48 ${coverBgClass} flex items-center justify-center overflow-hidden">
                        ${mediaHTML}
                        ${exam.isVip ? '<div class="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow"><i class="fa-solid fa-crown"></i> VIP</div>' : ''}
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <h3 class="text-lg font-bold text-gray-800 mb-4 mt-2 leading-snug">${exam.title}</h3>
                        <div class="flex gap-4 mb-6 text-sm text-gray-600 mt-auto">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full ${qIconBgClass} flex items-center justify-center"><i class="fa-regular fa-circle-question"></i></div>
                                <div><span class="block text-[10px] text-gray-400 uppercase">Câu hỏi</span><span class="font-bold">${actualCount} câu</span></div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500"><i class="fa-regular fa-clock"></i></div>
                                <div><span class="block text-[10px] text-gray-400 uppercase">Thời gian</span><span class="font-bold">${exam.time} phút</span></div>
                            </div>
                        </div>
                        <button onclick="openConfirmModal('${exam.id}')" class="w-full ${btnBgClass} text-white font-bold py-2.5 rounded-lg transition-colors text-sm">Bắt đầu thi</button>
                    </div>
                </div>`;
        }

        // --- HÀM LỌC VÀ RENDER ĐỀ THI TSA ---
        function filterTSA(category) {
            document.querySelectorAll('.tsa-tab').forEach(tab => {
                tab.classList.remove('bg-purple-50', 'text-purple-700');
                tab.classList.add('text-gray-500', 'hover:bg-gray-50');
            });
            const activeTab = document.getElementById(`tab-tsa-${category}`);
            if(activeTab) {
                activeTab.classList.remove('text-gray-500', 'hover:bg-gray-50');
                activeTab.classList.add('bg-purple-50', 'text-purple-700');
            }

            const tsaContainer = document.getElementById('tsa-exam-container');
            tsaContainer.innerHTML = '';
            
            const filteredExams = examsMeta.filter(exam => exam.type === 'TSA' && exam.category === category);

            if (filteredExams.length === 0) {
                tsaContainer.innerHTML = `<div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 font-semibold shadow-sm">Chưa có đề thi nào trong mục này.</div>`;
                return;
            }

            filteredExams.forEach(exam => {
                tsaContainer.innerHTML += buildExamCardHTML(exam);
            });
        }

        // --- HÀM LỌC VÀ RENDER ĐỀ THI HSA (MỚI) ---
        function filterHSA(category) {
            document.querySelectorAll('.hsa-tab').forEach(tab => {
                tab.classList.remove('bg-emerald-50', 'text-emerald-700');
                tab.classList.add('text-gray-500', 'hover:bg-gray-50');
            });
            const activeTab = document.getElementById(`tab-hsa-${category}`);
            if (activeTab) {
                activeTab.classList.remove('text-gray-500', 'hover:bg-gray-50');
                activeTab.classList.add('bg-emerald-50', 'text-emerald-700');
            }

            const hsaContainer = document.getElementById('hsa-exam-container');
            if (!hsaContainer) return;
            hsaContainer.innerHTML = '';
            
            const filteredExams = examsMeta.filter(exam => exam.type === 'HSA' && exam.category === category);

            if (filteredExams.length === 0) {
                hsaContainer.innerHTML = `<div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 font-semibold shadow-sm">Chưa có đề thi HSA nào trong mục này.</div>`;
                return;
            }

            filteredExams.forEach(exam => {
                hsaContainer.innerHTML += buildExamCardHTML(exam);
            });
        }

        // --- HÀM LỌC VÀ RENDER 4 MÔN THPT ---
        function filterTHPT(subject) {
            document.querySelectorAll('.thpt-tab').forEach(tab => {
                tab.classList.remove('bg-blue-50', 'text-blue-700');
                tab.classList.add('text-gray-500', 'hover:bg-gray-50');
            });
            const activeTab = document.getElementById(`tab-${subject}`);
            if(activeTab) {
                activeTab.classList.remove('text-gray-500', 'hover:bg-gray-50');
                activeTab.classList.add('bg-blue-50', 'text-blue-700');
            }

            const thptContainer = document.getElementById('thpt-exam-container');
            thptContainer.innerHTML = '';
            const filteredExams = examsMeta.filter(exam => exam.type === 'THPT' && exam.subject === subject);

            if (filteredExams.length === 0) {
                thptContainer.innerHTML = `<div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 font-semibold shadow-sm">Chưa có đề thi nào trong mục này.</div>`;
                return;
            }

            filteredExams.forEach(exam => {
                thptContainer.innerHTML += buildExamCardHTML(exam);
            });
        }

        // --- HÀM TÌM KIẾM ĐỀ THI TRÊN HEADER ---
        function handleSearchExam(keyword) {
            const q = keyword.trim().toLowerCase();
            if (!q) {
                clearSearch();
                return;
            }

            const views = ['view-home', 'view-exam-list', 'view-exam-hsa-list', 'view-exam-school-list', 'view-realtime-exam', 'view-documents', 'view-settings', 'view-history'];
            views.forEach(v => {
                const el = document.getElementById(v);
                if (el) { el.classList.add('hidden'); el.classList.remove('block', 'flex'); }
            });

            const searchView = document.getElementById('view-search-results');
            searchView.classList.remove('hidden');
            searchView.classList.add('block');

            const matched = examsMeta.filter(e => 
                e.title.toLowerCase().includes(q) || 
                e.type.toLowerCase().includes(q) || 
                (e.subject && e.subject.toLowerCase().includes(q))
            );

            document.getElementById('search-Summary-text').innerText = `Tìm thấy ${matched.length} đề thi khớp với từ khóa "${keyword}"`;
            const container = document.getElementById('search-exam-container');
            container.innerHTML = '';

            if (matched.length === 0) {
                container.innerHTML = `<div class="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 font-semibold shadow-sm">Không tìm thấy đề thi nào phù hợp.</div>`;
                return;
            }

            matched.forEach(exam => {
                container.innerHTML += buildExamCardHTML(exam);
            });
        }

        function clearSearch() {
            const input = document.getElementById('global-search-input');
            if (input) input.value = '';
            document.getElementById('view-search-results').classList.add('hidden');
            switchView('home');
        }

        // --- HÀM TỰ ĐỘNG SINH UI DANH SÁCH ĐỀ THI ---
        function renderExamLists() {
            filterTSA('math');
            filterHSA('math');
            filterTHPT('math');
        }

        // --- HỆ THỐNG ĐĂNG NHẬP ---
        function switchAuth(mode) {
            const tabLogin = document.getElementById('tab-login');
            const tabRegister = document.getElementById('tab-register');
            const formLogin = document.getElementById('form-login');
            const formRegister = document.getElementById('form-register');

            if (mode === 'login') {
                tabLogin.className = "flex-1 py-2 text-sm font-bold rounded-md bg-white shadow-sm text-navy transition-all";
                tabRegister.className = "flex-1 py-2 text-sm font-bold rounded-md text-gray-400 hover:text-navy transition-all";
                formLogin.classList.replace('hidden', 'block');
                formRegister.classList.replace('block', 'hidden');
            } else {
                tabRegister.className = "flex-1 py-2 text-sm font-bold rounded-md bg-white shadow-sm text-navy transition-all";
                tabLogin.className = "flex-1 py-2 text-sm font-bold rounded-md text-gray-400 hover:text-navy transition-all";
                formRegister.classList.replace('hidden', 'block');
                formLogin.classList.replace('block', 'hidden');
            }
        }

        function performRegister(event) {
            event.preventDefault();
            const email = document.getElementById('reg-email').value.trim();
            const existingUsers = JSON.parse(localStorage.getItem('yaecute_users')) || {};

            if (existingUsers[email]) {
                alert("Email này đã được đăng ký!");
            } else {
                existingUsers[email] = {
                    name: document.getElementById('reg-name').value.trim(),
                    password: document.getElementById('reg-password').value,
                    documents: [], dob: '', phone: '', school: '', className: '', examHistory: [],
                    streak: 0,
                    lastExamDate: null
                };
                localStorage.setItem('yaecute_users', JSON.stringify(existingUsers));
                alert("Đăng ký thành công! Vui lòng đăng nhập.");
                switchAuth('login');
                document.getElementById('login-email').value = email;
            }
        }

        function performLogin(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            const existingUsers = JSON.parse(localStorage.getItem('yaecute_users')) || {};

            if (email === 'admin@gmail.com' && !existingUsers['admin@gmail.com']) {
                existingUsers['admin@gmail.com'] = { 
                    name: 'Admin VIP', password: '123', documents: [], dob: '2008-01-01', phone: '0987654321', school: 'HUST', className: '12A1', examHistory: [], streak: 1, lastExamDate: null
                };
                localStorage.setItem('yaecute_users', JSON.stringify(existingUsers));
            }

            if (existingUsers[email] && existingUsers[email].password === password) {
                currentSessionEmail = email;
                currentUser = existingUsers[email];
                if(!currentUser.examHistory) currentUser.examHistory = []; 
                
                checkAndUpdateStreakOnLogin();

                document.getElementById('display-user-name').textContent = currentUser.name;
                document.getElementById('display-user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
                
                document.getElementById('view-auth').classList.add('hidden');
                document.getElementById('app-container').classList.replace('hidden', 'flex');
                
                renderExamLists();
                switchView('home');
            } else {
                document.getElementById('login-error').classList.remove('hidden');
            }
        }

        function logoutUser(event) {
            event.preventDefault();
            currentSessionEmail = null;
            document.getElementById('app-container').classList.replace('flex', 'hidden');
            document.getElementById('view-auth').classList.remove('hidden');
        }

        function toggleDropdown() {
            document.getElementById('profile-dropdown').classList.toggle('hidden');
        }

        function switchView(viewName) {
            document.getElementById('profile-dropdown').classList.add('hidden');
            document.getElementById('view-search-results').classList.add('hidden');

            // Đóng sidebar mobile nếu đang mở
            const sidebar = document.getElementById('main-sidebar');
            const backdrop = document.getElementById('mobile-sidebar-backdrop');
            if (!backdrop.classList.contains('hidden')) {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('flex');
                backdrop.classList.add('hidden');
            }

            const views = ['view-home', 'view-exam-list', 'view-exam-hsa-list', 'view-exam-school-list', 'view-realtime-exam', 'view-documents', 'view-settings', 'view-history'];
            
            views.forEach(v => {
                let el = document.getElementById(v);
                if(el) { 
                    el.classList.add('hidden'); 
                    el.classList.remove('block', 'flex', 'animate-view'); 
                }
            });
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

            let targetView = null;

            if (viewName === 'home') {
                targetView = document.getElementById('view-home');
                targetView.classList.add('block');
                document.getElementById('nav-home').classList.add('active');
                renderStreakLeaderboard(); 
            } else if (viewName === 'exam-list') {
                targetView = document.getElementById('view-exam-list');
                targetView.classList.add('block');
                document.getElementById('nav-exam-list').classList.add('active');
            } else if (viewName === 'exam-hsa-list') {
                targetView = document.getElementById('view-exam-hsa-list');
                targetView.classList.add('block');
                document.getElementById('nav-exam-hsa-list').classList.add('active');
            } else if (viewName === 'exam-school-list') {
                targetView = document.getElementById('view-exam-school-list');
                targetView.classList.add('block');
                document.getElementById('nav-exam-school-list').classList.add('active');
            } else if (viewName === 'realtime-exam') {
                targetView = document.getElementById('view-realtime-exam');
                targetView.classList.add('flex');
                document.getElementById('nav-realtime-exam').classList.add('active');
            } else if (viewName === 'documents') {
                targetView = document.getElementById('view-documents');
                targetView.classList.add('block');
                document.getElementById('nav-documents').classList.add('active');
                loadDocuments();
            } else if (viewName === 'settings') {
                targetView = document.getElementById('view-settings');
                targetView.classList.add('block');
                document.getElementById('nav-settings').classList.add('active');
                
                document.getElementById('profile-name').value = currentUser.name || '';
                document.getElementById('profile-email').value = currentSessionEmail || '';
                document.getElementById('profile-dob').value = currentUser.dob || '';
                document.getElementById('profile-phone').value = currentUser.phone || '';
                document.getElementById('profile-school').value = currentUser.school || '';
                document.getElementById('profile-class').value = currentUser.className || '';
            } else if (viewName === 'history') {
                targetView = document.getElementById('view-history');
                targetView.classList.add('block');
                document.getElementById('nav-history').classList.add('active');
                renderExamHistory();
            }

            if (targetView) {
                targetView.classList.remove('hidden');
                void targetView.offsetWidth; 
                targetView.classList.add('animate-view');
            }
        }

        // --- BẢNG XẾP HẠNG CHUỖI HỌC TẬP ---
        function renderStreakLeaderboard() {
            const listContainer = document.getElementById('streak-leaderboard-list');
            if (!listContainer) return;

            const usersObj = JSON.parse(localStorage.getItem('yaecute_users')) || {};
            const usersArray = [];

            for (const email in usersObj) {
                usersArray.push({
                    email: email,
                    name: usersObj[email].name || 'Học viên ẩn danh',
                    streak: usersObj[email].streak || 0
                });
            }

            usersArray.sort((a, b) => b.streak - a.streak);
            const topUsers = usersArray.slice(0, 5);
            listContainer.innerHTML = '';

            if (topUsers.length === 0 || topUsers.every(u => u.streak === 0)) {
                listContainer.innerHTML = '<li class="p-8 text-center text-gray-500">Chưa có ai đạt chuỗi học tập. Hãy là người đầu tiên! 🔥</li>';
                return;
            }

            topUsers.forEach((user, index) => {
                let rankIcon = '';
                if (index === 0) rankIcon = '<i class="fa-solid fa-trophy text-yellow-400 text-2xl drop-shadow-md"></i>';
                else if (index === 1) rankIcon = '<i class="fa-solid fa-medal text-gray-300 text-xl"></i>';
                else if (index === 2) rankIcon = '<i class="fa-solid fa-medal text-orange-400 text-xl"></i>';
                else rankIcon = `<span class="text-gray-400 font-black text-lg w-6 text-center">${index + 1}</span>`;

                const isCurrentUser = user.email === currentSessionEmail;
                const bgClass = isCurrentUser ? 'bg-orange-50/50' : 'bg-white';
                const nameClass = isCurrentUser ? 'text-orange-600' : 'text-navy';

                listContainer.innerHTML += `
                    <li class="flex items-center justify-between p-4 ${bgClass} hover:bg-gray-50 transition-colors">
                        <div class="flex items-center gap-5">
                            <div class="w-8 flex justify-center shrink-0">${rankIcon}</div>
                            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-sm shrink-0" style="background-color: #1a365d;">
                                ${user.name.charAt(0).toUpperCase()}
                            </div>
                            <div class="font-bold ${nameClass} truncate max-w-[150px] md:max-w-xs">
                                ${user.name} ${isCurrentUser ? '<span class="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full ml-1 uppercase">Bạn</span>' : ''}
                            </div>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            <i class="fa-solid fa-fire-flame-curved text-orange-500"></i>
                            <span class="font-black text-gray-800 text-lg w-6 text-right">${user.streak}</span>
                            <span class="text-xs text-gray-500 font-medium">ngày</span>
                        </div>
                    </li>
                `;
            });
        }

        // --- CÀI ĐẶT & TÀI LIỆU ---
        function saveSettings(event) {
            event.preventDefault();
            currentUser.name = document.getElementById('profile-name').value;
            currentUser.dob = document.getElementById('profile-dob').value;
            currentUser.phone = document.getElementById('profile-phone').value;
            currentUser.school = document.getElementById('profile-school').value;
            currentUser.className = document.getElementById('profile-class').value;

            let users = JSON.parse(localStorage.getItem('yaecute_users'));
            users[currentSessionEmail] = currentUser;
            localStorage.setItem('yaecute_users', JSON.stringify(users));
            
            document.getElementById('display-user-name').textContent = currentUser.name;
            showToast("Đã lưu cài đặt!");
        }

        function addDocument(event) {
            event.preventDefault();
            const title = document.getElementById('doc-title').value;
            currentUser.documents.unshift({ id: Date.now(), title: title, date: new Date().toLocaleDateString('vi-VN') });
            let users = JSON.parse(localStorage.getItem('yaecute_users'));
            users[currentSessionEmail] = currentUser;
            localStorage.setItem('yaecute_users', JSON.stringify(users));
            event.target.reset();
            loadDocuments();
            showToast("Thêm tài liệu thành công!");
        }

        function deleteDocument(docId) {
            currentUser.documents = currentUser.documents.filter(d => d.id !== docId);
            let users = JSON.parse(localStorage.getItem('yaecute_users'));
            users[currentSessionEmail] = currentUser;
            localStorage.setItem('yaecute_users', JSON.stringify(users));
            loadDocuments();
        }

        function loadDocuments() {
            const list = document.getElementById('document-list');
            list.innerHTML = '';
            if(!currentUser.documents || currentUser.documents.length === 0) {
                list.innerHTML = '<p class="text-gray-400">Chưa có tài liệu nào.</p>';
                return;
            }
            currentUser.documents.forEach(doc => {
                list.innerHTML += `
                    <div class="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                            <div class="font-bold text-sm text-navy">${doc.title}</div>
                            <div class="text-xs text-gray-500 mt-0.5">${doc.date}</div>
                        </div>
                        <button onclick="deleteDocument(${doc.id})" class="text-gray-400 hover:text-red-500 p-2"><i class="fa-regular fa-trash-can"></i></button>
                    </div>`;
            });
        }

        function showToast(msg) {
            const toast = document.getElementById('toast-success');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
        }

        // --- LOGIC CHUỖI HỌC TẬP ---
        function checkAndUpdateStreakOnLogin() {
            if (!currentUser) return;
            
            if (typeof currentUser.streak === 'undefined') currentUser.streak = 0;
            if (typeof currentUser.lastExamDate === 'undefined') currentUser.lastExamDate = null;

            const today = new Date();
            today.setHours(0, 0, 0, 0); 

            if (currentUser.lastExamDate) {
                const lastDate = new Date(currentUser.lastExamDate);
                lastDate.setHours(0, 0, 0, 0);
                
                const diffTime = Math.abs(today - lastDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays > 1) {
                    currentUser.streak = 0;
                }
            }

            let users = JSON.parse(localStorage.getItem('yaecute_users'));
            users[currentSessionEmail] = currentUser;
            localStorage.setItem('yaecute_users', JSON.stringify(users));

            renderStreakUI();
        }

        function renderStreakUI() {
            const streakCountEl = document.getElementById('streak-days-count');
            const streakIcon = document.getElementById('streak-icon');
            
            if(streakCountEl && currentUser) {
                streakCountEl.innerText = currentUser.streak || 0;
                
                if (currentUser.streak > 0) {
                    streakIcon.classList.remove('text-gray-400');
                    streakIcon.classList.add('text-orange-500', 'animate-pulse'); 
                } else {
                    streakIcon.classList.remove('text-orange-500', 'animate-pulse');
                    streakIcon.classList.add('text-gray-400');
                }
            }
        }

        // --- PHÒNG THI SOLO ---
        function openConfirmModal(examId) {
            const examInfo = examsMeta.find(e => e.id === examId);
            if(!examInfo) return alert("Không tìm thấy dữ liệu đề thi!");

            const actualCount = (allExamsData[examId] && allExamsData[examId].length > 0) ? allExamsData[examId].length : examInfo.questionsCount;

            document.getElementById('confirm-exam-name').innerText = examInfo.title;
            document.getElementById('confirm-time').innerText = examInfo.time + " phút";
            document.getElementById('confirm-questions').innerText = actualCount + " câu";
            document.getElementById('confirm-name').innerText = currentUser.name;
            
            currentExamId = examId;
            currentExamTime = examInfo.time; 
            totalExamTime = examInfo.time * 60;
            currentExamType = examInfo.type; 
            userAnswers = {}; 
            
            playLogoBounce(() => {
                document.getElementById('modal-confirm').classList.remove('hidden');
            });
        }

        function closeConfirmModal() {
            document.getElementById('modal-confirm').classList.add('hidden');
        }

        function renderExamContainer(examData) {
            const container = document.getElementById('exam-content-container'); 
            container.innerHTML = ''; 

            if(examData.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-500 mt-10">Dữ liệu đề thi đang được cập nhật...</p>';
                return;
            }

            examData.forEach((q, index) => {
                let questionHTML = `
                    <div id="question-${index + 1}" class="flex items-start gap-4 mb-10 scroll-mt-6">
                        <div class="w-10 h-10 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">${index + 1}</div>
                        <div class="pt-1 flex-1 text-lg text-gray-800 w-full">
                            <div class="mb-4 leading-relaxed">${q.content}</div>
                `;

                if (q.type === 'true_false') {
                    questionHTML += `
                        <div class="border border-gray-200 rounded-lg overflow-hidden bg-white mt-4">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-50 text-gray-600 text-sm">
                                        <th class="py-3 px-4 border-b font-semibold w-24">Mệnh đề</th>
                                        <th class="py-3 px-4 border-b font-semibold">Nội dung</th>
                                        <th class="py-3 px-4 border-b font-semibold text-center w-20">Đúng</th>
                                        <th class="py-3 px-4 border-b font-semibold text-center w-20">Sai</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-800">
                    `;
                    q.propositions.forEach((prop, pIndex) => {
                        const char = String.fromCharCode(97 + pIndex); 
                        questionHTML += `
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-4 px-4 align-top font-semibold">${char})</td>
                                        <td class="py-4 px-4">${prop}</td>
                                        <td class="py-4 px-4 text-center"><div class="custom-radio" onclick="selectRadio(this, ${q.id}, ${pIndex}, 'true')"></div></td>
                                        <td class="py-4 px-4 text-center"><div class="custom-radio" onclick="selectRadio(this, ${q.id}, ${pIndex}, 'false')"></div></td>
                                    </tr>
                        `;
                    });
                    questionHTML += `</tbody></table></div>`;
                } 
                else if (q.type === 'fill_blank') {
                    questionHTML += `
                        <div class="mt-4 flex flex-wrap items-center gap-3">
                            <span class="font-semibold text-gray-700">Điền đáp án:</span>
                            <input type="text" oninput="saveFillBlank(${q.id}, this.value)" class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 font-mono" placeholder="Nhập giá trị...">
                        </div>
                    `;
                }
                else if (q.type === 'multiple_choice') {
                    questionHTML += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`;
                    q.options.forEach((opt, optIdx) => {
                        const char = String.fromCharCode(65 + optIdx);
                        questionHTML += `
                            <button onclick="selectOption(this, ${q.id}, '${char}')" class="text-left py-3 px-5 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer">
                                ${opt}
                            </button>
                        `;
                    });
                    questionHTML += `</div>`;
                }

                questionHTML += `</div></div>`;
                container.innerHTML += questionHTML;
            });

            if (window.MathJax) {
                MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
            }
        }

        function startActualExam() {
            document.getElementById('modal-confirm').classList.add('hidden');
            
            playLogoBounce(() => {
                document.getElementById('app-container').classList.add('hidden');
                document.getElementById('view-active-exam').classList.remove('hidden');
                
                const examInfo = examsMeta.find(e => e.id === currentExamId);
                document.getElementById('active-exam-title').innerText = examInfo.title;
                document.getElementById('exam-student-name').innerText = currentUser.name;
                
                const grid = document.getElementById('question-grid');
                grid.innerHTML = '';
                
                const examQuestionsData = allExamsData[currentExamId] || [];
                
                examQuestionsData.forEach((q, index) => {
                    let classes = "w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center transition-colors cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-600";
                    grid.innerHTML += `<button id="grid-btn-${q.id}" onclick="scrollToQuestion(${index + 1})" class="${classes}">${index + 1}</button>`;
                });

                const watermark = document.getElementById('watermark-container');
                watermark.innerHTML = '';
                for(let i=0; i<30; i++) {
                    watermark.innerHTML += `<span class="watermark-text">${currentUser.name} - ${currentSessionEmail}</span>`;
                }

                renderExamContainer(examQuestionsData);

                let timer = currentExamTime * 60;
                clearInterval(soloTimerInterval);
                soloTimerInterval = setInterval(() => {
                    let h = Math.floor(timer / 3600);
                    let m = Math.floor((timer % 3600) / 60);
                    let s = timer % 60;
                    document.getElementById('countdown-timer').innerText = 
                        `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
                    if (--timer < 0) {
                        clearInterval(soloTimerInterval);
                        alert("Hết giờ làm bài!");
                        submitExam(true);
                    }
                }, 1000);
            });
        }

        // LƯU ĐÁP ÁN CHO 3 DẠNG CÂU HỎI
        function saveFillBlank(qId, value) {
            userAnswers[qId] = value.trim();
            updateQuestionGridStatus(qId, value.trim() !== "");
        }

        function selectOption(btn, qId, char) {
            const siblings = btn.parentElement.querySelectorAll('button');
            siblings.forEach(b => b.classList.remove('bg-blue-50', 'border-blue-500', 'text-blue-700', 'ring-2', 'ring-blue-200'));
            btn.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-700', 'ring-2', 'ring-blue-200');
            
            userAnswers[qId] = char;
            updateQuestionGridStatus(qId, true);
        }

        function selectRadio(element, qId, pIndex, value) {
            const tr = element.closest('tr');
            tr.querySelectorAll('.custom-radio').forEach(r => r.classList.remove('selected'));
            element.classList.add('selected');
            
            if(!userAnswers[qId]) userAnswers[qId] = {};
            userAnswers[qId][pIndex] = value;
            updateQuestionGridStatus(qId, true);
        }

        function updateQuestionGridStatus(qId, isAnswered) {
            const btn = document.getElementById(`grid-btn-${qId}`);
            if(btn) {
                if (isAnswered) {
                    btn.classList.remove('bg-gray-100', 'text-gray-600');
                    btn.classList.add('bg-red-600', 'text-white');
                } else {
                    btn.classList.remove('bg-red-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-600');
                }
            }
        }

        function scrollToQuestion(index) {
            const questionElement = document.getElementById('question-' + index);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // --- CHUẨN HÓA SO SÁNH ĐÁP ÁN ĐIỀN KHUYẾT ---
        function normalizeBlankAnswer(val) {
            if (typeof val !== 'string') return '';
            return val
                .trim()
                .replace(/\s*;\s*/g, '; ')
                .replace(/,/g, '.')
                .toLowerCase();
        }

        function isFillBlankMatch(userVal, correctVal) {
            if (!userVal) return false;
            return normalizeBlankAnswer(userVal) === normalizeBlankAnswer(correctVal);
        }

        // --- CHẤM ĐIỂM TỰ ĐỘNG CHUẨN THANG 10 CHO TỪNG MÔN ---
        function calculateScore() {
            let totalScore = 0;
            const examQuestionsData = allExamsData[currentExamId] || [];
            let totalQuestions = examQuestionsData.length;
            let correctCount = 0;

            if(totalQuestions === 0) return { score: 0, correct: 0, total: 0 };

            let fillBlankPoint = 0.5;
            if (currentExamType === 'THPT') {
                const mcCount = examQuestionsData.filter(q => q.type === 'multiple_choice').length;
                const fbCount = examQuestionsData.filter(q => q.type === 'fill_blank').length;
                if (mcCount === 18 && fbCount === 6) {
                    fillBlankPoint = 0.25;
                } else if (mcCount === 15 && fbCount === 5) {
                    fillBlankPoint = 0.45;
                }
            }

            examQuestionsData.forEach(q => {
                let isFullyCorrect = false;

                if (q.type === 'multiple_choice') {
                    if (userAnswers[q.id] === q.correctAnswer) {
                        isFullyCorrect = true;
                        if (currentExamType === 'THPT') totalScore += 0.25;
                    }
                } 
                else if (q.type === 'fill_blank') {
                    if (isFillBlankMatch(userAnswers[q.id], q.correctAnswer)) {
                        isFullyCorrect = true;
                        if (currentExamType === 'THPT') totalScore += fillBlankPoint;
                    }
                } 
                else if (q.type === 'true_false') {
                    let correctProps = 0;
                    if (userAnswers[q.id]) {
                        for (let i = 0; i < q.propositions.length; i++) {
                            if (userAnswers[q.id][i] === q.correctAnswer[i]) correctProps++;
                        }
                    }
                    
                    if (currentExamType === 'THPT') {
                        if (correctProps === 1) totalScore += 0.1;
                        else if (correctProps === 2) totalScore += 0.25;
                        else if (correctProps === 3) totalScore += 0.5;
                        else if (correctProps === 4) {
                            totalScore += 1.0;
                            isFullyCorrect = true;
                        }
                    } else {
                        if (correctProps === q.propositions.length) isFullyCorrect = true;
                    }
                }

                if (isFullyCorrect) correctCount++;
            });

            if (currentExamType === 'TSA' || currentExamType === 'HSA') {
                totalScore = correctCount; 
            }

            return {
                score: currentExamType === 'THPT' ? totalScore.toFixed(2) : totalScore,
                correct: correctCount,
                total: totalQuestions
            };
        }

        function submitExam(forceSubmit = false) {
            if(forceSubmit || confirm("Xác nhận nộp bài? Hệ thống sẽ bắt đầu chấm điểm.")) {
                clearInterval(soloTimerInterval);
                
                let timeRemainingStr = document.getElementById('countdown-timer').innerText;
                let parts = timeRemainingStr.split(':');
                let secondsRemaining = (+parts[0]) * 3600 + (+parts[1]) * 60 + (+parts[2]);
                let timeSpent = Math.max(0, totalExamTime - secondsRemaining);
                
                let m = Math.floor(timeSpent / 60);
                let s = timeSpent % 60;
                let timeFormatted = `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;

                const result = calculateScore();
                const accuracy = result.total > 0 ? ((result.correct / result.total) * 100).toFixed(1) : 0;

                // --- TĂNG CHUỖI HỌC TẬP ---
                const todayStr = new Date().toISOString().split('T')[0]; 
                if (currentUser.lastExamDate !== todayStr) {
                    currentUser.streak = (currentUser.streak || 0) + 1;
                    currentUser.lastExamDate = todayStr;
                    showToast(`🔥 Tuyệt vời! Bạn đã đạt chuỗi ${currentUser.streak} ngày!`);
                    renderStreakUI(); 
                    renderStreakLeaderboard();
                }

                // --- LƯU LỊCH SỬ LÀM BÀI ---
                if (!currentUser.examHistory) {
                    currentUser.examHistory = []; 
                }
                
                currentUser.examHistory.unshift({
                    id: Date.now(),
                    examId: currentExamId,
                    examName: document.getElementById('active-exam-title').innerText,
                    type: currentExamType,
                    score: result.score,
                    total: result.total,
                    correct: result.correct,
                    timeSpent: timeFormatted,
                    savedAnswers: JSON.parse(JSON.stringify(userAnswers)),
                    date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})
                });

                let users = JSON.parse(localStorage.getItem('yaecute_users'));
                users[currentSessionEmail] = currentUser;
                localStorage.setItem('yaecute_users', JSON.stringify(users));

                document.getElementById('view-active-exam').classList.add('hidden');
                document.getElementById('view-exam-result').classList.remove('hidden');

                document.getElementById('result-exam-title').innerText = document.getElementById('active-exam-title').innerText;
                document.getElementById('result-time-spent').innerText = timeFormatted;
                document.getElementById('result-accuracy').innerText = accuracy + '%';
                document.getElementById('result-correct-count').innerText = `${result.correct}/${result.total}`;
                
                if (currentExamType === 'THPT') {
                    document.getElementById('result-score-label').innerText = "ĐIỂM SỐ (THANG 10)";
                    document.getElementById('result-score-value').innerText = result.score;
                    document.getElementById('result-exam-type-badge').innerText = "Hệ số: Chuẩn cấu trúc Bộ GD&ĐT";
                } else {
                    document.getElementById('result-score-label').innerText = "TỔNG SỐ CÂU ĐÚNG";
                    document.getElementById('result-score-value').innerText = `${result.score}/${result.total}`;
                    document.getElementById('result-exam-type-badge').innerText = currentExamType === 'HSA' ? "Hệ số: Barem HSA (ĐHQGHN)" : "Hệ số: Barem TSA";
                }

                lastActiveViewBeforeReview = currentExamType === 'THPT' ? 'exam-school-list' : (currentExamType === 'HSA' ? 'exam-hsa-list' : 'exam-list');
            }
        }

        function closeResultAndGoHome() {
            document.getElementById('view-exam-result').classList.add('hidden');
            document.getElementById('app-container').classList.remove('hidden');
            switchView(lastActiveViewBeforeReview);
        }

        // --- HỆ THỐNG XEM LẠI ĐÁP ÁN ---
        function checkQuestionCorrectness(q) {
            if (!userAnswers[q.id]) return false;
            if (q.type === 'multiple_choice') {
                return userAnswers[q.id] === q.correctAnswer;
            } else if (q.type === 'fill_blank') {
                return isFillBlankMatch(userAnswers[q.id], q.correctAnswer);
            } else if (q.type === 'true_false') {
                let correctProps = 0;
                for (let i = 0; i < q.propositions.length; i++) {
                    if (userAnswers[q.id][i] === q.correctAnswer[i]) correctProps++;
                }
                return correctProps === q.propositions.length; 
            }
            return false;
        }

        function openReviewExam() {
            document.getElementById('view-exam-result').classList.add('hidden');
            document.getElementById('app-container').classList.add('hidden');
            document.getElementById('view-exam-review').classList.remove('hidden');
            
            const examInfo = examsMeta.find(e => e.id === currentExamId);
            document.getElementById('review-exam-title').innerText = examInfo ? examInfo.title : "Bài thi";

            const examQuestionsData = allExamsData[currentExamId] || [];
            
            const grid = document.getElementById('review-question-grid');
            grid.innerHTML = '';
            
            examQuestionsData.forEach((q, index) => {
                let isFullyCorrect = checkQuestionCorrectness(q);
                let bgClass = isFullyCorrect ? "bg-green-500 text-white shadow-sm" : "bg-red-500 text-white shadow-sm";
                grid.innerHTML += `<button onclick="scrollToReviewQuestion(${index + 1})" class="w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center transition-colors cursor-pointer ${bgClass} hover:opacity-80">${index + 1}</button>`;
            });

            renderReviewContainer(examQuestionsData);
        }

        function openReviewFromHistory(historyId) {
            const hist = currentUser.examHistory.find(h => h.id === historyId);
            if (!hist) return;
            currentExamId = hist.examId;
            currentExamType = hist.type;
            userAnswers = hist.savedAnswers || {};
            lastActiveViewBeforeReview = 'history';
            openReviewExam();
        }

        function renderReviewContainer(examData) {
            const container = document.getElementById('review-content-container'); 
            container.innerHTML = ''; 

            examData.forEach((q, index) => {
                let isFullyCorrect = checkQuestionCorrectness(q);
                let qColor = isFullyCorrect ? "bg-green-500" : "bg-red-500";
                let borderColor = isFullyCorrect ? "border-green-200 bg-green-50/30" : "border-red-200 bg-red-50/30";
                
                let questionHTML = `
                    <div id="review-question-${index + 1}" class="flex items-start gap-4 mb-8 scroll-mt-6 p-6 rounded-2xl border ${borderColor}">
                        <div class="w-10 h-10 shrink-0 ${qColor} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">${index + 1}</div>
                        <div class="pt-1 flex-1 text-lg text-gray-800 w-full">
                            <div class="mb-4 leading-relaxed font-medium">${q.content}</div>
                `;

                if (q.type === 'true_false') {
                    questionHTML += `
                        <div class="border border-gray-200 rounded-lg overflow-hidden bg-white mt-4">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-100 text-gray-600 text-sm">
                                        <th class="py-3 px-4 border-b font-semibold w-20">Mệnh đề</th>
                                        <th class="py-3 px-4 border-b font-semibold">Nội dung</th>
                                        <th class="py-3 px-4 border-b font-semibold text-center w-32">Đáp án chuẩn</th>
                                        <th class="py-3 px-4 border-b font-semibold text-center w-32">Bạn chọn</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-800 text-base">
                    `;
                    q.propositions.forEach((prop, pIndex) => {
                        const char = String.fromCharCode(97 + pIndex); 
                        let uAns = userAnswers[q.id] ? userAnswers[q.id][pIndex] : null;
                        let cAns = q.correctAnswer[pIndex];
                        
                        let isRightRow = uAns === cAns;
                        let rowBg = uAns ? (isRightRow ? "bg-green-50/50" : "bg-red-50/50") : "bg-gray-50";
                        
                        let cLabel = cAns === 'true' ? '<span class="text-green-600 font-bold">Đúng</span>' : '<span class="text-red-600 font-bold">Sai</span>';
                        
                        let uLabel = '<span class="text-gray-400 italic">Bỏ trống</span>';
                        if (uAns) {
                            if (isRightRow) uLabel = `<span class="text-green-600 font-bold"><i class="fa-solid fa-check"></i> ${uAns === 'true' ? 'Đúng' : 'Sai'}</span>`;
                            else uLabel = `<span class="text-red-600 font-bold"><i class="fa-solid fa-xmark"></i> ${uAns === 'true' ? 'Đúng' : 'Sai'}</span>`;
                        }

                        questionHTML += `
                                    <tr class="border-b ${rowBg}">
                                        <td class="py-4 px-4 align-top font-semibold text-center">${char})</td>
                                        <td class="py-4 px-4">${prop}</td>
                                        <td class="py-4 px-4 text-center bg-gray-50/50 border-l">${cLabel}</td>
                                        <td class="py-4 px-4 text-center border-l">${uLabel}</td>
                                    </tr>
                        `;
                    });
                    questionHTML += `</tbody></table></div>`;
                } 
                else if (q.type === 'fill_blank') {
                    let uAns = userAnswers[q.id] || "";
                    let isCorrect = isFillBlankMatch(uAns, q.correctAnswer);
                    questionHTML += `
                        <div class="mt-4 flex flex-col gap-3 p-4 bg-white rounded-xl border border-gray-200">
                            <div class="flex items-center gap-3">
                                <span class="font-semibold text-gray-500 text-sm uppercase">Câu trả lời của bạn:</span>
                                <div class="px-4 py-2 border rounded-lg font-mono font-bold ${isCorrect ? 'border-green-500 bg-green-50 text-green-700' : (uAns === "" ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-red-500 bg-red-50 text-red-700')}">
                                    ${uAns === "" ? "Bỏ trống" : uAns}
                                </div>
                                ${isCorrect ? '<i class="fa-solid fa-check text-green-500 text-xl"></i>' : '<i class="fa-solid fa-xmark text-red-500 text-xl"></i>'}
                            </div>
                            ${!isCorrect ? `<div class="flex items-center gap-3 mt-2"><span class="font-semibold text-gray-500 text-sm uppercase">Đáp án chuẩn:</span><div class="px-4 py-2 border border-green-500 bg-green-50 rounded-lg font-mono font-bold text-green-700">${q.correctAnswer}</div></div>` : ''}
                        </div>
                    `;
                }
                else if (q.type === 'multiple_choice') {
                    questionHTML += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">`;
                    q.options.forEach((opt, optIdx) => {
                        const char = String.fromCharCode(65 + optIdx);
                        let isCorrectAns = q.correctAnswer === char;
                        let isUserSelected = userAnswers[q.id] === char;
                        
                        let btnClass = "border-gray-200 bg-white text-gray-600"; 
                        
                        if (isCorrectAns) {
                            btnClass = "border-green-500 bg-green-50 text-green-800 ring-2 ring-green-200 font-bold";
                        } else if (isUserSelected && !isCorrectAns) {
                            btnClass = "border-red-500 bg-red-50 text-red-800 ring-2 ring-red-200 font-bold opacity-80 line-through";
                        }

                        questionHTML += `
                            <div class="text-left py-3 px-5 border rounded-xl ${btnClass} flex justify-between items-center">
                                <span>${opt}</span>
                                ${isCorrectAns ? '<i class="fa-solid fa-circle-check text-green-600 text-xl"></i>' : (isUserSelected ? '<i class="fa-solid fa-circle-xmark text-red-600 text-xl"></i>' : '')}
                            </div>
                        `;
                    });
                    questionHTML += `</div>`;
                }

                questionHTML += `</div></div>`;
                container.innerHTML += questionHTML;
            });

            if (window.MathJax) {
                MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
            }
        }

        function closeReviewAndGoHome() {
            document.getElementById('view-exam-review').classList.add('hidden');
            document.getElementById('app-container').classList.remove('hidden');
            switchView(lastActiveViewBeforeReview);
        }

        function scrollToReviewQuestion(index) {
            const questionElement = document.getElementById('review-question-' + index);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // --- HÀM HIỂN THỊ LỊCH SỬ LÀM BÀI (CÓ NÚT XEM LẠI ĐÁP ÁN) ---
        function renderExamHistory() {
            const container = document.getElementById('exam-history-container');
            if (!container) return;

            if (!currentUser.examHistory || currentUser.examHistory.length === 0) {
                container.innerHTML = `
                    <div class="text-center text-gray-400 py-8 mt-10 flex flex-col items-center">
                        <i class="fa-solid fa-clock-rotate-left text-4xl mb-3 text-gray-200"></i>
                        <p class="font-medium">Bạn chưa hoàn thành bài thi nào.</p>
                        <p class="text-sm mt-1">Hãy chọn một đề thi ở thư viện để bắt đầu!</p>
                    </div>`;
                return;
            }

            let html = '<div class="space-y-4">';
            currentUser.examHistory.forEach(hist => {
                let typeBadge = hist.type === 'TSA' 
                    ? '<span class="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider">TSA</span>'
                    : '<span class="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider">THPT</span>';
                
                let scoreDisplay = hist.type === 'THPT' 
                    ? `<span class="text-2xl font-black text-custom-red">${hist.score}</span><span class="text-sm text-gray-500 ml-1">điểm</span>`
                    : `<span class="text-2xl font-black text-custom-red">${hist.score}/${hist.total}</span><span class="text-sm text-gray-500 ml-1">câu</span>`;

                html += `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-gray-100 rounded-xl hover:bg-gray-50 hover:shadow-sm transition-all gap-4">
                        <div class="flex items-start gap-4">
                            <div class="mt-1 shrink-0">${typeBadge}</div>
                            <div>
                                <div class="font-bold text-navy text-base leading-tight mb-1">${hist.examName}</div>
                                <div class="text-xs text-gray-500 flex items-center gap-4 mt-2">
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-calendar"></i> ${hist.date}</span>
                                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-clock"></i> ${hist.timeSpent}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 justify-between sm:justify-end shrink-0">
                            <div class="text-right">
                                ${scoreDisplay}
                                <div class="text-xs font-bold text-green-600 mt-0.5">${hist.correct}/${hist.total} câu đúng</div>
                            </div>
                            <button onclick="openReviewFromHistory(${hist.id})" class="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg text-xs transition-colors">
                                Xem đáp án
                            </button>
                        </div>
                    </div>
                `;
            });
            
            html += '</div>';
            container.innerHTML = html;
        }

        // --- LOGIC PHÒNG THỰC CHIẾN (HỖ TRỢ GIẢ LẬP TRỰC TIẾP KHI CHẠY TRÊN GITHUB PAGES) ---
        let rtQuestions = [];
        let rtCurrentIndex = 0;
        let rtTimerInterval = null;
        let rtPlayers = [];

        function startRealtimeExam() {
            // Lấy ngẫu nhiên 5 câu multiple_choice từ ngân hàng đề
            let pool = [];
            Object.values(allExamsData).forEach(arr => {
                arr.forEach(q => {
                    if (q.type === 'multiple_choice') pool.push(q);
                });
            });
            rtQuestions = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
            rtCurrentIndex = 0;

            rtPlayers = [
                { name: currentUser ? currentUser.name : "Bạn", score: 0, isMe: true },
                { name: "Nguyễn Minh Tuấn (HUST)", score: 0, isMe: false },
                { name: "Lê Hoàng Nam (Chuyên KHTN)", score: 0, isMe: false },
                { name: "Phạm Bảo Ngọc (12A1)", score: 0, isMe: false }
            ];

            document.getElementById('room-status').innerHTML = `<i class="fa-solid fa-fire text-red-500"></i> Đang thi đấu trực tiếp`;
            document.getElementById('room-status').className = "px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg text-sm flex items-center gap-2";
            document.getElementById('rt-exam-waiting').classList.add('hidden');
            document.getElementById('rt-exam-content').classList.remove('hidden');

            renderRealtimeLeaderboard();
            loadRealtimeQuestion();
        }

        function renderRealtimeLeaderboard() {
            const sorted = [...rtPlayers].sort((a, b) => b.score - a.score);
            const ul = document.getElementById('rt-live-leaderboard');
            ul.innerHTML = '';
            sorted.forEach((p, idx) => {
                ul.innerHTML += `
                    <li class="flex items-center justify-between p-3 rounded-xl border ${p.isMe ? 'bg-orange-50 border-orange-200 font-bold' : 'bg-gray-50 border-gray-100'}">
                        <div class="flex items-center gap-2.5 truncate">
                            <span class="w-6 h-6 rounded-full ${idx === 0 ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-700'} text-xs font-black flex items-center justify-center shrink-0">${idx + 1}</span>
                            <span class="text-sm text-navy truncate">${p.name}</span>
                        </div>
                        <span class="text-sm font-black text-custom-red shrink-0">${p.score} đ</span>
                    </li>
                `;
            });
        }

        function loadRealtimeQuestion() {
            clearInterval(rtTimerInterval);
            if (rtCurrentIndex >= rtQuestions.length) {
                document.getElementById('rt-exam-content').innerHTML = `
                    <div class="flex-1 flex flex-col items-center justify-center text-center py-8">
                        <i class="fa-solid fa-trophy text-5xl text-yellow-400 mb-4"></i>
                        <h3 class="text-2xl font-black text-navy mb-2">Kết thúc trận đấu!</h3>
                        <p class="text-gray-500 mb-6">Xem thứ hạng chung cuộc của bạn ở Bảng xếp hạng bên phải.</p>
                        <button onclick="resetRealtimeView()" class="px-6 py-2.5 bg-custom-red text-white font-bold rounded-xl shadow">Đấu trận mới</button>
                    </div>
                `;
                document.getElementById('room-status').innerHTML = `<i class="fa-solid fa-check"></i> Đã kết thúc`;
                return;
            }

            const q = rtQuestions[rtCurrentIndex];
            document.getElementById('rt-question-progress').innerText = `Câu ${rtCurrentIndex + 1}/${rtQuestions.length}`;
            document.getElementById('rt-live-question-text').innerHTML = q.content;

            const optContainer = document.getElementById('rt-live-options');
            optContainer.innerHTML = '';
            q.options.forEach((opt, idx) => {
                const char = String.fromCharCode(65 + idx);
                optContainer.innerHTML += `
                    <button onclick="answerRealtimeQuestion('${char}')" class="text-left p-4 border border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 font-medium transition-all">
                        ${opt}
                    </button>
                `;
            });

            if (window.MathJax) {
                MathJax.typesetPromise([document.getElementById('rt-exam-content')]).catch(() => {});
            }

            let timeLeft = 15;
            document.getElementById('rt-question-timer').innerText = `${timeLeft}s`;
            rtTimerInterval = setInterval(() => {
                timeLeft--;
                const timerEl = document.getElementById('rt-question-timer');
                if (timerEl) timerEl.innerText = `${timeLeft}s`;
                if (timeLeft <= 0) {
                    clearInterval(rtTimerInterval);
                    answerRealtimeQuestion(null);
                }
            }, 1000);
        }

        function answerRealtimeQuestion(selectedChar) {
            clearInterval(rtTimerInterval);
            const q = rtQuestions[rtCurrentIndex];

            // Tính điểm người chơi
            const me = rtPlayers.find(p => p.isMe);
            if (selectedChar && selectedChar === q.correctAnswer) {
                me.score += 100;
                showToast("Chính xác! +100 điểm");
            }

            // Giả lập điểm các đối thủ cùng phòng
            rtPlayers.forEach(p => {
                if (!p.isMe && Math.random() > 0.35) {
                    p.score += 100;
                }
            });

            renderRealtimeLeaderboard();
            rtCurrentIndex++;
            setTimeout(loadRealtimeQuestion, 600);
        }

        function resetRealtimeView() {
            document.getElementById('rt-exam-content').innerHTML = `
                <div class="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                    <span id="rt-question-progress" class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Câu 1/5</span>
                    <span id="rt-question-timer" class="text-sm font-black text-custom-red font-mono">15s</span>
                </div>
                <div id="rt-live-question-text" class="text-lg font-bold text-navy mb-6 leading-relaxed"></div>
                <div id="rt-live-options" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto"></div>
            `;
            startRealtimeExam();
        }

        // --- LOGIC TRỢ LÝ GEMINI ---
        function toggleGeminiChat() {
            const panel = document.getElementById('gemini-chat-panel');
            panel.classList.toggle('active');
            if (panel.classList.contains('active')) {
                document.getElementById('gemini-input').focus();
            }
        }

        async function sendGeminiMessage(event) {
            event.preventDefault();
            const inputField = document.getElementById('gemini-input');
            const messageText = inputField.value.trim();
            if (!messageText) return;

            const messagesContainer = document.getElementById('gemini-messages');

            messagesContainer.innerHTML += `
                <div class="flex gap-3 flex-row-reverse">
                    <div class="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[85%]">
                        ${messageText}
                    </div>
                </div>
            `;
            inputField.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            const typingId = 'typing-' + Date.now();
            messagesContainer.innerHTML += `
                <div id="${typingId}" class="flex gap-3">
                    <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-500 text-sm flex items-center gap-1">
                        <i class="fa-solid fa-circle text-[6px] animate-bounce"></i>
                        <i class="fa-solid fa-circle text-[6px] animate-bounce" style="animation-delay: 0.1s"></i>
                        <i class="fa-solid fa-circle text-[6px] animate-bounce" style="animation-delay: 0.2s"></i>
                    </div>
                </div>
            `;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            try {
                // !!! DÁN API KEY CỦA BẠN VÀO ĐÂY NẾU MUỐN GỌI TRỰC TIẾP GOOGLE GEMINI API !!!
                const API_KEY = "DAN_API_KEY_CUA_BAN_VAO_DAY"; 
                
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: "Bạn là một gia sư AI thân thiện, hỗ trợ học sinh ôn thi THPT Quốc gia môn Toán, Lý, Hóa, Sinh. Hãy trả lời ngắn gọn, súc tích, dễ hiểu và format nội dung rõ ràng bằng markdown. Câu hỏi của học sinh: " + messageText }] }]
                    })
                });

                const data = await response.json();
                document.getElementById(typingId).remove();
                
                let botReply = "";

                if (!response.ok) {
                    botReply = `Lỗi từ Google: <b>${data.error ? data.error.message : 'API Key không hợp lệ'}</b><br><br>👉 Bạn hãy kiểm tra lại biến <code>API_KEY</code> trong file <code>index.html</code> nhé!`;
                } else if (data.candidates && data.candidates[0].content.parts[0].text) {
                    botReply = data.candidates[0].content.parts[0].text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\n/g, '<br>');
                }

                messagesContainer.innerHTML += `
                    <div class="flex gap-3">
                        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700 text-sm max-w-[85%] leading-relaxed overflow-x-auto">
                            ${botReply}
                        </div>
                    </div>
                `;
                if (window.MathJax) {
                    MathJax.typesetPromise([messagesContainer]).catch((err) => console.log(err.message));
                }
            } catch (error) {
                document.getElementById(typingId).remove();
                messagesContainer.innerHTML += `
                    <div class="flex gap-3">
                        <div class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-wifi"></i></div>
                        <div class="bg-red-50 text-red-700 p-3 rounded-2xl rounded-tl-none shadow-sm border border-red-100 text-sm">Không thể kết nối đến máy chủ AI. Hãy kiểm tra lại kết nối mạng hoặc API Key!</div>
                    </div>
                `;
            }
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    </script>
</body>
</html>
