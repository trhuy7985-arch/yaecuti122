// ============================================================================
// 1. DANH MỤC ĐỀ THI (METADATA)
// ============================================================================
const examsMeta = [
    // --- Nhóm TSA ---
    {
        id: "tsa_02",
        type: "TSA",
        category: "comprehensive",
        title: "Đề thi thử HUST 2026 - Lần 1",
        questionsCount: 15,
        time: 60,
        img: "https://i.postimg.cc/tg7k50hw/ID.png",
        isVip: false
    },
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
            correctAnswer: { 0: 'true', 1: 'false' }
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
            content: "Người ta đo đường kính 61 cây gỗ thu được bảng ghép nhóm: [20;25) có 4 cây, [25;30) có 12 cây, [30;35) có 26 cây, [35;40) có 13 cây, [40;45) có 6 cây.<br>- Tứ phân vị thứ nhất bằng [1].<br>- Tứ phân vị thứ hai bằng [2].<br>- Tứ phân vị thứ ba bằng [3].<br><i>(Làm tròn đến chữ số thập phân thứ hai. Nhập đáp án cách nhau bởi \"; \")</i>",
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
            correctAnswer: { 0: 'false', 1: 'false', 2: 'true' }
        },
        {
            id: 725, type: "multiple_choice",
            content: "Cho tập $A=\\{1;2;3;...;2024\\}$. Có bao nhiêu cách chọn 5 số từ tập hợp $A$ sao cho các số được chọn lập thành một cấp số nhân tăng có công bội là một số nguyên dương?",
            options: ["A. 126", "B. 161", "C. 111", "D. 150"],
            correctAnswer: "B"
        },
        {
            id: 726, type: "fill_blank",
            content: "Cho hàm số bậc hai $y=f(x)$ có đồ thị $(P)$ và đường thẳng $d$ cắt $(P)$ tại $x=1$ (điểm $(1;3)$) và $x=6$ (điểm $(6;8)$). Biết diện tích hình phẳng giới hạn bởi $(P)$ và $d$ là $S=\\frac{125}{9}$.<div class='my-4 flex justify-center'><svg viewBox='0 0 320 220' class='w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3 shadow-sm'><defs><marker id='arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#334155'/></marker></defs><path d='M 70 155 Q 160 25 250 75 L 70 155 Z' fill='#dbeafe' opacity='0.85'/><line x1='25' y1='185' x2='300' y2='185' stroke='#334155' stroke-width='1.8' marker-end='url(#arrow)'/><line x1='40' y1='205' x2='40' y2='15' stroke='#334155' stroke-width='1.8' marker-end='url(#arrow)'/><path d='M 50 190 Q 160 5 275 110' fill='none' stroke='#1d4ed8' stroke-width='2.2'/><line x1='45' y1='166' x2='280' y2='62' stroke='#dc2626' stroke-width='2'/><line x1='70' y1='155' x2='70' y2='185' stroke='#94a3b8' stroke-dasharray='4'/><line x1='70' y1='155' x2='40' y2='155' stroke='#94a3b8' stroke-dasharray='4'/><line x1='250' y1='75' x2='250' y2='185' stroke='#94a3b8' stroke-dasharray='4'/><line x1='250' y1='75' x2='40' y2='75' stroke='#94a3b8' stroke-dasharray='4'/><circle cx='70' cy='155' r='3.5' fill='#1e293b'/><circle cx='250' cy='75' r='3.5' fill='#1e293b'/><text x='290' y='202' font-size='12' font-weight='bold' fill='#334155'>x</text><text x='22' y='25' font-size='12' font-weight='bold' fill='#334155'>y</text><text x='26' y='199' font-size='12' fill='#334155'>O</text><text x='66' y='200' font-size='11' fill='#334155'>1</text><text x='246' y='200' font-size='11' fill='#334155'>6</text><text x='25' y='159' font-size='11' fill='#334155'>3</text><text x='25' y='79' font-size='11' fill='#334155'>8</text><text x='155' y='65' font-size='13' font-weight='bold' fill='#1d4ed8'>(P)</text><text x='265' y='58' font-size='13' font-weight='bold' fill='#dc2626'>d</text></svg></div>- Phương trình đường thẳng $d$ là: [1].<br>- $\\int_1^6 f'(x)dx$ bằng: [2].<br>- $\\int_1^6 f(x)dx$ bằng: [3].<br><i>(Nhập các đáp án cách nhau bởi \"; \". Ví dụ: y=2x+1; 4; 5/3)</i>",
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
            correctAnswer: { 0: 'false', 1: 'false' }
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
            correctAnswer: { 0: 'true', 1: 'false', 2: 'false' }
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

    // ========================================================================
    // ĐỀ TSA: ĐỀ THI THỬ HUST 2026 - LẦN 1 (ĐỦ 15 CÂU TỔNG HỢP)
    // ========================================================================
    "tsa_02": [
        {
            id: 101, type: "fill_blank",
            content: "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{1-\\cos 2x}{x^2}$ bằng bao nhiêu?",
            correctAnswer: "2"
        },
        {
            id: 102, type: "true_false",
            content: "Cho hàm số $y = f(x) = \\sqrt{1 + \\cos(x)}$. Khi xét $x \\in (0, \\pi)$, các nhận định dưới đây là đúng hay sai?",
            propositions: [
                "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{2}\\right)$ có nghiệm trên $(0, \\pi)$.",
                "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{x}{4}\\right)$ có nghiệm trên $(0, \\pi)$.",
                "Phương trình $\\sqrt{1 + \\cos(x)} = \\cos\\left(\\frac{\\pi}{8}\\right)$ có đúng 1 nghiệm trên $(0, \\pi)$."
            ],
            correctAnswer: { 0: 'false', 1: 'true', 2: 'true' }
        },
        {
            id: 103, type: "fill_blank",
            content: "Bất phương trình $(\\log_2 x)^2 + \\log_3 \\frac{36}{x} \\leq \\left(1 + \\log_3 \\frac{36}{x}\\right) \\log_2 x$ có tập nghiệm là $x \\in [a; b]$. Giá trị của $a + \\frac{b}{2}$ bằng bao nhiêu?",
            correctAnswer: "20"
        },
        {
            id: 104, type: "multiple_choice",
            content: "Cho hàm số $y = \\frac{1+x}{1-x}$. Nhận xét nào sau đây đúng?",
            options: [
                "A. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = 1$",
                "B. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = 1$",
                "C. Đồ thị hàm số có TCN $y = 1$, TCĐ $x = -1$",
                "D. Đồ thị hàm số có TCN $y = -1$, TCĐ $x = -1$"
            ],
            correctAnswer: "B"
        },
        {
            id: 105, type: "multiple_choice",
            content: "Khảo sát một xe máy di chuyển trên đường trong vòng 6 giây, vận tốc của xe có biểu thức $v(t) = 12 + 4t - t^2$ (m/s). Xe có vận tốc lớn hơn $15$ (m/s) trong khoảng thời gian nào?",
            options: ["A. $t \\in (1; 3)$", "B. $t \\in (0; 6)$", "C. $t \\in (2; 4)$", "D. $t \\in (3; 5)$"],
            correctAnswer: "A"
        },
        {
            id: 106, type: "true_false",
            content: "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh bên $SA = 2$, cạnh đáy $AB = 1$. Các nhận định sau đúng hay sai?",
            propositions: [
                "Hai đường thẳng $SA$ và $CD$ không vuông góc với nhau.",
                "Côsin góc giữa hai đường thẳng $SA$ và $CD$ bằng $\\frac{1}{4}$.",
                "Chiều cao $SO$ của hình chóp bằng $\\frac{\\sqrt{14}}{2}$.",
                "Thể tích khối chóp $S.ABCD$ bằng $\\frac{\\sqrt{14}}{6}$."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'true', 3: 'true' }
        },
        {
            id: 107, type: "fill_blank",
            content: "Một chất điểm dao động điều hòa với phương trình $x = 6\\cos(4\\pi t + \\frac{\\pi}{3})$ (cm). Tốc độ cực đại của chất điểm trong quá trình dao động bằng $a\\pi$ (cm/s). Giá trị của $a$ là bao nhiêu?",
            correctAnswer: "24"
        },
        {
            id: 108, type: "multiple_choice",
            content: "Đun nóng ester $CH_3COOC_2H_5$ với một lượng vừa đủ dung dịch $NaOH$, sản phẩm thu được là:",
            options: [
                "A. $CH_3COONa$ và $CH_3OH$.",
                "B. $CH_3COONa$ và $C_2H_5OH$.",
                "C. $HCOONa$ và $C_2H_5OH$.",
                "D. $C_2H_5COONa$ và $CH_3OH$."
            ],
            correctAnswer: "B"
        },
        {
            id: 109, type: "fill_blank",
            content: "Cho tích phân $I = \\int_0^1 (2x + 1)e^x dx = a + b \\cdot e$ với $a, b \\in \\mathbb{Z}$. Tổng $a + b$ bằng bao nhiêu?",
            correctAnswer: "1"
        },
        {
            id: 110, type: "multiple_choice",
            content: "Một hộp chứa 4 viên bi trắng, 5 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên đồng thời 3 viên bi. Xác suất để 3 viên bi lấy ra có đủ cả 3 màu là:",
            options: ["A. $\\frac{24}{91}$", "B. $\\frac{12}{91}$", "C. $\\frac{67}{91}$", "D. $\\frac{4}{15}$"],
            correctAnswer: "A"
        },
        {
            id: 111, type: "true_false",
            content: "Cho dung dịch glucose và dung dịch saccharose riêng biệt. Các nhận định về tính chất hóa học sau đây đúng hay sai?",
            propositions: [
                "Cả hai dung dịch đều hòa tan $Cu(OH)_2$ ở nhiệt độ thường tạo dung dịch xanh lam.",
                "Cả hai dung dịch đều tham gia phản ứng tráng bạc khi đun nóng với thuốc thử Tollens.",
                "Thủy phân saccharose trong môi trường acid thu được hai monosaccharide."
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'true' }
        },
        {
            id: 112, type: "fill_blank",
            content: "Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; -2; 2)$ đến mặt phẳng $(P): 2x - y + 2z + 1 = 0$ bằng bao nhiêu?",
            correctAnswer: "3"
        },
        {
            id: 113, type: "multiple_choice",
            content: "Cho hàm số $y = x^3 - 3x + 2$. Tọa độ điểm cực đại của đồ thị hàm số là:",
            options: ["A. $(-1; 4)$", "B. $(1; 0)$", "C. $(0; 2)$", "D. $(-1; 0)$"],
            correctAnswer: "A"
        },
        {
            id: 114, type: "fill_blank",
            content: "Thủy phân hoàn toàn $34,2$ gam saccharose trong môi trường acid với hiệu suất $80\\%$, thu được hỗn hợp $X$. Cho toàn bộ $X$ tác dụng với lượng dư dung dịch $AgNO_3/NH_3$ đun nóng, thu được tối đa bao nhiêu gam $Ag$? (Làm tròn đến phần mười)",
            correctAnswer: "34.6"
        },
        {
            id: 115, type: "multiple_choice",
            content: "Khi truyền một nhiệt lượng $600\\text{ J}$ cho một khối khí trong xilanh, khí dãn nở thực hiện công $250\\text{ J}$ đẩy pit-tông dịch chuyển. Độ biến thiên nội năng của khối khí là:",
            options: ["A. $350\\text{ J}$", "B. $850\\text{ J}$", "C. $-350\\text{ J}$", "D. $-850\\text{ J}$"],
            correctAnswer: "A"
        }
    ],

    // ========================================================================
    // ĐỀ THPT MÔN TOÁN: ĐỀ SỐ 1 (22 CÂU)
    // ========================================================================
    "thpt_toan_01": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (12 CÂU) ---
        {
            id: 1, type: "multiple_choice",
            content: "Lâm trường Tam Đảo thống kê đường kính thân gỗ của 60 cây xoan đào được cho ở bảng sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Đường kính (cm)</th><td class='border border-gray-300 p-2'>[20; 22)</td><td class='border border-gray-300 p-2'>[22; 24)</td><td class='border border-gray-300 p-2'>[24; 26)</td><td class='border border-gray-300 p-2'>[26; 28)</td><td class='border border-gray-300 p-2'>[28; 30)</td></tr><tr><th class='border border-gray-300 p-2'>Tần số</th><td class='border border-gray-300 p-2'>5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>18</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>10</td></tr></table><br>Nhóm chứa mốt của mẫu số liệu đã cho là:",
            options: ["A. [20; 22)", "B. [28; 30)", "C. [24; 26)", "D. [22; 24)"],
            correctAnswer: "D"
        },
        {
            id: 2, type: "multiple_choice",
            content: "Một hộp có 5 viên bi màu đỏ và 7 viên bi màu xanh. Lấy ngẫu nhiên 2 viên bi từ hộp đó. Xác suất để lấy được 2 viên bi màu đỏ bằng:",
            options: ["A. $\\frac{5}{33}$", "B. $\\frac{5}{22}$", "C. $\\frac{7}{33}$", "D. $\\frac{7}{22}$"],
            correctAnswer: "A"
        },
        {
            id: 3, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, đường thẳng đi qua hai điểm $A(1; 2; 3), B(5; 4; -1)$ có phương trình chính tắc là:",
            options: ["A. $\\frac{x+1}{2} = \\frac{y+2}{1} = \\frac{z+3}{-2}$", "B. $\\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z-3}{2}$", "C. $\\frac{x+5}{-2} = \\frac{y+4}{-1} = \\frac{z-1}{2}$", "D. $\\frac{x-5}{2} = \\frac{y-4}{1} = \\frac{z+1}{-2}$"],
            correctAnswer: "D"
        },
        {
            id: 4, type: "multiple_choice",
            content: "Cho $\\int_{2}^{5} f(x)dx = 2$ và $\\int_{2}^{5} g(x)dx = 5$. Giá trị của tích phân $\\int_{2}^{5} [f(x) - 2g(x)]dx$ bằng:",
            options: ["A. -8", "B. 12", "C. 1", "D. -3"],
            correctAnswer: "A"
        },
        {
            id: 5, type: "multiple_choice",
            content: "Biết phương trình $2x^2 + x + 3 = 1 - x$ có hai nghiệm phân biệt $x_1; x_2$. Tổng $x_1 + x_2$ bằng:",
            options: ["A. -3", "B. -1", "C. 2", "D. -2"],
            correctAnswer: "A"
        },
        {
            id: 6, type: "multiple_choice",
            content: "Cho cấp số cộng $(u_n)$ có $u_1 = -2$ và công sai $d = 3$. Giá trị của $u_{10}$ bằng:",
            options: ["A. $u_{10} = -39$", "B. $u_{10} = -29$", "C. $u_{10} = 25$", "D. $u_{10} = 28$"],
            correctAnswer: "C"
        },
        {
            id: 7, type: "multiple_choice",
            content: "Đạo hàm của hàm số $f(x) = \\sin x + \\cos(3x)$ là:",
            options: ["A. $f'(x) = -\\cos x + 3\\sin(3x)$", "B. $f'(x) = \\cos x - 3\\sin(3x)$", "C. $f'(x) = \\cos x + 3\\sin(3x)$", "D. $f'(x) = -\\cos x + \\sin(3x)$"],
            correctAnswer: "B"
        },
        {
            id: 8, type: "multiple_choice",
            content: "Tập nghiệm của bất phương trình $\\log_{\\frac{1}{3}}(2x - 1) > -2$ là:",
            options: ["A. $(\\frac{1}{2}; 5)$", "B. $(\\frac{1}{2}; +\\infty)$", "C. $(5; +\\infty)$", "D. $(-\\infty; 5)$"],
            correctAnswer: "A"
        },
        {
            id: 9, type: "multiple_choice",
            content: "Cho hàm số $y = f(x)$ có đạo hàm là $f'(x) = (x - 1)(x - 2)^2(x + 3), \\forall x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:",
            options: ["A. 2", "B. 3", "C. 1", "D. 0"],
            correctAnswer: "A"
        },
        {
            id: 10, type: "multiple_choice",
            content: "Giá trị lớn nhất của hàm số $f(x) = \\frac{2x + 3}{x - 1}$ trên đoạn $[2; 5]$ bằng:",
            options: ["A. $\\frac{13}{4}$", "B. 5", "C. 7", "D. 2"],
            correctAnswer: "C"
        },
        {
            id: 11, type: "multiple_choice",
            content: "Tập nghiệm của phương trình $\\sin x = 0$ là:",
            options: ["A. $S = \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$", "B. $S = \\{k\\pi, k \\in \\mathbb{Z}\\}$", "C. $S = \\{k2\\pi, k \\in \\mathbb{Z}\\}$", "D. $S = \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$"],
            correctAnswer: "B"
        },
        {
            id: 12, type: "multiple_choice",
            content: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 2, AD = 3, AA' = 6$. Độ dài vectơ $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:",
            options: ["A. 7", "B. $7\\sqrt{3}$", "C. $11\\sqrt{3}$", "D. 11"],
            correctAnswer: "A"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 13, type: "true_false",
            content: "Trong không gian $Oxyz$, cho $A(0; 1; 1)$, $B(1; 0; -3)$, $C(-1; -2; -3)$ và mặt cầu $(S)$ có phương trình $x^2 + y^2 + z^2 - 2x + 2z - 2 = 0$.",
            propositions: [
                "$\\overrightarrow{AB} = (1; -1; -4)$",
                "Mặt phẳng $(ABC)$ có phương trình $2x - 2y + z - 1 = 0$",
                "Mặt phẳng $(ABC)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính bằng $\\frac{4\\sqrt{2}}{3}$",
                "Điểm $G(a; b; c)$ là trọng tâm của tam giác $ABC$ thì $a + b + c = 2$"
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'true', 3: 'false' }
        },
        {
            id: 14, type: "true_false",
            content: "Một cây cà chua khi mới trồng có chiều cao 15cm. Gọi $h(t)$ là chiều cao của cây tại thời điểm đúng $t$ tuần sau khi trồng ($0 \\le t \\le 16$). Tốc độ tăng chiều cao được cho bởi hàm số $h'(t) = -0.02t^3 + 0.32t^2$ (cm/tuần).",
            propositions: [
                "Tại thời điểm đúng $t$ tuần sau khi trồng, chiều cao của cây là $h(t) = -\\frac{t^4}{200} + \\frac{32t^3}{300}$ (cm)",
                "Tại thời điểm tốc độ tăng chiều cao lớn nhất, cây cao hơn 80cm",
                "Trong khoảng thời gian 10 tuần đầu, tốc độ tăng chiều cao trung bình lớn hơn 5.6 (cm/tuần)",
                "Tại thời điểm đúng 6 tuần sau khi trồng, chiều cao của cây cà chua là 31.56 (cm)"
            ],
            correctAnswer: { 0: 'false', 1: 'false', 2: 'true', 3: 'true' }
        },
        {
            id: 15, type: "true_false",
            content: "Một công ty đấu thầu hai dự án. Xác suất trúng thầu dự án thứ nhất là 0.8. Nếu trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.9. Nếu không trúng thầu dự án 1 thì xác suất trúng thầu dự án 2 là 0.2.",
            propositions: [
                "Xác suất để công ty không trúng thầu dự án thứ nhất là 0.2",
                "Xác suất để công ty trúng thầu dự án thứ hai là 0.76",
                "Xác suất để công ty trúng thầu cả hai dự án là 0.72",
                "Nếu công ty không trúng thầu dự án thứ hai thì xác suất trúng thầu dự án thứ nhất là 0.12"
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'true', 3: 'false' }
        },
        {
            id: 16, type: "true_false",
            content: "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$.",
            propositions: [
                "Đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = ax + b$. Khi đó $a - 2b = 5$",
                "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình là $y = 2x - 3$",
                "Gọi $A, B$ lần lượt là các điểm cực đại, cực tiểu của đồ thị hàm số và $O$ là gốc tọa độ. Diện tích tam giác $OAB$ bằng 6",
                "Hàm số nghịch biến trên khoảng $(-1; 3)$"
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'true', 3: 'false' }
        },

        // --- PHẦN III: CÂU TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 17, type: "fill_blank",
            content: "Nếu một doanh nghiệp sản xuất $x$ sản phẩm trong một tháng ($x \\in \\mathbb{N}^*, 1 \\le x \\le 5000$) thì doanh thu là $F(x) = -0.03x^2 + 800x$ (nghìn đồng), chi phí sản xuất bình quân là $G(x) = \\frac{50000}{x} + 450$ (nghìn đồng). Trong một tháng, doanh nghiệp đó cần sản xuất ít nhất bao nhiêu sản phẩm để lợi nhuận thu được lớn hơn 100 triệu đồng?",
            correctAnswer: "446"
        },
        {
            id: 18, type: "fill_blank",
            content: "Cho hình lăng trụ $ABCD.A'B'C'D'$ có đáy $ABCD$ là hình thoi, $\\widehat{ABC} = 60^\\circ$. Biết $CA' = CB' = CC'$. Góc giữa $(BCC'B')$ và $(ABC)$ bằng $45^\\circ$. Khoảng cách giữa $AA'$ và $BC$ bằng $6\\sqrt{3}$. Thể tích khối lăng trụ đã cho bằng $a\\sqrt{2}$, giá trị của $a$ bằng bao nhiêu?",
            correctAnswer: "864"
        },
        {
            id: 19, type: "fill_blank",
            content: "Cho hình hộp $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Biết $\\widehat{BAD} = 90^\\circ$, $\\widehat{BAA'} = \\widehat{DAA'} = 60^\\circ$. Số đo góc giữa hai vectơ $\\overrightarrow{AC'}$ và $\\overrightarrow{DC'}$ bằng bao nhiêu độ? (Làm tròn kết quả đến hàng đơn vị).",
            correctAnswer: "130"
        },
        {
            id: 20, type: "fill_blank",
            content: "Bạn Minh dùng một miếng bìa hình vuông $ABCD$ cạnh $40cm$ cắt để làm một chiếc đèn lồng gồm ba phần: Phần thân là lăng trụ tứ giác đều, hai đầu là hai hình chóp tứ giác đều. Thể tích lớn nhất của chiếc đèn bằng bao nhiêu $cm^3$? (Làm tròn kết quả đến hàng đơn vị).",
            correctAnswer: "3057"
        },
        {
            id: 21, type: "fill_blank",
            content: "Có hai trục $Ox, Oy$ đặt trên mặt đất; tia $Oz$ hướng lên trên (đơn vị: km). Một Ra đa tại $A(12; 8; 3)$ có khả năng phát hiện thiết bị trong vòng bán kính 30km. UAV bay từ $M(72; 28; 3)$ đến $N(-32; -30; 3)$ với vận tốc không đổi là 240km/h. Hình ảnh của UAV xuất hiện trên màn hình Ra đa bao nhiêu phút? (Làm tròn đến hàng đơn vị).",
            correctAnswer: "14"
        },
        {
            id: 22, type: "fill_blank",
            content: "Cho hình nón có bán kính đáy $OA = 6cm$ và chiều cao $SO = 8cm$. Cắt hình nón bởi mặt phẳng song song với trục $SO$ và cách trục $SO$ khoảng 3cm. Thể tích phần không chứa đỉnh $S$ bằng bao nhiêu $cm^3$? (Làm tròn đến hàng phần chục).",
            correctAnswer: "33.2"
        }
    ],

    // ========================================================================
    // ĐỀ THPT MÔN TOÁN: MÃ ĐỀ 0101 (22 CÂU)
    // ========================================================================
    "thpt_toan_02": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (12 CÂU) ---
        {
            id: 501, type: "multiple_choice",
            content: "Cho cấp số cộng $(u_n)$ có $u_1=5$ và công sai $d=-1$. Giá trị của $u_2$ bằng",
            options: ["A. 4.", "B. -5.", "C. 5.", "D. -4."],
            correctAnswer: "A"
        },
        {
            id: 502, type: "multiple_choice",
            content: "Cho các hàm số $y=f(x)$ và $y=g(x)$ có đạo hàm trên tập số thực $\\mathbb{R}$ thỏa mãn $f'(x)=x$ và $g'(x)=x^2$. Đạo hàm của hàm số $y=f(x)+g(x)$ là",
            options: ["A. $3x$.", "B. $1+x^2$.", "C. $x+x^2$.", "D. $1+2x$."],
            correctAnswer: "C"
        },
        {
            id: 503, type: "multiple_choice",
            content: "Cho $\\int f(x)dx = \\sin x + C$. Phát biểu nào sau đây là đúng?",
            options: ["A. $\\int [3+f(x)]dx = 3x + \\cos x + C$.", "B. $\\int [3+f(x)]dx = 3x + \\sin x + C$.", "C. $\\int [3+f(x)]dx = 3x - \\cos x + C$.", "D. $\\int [3+f(x)]dx = 3x - \\sin x + C$."],
            correctAnswer: "B"
        },
        {
            id: 504, type: "multiple_choice",
            content: "Nghiệm của phương trình $\\log_3(x-1)=1$ là",
            options: ["A. $x=2$.", "B. $x=3$.", "C. $x=5$.", "D. $x=4$."],
            correctAnswer: "D"
        },
        {
            id: 505, type: "multiple_choice",
            content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(1;5;1)$ và $B(3;3;1)$. Vectơ $\\overrightarrow{AB}$ có tọa độ là",
            options: ["A. $(2;-2;0)$.", "B. (-2;2;0).", "C. $(4;8;2)$.", "D. $(2;4;1)$."],
            correctAnswer: "A"
        },
        {
            id: 506, type: "multiple_choice",
            content: "Cho hai biến cố độc lập $A$ và $B$ có xác suất thỏa mãn $P(A)=0,5$ và $P(B)=0,4$. Giá trị của $P(AB)$ bằng",
            options: ["A. 0,8.", "B. 0,1.", "C. 0,9.", "D. 0,2."],
            correctAnswer: "D"
        },
        {
            id: 507, type: "multiple_choice",
            content: "Cho hình lập phương $ABCD.A'B'C'D'$ (xem hình dưới). Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?<br><img src='https://i.postimg.cc/GpwpRfVD/c7.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
            options: ["A. $\\overrightarrow{AA'}$.", "B. $\\overrightarrow{D'C'}$.", "C. $\\overrightarrow{CD}$.", "D. $\\overrightarrow{AD}$."],
            correctAnswer: "B"
        },
        {
            id: 508, type: "multiple_choice",
            content: "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases}x+y-3<0\\\\ x-y+1>0\\end{cases}$?",
            options: ["A. $(1;0)$.", "B. $(0;2)$.", "C. $(-1;1)$.", "D. $(1;2)$."],
            correctAnswer: "A"
        },
        {
            id: 509, type: "multiple_choice",
            content: "Hàm số $F(x)=4x^3$ là một nguyên hàm của hàm số nào sau đây?",
            options: ["A. $f_2(x)=3x^2$.", "B. $f_3(x)=12x^2$.", "C. $f_1(x)=x^4$.", "D. $f_4(x)=4x^4$."],
            correctAnswer: "B"
        },
        {
            id: 510, type: "multiple_choice",
            content: "Cho hàm số $y=\\frac{ax+b}{cx+d}$ có bảng biến thiên như hình dưới đây:<br><img src='https://i.postimg.cc/4NW8rk7s/c10-t.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận ngang của đồ thị hàm số đã cho có phương trình là",
            options: ["A. $y=-2$.", "B. $x=-2$.", "C. $x=1$.", "D. $y=1$."],
            correctAnswer: "A"
        },
        {
            id: 511, type: "multiple_choice",
            content: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ với $u_1 \\neq 0, q>1$. Số hạng $u_4$ là",
            options: ["A. $u_4=u_1 \\cdot q^3$.", "B. $u_4=u_1 \\cdot q^4$.", "C. $u_4=u_1+3q$.", "D. $u_4=u_1+4q$."],
            correctAnswer: "A"
        },
        {
            id: 512, type: "multiple_choice",
            content: "Khảo sát thời gian (đơn vị: phút) học trực tuyến trong một ngày của 42 học sinh, người ta thu được mẫu số liệu ghép nhóm như sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian</th><td class='border border-gray-300 p-2'>[10;20)</td><td class='border border-gray-300 p-2'>[20;30)</td><td class='border border-gray-300 p-2'>[30;40)</td><td class='border border-gray-300 p-2'>[40;50)</td><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td></tr><tr><th class='border border-gray-300 p-2'>Số học sinh</th><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>5</td></tr></table><br>Trung vị của mẫu số liệu trên thuộc nhóm nào sau đây?",
            options: ["A. $[30;40)$.", "B. $[40;50)$.", "C. $[60;70)$.", "D. $[50;60)$."],
            correctAnswer: "A"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 513, type: "true_false",
            content: "Kết quả quét thử nghiệm hồ sơ y tế của 10000 người: 1000 người nhận cảnh báo (trong đó 700 bệnh, 300 không bệnh); 9000 người không nhận cảnh báo (trong đó 100 bệnh, 8900 không bệnh). Chọn ngẫu nhiên 1 người:",
            propositions: [
                "Xác suất để người đó không nhận được cảnh báo từ ứng dụng bằng 0,9.",
                "Xác suất để người đó không có bệnh, biết rằng người đó không nhận được cảnh báo, lớn hơn 0,98.",
                "Xác suất để người đó không có bệnh bằng 0,9.",
                "Xác suất để người đó không nhận được cảnh báo, biết rằng người đó không có bệnh, nhỏ hơn 0,95."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'false', 3: 'false' }
        },
        {
            id: 514, type: "true_false",
            content: "Cho hàm số $f(x)=\\frac{1}{3}x^3-5x^2+9x+8$.",
            propositions: [
                "Hàm số đã cho có đạo hàm là $f'(x)=x^2-10x+9$.",
                "Phương trình $f'(x)=0$ có tập nghiệm là $S=\\{1;9\\}$.",
                "Hàm số đã cho nghịch biến trên khoảng $(1;9)$.",
                "Giá trị cực tiểu của hàm số đã cho bằng $\\frac{37}{3}$."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'true', 3: 'false' }
        },
        {
            id: 515, type: "true_false",
            content: "Một hệ thống pin năng lượng mặt trời có năng lượng điện lưu trữ là $F(t)$ (kWh) với $F(0)=0$. Tốc độ lưu trữ năng lượng là $f(t)=F'(t) = -0,3t^2 + 3,6t$ (kW) với $0 \\le t \\le 12$.",
            propositions: [
                "$F(t)=-0,1t^3+1,8t^2$ với $0 \\le t \\le 12$.",
                "Năng lượng lưu trữ được kể từ thời điểm $t=a$ đến $t=b$ là $\\int_{a}^{b} f(t)dt$.",
                "Năng lượng điện lưu trữ được kể từ thời điểm $t=1$ đến $t=4$ nhỏ hơn 20,6 kWh.",
                "Năng lượng lưu trữ được từ $t=1$ đến $t=7$ gấp hai lần năng lượng lưu trữ được từ $t=1$ đến $t=4$."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'false', 3: 'false' }
        },
        {
            id: 516, type: "true_false",
            content: "Trong hệ tọa độ $Oxyz$ (1 đơn vị = 10m). Vành đai bảo vệ mục tiêu $O$ là đường tròn tâm $O$, bán kính 7 đơn vị trên $(Oxy)$. Máy bay bay theo đường thẳng từ $M(5;10;4)$ đến $N(14;-2;4)$.",
            propositions: [
                "$\\overrightarrow{MN}=(9;-12;0)$.",
                "Phương trình tham số của $MN$ là $\\begin{cases}x=5+3t\\\\ y=10-4t\\\\ z=0\\end{cases}$ với $t \\in \\mathbb{R}$.",
                "Khoảng cách ngắn nhất từ máy bay đến vành đai bảo vệ là 50 mét.",
                "Khoảng cách đạt giá trị nhỏ nhất khi máy bay ở tọa độ $(8;6;4)$."
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'true', 3: 'true' }
        },

        // --- PHẦN III: CÂU TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 517, type: "fill_blank",
            content: "Cho hình lập phương $ABCD.MNPQ$ có cạnh bằng 6. Gọi $E$ là trung điểm của đoạn thẳng $AB$. Khoảng cách từ điểm $P$ đến mặt phẳng $(MED)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
            correctAnswer: "7.35"
        },
        {
            id: 518, type: "fill_blank",
            content: "Bình cần điền 15 số $\\{0;1;2;3;4;5;6;7;8;10;11;12;15;16;20\\}$ vào 15 ô vuông dạng bậc thang sao cho: Hiệu hai số ở 2 ô khác nhau trên cùng 1 hàng hoặc 1 cột không chia hết cho 5.<br><img src='https://i.postimg.cc/dtC2jb2n/ovuong.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Gọi $H$ là số cách điền khác nhau. Giá trị của $\\frac{H}{30}$ bằng bao nhiêu?",
            correctAnswer: "1152"
        },
        {
            id: 519, type: "fill_blank",
            content: "Khối vật thể tạo thành khi quay nửa trên elip $\\frac{x^2}{1,5^2}+\\frac{y^2}{1^2}=1$ quanh trục $Ox$. Lỗ khoan trụ dọc trục có bán kính $0,2$cm.<br><img src='https://i.postimg.cc/W4z7RXqV/tt.png' class='mt-4 mb-4 w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Thể tích của hạt cườm đó bằng bao nhiêu $cm^3$ (làm tròn đến hàng phần trăm)?",
            correctAnswer: "5.91"
        },
        {
            id: 520, type: "fill_blank",
            content: "Khung hình đa giác đều 12 cạnh $A_1A_2...A_{12}$. Lắp ngẫu nhiên 12 bóng (4 đỏ, 8 xanh) vào 12 đỉnh. Gọi $P$ là xác suất để mỗi hình vuông (tạo từ 4 đỉnh đa giác) đều có ít nhất 1 bóng đỏ. Giá trị của $3190P$ bằng bao nhiêu?<img src='https://i.postimg.cc/nV3cr2Ck/vv.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'>",
            correctAnswer: "1856"
        },
        {
            id: 521, type: "fill_blank",
            content: "Số liệu bán hàng (kg và nghìn đồng):<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Ngày</th><th class='border border-gray-300 p-2'>Rau muống</th><th class='border border-gray-300 p-2'>Bí xanh</th><th class='border border-gray-300 p-2'>Cà chua</th><th class='border border-gray-300 p-2'>Tổng tiền</th></tr><tr><td class='border border-gray-300 p-2'>Thứ 4</td><td class='border border-gray-300 p-2'>19</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>600</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>540</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 6</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>570</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 7</td><td class='border border-gray-300 p-2'>50</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>?</td></tr></table><br>Biết đơn giá không đổi, tổng tiền thu được ngày thứ Bảy là bao nhiêu?",
            correctAnswer: "1275"
        },
        {
            id: 522, type: "fill_blank",
            content: "Công ty chế biến $x$ tấn nguyên liệu ($1 \\le x \\le 200$), chi phí $C(x)=0,001x^3+30x+10$ (triệu) và doanh thu $R(x)=60x$ (triệu). Lợi nhuận lớn nhất công ty đạt được trong một tháng là bao nhiêu triệu đồng?",
            correctAnswer: "1990"
        }
    ],

    // ========================================================================
    // ĐỀ THPT MÔN VẬT LÍ: GIỮA HK1 - ĐỀ SỐ 3 (28 CÂU)
    // ========================================================================
    "thpt_ly_03": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 901, type: "multiple_choice",
            content: "Khi cho 2 vật chênh lệch nhiệt độ tiếp xúc nhau, năng lượng nhiệt luôn truyền từ vật có (1)..... sang vật có (2)..... Quá trình truyền nhiệt kết thúc khi hai vật (3)..... (trạng thái này được gọi là trạng thái (4).....). Chọn đáp án có các cụm từ thích hợp điền vào chỗ trống.",
            options: [
                "A. (1) nhiệt độ thấp; (2) nhiệt độ cao; (3) có cùng nội năng; (4) cân bằng nội năng.",
                "B. (1) nhiệt độ thấp; (2) nhiệt độ cao; (3) có cùng nhiệt độ; (4) cân bằng nhiệt.",
                "C. (1) nhiệt độ cao; (2) nhiệt độ thấp; (3) có cùng nội năng; (4) cân bằng nội năng.",
                "D. (1) nhiệt độ cao; (2) nhiệt độ thấp; (3) có cùng nhiệt độ; (4) cân bằng nhiệt."
            ],
            correctAnswer: "D"
        },
        {
            id: 902, type: "multiple_choice",
            content: "Một nhiệt kế thể tích không đổi hiển thị nhiệt độ $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ tương ứng với các áp suất $50\\text{ cmHg}$ và $90\\text{ cmHg}$. Biết nhiệt độ đọc được là hàm bậc nhất của áp suất. Khi áp suất thủy ngân là $60\\text{ cmHg}$ thì nhiệt độ đọc được bằng",
            options: ["A. $25^\\circ\\text{C}$.", "B. $40^\\circ\\text{C}$.", "C. $15^\\circ\\text{C}$.", "D. $12,5^\\circ\\text{C}$."],
            correctAnswer: "A"
        },
        {
            id: 903, type: "multiple_choice",
            content: "Chiều cao của cột thủy ngân trong nhiệt kế thủy ngân thay đổi theo nhiệt độ. Ứng với hai vạch có nhiệt độ là $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ thì chiều cao của cột thủy ngân trong nhiệt kế là $2\\text{ cm}$ và $22\\text{ cm}$. Khi sử dụng nhiệt kế này để đo nhiệt độ của cơ thể một em bé đang bị sốt thì thấy cột thủy ngân cao $9,9\\text{ cm}$. Theo thang nhiệt Kelvin, nhiệt độ của em bé lúc này là bao nhiêu?",
            options: ["A. $321,5\\text{ K}$.", "B. $305,5\\text{ K}$.", "C. $312,5\\text{ K}$.", "D. $327,0\\text{ K}$."],
            correctAnswer: "C"
        },
        {
            id: 904, type: "multiple_choice",
            content: "Nội năng của một hệ là",
            options: [
                "A. tổng công và nhiệt mà hệ truyền ra bên ngoài.",
                "B. tổng công và nhiệt mà hệ nhận được từ bên ngoài.",
                "C. tổng động năng và thế năng tương tác của các phân tử cấu tạo nên hệ.",
                "D. tổng động năng và thế năng của hệ."
            ],
            correctAnswer: "C"
        },
        {
            id: 905, type: "multiple_choice",
            content: "Khi thép đang nóng chảy được làm nguội nhanh về nhiệt độ phòng sẽ giúp tăng độ cứng cho thép và cách làm như vậy được gọi là tôi thép. Người ta có thể sử dụng nước để làm hạ nhiệt độ nhanh cho thép đang nóng đỏ vì",
            options: [
                "A. nhiệt dung riêng của nước cao hơn nhiều so với của thép trong khi đó nhiệt độ sôi của nước lại thấp hơn nhiều so với nhiệt độ nóng chảy của thép.",
                "B. nước có khả năng bốc hơi rất nhanh khi gặp kim loại nóng.",
                "C. nhiệt độ nóng chảy của nước thấp hơn nhiều so với của thép.",
                "D. sử dụng nước là do thói quen vì thật ra có thể để thép nóng đỏ trong không khí thì thép cũng hạ nhanh về nhiệt độ phòng."
            ],
            correctAnswer: "A"
        },
        {
            id: 906, type: "multiple_choice",
            content: "Khi nói về thang đo nhiệt độ Kelvin và Celsius, kết luận nào sau đây là sai?",
            options: [
                "A. Nhiệt độ trong thang nhiệt độ Kelvin được kí hiệu là $T$, có đơn vị $\\text{K}$.",
                "B. Nhiệt độ trong thang nhiệt độ Celsius được kí hiệu là $t$, có đơn vị $^\\circ\\text{C}$.",
                "C. Một độ chia trên thang nhiệt độ Kelvin có giá trị gấp 273 lần một độ chia trên thang nhiệt độ Celsius.",
                "D. Mối liên hệ về các giá trị nhiệt độ giữa hai thang đo là: $T(\\text{K}) = t(^\\circ\\text{C}) + 273,15$."
            ],
            correctAnswer: "C"
        },
        {
            id: 907, type: "multiple_choice",
            content: "Sắp xếp các nhiệt độ sau: $300\\text{ K}, 20^\\circ\\text{C}, 280\\text{ K}, 30^\\circ\\text{C}$ theo thứ tự tăng dần. Thứ tự đúng là:",
            options: [
                "A. $300\\text{ K}, 280\\text{ K}, 20^\\circ\\text{C}, 30^\\circ\\text{C}$.",
                "B. $20^\\circ\\text{C}, 30^\\circ\\text{C}, 280\\text{ K}, 300\\text{ K}$.",
                "C. $280\\text{ K}, 20^\\circ\\text{C}, 300\\text{ K}, 30^\\circ\\text{C}$.",
                "D. $30^\\circ\\text{C}, 300\\text{ K}, 20^\\circ\\text{C}, 280\\text{ K}$."
            ],
            correctAnswer: "C"
        },
        {
            id: 908, type: "multiple_choice",
            content: "Khi nói về quá trình truyền nhiệt lượng khi cho hai vật tiếp xúc với nhau. Kết luận nào sau đây là sai?",
            options: [
                "A. Năng lượng nhiệt được truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.",
                "B. Năng lượng nhiệt được truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.",
                "C. Vật nóng hơn sẽ giảm nhiệt độ, vật lạnh hơn sẽ tăng nhiệt độ.",
                "D. Khi hai vật ở cùng nhiệt độ, không có truyền năng lượng nhiệt giữa chúng."
            ],
            correctAnswer: "A"
        },
        {
            id: 909, type: "multiple_choice",
            content: "Nhiệt hóa hơi riêng của một chất là nhiệt lượng cần cung cấp để $1\\text{ kg}$ chất đó:",
            options: ["A. bay hơi hết.", "B. hóa hơi hoàn toàn.", "C. hóa hơi hoàn toàn ở nhiệt độ sôi.", "D. hóa hơi."],
            correctAnswer: "C"
        },
        {
            id: 910, type: "multiple_choice",
            content: "Các nhiệt kế thường dùng như nhiệt kế rượu, nhiệt kế thủy ngân, được chế tạo dựa trên",
            options: [
                "A. sự nở vì nhiệt của thể tích một lượng khí xác định ở áp suất không đổi.",
                "B. sự nở vì nhiệt của ống thủy tinh chứa chất lỏng.",
                "C. sự nở dài của chất lỏng trong ống thủy tinh.",
                "D. sự nở dài của một thanh kim loại thẳng."
            ],
            correctAnswer: "C"
        },
        {
            id: 911, type: "multiple_choice",
            content: "Phần năng lượng nhiệt mà vật này truyền cho vật kia hoặc vật này nhận từ vật kia gọi là",
            options: ["A. nội năng.", "B. nhiệt lượng.", "C. nhiệt độ.", "D. thế năng."],
            correctAnswer: "B"
        },
        {
            id: 912, type: "multiple_choice",
            content: "Cặp nhiệt độ được chọn làm mốc trong thang đo nhiệt độ Kelvin là",
            options: [
                "A. nhiệt độ nước đóng băng và nhiệt độ sôi của băng.",
                "B. độ không tuyệt đối và nhiệt độ nước sôi của nước tinh khiết.",
                "C. độ không tuyệt đối và nhiệt độ điểm ba của nước.",
                "D. nhiệt độ nước đóng băng và nhiệt độ điểm ba của nước."
            ],
            correctAnswer: "C"
        },
        {
            id: 913, type: "multiple_choice",
            content: "Chọn phát biểu sai? Sự bay hơi của một khối chất lỏng",
            options: [
                "A. phụ thuộc vào nhiệt độ, nhiệt độ càng cao sự bay hơi xảy ra càng nhanh.",
                "B. phụ thuộc vào độ ẩm của không khí trên mặt thoáng, độ ẩm càng lớn thì sự bay hơi xảy ra càng nhanh.",
                "C. phụ thuộc vào diện tích mặt thoáng, diện tích mặt thoáng càng lớn thì sự bay hơi xảy ra càng nhanh.",
                "D. xảy ra ở nhiệt độ bất kỳ."
            ],
            correctAnswer: "B"
        },
        {
            id: 914, type: "multiple_choice",
            content: "Khi làm muối, người ta dựa vào hiện tượng nào của nước?",
            options: ["A. Đông đặc.", "B. Ngưng tụ.", "C. Bay hơi.", "D. Sự sôi."],
            correctAnswer: "C"
        },
        {
            id: 915, type: "multiple_choice",
            content: "Phát biểu nào sau đây nói về nội năng là không đúng?",
            options: [
                "A. Nội năng là một dạng năng lượng.",
                "B. Nội năng của một vật có thể tăng lên hoặc giảm đi.",
                "C. Nội năng là nhiệt lượng.",
                "D. Nội năng có thể chuyển hóa thành các dạng năng lượng khác."
            ],
            correctAnswer: "C"
        },
        {
            id: 916, type: "multiple_choice",
            content: "Để diệt trừ các bào tử nấm và kích thích quá trình nảy mầm của hạt giống lúa, người nông dân đã sử dụng một kinh nghiệm dân gian là ngâm chúng vào trong nước ấm theo công thức \"hai sôi, ba lạnh\". Tức là nước ấm ở nhiệt độ $t^\\circ\\text{C}$ sẽ được tạo ra bằng cách pha hai phần nước sôi ($100^\\circ\\text{C}$) với ba phần nước lạnh ($t_0^\\circ\\text{C}$). Chọn biểu thức đúng.",
            options: [
                "A. $t = \\frac{200 + 2t_0}{5}$.",
                "B. $t = \\frac{200 + 3t_0}{5}$.",
                "C. $t = \\frac{300 + 2t_0}{5}$.",
                "D. $t = \\frac{100 + 3t_0}{5}$."
            ],
            correctAnswer: "B"
        },
        {
            id: 917, type: "multiple_choice",
            content: "Dùng một ca nước ở thùng chứa nước A có nhiệt độ $t_A = 20^\\circ\\text{C}$ và ở thùng chứa nước B ở nhiệt độ $t_B = 80^\\circ\\text{C}$ rồi đổ vào thùng nước C. Biết rằng trước khi đổ, trong thùng chứa nước C đã có sẵn một lượng nước ở nhiệt độ $t_C = 40^\\circ\\text{C}$ và bằng tổng số ca nước vừa mới đổ thêm vào nó. Bỏ qua sự trao đổi nhiệt với môi trường, với bình chứa và ca múc nước. Để có nhiệt độ nước ở thùng C là $50^\\circ\\text{C}$ thì số ca nước phải múc ở mỗi thùng A và B lần lượt là:",
            options: ["A. $n$ ca và $2n$ ca.", "B. $3n$ ca và $2n$ ca.", "C. $2n$ ca và $n$ ca.", "D. $n$ ca và $3n$ ca."],
            correctAnswer: "A"
        },
        {
            id: 918, type: "multiple_choice",
            content: "Nhiệt hóa hơi riêng có đơn vị đo là",
            options: ["A. J/kg.độ", "B. J", "C. J/kg.K", "D. J/kg"],
            correctAnswer: "D"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 919, type: "true_false",
            content: "Tại điểm ba của nước:",
            propositions: [
                "Nước tinh khiết tồn tại đồng thời ở cả ba thể: rắn, lỏng, khí.",
                "Nhiệt độ của hệ khảo sát được chọn làm mốc trên thang đo Kelvin và có giá trị là $273,16\\text{ K}$.",
                "Hệ khảo sát có áp suất $1\\text{ atm}$.",
                "Hệ khảo sát có nhiệt độ theo thang Celsius là $0,01^\\circ\\text{C}$."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'false', 3: 'true' }
        },
        {
            id: 920, type: "true_false",
            content: "Có hai chai nước lạnh A và B hoàn toàn giống nhau. Cho chai nước A vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu giảm xuống. Lấy chai nước A ra ngoài và cho chai nước B vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu tiếp tục giảm xuống, lấy chai B ra khỏi chậu nước. Xem như chỉ có sự trao đổi nhiệt giữa chai nước A, B và nước trong chậu.",
            propositions: [
                "Độ giảm nhiệt độ của chậu nước trong lần nhúng chai nước A nhiều hơn lần nhúng chai nước B.",
                "Sau khi lấy các chai nước ra khỏi chậu thì nhiệt độ của chai nước A cao hơn nhiệt độ của chai nước B.",
                "Tổng độ tăng nhiệt độ của 2 chai nước bằng tổng độ giảm nhiệt độ của nước trong chậu ở 2 lần nhúng.",
                "Nhiệt lượng của chậu nước truyền cho hai chai nước là như nhau."
            ],
            correctAnswer: { 0: 'true', 1: 'true', 2: 'false', 3: 'false' }
        },
        {
            id: 921, type: "true_false",
            content: "Giả sử một học sinh tạo ra một nhiệt kế sử dụng một thang nhiệt độ mới cho riêng mình, gọi là thang nhiệt độ Z, có đơn vị là $^\\circ\\text{Z}$. Trong đó, nhiệt độ của nước đá đang tan ở $1\\text{ atm}$ là $x^\\circ\\text{Z}$, nhiệt độ nước sôi ở $1\\text{ atm}$ là $y^\\circ\\text{Z}$. Từ vạch $x^\\circ\\text{Z}$ đến vạch $y^\\circ\\text{Z}$ được chia thành 180 khoảng, mỗi khoảng ứng với $1^\\circ\\text{Z}$.",
            propositions: [
                "Nếu nhiệt độ cơ thể người là $37^\\circ\\text{C}$ tương ứng với $86,6^\\circ\\text{Z}$ thì giá trị của $x$ là 20.",
                "Độ biến thiên nhiệt độ $18^\\circ\\text{C}$ trong thang nhiệt độ Celsius bằng với độ biến thiên nhiệt độ $10^\\circ\\text{Z}$ trong thang nhiệt độ Z.",
                "Mối liên hệ giữa $x$ và $y$ là: $y = x + 180$.",
                "Một độ chia trên thang nhiệt độ Z bằng 1,8 lần độ chia trên thang nhiệt độ Celsius."
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'true', 3: 'false' }
        },
        {
            id: 922, type: "true_false",
            content: "Khi nung nóng một khối khí chứa trong một xilanh có pit-tông đóng kín làm cho nhiệt độ của khối khí tăng. Pit-tông này có thể dịch chuyển không ma sát trong xilanh.<br><img src='https://i.postimg.cc/Y0XCmSw9/4ds.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'>",
            propositions: [
                "Nhiệt độ của khối khí trong xilanh thay đổi do quá trình truyền nhiệt.",
                "Khi nhận nhiệt, động năng của các phân tử là không đổi.",
                "Khi cho pit-tông chuyển động tự do để khối khí dãn nở với áp suất không đổi. Lúc này khối khí đã sinh công.",
                "Khi giữ pit-tông để thể tích khí không đổi thì toàn bộ nhiệt lượng khối khí nhận được dùng để tăng nội năng của khí (khối khí không tỏa nhiệt)."
            ],
            correctAnswer: { 0: 'true', 1: 'false', 2: 'true', 3: 'true' }
        },

        // --- PHẦN III: CÂU TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 923, type: "fill_blank",
            content: "Một vật có khối lượng $2\\text{ kg}$ trượt không vận tốc đầu từ đỉnh xuống chân một mặt nghiêng dài $40\\text{ m}$, nghiêng một góc $60^\\circ$ so với phương ngang. Tốc độ của vật ở chân mặt phẳng nghiêng là $4,5\\text{ m/s}$. Cho rằng, $75\\%$ công của lực ma sát giữa mặt phẳng nghiêng và vật chuyển thành nội năng của vật, bỏ qua phần nhiệt lượng mặt phẳng nghiêng truyền cho vật. Lấy $g = 9,8\\text{ m/s}^2$. Độ biến thiên nội năng của vật trong quá trình trên là bao nhiêu kilôjun (kJ)? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm).",
            correctAnswer: "0.49"
        },
        {
            id: 924, type: "fill_blank",
            content: "Trong một hệ đun nước bằng năng lượng Mặt Trời, bức xạ Mặt Trời đi vào trong phần góp qua các lớp phủ trong suốt làm nóng nước trong ống. Giả thiết rằng hiệu suất của toàn bộ hệ là $20\\%$ (nghĩa là $80\\%$ năng lượng Mặt Trời bị mất khỏi hệ). Hỏi diện tích của phần góp là bao nhiêu mét vuông khi cần nâng nhiệt độ của $200\\text{ lít}$ nước trong bình chứa từ $20^\\circ\\text{C}$ đến $40^\\circ\\text{C}$ trong 1 giờ? (Kết quả lấy đến một chữ số thập phân, dùng dấu chấm). Biết khối lượng riêng của nước là $1000\\text{ kg/m}^3$; nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$; cường độ ánh sáng Mặt Trời tới là $700\\text{ W/m}^2$.<br><img src='https://i.postimg.cc/8CDgNVqL/c2-tln.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'>",
            correctAnswer: "33.3"
        },
        {
            id: 925, type: "fill_blank",
            content: "Trong một bình nhiệt lượng kế có chứa $200\\text{ ml}$ nước ở nhiệt độ ban đầu $t_0 = 10^\\circ\\text{C}$. Người ta đổ một cốc $50\\text{ ml}$ nước ở nhiệt độ $60^\\circ\\text{C}$ vào bình rồi sau khi cân bằng nhiệt lại múc ra khỏi bình $50\\text{ ml}$ nước. Bỏ qua sự trao đổi nhiệt với các bình và môi trường. Hỏi sau tối thiểu bao nhiêu lượt thì nhiệt độ của nước trong bình sẽ lớn hơn $40^\\circ\\text{C}$? (Một lượt đổ gồm một lần múc nước vào và một lần múc nước ra).",
            correctAnswer: "5"
        },
        {
            id: 926, type: "fill_blank",
            content: "Biết nhiệt dung riêng của nước đá là $2100\\text{ J/kg.K}$, nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Để tìm nhiệt nóng chảy riêng của nước đá, người ta dùng một bếp điện để đun một hệ gồm một bình bằng đồng đựng một lượng nước đá với nhiệt độ ban đầu của hệ là $-5^\\circ\\text{C}$. Dùng nhiệt kế đo nhiệt độ của hệ, thu được bảng sau:<br><img src='https://i.postimg.cc/7hJWSBFb/4-tln.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Biết rằng từ thời điểm 0 đến $60\\text{ s}$ và $1340\\text{ s}$ đến $1540\\text{ s}$, số chỉ của nhiệt kế tăng liên tục. Coi như nhiệt lượng mà hệ nhận được tỉ lệ với thời gian đun. Nhiệt nóng chảy riêng của nước đá đo được trong thí nghiệm này là $a \\cdot 10^5\\text{ J/kg}$. Giá trị của $a$ bằng bao nhiêu? (Dùng dấu chấm thập phân)",
            correctAnswer: "3.36"
        },
        {
            id: 927, type: "fill_blank",
            content: "Sự biến thiên nhiệt độ của khối nước đá đựng trong ca nhôm theo nhiệt lượng cung cấp được cho trên đồ thị. Cho nhiệt dung riêng của nước và nhôm lần lượt là $c_1 = 4200\\text{ J/kg.K}$; $c_2 = 880\\text{ J/kg.K}$, nhiệt nóng chảy riêng của nước đá là $\\lambda = 3,4 \\cdot 10^5\\text{ J/kg}$. Khối lượng của ca nhôm bằng bao nhiêu gam? (Kết quả làm tròn đến hàng đơn vị).<br><img src='https://i.postimg.cc/RhfzvVVP/5-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
            correctAnswer: "455"
        },
        {
            id: 928, type: "fill_blank",
            content: "Hiện nay, người ta có thể dùng các vỉ đá được làm nóng sẵn trong lò để nướng thức ăn. Giả sử, một vỉ đá có khối lượng $1,2\\text{ kg}$; nhiệt độ ban đầu là $28^\\circ\\text{C}$ được làm nóng trong lò có công suất $20\\text{ kW}$. Coi như toàn bộ năng lượng của lò cung cấp sẽ dùng để làm nóng vỉ đá. Biết rằng, để làm cho $1\\text{ kg}$ đá làm vỉ này tăng thêm $1^\\circ\\text{C}$ thì cần nhiệt lượng $5500\\text{ J}$. Để vỉ đá đạt được nhiệt độ $1000^\\circ\\text{C}$ thì cần thời gian bao nhiêu phút? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm).",
            correctAnswer: "5.35"
        }
    ],

    // ========================================================================
    // ĐỀ THPT MÔN HÓA HỌC: GIỮA HK1 - ĐỀ 2 (28 CÂU)
    // ========================================================================
    "thpt_hoa_02": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 801, type: "multiple_choice",
            content: "Chất thuộc loại carbohydrate là:",
            options: ["A. polyethylene.", "B. glycerol.", "C. alanine.", "D. cellulose."],
            correctAnswer: "D"
        },
        {
            id: 802, type: "multiple_choice",
            content: "Ester tạo bởi acid acetic và glycerol có công thức cấu tạo là:",
            options: ["A. $(C_3H_5COO)_3C_3H_5$.", "B. $C_3H_5OOCCH_3$.", "C. $(CH_3COO)_3C_3H_5$.", "D. $(CH_3COO)_2C_2H_4$."],
            correctAnswer: "C"
        },
        {
            id: 803, type: "multiple_choice",
            content: "Công thức cấu tạo dạng mạch vòng $\\beta$-fructose là:",
            options: [
                "A. <img src='https://i.postimg.cc/fbzDPyVh/3a.png' class='h-20 inline-block'>",
                "B. <img src='https://i.postimg.cc/BvTNjZpD/3b.png' class='h-20 inline-block'>",
                "C. <img src='https://i.postimg.cc/C1JN4vWn/3c.png' class='h-20 inline-block'>",
                "D. <img src='https://i.postimg.cc/wxf2yGXG/3d.png' class='h-20 inline-block'>"
            ],
            correctAnswer: "D"
        },
