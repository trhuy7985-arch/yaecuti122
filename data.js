// --- CẤU TRÚC LƯU NHIỀU ĐỀ THI (ĐÃ SỬA LỖI & ĐỒNG BỘ) ---
const examsMeta = [
    // --- Nhóm TSA - Tổng hợp ---
    { id: "tsa_01", type: "TSA", category: "comprehensive", title: "NTT DETHW - VIP", questionsCount: 3, time: 150, img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", isVip: true },
    { id: "tsa_02", type: "TSA", category: "comprehensive", title: "Đề thi thử HUST 2026 - Lần 1", questionsCount: 1, time: 60, img: "https://i.postimg.cc/tg7k50hw/ID.png", isVip: false },
    
    // --- Nhóm TSA - Tư duy Toán học ---
    { id: "tsa_toan_01", type: "TSA", category: "math", title: "Đề thi Đánh giá Tư duy - TSA26A (Môn Toán)", questionsCount: 40, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    
    // --- Nhóm HSA - Định tính (Ngữ văn) ---
    { id: "hsa_van_01", type: "HSA", category: "language", title: "Đề ĐGNL HSA Số 01 - Định tính (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    
    // --- Nhóm HSA - Định lượng (Toán) ---
    { id: "hsa_toan_01", type: "HSA", category: "math", title: "Đề ĐGNL HSA Số 01 - Định lượng (VLCM)", questionsCount: 50, time: 75, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    
    // --- Nhóm HSA - Khoa học ---
    { id: "hsa_khoahoc_01", type: "HSA", category: "science", title: "Đề ĐGNL HSA Số 01 - Khoa học (VLCM)", questionsCount: 50, time: 60, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: true },
    
    // --- Nhóm THPT ---
    { id: "thpt_01", type: "THPT", subject: "math", title: "Đề ôn tập Toán THPT - Đề ngắn", questionsCount: 2, time: 15, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_toan_01", type: "THPT", subject: "math", title: "Đề thi thử Toán 2025 (Chuẩn cấu trúc)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_toan_02", type: "THPT", subject: "math", title: "Đề thi Tốt nghiệp THPT 2026 môn Toán (Mã đề 0101)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/Qd7xWCzY/ID-3.png", isVip: false },
    { id: "thpt_toan_03", type: "THPT", subject: "math", title: "Đề thi môn toán giữa kì 1 VIP(VLCM)", questionsCount: 22, time: 90, img: "https://i.postimg.cc/Qd7xWCzY/ID-3.png", isVip: false },
    { id: "thpt_hoa_02", type: "THPT", subject: "chemistry", title: "Đề kiểm tra Giữa HK1 Hóa Học 12", questionsCount: 28, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },
    { id: "thpt_hoa_03", type: "THPT", subject: "chemistry", title: "Đề kiểm tra Giữa HK1 Hóa Học 12 (VLCM)", questionsCount: 28, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },
    { id: "thpt_hoa_04", type: "THPT", subject: "chemistry", title: "Bài tập Amine Hóa Học 12 (VLCM)", questionsCount: 25, time: 45, img: "https://i.postimg.cc/y8x0qmW2/ID-2.png", isVip: false },
    { id: "thpt_ly_03", type: "THPT", subject: "physics", title: "Đề ôn tập Giữa HK1 Vật Lí 12 - Đề số 3", questionsCount: 28, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_04", type: "THPT", subject: "physics", title: "Bài tập cấu trúc và sự chuyển thể", questionsCount: 36, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_05", type: "THPT", subject: "physics", title: "Bài tập Định luật 1 - Nhiệt động lực học", questionsCount: 26, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_ly_06", type: "THPT", subject: "physics", title: "Bài tập nhiệt độ thang đo nhiệt độ", questionsCount: 26, time: 50, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false },
    { id: "thpt_sinh_03", type: "THPT", subject: "biology", title: "Đề kiểm tra giữa kì 1 Sinh Học 12 - THPT Ngô Gia Tự", questionsCount: 24, time: 45, img: "https://i.postimg.cc/FFbmqQ9X/A-nh-chu-p-ma-n-hi-nh-2026-10-14-004011.png", isVip: false }
];

// --- DỮ LIỆU CÂU HỎI CHI TIẾT TỪNG ĐỀ ---
const allExamsData = {
    "thpt_hoa_02": [
        // --- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 801, type: "multiple_choice",
            content: "Chất thuộc loại carbohydrate là: <!--[cite: 80] -->",
            options: ["A. polyethylene.", "B. glycerol.", "C. alanine.", "D. cellulose."],
            correctAnswer: "D"
        },
        {
            id: 802, type: "multiple_choice",
            content: "Ester tạo bởi acid acetic và glycerol có công thức cấu tạo là: <!--[cite: 80] -->",
            options: ["A. $(C_3H_5COO)_3C_3H_5$.", "B. $C_3H_5OOCCH_3$.", "C. $(CH_3COO)_3C_3H_5$.", "D. $(CH_3COO)_2C_2H_4$."],
            correctAnswer: "C"
        },
        {
            id: 803, type: "multiple_choice",
            content: "Công thức cấu tạo dạng mạch vòng $\\beta$-fructose là: <!--[cite: 80] -->",
            options: [
                "A. <img src='https://i.postimg.cc/fbzDPyVh/3a.png' class='h-20 inline-block'>",
                "B. <img src='https://i.postimg.cc/BvTNjZpD/3b.png' class='h-20 inline-block'>",
                "C. <img src='https://i.postimg.cc/C1JN4vWn/3c.png' class='h-20 inline-block'>",
                "D. <img src='https://i.postimg.cc/wxf2yGXG/3d.png' class='h-20 inline-block'>"
            ],
            correctAnswer: "D"
        },
        {
            id: 804, type: "multiple_choice",
            content: "Hình ảnh Jack Sparrow với bình rượu và câu nói cửa miệng: “Rum is gone!” trong bộ phim “Cướp biển vùng Caribbean” khiến nhiều người nhớ đến Rum, loại rượu gắn với những tên cướp biển, được lên men từ nước cây mía. Trong nước mía có carbohydrate là: <!--[cite: 80] -->",
            options: ["A. Saccharose.", "B. Glucose.", "C. Fructose.", "D. Lactose."],
            correctAnswer: "A"
        },
        {
            id: 805, type: "multiple_choice",
            content: "Chất phản ứng được với các dung dịch: $NaOH, HCl$ là <!--[cite: 80] -->",
            options: ["A. $C_2H_6$.", "B. $H_2N-CH_2-COOH$.", "C. $CH_3COOH$.", "D. $C_2H_5OH$."],
            correctAnswer: "B"
        },
        {
            id: 806, type: "multiple_choice",
            content: "Số đồng phân ester ứng với công thức phân tử $C_4H_8O_2$ là <!--[cite: 80] -->",
            options: ["A. 6.", "B. 5.", "C. 2.", "D. 4."],
            correctAnswer: "D"
        },
        {
            id: 807, type: "multiple_choice",
            content: "Nicotine làm tăng huyết áp và nhịp tim, có khả năng gây xơ vữa động mạch vành và suy giảm trí nhớ. Trong cây thuốc lá và khói thuốc lá chứa một amine rất độc, đó là nicotine với công thức cấu tạo như sau:<br><img src='https://i.postimg.cc/vm3BGjkd/nc.png' class='mt-4 mb-4 max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Công thức phân tử nicotine là <!--[cite: 80] -->",
            options: ["A. $C_{10}H_{14}N_2$.", "B. $C_{10}H_{12}N_2$.", "C. $C_{11}H_{12}N_2$.", "D. $C_{11}H_{16}N_2$."],
            correctAnswer: "A"
        },
        {
            id: 808, type: "multiple_choice",
            content: "DHA là loại omega-3 phổ biến, có nhiều công dụng đặc biệt là đối với sự phát triển của trẻ em. DHA có công thức khung phân tử như sau:<br><img src='https://i.postimg.cc/qM95gvnm/A-nh-chu-p-ma-n-hi-nh-2026-10-14-125914.png' class='mt-4 mb-4 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Trong công thức cấu tạo của DHA có bao nhiêu nguyên tử carbon? <!--[cite: 80] -->",
            options: ["A. 22.", "B. 23.", "C. 24.", "D. 25."],
            correctAnswer: "A"
        },
        {
            id: 809, type: "multiple_choice",
            content: "Trong phân tử cellulose các mắt xích liên kết với nhau bằng liên kết nào? <!--[cite: 80] -->",
            options: ["A. $\\alpha$-1,4-glucoside.", "B. $\\alpha$-1,4-glycoside.", "C. $\\beta$-1,4-glucoside.", "D. $\\beta$-1,4-glycoside."],
            correctAnswer: "D"
        },
        {
            id: 810, type: "multiple_choice",
            content: "Xà phòng được điều chế bằng cách nào trong các cách sau: <!--[cite: 80] -->",
            options: ["A. Thủy phân saccharose.", "B. Thủy phân mỡ trong kiềm.", "C. Phản ứng của acid với kim loại.", "D. Dehydrogen hóa mỡ tự nhiên."],
            correctAnswer: "B"
        },
        {
            id: 811, type: "multiple_choice",
            content: "Cho các phát biểu sau:<br>(1) Glucose và fructose không tham gia phản ứng thủy phân.<br>(2) Có thể phân biệt glucose và fructose bằng nước bromine.<br>(3) Carbohydrate là những hợp chất hữu cơ tạp chức, thường có công thức chung là $C_n(H_2O)_m$.<br>(4) Chất béo không phải là carbohydrate.<br>Số phát biểu đúng là <!--[cite: 80] -->",
            options: ["A. 1.", "B. 2.", "C. 3.", "D. 4."],
            correctAnswer: "D"
        },
        {
            id: 812, type: "multiple_choice",
            content: "Công thức hóa học nào sau đây là của nước Schweizer, dùng để hòa tan cellulose trong quá trình sản xuất tơ nhân tạo? <!--[cite: 80] -->",
            options: ["A. $[Cu(NH_3)_4](OH)_2$.", "B. $[Zn(NH_3)_4](OH)_2$.", "C. $[Cu(NH_3)_4]OH$.", "D. $[Ag(NH_3)_4]OH$."],
            correctAnswer: "A"
        },
        {
            id: 813, type: "multiple_choice",
            content: "Ester nào sau đây khi phản ứng với dung dịch NaOH dư, đun nóng không tạo ra hai muối? <!--[cite: 80] -->",
            options: [
                "A. $C_6H_5COOC_6H_5$.",
                "B. $CH_3COOC_6H_5$.",
                "C. $CH_3COO-[CH_2]_2-OOCCH_2CH_3$.",
                "D. $CH_3OOC-COOCH_3$."
            ],
            correctAnswer: "D"
        },
        {
            id: 814, type: "multiple_choice",
            content: "Mùi của ester nào sau đây là đúng? <!--[cite: 80] -->",
            options: [
                "A. Methyl salicylate có mùi dầu gió.",
                "B. Benzyl acetate có mùi thơm dâu tây.",
                "C. Isoamyl acetate có mùi táo.",
                "D. Methyl butanoate có mùi chuối chín."
            ],
            correctAnswer: "A"
        },
        {
            id: 815, type: "multiple_choice",
            content: "Phát biểu nào dưới đây không đúng khi nói về protein? <!--[cite: 80] -->",
            options: [
                "A. Protein là những hợp chất cao phân tử.",
                "B. Protein phức tạp là những protein tạo thành từ protein đơn giản và lipid.",
                "C. Protein đơn giản là những protein tạo thành từ các gốc $\\beta$-amino acid.",
                "D. Protein có vai trò là nền tảng về cấu trúc và chức năng của mọi sự sống."
            ],
            correctAnswer: "C"
        },
        {
            id: 816, type: "multiple_choice",
            content: "Ở nhiệt độ thường, nhỏ vài giọt dung dịch iodine vào lát cắt củ khoai lang thấy <!--[cite: 80] -->",
            options: ["A. màu xanh rêu.", "B. màu xanh tím.", "C. màu nâu đỏ.", "D. màu hồng."],
            correctAnswer: "B"
        },
        {
            id: 817, type: "multiple_choice",
            content: "Công thức chung của amine no, đơn chức, mạch hở là <!--[cite: 80] -->",
            options: ["A. $C_nH_{2n+3}N$.", "B. $C_nH_{2n+1}N$.", "C. $C_nH_{2n-1}NH_2$.", "D. $C_nH_{2n+2}NH_2$."],
            correctAnswer: "A"
        },
        {
            id: 818, type: "multiple_choice",
            content: "Cho phổ IR của ba chất hữu cơ ngẫu nhiên trong các chất sau: $HOCH_2CH_2OH$ (1); $CH_3CH_2CHO$ (2); $CH_3COOCH_3$ (3).<br><img src='https://i.postimg.cc/WpHmbJjv/18.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Ghép cặp nào sau đây là đúng? <!--[cite: 80] -->",
            options: ["A. 1-a, 2-b, 3-c.", "B. 1-b, 2-c, 3-a.", "C. 1-b, 2-a, 3-c.", "D. 1-c, 2-a, 3-b."],
            correctAnswer: "A"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 819, type: "true_false",
            content: "Protein là hợp chất cao phân tử được hình thành từ một hay nhiều chuỗi polypeptide. Protein có thể được phân loại thành protein đơn giản và protein phức tạp. Các phát biểu sau đúng hay sai? <!--[cite: 80] -->",
            propositions: [
                "Insulin, albumin (có nhiều trong lòng trắng trứng) thuộc loại protein đơn giản. <!--[cite: 80] -->",
                "Fibroin (có trong tơ tằm) thuộc loại protein phức tạp. <!--[cite: 80] -->",
                "Các nguyên tố tạo nên protein đơn giản là C, H, O và N. <!--[cite: 80] -->",
                "Nucleic acid, lipid thuộc loại protein phức tạp. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },
        {
            id: 820, type: "true_false",
            content: "Ethyl propionate là một ester có mùi thơm của dứa chín. Các phát biểu sau đúng hay sai? <!--[cite: 80] -->",
            propositions: [
                "Công thức phân tử của ethyl propionate là $CH_3COOC_2H_5$. <!--[cite: 80] -->",
                "Ở điều kiện thường, ethyl propionate là chất khí. <!--[cite: 80] -->",
                "Phản ứng thủy phân ethyl propionate trong môi trường acid là phản ứng thuận nghịch. <!--[cite: 80] -->",
                "Ethyl propionate được điều chế từ propanoic acid và ethyl alcohol. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'false', 1: 'false', 2: 'true', 3: 'true'}
        },
        {
            id: 821, type: "true_false",
            content: "Glucose và fructose là hai hợp chất có sự quan trọng đáng kể trong lĩnh vực y tế và công nghiệp thực phẩm. <!--[cite: 80] -->",
            propositions: [
                "Trong y học, glucose được dùng làm thuốc tăng lực. <!--[cite: 80] -->",
                "Trong công nghiệp thực phẩm, fructose dùng để sản xuất siro, kẹo mứt, nước trái cây. <!--[cite: 80] -->",
                "Glucose được sử dụng trong sản xuất bánh kẹo, ethyl alcohol. <!--[cite: 80] -->",
                "Glucose là nguyên liệu để tráng gương, tráng ruột phích. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'false'}
        },
        {
            id: 822, type: "true_false",
            content: "Trong tự nhiên, carbohydrate có vai trò không thể thay thế trong việc cấu thành các cấu trúc sinh vật. Khi nói về cấu trúc và tính chất của một số carbohydrate: <!--[cite: 80] -->",
            propositions: [
                "Phân biệt glucose và saccharose bằng phản ứng tráng gương. <!--[cite: 80] -->",
                "Phân biệt saccharose và glycerol bằng $Cu(OH)_2$. <!--[cite: 80] -->",
                "Phân biệt tinh bột và cellulose bằng $I_2$. <!--[cite: 80] -->",
                "Phân biệt glucose và fructose bằng dung dịch $Br_2$. <!--[cite: 80] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },

        // --- PHẦN III: CÂU TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 823, type: "fill_blank",
            content: "Cho dãy các dung dịch: glucose, saccharose, ethanol, glycerol, aldehyde acetic, ethylen glycol, ethyl formate. Số dung dịch trong dãy phản ứng được với $Cu(OH)_2$ ở nhiệt độ thường tạo thành dung dịch có màu xanh lam là bao nhiêu? <!--[cite: 80] -->",
            correctAnswer: "4"
        },
        {
            id: 824, type: "fill_blank",
            content: "Lactose chủ yếu được tìm thấy trong sữa và các sản phẩm từ sữa. Trong phân tử lactose, có một nhóm -OH hemiacetal. Dựa trên hình vẽ dưới đây, hãy cho biết nhóm -OH hemiacetal của lactose là nhóm nằm ở vị trí số mấy?<br><img src='https://i.postimg.cc/CK7kyRJm/2-tln.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 80] -->",
            correctAnswer: "7"
        },
        {
            id: 825, type: "fill_blank",
            content: "Geranyl acetate được tìm thấy trong hoa hồng và geranium. Khi phân tích thành phần khối lượng nguyên tố thì cho kết quả như sau: %C = 73,47%, %O = 16,33%, còn lại là hydrogen. Phổ khối lượng (MS) xác định phân tử khối của hợp chất này là 196.<br><img src='https://i.postimg.cc/DyGGvjB7/3-tln.png' class='mt-4 mb-4 w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Trong phân tử geranyl acetate có bao nhiêu nguyên tử hydrogen? <!--[cite: 80] -->",
            correctAnswer: "20"
        },
        {
            id: 826, type: "fill_blank",
            content: "Tiến hành thí nghiệm thử tính chất của cellulose theo các bước sau:<br>- Bước 1: Cho lần lượt 4 mL $HNO_3$, 8 mL $H_2SO_4$ đặc vào cốc thủy tinh, lắc đều và làm lạnh.<br>- Bước 2: Thêm tiếp vào cốc một nhúm bông. Đặt cốc chứa hỗn hợp phản ứng vào nồi nước nóng (khoảng 60-70°C) khuấy nhẹ trong 5 phút.<br>- Bước 3: Lọc lấy chất rắn rửa sạch bằng nước, ép khô bằng giấy lọc sau đó sấy khô.<br>Cho các nhận định sau:<br>(1) Sau bước 3, sản phẩm thu được có màu vàng.<br>(2) Có thể thay thế nhúm bông bằng tinh bột.<br>(3) Sau bước 3, sản phẩm thu được là cellulose nitrate có tính dễ cháy.<br>(4) Thí nghiệm trên chứng minh trong phân tử cellulose có 3 nhóm OH tự do.<br>(5) Sau bước 3, lấy sản phẩm thu được đốt cháy thấy có khói trắng xuất hiện.<br>(6) Phản ứng xảy ra giữa cellulose và hỗn hợp acid tạo ra sản phẩm dễ tan trong acetone.<br>(7) Nước lạnh được sử dụng để rửa sản phẩm nhằm loại bỏ acid còn sót lại.<br>(8) Sau bước 3, sản phẩm thu được có thể được sử dụng làm màng phim.<br>Có bao nhiêu nhận định ĐÚNG? <!--[cite: 80] -->",
            correctAnswer: "5"
        },
        {
            id: 827, type: "fill_blank",
            content: "Cho dung dịch methylamine đến dư vào 5 ống nghiệm chứa lần lượt các dung dịch sau: $HCl, FeCl_3, CuSO_4, MgCl_2, CH_3COOH$. Sau phản ứng có bao nhiêu ống nghiệm thu được kết tủa? <!--[cite: 80] -->",
            correctAnswer: "2"
        },
        {
            id: 828, type: "fill_blank",
            content: "Thủy phân hoàn toàn 8,8 gam ester đơn chức, mạch hở X với 100 mL dung dịch NaOH 1M (vừa đủ) thu được 8,2 gam muối hữu cơ Y và một alcohol Z. Số nguyên tử hydrogen có trong X là bao nhiêu? <!--[cite: 80] -->",
            correctAnswer: "8"
        }
    ],
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
        { id: 701, type: "multiple_choice", content: "Phần nguyên của số thực $x$ là số nguyên lớn nhất không vượt quá $x$, kí hiệu là $[x]$. Biết số $x=\\sqrt{2+\\sqrt{2+\\sqrt{2+\\sqrt{2+...}}}}$ với vô hạn dấu căn. Giá trị của $[x]$ bằng bao nhiêu? <!--[cite: 25] -->", options: ["A. 1", "B. 2", "C. 0", "D. -1"], correctAnswer: "A" },
        { id: 702, type: "fill_blank", content: "Cho hàm số $y=\\frac{x+\\sqrt{x}}{\\sqrt{x^2-1}}$.<br>- Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số bằng [1].<br>- Khoảng cách từ $A(2;3)$ đến tiệm cận đứng của đồ thị hàm số bằng [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \". Ví dụ: 3; 4)</i> <!--[cite: 26] -->", correctAnswer: "2; 1" },
        { id: 703, type: "multiple_choice", content: "Cho đa giác lồi $n$ đỉnh ($n > 3$). Số tam giác có 3 đỉnh là 3 đỉnh của đa giác đã cho là: <!--[cite: 27] -->", options: ["A. $A_n^3$", "B. $C_n^3$", "C. $\\frac{C_n^3}{3!}$", "D. $n!$"], correctAnswer: "B" },
        { id: 704, type: "true_false", content: "Cho hàm số $f(x)=x^3-\\frac{1}{2}x^2-4x$. Mỗi phát biểu sau đây là đúng hay sai? <!--[cite: 28] -->", propositions: ["Đạo hàm của hàm số $y=f(x)$ tại $x=4$ là $f'(4)=3$.", "Nghiệm của bất phương trình $f'(x)<0$ là $T=(1; \\frac{4}{3})$."], correctAnswer: {0: 'false', 1: 'false'} },
        { id: 705, type: "fill_blank", content: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2+y^2+z^2-2x+4y-4z-27=0$. Bán kính $R$ của mặt cầu $(S)$ bằng bao nhiêu? <!--[cite: 29] -->", correctAnswer: "6" },
        { id: 706, type: "fill_blank", content: "Cho dãy số $(u_n)$ là một cấp số cộng có $u_1=3$ và công sai $d=4$.<br>- Tổng của [1] số hạng đầu của dãy số là $S_n=253$.<br>- Số hạng thứ 10 của dãy số là $u_{10}=$ [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i> <!--[cite: 30] -->", correctAnswer: "11; 39" },
        { id: 707, type: "multiple_choice", content: "Trong không gian $Oxyz$, cho hai điểm là $A(1;3;-1), B(3;-1;5)$. Tọa độ của điểm $M$ thỏa mãn hệ thức $\\overrightarrow{MA} = 3\\overrightarrow{MB}$ bằng: <!--[cite: 31] -->", options: ["A. $M(\\frac{5}{3};\\frac{13}{3};1)$", "B. $M(\\frac{7}{3};\\frac{1}{3};3)$", "C. $M(\\frac{7}{3};\\frac{1}{3};-3)$", "D. $M(4;-3;8)$"], correctAnswer: "D" },
        { id: 708, type: "true_false", content: "Một lớp có 40 học sinh, có 18 học sinh tham gia bóng đá, 10 học sinh tham gia bóng chuyền, trong đó 6 học sinh tham gia cả hai môn. Chọn ngẫu nhiên một học sinh. Gọi $A$ là biến cố \"Chọn được học sinh tham gia bóng đá\", $B$ là biến cố \"Chọn được học sinh tham gia bóng chuyền\". Các phát biểu sau đúng hay sai? <!--[cite: 32] -->", propositions: ["$P(A) = \\frac{9}{20}$.", "$P(AB) = \\frac{7}{20}$.", "Xác suất để học sinh được chọn có tham gia ít nhất một môn thể thao bằng $\\frac{19}{20}$."], correctAnswer: {0: 'true', 1: 'false', 2: 'false'} },
        { id: 709, type: "fill_blank", content: "Có bao nhiêu cặp số nguyên $(x;y)$ thỏa mãn phương trình: $x^2+5y^2+4xy+2x+4y-3=0$? <!--[cite: 33] -->", correctAnswer: "4" },
        { id: 710, type: "fill_blank", content: "Cho phương trình $\\log_4(x+1)^2+2 = \\log_{\\sqrt{2}}\\sqrt{4-x} + \\log_8(4+x)^3$.<br>- Số nghiệm của phương trình đã cho là [1].<br>- Tổng của các nghiệm của phương trình đã cho là [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i> <!--[cite: 34] -->", correctAnswer: "2; 4-2\\sqrt{6}" },
        { id: 711, type: "multiple_choice", content: "Phương trình $\\sin(3x+\\frac{\\pi}{3})=-\\frac{\\sqrt{3}}{2}$ có bao nhiêu nghiệm thuộc khoảng $(0; \\frac{\\pi}{2})$? <!--[cite: 35] -->", options: ["A. 3", "B. 4", "C. 1", "D. 2"], correctAnswer: "D" },
        { id: 712, type: "fill_blank", content: "Cho hai hàm số $F(x)=(x^2+ax+b)e^{-x}$ và $f(x)=(-x^2+3x+6)e^{-x}$. Để $F(x)$ là một nguyên hàm của hàm số $f(x)$ thì $a=$ [1] và $b=$ [2].<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i> <!--[cite: 36] -->", correctAnswer: "-1; 7" },
        { id: 713, type: "true_false", content: "Cho hàm số $y=f(x) = \\begin{cases} \\frac{\\sqrt{1-x}-\\sqrt{1+x}}{x} & \\text{khi } x < 0 \\\\ m + \\frac{1-x}{1+x} & \\text{khi } x \\ge 0 \\end{cases}$. Phát biểu sau đúng hay sai? <!--[cite: 37] -->", propositions: ["Hàm số $y=f(x)$ gián đoạn tại $x=0$ khi $m=-1$.", "Hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ khi $m \\neq -2$."], correctAnswer: {0: 'true', 1: 'false'} },
        { id: 714, type: "fill_blank", content: "Trong thời gian liên tục 25 năm, một người luôn gửi đúng 4.000.000 đồng vào một ngày cố định của tháng ở ngân hàng với lãi suất không đổi là 0,6%/tháng. Số tiền người đó có được sau 25 năm là bao nhiêu triệu đồng? (Làm tròn đến chữ số thập phân thứ ba) <!--[cite: 38] -->", correctAnswer: "3364.867" },
        { id: 715, type: "fill_blank", content: "- Ước chung của hai số $n+3$ và $2n+5$ là [1] với mọi $n \\in \\mathbb{N}$.<br>- Có [2] bộ số thỏa mãn hai số có tổng bằng 224 và ước chung lớn nhất bằng 28.<br><i>(Nhập các đáp án theo thứ tự, cách nhau bởi dấu chấm phẩy \"; \")</i> <!--[cite: 39] -->", correctAnswer: "1; 2" },
        { id: 716, type: "multiple_choice", content: "Cho dãy số $(a_n)$ thỏa mãn $a_1=1$ và $a_n=10a_{n-1}-1$, $\\forall n \\ge 2$. Giá trị nhỏ nhất của $n$ để $\\log a_n > 100$ là: <!--[cite: 40] -->", options: ["A. 100", "B. 101", "C. 102", "D. 103"], correctAnswer: "C" },
        { id: 717, type: "fill_blank", content: "Hai người ngang tài tranh chức vô địch cờ tướng. Người thắng là người đầu tiên thắng 5 ván. Tại thời điểm người thứ nhất đã thắng 4 ván và người thứ hai thắng 2 ván, xác suất để người thứ nhất giành chiến thắng là bao nhiêu? (Nhập dưới dạng số thập phân) <!--[cite: 41] -->", correctAnswer: "0.875" },
        { id: 718, type: "multiple_choice", content: "Cho hàm số $y=\\frac{1-m\\sin x}{\\cos x+2}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [0;10]$ để giá trị nhỏ nhất của hàm số nhỏ hơn $-2$? <!--[cite: 42] -->", options: ["A. 1", "B. 9", "C. 3", "D. 6"], correctAnswer: "D" },
        { id: 719, type: "fill_blank", content: "Người ta đo đường kính 61 cây gỗ thu được bảng ghép nhóm: [20;25) có 4 cây, [25;30) có 12 cây, [30;35) có 26 cây, [35;40) có 13 cây, [40;45) có 6 cây. <br>- Tứ phân vị thứ nhất bằng [1].<br>- Tứ phân vị thứ hai bằng [2].<br>- Tứ phân vị thứ ba bằng [3].<br><i>(Làm tròn đến chữ số thập phân thứ hai. Nhập đáp án cách nhau bởi \"; \")</i> <!--[cite: 44] -->", correctAnswer: "29.69; 32.79; 36.44" },
        { id: 720, type: "fill_blank", content: "Cổng trường có hình dạng Parabol, chiều rộng 8m, chiều cao 12,5m. Diện tích của cổng là bao nhiêu $m^2$? <!--[cite: 46] -->", correctAnswer: "200/3" },
        { id: 721, type: "multiple_choice", content: "Cho tam giác $ABC$ có $b=7, c=5, \\cos A = \\frac{3}{5}$. Độ dài đường cao $h_a$ của $\\Delta ABC$ bằng: <!--[cite: 47] -->", options: ["A. $2\\sqrt{2}$", "B. $7\\sqrt{2}$", "C. $4\\sqrt{2}$", "D. $\\frac{7\\sqrt{2}}{2}$"], correctAnswer: "D" },
        { id: 722, type: "fill_blank", content: "Trong hệ $Oxyz$, một máy bay bay theo đường thẳng từ $A(5;0;5)$ đến $B(10;10;3)$ và hạ cánh tại vị trí $M(a;b;0)$ trên mặt phẳng $(Oxy)$. Giá trị của $2a-b$ bằng bao nhiêu? <!--[cite: 48] -->", correctAnswer: "10" },
        { id: 723, type: "fill_blank", content: "Cho hàm số $y=\\frac{2x+1}{x+1}$ có đồ thị $(C)$. Có bao nhiêu tiếp tuyến của đồ thị $(C)$ song song với đường thẳng $\\Delta: y=x+1$? <!--[cite: 49] -->", correctAnswer: "1" },
        { id: 724, type: "true_false", content: "Cho hàm số $y=x^2.e^{-x}$. Mỗi phát biểu sau đây là đúng hay sai? <!--[cite: 50] -->", propositions: ["Hàm số không có giá trị lớn nhất và giá trị nhỏ nhất.", "Hàm số đạt cực đại tại $x=0$ và đạt cực tiểu tại $x=2$.", "Giá trị nhỏ nhất của hàm số bằng 0."], correctAnswer: {0: 'false', 1: 'false', 2: 'true'} },
        { id: 725, type: "multiple_choice", content: "Cho tập $A=\\{1;2;3;...;2024\\}$. Có bao nhiêu cách chọn 5 số từ tập hợp $A$ sao cho các số được chọn lập thành một cấp số nhân tăng có công bội là một số nguyên dương? <!--[cite: 51] -->", options: ["A. 126", "B. 161", "C. 111", "D. 150"], correctAnswer: "B" },
        { id: 726, type: "fill_blank", content: "Cho hàm số bậc hai $y=f(x)$ có đồ thị $(P)$ và đường thẳng $d$ cắt $(P)$ tại $x=1$ (điểm $(1;3)$) và $x=6$ (điểm $(6;8)$). Biết diện tích hình phẳng giới hạn bởi $(P)$ và $d$ là $S=\\frac{125}{9}$.<br><img src='LINK_ANH_CUA_BAN' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>- Phương trình đường thẳng $d$ là: [1].<br>- $\\int_1^6 f'(x)dx$ bằng: [2].<br>- $\\int_1^6 f(x)dx$ bằng: [3].<br><i>(Nhập các đáp án cách nhau bởi \"; \". Ví dụ: y=2x+1; 4; 5/3)</i> <!--[cite: 53] -->", correctAnswer: "y=x+2; 5; 245/18" },
        { id: 727, type: "multiple_choice", content: "Trong không gian $Oxyz$, cho điểm $A(2;-1;-2)$ và đường thẳng $(d): \\frac{x-1}{-1}=\\frac{y-1}{1}=\\frac{z+1}{1}$. Gọi $(P)$ là mặt phẳng đi qua $A$, song song với $(d)$ và khoảng cách từ $(d)$ tới $(P)$ lớn nhất. Mặt phẳng $(P)$ vuông góc với mặt phẳng nào sau đây? <!--[cite: 55] -->", options: ["A. $x-y-6=0$", "B. $x+3y+2z+10=0$", "C. $x-2y-3z-1=0$", "D. $3x+z+2=0$"], correctAnswer: "D" },
        { id: 728, type: "multiple_choice", content: "Cho hình chóp $S.ABCD$ có $ABCD$ là hình chữ nhật tâm $O$, $AB=a, BC=a\\sqrt{3}$. Hình chiếu vuông góc của $S$ lên $(ABCD)$ là trung điểm $AO$. Góc giữa $(SAC)$ và $(SBC)$ là $60^\\circ$. Thể tích khối chóp $S.ABCD$ là: <!--[cite: 56] -->", options: ["A. $\\frac{a^3\\sqrt{3}}{3}$", "B. $\\frac{a^3\\sqrt{3}}{2}$", "C. $\\frac{a^3}{2}$", "D. $\\frac{a^3\\sqrt{6}}{8}$"], correctAnswer: "D" },
        { id: 729, type: "true_false", content: "Cho hàm số $y=x^4-4x^3+(m-2)x^2+8x+4$ có đồ thị $(C)$. Phát biểu sau đây đúng hay sai? <!--[cite: 58] -->", propositions: ["Với $m=2$ thì đồ thị hàm số $(C)$ đã cho cắt trục hoành tại 3 điểm phân biệt.", "Có tất cả 10 giá trị nguyên của $m$ để đồ thị $(C)$ cắt trục hoành tại đúng hai điểm có hoành độ lớn hơn 1."], correctAnswer: {0: 'false', 1: 'false'} },
        { id: 730, type: "multiple_choice", content: "Cho hình lăng trụ đứng $ABC.A'B'C'$. Góc giữa $(A'BC)$ và $(ABC)$ là $30^\\circ$, tam giác $A'BC$ đều và có diện tích bằng $\\sqrt{3}$. Thể tích khối lăng trụ $ABC.A'B'C'$ bằng: <!--[cite: 60] -->", options: ["A. $2\\sqrt{3}$", "B. $6$", "C. $\\frac{3\\sqrt{3}}{4}$", "D. $\\frac{\\sqrt{3}}{4}$"], correctAnswer: "C" },
        { id: 731, type: "fill_blank", content: "Bảng tần số ghép nhóm thống kê thời gian gọi điện (giây): [0;60) có 8 cuộc, [60;120) có 10 cuộc, [120;180) có 7 cuộc, [180;240) có 5 cuộc, [240;300) có 2 cuộc, [300;360) có 1 cuộc. Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu? <!--[cite: 61] -->", correctAnswer: "116.3" },
        { id: 732, type: "fill_blank", content: "Một đống đất được vun thành hình chóp cụt tứ giác đều có cạnh đáy lớn 2m, cạnh đáy nhỏ 1m, chiều cao 2m. Khối lượng đống đất (thể tích) có giá trị gần nhất bằng bao nhiêu $m^3$? (Làm tròn đến 2 chữ số thập phân) <!--[cite: 63] -->", correctAnswer: "4.67" },
        { id: 733, type: "multiple_choice", content: "Gọi $S$ là tập hợp các giá trị của $m$ để bất phương trình $\\log_3(x^2-5x+m) > \\log_3(x-2)$ có tập nghiệm chứa khoảng $(2;+\\infty)$. Khẳng định nào đúng? <!--[cite: 65] -->", options: ["A. $S=(7;+\\infty)$", "B. $S=[6;+\\infty)$", "C. $S=(-\\infty;4)$", "D. $S=(-\\infty;5]$"], correctAnswer: "A" },
        { id: 734, type: "true_false", content: "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, $SO \\perp (ABCD)$. Biết $AB=SB=a$, $SO=\\frac{a\\sqrt{6}}{3}$. Gọi $M$ là trung điểm $SA$. Phát biểu sau đúng hay sai? <!--[cite: 67] -->", propositions: ["Góc giữa hai mặt phẳng $(SAB)$ và $(SAD)$ là góc $\\widehat{BMD}$.", "Số đo góc $\\widehat{BMO} = 60^\\circ$.", "Số đo góc giữa $(SAB)$ và $(SAD)$ là $60^\\circ$."], correctAnswer: {0: 'true', 1: 'false', 2: 'false'} },
        { id: 735, type: "multiple_choice", content: "An và Bình thi thử Tốt nghiệp THPT. Ngoài 3 môn bắt buộc, mỗi bạn đăng kí 2 môn tự chọn trong 3 môn (Lý, Hóa, Sinh). Mỗi môn tự chọn có 8 mã đề. Xác suất để An và Bình có chung đúng một môn thi tự chọn và chung một mã đề là: <!--[cite: 69] -->", options: ["A. $\\frac{1}{9}$", "B. $\\frac{1}{10}$", "C. $\\frac{1}{12}$", "D. $\\frac{1}{24}$"], correctAnswer: "C" },
        { id: 736, type: "multiple_choice", content: "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu của $A'$ lên $(ABC)$ là trung điểm $BC$. Biết góc giữa $(ABB'A')$ và $(A'B'C')$ bằng $60^\\circ$. Khoảng cách $d$ giữa $B'C'$ và $AA'$ bằng: <!--[cite: 71] -->", options: ["A. $d=\\frac{3a\\sqrt{7}}{14}$", "B. $d=\\frac{a\\sqrt{21}}{14}$", "C. $d=\\frac{3a}{4}$", "D. $d=\\frac{a\\sqrt{3}}{4}$"], correctAnswer: "A" },
        { id: 737, type: "fill_blank", content: "Trong hệ $Oxyz$, cho $d: \\frac{x}{2}=\\frac{y-1}{-1}=\\frac{z+1}{-1}$ và $A(1;1;1)$. Hai điểm $B, C$ di động trên $d$ sao cho $(OAB) \\perp (OAC)$. Gọi $B'$ là hình chiếu của $B$ lên $AC$. Quỹ tích $B'$ là đường tròn cố định có bán kính bằng bao nhiêu? (Làm tròn đến 2 chữ số thập phân) <!--[cite: 74] -->", correctAnswer: "0.67" },
        { id: 738, type: "fill_blank", content: "Một khối lập phương lớn tạo bởi 27 khối lập phương đơn vị. Một mặt phẳng vuông góc với đường chéo của khối lập phương lớn tại trung điểm của nó. Mặt phẳng này cắt ngang (không đi qua đỉnh) bao nhiêu khối lập phương đơn vị? <!--[cite: 76] -->", correctAnswer: "19" },
        { id: 739, type: "multiple_choice", content: "Tỉ lệ người nghiện thuốc lào tại khu vực X là 10%. Tỉ lệ bị bệnh phổi ở người nghiện thuốc lào là 70%, ở người không nghiện là 15%. Xác suất gặp ngẫu nhiên một người mà người đó nghiện thuốc lào khi biết họ bị bệnh phổi bằng: <!--[cite: 78] -->", options: ["A. $\\frac{14}{41}$", "B. $\\frac{6}{13}$", "C. $\\frac{4}{13}$", "D. $\\frac{41}{200}$"], correctAnswer: "A" },
        { id: 740, type: "fill_blank", content: "Doanh số bán lẻ tivi mỗi năm là 2500 chiếc. Phí lưu kho là 200k/năm/chiếc. Phí đặt hàng: 10 triệu đồng đặt cọc + 3 triệu đồng/chiếc. Số tivi trung bình trong kho bằng một nửa số tivi mỗi lần đặt. Để chi phí tồn kho thấp nhất, cửa hàng nên đặt hàng [1] lần/năm, mỗi lần [2] chiếc.<br><i>(Nhập các đáp án cách nhau bởi \"; \")</i> <!--[cite: 79] -->", correctAnswer: "5; 500" }
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
        { id: 501, type: "multiple_choice", content: "Cho cấp số cộng $(u_n)$ có $u_1=5$ và công sai $d=-1$. Giá trị của $u_2$ bằng <!--[cite: 2, 6] -->", options: ["A. 4.", "B. -5.", "C. 5.", "D. -4."], correctAnswer: "A" },
        { id: 502, type: "multiple_choice", content: "Cho các hàm số $y=f(x)$ và $y=g(x)$ có đạo hàm trên tập số thực $\\mathbb{R}$ thỏa mãn $f'(x)=x$ và $g'(x)=x^2$. Đạo hàm của hàm số $y=f(x)+g(x)$ là <!--[cite: 2, 6] -->", options: ["A. $3x$.", "B. $1+x^2$.", "C. $x+x^2$.", "D. $1+2x$."], correctAnswer: "C" },
        { id: 503, type: "multiple_choice", content: "Cho $\\int f(x)dx = \\sin x + C$. Phát biểu nào sau đây là đúng? <!--[cite: 2, 6] -->", options: ["A. $\\int [3+f(x)]dx = 3x + \\cos x + C$.", "B. $\\int [3+f(x)]dx = 3x + \\sin x + C$.", "C. $\\int [3+f(x)]dx = 3x - \\cos x + C$.", "D. $\\int [3+f(x)]dx = 3x - \\sin x + C$."], correctAnswer: "B" },
        { id: 504, type: "multiple_choice", content: "Nghiệm của phương trình $\\log_3(x-1)=1$ là <!--[cite: 2, 6] -->", options: ["A. $x=2$.", "B. $x=3$.", "C. $x=5$.", "D. $x=4$."], correctAnswer: "D" },
        { id: 505, type: "multiple_choice", content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(1;5;1)$ và $B(3;3;1)$. Vectơ $\\overrightarrow{AB}$ có tọa độ là <!--[cite: 2, 6] -->", options: ["A. $(2;-2;0)$.", "B. (-2;2;0).", "C. $(4;8;2)$.", "D. $(2;4;1)$."], correctAnswer: "A" },
        { id: 506, type: "multiple_choice", content: "Cho hai biến cố độc lập $A$ và $B$ có xác suất thỏa mãn $P(A)=0,5$ và $P(B)=0,4$. Giá trị của $P(AB)$ bằng <!--[cite: 2, 6] -->", options: ["A. 0,8.", "B. 0,1.", "C. 0,9.", "D. 0,2."], correctAnswer: "D" },
        { id: 507, type: "multiple_choice", content: "Cho hình lập phương $ABCD.A'B'C'D'$ (xem hình dưới). Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?<br><img src='https://i.postimg.cc/GpwpRfVD/c7.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 2, 6] -->", options: ["A. $\\overrightarrow{AA'}$.", "B. $\\overrightarrow{D'C'}$.", "C. $\\overrightarrow{CD}$.", "D. $\\overrightarrow{AD}$."], correctAnswer: "B" },
        { id: 508, type: "multiple_choice", content: "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases}x+y-3<0\\\\ x-y+1>0\\end{cases}$? <!--[cite: 2, 7] -->", options: ["A. $(1;0)$.", "B. $(0;2)$.", "C. $(-1;1)$.", "D. $(1;2)$."], correctAnswer: "A" },
        { id: 509, type: "multiple_choice", content: "Hàm số $F(x)=4x^3$ là một nguyên hàm của hàm số nào sau đây? <!--[cite: 2, 7] -->", options: ["A. $f_2(x)=3x^2$.", "B. $f_3(x)=12x^2$.", "C. $f_1(x)=x^4$.", "D. $f_4(x)=4x^4$."], correctAnswer: "B" },
        { id: 510, type: "multiple_choice", content: "Cho hàm số $y=\\frac{ax+b}{cx+d}$ có bảng biến thiên như hình dưới đây:<br><img src='https://i.postimg.cc/4NW8rk7s/c10-t.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Đường tiệm cận ngang của đồ thị hàm số đã cho có phương trình là <!--[cite: 2, 7] -->", options: ["A. $y=-2$.", "B. $x=-2$.", "C. $x=1$.", "D. $y=1$."], correctAnswer: "A" },
        { id: 511, type: "multiple_choice", content: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1$ và công bội $q$ với $u_1 \\neq 0, q>1$. Số hạng $u_4$ là <!--[cite: 3, 7] -->", options: ["A. $u_4=u_1 \\cdot q^3$.", "B. $u_4=u_1 \\cdot q^4$.", "C. $u_4=u_1+3q$.", "D. $u_4=u_1+4q$."], correctAnswer: "A" },
        { id: 512, type: "multiple_choice", content: "Khảo sát thời gian (đơn vị: phút) học trực tuyến trong một ngày của 42 học sinh, người ta thu được mẫu số liệu ghép nhóm như sau:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Thời gian</th><td class='border border-gray-300 p-2'>[10;20)</td><td class='border border-gray-300 p-2'>[20;30)</td><td class='border border-gray-300 p-2'>[30;40)</td><td class='border border-gray-300 p-2'>[40;50)</td><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td></tr><tr><th class='border border-gray-300 p-2'>Số học sinh</th><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>4</td><td class='border border-gray-300 p-2'>5</td></tr></table><br>Trung vị của mẫu số liệu trên thuộc nhóm nào sau đây? <!--[cite: 3, 7] -->", options: ["A. $[30;40)$.", "B. $[40;50)$.", "C. $[60;70)$.", "D. $[50;60)$."], correctAnswer: "A" },
        { id: 513, type: "true_false", content: "Kết quả quét thử nghiệm hồ sơ y tế của 10000 người: 1000 người nhận cảnh báo (trong đó 700 bệnh, 300 không bệnh); 9000 người không nhận cảnh báo (trong đó 100 bệnh, 8900 không bệnh). Chọn ngẫu nhiên 1 người: <!--[cite: 3, 7] -->", propositions: ["Xác suất để người đó không nhận được cảnh báo từ ứng dụng bằng 0,9.", "Xác suất để người đó không có bệnh, biết rằng người đó không nhận được cảnh báo, lớn hơn 0,98.", "Xác suất để người đó không có bệnh bằng 0,9.", "Xác suất để người đó không nhận được cảnh báo, biết rằng người đó không có bệnh, nhỏ hơn 0,95."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 514, type: "true_false", content: "Cho hàm số $f(x)=\\frac{1}{3}x^3-5x^2+9x+8$. <!--[cite: 3, 8] -->", propositions: ["Hàm số đã cho có đạo hàm là $f'(x)=x^2-10x+9$.", "Phương trình $f'(x)=0$ có tập nghiệm là $S=\\{1;9\\}$.", "Hàm số đã cho nghịch biến trên khoảng $(1;9)$.", "Giá trị cực tiểu của hàm số đã cho bằng $\\frac{37}{3}$."], correctAnswer: {0: 'true', 1: 'true', 2: 'true', 3: 'false'} },
        { id: 515, type: "true_false", content: "Một hệ thống pin năng lượng mặt trời có năng lượng điện lưu trữ là $F(t)$ (kWh) với $F(0)=0$. Tốc độ lưu trữ năng lượng là $f(t)=F'(t) = -0,3t^2 + 3,6t$ (kW) với $0 \\le t \\le 12$. <!--[cite: 3, 8] -->", propositions: ["$F(t)=-0,1t^3+1,8t^2$ với $0 \\le t \\le 12$.", "Năng lượng lưu trữ được kể từ thời điểm $t=a$ đến $t=b$ là $\\int_{a}^{b} f(t)dt$.", "Năng lượng điện lưu trữ được kể từ thời điểm $t=1$ đến $t=4$ nhỏ hơn 20,6 kWh.", "Năng lượng lưu trữ được từ $t=1$ đến $t=7$ gấp hai lần năng lượng lưu trữ được từ $t=1$ đến $t=4$."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 516, type: "true_false", content: "Trong hệ tọa độ $Oxyz$ (1 đơn vị = 10m). Vành đai bảo vệ mục tiêu $O$ là đường tròn tâm $O$, bán kính 7 đơn vị trên $(Oxy)$. Máy bay bay theo đường thẳng từ $M(5;10;4)$ đến $N(14;-2;4)$. <!--[cite: 4, 9] -->", propositions: ["$\\overrightarrow{MN}=(9;-12;0)$.", "Phương trình tham số của $MN$ là $\\begin{cases}x=5+3t\\\\ y=10-4t\\\\ z=0\\end{cases}$ với $t \\in \\mathbb{R}$.", "Khoảng cách ngắn nhất từ máy bay đến vành đai bảo vệ là 50 mét.", "Khoảng cách đạt giá trị nhỏ nhất khi máy bay ở tọa độ $(8;6;4)$."], correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'} },
        { id: 517, type: "fill_blank", content: "Cho hình lập phương $ABCD.MNPQ$ có cạnh bằng 6. Gọi $E$ là trung điểm của đoạn thẳng $AB$. Khoảng cách từ điểm $P$ đến mặt phẳng $(MED)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)? <!--[cite: 4, 10] -->", correctAnswer: "7.35" },
        { id: 518, type: "fill_blank", content: "Bình cần điền 15 số $\\{0;1;2;3;4;5;6;7;8;10;11;12;15;16;20\\}$ vào 15 ô vuông dạng bậc thang sao cho: Hiệu hai số ở 2 ô khác nhau trên cùng 1 hàng hoặc 1 cột không chia hết cho 5.<br><img src='https://i.postimg.cc/dtC2jb2n/ovuong.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Gọi $H$ là số cách điền khác nhau. Giá trị của $\\frac{H}{30}$ bằng bao nhiêu? <!--[cite: 4, 11] -->", correctAnswer: "1152" },
        { id: 519, type: "fill_blank", content: "Khối vật thể tạo thành khi quay nửa trên elip $\\frac{x^2}{1,5^2}+\\frac{y^2}{1^2}=1$ quanh trục $Ox$. Lỗ khoan trụ dọc trục có bán kính $0,2$cm.<br><img src='https://i.postimg.cc/W4z7RXqV/tt.png' class='mt-4 mb-4 w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Thể tích của hạt cườm đó bằng bao nhiêu $cm^3$ (làm tròn đến hàng phần trăm)? <!--[cite: 4, 11] -->", correctAnswer: "5.91" },
        { id: 520, type: "fill_blank", content: "Khung hình đa giác đều 12 cạnh $A_1A_2...A_{12}$. Lắp ngẫu nhiên 12 bóng (4 đỏ, 8 xanh) vào 12 đỉnh. Gọi $P$ là xác suất để mỗi hình vuông (tạo từ 4 đỉnh đa giác) đều có ít nhất 1 bóng đỏ. Giá trị của $3190P$ bằng bao nhiêu?<img src='https://i.postimg.cc/nV3cr2Ck/vv.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'> <!--[cite: 5, 12] -->", correctAnswer: "1856" },
        { id: 521, type: "fill_blank", content: "Số liệu bán hàng (kg và nghìn đồng):<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Ngày</th><th class='border border-gray-300 p-2'>Rau muống</th><th class='border border-gray-300 p-2'>Bí xanh</th><th class='border border-gray-300 p-2'>Cà chua</th><th class='border border-gray-300 p-2'>Tổng tiền</th></tr><tr><td class='border border-gray-300 p-2'>Thứ 4</td><td class='border border-gray-300 p-2'>19</td><td class='border border-gray-300 p-2'>14</td><td class='border border-gray-300 p-2'>10</td><td class='border border-gray-300 p-2'>600</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 5</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>8</td><td class='border border-gray-300 p-2'>540</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 6</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>12</td><td class='border border-gray-300 p-2'>7</td><td class='border border-gray-300 p-2'>570</td></tr><tr><td class='border border-gray-300 p-2'>Thứ 7</td><td class='border border-gray-300 p-2'>50</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>20</td><td class='border border-gray-300 p-2'>?</td></tr></table><br>Biết đơn giá không đổi, tổng tiền thu được ngày thứ Bảy là bao nhiêu? <!--[cite: 5, 12] -->", correctAnswer: "1275" },
        { id: 522, type: "fill_blank", content: "Công ty chế biến $x$ tấn nguyên liệu ($1 \\le x \\le 200$), chi phí $C(x)=0,001x^3+30x+10$ (triệu) và doanh thu $R(x)=60x$ (triệu). Lợi nhuận lớn nhất công ty đạt được trong một tháng là bao nhiêu triệu đồng? <!--[cite: 5, 13] -->", correctAnswer: "1990" }
    ],
    "thpt_sinh_03": [
        { id: 601, type: "multiple_choice", content: "Điều nào dưới đây không đúng với mã di truyền? <!--[cite: 16] -->", options: ["A. Các loài sinh vật đều có chung một bộ mã di truyền trừ một vài ngoại lệ.", "B. Mã di truyền được đọc từ một điểm xác định và gối chồng lên nhau.", "C. Mã di truyền có tính đặc hiệu nghĩa là một bộ ba chỉ mã hóa cho một amino acid.", "D. Trình tự sắp xếp các nucleotide trong gene qui định trình tự sắp xếp các amino acid trong chuỗi polypeptide."], correctAnswer: "B" },
        { id: 602, type: "multiple_choice", content: "Cơ chế điều hòa biểu hiện gene của operon Lac khi có lactose là? <!--[cite: 16] -->", options: ["A. Làm cho enzyme chuyển hóa nó có hoạt tính tăng lên nhiều lần.", "B. Bất hoạt protein ức chế, hoạt hóa operon phiên mã tổng hợp enzyme phân giải lactose.", "C. Là chất gây cảm ứng ức chế biểu hiện của operon, ức chế phiên mã.", "D. Cùng protein ức chế bất hoạt vùng O, gây ức chế phiên mã."], correctAnswer: "B" },
        { id: 603, type: "multiple_choice", content: "Ở một loài thực vật, tính trạng màu hoa do hai cặp gene A, a và B, b phân li độc lập cùng qui định. Kiểu gene có cả allele A và allele B thì hoa có màu đỏ, kiểu gene chỉ có allele A hoặc chỉ có allele B thì hoa có màu vàng, kiểu gene không có 2 loại allele trên thì hoa có màu trắng. Kiểu gene nào sau đây quy định kiểu hình hoa đỏ? <!--[cite: 16] -->", options: ["A. AaBb.", "B. AAbb.", "C. Aabb.", "D. aaBB."], correctAnswer: "A" },
        { id: 604, type: "multiple_choice", content: "Cho trình tự mạch bổ sung của một gene có trình tự các nucleotide là 5' ATTCGTAGGC 3'. Trình tự của mRNA được phiên mã từ gene này sẽ có trình tự là? <!--[cite: 16] -->", options: ["A. 5' AUUCGUAGGC 3'.", "B. 3' UAAGCAUCCG 5'.", "C. 5' ATTCGTAGGC 3'.", "D. 3' AUUCGUAGGC 5'."], correctAnswer: "A" },
        { id: 605, type: "multiple_choice", content: "Enzyme nào được sử dụng để cắt và nối các đoạn DNA trong quy trình tạo động vật biến đổi gene? <!--[cite: 17] -->", options: ["A. Reverse transcriptase và integrase.", "B. Restrictase enzyme và ligase.", "C. Protease và nuclease.", "D. DNA polymerase và helicase."], correctAnswer: "B" },
        { id: 606, type: "multiple_choice", content: "Đơn phân cấu tạo nên DNA là? <!--[cite: 17] -->", options: ["A. Amino acid.", "B. Glicerol.", "C. Monosaccharide.", "D. Nucleotide."], correctAnswer: "D" },
        { id: 607, type: "multiple_choice", content: "Khi thực hiện phép lai giữa hai cây hoa mõm chó thuần chủng có hoa màu đỏ và màu trắng với nhau thu được $F_1$ toàn cây có hoa màu hồng. Cho $F_1$ tự thụ phấn, thu được $F_2$ có kiểu hình phân li theo tỉ lệ 1 đỏ : 2 hồng : 1 trắng. Có thể kết luận tính trạng màu hoa do? <!--[cite: 17] -->", options: ["A. một gene có 2 allele trội, lặn hoàn toàn quy định.", "B. một gene có 2 allele đồng trội quy định.", "C. một gene có 2 allele trội, lặn không hoàn toàn quy định.", "D. hai gene, mỗi gene có 2 allele cùng quy định."], correctAnswer: "C" },
        { id: 608, type: "multiple_choice", content: "Ở người, allele A nằm trên nhiễm sắc thể X quy định máu đông bình thường là trội hoàn toàn so với allele a quy định bệnh máu khó đông. Biết không xảy ra đột biến. Theo lí thuyết, cặp bố mẹ nào sau đây không thể sinh con bị bệnh máu khó đông? <!--[cite: 17] -->", options: ["A. $X^AX^a \\times X^AY$.", "B. $X^AX^A \\times X^aY$.", "C. $X^AX^a \\times X^aY$.", "D. $X^aX^a \\times X^AY$."], correctAnswer: "B" },
        { id: 609, type: "multiple_choice", content: "Cho các thành tựu sau, đâu không phải là thành tựu của tạo động vật chuyển gene? <!--[cite: 17] -->", options: ["A. Cá hồi mang gene mã hóa hormone sinh trưởng có tốc độ sinh trưởng cao so với cá hồi thông thường.", "B. Cừu Dolly được tạo ra từ nhân tế bào trứng kết hợp với tế bào chất tế bào vú không qua thụ tinh.", "C. Bò có mang gene có chứa hàm lượng $\\beta$-lactoglobulin cao.", "D. Cừu mang gene quy định protein antithrombin của người có thể tách chiết làm thuốc chống đông máu dùng trong các ca phẫu thuật."], correctAnswer: "B" },
        { id: 610, type: "multiple_choice", content: "Cấu trúc của operon lac bao gồm những thành phần nào? <!--[cite: 17] -->", options: ["A. Gene điều hòa (lacI), vùng P, vùng O.", "B. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng P.", "C. vùng P, gene cấu trúc(lacZ, lacY, lacA), vùng O.", "D. Gene điều hòa (lacI), gene cấu trúc(lacZ, lacY, lacA), vùng O."], correctAnswer: "C" },
        { id: 611, type: "multiple_choice", content: "Cặp nhiễm sắc thể nào sau đây được xem là cặp tương đồng? <!--[cite: 17] -->", options: ["A. XX.", "B. ZW.", "C. XO.", "D. XY."], correctAnswer: "A" },
        { id: 612, type: "multiple_choice", content: "Ở cây đậu Hà Lan, xét gene quy định màu hoa có 2 allele nằm trên NST thường, allele A quy định hoa tím trội hoàn toàn so với allele a quy định hoa trắng. Tiến hành lai giữa các cây thu được kết quả như sau.<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Phép lai</th><th class='border border-gray-300 p-2'>Tỉ lệ kiểu gene</th></tr><tr><td class='border border-gray-300 p-2'>Cây hoa tím A x Cây hoa trắng</td><td class='border border-gray-300 p-2'>F1:?</td></tr><tr><td class='border border-gray-300 p-2'>Cây F1 x Cây hoa tím dị hợp</td><td class='border border-gray-300 p-2'>F2: 1:2:1</td></tr></table><br>Phép lai ở P là ? <!--[cite: 17] -->", options: ["A. AA x aa.", "B. Aa x aa.", "C. Aa x Aa.", "D. AA x Aa."], correctAnswer: "A" },
        { id: 613, type: "multiple_choice", content: "Khi nói về quá trình tái bản DNA, phát biểu nào sau đây sai? <!--[cite: 17] -->", options: ["A. Nhờ các enzyme tháo xoắn, hai mạch đơn của DNA tách nhau dần tạo nên chạc chữ Y.", "B. Enzyme DNA polimerase tổng hợp và kéo dài mạch mới theo chiều $3' \\rightarrow 5'$.", "C. Quá trình tái bản DNA diễn ra theo nguyên tắc bổ sung và nguyên tắc bán bảo tồn.", "D. Enzyme ligase (enzyme nối) nối các đoạn Okazaki thành mạch đơn hoàn chỉnh."], correctAnswer: "B" },
        { id: 614, type: "multiple_choice", content: "Trong thành phần cấu trúc của một gene điển hình gồm có các phần? <!--[cite: 17] -->", options: ["A. Vùng khởi động, vùng mã hóa và vùng kết thúc.", "B. Vùng điều hòa, vùng mã hóa và vùng kết thúc.", "C. Vùng khởi động, vùng vận hành và vùng cấu trúc.", "D. Vùng cấu trúc, vùng mã hóa và vùng kết thúc."], correctAnswer: "B" },
        { id: 615, type: "multiple_choice", content: "Khi nói về cơ chế dịch mã ở sinh vật nhân thực thì phát biểu nào đúng, phát biểu nào sai? <!--[cite: 18] -->", options: ["A. Khi ribosome tiếp xúc với mã UGA thì quá trình dịch mã dừng lại.", "B. Amino acid mở đầu trong quá trình dịch mã là methyonine.", "C. Mỗi phân tử mRNA có thể tổng hợp được từ một đến nhiều chuỗi polypeptide cùng loại.", "D. Khi dịch mã, ribosome dịch chuyển theo chiều $3' \\rightarrow 5'$ trên phân tử mRNA."], correctAnswer: "A" },
        { id: 616, type: "true_false", content: "Thomas Hunt Morgan đã lai một con ruồi giấm cái mắt đỏ thuần chủng với một con đực mắt trắng, ở $F_1$ thu được 100% ruồi mắt đỏ. Cho $F_1$ tạp giao, thu được $F_2$ có cả ruồi mắt đỏ và mắt trắng. Tuy nhiên, màu mắt trắng chỉ xuất hiện ở con đực. Trong một phép lai khác giữa ruồi cái mắt trắng với ruồi đực mắt đỏ, thu được $F_1$, rồi cho $F_1$ tạp giao, thu được $F_2$. Mỗi nhận định sau đây là đúng hay sai khi xét về thí nghiệm trên đây? <!--[cite: 18] -->", propositions: ["a) Tính trạng màu mắt đỏ trội hơn so với màu mắt trắng.", "b) Gene quy định màu mắt nằm trên nhiễm sắc thể giới tính X.", "c) Ở thế hệ $F_1$ của phép lai 2 có 100% con cái mắt đỏ, 50% con đực mắt đỏ.", "d) Nếu cho ruồi mắt đỏ ở thế hệ $F_2$ của phép lai 2 ngẫu phối thì $F_3$ không thu được màu mắt trắng."], correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'} },
        { id: 617, type: "true_false", content: "Khi nói về cấu trúc siêu hiển vi của NST, mỗi nhận xét sau đây đúng hay sai? <!--[cite: 18] -->", propositions: ["a) Đơn vị cấu trúc nên NST là các nucleosome, có dạng hình cầu.", "b) Mỗi nucleosome gồm lõi với 8 phân tử proteine histone và một đoạn DNA gồm khoảng 146 cặp nucleotide.", "c) Chuỗi nucleosome có vùng dị nhiễm sắc chứa các gene hoạt động còn vùng nguyên nhiễm sắc nằm ở đầu mút hoặc tâm động thì chứa các gene bị bất hoạt.", "d) Mỗi NST có một tâm động giúp NST di chuyển trong phân bào và trình tự đầu mút bảo vệ NST."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 618, type: "true_false", content: "Một loài thực vật, cho cây thân cao, lá nguyên giao phấn với cây thân thấp, lá xẻ (P), thu được $F_1$ gồm toàn cây thân cao, lá nguyên. Lai phân tích cây $F_1$, thu được $F_a$ có kiểu hình phân li theo tỉ lệ 1 cây thân cao, lá nguyên : 1 cây thân cao, lá xẻ : 1 cây thân thấp, lá nguyên : 1 cây thân thấp, lá xẻ. Cho biết mỗi gene quy định một tính trạng. Theo lí thuyết, nhận định nào sau đây đúng hay sai? <!--[cite: 18] -->", propositions: ["a) Cây thân thấp, lá nguyên ở $F_a$ giảm phân bình thường tạo ra 2 loại giao tử.", "b) Cho cây $F_1$ tự thụ phấn, thu được $F_2$ có $1/3$ số cây thân cao, lá xẻ.", "c) Cây thân cao, lá xẻ ở $F_a$ đồng hợp tử về 2 cặp gene.", "d) Kiểu gene cây thân cao, lá nguyên ở $F_a$ và $F_1$ là khác nhau."], correctAnswer: {0: 'false', 1: 'false', 2: 'false', 3: 'false'} },
        { id: 619, type: "true_false", content: "Mỗi nhận định sau là đúng hay sai khi nói về quá trình phiên mã? <!--[cite: 18] -->", propositions: ["a) Mạch khuôn được dùng để tổng hợp RNA có chiều $5' \\rightarrow 3'$.", "b) Quá trình tổng hợp mRNA được thực hiện theo đúng nguyên tắc bổ sung $A=U, T=A, C \\equiv G, G \\equiv C$.", "c) Enzyme RNA polymerase di chuyển trên mạch khuôn theo chiều $5' \\rightarrow 3'$.", "d) Enzyme tham gia quá trình phiên mã là enzyme RNA polymerase."], correctAnswer: {0: 'false', 1: 'true', 2: 'false', 3: 'true'} },
        { id: 620, type: "fill_blank", content: "Một phân tử DNA trên mạch 1 của phân tử DNA xoắn kép có tỷ lệ $(A+G)/(T+C)=2,5$ thì trên mạch bổ sung (mạch 2) tỉ lệ đó là bao nhiêu phần trăm (%)? <!--[cite: 18, 24] -->", correctAnswer: "40" },
        { id: 621, type: "fill_blank", content: "Hóa chất 5-BU có thể làm gene đột biến thay thế cặp A-T thành G-C qua mấy lần tái bản DNA? <!--[cite: 18, 24] -->", correctAnswer: "3" },
        { id: 622, type: "fill_blank", content: "Ở một Đậu Hà Lan, allele A quy định hạt vàng trội hoàn toàn so với allele a quy định hạt xanh; allele B quy định vỏ trơn trội hoàn toàn so với b quy định vỏ nhăn, hai cặp gene nằm trên hai cặp NST tương đồng khác nhau. Cho lai 2 cây với nhau thu được $F_1$ có tỉ lệ kiểu hình hạt vàng, vỏ nhăn chiếm 25%. Theo lí thuyết, có bao nhiêu phép lai phù hợp với kết quả trên?<br>I. $AABb \\times AABb$<br>II. $Aabb \\times Aabb$<br>III. $Aabb \\times aaBb$<br>IV. $AaBb \\times aabb$ <!--[cite: 18, 19, 24] -->", correctAnswer: "3" },
        { id: 623, type: "fill_blank", content: "Xét 7 amino acid đầu mạch của phân tử protein hemoglobin (Hb) ở người bình thường được kí hiệu là HbA và tương ứng của người bệnh kí hiệu là HbB có trình tự như sau:<br>HbA: $Val - His - Leu - Thr - Pro - Glu - Glu$<br>HbB: $Val - His - Leu - Thr - Pro - Val - Glu$<br>Vị trí triplet xảy ra đột biến gene là bao nhiêu? <!--[cite: 19, 24] -->", correctAnswer: "6" },
        { id: 624, type: "fill_blank", content: "Một nhóm nghiên cứu nuôi một số vi khuẩn E.coli trong môi trường chỉ có nito đồng vị nặng ($^{15}N$). Sau đó, chuyển vi khuẩn sang nuôi tiếp năm thế hệ ở môi trường chỉ có nitơ đồng vị nhẹ ($^{14}N$). Tách DNA sau mỗi thệ hệ và thu được kết quả như hình dưới đây. Cho biết X là vị trí của DNA chứa cả hai mạch $^{15}N$, Y là vị trí của DNA chứa cả mạch $^{14}N$ và mạch $^{15}N$; Z là vị trí của DNA chứa cả hai mạch $^{14}N$. Ở thế hệ thứ 4 vạch Z chiếm tỉ lệ bao nhiêu ? (Hãy thể hiện kết quả bằng số thập phân và làm tròn đến 2 chữ số sau dấu phẩy).<br><img src='https://i.postimg.cc/rsHhs1q4/sinhpp.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 19, 24] -->", correctAnswer: "0.88" }
    ],
    "thpt_ly_03": [
        // --- PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU) ---
        {
            id: 901, type: "multiple_choice",
            content: "Khi cho 2 vật chênh lệch nhiệt độ tiếp xúc nhau, năng lượng nhiệt luôn truyền từ vật có (1)..... sang vật có (2)..... Quá trình truyền nhiệt kết thúc khi hai vật (3)..... (trạng thái này được gọi là trạng thái (4).....). Chọn đáp án có các cụm từ thích hợp điền vào chỗ trống. <!-- -->",
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
            content: "Một nhiệt kế thể tích không đổi hiển thị nhiệt độ $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ tương ứng với các áp suất $50\\text{ cmHg}$ và $90\\text{ cmHg}$. Biết nhiệt độ đọc được là hàm bậc nhất của áp suất. Khi áp suất thủy ngân là $60\\text{ cmHg}$ thì nhiệt độ đọc được bằng <!-- -->",
            options: [
                "A. $25^\\circ\\text{C}$.",
                "B. $40^\\circ\\text{C}$.",
                "C. $15^\\circ\\text{C}$.",
                "D. $12,5^\\circ\\text{C}$."
            ],
            correctAnswer: "A"
        },
        {
            id: 903, type: "multiple_choice",
            content: "Chiều cao của cột thủy ngân trong nhiệt kế thủy ngân thay đổi theo nhiệt độ. Ứng với hai vạch có nhiệt độ là $0^\\circ\\text{C}$ và $100^\\circ\\text{C}$ thì chiều cao của cột thủy ngân trong nhiệt kế là $2\\text{ cm}$ và $22\\text{ cm}$. Khi sử dụng nhiệt kế này để đo nhiệt độ của cơ thể một em bé đang bị sốt thì thấy cột thủy ngân cao $9,9\\text{ cm}$. Theo thang nhiệt Kelvin, nhiệt độ của em bé lúc này là bao nhiêu? <!-- -->",
            options: [
                "A. $321,5\\text{ K}$.",
                "B. $305,5\\text{ K}$.",
                "C. $312,5\\text{ K}$.",
                "D. $327,0\\text{ K}$."
            ],
            correctAnswer: "C"
        },
        {
            id: 904, type: "multiple_choice",
            content: "Nội năng của một hệ là <!-- -->",
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
            content: "Khi thép đang nóng chảy được làm nguội nhanh về nhiệt độ phòng sẽ giúp tăng độ cứng cho thép và cách làm như vậy được gọi là tôi thép. Người ta có thể sử dụng nước để làm hạ nhiệt độ nhanh cho thép đang nóng đỏ vì <!--[cite: 83] -->",
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
            content: "Khi nói về thang đo nhiệt độ Kelvin và Celsius, kết luận nào sau đây là sai? <!--[cite: 83] -->",
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
            content: "Sắp xếp các nhiệt độ sau: $300\\text{ K}, 20^\\circ\\text{C}, 280\\text{ K}, 30^\\circ\\text{C}$ theo thứ tự tăng dần. Thứ tự đúng là: <!--[cite: 83] -->",
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
            content: "Khi nói về quá trình truyền nhiệt lượng khi cho hai vật tiếp xúc với nhau. Kết luận nào sau đây là sai? <!--[cite: 83] -->",
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
            content: "Nhiệt hóa hơi riêng của một chất là nhiệt lượng cần cung cấp để $1\\text{ kg}$ chất đó: <!--[cite: 83] -->",
            options: [
                "A. bay hơi hết.",
                "B. hóa hơi hoàn toàn.",
                "C. hóa hơi hoàn toàn ở nhiệt độ sôi.",
                "D. hóa hơi."
            ],
            correctAnswer: "C"
        },
        {
            id: 910, type: "multiple_choice",
            content: "Các nhiệt kế thường dùng như nhiệt kế rượu, nhiệt kế thủy ngân, được chế tạo dựa trên <!--[cite: 83] -->",
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
            content: "Phần năng lượng nhiệt mà vật này truyền cho vật kia hoặc vật này nhận từ vật kia gọi là <!--[cite: 83] -->",
            options: [
                "A. nội năng.",
                "B. nhiệt lượng.",
                "C. nhiệt độ.",
                "D. thế năng."
            ],
            correctAnswer: "B"
        },
        {
            id: 912, type: "multiple_choice",
            content: "Cặp nhiệt độ được chọn làm mốc trong thang đo nhiệt độ Kelvin là <!--[cite: 83] -->",
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
            content: "Chọn phát biểu sai? Sự bay hơi của một khối chất lỏng <!--[cite: 83] -->",
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
            content: "Khi làm muối, người ta dựa vào hiện tượng nào của nước? <!--[cite: 83] -->",
            options: [
                "A. Đông đặc.",
                "B. Ngưng tụ.",
                "C. Bay hơi.",
                "D. Sự sôi."
            ],
            correctAnswer: "C"
        },
        {
            id: 915, type: "multiple_choice",
            content: "Phát biểu nào sau đây nói về nội năng là không đúng? <!--[cite: 83] -->",
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
            content: "Để diệt trừ các bào tử nấm và kích thích quá trình nảy mầm của hạt giống lúa, người nông dân đã sử dụng một kinh nghiệm dân gian là ngâm chúng vào trong nước ấm theo công thức \"hai sôi, ba lạnh\". Tức là nước ấm ở nhiệt độ $t^\\circ\\text{C}$ sẽ được tạo ra bằng cách pha hai phần nước sôi ($100^\\circ\\text{C}$) với ba phần nước lạnh ($t_0^\\circ\\text{C}$). Chọn biểu thức đúng. <!--[cite: 83] -->",
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
            content: "Dùng một ca nước ở thùng chứa nước A có nhiệt độ $t_A = 20^\\circ\\text{C}$ và ở thùng chứa nước B ở nhiệt độ $t_B = 80^\\circ\\text{C}$ rồi đổ vào thùng nước C. Biết rằng trước khi đổ, trong thùng chứa nước C đã có sẵn một lượng nước ở nhiệt độ $t_C = 40^\\circ\\text{C}$ và bằng tổng số ca nước vừa mới đổ thêm vào nó. Bỏ qua sự trao đổi nhiệt với môi trường, với bình chứa và ca múc nước. Để có nhiệt độ nước ở thùng C là $50^\\circ\\text{C}$ thì số ca nước phải múc ở mỗi thùng A và B lần lượt là: <!--[cite: 83] -->",
            options: [
                "A. $n$ ca và $2n$ ca.",
                "B. $3n$ ca và $2n$ ca.",
                "C. $2n$ ca và $n$ ca.",
                "D. $n$ ca và $3n$ ca."
            ],
            correctAnswer: "A"
        },
        {
            id: 918, type: "multiple_choice",
            content: "Nhiệt hóa hơi riêng có đơn vị đo là <!--[cite: 83] -->",
            options: [
                "A. J/kg.độ",
                "B. J",
                "C. J/kg.K",
                "D. J/kg"
            ],
            correctAnswer: "D"
        },

        // --- PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG/SAI (4 CÂU) ---
        {
            id: 919, type: "true_false",
            content: "Tại điểm ba của nước: <!--[cite: 83] -->",
            propositions: [
                "a) nước tinh khiết tồn tại đồng thời ở cả ba thể: rắn, lỏng, khí. <!--[cite: 83] -->",
                "b) nhiệt độ của hệ khảo sát được chọn làm mốc trên thang đo Kelvin và có giá trị là $273,16\\text{ K}$. <!--[cite: 83] -->",
                "c) hệ khảo sát có áp suất $1\\text{ atm}$. <!--[cite: 83] -->",
                "d) hệ khảo sát có nhiệt độ theo thang Celsius là $0,01^\\circ\\text{C}$. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'true'}
        },
        {
            id: 920, type: "true_false",
            content: "Có hai chai nước lạnh A và B hoàn toàn giống nhau. Cho chai nước A vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu giảm xuống. Lấy chai nước A ra ngoài và cho chai nước B vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu tiếp tục giảm xuống, lấy chai B ra khỏi chậu nước. Xem như chỉ có sự trao đổi nhiệt giữa chai nước A, B và nước trong chậu. <!--[cite: 83] -->",
            propositions: [
                "a) Độ giảm nhiệt độ của chậu nước trong lần nhúng chai nước A nhiều hơn lần nhúng chai nước B. <!--[cite: 83] -->",
                "b) Sau khi lấy các chai nước ra khỏi chậu thì nhiệt độ của chai nước A cao hơn nhiệt độ của chai nước B. <!--[cite: 83] -->",
                "c) Tổng độ tăng nhiệt độ của 2 chai nước bằng tổng độ giảm nhiệt độ của nước trong chậu ở 2 lần nhúng. <!--[cite: 83] -->",
                "d) Nhiệt lượng của chậu nước truyền cho hai chai nước là như nhau. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'true', 2: 'false', 3: 'false'}
        },
        {
            id: 921, type: "true_false",
            content: "Giả sử một học sinh tạo ra một nhiệt kế sử dụng một thang nhiệt độ mới cho riêng mình, gọi là thang nhiệt độ Z, có đơn vị là $^\\circ\\text{Z}$. Trong đó, nhiệt độ của nước đá đang tan ở $1\\text{ atm}$ là $x^\\circ\\text{Z}$, nhiệt độ nước sôi ở $1\\text{ atm}$ là $y^\\circ\\text{Z}$. Từ vạch $x^\\circ\\text{Z}$ đến vạch $y^\\circ\\text{Z}$ được chia thành 180 khoảng, mỗi khoảng ứng với $1^\\circ\\text{Z}$. <!--[cite: 83] -->",
            propositions: [
                "a) Nếu nhiệt độ cơ thể người là $37^\\circ\\text{C}$ tương ứng với $86,6^\\circ\\text{Z}$ thì giá trị của $x$ là 20. <!--[cite: 83] -->",
                "b) Độ biến thiên nhiệt độ $18^\\circ\\text{C}$ trong thang nhiệt độ Celsius bằng với độ biến thiên nhiệt độ $10^\\circ\\text{Z}$ trong thang nhiệt độ Z. <!--[cite: 83] -->",
                "c) Mối liên hệ giữa $x$ và $y$ là: $y = x + 180$. <!--[cite: 83] -->",
                "d) Một độ chia trên thang nhiệt độ Z bằng 1,8 lần độ chia trên thang nhiệt độ Celsius. <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'false'}
        },
        {
            id: 922, type: "true_false",
            content: "Khi nung nóng một khối khí chứa trong một xilanh có pit-tông đóng kín làm cho nhiệt độ của khối khí tăng. Pit-tông này có thể dịch chuyển không ma sát trong xilanh.<br><img src='https://i.postimg.cc/Y0XCmSw9/4ds.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            propositions: [
                "a) Nhiệt độ của khối khí trong xilanh thay đổi do quá trình truyền nhiệt. <!--[cite: 83] -->",
                "b) Khi nhận nhiệt, động năng của các phân tử là không đổi. <!--[cite: 83] -->",
                "c) Khi cho pit-tông chuyển động tự do để khối khí dãn nở với áp suất không đổi. Lúc này khối khí đã sinh công. <!--[cite: 83] -->",
                "d) Khi giữ pit-tông để thể tích khí không đổi thì toàn bộ nhiệt lượng khối khí nhận được dùng để tăng nội năng của khí (khối khí không tỏa nhiệt). <!--[cite: 83] -->"
            ],
            correctAnswer: {0: 'true', 1: 'false', 2: 'true', 3: 'true'}
        },

        // --- PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (6 CÂU) ---
        {
            id: 923, type: "fill_blank",
            content: "Một vật có khối lượng $2\\text{ kg}$ trượt không vận tốc đầu từ đỉnh xuống chân một mặt nghiêng dài $40\\text{ m}$, nghiêng một góc $60^\\circ$ so với phương ngang. Tốc độ của vật ở chân mặt phẳng nghiêng là $4,5\\text{ m/s}$. Cho rằng, $75\\%$ công của lực ma sát giữa mặt phẳng nghiêng và vật chuyển thành nội năng của vật, bỏ qua phần nhiệt lượng mặt phẳng nghiêng truyền cho vật. Lấy $g = 9,8\\text{ m/s}^2$. Độ biến thiên nội năng của vật trong quá trình trên là bao nhiêu kilôjun (kJ)? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm). <!--[cite: 83] -->",
            correctAnswer: "0.49"
        },
        {
            id: 924, type: "fill_blank",
            content: "Trong một hệ đun nước bằng năng lượng Mặt Trời, bức xạ Mặt Trời đi vào trong phần góp qua các lớp phủ trong suốt làm nóng nước trong ống. Giả thiết rằng hiệu suất của toàn bộ hệ là $20\\%$ (nghĩa là $80\\%$ năng lượng Mặt Trời bị mất khỏi hệ). Hỏi diện tích của phần góp là bao nhiêu mét vuông khi cần nâng nhiệt độ của $200\\text{ lít}$ nước trong bình chứa từ $20^\\circ\\text{C}$ đến $40^\\circ\\text{C}$ trong 1 giờ? (Kết quả lấy đến một chữ số thập phân, dùng dấu chấm). Biết khối lượng riêng của nước là $1000\\text{ kg/m}^3$; nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$; cường độ ánh sáng Mặt Trời tới là $700\\text{ W/m}^2$.<br><img src='https://i.postimg.cc/8CDgNVqL/c2-tln.png' class='mt-4 mb-4 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            correctAnswer: "33.3"
        },
        {
            id: 925, type: "fill_blank",
            content: "Trong một bình nhiệt lượng kế có chứa $200\\text{ ml}$ nước ở nhiệt độ ban đầu $t_0 = 10^\\circ\\text{C}$. Người ta đổ một cốc $50\\text{ ml}$ nước ở nhiệt độ $60^\\circ\\text{C}$ vào bình rồi sau khi cân bằng nhiệt lại múc ra khỏi bình $50\\text{ ml}$ nước. Bỏ qua sự trao đổi nhiệt với các bình và môi trường. Hỏi sau tối thiểu bao nhiêu lượt thì nhiệt độ của nước trong bình sẽ lớn hơn $40^\\circ\\text{C}$? (Một lượt đổ gồm một lần múc nước vào và một lần múc nước ra). <!--[cite: 83] -->",
            correctAnswer: "5"
        },
        {
            id: 926, type: "fill_blank",
            content: "Biết nhiệt dung riêng của nước đá là $2100\\text{ J/kg.K}$, nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Để tìm nhiệt nóng chảy riêng của nước đá, người ta dùng một bếp điện để đun một hệ gồm một bình bằng đồng đựng một lượng nước đá với nhiệt độ ban đầu của hệ là $-5^\\circ\\text{C}$. Dùng nhiệt kế đo nhiệt độ của hệ, thu được bảng sau:<br><img src='https://i.postimg.cc/7hJWSBFb/4-tln.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Biết rằng từ thời điểm 0 đến $60\\text{ s}$ và $1340\\text{ s}$ đến $1540\\text{ s}$, số chỉ của nhiệt kế tăng liên tục. Coi như nhiệt lượng mà hệ nhận được tỉ lệ với thời gian đun. Nhiệt nóng chảy riêng của nước đá đo được trong thí nghiệm này là $a \\cdot 10^5\\text{ J/kg}$. Giá trị của $a$ bằng bao nhiêu? (Dùng dấu chấm thập phân) <!--[cite: 83] -->",
            correctAnswer: "3.36"
        },
        {
            id: 927, type: "fill_blank",
            content: "Sự biến thiên nhiệt độ của khối nước đá đựng trong ca nhôm theo nhiệt lượng cung cấp được cho trên đồ thị. Cho nhiệt dung riêng của nước và nhôm lần lượt là $c_1 = 4200\\text{ J/kg.K}$; $c_2 = 880\\text{ J/kg.K}$, nhiệt nóng chảy riêng của nước đá là $\\lambda = 3,4 \\cdot 10^5\\text{ J/kg}$. Khối lượng của ca nhôm bằng bao nhiêu gam? (Kết quả làm tròn đến hàng đơn vị).<br><img src='https://i.postimg.cc/RhfzvVVP/5-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 83] -->",
            correctAnswer: "455"
        },
        {
            id: 928, type: "fill_blank",
            content: "Hiện nay, người ta có thể dùng các vỉ đá được làm nóng sẵn trong lò để nướng thức ăn. Giả sử, một vỉ đá có khối lượng $1,2\\text{ kg}$; nhiệt độ ban đầu là $28^\\circ\\text{C}$ được làm nóng trong lò có công suất $20\\text{ kW}$. Coi như toàn bộ năng lượng của lò cung cấp sẽ dùng để làm nóng vỉ đá. Biết rằng, để làm cho $1\\text{ kg}$ đá làm vỉ này tăng thêm $1^\\circ\\text{C}$ thì cần nhiệt lượng $5500\\text{ J}$. Để vỉ đá đạt được nhiệt độ $1000^\\circ\\text{C}$ thì cần thời gian bao nhiêu phút? (Kết quả lấy đến hai chữ số sau dấu phẩy thập phân, dùng dấu chấm). <!--[cite: 83] -->",
            correctAnswer: "5.35"
        }
    ],
    "hsa_toan_01": [
        {
            id: 1001, type: "multiple_choice",
            content: "Một chiếc cổng hình parabol có phương trình $y=-3x^2$ và có chiều rộng $d=8\\text{ m}$. Hãy tính chiều cao $h$ của chiếc cổng. <!-- -->",
            options: ["A. $h=45\\text{ m}$.", "B. $h=48\\text{ m}$.", "C. $h=50\\text{ m}$.", "D. $h=40\\text{ m}$."],
            correctAnswer: "B"
        },
        {
            id: 1002, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ.<br><img src='https://i.postimg.cc/J4cxxXzn/C2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Hàm số $g(x)=f\\left(\\frac{2x+3}{x+1}\\right)$ có bao nhiêu điểm cực trị? <!--[cite: 84] -->",
            correctAnswer: "1"
        },
        {
            id: 1003, type: "multiple_choice",
            content: "Cho hàm số $f(x)=\\log_2(x^2+1)$. Tính $f'(1)$. <!--[cite: 85] -->",
            options: ["A. $f'(1)=\\frac{1}{2\\ln 2}$.", "B. $f'(1)=\\frac{1}{\\ln 2}$.", "C. $f'(1)=\\frac{1}{2}$.", "D. $f'(1)=1$."],
            correctAnswer: "B"
        },
        {
            id: 1004, type: "multiple_choice",
            content: "Họ nguyên hàm của hàm số $f(x)=e^{2x}$ là <!--[cite: 85] -->",
            options: ["A. $\\frac{1}{2}e^x+C$.", "B. $\\frac{1}{2}e^{2x}+C$.", "C. $2e^{2x}+C$.", "D. $2e^x+C$."],
            correctAnswer: "B"
        },
        {
            id: 1005, type: "multiple_choice",
            content: "Cho hình chóp tứ giác $S.ABCD$ có tất cả các cạnh đều bằng $a$. Khoảng cách từ $D$ đến đường thẳng $SB$ bằng <!--[cite: 85] -->",
            options: ["A. $a$.", "B. $\\frac{a}{2}$.", "C. $\\frac{a}{3}$.", "D. $\\frac{a\\sqrt{3}}{2}$."],
            correctAnswer: "A"
        },
        {
            id: 1006, type: "multiple_choice",
            content: "Trong các mệnh đề sau, mệnh đề nào sai? <!--[cite: 85, 86] -->",
            options: [
                "A. Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song.",
                "B. Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song.",
                "C. Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thì song song.",
                "D. Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thì song song."
            ],
            correctAnswer: "C"
        },
        {
            id: 1007, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, điểm $A(1;2;3)$ thuộc mặt phẳng có phương trình nào dưới đây? <!--[cite: 86] -->",
            options: ["A. $x-2y+z=0$.", "B. $x+2y+3z=0$.", "C. $x-2y+3z=0$.", "D. $x+2y+3z=1$."],
            correctAnswer: "A"
        },
        {
            id: 1008, type: "multiple_choice",
            content: "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $AB$. Cắt tứ diện $ABCD$ bởi mặt phẳng đi qua $M$ và song song với $BC$ và $AD$, thiết diện thu được là hình gì? <!--[cite: 86] -->",
            options: ["A. Tam giác đều.", "B. Tam giác vuông.", "C. Hình bình hành.", "D. Ngũ giác."],
            correctAnswer: "C"
        },
        {
            id: 1009, type: "multiple_choice",
            content: "Cấp số cộng $(u_n)$ có số hạng đầu $u_1=1$ và công sai $d=2$. Công thức số hạng tổng quát của dãy số $(u_n)$ là <!-- -->",
            options: ["A. $u_n=2n-3$.", "B. $u_n=2n+1$.", "C. $u_n=2n-1$.", "D. $u_n=2n+3$."],
            correctAnswer: "C"
        },
        {
            id: 1010, type: "multiple_choice",
            content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh $a$. Đường thẳng $SO$ vuông góc với mặt phẳng đáy và $SO=\\frac{a\\sqrt{3}}{2}$. Tính góc giữa $(SCD)$ và $(ABCD)$. <!--[cite: 87] -->",
            options: ["A. $90^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $30^\\circ$."],
            correctAnswer: "C"
        },
        {
            id: 1011, type: "fill_blank",
            content: "Hình phẳng $(H)$ được giới hạn bởi đồ thị $(C)$ của hàm số đa thức bậc ba và parabol $(P)$ có trục đối xứng vuông góc với trục hoành. Phần tô đậm như hình vẽ có diện tích bằng $\\frac{a}{b}$ ($a, b \\in \\mathbb{Z}; (a,b)=1$). Giá trị của biểu thức $a-3b$ bằng bao nhiêu?<br><img src='https://i.postimg.cc/pdyBP1Yr/C11.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 87, 88] -->",
            correctAnswer: "1"
        },
        {
            id: 1012, type: "multiple_choice",
            content: "Trong năm đầu tiên đi làm, anh A được nhận lương là 10 triệu đồng mỗi tháng. Cứ hết một năm, anh A lại được tăng lương, mỗi tháng năm sau tăng 12% so với mỗi tháng năm trước. Mỗi khi lĩnh lương anh A đều cất đi phần lương tăng so với năm ngay trước để tiết kiệm mua ô tô. Hỏi sau ít nhất bao nhiêu năm thì anh A mua được ô tô giá 500 triệu biết rằng anh A được gia đình hỗ trợ 32% giá trị chiếc xe? <!--[cite: 88, 89] -->",
            options: ["A. 11 năm.", "B. 12 năm.", "C. 13 năm.", "D. 10 năm."],
            correctAnswer: "C"
        },
        {
            id: 1013, type: "multiple_choice",
            content: "Trong một buổi giao lưu, có 7 học sinh trường A và 7 học sinh trường B ngồi vào 2 bàn dài đối diện nhau. Hỏi có bao nhiêu cách xếp sao cho 2 người ngồi đối diện và ngồi cạnh nhau thì không cùng trường? <!-- -->",
            options: ["A. $2 \\cdot 7!$.", "B. $2 \\cdot 7!7!$.", "C. $7!7!$.", "D. $7!$."],
            correctAnswer: "B"
        },
        {
            id: 1014, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$. Hàm số $y=f'(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Biết $f(-1)=\\frac{13}{4}, f(2)=6$. Giá trị nhỏ nhất của hàm số $g(x)=f^3(x)-3f(x)$ trên đoạn $[-1;2]$ bằng bao nhiêu? (Nhập kết quả dưới dạng phân số tối giản a/b)<br><img src='https://i.postimg.cc/GtnPJ30y/C14.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 89, 90] -->",
            correctAnswer: "1573/64"
        },
        {
            id: 1015, type: "multiple_choice",
            content: "Số sản phẩm một công nhân làm được trong một ngày được cho như sau:<br>18, 25, 39, 12, 54, 27, 46, 25, 19, 8, 36, 22, 20, 19, 17, 44, 5, 18, 23, 28, 25, 34, 46, 27, 16.<br>Hãy chuyển mẫu số liệu sang dạng ghép nhóm với sáu nhóm có độ dài bằng nhau: $[1;10), [10;19), [19;28), [28;37), [37;46), [46;55)$. Sau đó tính mốt của mẫu số liệu ghép nhóm trên. <!--[cite: 90, 91] -->",
            options: ["A. 24.", "B. 22,75.", "C. 19.", "D. 23,5."],
            correctAnswer: "B"
        },
        {
            id: 1016, type: "multiple_choice",
            content: "Một thư viện có 9 quyển sách Văn học, 10 quyển sách Khoa học tự nhiên và 12 quyển sách Kinh tế học, các quyển sách đôi một khác nhau. Có 10 học sinh muốn mượn mỗi bạn 1 quyển sách. Hỏi nếu thư viện yêu cầu sau khi họ mượn xong mỗi thể loại còn ít nhất 1 quyển thì họ có bao nhiêu cách mượn sách? <!--[cite: 91] -->",
            options: [
                "A. $A_{31}^{10}-9!-10!-12!$.",
                "B. $22 \\cdot 9!+10!+A_{12}^{10}$.",
                "C. $A_{31}^{10}-22 \\cdot 9!-10!$.",
                "D. $A_{31}^{10}-9!-22 \\cdot 10!$."
            ],
            correctAnswer: "C"
        },
        {
            id: 1017, type: "fill_blank",
            content: "Cho tam giác vuông $ABC$ vuông tại $A$ có tích độ dài hai cạnh góc vuông bằng 15. Khi chu vi tam giác $ABC$ nhỏ nhất thì độ dài cạnh $BC$ bằng bao nhiêu? (Làm tròn đến chữ số thập phân thứ nhất, dùng dấu chấm) <!--[cite: 91, 92] -->",
            correctAnswer: "5.5"
        },
        {
            id: 1018, type: "multiple_choice",
            content: "Biểu đồ bên dưới thể hiện giá trị sản phẩm trung bình thu được trên một hecta đất trồng cao su và đất trồng cà phê của cả nước từ năm 2018 đến năm 2022 (đơn vị: triệu đồng).<br><img src='https://i.postimg.cc/dQGjQCd7/C18.png' class='mt-4 mb-4 w-full max-w-xl mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Phát biểu nào sau đây là sai? <!--[cite: 92, 93] -->",
            options: [
                "A. Giá trị sản phẩm trung bình thu được trên một hecta đất trồng cà phê cao hơn trên một hecta đất trồng cao su.",
                "B. Giá trị sản phẩm thu được trên cả đất trồng cao su và đất trồng cà phê đều có xu hướng tăng từ năm 2018 đến năm 2022.",
                "C. Tổng giá trị sản phẩm trung bình thu được trên một hecta đất trồng cà phê cao gấp khoảng 1,1 lần trên một hecta đất trồng cao su.",
                "D. Giá trị sản phẩm thu được trên đất trồng cao su từ năm 2020 đến năm 2022 không tăng nhanh bằng từ năm 2018 đến năm 2020."
            ],
            correctAnswer: "C"
        },
        {
            id: 1019, type: "multiple_choice",
            content: "Cho tam giác $ABC$ thỏa mãn điều kiện $\\sin B = 2\\sin C \\cdot \\cos A$. Mệnh đề nào sau đây đúng? <!-- -->",
            options: [
                "A. Tam giác $ABC$ vuông tại $A$.",
                "B. Tam giác $ABC$ vuông tại $B$.",
                "C. Tam giác $ABC$ cân tại $A$.",
                "D. Tam giác $ABC$ cân tại $B$."
            ],
            correctAnswer: "D"
        },
        {
            id: 1020, type: "multiple_choice",
            content: "Giá trị của tổng $P=C_4^0-2C_4^1+4C_4^2-8C_4^3+16C_4^4$ là <!--[cite: 93] -->",
            options: ["A. 1.", "B. -1.", "C. 81.", "D. 0."],
            correctAnswer: "A"
        },
        {
            id: 1021, type: "multiple_choice",
            content: "Cho hàm số $y=ax^3+bx^2+cx+d$ ($a,b,c,d \\in \\mathbb{R}$) có đồ thị là đường cong trong hình bên. Có bao nhiêu số dương trong các số $a,b,c,d$?<br><img src='https://i.postimg.cc/QxskFMJC/C21.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><!--[cite: 93, 94] -->",
            options: ["A. 1.", "B. 3.", "C. 2.", "D. 4."],
            correctAnswer: "A"
        },
        {
            id: 1022, type: "multiple_choice",
            content: "Một hộp đựng 10 chiếc thẻ được đánh số từ 0 đến 9. Lấy ngẫu nhiên ra 3 chiếc thẻ, tính xác suất để 3 chữ số trên 3 chiếc thẻ được lấy ra có thể ghép thành một số chia hết cho 5. <!--[cite: 94] -->",
            options: ["A. $\\frac{2}{5}$.", "B. $\\frac{3}{5}$.", "C. $\\frac{8}{15}$.", "D. $\\frac{7}{15}$."],
            correctAnswer: "C"
        },
        {
            id: 1023, type: "multiple_choice",
            content: "Cho $\\Delta ABC$ có $AB=4, AC=7, \\widehat{A}=55^\\circ$. Độ lớn của góc $B$ gần nhất với số nào sau đây? <!--[cite: 94, 95] -->",
            options: ["A. $70,6^\\circ$.", "B. $64,31^\\circ$.", "C. $55^\\circ$.", "D. $90,15^\\circ$."],
            correctAnswer: "D"
        },
        {
            id: 1024, type: "multiple_choice",
            content: "Một chất điểm A xuất phát từ O, chuyển động thẳng với vận tốc biến thiên theo thời gian bởi quy luật $v(t)=\\frac{1}{150}t^2+\\frac{59}{75}t\\text{ (m/s)}$, trong đó $t$ là khoảng thời gian tính từ lúc A bắt đầu chuyển động. Từ trạng thái nghỉ, một chất điểm B cũng xuất phát từ O, chuyển động thẳng cùng hướng với A nhưng chậm hơn 3 giây so với A và có gia tốc bằng $a\\text{ (m/s}^2\\text{)}$ ($a$ là hằng số). Sau khi B xuất phát được 12 giây thì đuổi kịp A. Vận tốc của B tại thời điểm đuổi kịp A bằng: <!--[cite: 95] -->",
            options: ["A. $20\\text{ (m/s)}$.", "B. $16\\text{ (m/s)}$.", "C. $13\\text{ (m/s)}$.", "D. $15\\text{ (m/s)}$."],
            correctAnswer: "B"
        },
        {
            id: 1025, type: "multiple_choice",
            content: "Cho hình thang $ABCD$ vuông tại $A$ và $D$ có $AB=6a, AD=CD=\\frac{1}{2}AB$, $M$ thuộc cạnh $AD$ sao cho $AM=\\frac{1}{3}AD$. Tính $T=(\\overrightarrow{MB}+2\\overrightarrow{MC})\\cdot(\\overrightarrow{CD}-\\overrightarrow{BD})$. <!--[cite: 95, 96] -->",
            options: ["A. $T=27a$.", "B. $T=\\frac{1}{27}a$.", "C. $T=27a^2$.", "D. $T=\\frac{1}{27}a^2$."],
            correctAnswer: "C"
        },
        {
            id: 1026, type: "multiple_choice",
            content: "Xác định các giá trị của tham số $m$ để hàm số $y=x^3-3mx^2-m$ nghịch biến trên khoảng $(0;1)$? <!--[cite: 96] -->",
            options: ["A. $m \\ge 0$.", "B. $m < \\frac{1}{2}$.", "C. $m \\le 0$.", "D. $m \\ge \\frac{1}{2}$."],
            correctAnswer: "D"
        },
        {
            id: 1027, type: "fill_blank",
            content: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $a$. Lấy điểm $M$ thuộc đoạn $AD'$, điểm $N$ thuộc đoạn $BD$ sao cho $AM=DN=x$ ($0 < x < \\frac{a\\sqrt{2}}{2}$). Khi độ dài đoạn $MN$ đạt giá trị nhỏ nhất thì $x=ka$. Giá trị của biểu thức $T=9k^2+1$ bằng bao nhiêu? <!--[cite: 96, 97] -->",
            correctAnswer: "3"
        },
        {
            id: 1028, type: "fill_blank",
            content: "Gọi $S_n$ là tổng $n$ số hạng đầu tiên trong cấp số cộng $(a_n)$ với $a_1 \\neq 0$. Biết $S_8=S_{11}$, tỉ số $\\frac{a_4}{a_6}$ bằng bao nhiêu? (Nhập kết quả dưới dạng phân số tối giản a/b) <!--[cite: 97] -->",
            correctAnswer: "3/2"
        },
        {
            id: 1029, type: "multiple_choice",
            content: "Cho hàm số $f(x)$ là hàm đa thức bậc 3 và có đồ thị như hình vẽ.<br><img src='https://i.postimg.cc/bwVQV9X5/C29.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Xét hàm số $g(x)=f(2x^3+x-1)+m$. Với giá trị nào của $m$ thì giá trị nhỏ nhất của $g(x)$ trên đoạn $[0;1]$ bằng $-20$? <!-- -->",
            options: ["A. -19.", "B. 2.", "C. -21.", "D. 11."],
            correctAnswer: "A"
        },
        {
            id: 1030, type: "multiple_choice",
            content: "Tất cả các giá trị thực của tham số $m$ để hàm số $y=-x^3-6x^2+(4m-9)x+4$ nghịch biến trên khoảng $(-\\infty;-1)$ là <!--[cite: 98, 99] -->",
            options: ["A. $(-\\infty;-\\frac{3}{4}]$.", "B. $[-\\frac{3}{4};+\\infty)$.", "C. $[0;+\\infty)$.", "D. $(-\\infty;0]$."],
            correctAnswer: "A"
        },
        {
            id: 1031, type: "multiple_choice",
            content: "Đường tròn $x^2+y^2-1=0$ tiếp xúc đường thẳng nào trong các đường thẳng dưới đây? <!--[cite: 99] -->",
            options: ["A. $x+y=0$.", "B. $3x+4y-1=0$.", "C. $3x-4y+5=0$.", "D. $x+y-1=0$."],
            correctAnswer: "C"
        },
        {
            id: 1032, type: "multiple_choice",
            content: "Phương trình $\\sqrt{x-2}+\\sqrt{4-x}=x^2-6x+11$ có bao nhiêu nghiệm nguyên? <!--[cite: 99] -->",
            options: ["A. 3.", "B. 2.", "C. 1.", "D. 0."],
            correctAnswer: "C"
        },
        {
            id: 1033, type: "fill_blank",
            content: "Cho hàm số $f(x)$ có đạo hàm $f'(x)=-x^{2027}(x+1)^{2028}(2x+7)^{2029}, \\forall x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là <!--[cite: 100] -->",
            correctAnswer: "2"
        },
        {
            id: 1034, type: "multiple_choice",
            content: "Một cơ sở in ấn mua máy in với giá 100 triệu đồng. Trong 5 năm tiếp theo, mỗi năm giá trị máy in giảm 5% so với năm trước và từ năm thứ 6 trở đi, mỗi năm giá trị máy in giảm 10% so với năm trước. Sau 10 năm kể từ khi mua máy in, cơ sở đã thanh lí máy in bằng với giá trị của máy. Cơ sở in ấn đã thanh lí máy in với giá bao nhiêu? (Lấy kết quả gần nhất) <!--[cite: 100] -->",
            options: ["A. 50,2 triệu đồng.", "B. 46,9 triệu đồng.", "C. 49,5 triệu đồng.", "D. 45,7 triệu đồng."],
            correctAnswer: "D"
        },
        {
            id: 1035, type: "multiple_choice",
            content: "Số nghiệm phương trình $\\sin x \\cos\\left(2x+\\frac{\\pi}{6}\\right)-\\frac{1}{2}\\sin 2x=0$ trong khoảng $(0;\\pi]$ là <!--[cite: 100, 101] -->",
            options: ["A. 4.", "B. 1.", "C. 2.", "D. 3."],
            correctAnswer: "C"
        },
        {
            id: 1036, type: "multiple_choice",
            content: "Cho hàm số $y=x^3+\\frac{3}{2}(m+1)x^2+3(m+1)x+2022$. Tìm điều kiện của $m$ để hàm số không có cực trị? <!--[cite: 101] -->",
            options: ["A. $m < -1$ hoặc $m > 3$.", "B. $m \\le -1$ hoặc $m \\ge 3$.", "C. $m \\in (-1;3)$.", "D. $m \\in [-1;3]$."],
            correctAnswer: "D"
        },
        {
            id: 1037, type: "fill_blank",
            content: "Một khu rừng có trữ lượng gỗ là $8 \\cdot 10^6\\text{ (m}^3\\text{)}$. Giả sử tốc độ sinh trưởng của các cây ở khu rừng đó không đổi và bằng $3,05\\%$ mỗi năm và lượng gỗ thu được sau $n$ năm xác định bởi công thức $S_n=Ae^{nr}$ với $A$ là trữ lượng gỗ ban đầu, $r$ là tốc độ sinh trưởng của các cây trong khu rừng sau một năm. Sau 20 năm, khu rừng đó sẽ có trữ lượng gỗ là bao nhiêu triệu $\\text{m}^3$? Coi như rừng cây không bị khai thác và kết quả làm tròn đến hàng đơn vị. <!--[cite: 101] -->",
            correctAnswer: "15"
        },
        {
            id: 1038, type: "fill_blank",
            content: "Mái của một căn nhà nghiêng đều một góc $\\alpha$ so với mặt đất được minh họa như hình vẽ. Biết rằng nếu đặt trong không gian $Oxyz$ thì mặt đất nằm tương ứng với mặt phẳng $(Oxy)$, đoạn $AB$ là một cạnh của mái nhà với $A(2;-4;3)$ và $B(-3;1;4)$. Góc $\\alpha$ bằng bao nhiêu độ? (Kết quả làm tròn đến hàng đơn vị)<br><img src='https://i.postimg.cc/LXLLXdqP/C38.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><!-- -->",
            correctAnswer: "8"
        },
        {
            id: 1039, type: "fill_blank",
            content: "Gọi $S$ là tập nghiệm của phương trình $(2^{x^2-x}-4)\\sqrt{2-\\log_2 x}=0$. Số phần tử của $S$ là <!--[cite: 102] -->",
            correctAnswer: "2"
        },
        {
            id: 1040, type: "multiple_choice",
            content: "Cho hình chóp $S.ABCD$ đáy $ABCD$ là hình vuông cạnh bằng $a$; cạnh bên $SA$ vuông góc với đáy, góc giữa $SC$ và đáy bằng $45^\\circ$. Khoảng cách giữa hai đường thẳng $SC$ và $BD$ bằng? <!--[cite: 102, 103] -->",
            options: ["A. $\\frac{a}{2}$.", "B. $\\frac{3a}{2}$.", "C. $a$.", "D. $2a$."],
            correctAnswer: "A"
        },
        {
            id: 1041, type: "multiple_choice",
            content: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt đáy bằng $60^\\circ$. Tính diện tích xung quanh của hình nón đỉnh $S$, đáy là hình tròn ngoại tiếp tam giác $ABC$. <!--[cite: 103] -->",
            options: [
                "A. $\\frac{\\pi a^2\\sqrt{3}}{3}$.",
                "B. $\\frac{\\pi a^2\\sqrt{7}}{6}$.",
                "C. $\\frac{\\pi a^2\\sqrt{7}}{4}$.",
                "D. $\\frac{\\pi a^2\\sqrt{10}}{8}$."
            ],
            correctAnswer: "B"
        },
        {
            id: 1042, type: "fill_blank",
            content: "Từ các số $7, 8, 9$ lập được bao nhiêu số tự nhiên gồm 6 chữ số thỏa mãn đồng thời hai điều kiện sau: Mỗi chữ số xuất hiện đúng hai lần và hai chữ số giống nhau không đứng cạnh nhau? <!-- -->",
            correctAnswer: "76"
        },
        {
            id: 1043, type: "fill_blank",
            content: "Cho hàm số $y=f(x)$ có đồ thị hàm số $y=f'(x)$ trên đoạn $[-1;3]$ như hình vẽ sau:<br><img src='https://i.postimg.cc/5NxLxRfd/C43.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Giá trị của biểu thức $f(3)-f(-1)$ là <!--[cite: 104, 105] -->",
            correctAnswer: "6"
        },
        {
            id: 1044, type: "multiple_choice",
            content: "Trong không gian $Oxyz$, cho điểm $I(2;-3;1)$ và mặt phẳng $(P): 2x-y+2z-3=0$. Mặt cầu tâm $I$ và tiếp xúc với $(P)$ có phương trình là <!--[cite: 105] -->",
            options: [
                "A. $(x-2)^2+(y+3)^2+(z-1)^2=9$.",
                "B. $(x-2)^2+(y+3)^2+(z-1)^2=3$.",
                "C. $(x+2)^2+(y-3)^2+(z+1)^2=9$.",
                "D. $(x+2)^2+(y-3)^2+(z+1)^2=3$."
            ],
            correctAnswer: "A"
        },
        {
            id: 1045, type: "fill_blank",
            content: "Kết quả khảo sát 100 khán giả trường quay và cho điểm tiết mục biểu diễn X theo thang điểm 100 được thống kê dưới bảng sau đây:<br><table class='w-full text-center border-collapse border border-gray-300 mt-2 text-sm'><tr><th class='border border-gray-300 p-2'>Số điểm</th><td class='border border-gray-300 p-2'>[50;60)</td><td class='border border-gray-300 p-2'>[60;70)</td><td class='border border-gray-300 p-2'>[70;80)</td><td class='border border-gray-300 p-2'>[80;90)</td><td class='border border-gray-300 p-2'>[90;100)</td></tr><tr><th class='border border-gray-300 p-2'>Số người</th><td class='border border-gray-300 p-2'>3</td><td class='border border-gray-300 p-2'>25</td><td class='border border-gray-300 p-2'>32</td><td class='border border-gray-300 p-2'>18</td><td class='border border-gray-300 p-2'>22</td></tr></table><br>Phương sai của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (làm tròn đến hàng đơn vị) <!--[cite: 105] -->",
            correctAnswer: "133"
        },
        {
            id: 1046, type: "fill_blank",
            content: "Trong không gian $Oxyz$, cho ba điểm $A(1;-2;1), B(0;3;3), C(2;-1;5)$ và điểm $M$ thuộc mặt phẳng $(\\alpha): x+2y+2z+1=0$. Biểu thức $P=|2\\overrightarrow{MA}+5\\overrightarrow{MB}-\\overrightarrow{MC}|$ đạt giá trị nhỏ nhất bằng bao nhiêu? <!--[cite: 106] -->",
            correctAnswer: "18"
        },
        {
            id: 1047, type: "fill_blank",
            content: "Hình phẳng giới hạn bởi các đường $y=4+2x-x^2, y=x^2, x=-1, x=2$ có diện tích là bao nhiêu? <!--[cite: 106] -->",
            correctAnswer: "9"
        },
        {
            id: 1048, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$.<br><img src='https://i.postimg.cc/Z5nNNv9V/C48.png' class='mt-4 mb-4 w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-sm'><br>Góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ là góc <!-- -->",
            options: ["A. $\\widehat{CSA}$.", "B. $\\widehat{SCA}$.", "C. $\\widehat{CSB}$.", "D. $\\widehat{SCB}$."],
            correctAnswer: "C"
        },
        {
            id: 1049, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$. Giá trị $\\tan \\widehat{CSB}$ bằng bao nhiêu? <!--[cite: 107] -->",
            options: ["A. 0.", "B. $\\sqrt{3}$.", "C. $\\frac{\\sqrt{3}}{3}$.", "D. 1."],
            correctAnswer: "D"
        },
        {
            id: 1050, type: "multiple_choice",
            content: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), AB \\perp BC, SA=AB=a, AC=a\\sqrt{3}$. Góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ bằng <!--[cite: 107] -->",
            options: ["A. $30^\\circ$.", "B. $45^\\circ$.", "C. $60^\\circ$.", "D. $90^\\circ$."],
            correctAnswer: "B"
        }
    ],
    "hsa_van_01": [
        // --- CÂU 1 - 5: ĐỌC HIỂU VĂN BẢN 1 ---
        {
            id: 271810, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 1 đến 5:</b><br><i>“Một người tù cổ đeo gông, chân vướng xiềng, đang dậm tô nét chữ trên tấm lụa trắng tinh căng phẳng trên mảnh ván. Người tù viết xong một chữ, viên quản ngục lại vội khúm núm cất những đồng tiền kẽm đánh dấu ô chữ đặt trên phiến lụa óng. Và cái thầy thơ lại gầy gò, thì run run bưng chậu mực. Thay bút con, đề xong lạc khoản, ông Huấn Cao thở dài, buồn bã đỡ viên quản ngục đứng thẳng người dậy và đĩnh đạc bảo:<br>- Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi. Chỗ này không phải là nơi để treo một bức lụa trắng trẻo với những nét chữ vuông vắn tươi tắn nó nói lên những cái hoài bão tung hoành của một đời con người. Thoi mực, thầy mua ở đâu tốt và thơm quá. Thầy có thấy mùi thơm ở chậu mực bốc lên không?... Tôi bảo thực đấy: thầy Quản nên tìm về nhà quê mà ở đã, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ <u><b>thiên lương</b></u> cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi.”</i><br>(Nguyễn Tuân, <i>Chữ người tử tù</i>)<br><br><b>Câu 1:</b> Xét trong văn bản, từ nào sau đây được sử dụng với nghĩa chuyển?",
            options: ["A. Khúm núm.", "B. Đĩnh đạc.", "C. Buồn bã.", "D. Nhem nhuốc."],
            correctAnswer: "D"
        },
        {
            id: 271811, type: "multiple_choice",
            content: "<b>Câu 2:</b> Dòng nào sau đây giải thích đúng nghĩa của từ <u><b>thiên lương</b></u> (gạch chân, in đậm) trong đoạn trích ở Câu 1?",
            options: [
                "A. Sự tốt bụng của con người được hình thành trong quá trình sống.",
                "B. Lòng yêu và ham thích cái đẹp, cái cao quý của con người.",
                "C. Bản tính tốt đẹp của con người do trời phú mà có được.",
                "D. Đức tính hi sinh và sự nhẫn nhịn của con người trong cuộc sống."
            ],
            correctAnswer: "C"
        },
        {
            id: 271813, type: "multiple_choice",
            content: "<b>Câu 3:</b> Trong đoạn văn ở Câu 1, tác giả đã miêu tả nhân vật Huấn Cao gắn liền với",
            options: ["A. khí phách hiên ngang.", "B. tinh thần bất khuất.", "C. nhân cách cao đẹp.", "D. tài năng siêu việt."],
            correctAnswer: "C"
        },
        {
            id: 271812, type: "multiple_choice",
            content: "<b>Câu 4:</b> Bối cảnh giao tiếp hẹp xuất hiện trong văn bản ở Câu 1 là",
            options: [
                "A. nơi cung cấp nhiều quan lại nhũng nhiễu.",
                "B. nơi pháp trường khi kẻ tử tù vừa bị hành hình.",
                "C. đêm cuối cùng của kẻ tử tù ở trong nhà ngục.",
                "D. ngày đầu tiên của kẻ tử tù khi chuyển nhà ngục mới."
            ],
            correctAnswer: "C"
        },
        {
            id: 271814, type: "multiple_choice",
            content: "<b>Câu 5:</b> Dòng nào sau đây nói KHÔNG đúng về đặc sắc nghệ thuật trong đoạn văn ở Câu 1?",
            options: ["A. Thủ pháp nhân hóa.", "B. Nghệ thuật tương phản.", "C. Bút pháp lãng mạn.", "D. Nghệ thuật miêu tả."],
            correctAnswer: "A"
        },

        // --- CÂU 6 - 10: ĐỌC HIỂU VĂN BẢN 2 ---
        {
            id: 271815, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 6 đến 10:</b><br><i>“Gió theo lối gió, mây đường mây,<br>Dòng nước buồn thiu, hoa bắp lay...<br>Thuyền ai đậu bến <u><b>sông Trăng</b></u> đó,<br>Có chở trăng về kịp tối nay?<br><br>Mơ khách đường xa, khách đường xa<br>Áo em trắng quá nhìn không ra...<br>Ở đây sương khói mờ nhân ảnh<br>Ai biết tình ai có đậm đà?”</i><br>(Hàn Mặc Tử, <i>Đây thôn Vĩ Dạ</i>, Ngữ văn 11, tập hai, NXB Giáo dục Việt Nam, 2017)<br><br><b>Câu 6:</b> Phương thức biểu đạt chính được sử dụng trong văn bản là",
            options: ["A. tự sự.", "B. biểu cảm.", "C. nghị luận.", "D. thuyết minh."],
            correctAnswer: "B"
        },
        {
            id: 271817, type: "multiple_choice",
            content: "<b>Câu 7:</b> Đâu là cách hiểu đúng của câu thơ: <i>“Gió theo lối gió, mây đường mây”</i>?",
            options: [
                "A. Thiên nhiên liên tục vận động theo quy luật của vũ trụ.",
                "B. Thiên nhiên quấn quýt, gắn bó không thể tách rời.",
                "C. Hình ảnh thiên nhiên gắn với sự tan tác, chia lìa.",
                "D. Sự thanh nhã, lãng mạn của đời sống thiên nhiên."
            ],
            correctAnswer: "C"
        },
        {
            id: 271818, type: "multiple_choice",
            content: "<b>Câu 8:</b> Từ <u><b>sông Trăng</b></u> (gạch chân, in đậm) trong đoạn trích ở Câu 6, được hiểu là",
            options: [
                "A. dòng sông được người dân đặt tên là “Trăng” vì vẻ đẹp thuần khiết.",
                "B. con sông ở tỉnh Sóc Trăng – nơi tác giả sinh sống và chữa bệnh.",
                "C. ánh sáng của mặt trăng chiếu xuống dòng sông vô cùng lấp lánh.",
                "D. tác giả thấy mặt trăng xuất hiện nhiều như thể có cả một dòng sông."
            ],
            correctAnswer: "C"
        },
        {
            id: 271816, type: "multiple_choice",
            content: "<b>Câu 9:</b> Việc sử dụng đại từ “ai” trong đoạn thơ ở Câu 6 có ý nghĩa:",
            options: ["A. thể hiện sự mơ hồ.", "B. thể hiện sự hoài nghi.", "C. thể hiện sự chán nản.", "D. thể hiện sự lãng quên."],
            correctAnswer: "A"
        },
        {
            id: 271819, type: "multiple_choice",
            content: "<b>Câu 10:</b> Biện pháp tu từ nào được sử dụng trong câu thơ <i>“Mơ khách đường xa, khách đường xa”</i>?",
            options: ["A. Điệp từ.", "B. Điệp ngữ.", "C. Nhân hóa.", "D. Hoán dụ."],
            correctAnswer: "B"
        },

        // --- CÂU 11 - 15: ĐỌC HIỂU VĂN BẢN 3 ---
        {
            id: 271820, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 11 đến 15:</b><br>(1) <i>“Văn hóa ứng xử từ lâu đã trở thành chuẩn mực trong việc đánh giá nhân cách con người. Cảm ơn là một trong các biểu hiện của ứng xử có văn hóa. Ở ta, từ cảm ơn được nghe rất nhiều trong các cuộc họp: cảm ơn sự có mặt của quý vị đại biểu, cảm ơn sự chú ý của mọi người... Nhưng đó chỉ là những lời khô cứng, ít cảm xúc. Chỉ có lời cảm ơn <u><b>chân thành</b></u>, xuất phát từ đáy lòng, từ sự tôn trọng nhau bất kể trên dưới mới thực sự là điều cần có cho một xã hội văn minh. Người ta có thể cảm ơn vì những chuyện rất nhỏ như được nhường vào cửa trước, được chỉ đường khi hỏi... Ấy là chưa kể đến những chuyện lớn lao như cảm ơn người đã cứu mạng mình, người đã chìa tay giúp đỡ mình trong cơn hoạn nạn... Những lúc đó, lời cảm ơn còn có nghĩa là đội ơn.</i><br>(2) <i>Còn một từ nữa cũng thông dụng không kém ở các xứ sở văn minh là \"Xin lỗi\". Ở những nơi công cộng, người ta hết sức tránh chen lấn, va chạm nhau. Nếu có ai đó vô ý khẽ chạm vào người khác, lập tức từ xin lỗi được bật ra hết sức tự nhiên. Từ xin lỗi còn được dùng cả khi không có lỗi. Xin lỗi khi xin phép nhường đường, xin lỗi trước khi dừng ai đó lại hỏi đường hay nhờ bấm hộ một kiểu ảnh. Tóm lại, khi biết mình có thể làm phiền đến người khác dù rất nhỏ, người ta cũng đều xin lỗi. Hiển nhiên, xin lỗi còn được thốt ra trong những lúc người nói cảm thấy mình thực sự có lỗi. Từ xin lỗi ở đây đi kèm với một tâm trạng hối lỗi, mong được tha thứ hơn là một cử chỉ văn minh thông thường. Đôi khi, lời xin lỗi được nói ra đúng nơi, đúng lúc còn có thể xóa bỏ biết bao mặc cảm, thù hận, đau khổ... Người có lỗi mà không biết nhận lỗi là có lỗi lớn nhất. Xem ra sức mạnh của từ xin lỗi còn lớn hơn cảm ơn.</i><br>(3) <i>Nếu toa thuốc cảm ơn có thể trị bệnh khiếm nhã, vô ơn, ích kỷ thì toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác. Vì thế, hãy để cảm ơn và xin lỗi trở thành hai từ thông dụng trong ngôn ngữ hàng ngày của chúng ta.”</i><br>(Sưu tầm)<br><br><b>Câu 11:</b> Chủ đề của đoạn trích trên là gì?",
            options: [
                "A. Ý nghĩa của lời cảm ơn trong cuộc sống thường ngày.",
                "B. Văn hóa nước ta trong sự so sánh với thế giới.",
                "C. Lời xin lỗi và cách hành xử văn minh của con người.",
                "D. Văn hóa ứng xử của con người trong đời sống."
            ],
            correctAnswer: "D"
        },
        {
            id: 271821, type: "multiple_choice",
            content: "<b>Câu 12:</b> Theo đoạn trích ở Câu 11, lời cảm ơn nên được dùng khi nào?",
            options: [
                "A. Trong các cuộc họp có nhiều người quan trọng.",
                "B. Trong những tình huống nghiêm trọng.",
                "C. Trong những chuyện nhỏ nhặt hàng ngày.",
                "D. Trong mọi tình huống cần thiết của cuộc sống."
            ],
            correctAnswer: "D"
        },
        {
            id: 271824, type: "multiple_choice",
            content: "<b>Câu 13:</b> Đoạn văn ở Câu 11 sử dụng phương thức biểu đạt chính nào?",
            options: ["A. Tự sự.", "B. Thuyết minh.", "C. Giải thích.", "D. Nghị luận."],
            correctAnswer: "D"
        },
        {
            id: 271822, type: "multiple_choice",
            content: "<b>Câu 14:</b> Tác giả khẳng định: <i>“toa thuốc xin lỗi có thể trị được bệnh tự cao tự đại, coi thường người khác.”</i> vì sao?",
            options: [
                "A. Vì lời xin lỗi sẽ giúp ta biết nhận ra khuyết điểm, sửa lỗi để hoàn thiện bản thân.",
                "B. Vì khi nói lời xin lỗi sẽ khiến cuộc giao tiếp diễn ra suôn sẻ, bớt căng thẳng hơn.",
                "C. Vì nói lời xin lỗi sẽ giúp cho chúng ta nhận ra được những hạn chế của bản thân.",
                "D. Vì lời xin lỗi sẽ làm cho đối phương cảm thấy mình được kính nể và tôn trọng."
            ],
            correctAnswer: "A"
        },
        {
            id: 271823, type: "multiple_choice",
            content: "<b>Câu 15:</b> Từ <u><b>chân thành</b></u> (in đậm, gạch chân) trong đoạn trích ở Câu 11 gần nghĩa hơn cả với từ nào sau đây?",
            options: ["A. Thành thục.", "B. Thân thiết.", "C. Thành tâm.", "D. Thiết thực."],
            correctAnswer: "C"
        },

        // --- CÂU 16 - 20: ĐỌC HIỂU VĂN BẢN 4 ---
        {
            id: 271829, type: "multiple_choice",
            content: "<b>Đọc đoạn trích sau và trả lời các câu hỏi từ 16 đến 20:</b><br><i>“Sự ngưng tụ hơi nước là quá trình hơi nước trong không khí được chuyển sang thể nước lỏng. Ngưng tụ hơi nước rất quan trọng đối với chu trình tuần hoàn nước bởi vì nó hình thành nên các đám mây. Những đám mây này có thể tạo ra mưa, nó là cách chính để nước quay trở lại Trái Đất. Ngưng tụ hơi nước là quá trình ngược với bốc hơi nước. Sự ngưng tụ hơi nước cũng là nguyên nhân của hiện tượng sương, hoặc nước trên mắt kính của bạn khi bạn từ một phòng lạnh đi ra ngoài trong một ngày nóng, ẩm ướt, còn trong một ngày lạnh nước có thể nhỏ giọt bên ngoài cốc uống nước của bạn hay có nước ở phía bên trong cửa sổ ngôi nhà bạn.<br>Thậm chí trên những bầu trời trong xanh không một gợn mây, thì nước vẫn tồn tại dưới hình thức hơi nước và những giọt nước li ti không thể nhìn thấy được. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi, muối, khói trong khí quyển để hình thành nên các hạt nhân mây (giọt mây nhỏ, đám mây nhỏ), nó gia tăng khối lượng và phát triển thành những đám mây. Khi những giọt nước kết hợp với nhau, gia tăng về kích thước, những đám mây có thể phát triển và mưa có thể xảy ra. Các đám mây hình thành trong khí quyển do không khí chứa hơi nước bốc lên cao và lạnh đi. Phần quan trọng của quá trình này là không khí sát mặt đất ấm lên do bức xạ mặt trời. Nguyên nhân lớp khí quyển phía bên trên mặt đất lạnh đi là do áp lực không khí. Không khí có trọng lượng và tại mực nước biển trọng lượng của một cột không khí nén xuống trên đầu bạn khoảng 32kg trên mỗi inch vuông, áp lực này, được gọi là khí áp, nó là kết quả của mật độ không khí trong cột không khí phía trên. Càng lên cao càng ít không khí phía bên trên, và vì thế càng ít áp lực. Khí áp thấp hơn và mật độ không khí giảm theo độ cao. Điều này làm cho không khí trở nên lạnh hơn.”</i><br>(Theo Gleick, <i>Tài nguyên nước, Bách khoa từ điển về khí hậu và thời tiết</i>, NXB Đại học Oxford, New York, quyển 2, trang 817-823)<br><br><b>Câu 16:</b> Xác định phong cách ngôn ngữ của đoạn trích.",
            options: ["A. Khoa học.", "B. Nghệ thuật.", "C. Chính luận.", "D. Sinh hoạt."],
            correctAnswer: "A"
        },
        {
            id: 271825, type: "multiple_choice",
            content: "<b>Câu 17:</b> Theo tác giả, quá trình hơi nước trong không khí được chuyển sang thể nước lỏng được gọi là gì?",
            options: [
                "A. Bản chất của hạt mưa rơi.",
                "B. Nguyên nhân nước bốc hơi.",
                "C. Hiện tượng xuất hiện sương.",
                "D. Sự ngưng tụ hơi nước."
            ],
            correctAnswer: "D"
        },
        {
            id: 271828, type: "multiple_choice",
            content: "<b>Câu 18:</b> Theo đoạn trích ở Câu 16, khi có áp lực không khí sẽ dẫn tới điều gì sau đây?",
            options: [
                "A. Những giọt nước li ti không nhìn thấy được.",
                "B. Những đám mây mỏng có thể tạo ra mưa.",
                "C. Lớp khí quyển phía bên trên mặt đất lạnh đi.",
                "D. Xuất hiện sương mù dày đặc trên mặt đất."
            ],
            correctAnswer: "C"
        },
        {
            id: 271826, type: "multiple_choice",
            content: "<b>Câu 19:</b> Thông tin nào KHÔNG được nhắc tới trong đoạn văn thứ hai của ngữ liệu ở Câu 16?",
            options: [
                "A. Lớp khí quyển phía bên trên mặt đất lạnh đi và tác động bức xạ đến mặt trời.",
                "B. Khi các hạt nhân mây (giọt mây nhỏ và đám mây nhỏ) gia tăng khối lượng.",
                "C. Những phân tử nước kết hợp với những phân tử nhỏ bé của bụi trong khí quyển.",
                "D. Những phân tử nhỏ bé của khói trong khí quyển kết hợp với các phân tử nước."
            ],
            correctAnswer: "A"
        },
        {
            id: 271827, type: "multiple_choice",
            content: "<b>Câu 20:</b> Đoạn trích ở Câu 16 bàn về vấn đề gì?",
            options: [
                "A. Nguyên nhân xuất hiện lớp khí quyển.",
                "B. Sự vận động của những giọt nước li ti.",
                "C. Nguyên nhân xuất hiện hạt phân tử nước.",
                "D. Sự ngưng tụ hơi nước trong không khí."
            ],
            correctAnswer: "D"
        },

        // --- CÂU 21 - 25: TÌM LỖI SAI ---
        {
            id: 183816, type: "multiple_choice",
            content: "<b>Câu 21:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Đang trên ghế giảng đường, song nhiều bạn trẻ đã rất năng động, tự tìm tòi việc làm, mang về thu nhập hàng chục triệu đồng.</i>",
            options: ["A. Đang.", "B. song.", "C. tìm tòi.", "D. thu nhập."],
            correctAnswer: "C"
        },
        {
            id: 183817, type: "multiple_choice",
            content: "<b>Câu 22:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Với tỉ lệ 92,79% đại biểu có mặt tán thành, Quốc hội thông qua Nghị quyết thí điểm một số cơ chế, chính sách đặc thù phát triển thành phố Cần Thơ, với nhiều chính sách được ban hành ngay lập tức.</i>",
            options: ["A. tán thành.", "B. thí điểm.", "C. đặc thù.", "D. ngay lập tức."],
            correctAnswer: "D"
        },
        {
            id: 183818, type: "multiple_choice",
            content: "<b>Câu 23:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Trong sự chuyển mình của Hà Nội, có những cái tưởng như được thêm vào, và thực chất lại là mất đi một cách rất đáng tiếc.</i>",
            options: ["A. chuyển mình.", "B. cái.", "C. và.", "D. rất đáng tiếc."],
            correctAnswer: "C"
        },
        {
            id: 183819, type: "multiple_choice",
            content: "<b>Câu 24:</b> Xác định một từ/cụm từ SAI về ngữ pháp/ngữ nghĩa/logic/phong cách.<br><i>Bài thơ “Từ ấy” là lời tâm nguyện của người thanh niên yêu nước giác ngộ lý tưởng cách mạng. Sự vận động của tâm trạng nhà thơ được thể hiện linh động bằng những hình ảnh tươi sáng, các biện pháp tu từ và ngôn ngữ giàu nhạc điệu.</i>",
            options: ["A. tâm nguyện.", "B. giác ngộ.", "C. linh động.", "D. ngôn ngữ."],
            correctAnswer: "C"
        },
        {
            id: 183820, type: "multiple_choice",
            content: "<b>Câu 25:</b> Xác định một từ/cụm từ SAI về ngữ pháp/hoặc ngữ nghĩa/logic/phong cách.<br><i>Trong thời đại khoa học công nghệ phát triển làm mưa làm gió và sự xuất hiện của cuộc cách mạng công nghiệp lần thứ tư thì đổi mới giáo dục đào tạo không chỉ trở nên quan trọng mà còn bức thiết hơn bao giờ hết, có ý nghĩa quyết định tương lai của mỗi dân tộc, mỗi quốc gia.</i>",
            options: ["A. khoa học công nghệ.", "B. làm mưa làm gió.", "C. cách mạng công nghiệp.", "D. quyết định tương lai."],
            correctAnswer: "B"
        },

        // --- CÂU 26 - 28: TÌM TỪ KHÁC NHÓM ---
        {
            id: 183821, type: "multiple_choice",
            content: "<b>Câu 26:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. xanh xao.", "B. trắng bệch.", "C. vàng vọt.", "D. đỏ rực."],
            correctAnswer: "D"
        },
        {
            id: 183822, type: "multiple_choice",
            content: "<b>Câu 27:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. đùm bọc.", "B. cứu trợ.", "C. cứu giúp.", "D. ủng hộ."],
            correctAnswer: "D"
        },
        {
            id: 183823, type: "multiple_choice",
            content: "<b>Câu 28:</b> Chọn một từ mà cấu tạo/ý nghĩa của nó KHÔNG cùng nhóm với các từ còn lại.",
            options: ["A. cao.", "B. thấp.", "C. nông.", "D. dài."],
            correctAnswer: "C"
        },

        // --- CÂU 29 - 33: ĐIỀN TỪ VÀO CHỖ TRỐNG ---
        {
            id: 183826, type: "multiple_choice",
            content: "<b>Câu 29:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Mặt Trời điều khiển vòng tuần hoàn nước _____ việc làm nóng nước trên những đại dương, làm bốc hơi nước _____ trong không khí.</i>",
            options: ["A. bằng/ lên.", "B. bằng/ vào.", "C. từ/ lên.", "D. bằng/ trên."],
            correctAnswer: "B"
        },
        {
            id: 183827, type: "multiple_choice",
            content: "<b>Câu 30:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Nếu học sinh được phép học trực tiếp, các nhà trường _____ làm tốt công tác phòng chống dịch, tận dụng tối đa thời gian để ôn tập, củng cố nội dung còn khiếm khuyết _____ học sinh học trực tuyến.</i>",
            options: ["A. cần/ khi.", "B. đã/ khi.", "C. đã/ lúc.", "D. cần/ nhưng."],
            correctAnswer: "A"
        },
        {
            id: 183828, type: "multiple_choice",
            content: "<b>Câu 31:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Đô thị hóa _____ sự phát triển riêng của một đô thị về quy mô và số lượng dân số, mà còn gắn liền với những biến đổi về kinh tế - xã hội _____ môi trường thiên nhiên của một hệ thống đô thị.</i>",
            options: ["A. không chỉ là/ và.", "B. không chỉ/ cùng.", "C. chính là/ và.", "D. chính là/ cùng."],
            correctAnswer: "A"
        },
        {
            id: 183829, type: "multiple_choice",
            content: "<b>Câu 32:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>Theo báo cáo được UNICEF _____ ngày 11/12/2006, trong vòng nhiều năm qua, Việt Nam luôn dẫn đầu khu vực châu Á – Thái Bình Dương về các chỉ số bình đẳng giới.</i>",
            options: ["A. giới thiệu.", "B. truyền ra.", "C. tiết lộ.", "D. công bố."],
            correctAnswer: "D"
        },
        {
            id: 183830, type: "multiple_choice",
            content: "<b>Câu 33:</b> Chọn từ/cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây:<br><i>_____ văn học biểu hiện trước hết ở cách nhìn, cách cảm thụ có tính chất khám phá, ở giọng điệu riêng biệt của tác giả.</i>",
            options: ["A. Quá trình.", "B. Giai đoạn.", "C. Phong cách.", "D. Trào lưu."],
            correctAnswer: "C"
        },

        // --- CÂU 34 - 43: ĐỌC HIỂU ĐOẠN TRÍCH NGẮN ---
        {
            id: 183831, type: "multiple_choice",
            content: "<b>Câu 34:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Thấy hắn toan làm dữ, cụ đành dịu giọng:<br>- Thôi, cầm lấy vậy, tôi không còn hơn.<br>Hắn vênh cái mặt lên, rất là kiêu ngạo:<br>- Tao đã bảo tao không đòi tiền.<br>- Giỏi! Hôm nay mới thấy anh không đòi tiền. Thế thì anh cần gì?<br>Hắn dõng dạc:<br>- Tao muốn làm người lương thiện.<br>Bá Kiến cười ha hả:<br>- Ô tưởng gì! Tôi chỉ cần anh lương thiện cho thiên hạ nhờ.”</i><br>(Nam Cao, <i>Chí Phèo</i>, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)<br><br>Nét nổi bật nhất về nghệ thuật của đoạn trích là gì?",
            options: [
                "A. Từ ngữ giàu tính tạo hình.",
                "B. Lựa chọn chi tiết đặc sắc.",
                "C. Phân tích tâm lí nhân vật.",
                "D. Ngôn ngữ đối thoại sinh động."
            ],
            correctAnswer: "D"
        },
        {
            id: 183832, type: "multiple_choice",
            content: "<b>Câu 35:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Theo các nhà nghiên cứu, Omicron gắn chặt hơn vào các tế bào và chống lại được một số kháng thể. Mô hình cấu trúc về cách thức Omicron gắn vào tế bào và kháng thể giúp làm rõ phương thức hoạt động của biến thể này, cũng như tạo ra được các kháng thể trung hòa. Các nhà nghiên cứu ví von biến thể Omicron có cấu tạo giống như “hai đôi bàn tay đan vào nhau”. Bằng cách sử dụng các mô hình máy tính để tìm hiểu về protein đột biến trên bề mặt biến thể Omicron, các nhà nghiên cứu tiến hành phân tích được các tương tác phân tử diễn ra khi một đột biến này bám vào một protein bề mặt tế bào được gọi là thụ thể ACE2 - vốn được coi là “cửa ngõ” để virus xâm nhập vào tế bào, nhằm giúp hiểu rõ cách thức các đột biến của Omicron liên kết với nhau để làm lây nhiễm sang các tế bào.”</i><br>(Cổng thông tin điện tử Bộ Y Tế (MOH))<br><br>Phong cách ngôn ngữ của đoạn trích là gì?",
            options: ["A. Khoa học.", "B. Chính luận.", "C. Nghệ thuật.", "D. Sinh hoạt."],
            correctAnswer: "A"
        },
        {
            id: 183833, type: "multiple_choice",
            content: "<b>Câu 36:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>(1) “Tràn trề trên mặt bàn, chạm cả vào cành quất Lí cố tình để sát vào mâm cỗ cho bữa ăn thêm đẹp, thêm sang, là la liệt bát đĩa ngồn ngộn các món ăn. (2) Ngoài các món thường thấy ở cỗ Tết như gà luộc, giò, chả, nem, măng hầm chân giò, miến nấu lòng gà, xúp lơ xào thịt bò... – món nào cũng mang dấu ấn tài hoa của người chế biến – là các món khác thường như gà quay ướp húng lìu, vịt tần hạt sen, chả chìa, mọc, vây...”</i><br>(Ma Văn Kháng, <i>Mùa lá rụng trong vườn</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2008)<br><br>Xác định tác dụng của dấu gạch ngang (–) trong câu (2).",
            options: [
                "A. Đánh dấu lời nói trực tiếp của nhân vật.",
                "B. Để chỉ sự ngang hàng trong quan hệ.",
                "C. Đánh dấu bộ phận chú thích, giải thích.",
                "D. Nối các từ nằm trong một liên danh."
            ],
            correctAnswer: "C"
        },
        {
            id: 183834, type: "multiple_choice",
            content: "<b>Câu 37:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Con gặp lại nhân dân như nai về suối cũ<br>Cỏ đón giêng hai, chim én gặp mùa,<br>Như đứa trẻ thơ đói lòng gặp sữa<br>Chiếc nôi ngừng bỗng gặp cánh tay đưa.”</i><br>(Chế Lan Viên, <i>Tiếng hát con tàu</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)<br><br>Biện pháp tu từ nghệ thuật nào được sử dụng trong câu thơ: <i>“Con gặp lại nhân dân như nai về suối cũ”</i>?",
            options: ["A. So sánh.", "B. Nhân hóa.", "C. Đảo ngữ.", "D. Hoán dụ."],
            correctAnswer: "A"
        },
        {
            id: 183835, type: "multiple_choice",
            content: "<b>Câu 38:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Cô Hiền bên ngoại, chị Đại bên nội là những người đàn bà có đầu óc rất thực tế. Mọi sự mọi việc đều được các bà tính toán trước cả. Và luôn luôn tính đúng vì không có lòng tự ái, sự ganh đua, thói thời thượng chen vô. Không có cả sự lãng mạn hay mộng mơ vớ vẩn. Đã tính là làm, đã làm là không thèm để ý đến những đàm tiếu của thiên hạ. Cô tuyên bố thẳng thừng với tôi: “Một đời tao chưa từng bị ai cám dỗ, kể cả chế độ.””</i><br>(Nguyễn Khải, <i>Một người Hà Nội</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)<br><br>Đoạn trích thể hiện tính cách nổi bật nào của nhân vật cô Hiền?",
            options: [
                "A. Kín đáo, tế nhị.",
                "B. Chăm chỉ, chịu khó.",
                "C. Ngay thẳng, thật thà.",
                "D. Giỏi giang, bản lĩnh."
            ],
            correctAnswer: "D"
        },
        {
            id: 183836, type: "multiple_choice",
            content: "<b>Câu 39:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Bà lão khẽ dặng hắng một tiếng, nhẹ nhàng nói với “nàng dâu mới”:<br>- Ừ, thôi thì các con đã phải duyên phải kiếp với nhau, u cũng mừng lòng...<br>Tràng <u><b>thở đánh phào một cái</b></u>, ngực nhẹ hẳn đi. Hắn ho khẽ một tiếng, bước từng bước dài ra sân.”</i><br>(Kim Lân, <i>Vợ nhặt</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)<br><br>Cụm từ <u><b>thở đánh phào một cái</b></u> (gạch chân, in đậm) trong đoạn trích trên thể hiện tâm trạng gì của nhân vật Tràng?",
            options: [
                "A. Chán nản vì người mẹ đã nói quá nhiều về mình.",
                "B. Buồn bã vì người vợ mới không được như ý mình.",
                "C. Vui mừng vì mẹ đã chấp nhận người vợ của mình.",
                "D. Sợ hãi khi mẹ nói về hoàn cảnh gia đình của mình."
            ],
            correctAnswer: "C"
        },
        {
            id: 183837, type: "multiple_choice",
            content: "<b>Câu 40:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Con sóng dưới lòng sâu<br>Con sóng trên mặt nước<br>Ôi con sóng nhớ bờ<br>Ngày đêm không ngủ được<br>Lòng em nhớ đến anh<br>Cả trong mơ còn thức”</i><br>(Xuân Quỳnh, <i>Sóng</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2021)<br><br>Những trạng thái của \"sóng\" trong đoạn trích trên thể hiện điều gì dưới đây?",
            options: [
                "A. Một trái tim rạo rực, khao khát được yêu thương.",
                "B. Nỗi trăn trở của người phụ nữ trong tình yêu.",
                "C. Khát vọng muốn bất tử hóa tình yêu của tác giả.",
                "D. Nỗi nhớ trong tình yêu của người phụ nữ."
            ],
            correctAnswer: "D"
        },
        {
            id: 183838, type: "multiple_choice",
            content: "<b>Câu 41:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Nhưng bây giờ thì hắn tỉnh. Hắn bâng khuâng như tỉnh dậy sau một cơn say rất dài. Cũng như những người say tỉnh dậy, hắn thấy miệng đắng, lòng mơ hồ buồn. Người thì bủn rủn, chân tay không buồn nhấc. Hay là đói rượu? <u><b>Nghĩ đến rượu, hắn hơi rùng mình.</b></u> Ruột gan lại nôn nao lên một tí. Hắn sợ rượu cũng như những người ốm thường sợ cơm. Tiếng chim hót ngoài kia vui vẻ quá! Có tiếng cười nói của những người đi chợ. Anh thuyền chài gõ mái chèo đuổi cá. Những tiếng quen thuộc ấy hôm nào chả có. Nhưng hôm nay hắn mới nghe thấy... Chao ôi là buồn!”</i><br>(Nam Cao, <i>Chí Phèo</i>, Ngữ văn 11, tập một, NXB Giáo dục Việt Nam, 2014)<br><br>Câu <u><b>Nghĩ đến rượu, hắn hơi rùng mình.</b></u> (gạch chân, in đậm) trong đoạn trích đã diễn tả:",
            options: [
                "A. “Hắn” bỗng nhiên cảm thấy rượu hôm qua không ngon như mọi khi.",
                "B. Nhân vật “hắn” lo sợ về bệnh tật kéo đến ở tuổi già.",
                "C. Báo hiệu một chuyển biến trong con người nhân vật.",
                "D. Cơn say trước kéo dài khiến “hắn” cảm thấy mệt."
            ],
            correctAnswer: "C"
        },
        {
            id: 183839, type: "multiple_choice",
            content: "<b>Câu 42:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Bác nhớ miền Nam, nỗi nhớ nhà<br>Miền Nam mong Bác, nỗi mong cha.”</i><br>(Tố Hữu, <i>Bác ơi!</i>, Ngữ văn 12, tập một, NXB Giáo dục Việt Nam, 2019)<br><br>Biện pháp tu từ nào được sử dụng trong câu thơ trên?",
            options: ["A. Nhân hóa.", "B. Hoán dụ.", "C. Nói quá.", "D. Liệt kê."],
            correctAnswer: "B"
        },
        {
            id: 183840, type: "multiple_choice",
            content: "<b>Câu 43:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Em ơi em Đất Nước là máu xương của mình<br>Phải biết gắn bó san sẻ<br>Phải biết hóa thân cho dáng hình xứ sở<br>Làm nên Đất Nước muôn đời...”</i><br>(Nguyễn Khoa Điềm, <i>Đất Nước</i> - trích trường ca <i>Mặt đường khát vọng</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2014)<br><br>Giọng điệu chủ đạo của toàn bộ đoạn trích trên là gì?",
            options: [
                "A. Ngọt ngào, say đắm.",
                "B. Thiết tha, bồi hồi.",
                "C. Hạnh phúc, tự hào.",
                "D. Lưu luyến, bịn rịn."
            ],
            correctAnswer: "A"
        },

        // --- CÂU 44 - 48: ĐỌC HIỂU VĂN BẢN 5 ---
        {
            id: 82775, type: "multiple_choice",
            content: "<b>Đọc văn bản sau và trả lời các câu hỏi từ 44 đến 48:</b><br><i>“Người đàn bà nhận ra được tôi ngay. Mụ nhấp nhổm xoay mình trên chiếc ghế như bị kiến đốt, và về sau tôi mới sực nghĩ ra, mụ nghĩ rằng tòa án đã bố trí sẵn tôi ngồi phía sau để chuẩn bị làm nhân chứng.<br>- Chị cứ ngồi nguyên đấy! - Đẩu nói với vẻ mặt đầy hào hứng của một con người bảo vệ công lí vừa có thêm người đến tiếp viện, anh chạy sang phòng bên xách một chiếc ghế cho tôi. Bấy giờ, dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi, với mấy vết thương đã lên da non nhưng vẫn để lại dấu vết trên mặt.<br>- Tùy bà! - Đẩu thay đổi cách xưng hô, khoác lên mình cái cung cách bề ngoài của một vị chánh án - chủ trương nguyên tắc của chúng tôi là kêu gọi hòa thuận...<br>Đang ngồi cúi gục xuống, người đàn bà bỗng ngẩng lên nhìn thẳng vào chúng tôi, lần lượt từng người một, với một vẻ ban đầu hơi ngơ ngác.<br>- Chị cảm ơn các chú! – Người đàn bà đột nhiên thốt lên bằng một giọng khẩn thiết – Đây là chị nói thành thực, chị cảm ơn các chú. Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ, khó nhọc...<br>Chỉ mấy lời mào đầu ấy, người đàn bà đã mất hết cái vẻ ngoài khúm núm, sợ sệt. Điệu bộ khác, ngôn ngữ khác.<br>Cũng phải nói thật, những lời ấy, nhất là đấy lại là lời một người đàn bà khốn khổ, không phải dễ nghe đối với chúng tôi. Dẫu mặt hãy còn trẻ, Đẩu cũng là một chánh án huyện. Còn tôi, một người đáng lẽ mụ phải biết ơn...”</i><br>(Nguyễn Minh Châu, <i>Chiếc thuyền ngoài xa</i>, Ngữ văn 12, tập hai, NXB Giáo dục Việt Nam, 2018)<br><br><b>Câu 44:</b> Vì sao tác giả lại nói <i>“dưới con mắt của người đàn bà hàng chài, vị chánh án không phải là Đẩu đã trở về ngồi sau chiếc bàn lớn mà là tôi”</i>?",
            options: [
                "A. Đẩu là chánh án của huyện nhưng người kể chuyện ở đây (nhân vật xưng “tôi”) mới thực sự tham gia xét xử vụ án này.",
                "B. Người đàn bà sợ cái uy của nhân vật xưng “tôi” hơn là sự kiểu cách trong lời lẽ của Đẩu – vị chánh án huyện.",
                "C. Người kể chuyện (nhân vật xưng “tôi”) đã chứng kiến và biết rõ sự thật mà người đàn bà đang cố tình muốn giấu.",
                "D. Người đàn bà thấy được phiên tòa đã có đầy đủ các thành viên và đặc biệt là sự xuất hiện của nhân chứng."
            ],
            correctAnswer: "C"
        },
        {
            id: 82771, type: "multiple_choice",
            content: "<b>Câu 45:</b> Đâu là nhận định đúng về hoàn cảnh của \"người đàn bà\" trong đoạn trích ở Câu 44?",
            options: [
                "A. Người phụ nữ vô cùng bất hạnh vì liên tục bị chồng mình đánh đập.",
                "B. Người đàn bà có cuộc sống nghèo khổ, quanh năm làm lụng vất vả.",
                "C. Người đàn bà hạnh phúc vì đã sinh được nhiều đứa con trai thông minh.",
                "D. Người phụ nữ xấu xí và ế chồng nên đã phải chấp nhận sống trên thuyền."
            ],
            correctAnswer: "B"
        },
        {
            id: 82772, type: "multiple_choice",
            content: "<b>Câu 46:</b> Đâu là cách giải thích hợp lý cho sự thay đổi thái độ của nhân vật Đẩu trong đoạn trích ở Câu 44?",
            options: [
                "A. Đẩu cảm thấy chán nản với câu chuyện của người đàn bà nên muốn bà ta nhanh chóng rời đi.",
                "B. Đẩu cảm thấy mình ở vị trí cao hơn nên không cần thiết phải tỏ ra vui vẻ, nồng nhiệt với người đàn bà.",
                "C. Đẩu thấy trong phòng đã có thêm người ủng hộ mình nên không còn lo lắng về người phụ nữ trước mặt.",
                "D. Đẩu muốn dùng cung cách vị chánh án để người đàn bà nhận thức được toàn bộ các vấn đề trong câu chuyện mà họ đã nói."
            ],
            correctAnswer: "D"
        },
        {
            id: 82773, type: "multiple_choice",
            content: "<b>Câu 47:</b> Câu nói của người phụ nữ: <i>“Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn...”</i> tương đồng về ý nghĩa với câu nào sau đây?",
            options: [
                "A. Con người ta muốn sống tốt thì cần có một công việc đàng hoàng.",
                "B. Trong cuộc sống, không thể chủ quan trong việc đánh giá một con người.",
                "C. Cuộc sống có nhiều điều phức tạp, không thể chỉ đánh giá, nhìn nhận một chiều.",
                "D. Người tốt thì thường gặp những trở ngại rất lớn trong việc làm kinh tế."
            ],
            correctAnswer: "C"
        },
        {
            id: 82774, type: "multiple_choice",
            content: "<b>Câu 48:</b> Trong đoạn trích ở Câu 44, tác giả đã có tâm trạng như thế nào?",
            options: [
                "A. Sung sướng vì mình đã bảo vệ được công lý khi làm chứng cho người đàn bà.",
                "B. Cảm thấy khó hiểu trong cách hành xử và suy nghĩ của người đàn bà.",
                "C. Khó chịu khi thấy người đàn bà dùng thái độ bề trên để nói chuyện với mình.",
                "D. Bức bối vì không thể đánh trả người đã làm cho mình bị thương trên mặt."
            ],
            correctAnswer: "B"
        },

        // --- CÂU 49 - 50: ĐỌC HIỂU NGẮN ---
        {
            id: 266086, type: "multiple_choice",
            content: "<b>Câu 49:</b> Đọc đoạn trích sau và trả lời câu hỏi:<br><i>“Hà Giang là tỉnh địa đầu của Tổ quốc, phía đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai, phía nam giáp tỉnh Tuyên Quang, phía bắc giáp Trung Quốc. Các cung đường Hà Giang quanh co, cheo leo vốn đầy thách thức cho người lái xe. Thế nhưng khi bạn phóng tầm mắt xung quanh, căng thẳng nhường lại chỗ cho cảm giác thư thái khi chiêm ngưỡng vẻ đẹp cao nguyên. Khí hậu Hà Giang lạnh rõ rệt so với vùng thấp và trung du kế cận. Nhiệt độ trung bình năm khoảng 21-23 độ C. Nét nổi bật của khí hậu là độ ẩm cao trong năm, mưa nhiều và kéo dài. Bạn có thể du lịch Hà Giang vào bất kỳ mùa nào trong năm. Người ta thường đến Hà Giang vào mùa thu lúa chín vàng. Thời gian đẹp nhất là tháng 10, 11 và 12, khi hoa tam giác mạch hay những cánh đồng cải khoe sắc. Còn mùa xuân, hoa mơ, hoa mận nở trắng rừng khiến bạn như đang bồng bềnh trên mây.”</i><br>(Theo <i>vnexpress.net</i>)<br><br>Ý nào sau đây KHÔNG nói về đặc điểm địa lý của tỉnh Hà Giang?",
            options: [
                "A. Phía Đông giáp tỉnh Cao Bằng, phía tây giáp tỉnh Yên Bái và Lào Cai.",
                "B. Tạo cảm giác thư thái cho du khách khi chiêm ngưỡng vẻ đẹp Hà Giang.",
                "C. Hà Giang là một tỉnh có độ ẩm cao suốt năm, mưa nhiều và thường kéo dài.",
                "D. Có khí hậu Hà Giang lạnh rõ rệt so với các vùng đồng bằng, trung du kế cận."
            ],
            correctAnswer: "B"
        },
        {
            id: 266087, type: "multiple_choice",
            content: "<b>Câu 50:</b> Đọc đoạn trích sau đây và trả lời câu hỏi:<br><i>“Trong tâm hồn người con gái nhỏ bé, tình yêu và niềm tin mãnh liệt vào cuộc sống, cái sợi chỉ xanh óng ánh ấy, bao nhiêu bom đạn giội xuống cũng không hề đứt, không thể nào tàn phá nổi ư?”</i><br><br>Xác định các biện pháp tu từ có trong câu văn trên.",
            options: [
                "A. Ẩn dụ, câu hỏi tu từ.",
                "B. Hoán dụ, câu hỏi tu từ.",
                "C. Ẩn dụ, so sánh.",
                "D. Hoán dụ, so sánh."
            ],
            correctAnswer: "A"
        }
    ],
"hsa_khoahoc_01": [
  {"id": 101, "type": "multiple_choice", "content": "Khi nói về hiện tượng sôi của chất lỏng, nhận xét nào dưới đây là sai?", "options": ["A. Hiện tượng hóa hơi xảy ra ngay trên bề mặt chất lỏng.", "B. Hiện tượng hóa hơi xảy ra ngay trong lòng chất lỏng.", "C. Khi chuyển sang thể khí, thế năng tương tác phân tử giảm.", "D. Khi áp suất tăng, nhiệt độ sôi của chất lỏng cũng tăng."], "correctAnswer": "C", "image": null},
  {"id": 102, "type": "multiple_choice", "content": "Một học sinh thực hiện thí nghiệm xác định hệ số ma sát trượt giữa một vật nặng hình trụ nhỏ bằng thép và một tấm ván phẳng. Ban đầu, vật nặng được giữ tại vị trí A ở đầu trên ván nghiêng nhờ một nam châm điện. Đặt một cổng quang điện tại vị trí B cách A một khoảng 35 cm. Kết nối cổng quang điện và công tắc của nam châm điện với một máy đo để đo thời gian từ lúc vật bắt đầu chuyển động từ A tới khi chạm tới vị trí cổng quang điện tại B. Điều chỉnh góc nghiêng của ván trượt đến 20°. Ngắt nam châm điện để vật nặng bắt đầu trượt xuống. Máy đo được khoảng thời gian vật nặng trượt từ A đến B là 0,58 s. Cho gia tốc trọng trường g = 9,8 m/s². Hệ số ma sát trượt giữa vật nặng và máng trượt đo được xấp xỉ bằng:", "options": ["A. 0,10.", "B. 0,12.", "C. 0,14.", "D. 0,16."], "correctAnswer": "C", "image": "https://i.postimg.cc/8zg1fFjm/102.png"},
  {"id": 103, "type": "fill_blank", "content": "Một người cần di chuyển một chiếc tủ gỗ có dạng hình hộp chữ nhật bằng cách đẩy nó theo phương ngang để nó trượt chậm và đều, sao cho mặt dưới của tủ luôn tiếp xúc toàn diện với mặt sàn nhà. Kích thước chiều cao và chiều rộng của tủ lần lượt là 1,8 m và 1,1 m. Biết hệ số ma sát giữa tủ và sàn nhà bằng 0,35. Độ cao tối đa của điểm đặt lực đẩy so với sàn nhà có giá trị bằng bao nhiêu (tính theo đơn vị mét, kết quả lấy dưới dạng phân số tối giản)?", "options": [], "correctAnswer": "11/7", "image": null},
  {"id": 104, "type": "multiple_choice", "content": "Bếp từ là thiết bị đun nấu phổ biến trong gia đình. Khi bếp hoạt động, dòng điện chạy qua cuộn dây đồng đặt dưới mặt kính của bếp sẽ sinh ra dòng từ trường biến thiên trong vùng không gian phía trên mặt bếp, làm xuất hiện dòng điện chạy bên trong đáy nồi. Dòng điện này được gọi là dòng Foucault, có tác dụng sinh nhiệt rất lớn. Nguyên tắc hoạt động của bếp từ dựa trên hiện tượng:", "options": ["A. Cảm ứng điện từ.", "B. Bức xạ nhiệt.", "C. Dẫn nhiệt do tiếp xúc.", "D. Giao thoa sóng điện từ."], "correctAnswer": "A", "image": null},
  {"id": 105, "type": "multiple_choice", "content": "Trong một công trường xây dựng, một khối đá lớn được kéo lên dọc theo một mặt phẳng nghiêng dài có góc nghiêng 53° bằng một dây cáp nối với động cơ điện. Dây cáp được vắt qua một ròng rọc cố định đặt trên một mặt phẳng ngang ở trên cao. Bỏ qua khối lượng dây cáp, khối lượng ròng rọc, và sức cản không khí. Cho hệ số ma sát giữa bề mặt khối đá và mặt phẳng nghiêng là 0,4. Nếu khối đá được kéo lên với tốc độ không đổi thì hiệu suất chuyển hóa từ cơ năng của động cơ thành thế năng trọng trường của khối đá xấp xỉ bằng:", "options": ["A. 23%.", "B. 35%.", "C. 65%.", "D. 77%."], "correctAnswer": "D", "image": null},
  {"id": 106, "type": "multiple_choice", "content": "Một người chơi đàn ghi-ta cần điều chỉnh dây đàn sao cho âm thanh mà nó phát ra chính là nốt A4 (có tần số 440 Hz). Biết rằng hai đầu dây đàn được gắn cố định. Trước khi điều chỉnh thì tần số âm thanh do dây đàn phát ra là 400 Hz, và khi gẩy thì trên dây có một bụng sóng. Để đạt được nốt A4, người chơi cần vặn chốt điều chỉnh để làm tăng lực căng của dây đàn trong khi không làm thay đổi chiều dài dây. Biết tốc độ truyền sóng trên dây đàn tỉ lệ thuận với căn bậc hai của lực căng dây. Hỏi để đàn phát ra âm A4, và khi gẩy vẫn chỉ có một bụng sóng trên dây, thì người chơi phải tăng lực căng dây đàn thêm bao nhiêu phần trăm?", "options": ["A. 4,9%.", "B. 10%.", "C. 21%.", "D. 24%."], "correctAnswer": "C", "image": null},
  {"id": 107, "type": "multiple_choice", "content": "Một người dùng một bóng đèn sợi đốt sử dụng điện xoay chiều có ghi thông số 120V - 45W để thắp sáng một căn phòng nhỏ. Để bóng đèn này có thể sáng bình thường ở mạng điện xoay chiều có điện áp 220 V thì cần mắc nối tiếp nó với một điện trở phụ R có giá trị xấp xỉ bằng:", "options": ["A. 251 Ω.", "B. 260 Ω.", "C. 267 Ω.", "D. 274 Ω."], "correctAnswer": "C", "image": null},
  {"id": 108, "type": "multiple_choice", "content": "Đưa một khối thép có khối lượng 10 kg và nhiệt độ 25 °C vào trong một lò nung điện có công suất 5 kW. Cho nhiệt độ nóng chảy của thép là 1500 °C; nhiệt dung riêng và nhiệt nóng chảy riêng của thép lần lượt là 460 J/kg.K và 2,5.10^5 J/kg. Biết rằng 87% điện năng tiêu thụ của lò nung chuyển thành nhiệt năng làm nóng khối thép. Để làm nóng chảy hoàn toàn khối thép trên, cần sử dụng lò nung trong thời gian tối thiểu là:", "options": ["A. 1782 s.", "B. 1971 s.", "C. 2135 s.", "D. 2355 s."], "correctAnswer": "C", "image": null},
  {"id": 109, "type": "multiple_choice", "content": "Cho một căn phòng trống hình hộp chữ nhật rộng 5 m, dài 10 m, và cao 3 m. Căn phòng có tường cách nhiệt và nhiệt độ không khí trong phòng đang là 0 °C. Sau khi mở cửa và để không khí trong phòng cân bằng nhiệt với môi trường bên ngoài thì thấy nhiệt độ trong phòng tăng lên 20 °C. Biết áp suất không khí trong phòng luôn cân bằng với áp suất khí quyển bên ngoài và có giá trị là 1,01.10^5 Pa. Cho khối lượng mol của không khí là 29 g/mol; hằng số khí lý tưởng là R = 8,31 J/mol.K. Khối lượng không khí trong phòng đã thoát ra ngoài khi mở cửa xấp xỉ bằng:", "options": ["A. 13,2 kg.", "B. 14,1 kg.", "C. 15,2 kg.", "D. 16,1 kg."], "correctAnswer": "A", "image": null},
  {"id": 110, "type": "multiple_choice", "content": "Nhúng chìm một khối kim loại có khối lượng 5 kg vào bình chứa 2 kg nước. Ban đầu, kim loại và nước cùng ở nhiệt độ phòng. Cấp nhiệt cho bình chứa để làm nóng nước và kim loại cho đến khi nhiệt độ trong bình ổn định ở một mức nhiệt độ nào đó. Biết nhiệt dung riêng của nước lớn gấp 9 lần nhiệt dung riêng của kim loại. Khi so sánh giữa nhiệt lượng mà khối kim loại hấp thụ Q1 và nhiệt lượng mà nước hấp thụ Q2, nhận xét nào dưới đây là đúng?", "options": ["A. Q2 = 9Q1.", "B. Q1 = 9Q2.", "C. Q2 = 3,6Q1.", "D. Q1 = 3,6Q2."], "correctAnswer": "C", "image": null},
  {"id": 111, "type": "multiple_choice", "content": "Một khối khí lý tưởng thực hiện một chu trình được biểu diễn thành giản đồ P-V. Trong đó, áp suất P tính bằng kPa và thể tích V tính bằng m³. Nhiệt độ của khối khí ở trạng thái (2) là 200 K, và ở trạng thái (3) là 1800 K. Thể tích của khối khí ở trạng thái (1) là:", "options": ["A. 1 m³.", "B. 2 m³.", "C. 3 m³.", "D. 4 m³."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 112, "type": "multiple_choice", "content": "Một máy chiếu xạ sử dụng nguồn phóng xạ Co-60 với chu kỳ bán rã là 5,27 năm để điều trị ung thư. Để đảm bảo liều lượng chiếu xạ, nguồn Co-60 cần được thay mới khi độ phóng xạ giảm xuống còn một nửa so với độ phóng xạ lúc mới được sản xuất. Tại thời điểm vừa được sản xuất, nguồn Co-60 có độ phóng xạ 1000 Ci. Ở thời điểm hiện tại, độ phóng xạ của nguồn Co-60 đo được là 800 Ci. Sau bao lâu nữa thì cần thay mới nguồn?", "options": ["A. 1,71 năm.", "B. 2,23 năm.", "C. 3,14 năm.", "D. 3,57 năm."], "correctAnswer": "D", "image": null},
  {"id": 113, "type": "multiple_choice", "content": "Một thanh kim loại MN có chiều dài L được kéo với vận tốc v không đổi dọc theo hai thanh ray dẫn điện nằm ngang không ma sát. Từ trường đều B được tạo ra trong vùng không gian chuyển động của thanh kim loại, với các đường sức từ vuông góc với mặt phẳng hình vẽ và hướng từ trong ra ngoài. Cho L = 10 cm, v = 5,0 m/s và B = 1,2 T. Điện trở của thanh kim loại là R = 0,4 Ω. Bỏ qua điện trở của các thanh ray. Công suất tỏa nhiệt trên thanh kim loại xấp xỉ bằng:", "options": ["A. 0,6 W.", "B. 0,7 W.", "C. 0,8 W.", "D. 0,9 W."], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 114, "type": "multiple_choice", "content": "Sơ đồ của một máy phát điện xoay chiều đơn giản gồm một khung dây dẫn phẳng gồm 200 vòng dây, mỗi vòng có diện tích 100 cm². Cho khung dây quay đều trong từ trường đều với tốc độ 20 vòng/s quanh một trục vuông góc với các đường sức từ. Biết độ lớn cảm ứng từ bằng 0,02 T. Chọn thời điểm ban đầu t = 0 là lúc vectơ pháp tuyến của khung dây ngược hướng với cảm ứng từ. Tại thời điểm t = 2 ms, suất điện động cảm ứng xuất hiện trên khung dây có giá trị xấp xỉ bằng:", "options": ["A. 1,25 V.", "B. -1,25 V.", "C. 4,86 V.", "D. -4,86 V."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 115, "type": "multiple_choice", "content": "Trong nghiên cứu các đặc tính về âm và sóng âm, cường độ âm I được định nghĩa là năng lượng mà sóng âm truyền qua một mét vuông diện tích đặt vuông góc với phương truyền sóng trong một giây. Biết cường độ âm nhỏ nhất mà tai người có thể nghe được (ngưỡng nghe) có giá trị I0 = 10^-12 W/m². Trên công trường xây dựng có một máy khoan đang hoạt động và phát ra âm thanh rất lớn. Biết rằng máy khoan phát ra âm thanh đẳng hướng (giống nhau theo mọi hướng) với công suất phát âm là P = 5 W. Bỏ qua sự hấp thụ và phản xạ âm của môi trường. Cường độ âm tại một vị trí cách máy khoan 30 m có giá trị là:", "options": ["A. 2,2.10^-4 W/m².", "B. 4,4.10^-4 W/m².", "C. 1,8.10^-4 W/m².", "D. 1,8.10^-3 W/m²."], "correctAnswer": "B", "image": null},
  {"id": 116, "type": "multiple_choice", "content": "Trong vùng không gian trống trãi, để không nghe thấy âm thanh do máy khoan (công suất P = 5 W) phát ra thì người nghe phải đứng xa máy khoan một khoảng cách tối thiểu bằng:", "options": ["A. 10000 m.", "B. 630783 m.", "C. 126156 m.", "D. 1261566 m."], "correctAnswer": "B", "image": null},
  {"id": 117, "type": "multiple_choice", "content": "Để đo lường độ to của âm thanh, người ta thường sử dụng khái niệm 'mức cường độ âm' tại một vị trí, tính theo đơn vị đêxiben (dB), được tính bằng công thức L = 10.log(I/I0), trong đó I là cường độ âm tại vị trí đó, và I0 là ngưỡng nghe. Quy định an toàn lao động đòi hỏi mức cường độ âm tại nơi làm việc không được vượt quá 85 dB. Khoảng cách tối thiểu từ máy khoan (P = 5 W) đến vị trí làm việc theo đúng quy định an toàn với tiếng ồn xấp xỉ bằng:", "options": ["A. 12 m.", "B. 24 m.", "C. 36 m.", "D. 48 m."], "correctAnswer": "C", "image": null},
  {"id": 201, "type": "multiple_choice", "content": "Khối lượng của 1 proton gấp bao nhiêu lần khối lượng của 1 electron?", "options": ["A. Khoảng 1836 lần.", "B. Khoảng 5,4 lần.", "C. Khoảng 1,8.10^-53 lần.", "D. Khoảng 0,0005 lần."], "correctAnswer": "A", "image": null},
  {"id": 202, "type": "multiple_choice", "content": "Cho phức chất K3[Fe(C2O4)3] có cấu tạo xung quanh ion trung tâm Fe3+. Số phối tử của phức chất và số phối trí của nhân trung tâm lần lượt là bao nhiêu?", "options": ["A. 6 và 6.", "B. 3 và 3.", "C. 3 và 6.", "D. 6 và 3."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 203, "type": "multiple_choice", "content": "Phương trình nào dưới đây biểu diễn phản ứng giữa hai khí gồm ammonia và hydrogen chloride ở điều kiện thường?", "options": ["A. NH3(g) + HCl(g) -> NH2Cl(s) + H2(g)", "B. NH3(g) + HCl(g) -> NH4Cl(s)", "C. NH3(g) + 3HCl(g) -> NCl3(s) + 3H2(g)", "D. 2NH3(g) + 2HCl(g) -> N2(g) + Cl2(g) + 4H2(g)"], "correctAnswer": "B", "image": null},
  {"id": 204, "type": "multiple_choice", "content": "Hợp chất X phản ứng với thuốc thử Tollens tạo thành lớp bạc sáng bóng bám trên bề mặt ống nghiệm. Chất X thuộc loại hợp chất nào dưới đây?", "options": ["A. Aldehyde.", "B. Alkyne.", "C. Phenol.", "D. Alcohol."], "correctAnswer": "A", "image": null},
  {"id": 205, "type": "multiple_choice", "content": "Trong cơn giông khi có sấm sét, khí nitrogen và khí oxygen trong không khí phản ứng trực tiếp với nhau tạo thành hợp chất nào?", "options": ["A. NO.", "B. NO2.", "C. N2O.", "D. N2O5."], "correctAnswer": "A", "image": null},
  {"id": 206, "type": "multiple_choice", "content": "Số oxi hoá của các nguyên tử hydrogen trong hợp chất BH3 là bao nhiêu?", "options": ["A. 0.", "B. +3.", "C. +1.", "D. -1."], "correctAnswer": "D", "image": null},
  {"id": 207, "type": "multiple_choice", "content": "Phát biểu nào sau đây không đúng về tính chất hóa học của ethylamine?", "options": ["A. Dung dịch ethylamine trong nước làm quỳ tím hóa xanh.", "B. Ethylamine có tính base vì phân tử có chứa nhóm -NH2.", "C. Ethylamine tác dụng với nitrous acid ở nhiệt độ thấp (0 - 5 °C) thu được muối diazonium.", "D. Dung dịch ethylamine tác dụng được với dung dịch muối FeCl3."], "correctAnswer": "C", "image": null},
  {"id": 208, "type": "multiple_choice", "content": "Nhận xét nào dưới đây không đúng khi nói về glucose và fructose?", "options": ["A. Đều có trong mật ong.", "B. Đều làm mất màu nước bromine.", "C. Đều tạo được kết tủa đỏ gạch khi tác dụng với Cu(OH)2, đun nóng trong môi trường kiềm.", "D. Đều tạo được dung dịch màu xanh lam khi tác dụng với Cu(OH)2 trong môi trường kiềm."], "correctAnswer": "B", "image": null},
  {"id": 209, "type": "multiple_choice", "content": "Ethyl pentanoate được tạo nên từ phản ứng ester hóa giữa:", "options": ["A. ethene và pentan-1-ol.", "B. ethane và pentanoic acid.", "C. ethanol và pentanoic acid.", "D. ethanoic acid và pentan-1-ol."], "correctAnswer": "C", "image": null},
  {"id": 210, "type": "multiple_choice", "content": "Bảng thông số vật lý của halogen ở áp suất thường: F2 (nóng chảy -220 °C, sôi -188 °C), Cl2 (-101 °C, -35 °C), Br2 (-7 °C, 59 °C), I2 (114 °C, 184 °C). Phương án nào dưới đây giải thích đúng về sự tăng nhiệt độ nóng chảy và nhiệt độ sôi từ F2 đến I2?", "options": ["A. Do tạo được liên kết hydrogen giữa các phân tử.", "B. Do năng lượng liên kết đơn trong phân tử tăng dần từ F2 đến I2.", "C. Do tương tác van der Waals giảm dần từ F2 đến I2.", "D. Do khối lượng, kích thước phân tử và số lượng electron trong các phân tử tăng dần từ F2 đến I2."], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 211, "type": "multiple_choice", "content": "Nhiệt độ phân hủy thành oxide của các muối carbonate của kim loại nhóm IIA giảm dần theo dãy nào sau đây?", "options": ["A. MgCO3, CaCO3, SrCO3, BaCO3.", "B. BaCO3, SrCO3, CaCO3, MgCO3.", "C. BaCO3, CaCO3, SrCO3, MgCO3.", "D. MgCO3, BaCO3, SrCO3, CaCO3."], "correctAnswer": "B", "image": null},
  {"id": 212, "type": "fill_blank", "content": "Một học sinh cần điều chế một lượng nhỏ 12,4 mL khí acetylene ở điều kiện chuẩn từ calcium carbide CaC2 (độ tinh khiết 99%, M = 64,10 g/mol). Nếu hiệu suất phản ứng là 100%, học sinh này cần sử dụng tối thiểu bao nhiêu mg calcium carbide (làm tròn đến hàng đơn vị)?", "options": [], "correctAnswer": "32", "image": null},
  {"id": 213, "type": "multiple_choice", "content": "Trong công nghiệp methanol (CH3OH) được tổng hợp từ CO và H2 ở nhiệt độ và áp suất cao. Khi cho dòng khí CH4 vào cổng (1) và hơi nước vào cổng (2) ở 200 °C và áp suất 10 bar, phản ứng xảy ra trong hỗn hợp A là:", "options": ["A. 2CH4 + 2H2O <=> CH3OH + CO + 4H2", "B. 2CH4 + H2O <=> 2CO2 + 5H2", "C. CH4 + H2O <=> CH3OH + H2", "D. CH4 + H2O <=> CO + 3H2"], "correctAnswer": "D", "image": "LINK_ANH_TAI_DAY"},
  {"id": 214, "type": "multiple_choice", "content": "Sau khi hạ nhiệt độ của hỗn hợp A (gồm CO, H2, CH4 dư, H2O dư) về 25 °C thì thu được hỗn hợp B và chất nào bị ngưng tụ rồi được loại khỏi hệ phản ứng qua cổng (4)?", "options": ["A. Nước và CH4.", "B. Methanol, nước và CH4.", "C. Nước.", "D. Methanol và nước."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 215, "type": "multiple_choice", "content": "Biết phản ứng tổng hợp methanol từ hỗn hợp gồm CO và H2 là một quá trình tỏa nhiệt (ΔH < 0). Để chuyển dịch cân bằng theo chiều tạo ra methanol (tăng hiệu suất tổng hợp), quá trình này nên thực hiện ở:", "options": ["A. nhiệt độ thấp và áp suất cao.", "B. nhiệt độ cao và áp suất thấp.", "C. nhiệt độ cao và áp suất cao.", "D. nhiệt độ thấp và áp suất thấp."], "correctAnswer": "A", "image": null},
  {"id": 216, "type": "multiple_choice", "content": "Biết Pb2+ trong dung dịch oxi hóa được Sn. Khi nhúng hai thanh kim loại Pb và Sn nối với nhau bằng dây dẫn điện vào một dung dịch chất điện li thì:", "options": ["A. cả Pb và Sn đều bị ăn mòn điện hóa.", "B. cả Pb và Sn đều không bị ăn mòn điện hóa.", "C. chỉ có Pb bị ăn mòn điện hóa.", "D. chỉ có Sn bị ăn mòn điện hóa."], "correctAnswer": "D", "image": null},
  {"id": 217, "type": "multiple_choice", "content": "Điện phân dung dịch KNO3 và điện phân dung dịch H2SO4 với điện cực trơ giống nhau ở điều gì?", "options": ["A. Đều là không làm thay đổi số mol chất tan.", "B. Nồng độ mol/L của các chất không thay đổi.", "C. Ở cathode đều xảy ra sự khử H2O.", "D. pH của dung dịch không đổi trong quá trình điện phân."], "correctAnswer": "A", "image": null},
  {"id": 301, "type": "multiple_choice", "content": "Sắp xếp trình tự các giai đoạn trong cơ chế hoạt động của enzyme sao cho đúng?\n(1) Enzyme xúc tác làm biến đổi cơ chất.\n(2) Enzyme liên kết cơ chất tạo nên phức hợp enzyme - cơ chất.\n(3) Tạo sản phẩm và giải phóng enzyme.", "options": ["A. (2) -> (1) -> (3).", "B. (2) -> (3) -> (1).", "C. (1) -> (2) -> (3).", "D. (1) -> (3) -> (2)."], "correctAnswer": "A", "image": null},
  {"id": 302, "type": "multiple_choice", "content": "Hiệu ứng nhà kính là một hiện tượng tăng nồng độ khí CO2 trong khí quyển do các nhà máy sản xuất, hoạt động giao thông, đốt cháy các nhiên liệu hóa thạch làm trái đất nóng lên, băng tan chảy, mực nước biển dâng cao và các loài sinh vật trên trái đất nguy cơ tuyệt chủng. Có bao nhiêu giải pháp làm giảm hiệu ứng nhà kính trong các ý sau?\n(1) Trồng rừng phủ xanh đồi trọc để chúng quang hợp làm giảm CO2.\n(2) Ra qui định bảo vệ rừng, xử lý mạnh các trường hợp phá rừng.\n(3) Thực hiện làm màng xanh xung quanh nhà để điều tiết vi khí hậu trong gia đình.\n(4) Tuyên truyền và giáo dục ý thức về giá trị và ích lợi của việc bảo vệ rừng.", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "D", "image": null},
  {"id": 303, "type": "multiple_choice", "content": "Nối bộ phận với chức năng của các ngăn tim ở người cho đúng.\n1. Tâm nhĩ trái - a. Nhận máu giàu CO2 từ tĩnh mạch chủ bơm vào tâm thất\n2. Tâm nhĩ phải - b. Nhận máu từ tâm nhĩ bơm vào động mạch chủ nuôi cơ thể\n3. Tâm thất trái - c. Nhận máu từ tâm nhĩ bơm vào động mạch phổi trao đổi chất\n4. Tâm thất phải - d. Nhận máu giàu O2 từ tĩnh mạch phổi bơm vào tâm thất", "options": ["A. 1d, 2a, 3b, 4c.", "B. 1a, 2d, 3c, 4d.", "C. 1d, 2b, 3a, 4c.", "D. 1a, 2b, 3c, 4d."], "correctAnswer": "A", "image": null},
  {"id": 304, "type": "multiple_choice", "content": "Mô tả các bộ phận của hệ dẫn truyền tim: [M] là nút xoang nhĩ, [N] là nút nhĩ thất, [O] là bó His, [P] là mạng Purkinje. Dựa vào kiến thức về hệ dẫn truyền tim, hãy cho biết có bao nhiêu phát biểu sau đây là đúng?\n1. [M] hoạt động làm cơ tâm nhĩ co.\n2. [N] có khả năng tự phát xung theo chu kì.\n3. [P] lan truyền xung thần kinh từ dưới lên.\n4. [O] là mạng Purkinje, [P] là bó His.", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 305, "type": "multiple_choice", "content": "Sơ đồ cơ chế điều hòa cân bằng nội môi gồm: [1] Bộ phận tiếp nhận kích thích, [2] Bộ phận điều khiển, [3] Bộ phận thực hiện. Cho các phát biểu sau:\n1. [1] là bộ phận điều khiển, [2] là bộ phận tiếp nhận, [3] là bộ phận thực hiện.\n2. Tín hiệu được truyền từ [2] truyền đến [3] dưới dạng xung thần kinh hoặc hormone.\n3. [5] là quá trình kết quả đáp ứng tác động ngược đến bộ phận tiếp nhận kích thích.\n4. Quá trình điều khiển trong được thực hiện bởi trung ương thần kinh hoặc tuyến nội tiết.\nCó bao nhiêu phát biểu đúng?", "options": ["A. 1, 2, 4.", "B. 2, 3, 4.", "C. 1, 3, 4.", "D. 1, 2, 3."], "correctAnswer": "B", "image": "LINK_ANH_TAI_DAY"},
  {"id": 306, "type": "multiple_choice", "content": "Quan sát biểu đồ mức độ hấp thụ ánh sáng của các sắc tố quang hợp (Chlorophyll a, Chlorophyll b, Carotenoid). Cho các phát biểu sau:\n1. Diệp lục hấp thụ ánh sáng chủ yếu ở vùng đỏ (700nm) và xanh tím (400 - 500nm).\n2. Carotenoid hấp thụ ánh sáng chủ yếu ở vùng xanh tím.\n3. Diệp lục và carotenoid gần như không hấp thụ được ánh sáng ở vùng xanh lục (500 - 600nm).\n4. Ở vùng ánh sáng xanh tím, diệp lục hấp thụ mạnh hơn carotenoid.\nCó bao nhiêu phát biểu đúng?", "options": ["A. 1, 2, 3.", "B. 2, 3, 4.", "C. 1, 3, 4.", "D. 1, 2, 4."], "correctAnswer": "A", "image": "LINK_ANH_TAI_DAY"},
  {"id": 307, "type": "multiple_choice", "content": "Quan sát sơ đồ chu trình Calvin trong quang hợp. Cho các phát biểu sau:\n1. [1] là PEP và là chất nhận CO2 đầu tiên.\n2. [2] là PGA (3C) và là sản phẩm cố định CO2 đầu tiên.\n3. [3] là ATP, [4] là NADPH được cung cấp từ pha sáng.\n4. Giai đoạn cố định CO2 liên quan chặt chẽ đến sự thoát hơi nước.\nPhát biểu nào sau đây đúng?", "options": ["A. 1, 2, 4.", "B. 1, 3, 4.", "C. 2, 3, 4.", "D. 1, 2, 3."], "correctAnswer": "C", "image": "LINK_ANH_TAI_DAY"},
  {"id": 308, "type": "multiple_choice", "content": "Thầy giáo tiến hành thí nghiệm trồng cùng một loại cây theo 2 cách: một chậu để thẳng đứng và một chậu để nằm ngang. Khi nói về thí nghiệm này, cho các phát biểu sau:\n1. Thí nghiệm chứng minh cho tính hướng trọng lực của thân và rễ.\n2. Hiện tượng này có ý nghĩa đảm bảo cây được định vị vững chắc, không bị đổ, chống lại gió bão.\n3. Trọng lực làm auxin (AIA) ở 2 phía của thân và rễ không đều nhau.\n4. Thí nghiệm cho thấy thân hướng trọng lực âm, rễ hướng trọng lực dương.\nSố phát biểu đúng là:", "options": ["A. 1, 2, 3.", "B. 1, 2, 4.", "C. 1, 3, 4.", "D. 2, 3, 4."], "correctAnswer": "A", "image": "LINK_ANH_TAI_DAY"},
  {"id": 309, "type": "multiple_choice", "content": "Ở chó Labrador, màu sắc lông do 2 locut gen nằm trên 2 cặp NST thường quy định (Gen A/a quy định khả năng sản xuất Eumelanin, Gen B/b quy định khả năng sản xuất Pheomelanin). Sự tương tác giữa hai cặp gen này quyết định kiểu hình màu lông đen, nâu hoặc vàng. Tính trạng màu sắc lông ở chó Labrador di truyền theo quy luật di truyền nào?", "options": ["A. Phân li độc lập.", "B. Liên kết gen.", "C. Hoán vị gen.", "D. Tương tác gen."], "correctAnswer": "D", "image": null},
  {"id": 310, "type": "multiple_choice", "content": "Đem lai các cá thể chó Labrador lông đen (có 4 kiểu gen A-B-) với các cá thể lông nâu (có 2 kiểu gen A-bb), theo lí thuyết sẽ có tối đa bao nhiêu sơ đồ lai nếu không kể vai trò bố mẹ của các tính trạng đem lai?", "options": ["A. 10.", "B. 12.", "C. 8.", "D. 6."], "correctAnswer": "C", "image": null},
  {"id": 311, "type": "multiple_choice", "content": "Khi nói về tính trạng màu sắc lông ở chó Labrador (màu đen, nâu, vàng do tương tác gen A/a và B/b), cho các phát biểu sau:\nI. Lôcut gen A, a quy định khả năng sản xuất sắc tố Eumelanin trong cơ thể chó Labrador.\nII. Lôcut gen B, b quy định khả năng sản xuất cả 2 loại sắc tố Pheomelanin và Eumelanin.\nIII. Đem lai 2 dòng chó Labrador lông vàng và lông nâu thuần chủng, có thể thu được đời con có toàn bộ đều lông đen.\nIV. Một cặp bố mẹ lông đen và nâu sinh con có thể có cả đen, nâu, vàng; nếu điều này xảy ra thì tỷ lệ con lông đen là cao nhất.\nCó bao nhiêu phát biểu đúng?", "options": ["A. 1.", "B. 2.", "C. 3.", "D. 4."], "correctAnswer": "B", "image": null},
  {"id": 312, "type": "fill_blank", "content": "Sơ đồ phả hệ mô tả 2 bệnh di truyền ở người, trong đó bệnh P do gen lặn nằm trên NST thường quy định, bệnh Q do gen lặn nằm trên vùng không tương đồng của NST giới tính X quy định. Biết rằng không có đột biến mới xảy ra. Xác suất cặp vợ chồng 13-14 sinh đứa con đầu lòng bị cả hai bệnh là bao nhiêu (viết dưới dạng phân số tối giản)?", "options": [], "correctAnswer": "1/80", "image": "LINK_ANH_TAI_DAY"},
  {"id": 313, "type": "multiple_choice", "content": "Trong số các cơ chế hình thành loài sau đây, cơ chế nào hình thành loài mới nhanh nhất?", "options": ["A. Lai xa và đa bội hóa.", "B. Cách li địa lý.", "C. Cách li sinh thái.", "D. Cách li tập tính."], "correctAnswer": "A", "image": null},
  {"id": 314, "type": "multiple_choice", "content": "Phiêu bạt di truyền (biến động di truyền) có thể ảnh hưởng nhất tới quần thể nào sau đây?", "options": ["A. Một quần thể lớn và giao phối ngẫu nhiên.", "B. Một quần thể lớn với sự nhập cư thường xuyên từ quần thể lân cận.", "C. Một quần thể nhỏ bị cô lập.", "D. Một quần thể lớn và giao phối không ngẫu nhiên."], "correctAnswer": "C", "image": null},
  {"id": 315, "type": "multiple_choice", "content": "Quy trình kỹ thuật dựa trên nguyên lý tái tổ hợp DNA và nguyên lý biểu hiện gene, tạo ra các phân tử DNA tái tổ hợp và protein tái tổ hợp được gọi là:", "options": ["A. Công nghệ DNA tái tổ hợp.", "B. Công nghệ sinh học.", "C. Công nghệ tế bào.", "D. Công nghệ vi sinh vật."], "correctAnswer": "A", "image": null},
  {"id": 316, "type": "multiple_choice", "content": "Phát biểu nào sau đây đúng về mối quan hệ giữa các cá thể trong quần thể?", "options": ["A. Hiện tượng ăn thịt đồng loại luôn dẫn đến sự diệt vong của loài.", "B. Quan hệ hỗ trợ giúp quần thể thích nghi tốt hơn với môi trường.", "C. Quan hệ cạnh tranh không xảy ra ở các quần thể thực vật.", "D. Sự cạnh tranh trong quần thể chỉ xảy ra khi môi trường thiếu thức ăn."], "correctAnswer": "B", "image": null}
],
    "thpt_hoa_03": [
    {"id": 1, "type": "multiple_choice", "content": "Hợp chất nào sau đây là ester?", "options": ["A. CH3COOH.", "B. CH3CHO.", "C. CH3COOCH3.", "D. CH3COCH3."], "correctAnswer": "C"},
  {"id": 2, "type": "multiple_choice", "content": "Triolein là chất béo không no, ở trạng thái lỏng. Công thức hóa học của triolein là", "options": ["A. (C17H33COO)3C3H5.", "B. (C17H35COO)3C3H5.", "C. (C15H31COO)3C3H5.", "D. (C17H31COO)3C3H5."], "correctAnswer": "A"},
  {"id": 3, "type": "multiple_choice", "content": "Chất nào sau đây là thành phần chính của xà phòng?", "options": ["A. CH3[CH2]3COONa.", "B. CH3[CH2]11OSO3Na.", "C. CH3[CH2]14COONa.", "D. CH3[CH2]16COOH."], "correctAnswer": "C"},
  {"id": 4, "type": "multiple_choice", "content": "Fructose là một loại monosaccharide có nhiều trong mật ong, có vị ngọt đậm. Công thức phân tử của fructose là", "options": ["A. (C6H10O5)n.", "B. C6H12O6.", "C. C5H10O5.", "D. C12H22O11."], "correctAnswer": "B"},
  {"id": 5, "type": "multiple_choice", "content": "Công thức cấu tạo sau mô tả:<br><img src='https://i.postimg.cc/d1gcz9Sy/5.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Amylose.", "B. Cellulose.", "C. Saccharose.", "D. Amylopectin."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Khi nghiên cứu carbohydrate X ta nhận thấy: - X không tráng gương, có một đồng phân. - X thủy phân trong nước được hai sản phẩm. Vậy X là", "options": ["A. Glucose.", "B. Tinh bột.", "C. Saccharose.", "D. Fructose."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Amine nào sau đây là amine bậc hai?", "options": ["A. trimethylamine.", "B. aniline.", "C. ethylphenylamine.", "D. propylamine."], "correctAnswer": "C"},
  {"id": 8, "type": "multiple_choice", "content": "Số nhóm carboxyl (COOH) trong phân tử glycine là", "options": ["A. 3.", "B. 2.", "C. 1.", "D. 4."], "correctAnswer": "C"},
  {"id": 9, "type": "multiple_choice", "content": "Trong phản ứng tetrapeptide Ala-Gly-Val-Glu, acid đầu C là", "options": ["A. Val.", "B. Ala.", "C. Glu.", "D. Gly."], "correctAnswer": "C"},
  {"id": 10, "type": "multiple_choice", "content": "Cho một loại chất béo có công thức cấu tạo như hình. Phản ứng giữa chất béo trên với hydrogen dư (xt, t°, p) thu được chất béo có công thức là<br><img src='https://i.postimg.cc/NGrKLCtD/10.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. (C15H31COO)(C17H35COO)2C3H5.", "B. (C15H31COO)2(C17H35COO)2C3H5.", "C. (C15H31COO)(C17H33COO)(C17H35COO)C3H5.", "D. (C15H31COO)(C17H33COO)2C3H5."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Thủy phân saccharose, thu được hai monosaccharide X và Y. Chất X có trong máu người với nồng độ trong máu người 4,4 – 7,2 mmol/L (hay 80 – 130 mg/dL). Phát biểu nào sau đây đúng?", "options": ["A. Y bị thủy phân trong môi trường kiềm.", "B. X không có phản ứng tráng bạc.", "C. X có phân tử khối bằng 180.", "D. Y không tan trong nước."], "correctAnswer": "C"},
  {"id": 12, "type": "multiple_choice", "content": "Nhận xét nào sau không đúng?", "options": ["A. Glucose tan tốt trong H2O và có vị ngọt.", "B. Fructose có khả năng tham gia phản ứng tráng bạc.", "C. Đường glucose không ngọt bằng đường saccharose.", "D. Cellulose bị thủy phân bởi dung dịch NaOH tạo glucose."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Cho vào ống nghiệm 3 – 4 giọt dung dịch CuSO4 2% và 2 – 3 giọt dung dịch NaOH 10%. Tiếp tục nhỏ 2 – 3 giọt dung dịch chất X vào ống nghiệm, lắc nhẹ, thu được dung dịch màu xanh lam. Chất X không thể là", "options": ["A. ethanol.", "B. saccharose.", "C. glucose.", "D. glycerol."], "correctAnswer": "A"},
  {"id": 14, "type": "multiple_choice", "content": "Amine X đơn chức. X tác dụng với HCl thu được muối Y có công thức là RNH3Cl. Trong Y, chlorine chiếm 32,42% về khối lượng. Hãy cho biết X có bao nhiêu công thức cấu tạo?", "options": ["A. 3.", "B. 5.", "C. 4.", "D. 2."], "correctAnswer": "C"},
  {"id": 15, "type": "multiple_choice", "content": "Kết quả thí nghiệm của các dung dịch X, Y, Z, T với thuốc thử được ghi ở bảng sau: X, Y phản ứng Cu(OH)2 cho dd xanh lam; Y phản ứng thuốc thử Tollens cho Ag; Z phản ứng nước bromine tạo kết tủa trắng; T làm quỳ tím chuyển xanh. X, Y, Z, T lần lượt là<br><img src='https://i.postimg.cc/L5BRL1NL/15.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Aniline, ethylamine, saccharose, glucose.", "B. Saccharose, aniline, glucose, ethylamine.", "C. Saccharose, glucose, aniline, ethylamine.", "D. Glucose, saccharose, aniline, ethylamine."], "correctAnswer": "C"},
  {"id": 16, "type": "multiple_choice", "content": "Cho hình vẽ sau của amino acid X trong môi trường pH = 6 dưới tác dụng của điện trường: X có thể là<br><img src='https://i.postimg.cc/j2RBVk4C/16.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Glycine.", "B. Alanine.", "C. Lysine.", "D. Glutamic acid."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Công thức cấu tạo của peptide sau có tên là<br><img src='https://i.postimg.cc/DyyRBHZT/17.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Gly-Gly-Ala-Val.", "B. Val-Ala-Gly-Gly.", "C. Val-Gly-Gly-Ala.", "D. Val-Gly-Ala-Gly."], "correctAnswer": "C"},
  {"id": 18, "type": "multiple_choice", "content": "Tiến hành thí nghiệm theo các bước sau:<br>Bước 1: Cho vào cốc thủy tinh chịu nhiệt khoảng 5 gam mỡ lợn và 10mL dung dịch NaOH 40%.<br>Bước 2: Đun sôi nhẹ hỗn hợp, liên tục khuấy đều bằng đũa thủy tinh khoảng 30 phút và thỉnh thoảng thêm nước cất để giữ cho thể tích hỗn hợp không đổi. Để nguội hỗn hợp.<br>Bước 3: Rót thêm vào hỗn hợp 15 – 20 mL dung dịch NaCl bão hòa nóng, khuấy nhẹ. Để yên hỗn hợp.<br>Cho các phát biểu sau:<br>(a) Sau bước 3 thấy có lớp chất rắn màu trắng chứa muối sodium của acid béo nổi lên.<br>(b) Vai trò của dung dịch NaCl bão hòa ở bước 3 là để tách muối sodium của acid béo ra khỏi hỗn hợp.<br>(c) Ở bước 2, nếu không thêm nước cất, hỗn hợp bị cạn khô thì phản ứng thủy phân không xảy ra.<br>(d) Ở bước 1, nếu thay mỡ lợn bằng dầu nhớt thì hiện tượng thí nghiệm sau bước 3 vẫn xảy ra tương tự.<br>(e) Trong công nghiệp, phản ứng ở thí nghiệm trên được ứng dụng để sản xuất xà phòng và glycerol.<br>(f) Sau bước 2, dung dịch trong cốc thủy tinh là đồng nhất.<br>(g) Có thể thay dung dịch NaCl bão hòa bằng dung dịch CaCl2 bão hòa.<br>Số phát biểu đúng là", "options": ["A. 3.", "B. 4.", "C. 5.", "D. 2."], "correctAnswer": "C"},
  {"id": 19, "type": "true_false", "content": "Aspirin được sử dụng làm thuốc giảm đau, hạ sốt. Sau khi uống, aspirin bị thủy phân trong cơ thể tạo thành salicylic acid. Hãy cho biết những phát biểu sau là đúng hay sai:", "propositions": ["a) Aspirin và salicylic acid đều là hợp chất hữu cơ tạp chức và hơn kém nhau 1 liên kết π.", "b) Aspirin và salicylic acid đều chứa hai nhóm chức ở vị trí tương đối meta- trên vòng benzene.", "c) Aspirin và salicylic acid đều tác dụng với dung dịch NaOH theo tỉ lệ mol 1 : 2.", "d) Công thức phân tử của aspirin và salicylic acid lần lượt là C9H8O4 và C7H6O3."], "correctAnswer": {"0": "true", "1": "false", "2": "false", "3": "true"}},
  {"id": 20, "type": "true_false", "content": "Cho sơ đồ phản ứng thủy phân và tráng bạc của carbohydrate. Hãy cho biết những phát biểu sau đây là đúng hay sai:<br><img src='https://i.postimg.cc/fRY7XTh1/19.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "propositions": ["a) Chất T là muối ammonium của gluconic acid.", "b) Chất Z thuộc loại hợp chất hữu cơ đơn chức.", "c) Để chế tạo gương soi, ruột phích, người ta phủ lên thủy tinh một lớp bạc mỏng thường được tạo từ phản ứng (2).", "d) Các chất X, Y, Z và T có cùng số nguyên tử carbon."], "correctAnswer": {"0": "true", "1": "false", "2": "false", "3": "true"}},
  {"id": 21, "type": "true_false", "content": "Ephedrine được sử dụng với hàm lượng nhất định trong các loại thuốc điều trị cảm và dị ứng. Hãy cho biết những phát biểu sau đây là đúng hay sai:", "propositions": ["a) Công thức phân tử của ephedrine là C10H15NO.", "b) Ephedrine thuộc loại hợp chất hữu cơ tạp chức, chứa đồng thời nhóm chức alcohol và amine cùng bậc.", "c) Ephedrine hydrochloride được điều chế từ phản ứng của ephedrine với hydrochloric acid.", "d) Mỗi hộp Ephedrine Aguetant 10 ống x 1 mL có chứa tổng cộng 3 gam ephedrine hydrochloride."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 22, "type": "true_false", "content": "Tiến hành thí nghiệm phản ứng màu biuret / đông tụ protein bằng HNO3 đặc. Hãy cho biết những phát biểu sau đây là đúng hay sai:", "propositions": ["a) Sau bước 1, lòng trắng trứng bắt đầu bị đông tụ tạo thành chất rắn màu trắng.", "b) Trong thí nghiệm trên cần cẩn thận khi làm việc với HNO3 đặc.", "c) Ở bước 2, albumin trong lòng trắng trứng hình thành sản phẩm rắn màu vàng với dung dịch nitric acid đặc do sự đông tụ protein trong môi trường acid.", "d) Nếu thay dung dịch HNO3 đặc bằng dung dịch HCl đặc thì thu được hiện tượng giống như bước 2."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 23, "type": "fill_blank", "content": "Một loại chất béo chứa 89,0% tristearin về khối lượng còn lại là tạp chất trơ. Thực hiện phản ứng xà phòng hóa thu được xà phòng chứa 67,32% muối sodium stearate... Để sản xuất được 100.000 bánh xà phòng (100g/bánh) thì khối lượng chất béo tối thiểu cần sử dụng là bao nhiêu kg?", "options": [], "correctAnswer": "9167"},
  {"id": 24, "type": "fill_blank", "content": "Có bao nhiêu ester có công thức phân tử C4H8O2 và khi thủy phân thu được alcohol bậc I?", "options": [], "correctAnswer": "3"},
  {"id": 25, "type": "fill_blank", "content": "Cho sơ đồ phản ứng: X -> Y -> Z -> T. Phân tử khối của T bằng bao nhiêu amu?<br><img src='https://i.postimg.cc/RFhnPvjh/3-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "88"},
  {"id": 26, "type": "fill_blank", "content": "Chuyển hóa glucose thành lactic acid giải phóng 2% năng lượng cho cơ thể. Chạy bộ tiêu tốn 400 kcal. Khối lượng lactic acid được chuyển hóa bằng bao nhiêu gam? (làm tròn đến hàng phần mười)", "options": [], "correctAnswer": "40.2"},
  {"id": 27, "type": "fill_blank", "content": "Cho các chất: cellulose (1), saccharose (2), aniline (3), albumin (4), tristearin (5) và Gly-Ala-Val (6). Có bao nhiêu chất bị thủy phân trong môi trường acid ở điều kiện thích hợp?", "options": [], "correctAnswer": "5"},
  {"id": 28, "type": "fill_blank", "content": "Hợp chất hữu cơ Y có 32% C; 6,67% H; 18,67% N; còn lại O. Phổ khối lượng m/z = 75. Thực hiện phản ứng ester hóa giữa Y với CH3OH trong HCl khan. Sản phẩm hữu cơ thu được có tổng số nguyên tử bằng bao nhiêu?<br><img src='https://i.postimg.cc/vHfX7vrX/6-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "15"}
],
    "thpt_hoa_04": [
  {"id": 1, "type": "multiple_choice", "content": "Khối lượng methylamine cần để tác dụng vừa đủ với 0,01 mol HCl là?", "options": ["A. 0,90 gam.", "B. 0,31 gam.", "C. 0,62 gam.", "D. 0,45 gam."], "correctAnswer": "B"},
  {"id": 2, "type": "multiple_choice", "content": "Khối lượng ethylamine cần để tác dụng vừa đủ với 0,01 mol HCl là?", "options": ["A. 0,31 gam.", "B. 0,59 gam.", "C. 0,45 gam.", "D. 0,90 gam."], "correctAnswer": "C"},
  {"id": 3, "type": "multiple_choice", "content": "Để phản ứng vừa đủ với 1,24 gam amine X (no, đơn chức, mạch hở) cần 400 mL dung dịch HCl 0,1 M. Công thức phân tử của X là?", "options": ["A. CH5N.", "B. C2H7N.", "C. C4H11N.", "D. C3H9N."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Cho 30 gam hỗn hợp hai amine đơn chức tác dụng vừa đủ với V mL dung dịch HCl 1,5 M, thu được dung dịch chứa 47,52 gam hỗn hợp muối. Giá trị của V là ?", "options": ["A. 160.", "B. 720.", "C. 329.", "D. 320."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Trong một phòng thí nghiệm, 23 gam HCl được hòa tan trong 1 lít nước. Hỗn hợp này được sử dụng để trung hòa 4,6 gam butylamine. Thể tích dung dịch HCl đã sử dụng là?", "options": ["A. 200 mL.", "B. 150 mL.", "C. 100 mL.", "D. 250 mL."], "correctAnswer": "C"},
  {"id": 6, "type": "multiple_choice", "content": "Cho 4,5 gam amine X (no, đơn chức, mạch hở) tác dụng hết với dung dịch HCl dư, thu được 8,15 gam muối. Số nguyên tử hydrogen trong phân tử X là ?", "options": ["A. 7.", "B. 4.", "C. 5.", "D. 2."], "correctAnswer": "A"},
  {"id": 7, "type": "multiple_choice", "content": "Cho 19,4 gam hỗn hợp hai amine (no, đơn chức, mạch hở, kế tiếp nhau trong dãy đồng đẳng) tác dụng hết với dung dịch HCl, thu được 34 gam muối. Công thức phân tử của hai amine là?", "options": ["A. C3H9N và C4H11N.", "B. C3H7N và C4H9N.", "C. CH5N và C2H7N.", "D. C2H7N và C3H9N."], "correctAnswer": "D"},
  {"id": 8, "type": "multiple_choice", "content": "Cho 5,9 gam amine đơn chức X tác dụng vừa đủ với dung dịch HCl, sau khi phản ứng xảy ra hoàn toàn thu được dung dịch Y. Làm bay hơi dung dịch Y được 9,55 gam muối khan. Số công thức cấu tạo ứng với công thức phân tử của X là?", "options": ["A. 5.", "B. 4.", "C. 2.", "D. 3."], "correctAnswer": "B"},
  {"id": 9, "type": "multiple_choice", "content": "Trung hoà hoàn toàn 8,88 gam một amine (bậc I, mạch carbon không phân nhánh) bằng acid HCl, tạo ra 17,64 gam muối. Amine có công thức là?", "options": ["A. H2NCH2CH2CH2CH2NH2.", "B. CH3CH2CH2NH2.", "C. H2NCH2CH2NH2.", "D. H2NCH2CH2CH2NH2."], "correctAnswer": "A"},
  {"id": 10, "type": "multiple_choice", "content": "Hỗn hợp X gồm methylamine và dimethylamine có tỉ khối so với methane bằng 2,4625. Lấy 7,88 gam X tác dụng với dung dịch HCl loãng, dư thu được m gam muối. Giá trị của m là?", "options": ["A. 14,98.", "B. 14,45.", "C. 15,18.", "D. 14,27."], "correctAnswer": "C"},
  {"id": 11, "type": "multiple_choice", "content": "Cho 21,6 gam hỗn hợp X gồm methylamine, ethylamine và propylamine (có tỉ lệ số mol tương ứng là 1 : 2 : 1) tác dụng hết với dung dịch HCl thu được m gam muối. Giá trị của m là?", "options": ["A. 36,20.", "B. 39,12.", "C. 43,50.", "D. 40,58."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Cho 0,2 mol hỗn hợp gồm ethylamine và dimethylamine tác dụng với dung dịch HNO3 loãng dư, thu được m gam muối. Giá trị m là?", "options": ["A. 21,6 gam.", "B. 16,1 gam.", "C. 16,3 gam.", "D. 21,4 gam."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Một kỹ thuật viên trong phòng thí nghiệm hóa học sử dụng 0,25 mol propylamine để phản ứng với 0,25 mol nitric acid nhằm điều chế muối propylammonium nitrate. Với hiệu suất phản ứng là 80% thì khối lượng muối thu được là?", "options": ["A. 18,3 gam.", "B. 20,3 gam.", "C. 24,4 gam.", "D. 24,3 gam."], "correctAnswer": "C"},
  {"id": 14, "type": "multiple_choice", "content": "Hỗn hợp E gồm hai amine (no, đơn chức, đồng đẳng kế tiếp); dung dịch T gồm HCl và HNO3 loãng có tỉ lệ số mol tương ứng là 2 : 1. Cho 3,82 gam E phản ứng vừa đủ với T, thu được 6,54 gam hỗn hợp muối. Công thức phân tử của hai amine trong X là?", "options": ["A. CH5N và C2H7N.", "B. C2H7N và C3H9N.", "C. C3H9N và C4H11N.", "D. C4H11N và C5H13N."], "correctAnswer": "A"},
  {"id": 15, "type": "multiple_choice", "content": "Một nhà nghiên cứu đang phát triển một loại thuốc mới và sử dụng 2,0 gam n-butylamine để phản ứng với lượng dư acetic acid nhằm tạo thành muối có tính chất kháng khuẩn. Khối lượng muối thu được là?", "options": ["A. 3,87 gam.", "B. 3,64 gam.", "C. 4,87 gam.", "D. 5,87 gam."], "correctAnswer": "A"},
  {"id": 16, "type": "multiple_choice", "content": "Cho 2,3 gam ethylamine phản ứng với dung dịch muối ammonium chloride dư. Khối lượng muối thu được là?", "options": ["A. 4,17 gam.", "B. 4,95 gam.", "C. 3,86 gam.", "D. 6,42 gam."], "correctAnswer": "A"},
  {"id": 17, "type": "multiple_choice", "content": "Cho 0,15 mol methylamine tác dụng với HNO2 dư ở nhiệt độ thường, thu được V lít khí N2 (đkc). Giá trị của V là?", "options": ["A. 3,359 L.", "B. 3,719 L.", "C. 5,038 L.", "D. 6,718 L."], "correctAnswer": "B"},
  {"id": 18, "type": "multiple_choice", "content": "Để điều chế 0,2 mol muối benzenediazonium chloride với hiệu suất 90%, lượng aniline cần dùng là?", "options": ["A. 0,2 mol.", "B. 0,25 mol.", "C. 0,222 mol.", "D. 0,180 mol."], "correctAnswer": "C"},
  {"id": 19, "type": "multiple_choice", "content": "Trung hòa hoàn toàn 14,16 gam một amine X bằng acid HCl, tạo ra 22,92 gam muối. Amine X tác dụng với nitrous acid ở nhiệt độ thường, giải phóng khí nitrogen. Amine X là?", "options": ["A. H2NCH2CH2CH2NH2.", "B. CH3CH2CH2NH2.", "C. CH3CH2NHCH3.", "D. H2NCH2CH2NH2."], "correctAnswer": "B"},
  {"id": 20, "type": "multiple_choice", "content": "Hỗn hợp 1,07 gam hai amine đơn chức bậc nhất kế tiếp nhau trong dãy đồng đẳng phản ứng vừa hết với nitrous acid ở nhiệt độ thường tạo nên dung dịch X. Cho X tác dụng với Na dư thu được 0,03 mol H2. Xác định công thức 2 amine:", "options": ["A. C3H7NH2 và C4H9NH2.", "B. C2H5NH2 và C3H7NH2.", "C. CH3NH2 và C2H5NH2.", "D. CH3NH2 và C3H7NH2."], "correctAnswer": "C"},
  {"id": 21, "type": "fill_blank", "content": "Một công ty hóa chất X liên kết với công ty may mặc Y, sản xuất ra hợp chất azo màu vàng với một lượng lớn để công ty Y nhuộm cho 3000 chiếc thảm trải sàn và 1000 chiếc túi đựng. Nguyên liệu chính mà công ty hóa chất X sử dụng là aniline và toàn bộ quá trình sản xuất được thực hiện theo sơ đồ chuyển hóa.<br>Biết rằng:<br>+ Mỗi chiếc thảm trải sàn cần 1,5 m² vải với khối lượng 500 g/m².<br>+ Mỗi chiếc túi đựng cần 0,8 m² vải với khối lượng 600 g/m².<br>+ Để nhuộm 100 kg vải cần 280 gam hợp chất azo (màu vàng).<br>+ Hiệu suất quá trình (1) là 80% và hiệu suất quá trình (2) tính theo các chất phản ứng đều bằng 90%.<br>Tổng khối lượng aniline tối thiểu mà công ty X cần sử dụng trong quá trình sản xuất là bao nhiêu kg? (Kết quả làm tròn đến hàng phần mười).", "options": [], "correctAnswer": "11.2"},
  {"id": 22, "type": "multiple_choice", "content": "Để tổng hợp tribromoaniline, 5,0 gam aniline phản ứng với bromine dư. Khối lượng sản phẩm tribromoaniline thu được với hiệu suất 85% là?", "options": ["A. 18,37 gam.", "B. 15,08 gam.", "C. 22,22 gam.", "D. 24,24 gam."], "correctAnswer": "B"},
  {"id": 23, "type": "multiple_choice", "content": "Trong một nhà máy sản xuất hóa chất, người ta sử dụng 4,5 gam aniline để phản ứng với bromine dư. Hiệu suất phản ứng là 90%. Khối lượng sản phẩm tribromoaniline thu được là:", "options": ["A. 14,4 gam.", "B. 16,3 gam.", "C. 15,9 gam.", "D. 22,3 gam."], "correctAnswer": "A"},
  {"id": 24, "type": "multiple_choice", "content": "Một nhà máy sản xuất thuốc nhuộm sử dụng 5,813 gam aniline phản ứng với bromine dư. Khối lượng bromine cần dùng để phản ứng hoàn toàn với aniline là:", "options": ["A. 12,0 gam.", "B. 18,0 gam.", "C. 24,0 gam.", "D. 30,0 gam."], "correctAnswer": "D"},
  {"id": 25, "type": "fill_blank", "content": "Một nhà máy sản xuất thuốc nhuộm sử dụng 5,813 kg aniline để phản ứng với bromine nhằm tạo ra tribromoaniline, một hợp chất quan trọng trong quá trình nhuộm vải. Mỗi kg tribromoaniline thu được có thể bán với giá 3.500.000 VNĐ. Chi phí cho mỗi kg bromine là 250.000 VNĐ và chi phí cho mỗi kg aniline là 480.000 VNĐ. Giả sử hiệu suất phản ứng đạt 60%, hãy tính lợi nhuận (triệu VNĐ) mà nhà máy thu được từ quá trình sản xuất này (bỏ qua hết các chi phí khác).", "options": [], "correctAnswer": "12.8"}
],
"thpt_ly_04": [
  {"id": 1, "type": "multiple_choice", "content": "Để giải thích các hiện tượng nhiệt quan sát được như: sự tồn tại của các thể, sự truyền nhiệt, sự nóng chảy, sự bay hơi,… các nhà khoa học đã đưa ra mô hình lý thuyết khái quát về cấu tạo chất, gọi là", "options": ["A. mô hình động học phân tử.", "B. thuyết động lực học phân tử.", "C. mô hình động lực học phân tử.", "D. thuyết cấu tạo phân tử."], "correctAnswer": "A"},
  {"id": 2, "type": "multiple_choice", "content": "Hình vẽ mô tả chuyển động phân tử ở các thể khác nhau. Hình cầu là phân tử, mũi tên là hướng chuyển động của phân tử. Hình vẽ mô tả chuyển động phân tử tương ứng với thể rắn, thể lỏng và thể khí lần lượt là<br><img src='https://i.postimg.cc/GhdKHJv4/1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. (1), (2) và (3).", "B. (2), (3) và (1).", "C. (3), (2) và (1).", "D. (2), (1) và (3)."], "correctAnswer": "B"},
  {"id": 3, "type": "multiple_choice", "content": "Vì sao các phân tử chất lỏng linh động hơn các phân tử chất rắn?", "options": ["A. Vì các phân tử dao động xung quanh vị trí cân bằng và các vị trí cân bằng này lại có thể di chuyển được.", "B. Vì các phân tử dao động xung quanh vị trí cân bằng.", "C. Vì các phân tử đứng yên tại các vị trí cân bằng và các vị trí cân bằng này lại có thể di chuyển được.", "D. Vì các phân tử chuyển động hỗn loạn."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Gọi x, y và z lần lượt khoảng cách trung bình giữa các phân tử của một chất (không phải là nước) ở thể rắn, lỏng và khí. Chọn kết luận đúng.", "options": ["A. z < y < x.", "B. x < z < y.", "C. y < x < z.", "D. x < y < z."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Thanh sắt được cấu tạo từ các phân tử chuyển động không ngừng nhưng tại sao lại không bị tan rã thành các hạt riêng biệt? Vì giữa các phân tử", "options": ["A. có lực hút tĩnh điện bền vững.", "B. có một chất kết dính gắn kết các phân tử.", "C. có lực tương tác.", "D. không lực tương tác."], "correctAnswer": "C"},
  {"id": 6, "type": "multiple_choice", "content": "Trong vật lí, chuyển động Brown là đề cập đến chuyển động", "options": ["A. hỗn loạn của các hạt rất nhỏ dưới tác dụng của các phân tử chất lỏng hoặc chất khí.", "B. có hướng của các phân tử dưới tác dụng của điện trường.", "C. thẳng đều của các nút mạng tinh thể.", "D. thẳng đều của các electron dưới tác dụng của các phân tử chất lỏng hoặc chất khí."], "correctAnswer": "A"},
  {"id": 7, "type": "multiple_choice", "content": "Vật ở thể rắn có", "options": ["A. thể tích và hình dạng riêng, rất khó nén.", "B. thể tích và hình dạng riêng, dễ nén.", "C. thể tích riêng nhưng không có hình dạng riêng, rất khó nén.", "D. thể tích riêng nhưng không có hình dạng riêng, dễ nén."], "correctAnswer": "A"},
  {"id": 8, "type": "multiple_choice", "content": "Ở nhiệt độ hàng triệu độ chất tồn tại ở thể", "options": ["A. plasma.", "B. rắn.", "C. lỏng.", "D. khí."], "correctAnswer": "A"},
  {"id": 9, "type": "multiple_choice", "content": "Hình vẽ nào mô tả đúng sơ đồ các hình thức chuyển thể.<br><img src='https://i.postimg.cc/y8ryQMt2/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. H1.", "B. H2.", "C. H3.", "D. H4."], "correctAnswer": "B"},
  {"id": 10, "type": "multiple_choice", "content": "Chất rắn kết tinh có cấu trúc tinh thể. Đó là cấu trúc tạo bởi các hạt (phân tử, nguyên tử, ion) liên kết chặt với nhau và sắp xếp", "options": ["A. theo một trật tự hình học tuần hoàn không gian xác định gọi là mạng tinh thể.", "B. theo một trật tự hình học tuần hoàn không gian xác định gọi là mạng kết tinh.", "C. thành các khối cầu đối xứng gọi là mạng tinh thể.", "D. ngẫu nhiên không có trật tự."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Ở điều kiện thường, chất nào sau đây là không phải là chất rắn vô định hình?", "options": ["A. Nhựa đường.", "B. Cao su.", "C. Kẽm.", "D. Thủy tinh."], "correctAnswer": "C"},
  {"id": 12, "type": "multiple_choice", "content": "Muối ăn có cấu trúc tinh thể gồm các …(1)… có vị trí cân bằng trùng với đỉnh của khối …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) phân tử NaCl; (2) cầu.", "B. (1) ion Na+ và Cl-; (2) cầu.", "C. (1) ion Na+ và Cl-; (2) lập phương.", "D. (1) phân tử NaCl; (2) lập phương."], "correctAnswer": "C"},
  {"id": 13, "type": "multiple_choice", "content": "Cho một ít nước đá có nhiệt độ dưới 0 °C vào trong một bình chứa. Đun nóng bình chứa (ở áp suất tiêu chuẩn) thì nhiệt độ của nước đá tăng dần đến 0 °C. Khi đạt 0 °C nước đá tan dần thành nước trong suốt thời gian nước đá chuyển thành nước nhiệt độ của hệ (nước đá và nước)", "options": ["A. không đổi luôn ở nhiệt độ điểm ba của nước.", "B. luôn tăng lên.", "C. không đổi luôn ở 4 °C.", "D. không đổi luôn ở 0 °C."], "correctAnswer": "D"},
  {"id": 14, "type": "multiple_choice", "content": "Hình vẽ bên là đồ thị sự thay đổi nhiệt độ của chất rắn kết tinh khi được làm nóng chảy. Trong khoảng thời gian từ ta đến tb thì<br><img src='https://i.postimg.cc/x8RKKhLk/3.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. chất rắn không nhận năng lượng từ nguồn nhiệt.", "B. nhiệt độ chất rắn tăng.", "C. nhiệt độ chất rắn giảm.", "D. chất rắn đang nóng chảy."], "correctAnswer": "D"},
  {"id": 15, "type": "multiple_choice", "content": "Mỗi chất rắn kết tinh", "options": ["A. có nhiệt độ nóng chảy riêng ở một áp suất xác định.", "B. không có nhiệt độ đông đặc riêng.", "C. có nhiệt độ nóng chảy riêng và không phụ thuộc vào áp suất.", "D. đều thăng hoa."], "correctAnswer": "A"},
  {"id": 16, "type": "multiple_choice", "content": "Chọn câu sai. Chất rắn vô định hình", "options": ["A. không có nhiệt độ nóng chảy xác định.", "B. khi bị nung nóng thì mềm dần cho đến khi trở thành lỏng.", "C. trong quá trình hóa lỏng nhiệt độ của nó tăng liên tục.", "D. có cấu trúc tinh thể."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Hiện tượng nóng chảy không được ứng dụng trong lĩnh vực (công cụ) nào sau đây?", "options": ["A. công nghiệp luyện kim.", "B. hàn điện.", "C. thực phẩm.", "D. kích thủy lực."], "correctAnswer": "D"},
  {"id": 18, "type": "multiple_choice", "content": "Ở áp suất tiêu chuẩn, chất X có nhiệt độ nóng chảy riêng xác định. Chất X không thể là", "options": ["A. chất rắn kết tinh.", "B. chất rắn vô định hình.", "C. kim loại nhẹ.", "D. kim loại nặng."], "correctAnswer": "B"},
  {"id": 19, "type": "multiple_choice", "content": "Vòng tuần hoàn nước là sự tồn tại và vận động của nước trên mặt đất, trong lòng đất và trong bầu khí quyển của Trái Đất. Vòng tuần hoàn nước liên quan đến", "options": ["A. sự chuyển thể.", "B. chuyển động tự quay của Trái Đất.", "C. chuyển động Trái Đất quanh Mặt Trời.", "D. dòng chảy của nước."], "correctAnswer": "A"},
  {"id": 20, "type": "multiple_choice", "content": "Một số chất rắn như iodine (i-ốt), băng phiến, đá khô (CO2 ở thể rắn),… có khả năng chuyển trực tiếp sang …(1)…khi nó …(2). Hiện tượng trên gọi là sự thăng hoa. Ngược lại, với sự thăng hoa là sự ngưng kết. Điền cụm từ thích hợp vào chỗ trống.", "options": ["A. (1) thể lỏng; (2) tỏa nhiệt.", "B. (1) thể hơi; (2) tỏa nhiệt.", "C. (1) thể lỏng; (2) nhận nhiệt.", "D. (1) thể hơi; (2) nhận nhiệt."], "correctAnswer": "D"},
  {"id": 21, "type": "multiple_choice", "content": "Đồ thị minh họa sự thay đổi nhiệt độ của chất X theo thời gian khi nhận nhiệt và chuyển các thể. Chất X có thể là<br><img src='https://i.postimg.cc/P5c1zm8T/4.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. cồn.", "B. nước.", "C. kim loại.", "D. băng phiến."], "correctAnswer": "B"},
  {"id": 22, "type": "multiple_choice", "content": "Cồn y tế chuyển từ thể lỏng sang thể khí rất nhanh ở điều kiện thông thường. Hãy giải thích tại sao khi xoa cồn vào da ta cảm thấy lạnh ở vùng da đó? Vì cồn", "options": ["A. thu nhiệt lượng từ cơ thể qua chỗ da đó để bay hơi.", "B. khi bay hơi tỏa nhiệt lượng vào chỗ da đó.", "C. khi bay hơi kéo theo lượng nước chỗ da đó ra khỏi cơ thể.", "D. khi bay hơi tạo ra dòng nước mát tại chỗ da đó."], "correctAnswer": "A"},
  {"id": 23, "type": "multiple_choice", "content": "Các phân tử ở bề mặt chất lỏng tham gia chuyển động nhiệt, trong đó có những phân tử chuyển động …(1). Một số phân tử chất lỏng này có …(2)… thắng lực liên kết giữa các phân tử chất lỏng với nhau thì chúng có thể thoát ra khỏi mặt thoáng trở thành các phân tử hơi. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) hướng ra ngoài chất lỏng; (2) thế năng đủ lớn.", "B. (1) hướng ra ngoài chất lỏng; (2) động năng đủ lớn.", "C. (1) hướng vào trong chất lỏng; (2) động năng đủ lớn.", "D. (1) hướng vào trong chất lỏng; (2) thế năng đủ lớn."], "correctAnswer": "B"},
  {"id": 24, "type": "multiple_choice", "content": "Dựa vào mô hình động học phân tử ta giải thích sự sôi như sau: Khi nhiệt độ của nước tăng tới khoảng 100 °C dưới áp suất tiêu chuẩn thì nước bắt đầu sôi. Khi đó các bọt chứa không khí và hơi nước nổi lên trong lòng nước càng ngày càng nhiều, càng nổi lên trên thể tích các bọt khí càng tăng, tới mặt thoáng thì vỡ, không khí và hơi nước thoát ra ngoài khí quyển. Do đó sự sôi là sự hóa hơi", "options": ["A. chỉ ở trong lòng chất lỏng.", "B. chỉ ở trên mặt thoáng của chất lỏng.", "C. ở nhiệt độ tiêu chuẩn.", "D. đồng thời ở trong lòng và trên mặt thoáng của chất lỏng."], "correctAnswer": "D"},
  {"id": 25, "type": "multiple_choice", "content": "Trong quá trình sôi của chất lỏng, nhiệt độ không tăng mặc dù các phân tử luôn nhận năng lượng từ bên ngoài. Các phân tử nhận thêm năng lượng dùng để …(1)…với các phân tử xung quanh, khiến phân tử …(2). Chất lỏng chuyển thành chất khí. Điền vào chỗ trống cụm từ thích hợp.", "options": ["A. (1) va chạm; (2) chuyển động tự do.", "B. (1) phá vỡ liên kết; (2) chuyển động tự do.", "C. (1) phá vỡ liên kết; (2) chuyển thành các ion.", "D. (1) va chạm; (2) chuyển thành các ion."], "correctAnswer": "B"},
  {"id": 26, "type": "multiple_choice", "content": "Đun nóng bình chứa nước thì nhiệt độ của nước tăng dần đến 100 °C. Khi đạt 100 °C, nước sôi và chuyển dần thành hơi nước. Trong suốt thời gian chuyển thành hơi nước, nhiệt độ của nước", "options": ["A. giảm xuống dưới 100 °C.", "B. tăng lên cao hơn 100 °C.", "C. không đổi luôn ở trên 100 °C.", "D. không đổi luôn ở 100 °C."], "correctAnswer": "D"},
  {"id": 27, "type": "multiple_choice", "content": "Khi đun chất lỏng đến nhiệt độ sôi, do tiếp tục được cung cấp nhiệt năng nên các phân tử chất lỏng chuyển động nhiệt mạnh hơn, làm phá vỡ …(1)… giữa các phân tử chất lỏng với nhau, phân tử chất lỏng chuyển sang phân tử hơi. Hiện tượng này diễn ra ở …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) sự liên kết; (2) bề mặt và cả trong lòng khối chất lỏng.", "B. (1) sự liên kết; (2) chỉ bề mặt.", "C. (1) cấu trúc phân tử; (2) chỉ trong lòng khối chất lỏng.", "D. (1) cấu trúc phân tử; (2) chỉ trong lòng khối chất lỏng."], "correctAnswer": "A"},
  {"id": 28, "type": "true_false", "content": "Nội dung sau đây đề cập đến mô hình động học phân tử.", "options": [], "propositions": ["a) Vật chất được cấu tạo bởi một số rất lớn những hạt có kích thước rất nhỏ gọi là phân tử.", "b) Các phân tử chuyển động không ngừng theo mọi hướng gọi là chuyển động nhiệt.", "c) Các phân tử chuyển động nhiệt càng nhanh thì nhiệt độ của vật càng cao.", "d) Giữa các phân tử có các lực tương tác (hút và đẩy). Khi các phân tử gần nhau thì lực hút chiếm ưu thế và khi xa nhau thì lực đẩy chiếm ưu thế."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 29, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất ở thể khí.", "options": [], "propositions": ["a) Các phân tử ở xa nhau hơn so với các phân tử trong chất lỏng.", "b) Khoảng cách giữa các phân tử rất lớn so với kích thước của chúng nên lực tương tác giữa các phân tử hầu như không đáng kể ngay cả khi va chạm nhau.", "c) Các phân tử khí chuyển động hỗn loạn về mọi phía chiếm toàn bộ không gian của bình chứa.", "d) Một lượng khí nhất định không có thể tích và hình dạng riêng mà có thể tích và hình dạng của bình chứa."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 30, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất ở thể lỏng.", "options": [], "propositions": ["a) Khoảng cách trung bình giữa các phân tử, trong chất lỏng lớn hơn trong chất rắn và nhỏ hơn trong chất khí.", "b) Lực liên kết giữa các phân tử, ở thể lỏng lớn hơn ở thể khí và nhỏ hơn ở thể rắn.", "c) Lực liên kết phân tử giữ được các phân tử không bị phân tán xa nhau do đó chất lỏng có thể tích riêng xác định.", "d) Các phân tử ở thể lỏng, dao động xung quanh vị trí cân bằng di chuyển được nên khối chất lỏng rất khó bị nén và có hình dạng xác định."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 31, "type": "true_false", "content": "Các nội dung sau nói về chuyển thể.", "options": [], "propositions": ["a) Khi thay đổi nhiệt độ các chất có thể chuyển từ thể này sang thể khác.", "b) Đa số các chất ở thể rắn khi nóng lên có thể chuyển sang thể lỏng, rồi từ thể lỏng sang thể khí.", "c) Một số ít chất khí khi lạnh đi có thể chuyển sang thể lỏng, rồi từ thể lỏng sang thể rắn.", "d) Đa số các chất có thể chuyển trực tiếp từ thể rắn sang thể khí và ngược lại."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 32, "type": "true_false", "content": "Nội dung sau đây đề cập đến chất rắn kết tinh và chất rắn vô định hình.", "options": [], "propositions": ["a) Chất rắn vô định hình là chất mà các hạt cấu tạo nên nó ở thể rắn liên kết với nhau một cách chặt chẽ sắp xếp theo một trật tự hình học xác định tạo thành các mạng tinh thể.", "b) Chất rắn kết tinh là chất ở thể rắn mà các hạt tạo nên nó không tạo thành mạng tinh thể.", "c) Ở điều kiện thường, đa số các kim loại là các chất kết tinh.", "d) Thủy tinh, nhựa đường, các chất dẻo … là các chất vô định hình."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 33, "type": "true_false", "content": "Các nội dung sau đây đề cập đến sự bay hơi và sự sôi của chất lỏng.", "options": [], "propositions": ["a) Sự bay hơi là sự hóa hơi xảy ra ở mặt thoáng của khối chất lỏng.", "b) Sự sôi là sự hóa hơi xảy ra ở cả mặt thoáng và trong lòng chất của khối chất lỏng.", "c) Sự bay hơi diễn ra chỉ ở một số nhiệt độ nhất định.", "d) Sự sôi diễn ra ở nhiệt độ sôi."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "true"}},
  {"id": 34, "type": "true_false", "content": "Khi nước trong bình đang sôi thì năng lượng mà nước nhận được từ nguồn nhiệt", "options": [], "propositions": ["a) được chuyển hóa hoàn toàn thành động năng của các phân tử hơi nước.", "b) không làm tăng nhiệt độ.", "c) làm tăng động năng chuyển động trung bình của phân tử nước trong bình và cả các phân tử hơi nước.", "d) dùng để chuyển thể lỏng sang thể hơi."], "correctAnswer": {"0": "false", "1": "true", "2": "false", "3": "true"}},
  {"id": 35, "type": "true_false", "content": "Các nội dung sau đề cập đến vai trò của sự bay hơi.", "options": [], "propositions": ["a) Nước từ sông, hồ, biển, … liên tục bay hơi tạo thành mây, sương mù, mưa, làm cho khí hậu điều hòa.", "b) Sự bay hơi của nước biển được ứng dụng trong ngành sản xuất muối.", "c) Sự bay hơi của các khí ammonia (NH3), difluoromethane (CH2F2) được ứng dụng trong các thiết bị làm lạnh như: tủ lạnh, máy điều hòa.", "d) Sự bay hơi của kim loại được ứng dụng trong hàn điện."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "false"}},
  {"id": 36, "type": "fill_blank", "content": "Ở nhiệt độ 27,0 °C, các phân tử hydrogen chuyển động với tốc độ trung bình khoảng 1900 m/s. Khối lượng của phân tử hydrogen 33,6.10^-28 kg. Động năng trung bình của 10^21 phân tử hydrogen bằng bao nhiêu J (viết đáp số 3 con số)?", "options": [], "correctAnswer": "6.06"}
],
"thpt_ly_05": [
  {"id": 1, "type": "multiple_choice", "content": "Nhiệt động lực học là lĩnh vực vật lý nghiên cứu về năng lượng nhiệt và sự truyền nhiệt. Nhiệt động lực học ra đời vào giữa thế kỷ XIX trong quá trình con người tìm hiểu về sự chuyển hóa năng lượng dự trữ trong các nhiên liệu thành", "options": ["A. điện năng để chế tạo các động cơ nhiệt.", "B. cơ năng để chế tạo các máy lạnh.", "C. cơ năng để chế tạo các động cơ nhiệt.", "D. quang năng để chế tạo các động cơ nhiệt."], "correctAnswer": "C"},
  {"id": 2, "type": "multiple_choice", "content": "Câu nào sau đây là đúng?", "options": ["A. Nội năng của một hệ nhất định phải có thế năng tương tác giữa các hạt cấu tạo nên hệ.", "B. Nhiệt lượng truyền cho hệ chỉ làm tăng tổng động năng của chuyển động nhiệt của các hạt cấu tạo nên hệ.", "C. Công tác động lên hệ có thể làm thay đổi cả tổng động năng chuyển động nhiệt của các hạt cấu tạo nên hệ và thế năng tương tác giữa chúng.", "D. Nói chung, nội năng là hàm của nhiệt độ và thể tích, nên nếu thể tích của hệ đã thay đổi thì nội năng của hệ phải thay đổi."], "correctAnswer": "C"},
  {"id": 3, "type": "multiple_choice", "content": "Nhiệt động lực học là một lĩnh vực vật lý nghiên cứu các hiện tượng về nhiệt, quá trình về nhiệt của thế giới tự nhiên về mặt …(1)… và biến đổi …(2). Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) năng lượng; (2) năng lượng.", "B. (1) nhiệt động; (2) nhiệt động.", "C. (1) năng lượng; (2) nhiệt động.", "D. (1) nhiệt động; (2) năng lượng."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Trong quá trình thực hiện công, …(1)… từ dạng năng lượng khác (ví dụ cơ năng chẳng hạn) sang …(2). Điền vào chỗ trống cụm từ thích hợp.", "options": ["A. (1) không có sự chuyển hóa; (2) nội năng.", "B. (1) có sự chuyển hóa; (2) hóa năng.", "C. (1) không có sự chuyển hóa; (2) hóa năng.", "D. (1) có sự chuyển hóa; (2) nội năng."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Khi nhiệt độ của hệ thay đổi thì động năng của các phân tử cấu tạo nên hệ thay đổi. Do đó, nội năng phụ thuộc vào …(1)… của hệ. Mặt khác, khi thể tích hệ thay đổi thì khoảng cách giữa các phân tử cấu tạo nên hệ thay đổi, làm cho thế năng tương tác giữa chúng thay đổi. Vì thế, nội năng cũng phụ thuộc vào …(2)… của hệ. Điền cụm từ thích hợp vào chỗ trống.", "options": ["A. (1) khối lượng; (2) thể tích.", "B. (1) nhiệt độ; (2) thể tích.", "C. (1) nhiệt độ; (2) khối lượng riêng.", "D. (1) khối lượng; (2) khối lượng riêng."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Làm thế nào để thay đổi nội năng của một vật?", "options": ["A. Chỉ cách duy nhất là thực hiện công.", "B. Chỉ cách duy nhất là truyền nhiệt.", "C. Có hai cách: thực hiện công và truyền nhiệt.", "D. Nội năng là đại lượng bất biến không thay đổi được."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Câu nào sau đây nói về nội năng không đúng?", "options": ["A. Nội năng là một dạng năng lượng.", "B. Nội năng là nhiệt lượng.", "C. Nội năng có thể chuyển hóa thành các dạng năng lượng khác.", "D. Nội năng của một vật có thể tăng lên hoặc giảm đi."], "correctAnswer": "B"},
  {"id": 8, "type": "multiple_choice", "content": "Trong hệ thức biểu diễn định luật I nhiệt động lực học: ΔU = A + Q. Quy ước về dấu của Q và A được diễn tả trên hình vẽ chưa đúng. Hãy sửa lại cho đúng.<br><img src='https://i.postimg.cc/1zQ3Qtk6/1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": ["A. Đổi chỗ (1) và (2) cho nhau.", "B. Đổi chỗ (2) và (3) cho nhau.", "C. Đổi chỗ (3) và (4) cho nhau.", "D. Đổi chỗ (4) và (1) cho nhau."], "correctAnswer": "C"},
  {"id": 9, "type": "multiple_choice", "content": "Nhiệt được truyền vào hỗn hợp nước đá để làm tan chảy một phần băng. Trong quá trình này, hỗn hợp nước đá:", "options": ["A. thực hiện công.", "B. có nhiệt độ tăng lên.", "C. có nội năng tăng lên.", "D. hiện công, có nhiệt độ tăng và nội năng cũng tăng."], "correctAnswer": "C"},
  {"id": 10, "type": "multiple_choice", "content": "Một quả bóng khối lượng 100 g rơi từ độ cao 10 m xuống sân và nảy lên được 7 m. Sở dĩ bóng không nảy lên được tới độ cao ban đầu là vì một phần cơ năng của quả bóng đã chuyển hóa thành nội năng của", "options": ["A. chỉ quả bóng và của sân.", "B. chỉ quả bóng và không khí.", "C. chỉ mỗi sân và không khí.", "D. quả bóng, mặt sân và không khí."], "correctAnswer": "D"},
  {"id": 11, "type": "multiple_choice", "content": "Mỗi động cơ nhiệt đều có ba bộ phận chính: (1) Nguồn nóng có nhiệt độ T1 cung cấp nhiệt cho động cơ; (2) bộ phận phát động trong đó tác nhân nhận nhiệt từ nguồn nóng, giãn nở sinh công; (3) Nguồn lạnh có nhiệt độ T2 < T1 nhận nhiệt lượng do động cơ tỏa ra. Tác nhân nhận từ nguồn nóng nhiệt lượng Q1 và truyền cho nguồn lạnh nhiệt lượng Q2 thì phần nhiệt lượng chuyển thành công cơ học bằng", "options": ["A. Q1 – 0,5Q2.", "B. Q1 – Q2.", "C. Q2 – 0,5Q1.", "D. Q2 – Q1."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Giả sử cung cấp cho hệ nhiệt động một công là 200 J nhưng nhiệt lượng bị thất thoát ra môi trường bên ngoài là 120 J. Hỏi nội năng biến thiên bao nhiêu J?", "options": ["A. Giảm 320 J.", "B. Tăng 80 J.", "C. Giảm 80 J.", "D. Tăng 320 J."], "correctAnswer": "B"},
  {"id": 13, "type": "true_false", "content": "Các phân tử chuyển động hỗn loạn không ngừng nên chúng có động năng. Các phân tử tương tác với nhau nên chúng có thế năng.", "options": [], "propositions": ["a) Động năng phân tử phụ thuộc vào tốc độ chuyển động của phân tử.", "b) Thế năng phân tử phụ thuộc vào khoảng cách giữa các phân tử.", "c) Nội năng của vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật.", "d) Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật."], "correctAnswer": {"0": "true", "1": "true", "2": "true", "3": "true"}},
  {"id": 14, "type": "true_false", "content": "Vì số phân tử trong một vật vô cùng lớn và các phân tử chuyển động hỗn loạn nên", "options": [], "propositions": ["a) không thể xác định được chính xác độ lớn nội năng của một vật.", "b) trong vật lý người ta chủ yếu quan tâm đến độ biến thiên nội năng của vật.", "c) nội năng của vật không phụ thuộc vào nhiệt độ của vật.", "d) nội năng của vật chỉ phụ thuộc vào thể tích của vật."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 15, "type": "true_false", "content": "Một khối khí đựng trong xi lanh. Ta dùng tay ấn pít tông xuống dưới.<br><img src='https://i.postimg.cc/ry3cTsWd/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí không thay đổi.", "b) Nội năng của khối khí không đổi.", "c) Thể tích khối khí giảm.", "d) Áp suất khối khí không đổi."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "false"}},
  {"id": 16, "type": "true_false", "content": "Một khối khí đựng trong xi lanh. Ta dùng ngọn lửa đốt nóng xi lanh trong thời gian đủ dài (pít tông không dịch chuyển).<br><img src='https://i.postimg.cc/ry3cTsWd/2.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí tăng lên.", "b) Nội năng của khối khí giảm.", "c) Động năng trung bình của phân tử khí tăng.", "d) Áp suất khối khí không đổi."], "correctAnswer": {"0": "true", "1": "false", "2": "true", "3": "false"}},
  {"id": 17, "type": "true_false", "content": "Dùng đèn cồn đun nóng bình đựng nước. Đặt ống nghiệm đựng bột băng phiến vào bình nước. Trong thời gian bột băng phiến đang nóng chảy thì", "options": [], "propositions": ["a) nhiệt độ của băng phiến tăng.", "b) năng lượng nhận từ nguồn nhiệt dùng để phá vỡ liên kết.", "c) thế năng của các phân tử băng phiến thay đổi.", "d) nội năng của bột băng phiến tăng."], "correctAnswer": {"0": "false", "1": "true", "2": "true", "3": "true"}},
  {"id": 18, "type": "true_false", "content": "Nội dung sau đề cập đến nhiệt lượng và nội năng.", "options": [], "propositions": ["a) Nhiệt lượng là số đo nhiệt năng được truyền từ vật này sang vật khác trong quá trình truyền nhiệt.", "b) Khi không có quá trình truyền nhiệt thì không có công.", "c) Nội năng là một dạng năng lượng.", "d) Mọi vật luôn có nội năng."], "correctAnswer": {"0": "true", "1": "false", "2": "true", "3": "true"}},
  {"id": 19, "type": "true_false", "content": "Một học sinh thực hiện thí nghiệm, dùng lực để nén khối khí có thể tích V trong một xi lanh để thể tích khí giảm một lượng ΔV thì nhiệt độ khối khí tăng 0,6 °C.<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) Nhiệt độ khối khí tăng phần lớn là do công của lực pít tông thực hiện lên khối khí.", "b) Phần nhiệt tạo ra do ma sát giữa pít tông và xi lanh có nhưng không đáng kể.", "c) Trong thí nghiệm trên, độ tăng nhiệt độ không phụ thuộc ΔV.", "d) Trong thí nghiệm trên, độ tăng nhiệt độ không phụ thuộc V."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 20, "type": "true_false", "content": "Khi bay hơi, các phân tử chất lỏng thoát ra ngoài làm mất đi năng lượng dưới dạng động năng dẫn đến", "options": [], "propositions": ["a) nội năng của khối chất lỏng giảm.", "b) nhiệt độ của khối chất lỏng giảm.", "c) quá trình đông đặc chuyển sang trạng thái rắn.", "d) thể tích khối chất lỏng tăng lên."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 21, "type": "true_false", "content": "Cung cấp nhiệt lượng 1,5 J cho một khối khí trong một xilanh đặt nằm ngang. Chất khí nở ra đẩy pít tông đi một đoạn 6,0 cm. Biết lực ma sát giữa pít tông và xi lanh có độ lớn là 20,0 N, diện tích tiết diện pít tông là 1,0 cm2.", "options": [], "propositions": ["a) Công của khối khí thực hiện là 1,2 J.", "b) Độ biến thiên nội năng của khối khí là 0,50 J.", "c) Trong quá trình dãn nở, áp suất của chất khí là 2,0.10^5 Pa.", "d) Thể tích khí trong xilanh tăng 6,0 lít."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 22, "type": "fill_blank", "content": "Một quả bóng khối lượng 0,100 kg rơi từ độ cao 10,00 m xuống sân và nảy lên được 7,00 m. Lấy g = 9,81 m/s2. Độ biến thiên nội năng của hệ gồm quả bóng, mặt sân và không khí bằng bao nhiêu J (lấy 2 chữ số phần thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "2.94"},
  {"id": 23, "type": "fill_blank", "content": "Một vật khối lượng 1,0 kg trượt không vận tốc ban đầu từ đỉnh xuống chân một mặt phẳng dài 21,0 m nghiêng 25° so với mặt ngang. Tốc độ ở chân mặt phẳng là 4,1 m/s. Lấy g = 9,8 m/s2. Tính độ biến thiên nội năng của vật (theo J, lấy 1 chữ số thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "78.6"},
  {"id": 24, "type": "fill_blank", "content": "Một viên đạn bằng chì có khối lượng 3,00 g đang bay với tốc độ 240 m/s thì cắm ngập vào một tấm gỗ dày. Nếu có 50% cơ năng viên đạn chuyển thành nội năng của nó thì nội năng viên đạn tăng bao nhiêu J (lấy 1 chữ số thập phân)?", "options": [], "correctAnswer": "43.2"},
  {"id": 25, "type": "fill_blank", "content": "Một tấm nhôm nặng 0,20 kg, trượt xuống mặt phẳng dài 15 m nghiêng 30°. Lấy g = 9,81 m/s2. Biết 90% cơ năng bị tiêu hao chuyển thành nội năng của tấm nhôm. Khi trượt đến chân mặt phẳng nghiêng độ tăng nội năng là 10 J thì phần nhiệt năng tấm nhôm tỏa ra môi trường là bao nhiêu J (lấy 2 chữ số thập phân)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "3.24"},
  {"id": 26, "type": "fill_blank", "content": "Có hai quả cầu kim loại cùng kích thước, có động năng lần lượt là 100 J và 128 J, chuyển động ngược chiều đến va chạm mềm trực diện. Quả cầu có động năng bé hơn có khối lượng gấp đôi quả cầu còn lại. Độ tăng nội năng của hệ hai quả cầu là bao nhiêu J (chỉ lấy phần nguyên)?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "225"}
],
"thpt_ly_06": [
  {"id": 1, "type": "multiple_choice", "content": "Đại lượng vật lý nào cho biết xu hướng truyền năng lượng nhiệt giữa các vật?", "options": ["A. nhiệt độ.", "B. nhiệt năng.", "C. nhiệt giai.", "D. nhiệt dung."], "correctAnswer": "A"},
  {"id": 2, "type": "multiple_choice", "content": "Nếu nhiệt truyền từ một cái bàn sang một khối băng chuyển động ngang trượt trên mặt bàn thì điều nào sau đây phải đúng?", "options": ["A. Mặt bàn gồ ghề và có ma sát giữa mặt bàn và mặt băng.", "B. Khối băng lạnh hơn cái bàn.", "C. Khối băng đang chuyển pha.", "D. Khối băng đang ở nhiệt độ điểm ba."], "correctAnswer": "B"},
  {"id": 3, "type": "multiple_choice", "content": "Khi hai vật đặt tiếp xúc nhau mà ở trạng thái cân bằng nhiệt thì", "options": ["A. không có năng lượng nhiệt trao đổi giữa hai vật.", "B. khối lượng hai vật bằng nhau.", "C. số phân tử trong hai vật bằng nhau.", "D. vận tốc của hệ hai vật bằng không."], "correctAnswer": "A"},
  {"id": 4, "type": "multiple_choice", "content": "Người ta …(1)… cảm giác nóng lạnh để đo nhiệt độ vì cảm giác này phụ thuộc vào chủ quan của con người và …(2)… được một cách chính xác. Cụm từ còn thiếu (1) và (2) lần lượt là", "options": ["A. “có thể dùng”; “có thể đo”.", "B. “có thể đo”; “có thể dùng”.", "C. “không thể đo”; “không thể dùng”.", "D. “không thể dùng”; “không thể đo”."], "correctAnswer": "D"},
  {"id": 5, "type": "multiple_choice", "content": "Mỗi độ chia (1 °C) trong thang Celsius bằng … của khoảng cách giữa nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ sôi của nước tinh khiết (ở áp suất tiêu chuẩn). Dấu ba chấm còn thiếu là", "options": ["A. 1/273,16.", "B. 1/100.", "C. 1/10.", "D. 1/273,15."], "correctAnswer": "B"},
  {"id": 6, "type": "multiple_choice", "content": "Giá trị của độ không tuyệt đối trong thang Celsius là", "options": ["A. +273,16 °C.", "B. +273,15 °C.", "C. -273,15 °C.", "D. -273,16 °C."], "correctAnswer": "C"},
  {"id": 7, "type": "multiple_choice", "content": "Nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời ở cả ba thể rắn lỏng và hơi trong trạng thái cân bằng nhiệt ở áp suất 0,006 atm được gọi là", "options": ["A. nhiệt độ sôi của nước.", "B. nhiệt độ điểm hai của nước.", "C. nhiệt độ đóng băng của nước.", "D. nhiệt độ điểm ba của nước."], "correctAnswer": "D"},
  {"id": 8, "type": "multiple_choice", "content": "Công thức chuyển nhiệt độ từ thang Celsius sang thang Kelvin là", "options": ["A. T(K) = t(°C) - 273,16.", "B. T(K) = t(°C) - 273,15.", "C. T(K) = t(°C) + 273,16.", "D. T(K) = t(°C) + 273,15."], "correctAnswer": "D"},
  {"id": 9, "type": "multiple_choice", "content": "Một vật được làm lạnh từ 25 °C xuống 5 °C. Hỏi nhiệt độ của vật theo thang Kelvin giảm đi bao nhiêu độ?", "options": ["A. 20 K.", "B. 15 K.", "C. 253 K.", "D. 293 K."], "correctAnswer": "A"},
  {"id": 10, "type": "multiple_choice", "content": "Nhiệt độ của một vật là đại lượng vật lý đặc trưng cho mức độ …(1)… cấu tạo nên vật. Khi các phân tử chuyển động nhiệt …(2)… thì nhiệt độ của vật càng cao và ngược lại. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) chuyển động nhiệt của các phân tử; (2) càng nhanh.", "B. (1) chuyển động có hướng của các phân tử; (2) càng nhanh.", "C. (1) chuyển động nhiệt của các phân tử; (2) càng chậm.", "D. (1) chuyển động có hướng của các phân tử; (2) càng chậm."], "correctAnswer": "A"},
  {"id": 11, "type": "multiple_choice", "content": "Thang nhiệt độ Kelvin có nhiệt độ dùng làm mốc là", "options": ["A. nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn.", "B. nhiệt độ thấp nhất mà các vật có thể đạt được và nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời cả ba thể rắn, lỏng và hơi.", "C. nhiệt độ tan chảy của nước tinh khiết đóng băng và nhiệt độ mà nước tinh khiết có thể tồn tại đồng thời cả ba thể rắn, lỏng và hơi.", "D. nhiệt độ thấp nhất mà các vật có thể đạt được và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn."], "correctAnswer": "B"},
  {"id": 12, "type": "multiple_choice", "content": "Với nhiệt kế thủy ngân, nhiệt độ được xác định dựa trên hiện tượng …(1)… của thủy ngân. Thông qua việc xác định …(2)… của cột thủy ngân ở các nhiệt độ khác nhau ta xác định được nhiệt độ cần đo. Điền vào chỗ trống các cụm từ thích hợp.", "options": ["A. (1) dãn nở vì nhiệt; (2) khối lượng.", "B. (1) phát sáng vì nhiệt; (2) khối lượng.", "C. (1) phát sáng vì nhiệt; (2) độ cao.", "D. (1) dãn nở vì nhiệt; (2) độ cao."], "correctAnswer": "D"},
  {"id": 13, "type": "multiple_choice", "content": "Thang nhiệt độ (còn gọi là nhiệt giai) không thông dụng là", "options": ["A. thang nhiệt độ Celsius.", "B. thang nhiệt độ Kelvin.", "C. thang nhiệt độ Fahrenheit.", "D. thang nhiệt độ Newton."], "correctAnswer": "D"},
  {"id": 14, "type": "multiple_choice", "content": "Khi hai vật có nhiệt độ chênh lệch tiếp xúc nhau thì", "options": ["A. nhiệt năng truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn.", "B. nhiệt năng truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.", "C. công truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.", "D. công truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn."], "correctAnswer": "B"},
  {"id": 15, "type": "multiple_choice", "content": "Đặt cốc nhôm đựng 0,2 lít nước ở nhiệt độ 30 °C (NK1) vào trong bình cách nhiệt đựng 0,5 lít nước ở nhiệt độ 60 °C (NK2). Quan sát sự thay đổi nhiệt độ cho tới khi cân bằng nhiệt. Tại sao có thể biết nước trong bình truyền nhiệt năng cho nước trong cốc? Vì thấy số chỉ", "options": ["A. NK1 và số chỉ NK2 đều giảm.", "B. NK1 và số chỉ NK2 đều tăng.", "C. NK1 giảm còn số chỉ NK2 tăng.", "D. NK1 tăng còn số chỉ NK2 giảm."], "correctAnswer": "D"},
  {"id": 16, "type": "multiple_choice", "content": "Trong nhiệt động lực học người ta coi nhiệt độ là đại lượng đặc trưng cho động năng trung bình của chuyển động nhiệt của phân tử. Động năng trung bình của các phân tử cấu tạo nên vật càng lớn thì", "options": ["A. thể tích của vật càng bé.", "B. thể tích của vật càng lớn.", "C. nhiệt độ của vật càng thấp.", "D. nhiệt độ của vật càng cao."], "correctAnswer": "D"},
  {"id": 17, "type": "multiple_choice", "content": "Xét hai nhận định sau: (1) Nhiệt độ của vật liên quan đến vận tốc chuyển động phân tử (động năng phân tử). (2) Thể tích của vật liên quan đến khoảng cách phân tử (lực tương tác và thế năng phân tử). Nhận định nào đúng?", "options": ["A. chỉ (1).", "B. chỉ (2).", "C. cả hai đều đúng.", "D. cả hai đều sai."], "correctAnswer": "C"},
  {"id": 18, "type": "true_false", "content": "Khi hai vật tiếp xúc với nhau", "options": [], "propositions": ["a) Nhiệt năng luôn tự truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.", "b) Nhiệt năng luôn tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ nhỏ hơn.", "c) Hai vật không trao đổi nhiệt với nhau nếu nhiệt độ chúng bằng nhau.", "d) Hai vật không trao đổi nhiệt với nhau nếu khối lượng chúng bằng nhau."], "correctAnswer": {"0": "false", "1": "true", "2": "true", "3": "false"}},
  {"id": 19, "type": "true_false", "content": "Điền vào biểu đồ chuyển đổi giữa hai thang nhiệt độ (Celsius và Kelvin).<br><img src='https://i.postimg.cc/sgcg3ys6/77.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "propositions": ["a) (1) 6273.", "b) (2) 4573.", "c) (3) 1811.", "d) (4) -183."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 20, "type": "true_false", "content": "Ở nhiệt độ không tuyệt đối các phân tử của tất cả các chất có", "options": [], "propositions": ["a) động năng chuyển động nhiệt cực đại.", "b) thế năng phân tử bằng không.", "c) thế năng phân tử là tối thiểu.", "d) động năng chuyển động nhiệt bằng không."], "correctAnswer": {"0": "false", "1": "false", "2": "true", "3": "true"}},
  {"id": 21, "type": "true_false", "content": "Các nội dung sau đây đề cập đến các thang nhiệt độ.", "options": [], "propositions": ["a) Thang nhiệt độ Celsius có mốc là nhiệt độ nước đá đang tan (0 °C) và nước sôi ở 1 atm (100 °C).", "b) Thang nhiệt độ Kelvin có mốc là 0 K và nhiệt độ điểm ba của nước (273,16 K).", "c) Khi nói 'nhiệt độ nhiệt động lực học' là đề cập đến nhiệt độ trong thang Celsius.", "d) Số chỉ nhiệt độ của vật theo thang Celsius và Kelvin luôn khác nhau."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "true"}},
  {"id": 22, "type": "true_false", "content": "Các nội dung sau đây đề cập đến nhiệt kế thủy ngân.", "options": [], "propositions": ["a) Nhiệt độ được xác định dựa trên hiện tượng dãn nở vì nhiệt của thủy ngân.", "b) Thông qua việc xác định độ cao cột thủy ngân ở các nhiệt độ khác nhau, ta xác định được nhiệt độ cần đo.", "c) Nhiệt độ được xác định dựa trên hiện tượng tăng điện trở vì nhiệt của thủy ngân.", "d) Thông qua việc xác định điện trở của cột thủy ngân ở các nhiệt độ khác nhau, ta xác định được nhiệt độ cần đo."], "correctAnswer": {"0": "true", "1": "true", "2": "false", "3": "false"}},
  {"id": 23, "type": "fill_blank", "content": "Một học sinh tạo ra thang nhiệt độ Z (°Z) với nước đá tan là -5 °Z và nước sôi là 105 °Z. Nếu dùng nhiệt kế này đo nhiệt độ một vật thấy 61 °Z thì nhiệt độ của vật trong thang Celsius là bao nhiêu °C?", "options": [], "correctAnswer": "60"},
  {"id": 24, "type": "fill_blank", "content": "Lúc 7h30 sáng nhiệt độ là -20 °C, 2 phút sau nhiệt độ tăng lên 7,2 °C. Độ tăng nhiệt độ trung bình trong 2 phút đó theo đơn vị Kelvin/giây là bao nhiêu (lấy 2 chữ số thập phân)?", "options": [], "correctAnswer": "0.23"},
  {"id": 25, "type": "fill_blank", "content": "Nhiệt độ của khối khí trong phòng là 27 °C. Xác định nhiệt độ của khối khí trong thang Fahrenheit (°F, lấy chính xác đến phần nguyên)?", "options": [], "correctAnswer": "81"},
  {"id": 26, "type": "fill_blank", "content": "Mùa nóng, ta thường cho nước đá vào đồ uống để làm mát nó. Hãy cho biết chiều truyền năng lượng nhiệt trong trường hợp này?<br><img src='LINK_ANH_HOAC_URL' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>", "options": [], "correctAnswer": "Từ đồ uống sang nước đá"}
],
    "thpt_toan_03": [
  {
    "id": 1,
    "type": "multiple_choice",
    "content": "Đường cong trong hình bên dưới là đồ thị của hàm số nào?<br><img src='https://i.postimg.cc/Qt1Crrny/c1.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $y = \\frac{x^2 - 3x + 4}{x + 1}$",
      "B. $y = \\frac{x - 1}{x - 2}$",
      "C. $y = \\frac{2x + 1}{x - 1}$",
      "D. $y = \\frac{x^2 - 3x + 1}{x - 2}$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "content": "Phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x^2 + 1$ là",
    "options": [
      "A. $y = -2x + 1$",
      "B. $y = 2x + 1$",
      "C. $y = -2x - 1$",
      "D. $y = 2x - 1$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "content": "Cho hàm số $y = f(x)$ có bảng biến thiên trên nửa khoảng $[-1; +\\infty)$ như sau: $f'(x) < 0$ trên $(-1; 0)$, $f'(0) = 0$, $f'(x) > 0$ trên $(0; +\\infty)$, $f(0) = -3$. Mệnh đề nào dưới đây đúng?<br><img src='https://i.postimg.cc/x1Z1JCrC/c3.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $\\min_{[-1; +\\infty)} f(x) = f(-1)$",
      "B. $\\max_{[-1; +\\infty)} f(x) = f(0)$",
      "C. $\\min_{[-1; +\\infty)} f(x) = -3$",
      "D. $\\max_{[-1; +\\infty)} f(x) = -3$"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 4,
    "type": "multiple_choice",
    "content": "Cho hàm số bậc bốn $y = f(x)$ có đồ thị là đường cong trong hình bên. Số nghiệm của phương trình $f(x) = 1$ là<br><img src='https://i.postimg.cc/nrVJwb8g/c4.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 5,
    "type": "multiple_choice",
    "content": "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[-2; 0]$ bằng",
    "options": [
      "A. -2",
      "B. 0",
      "C. 2",
      "D. 4"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 6,
    "type": "multiple_choice",
    "content": "Cho hàm số $f(x)$ có bảng biến thiên như sau: $x$ từ $-\\infty$ đến $-1, 0, 1, +\\infty$; $f'(x) > 0$ trên $(-\\infty; -1)$, $f'(x) < 0$ trên $(-1; 0)$, $f'(x) < 0$ trên $(0; 1)$, $f'(x) > 0$ trên $(1; +\\infty)$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?<br><img src='https://i.postimg.cc/MKTw7Sm8/c6.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $(-\\infty; -1)$",
      "B. $(-1; 0)$",
      "C. $(1; +\\infty)$",
      "D. $(-1; 1)$"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 7,
    "type": "multiple_choice",
    "content": "Số đường tiệm cận của đồ thị hàm số $y = \\frac{x + 1}{x - 2}$ là",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    "correctAnswer": "C"
  },
  {
    "id": 8,
    "type": "multiple_choice",
    "content": "Tọa độ tâm đối xứng $I$ của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ là",
    "options": [
      "A. $I(1; 2)$",
      "B. $I(2; 1)$",
      "C. $I(-1; 2)$",
      "D. $I(1; -1)$"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 9,
    "type": "multiple_choice",
    "content": "Hàm số $y = -x^3 + 3x^2 - 1$ nghịch biến trên khoảng nào?",
    "options": [
      "A. $(0; 2)$",
      "B. $(-\\infty; 0)$ và $(2; +\\infty)$",
      "C. $(2; +\\infty)$",
      "D. $(-\\infty; 2)$"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 10,
    "type": "multiple_choice",
    "content": "Cho hàm số $f(x)$ có bảng biến thiên với $x$ từ $-\\infty$ đến $-2, 0, +\\infty$; $y' > 0$ trên $(-\\infty; -2)$, $y' < 0$ trên $(-2; 0)$, $y' > 0$ trên $(0; +\\infty)$; $y_{CĐ} = 0$ tại $x = -2$, $y_{CT} = -4$ tại $x = 0$. Giá trị cực tiểu của hàm số đã cho bằng",
    "options": [
      "A. -4",
      "B. 0",
      "C. -2",
      "D. 2"
    ],
    "correctAnswer": "A"
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "content": "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ bên. Mệnh đề nào sau đây đúng?<br><img src='https://i.postimg.cc/hvvYdSRR/c11.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. $a > 0, b > 0, c > 0, d < 0$",
      "B. $a < 0, b < 0, c > 0, d < 0$",
      "C. $a > 0, b < 0, c < 0, d < 0$",
      "D. $a < 0, b > 0, c > 0, d < 0$"
    ],
    "correctAnswer": "D"
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "content": "Hàm số $y = \\frac{x - 1}{x - 2}$ có đồ thị là hình vẽ nào sau đây? Hãy chọn câu trả lời đúng.<br><img src='https://i.postimg.cc/yYwGD4fw/c12.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [
      "A. Hình A",
      "B. Hình B",
      "C. Hình C",
      "D. Hình D"
    ],
    "correctAnswer": "B"
  },
  {
    "id": 13,
    "type": "true_false",
    "content": "Một công ty sản xuất một loại sản phẩm với chi phí để sản xuất một loại sản phẩm là 600 nghìn đồng và bán ra mỗi sản phẩm là 900 nghìn đồng. Biết rằng số lượng sản phẩm bán ra tăng theo số tiền chi cho quảng cáo là $f(x) = 400 + \\frac{350x}{x + 1}$ (sản phẩm), trong đó $x$ là số tiền chi cho quảng cáo tính theo đơn vị triệu đồng. Khi không chi cho quảng cáo thì sẽ bán được 400 sản phẩm, khi chi cho quảng cáo $x$ triệu đồng thì bán được 750 sản phẩm. Số tiền quảng cáo luôn đảm bảo số lượng sản phẩm bán được là một số nguyên. Cho các phát biểu sau:",
    "options": [],
    "propositions": [
      "a) Lợi nhuận lớn nhất là 210 triệu đồng (kết quả làm tròn đến hàng đơn vị).",
      "b) Lợi nhuận thu được là $L(x) = 120 + \\frac{105x}{x + 1} - x$ (triệu đồng).",
      "c) $L'(x) = \\frac{105}{(x + 1)^2} - 1$.",
      "d) Lợi nhuận thu được lớn nhất khi ta sử dụng số tiền cho quảng cáo là 34 triệu đồng."
    ],
    "correctAnswer": {
      "0": "false",
      "1": "true",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 14,
    "type": "true_false",
    "content": "Để làm một cửa sổ dạng một hình bán nguyệt và một hình chữ nhật ghép lại như hình vẽ bên dưới, người ta dùng 8 m dây thép để làm các đường viền. Gọi $x$ là độ dài cạnh của khung hình chữ nhật.<br><img src='https://i.postimg.cc/nLxw1Kfd/2-ds.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "propositions": [
      "a) Giá trị của $h$ (chiều cao hình chữ nhật) tính theo $x$ là $h = \\frac{8 - x - \\frac{\\pi x}{2}}{2}$.",
      "b) Khi diện tích của cửa sổ lớn nhất thì $x = \\frac{16}{4 + \\pi}$.",
      "c) Diện tích của cửa sổ là $S(x) = 4x - \\left(\\frac{1}{2} + \\frac{\\pi}{8}\\right)x^2$.",
      "d) Chiều dài dây để uốn ra hình bán nguyệt là $L = \\frac{\\pi x}{2}$."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "true",
      "2": "true",
      "3": "true"
    }
  },
  {
    "id": 15,
    "type": "true_false",
    "content": "Một cái bình có dạng hình hộp chữ nhật với đáy là hình vuông cạnh 50 cm, chiều cao 80 cm và bên trong đặt một quả cầu sắt bán kính 20 cm. Ban đầu bình không chứa nước. Ta tiến hành dùng một vòi nước cho chảy vào bình với lưu lượng không đổi bằng $V_0$ (cm³/phút). Biết rằng sau khoảng thời gian 120 phút thì nước trong bình đầy. Cho các phát biểu sau:<br><img src='https://i.postimg.cc/MKTw7Sm8/c6.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "propositions": [
      "a) Thời gian để nước chảy vào bình đủ để ngập hết quả cầu là 48 phút.",
      "b) Sau 24 phút đầu tiên thì mực nước trong bình có chiều cao là 20 cm (kết quả làm tròn đến hàng đơn vị).",
      "c) Lưu lượng nước chảy vào bình $V_0 = 1388$ cm³/phút (kết quả làm tròn đến hàng đơn vị).",
      "d) Thể tích quả cầu sắt là 33150 cm³ (kết quả làm tròn đến hàng đơn vị)."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "true",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 16,
    "type": "true_false",
    "content": "Cho hàm số $y = \\frac{x^2 - 3x + 4}{x + 1}$. Cho các phát biểu sau:",
    "options": [],
    "propositions": [
      "a) Tâm đối xứng của đồ thị hàm số là $I(-1; -5)$.",
      "b) Hàm số đồng biến trên khoảng $(-\\infty; +\\infty)$.",
      "c) Đồ thị hàm số có điểm cực tiểu là $(1; 1)$.",
      "d) Giá trị lớn nhất của hàm số trên khoảng $(-1; +\\infty)$ bằng 1."
    ],
    "correctAnswer": {
      "0": "true",
      "1": "false",
      "2": "true",
      "3": "false"
    }
  },
  {
    "id": 17,
    "type": "fill_blank",
    "content": "Cho hàm số $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ bên. Tìm giá trị lớn nhất của hàm số trên đoạn $[-1; 5]$.<br><img src='https://i.postimg.cc/Qd3R6ZpT/1-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "201"
  },
  {
    "id": 18,
    "type": "fill_blank",
    "content": "Cho hàm số $y = \\frac{ax - b}{cx + 1}$ có đồ thị như hình vẽ bên (với $a, b, c$ là các số nguyên). Tính giá trị của biểu thức $T = 2a - b + c$.<br><img src='https://i.postimg.cc/B6kzHrSn/2-tln.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "3"
  },
  {
    "id": 19,
    "type": "fill_blank",
    "content": "Cho hàm số $y = \\frac{ax^2 + bx + c}{x + d}$ có đồ thị như hình vẽ bên (với $a, b, c, d$ là các số nguyên). Tính $y(-2)$ (làm tròn kết quả đến hàng phần chục).<br><img src='https://i.postimg.cc/Y0Fs3djH/3-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "-1.5"
  },
  {
    "id": 20,
    "type": "fill_blank",
    "content": "Giả sử doanh số (tính bằng số sản phẩm) của một sản phẩm mới tuân theo quy luật logistic được mô hình hóa bằng hàm số $f(t) = \\frac{5000}{1 + 5e^{-t}}$, $t \\ge 0$ (thời gian $t$ tính bằng năm). Đạo hàm $f'(t)$ biểu thị tốc độ bán hàng. Hỏi sau khi phát hành thì tốc độ bán hàng đạt lớn nhất bằng bao nhiêu?",
    "options": [],
    "correctAnswer": "1250"
  },
  {
    "id": 21,
    "type": "fill_blank",
    "content": "Một doanh nghiệp sản xuất một sản phẩm làm đẹp, trung bình mỗi ngày bán được 150 sản phẩm với giá 650 nghìn đồng/sản phẩm. Nếu giảm giá bán 7 nghìn đồng/sản phẩm thì bán được thêm 1 sản phẩm mỗi ngày. Chi phí trung bình $\\bar{C}(x) = 0,004x^2 - 1,6x + 468 + \\frac{16000}{x}$ (nghìn đồng/sản phẩm), $x$ là số sản phẩm bán ra, thuế mỗi sản phẩm là 32 nghìn đồng. Tìm doanh thu biên (đơn vị: nghìn đồng) ứng với số sản phẩm bán ra để đạt lợi nhuận tối đa.",
    "options": [],
    "correctAnswer": "229"
  },
  {
    "id": 22,
    "type": "fill_blank",
    "content": "Trong một công viên có một hồ nước và một đường đi lát gạch. Trên hệ trục $Oxy$, bờ hồ coi như một nhánh đồ thị $y = \\frac{2x + 1}{x - 1}$ và đường đi ứng với $d: y = -x + 4$. Đặt 2 cột đèn trên bờ hồ và 2 cột đèn trên đường đi tạo thành một hình vuông. Tính khoảng cách giữa hai cột đèn trên bờ hồ (làm tròn đến hàng phần trăm).<br><img src='https://i.postimg.cc/jSckZwxB/6-TLN.png' class='mt-4 mb-4 w-full max-w-sm mx-auto rounded-lg border border-gray-200 shadow-sm'>",
    "options": [],
    "correctAnswer": "1.89"
  }
],

    
    

};
