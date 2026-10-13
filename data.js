// --- CẤU TRÚC LƯU NHIỀU ĐỀ THI ---
const examsMeta = [
    // --- Nhóm TSA - Tổng hợp ---
    { id: "tsa_02", type: "TSA", category: "comprehensive", title: "Đề thi thử HUST 2026 - Lần 1", questionsCount: 15, time: 60, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", isVip: false },
    
    // --- Nhóm TSA - Tư duy Toán học ---
    { id: "tsa_toan_01", type: "TSA", category: "math", title: "Đề thi Đánh giá Tư duy - TSA26A (Môn Toán)", questionsCount: 40, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },

    // --- Nhóm THPT ---
    { id: "thpt_toan_01", type: "THPT", subject: "math", title: "Đề thi thử Toán 2025 (Chuẩn cấu trúc)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_toan_02", type: "THPT", subject: "math", title: "Đề thi Tốt nghiệp THPT 2026 môn Toán (Mã đề 0101)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_01", type: "THPT", subject: "physics", title: "Đề thi thử Vật Lý chuyên KHTN", questionsCount: 40, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_hoa_01", type: "THPT", subject: "chemistry", title: "Đề thi thử Hóa Học THPT chuyên ĐH Vinh", questionsCount: 40, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    { id: "thpt_sinh_03", type: "THPT", subject: "biology", title: "Đề kiểm tra giữa kì 1 Sinh Học 12 - THPT Ngô Gia Tự", questionsCount: 24, time: 45, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false }
];

// --- DỮ LIỆU CÂU HỎI CHI TIẾT TỪNG ĐỀ ---
const allExamsData = {
    "tsa_01": [
        { id: 1, type: "true_false", content: "Cho hàm số $y = f(x) = \\sqrt{1 + \\cos(x)}$. Khi ta xét $x \\in (0, \\pi)$, các nhận định dưới đây là đúng hay sai?", propositions: ["Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{2}\\right)$ có nghiệm", "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{4}\\right)$ có nghiệm", "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{\\pi}{8}\\right)$ có đúng 01 nghiệm"], correctAnswer: {0: 'true', 1: 'false', 2: 'true'} },
        { id: 2, type: "fill_blank", content: "Bất phương trình $(\\log_2 x)^2 + \\log_3 \\frac{36}{x} \\leq \\left(1 + \\log_3 \\frac{36}{x}\\right) \\log_2 x$ có tập nghiệm là $x \\in [a, b]$. Giá trị của $a + b/2 =$", correctAnswer: "10" },
        { id: 7, type: "multiple_choice", content: "Cho hàm số: $y = \\frac{1+x}{1-x}$. Nhận xét nào sau đây đúng?", options: ["A. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = 1$", "B. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = 1$", "C. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = -1$", "D. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = -1$"], correctAnswer: "B" }
    ],
    "tsa_02": [
        { id: 101, type: "fill_blank", content: "Tính $l = \\lim_{x \\to 0} \\frac{1-\\cos 2x}{x} =$", correctAnswer: "0" }
    ],
    "thpt_01": [
        { id: 201, type: "multiple_choice", content: "Khảo sát một xe máy đang di chuyển trên đường trong vòng 6s cho biết vận tốc của xe đang di chuyển có biểu thức: $v_t = 12 + 4t - t^2(m/s)$. Xe có vận tốc lớn hơn $15\\ (m/s)$ trong khoảng thời gian nào?", options: ["A. $t \\in (1; 3)$", "B. $t \\in (0; 6)$", "C. $t \\in (2; 4)$", "D. $t \\in (3; 5)$"], correctAnswer: "A" },
        { id: 202, type: "true_false", content: "Cho hình chóp đều S.ABCD có $SA = 2$, $AB = 1$. Các nhận định sau đúng hay sai?", propositions: ["SA và CD không vuông góc nhau", "Góc giữa SA và CD là $30^o$", "Khoảng cách giữa SA và CD bằng 1", "Thể tích bằng 2/3"], correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'false'} }
    ],
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
                    correctAnswer: {0: 'false', 1: 'false'}
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
                    correctAnswer: {0: 'true', 1: 'false', 2: 'false'}
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
                    id: 712, type: "fill_blank",
                    content: "Cho hai hàm số $F(x)=(x^2+ax+b)e^{-x}$ và $f(x)=(-x^2+3x+6)e^{-x}$. Để $F(x)$ là một nguyên hàm của hàm số $f(x)$ thì $a=$ [1] và $b=$ [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i>",
                    correctAnswer: "-1; 7"
                },
                {
                    id: 713, type: "true_false",
                    content: "Cho hàm số $y=f(x) = \\begin{cases} \\frac{\\sqrt{1-x}-\\sqrt{1+x}}{x} & \\text{khi } x < 0 \\\\ m + \\frac{1-x}{1+x} & \\text{khi } x \\ge 0 \\end{cases}$. Phát biểu sau đúng hay sai?",
                    propositions: [
                        "Hàm số $y=f(x)$ gián đoạn tại $x=0$ khi $m=-1$.",
                        "Hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ khi $m \\neq -2$."
                    ],
                    correctAnswer: {0: 'true', 1: 'false'}
                },
                {
                    id: 714, type: "fill_blank",
                    content: "Trong thời gian liên tục 25 năm, một người luôn gửi đúng 4.000.000 đồng vào một ngày cố định của tháng ở ngân hàng với lãi suất không đổi là 0,6%/tháng. Số tiền người đó có được sau 25 năm là bao nhiêu triệu đồng? (Làm tròn đến chữ số thập phân thứ ba)",
                    correctAnswer: "3364.867"
                },
                {
                    id: 715, type: "fill_blank",
                    content: "- Ước chung của hai số $n+3$ và $2n+5$ là [1] với mọi $n \\in \\mathbb{N}$.<br>- Có [2] bộ số thỏa mãn hai số có tổng bằng 224 và ước chung lớn nhất bằng 28.<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i>",
                    correctAnswer: "1; 2"
                },
                {
                    id: 716, type: "multiple_choice",
                    content: "Cho dãy số $(a_n)$ thỏa mãn $a_1=1$ và $a_n=10a_{n-1}-1$, $\\forall n \\ge 2$. Giá trị nhỏ nhất của $n$ để $\\log a_n > 100$ là:",
                    options: ["A. 100", "B. 101", "C. 102", "D. 103"],
                    correctAnswer: "C"
                },
                {
                    id: 717, type: "fill_blank",
                    content: "Hai người ngang tài tranh chức vô địch cờ tướng. Người thắng là người đầu tiên thắng 5 ván. Tại thời điểm người thứ nhất đã thắng 4 ván và người thứ hai thắng 2 ván, xác suất để người thứ nhất giành chiến thắng là bao nhiêu? (Nhập dưới dạng số thập phân)",
                    correctAnswer: "0.875"
                },
                {
                    id: 718, type: "multiple_choice",
                    content: "Cho hàm số $y=\\frac{1-m\\sin x}{\\cos x+2}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [0;10]$ để giá trị nhỏ nhất của hàm số nhỏ hơn $-2$?",
                    options: ["A. 1", "B. 9", "C. 3", "D. 6"],
                    correctAnswer: "D"
                },
                {
                    id: 719, type: "fill_blank",
                    content: "Người ta đo đường kính 61 cây gỗ thu được bảng ghép nhóm: [20;25) có 4 cây, [25;30) có 12 cây, [30;35) có 26 cây, [35;40) có 13 cây, [40;45) có 6 cây. <br>- Tứ phân vị thứ nhất bằng [1].<br>- Tứ phân vị thứ hai bằng [2].<br>- Tứ phân vị thứ ba bằng [3].<br><i>(Làm tròn đến chữ số thập phân thứ hai. Nhập đáp án cách nhau bởi \"; \")</i>",
                    correctAnswer: "29.69; 32.79; 36.44"
                },
                {
                    id: 720, type: "fill_blank",
                    content: "Cổng trường có hình dạng Parabol, chiều rộng 8m, chiều cao 12,5m. Diện tích của cổng là bao nhiêu $m^2$?",
                    correctAnswer: "200/3"
                },
                {
                    id: 721, type: "multiple_choice",
                    content: "Cho tam giác $ABC$ có $b=7, c=5, \\cos A = \\frac{3}{5}$. Độ dài đường cao $h_a$ của $\\Delta ABC$ bằng:",
                    options: ["A. $2\\sqrt{2}$", "B. $7\\sqrt{2}$", "C. $4\\sqrt{2}$", "D. $\\frac{7\\sqrt{2}}{2}$"],
                    correctAnswer: "D"
                },
                {
                    id: 722, type: "fill_blank",
                    content: "Trong hệ $Oxyz$, một máy bay bay theo đường thẳng từ $A(5;0;5)$ đến $B(10;10;3)$ và hạ cánh tại vị trí $M(a;b;0)$ trên mặt phẳng $(Oxy)$. Giá trị của $2a-b$ bằng bao nhiêu?",
                    correctAnswer: "10"
                },
                {
                    id: 723, type: "fill_blank",
                    content: "Cho hàm số $y=\\frac{2x+1}{x+1}$ có đồ thị $(C)$. Có bao nhiêu tiếp tuyến của đồ thị $(C)$ song song với đường thẳng $\\Delta: y=x+1$?",
                    correctAnswer: "1"
                },
                {
                    id: 724, type: "true_false",
                    content: "Cho hàm số $y=x^2.e^{-x}$. Mỗi phát biểu sau đây là đúng hay sai?",
                    propositions: [
                        "Hàm số không có giá trị lớn nhất và giá trị nhỏ nhất.",
                        "Hàm số đạt cực đại tại $x=0$ và đạt cực tiểu tại $x=2$.",
                        "Giá trị nhỏ nhất của hàm số bằng 0."
                    ],
                    correctAnswer: {0: 'false', 1: 'false', 2: 'true'}
                },
                {
                    id: 725, type: "multiple_choice",
                    content: "Cho tập $A=\\{1;2;3;...;2024\\}$. Có bao nhiêu cách chọn 5 số từ tập hợp $A$ sao cho các số được chọn lập thành một cấp số nhân tăng có công bội là một số nguyên dương?",
                    options: ["A. 126", "B. 161", "C. 111", "D. 150"],
                    correctAnswer: "B"
                },
                {
                    id: 726, type: "fill_blank",
                    content: "Cho hàm số bậc hai $y=f(x)$ có đồ thị $(P)$ và đường thẳng $d$ cắt $(P)$ tại $x=1$ (điểm $(1;3)$) và $x=6$ (điểm $(6;8)$). Biết diện tích hình phẳng giới hạn bởi $(P)$ và $d$ là $S=\\frac{125}{9}$.<br><img src='LINK_ANH_CUA_BAN' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>- Phương trình đường thẳng $d$ là: [1].<br>- $\\int_1^6 f'(x)dx$ bằng: [2].<br>- $\\int_1^6 f(x)dx$ bằng: [3].<br><i>(Nhập các đáp án cách nhau bởi \"; \". Ví dụ: y=2x+1; 4; 5/3)</i>",
                    correctAnswer: "y=x+2; 5; 245/18"
                },
                {
                    id: 727, type: "multiple_choice",
                    content: "Trong không gian $Oxyz$, cho điểm $A(2;-1;-2)$ và đường thẳng $(d): \\frac{x-1}{-1}=\\frac{y-1}{1}=\\frac{z+1}{1}$. Gọi $(P)$ là mặt phẳng đi qua $A$, song song với $(d)$ và khoảng cách từ $(d)$ tới $(P)$ lớn nhất. Mặt phẳng $(P)$ vuông góc với mặt phẳng nào sau đây?",
                    options: ["A. $x-y-6=0$", "B. $x+3y+2z+10=0$", "C. $x-2y-3z-1=0$", "D. $3x+z+2=0$"],
                    correctAnswer: "D"
                },
                {
                    id: 728, type: "multiple_choice",
                    content: "Cho hình chóp $S.ABCD$ có $ABCD$ là hình chữ nhật tâm $O$, $AB=a, BC=a\\sqrt{3}$. Hình chiếu vuông góc của $S$ lên $(ABCD)$ là trung điểm $AO$. Góc giữa $(SAC)$ và $(SBC)$ là $60^\\circ$. Thể tích khối chóp $S.ABCD$ là:",
                    options: ["A. $\\frac{a^3\\sqrt{3}}{3}$", "B. $\\frac{a^3\\sqrt{3}}{2}$", "C. $\\frac{a^3}{2}$", "D. $\\frac{a^3\\sqrt{6}}{8}$"],
                    correctAnswer: "D"
                },
                {
                    id: 729, type: "true_false",
                    content: "Cho hàm số $y=x^4-4x^3+(m-2)x^2+8x+4$ có đồ thị $(C)$. Phát biểu sau đây đúng hay sai?",
                    propositions: [
                        "Với $m=2$ thì đồ thị hàm số $(C)$ đã cho cắt trục hoành tại 3 điểm phân biệt.",
                        "Có tất cả 10 giá trị nguyên của $m$ để đồ thị $(C)$ cắt trục hoành tại đúng hai điểm có hoành độ lớn hơn 1."
                    ],
                    correctAnswer: {0: 'false', 1: 'false'}
                },
                {
                    id: 730, type: "multiple_choice",
                    content: "Cho hình lăng trụ đứng $ABC.A'B'C'$. Góc giữa $(A'BC)$ và $(ABC)$ là $30^\\circ$, tam giác $A'BC$ đều và có diện tích bằng $\\sqrt{3}$. Thể tích khối lăng trụ $ABC.A'B'C'$ bằng:",
                    options: ["A. $2\\sqrt{3}$", "B. $6$", "C. $\\frac{3\\sqrt{3}}{4}$", "D. $\\frac{\\sqrt{3}}{4}$"],
                    correctAnswer: "C"
                },
                {
                    id: 731, type: "fill_blank",
                    content: "Bảng tần số ghép nhóm thống kê thời gian gọi điện (giây): [0;60) có 8 cuộc, [60;120) có 10 cuộc, [120;180) có 7 cuộc, [180;240) có 5 cuộc, [240;300) có 2 cuộc, [300;360) có 1 cuộc. Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu?",
                    correctAnswer: "116.3"
                },
                {
                    id: 732, type: "fill_blank",
                    content: "Một đống đất được vun thành hình chóp cụt tứ giác đều có cạnh đáy lớn 2m, cạnh đáy nhỏ 1m, chiều cao 2m. Khối lượng đống đất (thể tích) có giá trị gần nhất bằng bao nhiêu $m^3$? (Làm tròn đến 2 chữ số thập phân)",
                    correctAnswer: "4.67"
                },
                {
                    id: 733, type: "multiple_choice",
                    content: "Gọi $S$ là tập hợp các giá trị của $m$ để bất phương trình $\\log_3(x^2-5x+m) > \\log_3(x-2)$ có tập nghiệm chứa khoảng $(2;+\\infty)$. Khẳng định nào đúng?",
                    options: ["A. $S=(7;+\\infty)$", "B. $S=[6;+\\infty)$", "C. $S=(-\\infty;4)$", "D. $S=(-\\infty;5]$"],
                    correctAnswer: "A"
                },
                {
                    id: 734, type: "true_false",
                    content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, $SO \\perp (ABCD)$. Biết $AB=SB=a$, $SO=\\frac{a\\sqrt{6}}{3}$. Gọi $M$ là trung điểm $SA$. Phát biểu sau đúng hay sai?",
                    propositions: [
                        "Góc giữa hai mặt phẳng $(SAB)$ và $(SAD)$ là góc $\\widehat{BMD}$.",
                        "Số đo góc $\\widehat{BMO} = 60^\\circ$.",
                        "Số đo góc giữa $(SAB)$ và $(SAD)$ là $60^\\circ$."
                    ],
                    correctAnswer: {0: 'true', 1: 'false', 2: 'false'}
                },
                {
                    id: 735, type: "multiple_choice",
                    content: "An và Bình thi thử Tốt nghiệp THPT. Ngoài 3 môn bắt buộc, mỗi bạn đăng kí 2 môn tự chọn trong 3 môn (Lý, Hóa, Sinh). Mỗi môn tự chọn có 8 mã đề. Xác suất để An và Bình có chung đúng một môn thi tự chọn và chung một mã đề là:",
                    options: ["A. $\\frac{1}{9}$", "B. $\\frac{1}{10}$", "C. $\\frac{1}{12}$", "D. $\\frac{1}{24}$"],
                    correctAnswer: "C"
                },
                {
                    id: 736, type: "multiple_choice",
                    content: "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu của $A'$ lên $(ABC)$ là trung điểm $BC$. Biết góc giữa $(ABB'A')$ và $(A'B'C')$ bằng $60^\\circ$. Khoảng cách $d$ giữa $B'C'$ và $AA'$ bằng:",
                    options: ["A. $d=\\frac{3a\\sqrt{7}}{14}$", "B. $d=\\frac{a\\sqrt{21}}{14}$", "C. $d=\\frac{3a}{4}$", "D. $d=\\frac{a\\sqrt{3}}{4}$"],
                    correctAnswer: "A"
                },
                {
                    id: 737, type: "fill_blank",
                    content: "Trong hệ $Oxyz$, cho $d: \\frac{x}{2}=\\frac{y-1}{-1}=\\frac{z+1}{-1}$ và $A(1;1;1)$. Hai điểm $B, C$ di động trên $d$ sao cho $(OAB) \\perp (OAC)$. Gọi $B'$ là hình chiếu của $B$ lên $AC$. Quỹ tích $B'$ là đường tròn cố định có bán kính bằng bao nhiêu? (Làm tròn đến 2 chữ số thập phân)",
                    correctAnswer: "0.67"
                },
                {
                    id: 738, type: "fill_blank",
                    content: "Một khối lập phương lớn tạo bởi 27 khối lập phương đơn vị. Một mặt phẳng vuông góc với đường chéo của khối lập phương lớn tại trung điểm của nó. Mặt phẳng này cắt ngang (không đi qua đỉnh) bao nhiêu khối lập phương đơn vị?",
                    correctAnswer: "19"
                },
                {
                    id: 739, type: "multiple_choice",
                    content: "Tỉ lệ người nghiện thuốc lào tại khu vực X là 10%. Tỉ lệ bị bệnh phổi ở người nghiện thuốc lào là 70%, ở người không nghiện là 15%. Xác suất gặp ngẫu nhiên một người mà người đó nghiện thuốc lào khi biết họ bị bệnh phổi bằng:",
                    options: ["A. $\\frac{14}{41}$", "B. $\\frac{6}{13}$", "C. $\\frac{4}{13}$", "D. $\\frac{41}{200}$"],
                    correctAnswer: "A"
                },
                {
                    id: 740, type: "fill_blank",
                    content: "Doanh số bán lẻ tivi mỗi năm là 2500 chiếc. Phí lưu kho là 200k/năm/chiếc. Phí đặt hàng: 10 triệu đồng đặt cọc + 3 triệu đồng/chiếc. Số tivi trung bình trong kho bằng một nửa số tivi mỗi lần đặt. Để chi phí tồn kho thấp nhất, cửa hàng nên đặt hàng [1] lần/năm, mỗi lần [2] chiếc.<br><i>(Nhập các đáp án cách nhau bởi \"; \")</i>",
                    correctAnswer: "5; 500"
                }
            ],
    "thpt_toan_01": [
        { id: 1, type: "multiple_choice", content: "Lâm trường Tam Đảo thống kê đường kính thân gỗ của 60 cây xoan đào được cho ở bảng sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Đường kính (cm)</th><td class='border border-gray-300 p-2'>[20; 22)</td><td class='border border-gray-300 p-2'>[22; 24)</td><td class='border border-gray-300 p-2'>[24; 26)</td><td class='border border-gray-300 p-2'>[26; 28)</td><td class='border border-gray-300 p-2'>[28; 30)</td></tr><tr><th class='border border-gray-300 p-2'>Tần số</th><td class='border border-gray-300 p-2'>5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>18</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>10</td></tr></table><br>Nhóm chứa mốt của mẫu số liệu đã cho là:", options: ["A. [20; 22)", "B. [28; 30)", "C. [24; 26)", "D. [22; 24)"], correctAnswer: "D" },
        { id: 2, type: "multiple_choice", content: "Một hộp có 5 viên bi màu đỏ và 7 viên bi màu xanh. Lấy ngẫu nhiên 2 viên bi từ hộp đó. Xác suất để lấy được 2 viên bi màu đỏ bằng:", options: ["A. $\\frac{5}{33}$", "B. $\\frac{5}{22}$", "C. $\\frac{7}{33}$", "D. $\\frac{7}{22}$"], correctAnswer: "A" },
        { id: 3, type: "multiple_choice", content: "Trong không gian $Oxyz$, đường thẳng đi qua hai điểm $A(1; 2; 3), B(5; 4; -1)$ có phương trình chính tắc là:", options: ["A. $\\frac{x+1}{2} = \\frac{y+2}{1} = \\frac{z+3}{-2}$", "B. $\\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z-3}{2}$", "C. $\\frac{x+5}{-2} = \\frac{y+4}{-1} = \\frac{z-1}{2}$", "D. $\\frac{x-5}{2} = \\frac{y-4}{1} = \\frac{z+1}{-2}$"], correctAnswer: "D" },
        { id: 4, type: "multiple_choice", content: "Cho $\\int_{2}^{5} f(x)dx = 2$ và $\\int_{2}^{5} g(x)dx = 5$. Giá trị của tích phân $\\int_{2}^{5} [f(x) - 2g(x)]dx$ bằng:", options: ["A. -8", "B. 12", "C. 1", "D. -3"], correctAnswer: "A" },
        { id: 5, type: "multiple_choice", content: "Biết phương trình $2x^2 + x + 3 = 1 - x$ có hai nghiệm phân biệt $x_1; x_2$. Tổng $x_1 + x_2$ bằng:", options: ["A. -3", "B. -1", "C. 2", "D. -2"], correctAnswer: "A" },
        { id: 6, type: "multiple_choice", content: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và công sai $d = 3$. Giá trị của $u_{10}$ bằng:", options: ["A. $u_{10} = -39$", "B. $u_{10} = -29$", "C. $u_{10} = 25$", "D. $u_{10} = 28$"], correctAnswer: "C" },
        { id: 7, type: "multiple_choice", content: "Đạo hàm của hàm số $f(x) = \\sin x + \\cos(3x)$ là:", options: ["A. $f'(x) = -\\cos x + 3\\sin(3x)$", "B. $f'(x) = \\cos x - 3\\sin(3x)$", "C. $f'(x) = \\cos x + 3\\sin(3x)$", "D. $f'(x) = -\\cos x + \\sin(3x)$"], correctAnswer: "B" },
        { id: 8, type: "multiple_choice", content: "Tập nghiệm của bất phương trình $\\log_{\\frac{1}{3}}(2x - 1) > -2$ là:", options: ["A. $(\\frac{1}{2}; 5)$", "B. $(\\frac{1}{2}; +\\infty)$", "C. $(5; +\\infty)$", "D. $(-\\infty; 5)$"], correctAnswer: "A" },
        { id: 9, type: "multiple_choice", content: "Cho hàm số $y = f(x)$ có đạo hàm là $f'(x) = (x - 1)(x - 2)^2(x + 3), \\forall x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:", options: ["A. 2", "B. 3", "C. 1", "D. 0"], correctAnswer: "A" },
        { id: 10, type: "multiple_choice", content: "Giá trị lớn nhất của hàm số $f(x) = \\frac{2x + 3}{x - 1}$ trên đoạn $[2; 5]$ bằng:", options: ["A. $\\frac{13}{4}$", "B. 5", "C. 7", "D. 2"], correctAnswer: "C" },
        { id: 11, type: "multiple_choice", content: "Tập nghiệm của phương trình $\\sin x = 0$ là:", options: ["A. $S = \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$", "B. $S = \\{k\\pi, k \\in \\mathbb{Z}\\}$", "C. $S = \\{k2\\pi, k \\in \\mathbb{Z}\\}$", "D. $S = \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$"], correctAnswer: "B" },
        { id: 12, type: "multiple_choice", content: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 2, AD = 3, AA' = 6$. Độ dài vectơ $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:", options: ["A. 7", "B. $7\\sqrt{3}$", "C. $11\\sqrt{3}$", "D. 11"], correctAnswer: "A" },
        { id: 13, type: "true_false", content: "Trong không gian $Oxyz$, cho $A(0; 1; 1)$, $B(1; 0; -3)$, $C(-1; -2; -3)$ và mặt cầu $(S)$ có phương trình $x^2 + y^2 + z^2 - 2x + 2z - 2 = 0$.", propositions: ["$\\overrightarrow{AB} = (1; -1; -4)$", "Mặt phẳng $(ABC)$ có phương trình $2x - 2y + z - 1 = 0$", "Mặt phẳng $(ABC)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính bằng $\\frac{4\\sqrt{2}}{3}$", "Điểm $G(a; b; c)$ là trọng tâm của tam giác $ABC$ thì $a + b + c = 2$"], correctAnswer: {0: "true", 1: "false", 2: "true", 3: "false"} },
        { id: 14, type: "true_false", content: "Một cây cà chua khi mới trồng có chiều cao 15cm. Gọi $h(t)$ là chiều cao của cây tại thời điểm đúng $t$ tuần sau khi trồng ($0 \\le t \\le 16$). Tốc độ tăng chiều cao được cho bởi hàm số $h'(t) = -0.02t^3 + 0.32t^2$ (cm/tuần).", propositions: ["Tại thời điểm đúng $t$ tuần sau khi trồng, chiều cao của cây là $h(t) = -\\frac{t^4}{200} + \\frac{32t^3}{300}$ (cm)", "Tại thời điểm tốc độ tăng chiều cao lớn nhất, cây cao hơn 80cm", "Trong khoảng thời gian 10 tuần đầu, tốc độ tăng chiều cao trung bình lớn hơn 5.6 (cm/tuần)", "Tại thời điểm đúng 6 tuần sau khi trồng, chiều cao của cây cà chua là 31.56 (cm)"], correctAnswer: {0: "false", 1: "false", 2: "true", 3: "true"} },
        { id: 15, type: "true_false", content: "Một công ty đấu thầu hai dự án. Xác suất trúng thầu dự án thứ nhất là 0.8. Nếu trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.9. Nếu không trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.2.", propositions: ["Xác suất để công ty không trúng thầu dự án thứ nhất là 0.2", "Xác suất để công ty trúng thầu dự án thứ hai là 0.76", "Xác suất để công ty trúng thầu cả hai dự án là 0.72", "Nếu công ty không trúng thầu dự án thứ hai thì xác suất trúng thầu dự án thứ nhất là 0.12"], correctAnswer: {0: "true", 1: "true", 2: "true", 3: "false"} },
        { id: 16, type: "true_false", content: "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$.", propositions: ["Đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = ax + b$. Khi đó $a - 2b = 5$", "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình là $y = 2x - 3$", "Gọi $A, B$ lần lượt là các điểm cực đại, cực tiểu của đồ thị hàm số và $O$ là gốc tọa độ. Diện tích tam giác $OAB$ bằng 6", "Hàm số nghịch biến trên khoảng $(-1; 3)$"], correctAnswer: {0: "true", 1: "true", 2: "true", 3: "false"} },
        { id: 17, type: "fill_blank", content: "Nếu một doanh nghiệp sản xuất $x$ sản phẩm trong một tháng ($x \\in \\mathbb{N}^*, 1 \\le x \\le 5000$) thì doanh thu là $F(x) = -0.03x^2 + 800x$ (nghìn đồng), chi phí sản xuất bình quân là $G(x) = \\frac{50000}{x} + 450$ (nghìn đồng). Trong một tháng, doanh nghiệp đó cần sản xuất ít nhất bao nhiêu sản phẩm để lợi nhuận thu được lớn hơn 100 triệu đồng?", correctAnswer: "446" },
        { id: 18, type: "fill_blank", content: "Cho hình lăng trụ $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình thoi, $\\widehat{ABC} = 60^\\circ$. Biết $CA' = CB' = CC'$. Góc giữa $(BCC'B')$ và $(ABC)$ bằng $45^\\circ$. Khoảng cách giữa $AA'$ và $BC$ bằng $6\\sqrt{3}$. Thể tích khối lăng trụ đã cho bằng $a\\sqrt{2}$, giá trị của $a$ bằng bao nhiêu?", correctAnswer: "864" },
        { id: 19, type: "fill_blank", content: "Cho hình hộp $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Biết $\\widehat{BAD} = 90^\\circ$, $\\widehat{BAA'} = \\widehat{DAA'} = 60^\\circ$. Số đo góc giữa hai vectơ $\\overrightarrow{AC'}$ và $\\overrightarrow{DC'}$ bằng bao nhiêu độ? (Làm tròn kết quả đến hàng đơn vị).", correctAnswer: "130" },
        { id: 20, type: "fill_blank", content: "Bạn Minh dùng một miếng bìa hình vuông $ABCD$ cạnh $40cm$ cắt để làm một chiếc đèn lồng gồm ba phần: Phần thân là lăng trụ tứ giác đều, hai đầu là hai hình chóp tứ giác đều. Thể tích lớn nhất của chiếc đèn bằng bao nhiêu $cm^3$? (Làm tròn kết quả đến hàng đơn vị).", correctAnswer: "3057" },
        { id: 21, type: "fill_blank", content: "Có hai trục $Ox, Oy$ đặt trên mặt đất; tia $Oz$ hướng lên trên (đơn vị: km). Một Ra đa tại $A(12; 8; 3)$ có khả năng phát hiện thiết bị trong vòng bán kính 30km. UAV bay từ $M(72; 28; 3)$ đến $N(-32; -30; 3)$ với vận tốc không đổi là 240km/h. Hình ảnh của UAV xuất hiện trên màn hình Ra đa bao nhiêu phút? (Làm tròn đến hàng đơn vị).", correctAnswer: "14" },
        { id: 22, type: "fill_blank", content: "Cho hình nón có bán kính đáy $OA = 6cm$ và chiều cao $SO = 8cm$. Cắt hình nón bởi mặt phẳng song song với trục $SO$ và cách trục $SO$ khoảng 3cm. Thể tích phần không chứa đỉnh $S$ bằng bao nhiêu $cm^3$? (Làm tròn đến hàng phần chục).", correctAnswer: "33.2" }
    ],
    "thpt_toan_02": [
        { id: 501, type: "multiple_choice", content: "Cho cấp số cộng $(u_n)$ có $u_1=5$ và công sai $d=-1$. Giá trị của $u_2$ bằng", options: ["A. 4.", "B. -5.", "C. 5.", "D. -4."], correctAnswer: "A" },
        { id: 502, type: "multiple_choice", content: "Cho các hàm số $y=f(x)$ và $y=g(x)$ có đạo hàm trên tập số thực $\\mathbb{R}$ thỏa mãn $f'(x)=x$ và $g'(x)=x^2$. Đạo hàm của hàm số $y=f(x)+g(x)$ là", options: ["A. $3x$.", "B. $1+x^2$.", "C. $x+x^2$.", "D. $1+2x$."], correctAnswer: "C" },
        { id: 503, type: "multiple_choice", content: "Cho $\\int f(x)dx = \\sin x + C$. Phát biểu nào sau đây là đúng?", options: ["A. $\\int [3+f(x)]dx = 3x + \\cos x + C$.", "B. $\\int [3+f(x)]dx = 3x + \\sin x + C$.", "C. $\\int [3+f(x)]dx = 3x - \\cos x + C$.", "D. $\\int [3+f(x)]dx = 3x - \\sin x + C$."], correctAnswer: "B" },
        { id: 504, type: "multiple_choice", content: "Nghiệm của phương trình $\\log_3(x-1)=1$ là", options: ["A. $x=2$.", "B. $x=3$.", "C. $x=5$.", "D. $x=4$."], correctAnswer: "D" },
        { id: 505, type: "multiple_choice", content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(1;5;1)$ và $B(3;3;1)$. Vectơ $\\overrightarrow{AB}$ có tọa độ là", options: ["A. $(2;-2;0)$.", "B. (-2;2;0).", "C. $(4;8;2)$.", "D. $(2;4;1)$."], correctAnswer: "A" },
        { id: 506, type: "multiple_choice", content: "Cho hai biến cố độc lập $A$ và $B$ có xác suất thỏa mãn $P(A)=0,5$ và $P(B)=0,4$. Giá trị của $P(AB)$ bằng", options: ["A. 0,8.", "B. 0,1.", "C. 0,9.", "D. 0,2."], correctAnswer: "D" },
        { id: 507, type: "multiple_choice", content: "Cho hình lập phương $ABCD.A'B'C'D'$ (xem hình dưới). Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?<br><img src='https://i.postimg.cc/GpwpRfVD/c7.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", options: ["A. $\\overrightarrow{AA'}$.", "B. $\\overrightarrow{D'C'}$.", "C. $\\overrightarrow{CD}$.", "D. $\\overrightarrow{AD}$."], correctAnswer: "B" },
        { id: 508, type: "multiple_choice", content: "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases}x+y-3<0\\\\ x-y+1>0\\end{cases}$?", options: ["A. $(1;0)$.", "B. $(0;2)$.", "C. $(-1;1)$.", "D. $(1;2)$."], correctAnswer: "A" },
        { id: 509, type: "multiple_choice", content: "Hàm số $F(x)=4x^3$ là một nguyên hàm của hàm số nào sau đây?", options: ["A. $f_2(x)=3x^2$.", "B. $f_3(x)=12x^2$.", "C. $f_1(x)=x^4$.", "D. $f_4(x)=4x^4$."], correctAnswer: "B" },
        { id: 510, type: "multiple_choice", content: "Cho hàm số $y=\\frac{ax+b}{cx+d}$ có bảng biến thiên như hình dưới đây:<br><img src='https://i.postimg.cc/4NW8rk7s/c10-t.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận ngang của đồ thị hàm số đã cho có phương trình là", options: ["A. $y=-2$.", "B. $x=-2$.", "C. $x=1$.", "D. $y=1$."], correctAnswer: "A" },
        { id: 511, type: "multiple_choice", content: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ với $u_1 \\neq 0, q>1$. Số hạng $u_4$ là", options: ["A. $u_4=u_1 \\cdot q^3$.", "B. $u_4=u_1 \\cdot q^4$.", "C. $u_4=u_1+3q$.", "D. $u_4=u_1+4q$."], correctAnswer: "A" },
        { id: 512, type: "multiple_choice", content: "Khảo sát thời gian (đơn vị: phút) học trực tuyến trong một ngày của 42 học sinh, người ta thu được mẫu số liệu ghép nhóm như sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian</th><td class='border border-gray-300 p-2'>[10;20)</td><td class='border border-gray-300 p-2'>[20;30)</td><td class='border border-gray-300 p-2'>[30;40)</td><td class='border border-gray-300 p-2'>[40;50)</td><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td></tr><tr><th class='border border-gray-300 p-2'>Số học sinh</th><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>5</td></tr></table><br>Trung vị của mẫu số liệu trên thuộc nhóm nào sau đây?", options: ["A. $[30;40)$.", "B. $[40;50)$.", "C. $[60;70)$.", "D. $[50;60)$."], correctAnswer: "A" },
        { id: 513, type: "true_false", content: "Kết quả quét thử nghiệm hồ sơ y tế của 10000 người: 1000 người nhận cảnh báo (trong đó 700 bệnh, 300 không bệnh); 9000 người không nhận cảnh báo (trong đó 100 bệnh, 8900 không bệnh). Chọn ngẫu nhiên 1 người:", propositions: ["Xác suất để người đó không nhận được cảnh báo từ ứng dụng bằng 0,9.", "Xác suất để người đó không có bệnh, biết rằng người đó không nhận được cảnh báo, lớn hơn 0,98.", "Xác suất để người đó không có bệnh bằng 0,9.", "Xác suất để người đó không nhận được cảnh báo, biết rằng người đó không có bệnh, nhỏ hơn 0,95."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 514, type: "true_false", content: "Cho hàm số $f(x)=\\frac{1}{3}x^3-5x^2+9x+8$.", propositions: ["Hàm số đã cho có đạo hàm là $f'(x)=x^2-10x+9$.", "Phương trình $f'(x)=0$ có tập nghiệm là $S=\\{1;9\\}$.", "Hàm số đã cho nghịch biến trên khoảng $(1;9)$.", "Giá trị cực tiểu của hàm số đã cho bằng $\\frac{37}{3}$."], correctAnswer: {0: 'true', 1: 'true', 2: 'true', 3: 'false'} },
        { id: 515, type: "true_false", content: "Một hệ thống pin năng lượng mặt trời có năng lượng điện lưu trữ là $F(t)$ (kWh) với $F(0)=0$. Tốc độ lưu trữ năng lượng là $f(t)=F'(t) = -0,3t^2 + 3,6t$ (kW) với $0 \\le t \\le 12$.", propositions: ["$F(t)=-0,1t^3+1,8t^2$ với $0 \\le t \\le 12$.", "Năng lượng lưu trữ được kể từ thời điểm $t=a$ đến $t=b$ là $\\int_{a}^{b} f(t)dt$.", "Năng lượng điện lưu trữ được kể từ thời điểm $t=1$ đến $t=4$ nhỏ hơn 20,6 kWh.", "Năng lượng lưu trữ được từ $t=1$ đến $t=7$ gấp hai lần năng lượng lưu trữ được từ $t=1$ đến $t=4$."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 516, type: "true_false", content: "Trong hệ tọa độ $Oxyz$ (1 đơn vị = 10m). Vành đai bảo vệ mục tiêu $O$ là đường tròn tâm $O$, bán kính 7 đơn vị trên $(Oxy)$. Máy bay bay theo đường thẳng từ $M(5;10;4)$ đến $N(14;-2;4)$.", propositions: ["$\\overrightarrow{MN}=(9;-12;0)$.", "Phương trình tham số của $MN$ là $\\begin{cases}x=5+3t\\\\ y=10-4t\\\\ z=0\\end{cases}$ với $t \\in \\mathbb{R}$.", "Khoảng cách ngắn nhất từ máy bay đến vành đai bảo vệ là 50 mét.", "Khoảng cách đạt giá trị nhỏ nhất khi máy bay ở tọa độ $(8;6;4)$."], correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'} },
        { id: 517, type: "fill_blank", content: "Cho hình lập phương $ABCD.MNPQ$ có cạnh bằng 6. Gọi $E$ là trung điểm của đoạn thẳng $AB$. Khoảng cách từ điểm $P$ đến mặt phẳng $(MED)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?", correctAnswer: "7.35" },
        { id: 518, type: "fill_blank", content: "Bình cần điền 15 số $\\{0;1;2;3;4;5;6;7;8;10;11;12;15;16;20\\}$ vào 15 ô vuông dạng bậc thang sao cho: Hiệu hai số ở 2 ô khác nhau trên cùng 1 hàng hoặc 1 cột không chia hết cho 5.<br><img src='https://i.postimg.cc/dtC2jb2n/ovuong.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Gọi $H$ là số cách điền khác nhau. Giá trị của $\\frac{H}{30}$ bằng bao nhiêu?", correctAnswer: "1152" },
        { id: 519, type: "fill_blank", content: "Khối vật thể tạo thành khi quay nửa trên elip $\\frac{x^2}{1,5^2}+\\frac{y^2}{1^2}=1$ quanh trục $Ox$. Lỗ khoan trụ dọc trục có bán kính $0,2$cm.<br><img src='https://i.postimg.cc/W4z7RXqV/tt.png' class='mt-4 mb-4 w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Thể tích của hạt cườm đó bằng bao nhiêu $cm^3$ (làm tròn đến hàng phần trăm)?", correctAnswer: "5.91" },
        { id: 520, type: "fill_blank", content: "Khung hình đa giác đều 12 cạnh $A_1A_2...A_{12}$. Lắp ngẫu nhiên 12 bóng (4 đỏ, 8 xanh) vào 12 đỉnh. Gọi $P$ là xác suất để mỗi hình vuông (tạo từ 4 đỉnh đa giác) đều có ít nhất 1 bóng đỏ. Giá trị của $3190P$ bằng bao nhiêu?<img src='https://i.postimg.cc/nV3cr2Ck/vv.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'>", correctAnswer: "1856" },
        { id: 521, type: "fill_blank", content: "Số liệu bán hàng (kg và nghìn đồng):<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Ngày</th><th class='border border-gray-300 p-2'>Rau muống</th><th class='border border-gray-300 p-2'>Bí xanh</th><th class='border border-gray-300 p-2'>Cà chua</th><th class='border border-gray-300 p-2'>Tổng tiền</th></tr><tr><td class='border border-gray-300 p-2'>Thứ 4</td><td class='border border-gray-300 p-2'>19</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>600</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>540</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 6</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>570</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 7</td><td class='border border-gray-300 p-2'>50</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>?</td></tr></table><br>Biết đơn giá không đổi, tổng tiền thu được ngày thứ Bảy là bao nhiêu?", correctAnswer: "1275" },
        { id: 522, type: "fill_blank", content: "Công ty chế biến $x$ tấn nguyên liệu ($1 \\le x \\le 200$), chi phí $C(x)=0,001x^3+30x+10$ (triệu) và doanh thu $R(x)=60x$ (triệu). Lợi nhuận lớn nhất công ty đạt được trong một tháng là bao nhiêu triệu đồng?", correctAnswer: "1990" }
    ],
    "thpt_sinh_03": [
        { id: 601, type: "multiple_choice", content: "Điều nào dưới đây không đúng với mã di truyền?", options: ["A. Các loài sinh vật đều có chung một bộ mã di truyền trừ một vài ngoại lệ.", "B. Mã di truyền được đọc từ một điểm xác định và gối chồng lên nhau.", "C. Mã di truyền có tính đặc hiệu nghĩa là một bộ ba chỉ mã hóa cho một amino acid.", "D. Trình tự sắp xếp các nucleotide trong gene qui định trình tự sắp xếp các amino acid trong chuỗi polypeptide."], correctAnswer: "B" },
        { id: 602, type: "multiple_choice", content: "Cơ chế điều hòa biểu hiện gene của operon Lac khi có lactose là?", options: ["A. Làm cho enzyme chuyển hóa nó có hoạt tính tăng lên nhiều lần.", "B. Bất hoạt protein ức chế, hoạt hóa operon phiên mã tổng hợp enzyme phân giải lactose.", "C. Là chất gây cảm ứng ức chế biểu hiện của operon, ức chế phiên mã.", "D. Cùng protein ức chế bất hoạt vùng O, gây ức chế phiên mã."], correctAnswer: "B" },
        { id: 603, type: "multiple_choice", content: "Ở một loài thực vật, tính trạng màu hoa do hai cặp gene A, a và B, b phân li độc lập cùng qui định. Kiểu gene có cả allele A và allele B thì hoa có màu đỏ, kiểu gene chỉ có allele A hoặc chỉ có allele B thì hoa có màu vàng, kiểu gene không có 2 loại allele trên thì hoa có màu trắng. Kiểu gene nào sau đây quy định kiểu hình hoa đỏ?", options: ["A. AaBb.", "B. AAbb.", "C. Aabb.", "D. aaBB."], correctAnswer: "A" },
        { id: 604, type: "multiple_choice", content: "Cho trình tự mạch bổ sung của một gene có trình tự các nucleotide là 5' ATTCGTAGGC 3'. Trình tự của mRNA được phiên mã từ gene này sẽ có trình tự là?", options: ["A. 5' AUUCGUAGGC 3'.", "B. 3' UAAGCAUCCG 5'.", "C. 5' ATTCGTAGGC 3'.", "D. 3' AUUCGUAGGC 5'."], correctAnswer: "A" },
        { id: 605, type: "multiple_choice", content: "Enzyme nào được sử dụng để cắt và nối các đoạn DNA trong quy trình tạo động vật biến đổi gene?", options: ["A. Reverse transcriptase và integrase.", "B. Restrictase enzyme và ligase.", "C. Protease và nuclease.", "D. DNA polymerase và helicase."], correctAnswer: "B" },
        { id: 606, type: "multiple_choice", content: "Đơn phân cấu tạo nên DNA là?", options: ["A. Amino acid.", "B. Glicerol.", "C. Monosaccharide.", "D. Nucleotide."], correctAnswer: "D" },
        { id: 607, type: "multiple_choice", content: "Khi thực hiện phép lai giữa hai cây hoa mõm chó thuần chủng có hoa màu đỏ và màu trắng với nhau thu được $F_1$ toàn cây có hoa màu hồng. Cho $F_1$ tự thụ phấn, thu được $F_2$ có kiểu hình phân li theo tỉ lệ 1 đỏ : 2 hồng : 1 trắng. Có thể kết luận tính trạng màu hoa do?", options: ["A. một gene có 2 allele trội, lặn hoàn toàn quy định.", "B. một gene có 2 allele đồng trội quy định.", "C. một gene có 2 allele trội, lặn không hoàn toàn quy định.", "D. hai gene, mỗi gene có 2 allele cùng quy định."], correctAnswer: "C" },
        { id: 608, type: "multiple_choice", content: "Ở người, allele A nằm trên nhiễm sắc thể X quy định máu đông bình thường là trội hoàn toàn so với allele a quy định bệnh máu khó đông. Biết không xảy ra đột biến. Theo lí thuyết, cặp bố mẹ nào sau đây không thể sinh con bị bệnh máu khó đông?", options: ["A. $X^AX^a \\times X^AY$.", "B. $X^AX^A \\times X^aY$.", "C. $X^AX^a \\times X^aY$.", "D. $X^aX^a \\times X^AY$."], correctAnswer: "B" },
        { id: 609, type: "multiple_choice", content: "Cho các thành tựu sau, đâu không phải là thành tựu của tạo động vật chuyển gene?", options: ["A. Cá hồi mang gene mã hóa hormone sinh trưởng có tốc độ sinh trưởng cao so với cá hồi thông thường.", "B. Cừu Dolly được tạo ra từ nhân tế bào trứng kết hợp với tế bào chất tế bào vú không qua thụ tinh.", "C. Bò có mang gene có chứa hàm lượng $\\beta$-lactoglobulin cao.", "D. Cừu mang gene quy định protein antithrombin của người có thể tách chiết làm thuốc chống đông máu dùng trong các ca phẫu thuật."], correctAnswer: "B" },
        { id: 610, type: "multiple_choice", content: "Cấu trúc của operon lac bao gồm những thành phần nào?", options: ["A. Gene điều hòa (lacI), vùng P, vùng O.", "B. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng P.", "C. vùng P, gene cấu trúc(lacZ, lacY, lacA), vùng O.", "D. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng O."], correctAnswer: "C" },
        { id: 611, type: "multiple_choice", content: "Cặp nhiễm sắc thể nào sau đây được xem là cặp tương đồng?", options: ["A. XX.", "B. ZW.", "C. XO.", "D. XY."], correctAnswer: "A" },
        { id: 612, type: "multiple_choice", content: "Ở cây đậu Hà Lan, xét gene quy định màu hoa có 2 allele nằm trên NST thường, allele A quy định hoa tím trội hoàn toàn so với allele a quy định hoa trắng. Tiến hành lai giữa các cây thu được kết quả như sau.<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Phép lai</th><th class='border border-gray-300 p-2'>Tỉ lệ kiểu gene</th></tr><tr><td class='border border-gray-300 p-2'>Cây hoa tím A x Cây hoa trắng</td><td class='border border-gray-300 p-2'>F1:?</td></tr><tr><td class='border border-gray-300 p-2'>Cây F1 x Cây hoa tím dị hợp</td><td class='border border-gray-300 p-2'>F2: 1:2:1</td></tr></table><br>Phép lai ở P là ?", options: ["A. AA x aa.", "B. Aa x aa.", "C. Aa x Aa.", "D. AA x Aa."], correctAnswer: "A" },
        { id: 613, type: "multiple_choice", content: "Khi nói về quá trình tái bản DNA, phát biểu nào sau đây sai?", options: ["A. Nhờ các enzyme tháo xoắn, hai mạch đơn của DNA tách nhau dần tạo nên chạc chữ Y.", "B. Enzyme DNA polimerase tổng hợp và kéo dài mạch mới theo chiều $3' \\rightarrow 5'$.", "C. Quá trình tái bản DNA diễn ra theo nguyên tắc bổ sung và nguyên tắc bán bảo tồn.", "D. Enzyme ligase (enzyme nối) nối các đoạn Okazaki thành mạch đơn hoàn chỉnh."], correctAnswer: "B" },
        { id: 614, type: "multiple_choice", content: "Trong thành phần cấu trúc của một gene điển hình gồm có các phần?", options: ["A. Vùng khởi động, vùng mã hóa và vùng kết thúc.", "B. Vùng điều hòa, vùng mã hóa và vùng kết thúc.", "C. Vùng khởi động, vùng vận hành và vùng cấu trúc.", "D. Vùng cấu trúc, vùng mã hóa và vùng kết thúc."], correctAnswer: "B" },
        { id: 615, type: "multiple_choice", content: "Khi nói về cơ chế dịch mã ở sinh vật nhân thực thì phát biểu nào đúng, phát biểu nào sai?", options: ["A. Khi ribosome tiếp xúc với mã UGA thì quá trình dịch mã dừng lại.", "B. Amino acid mở đầu trong quá trình dịch mã là methyonine.", "C. Mỗi phân tử mRNA có thể tổng hợp được từ một đến nhiều chuỗi polypeptide cùng loại.", "D. Khi dịch mã, ribosome dịch chuyển theo chiều $3' \\rightarrow 5'$ trên phân tử mRNA."], correctAnswer: "A" },
        { id: 616, type: "true_false", content: "Thomas Hunt Morgan đã lai một con ruồi giấm cái mắt đỏ thuần chủng với một con đực mắt trắng, ở $F_1$ thu được 100% ruồi mắt đỏ. Cho $F_1$ tạp giao, thu được $F_2$ có cả ruồi mắt đỏ và mắt trắng. Tuy nhiên, màu mắt trắng chỉ xuất hiện ở con đực. Trong một phép lai khác giữa ruồi cái mắt trắng với ruồi đực mắt đỏ, thu được $F_1$, rồi cho $F_1$ tạp giao, thu được $F_2$. Mỗi nhận định sau đây là đúng hay sai khi xét về thí nghiệm trên đây?", propositions: ["a) Tính trạng màu mắt đỏ trội hơn so với màu mắt trắng.", "b) Gene quy định màu mắt nằm trên nhiễm sắc thể giới tính X.", "c) Ở thế hệ $F_1$ của phép lai 2 có 100% con cái mắt đỏ, 50% con đực mắt đỏ.", "d) Nếu cho ruồi mắt đỏ ở thế hệ $F_2$ của phép lai 2 ngẫu phối thì $F_3$ không thu được màu mắt trắng."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 617, type: "true_false", content: "Khi nói về cấu trúc siêu hiển vi của NST, mỗi nhận xét sau đây đúng hay sai?", propositions: ["a) Đơn vị cấu trúc nên NST là các nucleosome, có dạng hình cầu.", "b) Mỗi nucleosome gồm lõi với 8 phân tử proteine histone và một đoạn DNA gồm khoảng 146 cặp nucleotide.", "c) Chuỗi nucleosome có vùng dị nhiễm sắc chứa các gene hoạt động còn vùng nguyên nhiễm sắc nằm ở đầu mút hoặc tâm động thì chứa các gene bị bất hoạt.", "d) Mỗi NST có một tâm động giúp NST di chuyển trong phân bào và trình tự đầu mút bảo vệ NST."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 618, type: "true_false", content: "Một loài thực vật, cho cây thân cao, lá nguyên giao phấn với cây thân thấp, lá xẻ (P), thu được $F_1$ gồm toàn cây thân cao, lá nguyên. Lai phân tích cây $F_1$, thu được $F_a$ có kiểu hình phân li theo tỉ lệ 1 cây thân cao, lá nguyên : 1 cây thân cao, lá xẻ : 1 cây thân thấp, lá nguyên : 1 cây thân thấp, lá xẻ. Cho biết mỗi gene quy định một tính trạng. Theo lí thuyết, nhận định nào sau đây đúng hay sai?", propositions: ["a) Cây thân thấp, lá nguyên ở $F_a$ giảm phân bình thường tạo ra 2 loại giao tử.", "b) Cho cây $F_1$ tự thụ phấn, thu được $F_2$ có $1/3$ số cây thân cao, lá xẻ.", "c) Cây thân cao, lá xẻ ở $F_a$ đồng hợp tử về 2 cặp gene.", "d) Kiểu gene cây thân cao, lá nguyên ở $F_a$ và $F_1$ là khác nhau."], correctAnswer: {0: 'false', 1: 'false', 2: 'false', 3: 'false'} },
        { id: 619, type: "true_false", content: "Mỗi nhận định sau là đúng hay sai khi nói về quá trình phiên mã?", propositions: ["a) Mạch khuôn được dùng để tổng hợp RNA có chiều $5' \\rightarrow 3'$.", "b) Quá trình tổng hợp mRNA được thực hiện theo đúng nguyên tắc bổ sung $A=U, T=A, C \\equiv G, G \\equiv C$.", "c) Enzyme RNA polymerase di chuyển trên mạch khuôn theo chiều $5' \\rightarrow 3'$.", "d) Enzyme tham gia quá trình phiên mã là enzyme RNA polymerase."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 620, type: "fill_blank", content: "Một phân tử DNA trên mạch 1 của phân tử DNA xoắn kép có tỷ lệ $(A+G)/(T+C)=2,5$ thì trên mạch bổ sung (mạch 2) tỉ lệ đó là bao nhiêu phần trăm (%)?", correctAnswer: "40" },
        { id: 621, type: "fill_blank", content: "Hóa chất 5-BU có thể làm gene đột biến thay thế cặp A-T thành G-C qua mấy lần tái bản DNA?", correctAnswer: "3" },
        { id: 622, type: "fill_blank", content: "Ở một Đậu Hà Lan, allele A quy định hạt vàng trội hoàn toàn so với allele a quy định hạt xanh; allele B quy định vỏ trơn trội hoàn toàn so với b quy định vỏ nhăn, hai cặp gene nằm trên hai cặp NST tương đồng khác nhau. Cho lai 2 cây với nhau thu được $F_1$ có tỉ lệ kiểu hình hạt vàng, vỏ nhăn chiếm 25%. Theo lí thuyết, có bao nhiêu phép lai phù hợp với kết quả trên?<br>I. $AABb \\times AABb$<br>II. $Aabb \\times Aabb$<br>III. $Aabb \\times aaBb$<br>IV. $AaBb \\times aabb$", correctAnswer: "3" },
        { id: 623, type: "fill_blank", content: "Xét 7 amino acid đầu mạch của phân tử protein hemoglobin (Hb) ở người bình thường được kí hiệu là HbA và tương ứng của người bệnh kí hiệu là HbB có trình tự như sau:<br>HbA: $Val - His - Leu - Thr - Pro - Glu - Glu$<br>HbB: $Val - His - Leu - Thr - Pro - Val - Glu$<br>Vị trí triplet xảy ra đột biến gene là bao nhiêu?", correctAnswer: "6" },
        { id: 624, type: "fill_blank", content: "Một nhóm nghiên cứu nuôi một số vi khuẩn E.coli trong môi trường chỉ có nito đồng vị nặng ($^{15}N$). Sau đó, chuyển vi khuẩn sang nuôi tiếp năm thế hệ ở môi trường chỉ có nitơ đồng vị nhẹ ($^{14}N$). Tách DNA sau mỗi thệ hệ và thu được kết quả như hình dưới đây. Cho biết X là vị trí của DNA chứa cả hai mạch $^{15}N$, Y là vị trí của DNA chứa cả mạch $^{14}N$ và mạch $^{15}N$; Z là vị trí của DNA chứa cả hai mạch $^{14}N$. Ở thế hệ thứ 4 vạch Z chiếm tỉ lệ bao nhiêu ? (Hãy thể hiện kết quả bằng số thập phân và làm tròn đến 2 chữ số sau dấu phẩy).<br><img src='https://i.postimg.cc/rsHhs1q4/sinhpp.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", correctAnswer: "0.88" }
    ]
};
