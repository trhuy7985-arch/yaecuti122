// ============================================================================
// 1. DANH MỤC ĐỀ THI (METADATA)
// ============================================================================
const examsMeta = [
    // --- Nhóm TSA ---
    {
        id: "tsa_toan_01",
        type: "TSA",
        category: "math",
        title: "Đề thi Đánh giá Tư duy - TSA26A (Môn Toán)",
        questionsCount: 40,
        time: 60,
        img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png",
        isVip: true
    },
    {
        id: "tsa_02",
        type: "TSA",
        category: "comprehensive",
        title: "Đề thi thử HUST 2026 - Lần 1 (Đề Ôn Tập Nhanh)",
        questionsCount: 4,
        time: 15,
        img: "https://i.postimg.cc/tg7k50hw/ID.png",
        isVip: false
    },

    // --- Nhóm THPT ---
    {
        id: "thpt_toan_01",
        type: "THPT",
        subject: "math",
        title: "Đề thi thử Tốt nghiệp THPT 2026 môn Toán - Đề số 1",
        questionsCount: 22,
        time: 90,
        img: "https://i.postimg.cc/Qd7xWCzY/ID-3.png",
        isVip: false
    },
    {
        id: "thpt_toan_02",
        type: "THPT",
        subject: "math",
        title: "Đề thi Tốt nghiệp THPT 2026 môn Toán (Mã đề 0101)",
        questionsCount: 22,
        time: 90,
        img: "https://i.postimg.cc/Qd7xWCzY/ID-3.png",
        isVip: false
    },
    {
        id: "thpt_ly_03",
        type: "THPT",
        subject: "physics",
        title: "Đề ôn tập Giữa HK1 Vật Lí 12 - Đề số 3",
        questionsCount: 28,
        time: 50,
        img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png",
        isVip: false
    },
    {
        id: "thpt_hoa_02",
        type: "THPT",
        subject: "chemistry",
        title: "Đề kiểm tra Giữa HK1 Hóa Học 12 (Đề 2)",
        questionsCount: 28,
        time: 45,
        img: "https://i.postimg.cc/y8x0qmW2/ID-2.png",
        isVip: false
    },
    {
        id: "thpt_sinh_03",
        type: "THPT",
        subject: "biology",
        title: "Đề kiểm tra giữa kì 1 Sinh Học 12 - THPT Ngô Gia Tự",
        questionsCount: 24,
        time: 45,
        img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png",
        isVip: false
    }
];

// ============================================================================
// 2. DỮ LIỆU CÂU HỎI CHI TIẾT TỪNG ĐỀ
// ============================================================================
const allExamsData = {

    // ========================================================================
    // ĐỀ TSA: ĐÁNH GIÁ TƯ DUY - TSA26A (MÔN TOÁN - 40 CÂU)
    // ========================================================================
    "tsa_toan_01": [
        {
            id: 701, type: "multiple_choice",
            content: "Phần nguyên của số thực $x$ là số nguyên lớn nhất không vượt quá $x$, kí hiệu là $[x]$. Biết số $x=\\sqrt{2+\\sqrt{2+\\sqrt{2+\\sqrt{2+...}}}}$ với vô hạn dấu căn. Giá trị của $[x]$ bằng bao nhiêu?",
            options: ["A. 1", "B. 2", "C. 0", "D. -1"],
            correctAnswer: "A"
        },
        {
            id: 702, type: "fill_blank",
            content: "Cho hàm số $y=\\frac{x+\\sqrt{x}}{\\sqrt{x^2-1}}$.<br>- Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số bằng [1].<br>- Khoảng cách từ $A(2;3)$ đến tiệm cận đứng của đồ thị hàm số bằng [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \". Ví dụ: 3; 4)</i>",
            correctAnswer: "2; 1"
        },
        {
            id: 703, type: "multiple_choice",
            content: "Cho đa giác lồi $n$ đỉnh ($n > 3$). Số tam giác có 3 đỉnh là 3 đỉnh của đa giác đã cho là:",
            options: ["A. $A_n^3$", "B. $C_n^3$", "C. $\\frac{C_n^3}{3!}$", "D. $n!$"],
            correctAnswer: "B"
        },
        {
            id: 704, type: "true_false",
            content: "Cho hàm số $f(x)=x^3-\\frac{1}{2}x^2-4x$. Mỗi phát biểu sau đây là đúng hay sai?",
            propositions: [
                "Đạo hàm của hàm số $y=f(x)$ tại $x=4$ là $f'(4)=3$.",
                "Nghiệm của bất phương trình $f'(x)<0$ là $T=(1; \\frac{4}{3})$."
            ],
            correctAnswer: { 0: 'false', 1: 'false' }
        },
        {
            id: 705, type: "fill_blank",
            content: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2+y^2+z^2-2x+4y-4z-27=0$. Bán kính $R$ của mặt cầu $(S)$ bằng bao nhiêu?",
            correctAnswer: "6"
        },
        {
            id: 706, type: "fill_blank",
            content: "Cho dãy số $(u_n)$ là một cấp số cộng có $u_1=3$ và công sai $d=4$.<br>- Tổng của [1] số hạng đầu của dãy số là $S_n=253$.<br>- Số hạng thứ 10 của dãy số là $u_{10}=$ [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i>",
            correctAnswer: "11; 39"
        },
        {
            id: 707, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, cho hai điểm là $A(1;3;-1), B(3;-1;5)$. Tọa độ của điểm $M$ thỏa mãn hệ thức $\\overrightarrow{MA} = 3\\overrightarrow{MB}$ bằng:",
            options: ["A. $M(\\frac{5}{3};\\frac{13}{3};1)$", "B. $M(\\frac{7}{3};\\frac{1}{3};3)$", "C. $M(\\frac{7}{3};\\frac{1}{3};-3)$", "D. $M(4;-3;8)$"],
            correctAnswer: "D"
        },
        {
            id: 708, type: "true_false",
            content: "Một lớp có 40 học sinh, có 18 học sinh tham gia bóng đá, 10 học sinh tham gia bóng chuyền, trong đó 6 học sinh tham gia cả hai môn. Chọn ngẫu nhiên một học sinh. Gọi $A$ là biến cố \"Chọn được học sinh tham gia bóng đá\", $B$ là biến cố \"Chọn được học sinh tham gia bóng chuyền\". Các phát biểu sau đúng hay sai?",
            propositions: [
                "$P(A) = \\frac{9}{20}$.",
                "$P(AB) = \\frac{7}{20}$.",
                "Xác suất để học sinh được chọn có tham gia ít nhất một môn thể thao bằng $\\frac{19}{20}$."
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'false' }
        },
        {
            id: 709, type: "fill_blank",
            content: "Có bao nhiêu cặp số nguyên $(x;y)$ thỏa mãn phương trình: $x^2+5y^2+4xy+2x+4y-3=0$?",
            correctAnswer: "4"
        },
        {
            id: 710, type: "fill_blank",
            content: "Cho phương trình $\\log_4(x+1)^2+2 = \\log_{\\sqrt{2}}\\sqrt{4-x} + \\log_8(4+x)^3$.<br>- Số nghiệm của phương trình đã cho là [1].<br>- Tổng của các nghiệm của phương trình đã cho là [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i>",
            correctAnswer: "2; 4-2\\sqrt{6}"
        },
        {
            id: 711, type: "multiple_choice",
            content: "Phương trình $\\sin(3x+\\frac{\\pi}{3})=-\\frac{\\sqrt{3}}{2}$ có bao nhiêu nghiệm thuộc khoảng $(0; \\frac{\\pi}{2})$?",
            options: ["A. 3", "B. 4", "C. 1", "D. 2"],
            correctAnswer: "D"
        },
        {
            id: 712, type
