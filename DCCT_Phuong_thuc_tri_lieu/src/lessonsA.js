// Nội dung Phụ lục 3 & 4 – PHẦN A (Điện trị liệu) và PHẦN B (Kỹ thuật tác động mô mềm)
// Quy ước tài liệu: [TL1]..[TL4] = tài liệu bắt buộc (Mục 6.1); [TK1],[TK2] = tài liệu tham khảo (Mục 6.2);
// [MR1]..[MR4] = tài liệu mở rộng đề xuất.

module.exports = [
  // ======================= BÀI 1 =======================
  {
    id: 1,
    part: "A",
    title: "Năng lượng bức xạ, các định luật và điều trị bằng tia",
    lt: 1, th: 3, tuhoc: 4,
    clo: "CLO1, CLO2, CLO4, CLO5",
    summary:
      "Bài học giới thiệu bản chất của sóng điện từ, phổ điện từ và các quá trình phản chiếu, khúc xạ, hấp thu khi năng lượng bức xạ tác động lên mô cơ thể; các định luật chi phối liều chiếu gồm định luật Grotthus – Draper, định luật nghịch đảo bình phương khoảng cách và định luật cosin (Lambert). Trọng tâm của bài là tia hồng ngoại: nguồn phát xạ, tác dụng sinh lý (tăng nhiệt mô nông, giãn mạch, giảm đau, giảm co thắt cơ), tác dụng điều trị, ứng dụng lâm sàng, chống chỉ định, tai biến và quy trình kỹ thuật chiếu hồng ngoại. Đây là kiến thức nền tảng để người học lý giải cơ chế của các phương thức vật lý dùng năng lượng bức xạ ở các bài tiếp theo (CLO1), đồng thời là cơ sở để thực hiện an toàn kỹ thuật chiếu hồng ngoại trên người bệnh giả định (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL3] phần Năng lượng bức xạ và Tia hồng ngoại; ghi lại 3 ý chính vào Nhật ký học tập.",
        "Ôn lại kiến thức Vật lý – Lý sinh: bước sóng, tần số, năng lượng của sóng điện từ; vẽ sơ đồ phổ điện từ và xác định vị trí của tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại.",
        "Nắm vững: các quá trình phản chiếu, khúc xạ, hấp thu; nội dung và ý nghĩa thực hành của 3 định luật (Grotthus – Draper, nghịch đảo bình phương khoảng cách, cosin).",
        "Nắm vững: tác dụng sinh lý, tác dụng điều trị, chỉ định, chống chỉ định, tai biến của tia hồng ngoại.",
      ],
      practice: [
        "Đọc trước quy trình kỹ thuật chiếu đèn hồng ngoại; tự lập sơ đồ các bước (chuẩn bị người bệnh – chuẩn bị đèn – tiến hành – theo dõi – kết thúc).",
        "Xem trước Bảng kiểm và Rubric TH1 (Phụ lục 2) để biết các bước trọng yếu sẽ được quan sát, đặc biệt bước kiểm tra cảm giác nóng – lạnh và kiểm tra chống chỉ định.",
      ],
      after: [
        "Trả lời các câu hỏi tự lượng giá; làm quiz 5 câu trên hệ thống e-learning trước buổi học kế tiếp.",
        "Giải bài tập tình huống ở mục 6 và nộp bản giải ngắn (≤ 1 trang) lên LMS.",
      ],
      reallife: [
        "Quan sát việc sử dụng đèn hồng ngoại tại gia đình, phòng khám, spa; nhận xét những sai sót có thể gây bỏng hoặc tổn thương mắt.",
        "Chuẩn bị 01 tình trạng bệnh lý thường gặp (ví dụ: đau cơ vùng cổ vai mạn tính) có thể chỉ định chiếu hồng ngoại và 01 tình trạng không được chiếu.",
      ],
    },
    refs: [
      "[TL3] Cao Bích Thủy (2016), Các phương thức điều trị Vật lý trị liệu I, Trường ĐH Kỹ thuật Y – Dược Đà Nẵng – bài Năng lượng bức xạ và điều trị bằng tia hồng ngoại, tr. …",
      "[MR1] Bộ Y tế (2014), Hướng dẫn quy trình kỹ thuật chuyên ngành Phục hồi chức năng (Quyết định số 54/QĐ-BYT ngày 06/01/2014) – quy trình điều trị bằng tia hồng ngoại.",
      "[MR2] Cameron M.H. (2018), Physical Agents in Rehabilitation, 5th ed., Elsevier – phần Superficial thermal agents / Light.",
    ],
    terms: [
      ["Sóng điện từ", "Electromagnetic wave", "Dao động lan truyền của điện trường và từ trường, không cần môi trường vật chất."],
      ["Bước sóng", "Wavelength (λ)", "Khoảng cách giữa hai đỉnh sóng liên tiếp; tỉ lệ nghịch với tần số."],
      ["Hấp thu", "Absorption", "Năng lượng bức xạ được mô giữ lại và chuyển thành nhiệt hoặc phản ứng sinh học."],
      ["Định luật Grotthus – Draper", "Grotthus–Draper law", "Chỉ năng lượng được hấp thu mới gây ra tác dụng sinh học."],
      ["Định luật nghịch đảo bình phương", "Inverse square law", "Cường độ tỉ lệ nghịch với bình phương khoảng cách từ nguồn đến bề mặt chiếu."],
      ["Định luật cosin", "Cosine law (Lambert)", "Năng lượng tới bề mặt đạt tối đa khi tia chiếu vuông góc với bề mặt."],
      ["Tia hồng ngoại", "Infrared radiation (IR)", "Bức xạ có bước sóng khoảng 760 nm – 1 mm, tác dụng chủ yếu là nhiệt nông."],
      ["Ban đỏ do nhiệt", "Thermal erythema", "Đỏ da do giãn mạch, xuất hiện sớm và mất nhanh sau chiếu."],
    ],
    questions: [
      "Trình bày các quá trình phản chiếu, khúc xạ, hấp thu và ý nghĩa của chúng đối với liều điều trị.",
      "Phân tích ý nghĩa thực hành của định luật nghịch đảo bình phương khoảng cách và định luật cosin khi đặt đèn hồng ngoại.",
      "Phân tích tác dụng sinh lý của tia hồng ngoại và liên hệ với các chỉ định điều trị chính.",
      "Liệt kê các chống chỉ định và tai biến của chiếu hồng ngoại; nêu biện pháp đề phòng tương ứng.",
    ],
    mcq: [
      { q: "Khi tăng khoảng cách từ đèn hồng ngoại đến da từ 50 cm lên 100 cm, cường độ bức xạ tới da sẽ:", opts: ["Giảm còn 1/2", "Giảm còn 1/4", "Không thay đổi", "Tăng gấp đôi"], ans: "B" },
      { q: "Tia chiếu tới bề mặt da tạo năng lượng hấp thu lớn nhất khi:", opts: ["Tạo góc 30° với bề mặt da", "Tạo góc 45° với bề mặt da", "Vuông góc với bề mặt da", "Song song với bề mặt da"], ans: "C" },
      { q: "Người bệnh 62 tuổi, đái tháo đường, giảm cảm giác bàn chân, đau gót chân. Quyết định phù hợp nhất về chiếu hồng ngoại vùng bàn chân là:", opts: ["Chiếu với khoảng cách 30 cm để tăng hiệu quả", "Chiếu bình thường 30 phút", "Không chiếu hoặc chỉ cân nhắc khi bảo đảm theo dõi chặt, vì nguy cơ bỏng do giảm cảm giác", "Chiếu kèm chườm nóng để tăng tác dụng"], ans: "C" },
    ],
    caseStudy: {
      text: "Anh N., 45 tuổi, nhân viên văn phòng, đau mỏi vùng cổ vai hai bên 3 tháng nay, đau tăng cuối ngày làm việc. Khám: co cứng cơ thang trên hai bên, không sốt, da vùng cổ vai bình thường, cảm giác nóng – lạnh bình thường. Bác sĩ chỉ định chiếu đèn hồng ngoại vùng cổ vai.",
      tasks: [
        "Phân tích cơ sở lựa chọn tia hồng ngoại cho người bệnh này (tác dụng sinh lý nào được tận dụng?).",
        "Liệt kê những nội dung cần kiểm tra trước khi chiếu để loại trừ chống chỉ định.",
        "Đề xuất khoảng cách, góc chiếu, thời gian chiếu; giải thích dựa trên các định luật đã học.",
        "Nếu trong lúc chiếu người bệnh than nóng rát, kỹ thuật viên cần xử trí thế nào?",
      ],
    },
    pl4: {
      llo: [
        ["Mô tả được sự phát sinh, đặc tính sóng của điện từ và các quá trình phản chiếu, khúc xạ, hấp thu.", "CLO1"],
        ["Phân tích được nguồn phát xạ, tác dụng sinh lý, tác dụng điều trị, ứng dụng lâm sàng, chống chỉ định và tai biến của tia hồng ngoại.", "CLO1"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO3 (thực hiện kỹ thuật chiếu hồng ngoại) và LLO5 (chuyên nghiệp trong thực hành) của Mục 5 được hình thành tại buổi thực hành (3 tiết) bằng phương pháp Làm mẫu và hướng dẫn thực hành, Dạy học mô phỏng; giờ lý thuyết giới thiệu quy trình và định hướng an toàn.",
      methods: "Thuyết giảng tích cực (kỹ thuật: khảo sát nhanh – Polling, Think–Pair–Share, động não, kiểm tra nhanh – Quiz).",
      gvPrep: [
        "Soạn slide có hình minh họa phổ điện từ, các quá trình phản chiếu – khúc xạ – hấp thu, sơ đồ định luật nghịch đảo bình phương.",
        "Chuẩn bị 2 câu hỏi Think–Pair–Share và bộ quiz 4 câu (Google Forms/Kahoot hoặc thẻ A–B–C–D).",
        "Chuẩn bị 01 đèn hồng ngoại hoặc ảnh/video ngắn minh họa quy trình chiếu.",
      ],
      svPrep: [
        "Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 1 (Phụ lục 3).",
        "Mang theo Nhật ký học tập để ghi chép và đối chiếu câu hỏi định hướng.",
      ],
      materials: "Máy chiếu, laptop, slide, bảng, bút viết; đèn hồng ngoại hoặc video minh họa; thiết bị trả lời trực tuyến (điện thoại) hoặc thẻ A–B–C–D.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["Ổn định lớp, điểm danh.", "Polling: “Bạn đã thấy đèn hồng ngoại dùng ở đâu? Cảm giác khi chiếu thế nào?” → dẫn vào bài.", "Giới thiệu chuẩn đầu ra bài học (LLO1, LLO2, LLO4)."], 5],
            ["Nội dung 1: Sóng điện từ và các định luật", ["GV trình bày ngắn sự phát sinh, đặc tính sóng điện từ; phản chiếu, khúc xạ, hấp thu (LLO1).", "Think–Pair–Share: dự đoán cường độ tới da khi tăng khoảng cách đèn từ 50 cm lên 100 cm; cặp đôi giải thích, GV chốt định luật nghịch đảo bình phương và định luật cosin."], 15],
            ["Nội dung 2: Tia hồng ngoại – nguồn phát, tác dụng, chỉ định", ["Động não: “Nhiệt tác động lên mô như thế nào?” → GV hệ thống hóa thành sơ đồ tác dụng sinh lý → tác dụng điều trị → chỉ định (LLO2).", "Phân biệt đèn phát sáng và không phát sáng; độ xuyên sâu theo bước sóng."], 12],
            ["Nội dung 3: Chống chỉ định, tai biến, quy trình kỹ thuật", ["GV trình bày chống chỉ định, tai biến (bỏng, choáng nhiệt, tổn thương mắt) và biện pháp đề phòng.", "Video/ảnh minh họa quy trình chiếu; nhấn mạnh các bước trọng yếu sẽ được đánh giá ở TH1 (kiểm tra cảm giác, khoảng cách, theo dõi)."], 10],
            ["Củng cố – lượng giá tại lớp", ["Quiz 4 câu MCQ (2 câu lý thuyết, 2 câu tình huống); phản hồi tức thời, giải thích phương án sai."], 6],
            ["Tổng kết – giao nhiệm vụ", ["Tóm tắt bằng sơ đồ 1 trang; giao nhiệm vụ: tình huống Bài 1 và phần chuẩn bị Bài 2 (Phụ lục 3)."], 2],
          ],
        },
      ],
      post: [
        "Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.",
        "Nộp bản giải tình huống Bài 1 lên LMS (minh chứng tự học – cột TCTN).",
      ],
    },
  },

  // ======================= BÀI 2 =======================
  {
    id: 2,
    part: "A",
    title: "Điều trị bằng sóng",
    lt: 5, th: 9, tuhoc: 18,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày bốn phương thức điều trị bằng sóng thường dùng trong Vật lý trị liệu: dòng cao tần và thấu nhiệt sóng ngắn, laser công suất thấp, sóng xung kích và siêu âm điều trị. Với mỗi phương thức, người học tìm hiểu nguyên lý vật lý, tác dụng nhiệt và không nhiệt, thông số điều trị, chỉ định, chống chỉ định, tai biến, biện pháp đề phòng, cách chuẩn bị máy và người bệnh, cũng như quy trình bảo đảm an toàn cho người bệnh và thiết bị. Bài học giúp người học so sánh độ xuyên sâu và tác dụng của từng loại sóng để lựa chọn phương thức phù hợp với vị trí tổn thương, giai đoạn bệnh và đáp ứng của người bệnh (CLO1, CLO3), đồng thời hình thành kỹ năng vận hành máy đúng quy trình, an toàn và chuyên nghiệp (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL3] các bài: Dòng cao tần và thấu nhiệt sóng ngắn; Laser; Sóng xung kích; Siêu âm điều trị.",
        "Lập bảng so sánh 4 phương thức theo các cột: bản chất sóng (điện từ/cơ học) – tần số/bước sóng – độ xuyên sâu – tác dụng chính (nhiệt/không nhiệt) – chỉ định – chống chỉ định – tai biến.",
        "Nắm vững: phương pháp điện dung và cảm ứng của sóng ngắn; chế độ liên tục và xung; liều theo cảm giác người bệnh.",
        "Nắm vững: đặc tính của laser (đơn sắc, kết hợp, định hướng), cách tính mật độ năng lượng (J/cm²) và yêu cầu bảo vệ mắt.",
        "Nắm vững: tần số 1 MHz và 3 MHz của siêu âm và độ sâu tương ứng, chu kỳ xung (duty cycle), ERA, BNR, chất tiếp âm.",
        "Nắm vững: sóng xung kích hội tụ và tỏa tia; các thông số (áp lực, số xung, tần số) và chỉ định điển hình.",
      ],
      practice: [
        "Đọc quy trình kỹ thuật vận hành máy sóng ngắn, siêu âm, laser, sóng xung kích; tự liệt kê các bước kiểm tra an toàn máy trước khi điều trị.",
        "Đối chiếu với Bảng kiểm TH1 (Phụ lục 2): bước 4 (kiểm tra máy) và bước 5 (thiết lập thông số).",
      ],
      after: [
        "Hoàn thiện bảng so sánh 4 phương thức và đưa vào Nhật ký học tập.",
        "Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6 theo nhóm 4–6 SV và nộp lên LMS.",
      ],
      reallife: [
        "Tìm hiểu tại cơ sở thực hành hoặc qua tài liệu: những loại máy sóng nào đang được sử dụng tại khoa Phục hồi chức năng và các quy định an toàn được dán tại phòng máy.",
        "Chuẩn bị 01 bệnh lý cơ xương khớp thường gặp (viêm gân, viêm cân gan chân, thoái hóa khớp…) và đề xuất phương thức sóng phù hợp.",
      ],
    },
    refs: [
      "[TL3] Cao Bích Thủy (2016), Các phương thức điều trị Vật lý trị liệu I, Trường ĐH Kỹ thuật Y – Dược Đà Nẵng – các bài Sóng ngắn, Laser, Sóng xung kích, Siêu âm điều trị, tr. …",
      "[MR1] Bộ Y tế (2014), Quyết định 54/QĐ-BYT – các quy trình điều trị bằng sóng ngắn, siêu âm, laser công suất thấp, sóng xung kích.",
      "[MR2] Cameron M.H. (2018), Physical Agents in Rehabilitation, 5th ed., Elsevier – phần Ultrasound; Diathermy; Lasers and Light.",
    ],
    terms: [
      ["Thấu nhiệt sóng ngắn", "Shortwave diathermy (SWD)", "Dòng cao tần (thường 27,12 MHz) tạo nhiệt sâu trong mô."],
      ["Phương pháp điện dung / cảm ứng", "Capacitive / Inductive method", "Hai cách đặt điện cực của sóng ngắn; điện dung làm nóng mô nông và mỡ nhiều hơn, cảm ứng làm nóng cơ nhiều hơn."],
      ["Laser công suất thấp", "Low-level laser therapy (LLLT)", "Ánh sáng đơn sắc, kết hợp, định hướng; tác dụng quang sinh học không nhiệt."],
      ["Mật độ năng lượng", "Energy density (J/cm²)", "Năng lượng (J) chia cho diện tích chiếu (cm²); thông số liều của laser."],
      ["Sóng xung kích", "Extracorporeal shock wave therapy (ESWT)", "Sóng áp lực cơ học biên độ cao, thời gian ngắn; dạng hội tụ hoặc tỏa tia."],
      ["Siêu âm điều trị", "Therapeutic ultrasound", "Sóng âm tần số 1–3 MHz; tác dụng nhiệt và không nhiệt (vi dòng, tạo bọt hốc ổn định)."],
      ["Chu kỳ xung", "Duty cycle", "Tỉ lệ thời gian phát sóng trong một chu kỳ (ví dụ 20%, 50%, 100% = liên tục)."],
      ["Diện tích bức xạ hiệu dụng", "Effective radiating area (ERA)", "Phần diện tích đầu phát thực sự phát ra siêu âm."],
      ["Tỉ số không đồng đều của chùm tia", "Beam non-uniformity ratio (BNR)", "Tỉ số cường độ đỉnh/cường độ trung bình; BNR thấp an toàn hơn."],
    ],
    questions: [
      "So sánh phương pháp điện dung và phương pháp cảm ứng của sóng ngắn về cách đặt điện cực và loại mô được làm nóng nhiều nhất.",
      "Phân tích các biện pháp bảo đảm an toàn cho người bệnh, người vận hành và máy khi điều trị bằng sóng ngắn.",
      "Một máy laser công suất 50 mW chiếu trên diện tích 1 cm² trong 60 giây: tính mật độ năng lượng. Nêu các yêu cầu an toàn mắt.",
      "Phân tích căn cứ lựa chọn tần số (1 MHz hay 3 MHz) và chế độ (liên tục hay xung) của siêu âm theo độ sâu tổn thương và giai đoạn viêm.",
      "Trình bày chỉ định, chống chỉ định và tai biến của sóng xung kích.",
    ],
    mcq: [
      { q: "Người bệnh có nẹp vít kim loại cột sống thắt lưng. Phương thức nào CHỐNG CHỈ ĐỊNH tại vùng này?", opts: ["Chiếu hồng ngoại", "Thấu nhiệt sóng ngắn", "Chườm lạnh", "Xoa bóp nhẹ cơ cạnh sống"], ans: "B" },
      { q: "Viêm gân trên gai giai đoạn bán cấp, tổn thương ở độ sâu khoảng 1–2 cm. Lựa chọn thông số siêu âm hợp lý nhất là:", opts: ["1 MHz, liên tục, 2,0 W/cm²", "3 MHz, xung 20%, cường độ thấp", "1 MHz, xung 20%, 3,0 W/cm²", "3 MHz, liên tục, 2,5 W/cm²"], ans: "B" },
      { q: "Biện pháp an toàn BẮT BUỘC đối với cả người bệnh và kỹ thuật viên khi điều trị laser là:", opts: ["Bôi gel tiếp âm", "Đeo kính bảo hộ đúng bước sóng", "Tháo bỏ đồ trang sức kim loại toàn thân", "Đặt khăn hút ẩm giữa điện cực và da"], ans: "B" },
    ],
    caseStudy: {
      text: "Bà T., 52 tuổi, đau gót chân phải 8 tháng, đau nhói nhất ở những bước đi đầu tiên buổi sáng; chẩn đoán viêm cân gan chân mạn tính, đã dùng thuốc giảm đau và miếng lót gót nhưng ít cải thiện. Tiền sử: tăng huyết áp đang điều trị ổn định, không dùng thuốc chống đông, không có thai, không có kim loại cấy ghép.",
      tasks: [
        "Đề xuất phương thức điều trị bằng sóng phù hợp nhất cho tình trạng mạn tính này và giải thích cơ chế.",
        "Nêu các thông số cần thiết lập và các bước chuẩn bị máy, chuẩn bị người bệnh.",
        "Liệt kê các chống chỉ định cần kiểm tra lại trước khi điều trị.",
        "Nếu bà T. đang dùng thuốc chống đông, lựa chọn của em thay đổi như thế nào? Có thể thay bằng phương thức nào?",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được đại cương, ứng dụng điều trị, chỉ định, chống chỉ định, tai biến và các biện pháp đề phòng của sóng ngắn, laser, sóng xung kích, siêu âm.", "CLO1"],
        ["Lựa chọn được kỹ thuật điều trị bằng sóng phù hợp với chỉ định và đáp ứng của người bệnh trong tình huống lâm sàng giả định.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện đúng kỹ thuật điều trị bằng sóng) và LLO5 (chuyên nghiệp trong thực hành) của Mục 5 được hình thành tại các buổi thực hành (9 tiết) bằng Làm mẫu và hướng dẫn thực hành, Dạy học mô phỏng.",
      methods: "Thuyết giảng tích cực (Polling, Think–Pair–Share, Quiz); Dạy học dựa trên tình huống – CBL (phân tích tình huống, thảo luận nhóm, trình bày kết quả).",
      gvPrep: [
        "Soạn slide cho 2 buổi; hình/video minh họa cách đặt điện cực sóng ngắn, kỹ thuật di chuyển đầu siêu âm, đầu phát sóng xung kích.",
        "Chuẩn bị 5 tình huống CBL (2 tình huống buổi 1, 3 tình huống buổi 2) kèm phiếu thảo luận nhóm và đáp án định hướng.",
        "Chuẩn bị bộ quiz đầu giờ (5 câu) và cuối giờ (5 câu).",
      ],
      svPrep: [
        "Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 2 (Phụ lục 3), mang theo bảng so sánh 4 phương thức (bản nháp).",
        "Chia nhóm 4–6 SV cố định cho hoạt động CBL.",
      ],
      materials: "Máy chiếu, laptop, slide, bảng, bút viết; đầu phát siêu âm, điện cực sóng ngắn, kính bảo hộ laser (vật thật hoặc hình ảnh); phiếu thảo luận CBL.",
      sessions: [
        {
          name: "Buổi 1 (3 tiết – 150 phút): Đại cương; sóng ngắn; siêu âm điều trị",
          rows: [
            ["Mở đầu – kiểm tra chuẩn bị bài", ["Quiz đầu giờ 5 câu dựa trên câu hỏi định hướng ở Phụ lục 3 (minh chứng chuẩn bị bài – TCTN).", "Giới thiệu LLO và cấu trúc 2 buổi học."], 10],
            ["Nội dung 1: Đại cương các phương thức dùng sóng", ["Phân loại sóng điện từ (cao tần, laser) và sóng cơ học (siêu âm, sóng xung kích); tác dụng nhiệt và không nhiệt (LLO1).", "Câu hỏi gợi mở: “Vì sao sóng ngắn làm nóng sâu hơn hồng ngoại?”"], 15],
            ["Nội dung 2: Dòng cao tần và thấu nhiệt sóng ngắn", ["Nguyên lý tạo nhiệt; phương pháp điện dung/cảm ứng; chế độ liên tục/xung; liều theo cảm giác người bệnh (LLO1).", "Chỉ định, chống chỉ định, tai biến; chuẩn bị máy và người bệnh; an toàn cho người bệnh, người vận hành và máy.", "Think–Pair–Share: “Tại sao phải tháo bỏ kim loại, lau khô mồ hôi và không để dây cáp chạm nhau?”"], 40],
            ["Nội dung 3: Siêu âm điều trị", ["Tần số 1/3 MHz và độ sâu; liên tục/xung (duty cycle); cường độ; ERA, BNR; chất tiếp âm; kỹ thuật di chuyển đầu phát; điều trị trực tiếp/dưới nước (LLO1).", "Chỉ định, chống chỉ định, tai biến.", "Polling: chọn tần số cho 2 vị trí tổn thương (gân gót vs. cơ cạnh sống thắt lưng)."], 45],
            ["CBL – vận dụng lựa chọn kỹ thuật", ["Nhóm 4–6 SV phân tích 2 tình huống: (a) đau thắt lưng có nẹp vít cột sống; (b) viêm gân trên gai bán cấp (LLO3).", "Thảo luận 15 phút – trình bày 10 phút – GV kết luận 5 phút."], 30],
            ["Tổng kết – giao nhiệm vụ", ["Sơ đồ so sánh sóng ngắn – siêu âm; giải đáp thắc mắc.", "Giao nhiệm vụ đọc phần Laser, Sóng xung kích (Phụ lục 3)."], 10],
          ],
        },
        {
          name: "Buổi 2 (2 tiết – 100 phút): Laser; sóng xung kích; CBL tổng hợp",
          rows: [
            ["Mở đầu", ["Câu hỏi gợi mở ôn tập buổi 1; nêu LLO buổi 2."], 5],
            ["Nội dung 4: Laser trong Vật lý trị liệu", ["Đặc tính laser, các loại laser thường dùng, cơ chế quang sinh học; liều (J/cm²) (LLO1).", "Think–Pair–Share: bài tập tính mật độ năng lượng.", "Chỉ định, chống chỉ định, an toàn mắt và phân loại an toàn laser."], 30],
            ["Nội dung 5: Sóng xung kích", ["Sóng hội tụ và tỏa tia; thông số (áp lực, số xung, tần số); cơ chế (LLO1).", "Chỉ định điển hình, chống chỉ định, tai biến (đau, bầm, đỏ da) và cách đề phòng."], 25],
            ["CBL tổng hợp", ["3 tình huống luân phiên giữa các nhóm: viêm cân gan chân mạn; đau khớp gối do thoái hóa ở người có máy tạo nhịp; vết thương chậm lành (LLO3).", "Nhóm thảo luận 15 phút – trình bày và phản biện 10 phút – GV chốt 5 phút."], 30],
            ["Củng cố – lượng giá – tổng kết", ["Quiz 5 câu (MCQ tình huống); bảng tổng hợp 4 phương thức; giao nhiệm vụ Bài 3."], 10],
          ],
        },
      ],
      post: [
        "Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.",
        "Nộp bảng so sánh 4 phương thức (hoàn chỉnh) và bản giải tình huống nhóm lên LMS.",
      ],
    },
  },

  // ======================= BÀI 3 =======================
  {
    id: 3,
    part: "A",
    title: "Các dòng điện xung",
    lt: 3, th: 9, tuhoc: 14,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày khái niệm kích thích điện, cơ sở sinh lý của sự đáp ứng thần kinh – cơ với dòng điện (ngưỡng kích thích, đường cong cường độ – thời gian, lưu huyết, thời trị) và các thông số của dòng điện xung (dạng xung, độ rộng xung, tần số, cường độ, thời gian bật/tắt). Người học tìm hiểu các dòng kích thích thần kinh – cơ, các dòng điện giảm đau (TENS, dòng giao thoa, dòng diadynamic, dòng một chiều đều), nguyên tắc lựa chọn dòng điện, xác định điểm vận động và vị trí đặt điện cực, kỹ thuật điều trị bằng điện cực điểm và điện cực tấm. Bài học giúp người học lý giải cơ chế (CLO1), lựa chọn dòng điện và vị trí điện cực phù hợp với mục tiêu điều trị và đáp ứng của người bệnh (CLO3), thực hiện an toàn, chuyên nghiệp kỹ thuật điện xung (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL3] bài Các dòng điện xung; ôn Sinh lý học: điện thế màng nghỉ, điện thế hoạt động, dẫn truyền thần kinh – cơ.",
        "Vẽ đường cong cường độ – thời gian (I/t) và xác định trên hình: lưu huyết, thời trị; giải thích sự khác nhau giữa cơ còn và mất thần kinh chi phối.",
        "Lập bảng các dòng điện giảm đau: tần số – độ rộng xung – cường độ – cơ chế giảm đau – chỉ định.",
        "Nắm vững: nguyên tắc mật độ dòng điện, vị trí điểm vận động của các cơ lớn (tứ đầu đùi, cơ chày trước, cơ delta, cơ duỗi cổ tay).",
      ],
      practice: [
        "Đọc quy trình kỹ thuật điều trị bằng điện cực điểm và điện cực tấm; chuẩn bị bản đồ điểm vận động chi trên, chi dưới (vẽ tay hoặc in).",
        "Xem Bảng kiểm TH1 (Phụ lục 2): kiểm tra máy, thiết lập cường độ/tần số/thời gian, theo dõi đáp ứng người bệnh.",
      ],
      after: [
        "Trả lời câu hỏi tự lượng giá; làm quiz e-learning.",
        "Hoàn thành “Phiếu lựa chọn dòng điện” cho tình huống mục 6 và nộp lên LMS.",
      ],
      reallife: [
        "Tìm hiểu các máy TENS cầm tay đang bán trên thị trường; phân tích rủi ro khi người bệnh tự sử dụng không có hướng dẫn.",
        "Chuẩn bị 01 tình huống yếu cơ sau phẫu thuật hoặc sau bất động có thể chỉ định kích thích điện thần kinh – cơ.",
      ],
    },
    refs: [
      "[TL3] Cao Bích Thủy (2016), Các phương thức điều trị Vật lý trị liệu I – bài Các dòng điện xung, tr. …",
      "[MR1] Bộ Y tế (2014), Quyết định 54/QĐ-BYT – quy trình điều trị bằng dòng điện xung, điện phân dẫn thuốc, dòng giao thoa, kích thích điện.",
      "[MR2] Cameron M.H. (2018), Physical Agents in Rehabilitation, 5th ed., Elsevier – phần Electrical currents (Electrical stimulation for pain control; for muscle contraction).",
    ],
    terms: [
      ["Kích thích điện thần kinh – cơ", "Neuromuscular electrical stimulation (NMES)", "Dùng dòng điện gây co cơ qua kích thích sợi thần kinh vận động."],
      ["Kích thích điện thần kinh qua da", "TENS", "Dòng xung qua da nhằm giảm đau (thông thường, kiểu châm cứu, chuỗi xung)."],
      ["Dòng giao thoa", "Interferential current (IFC)", "Hai dòng trung tần (~4000 Hz) giao thoa tạo tần số điều biến điều trị trong mô."],
      ["Dòng diadynamic", "Diadynamic currents (Bernard)", "Dòng xung nửa sóng chỉnh lưu 50/100 Hz: DF, MF, CP, LP."],
      ["Độ rộng xung", "Pulse duration/width", "Thời gian kéo dài của một xung điện (µs/ms)."],
      ["Lưu huyết", "Rheobase", "Cường độ nhỏ nhất gây đáp ứng khi xung có thời gian dài."],
      ["Thời trị", "Chronaxie", "Thời gian xung cần để gây đáp ứng ở cường độ gấp đôi lưu huyết."],
      ["Điểm vận động", "Motor point", "Vị trí trên da mà dòng điện nhỏ nhất gây co cơ rõ nhất."],
      ["Mật độ dòng điện", "Current density", "Cường độ dòng trên một đơn vị diện tích điện cực; điện cực nhỏ → mật độ cao."],
    ],
    questions: [
      "Giải thích đường cong cường độ – thời gian và ứng dụng của nó trong chẩn đoán, điều trị cơ mất thần kinh chi phối.",
      "So sánh TENS thông thường và TENS kiểu châm cứu về thông số và cơ chế giảm đau.",
      "Phân tích nguyên tắc lựa chọn dòng điện theo mục tiêu điều trị: giảm đau, tăng sức cơ, giảm phù nề.",
      "Trình bày cách đặt điện cực điểm và điện cực tấm; giải thích ảnh hưởng của kích thước và khoảng cách điện cực đến độ sâu và mật độ dòng.",
      "Liệt kê chống chỉ định và các vị trí không được đặt điện cực.",
    ],
    mcq: [
      { q: "TENS thông thường (conventional) giảm đau chủ yếu theo cơ chế:", opts: ["Giải phóng opioid nội sinh", "Cổng kiểm soát đau ở sừng sau tủy sống", "Tăng nhiệt sâu tại mô", "Phá hủy thụ thể đau"], ans: "B" },
      { q: "Vị trí KHÔNG được đặt điện cực kích thích điện là:", opts: ["Cơ tứ đầu đùi", "Vùng xoang cảnh phía trước cổ", "Cơ cạnh sống thắt lưng", "Cơ chày trước"], ans: "B" },
      { q: "Người bệnh sau mổ tái tạo dây chằng chéo trước 2 tuần, cơ tứ đầu yếu, co cơ chủ động kém. Mục tiêu tăng huy động cơ tứ đầu. Lựa chọn phù hợp là:", opts: ["TENS kiểu châm cứu tại gối", "Kích thích điện thần kinh – cơ (NMES) với điện cực tấm trên cơ tứ đầu", "Dòng một chiều đều điện di thuốc", "Siêu âm liên tục 1 MHz"], ans: "B" },
    ],
    caseStudy: {
      text: "Ông H., 38 tuổi, đau thắt lưng cấp 3 ngày sau khi bê vật nặng, đau tại chỗ, không lan xuống chân, không rối loạn cơ tròn; VAS 7/10; co cứng cơ cạnh sống. Không có máy tạo nhịp, không có bệnh lý tim mạch, da vùng thắt lưng lành lặn.",
      tasks: [
        "Đề xuất loại dòng điện giảm đau phù hợp và giải thích cơ chế.",
        "Xác định thông số (tần số, độ rộng xung, cường độ, thời gian) và vị trí đặt điện cực.",
        "Nêu các bước kiểm tra an toàn và theo dõi đáp ứng trong khi điều trị.",
        "Nếu sau 3 buổi đau giảm còn VAS 3/10 nhưng người bệnh có cảm giác “quen” với dòng điện, em điều chỉnh thế nào?",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được khái niệm kích thích điện, các dòng điện kích thích thần kinh – cơ và các dòng điện giảm đau.", "CLO1"],
        ["Lựa chọn được dòng điện và vị trí đặt điện cực phù hợp với chỉ định và đáp ứng của người bệnh trong tình huống giả định.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện kỹ thuật điện cực điểm, điện cực tấm) và LLO5 (chuyên nghiệp trong thực hành) của Mục 5 được hình thành tại các buổi thực hành (9 tiết).",
      methods: "Thuyết giảng tích cực (Polling, Think–Pair–Share, câu hỏi gợi mở); Dạy học dựa trên tình huống – CBL (phân tích tình huống, thảo luận nhóm, trình bày kết quả).",
      gvPrep: [
        "Soạn slide có đồ thị dạng xung, đường cong I/t, bản đồ điểm vận động.",
        "Chuẩn bị máy điện xung (hoặc TENS cầm tay) để minh họa ngắn trên tình nguyện viên.",
        "Chuẩn bị 2 tình huống CBL và “Phiếu lựa chọn dòng điện” (mục tiêu – loại dòng – thông số – vị trí điện cực – an toàn).",
      ],
      svPrep: [
        "Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 3; mang bảng các dòng điện giảm đau (bản nháp).",
      ],
      materials: "Máy chiếu, laptop, slide, bảng; máy điện xung/TENS, điện cực điểm và điện cực tấm; phiếu lựa chọn dòng điện.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["Polling: “Cảm giác khi chạm vào dòng điện?”; GV minh họa nhanh TENS trên 1 SV tình nguyện (cảm giác → co cơ).", "Nêu LLO."], 10],
            ["Nội dung 1: Kích thích điện và cơ sở sinh lý", ["Ngưỡng kích thích, đường cong I/t, lưu huyết, thời trị; các thông số của dòng xung; điểm vận động (LLO1).", "Think–Pair–Share: so sánh đường cong I/t của cơ bình thường và cơ mất thần kinh."], 30],
            ["Nội dung 2: Kích thích điện thần kinh – cơ", ["NMES/FES; kích thích cơ còn và mất thần kinh chi phối; chọn thông số tăng sức cơ, chống teo cơ (LLO1)."], 25],
            ["Nội dung 3: Các dòng điện giảm đau", ["TENS (thông thường, kiểu châm cứu, chuỗi xung), dòng giao thoa, diadynamic, dòng một chiều đều và điện di thuốc; cơ chế cổng kiểm soát và opioid nội sinh (LLO1).", "Polling: ghép dòng điện với cơ chế giảm đau."], 35],
            ["Nội dung 4: Lựa chọn dòng điện, vị trí điện cực", ["Nguyên tắc chọn dòng; điện cực điểm/điện cực tấm; mật độ dòng; chống chỉ định và an toàn (LLO1, LLO3)."], 20],
            ["CBL – lựa chọn dòng điện", ["Nhóm phân tích 2 tình huống: đau thắt lưng cấp; yếu cơ tứ đầu sau mổ dây chằng; điền Phiếu lựa chọn dòng điện, đại diện 2 nhóm trình bày, GV phản hồi (LLO3)."], 25],
            ["Tổng kết – lượng giá nhanh", ["3 câu hỏi nhanh; tóm tắt; giao nhiệm vụ Bài 4."], 5],
          ],
        },
      ],
      post: [
        "Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.",
        "Nộp Phiếu lựa chọn dòng điện cho tình huống Bài 3 (Phụ lục 3) lên LMS.",
      ],
    },
  },

  // ======================= BÀI 4 =======================
  {
    id: 4,
    part: "A",
    title: "Máy kéo cột sống",
    lt: 1, th: 3, tuhoc: 4,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học giới thiệu các loại máy kéo cột sống (kéo cổ, kéo thắt lưng; kéo liên tục và kéo ngắt quãng; tư thế nằm và ngồi), nguyên lý cơ học và tác dụng của lực kéo: tách các thân đốt sống, mở rộng lỗ liên hợp, giảm áp lực đĩa đệm, kéo giãn phần mềm, giảm co thắt cơ và giảm đau. Người học phân tích chỉ định, chống chỉ định của kéo cột sống, nguyên tắc tổng quát lựa chọn lực kéo, góc kéo, thời gian, chế độ kéo và các biện pháp bảo đảm an toàn cho người bệnh trong quá trình điều trị. Bài học giúp người học giải thích cơ chế (CLO1), lựa chọn thông số kéo phù hợp với vị trí, tình trạng và đáp ứng của người bệnh (CLO3), thực hiện kỹ thuật kéo an toàn và chuyên nghiệp (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL3] bài Máy kéo cột sống; ôn Giải phẫu cột sống cổ, thắt lưng (thân đốt, đĩa đệm, lỗ liên hợp, rễ thần kinh).",
        "Nắm vững: các loại máy kéo, chế độ liên tục/ngắt quãng; nguyên tắc chọn lực kéo theo trọng lượng cơ thể, góc kéo theo tầng tổn thương.",
        "Nắm vững: chỉ định, chống chỉ định và các dấu hiệu phải dừng kéo ngay.",
      ],
      practice: [
        "Đọc quy trình kỹ thuật kéo cổ, kéo thắt lưng bằng máy; chuẩn bị bảng kiểm cá nhân các bước cố định đai (đai ngực, đai chậu, đai cằm – chẩm).",
      ],
      after: [
        "Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6.",
      ],
      reallife: [
        "Tìm hiểu các bài báo/video hướng dẫn “tự kéo cổ tại nhà” trên mạng xã hội; nhận định nguy cơ đối với người bệnh.",
        "Chuẩn bị 01 tình huống thoát vị đĩa đệm thắt lưng có chèn ép rễ và phân tích lý do có thể/không thể kéo.",
      ],
    },
    refs: [
      "[TL3] Cao Bích Thủy (2016), Các phương thức điều trị Vật lý trị liệu I – bài Kéo cột sống, tr. …",
      "[MR1] Bộ Y tế (2014), Quyết định 54/QĐ-BYT – quy trình kéo nắn cột sống cổ, cột sống thắt lưng.",
      "[MR2] Cameron M.H. (2018), Physical Agents in Rehabilitation, 5th ed., Elsevier – phần Traction.",
    ],
    terms: [
      ["Kéo cột sống", "Spinal traction", "Lực kéo tác động dọc trục cột sống nhằm tách các thân đốt sống và kéo giãn phần mềm."],
      ["Kéo liên tục", "Static/sustained traction", "Lực kéo duy trì không đổi suốt thời gian điều trị."],
      ["Kéo ngắt quãng", "Intermittent traction", "Lực kéo luân phiên giữa thì kéo và thì nghỉ."],
      ["Lỗ liên hợp", "Intervertebral foramen", "Lỗ cho rễ thần kinh sống đi ra; kéo giúp mở rộng lỗ."],
      ["Đai chậu / đai ngực", "Pelvic / thoracic harness", "Dụng cụ cố định truyền lực khi kéo thắt lưng."],
      ["Thoát vị đĩa đệm", "Disc herniation", "Nhân nhầy thoát ra ngoài vòng sợi, có thể chèn ép rễ thần kinh."],
    ],
    questions: [
      "Trình bày các tác dụng cơ học và sinh lý của kéo cột sống.",
      "Phân tích nguyên tắc lựa chọn lực kéo, góc kéo, chế độ và thời gian kéo cho cột sống cổ và thắt lưng.",
      "Liệt kê chống chỉ định tuyệt đối và tương đối của kéo cột sống.",
      "Nêu các dấu hiệu trong và sau khi kéo cần dừng điều trị và báo bác sĩ.",
    ],
    mcq: [
      { q: "Khi kéo cột sống thắt lưng, để tách được các thân đốt sống, lực kéo thường cần đạt khoảng:", opts: ["5% trọng lượng cơ thể", "10% trọng lượng cơ thể", "Khoảng 25–50% trọng lượng cơ thể", "Trên 100% trọng lượng cơ thể"], ans: "C" },
      { q: "Chống chỉ định kéo cột sống cổ là:", opts: ["Thoái hóa cột sống cổ có đau rễ", "Viêm khớp dạng thấp có mất vững khớp đội – trục", "Co thắt cơ cạnh sống cổ", "Hẹp lỗ liên hợp do gai xương"], ans: "B" },
    ],
    caseStudy: {
      text: "Bà L., 55 tuổi, đau cổ lan xuống cánh tay trái 4 tuần, tê ngón cái và ngón trỏ; MRI: thoát vị đĩa đệm C5–C6 chèn ép rễ C6 bên trái. Tiền sử: tăng huyết áp, hiện huyết áp 135/85 mmHg; không có tiền sử chấn thương cổ, không loãng xương. Bác sĩ chỉ định kéo cổ bằng máy.",
      tasks: [
        "Phân tích cơ sở chỉ định kéo cổ cho bà L.",
        "Đề xuất tư thế, góc kéo, lực kéo khởi đầu, chế độ và thời gian kéo.",
        "Nêu các nội dung cần theo dõi trong buổi kéo và tiêu chí dừng kéo.",
        "Sau buổi kéo, bà L. than chóng mặt, buồn nôn: em xử trí thế nào?",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được các loại máy kéo cột sống, nguyên lý, chỉ định và chống chỉ định của kéo cột sống.", "CLO1"],
        ["Lựa chọn được kỹ thuật kéo (lực, góc, chế độ, thời gian) phù hợp với chỉ định và đáp ứng của người bệnh.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện kỹ thuật kéo cột sống bảo đảm an toàn) và LLO5 của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (câu hỏi gợi mở, động não, Quiz); Dạy học dựa trên tình huống – CBL (mini-case, thảo luận cặp đôi).",
      gvPrep: [
        "Soạn slide có hình ảnh MRI thoát vị đĩa đệm, hình các loại máy kéo và tư thế kéo.",
        "Chuẩn bị bộ thẻ “chỉ định/chống chỉ định” cho hoạt động động não và 01 tình huống CBL.",
      ],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 4 (Phụ lục 3)."],
      materials: "Máy chiếu, laptop, slide, bảng; hình ảnh/video máy kéo cổ – thắt lưng; bộ thẻ phân loại.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["Trình chiếu ảnh MRI thoát vị đĩa đệm; câu hỏi gợi mở: “Lực kéo có thể giúp gì cho người bệnh này?”; nêu LLO."], 5],
            ["Nội dung 1: Các loại máy kéo, nguyên lý, tác dụng", ["Kéo cổ/thắt lưng, liên tục/ngắt quãng, nằm/ngồi; tác dụng cơ học và sinh lý (LLO1)."], 12],
            ["Nội dung 2: Chỉ định, chống chỉ định", ["Động não với bộ thẻ: SV xếp các tình trạng vào nhóm “chỉ định / chống chỉ định / thận trọng”; GV chốt (LLO1)."], 10],
            ["Nội dung 3: Nguyên tắc tổng quát và kỹ thuật", ["Lực kéo, góc kéo theo tầng tổn thương, thời gian, chế độ; theo dõi và an toàn; tiêu chí dừng kéo (LLO1, LLO3)."], 10],
            ["CBL mini", ["Cặp đôi phân tích tình huống thoát vị C5–C6 có tăng huyết áp: đề xuất thông số và theo dõi; 2 cặp trình bày (LLO3)."], 10],
            ["Tổng kết – lượng giá", ["2 câu MCQ nhanh; tóm tắt; giao nhiệm vụ Bài 5."], 3],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 5 =======================
  {
    id: 5,
    part: "B",
    title: "Xoa bóp tại chỗ",
    lt: 2, th: 3, tuhoc: 6,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học mở đầu Phần B – kỹ thuật tác động mô mềm, giới thiệu khái niệm xoa bóp tại chỗ, các tác dụng cơ học, phản xạ, tuần hoàn, thần kinh và tâm lý của xoa bóp, từ đó dẫn đến các tác dụng điều trị: giảm đau, giảm co cứng cơ, tăng tuần hoàn và hồi lưu tĩnh mạch – bạch huyết, giảm phù nề, chống dính và tạo thư giãn. Người học phân tích chỉ định, chống chỉ định, nguyên tắc áp dụng và tìm hiểu các thao tác xoa bóp cơ bản: vuốt, xoa (xát), nhào, vỗ – gõ, rung cùng quy trình thực hiện. Bài học giúp người học lý giải cơ chế (CLO1), lựa chọn thao tác phù hợp với tình trạng và đáp ứng của người bệnh (CLO3), thực hiện đúng quy trình với sự tôn trọng, giao tiếp và bảo đảm kín đáo cho người bệnh (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL4] bài Xoa bóp tại chỗ; ôn Giải phẫu bề mặt và hướng thớ cơ của các nhóm cơ lớn (cơ thang, cơ cạnh sống, cơ tứ đầu, cơ bắp chân).",
        "Nắm vững: các tác dụng sinh lý và điều trị; chỉ định, chống chỉ định; nguyên tắc áp dụng (hướng, lực, nhịp độ, trình tự từ nhẹ đến mạnh rồi nhẹ).",
        "Lập bảng 5 thao tác cơ bản: cách thực hiện – tác dụng chủ yếu – vùng áp dụng.",
      ],
      practice: [
        "Xem video minh họa các thao tác xoa bóp (do Bộ môn cung cấp trên LMS); tập thao tác tay trên gối/đệm để làm quen nhịp độ.",
        "Cắt ngắn móng tay, chuẩn bị khăn, dầu/chất bôi trơn theo yêu cầu phòng thực hành.",
      ],
      after: [
        "Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6.",
      ],
      reallife: [
        "Quan sát các hình thức xoa bóp ngoài cộng đồng (spa, xoa bóp dân gian); phân biệt với xoa bóp trị liệu trong Vật lý trị liệu về mục tiêu, chỉ định và an toàn.",
        "Chuẩn bị 01 tình huống phù nề chi sau bất động và đề xuất thao tác xoa bóp phù hợp.",
      ],
    },
    refs: [
      "[TL4] Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II, Trường ĐH Kỹ thuật Y – Dược Đà Nẵng – bài Xoa bóp, tr. …",
      "[MR1] Bộ Y tế (2014), Quyết định 54/QĐ-BYT – quy trình kỹ thuật xoa bóp.",
    ],
    terms: [
      ["Vuốt", "Effleurage", "Thao tác trượt lòng bàn tay trên da theo hướng về tim, lực nhẹ đến vừa."],
      ["Nhào", "Petrissage", "Nắm, ép, nhấc và vắt khối cơ; tác động vào cơ sâu."],
      ["Xoa / xát", "Friction", "Tác động lực nhỏ, sâu, di chuyển mô dưới da trên mô sâu; xát ngang thớ chống dính."],
      ["Vỗ – gõ – chặt", "Tapotement", "Các động tác va chạm nhịp nhàng bằng lòng bàn tay khum, cạnh bàn tay, đầu ngón."],
      ["Rung", "Vibration", "Dao động nhanh, nhỏ truyền qua tay vào mô."],
      ["Hồi lưu tĩnh mạch – bạch huyết", "Venous and lymphatic return", "Dòng máu/bạch huyết trở về tim; xoa bóp hướng tâm giúp tăng hồi lưu."],
    ],
    questions: [
      "Phân tích các tác dụng sinh lý của xoa bóp và liên hệ với các tác dụng điều trị.",
      "Trình bày nguyên tắc áp dụng xoa bóp (tư thế, hướng, lực, nhịp độ, thời gian, trình tự).",
      "So sánh 5 thao tác xoa bóp cơ bản về cách thực hiện và tác dụng chủ yếu.",
      "Liệt kê chống chỉ định của xoa bóp; vì sao không xoa bóp chi có nghi ngờ huyết khối tĩnh mạch sâu?",
    ],
    mcq: [
      { q: "Thao tác vuốt nhằm tăng hồi lưu tĩnh mạch ở cẳng chân cần thực hiện theo hướng:", opts: ["Từ gối xuống cổ chân", "Từ cổ chân lên gối (hướng tâm)", "Ngang thớ cơ", "Bất kỳ hướng nào"], ans: "B" },
      { q: "Người bệnh sưng nóng đỏ đau bắp chân một bên, xuất hiện sau phẫu thuật 3 ngày. Quyết định đúng là:", opts: ["Xoa bóp vuốt hướng tâm để giảm phù", "Nhào bóp mạnh để tăng tuần hoàn", "Không xoa bóp, báo bác sĩ vì nghi huyết khối tĩnh mạch sâu", "Vỗ – gõ để giảm đau"], ans: "C" },
    ],
    caseStudy: {
      text: "Chị M., 30 tuổi, vừa tháo bột cẳng – bàn chân phải sau 6 tuần điều trị gãy kín 1/3 dưới xương chày đã liền xương. Cổ chân và bàn chân phù nhẹ, cơ bắp chân teo và căng, da khô, không có dấu hiệu viêm; siêu âm Doppler đã loại trừ huyết khối tĩnh mạch sâu.",
      tasks: [
        "Xác định mục tiêu của xoa bóp cho chị M.",
        "Lựa chọn các thao tác phù hợp, hướng, lực và trình tự thực hiện; giải thích lý do.",
        "Nêu các điểm cần chú ý về giao tiếp, tư thế và bảo đảm kín đáo cho người bệnh.",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được tác dụng, chỉ định, chống chỉ định và nguyên tắc áp dụng xoa bóp tại chỗ.", "CLO1"],
        ["Lựa chọn được thao tác xoa bóp phù hợp với tình trạng và đáp ứng của người bệnh.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện đúng các thao tác xoa bóp theo quy trình) và LLO5 của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (câu hỏi gợi mở, Think–Pair–Share, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: [
        "Soạn slide, video ngắn các thao tác; chuẩn bị bàn/ghế và khăn để làm mẫu nhanh trên giảng đường.",
        "Chuẩn bị 01 tình huống CBL (phù nề sau tháo bột) và phiếu thảo luận.",
      ],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 5; mang bảng 5 thao tác (bản nháp)."],
      materials: "Máy chiếu, laptop, slide, bảng; video thao tác; khăn, dầu xoa bóp để làm mẫu.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["GV làm mẫu thao tác vuốt vùng cẳng tay trên 1 SV tình nguyện; hỏi cảm nhận → dẫn vào tác dụng; nêu LLO."], 10],
            ["Nội dung 1: Khái niệm, tác dụng sinh lý và điều trị", ["Tác dụng cơ học, phản xạ, tuần hoàn, thần kinh, tâm lý → tác dụng điều trị (LLO1).", "Think–Pair–Share: “Vì sao vuốt phải theo hướng về tim?”"], 25],
            ["Nội dung 2: Chỉ định, chống chỉ định, nguyên tắc áp dụng", ["Chỉ định, chống chỉ định; nguyên tắc tư thế – hướng – lực – nhịp độ – thời gian (LLO1)."], 20],
            ["Nội dung 3: Các thao tác cơ bản và quy trình", ["GV làm mẫu nhanh 5 thao tác; SV quan sát có hướng dẫn, ghi đặc điểm từng thao tác vào bảng; liên kết với buổi thực hành (LLO1)."], 25],
            ["CBL", ["Nhóm phân tích tình huống phù nề cẳng chân sau tháo bột: mục tiêu – thao tác – trình tự; 2 nhóm trình bày (LLO3)."], 15],
            ["Tổng kết – lượng giá", ["2 câu MCQ nhanh; tóm tắt; giao nhiệm vụ Bài 6."], 5],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 6 =======================
  {
    id: 6,
    part: "B",
    title: "Nén và day điểm kích hoạt",
    lt: 2, th: 3, tuhoc: 6,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày khái niệm điểm kích hoạt (trigger point) – nốt tăng nhạy cảm nằm trong dải cơ căng, khi ấn gây đau tại chỗ và đau quy chiếu điển hình; phân biệt điểm kích hoạt hoạt động và tiềm ẩn; các đặc điểm lâm sàng và cách xác định bằng sờ dẹt, sờ kẹp. Người học tìm hiểu giả thuyết hình thành điểm kích hoạt, cơ chế tác dụng của kỹ thuật nén thiếu máu cục bộ và day điểm kích hoạt, chỉ định, chống chỉ định, tai biến và quy trình kỹ thuật trên các nhóm cơ chính như cơ thang trên, cơ nâng vai, cơ dưới gai, cơ mông nhỡ. Bài học giúp người học lý giải cơ chế (CLO1), xác định và lựa chọn kỹ thuật phù hợp với đáp ứng đau của người bệnh (CLO3), thực hiện kỹ thuật đúng, an toàn, có giao tiếp và theo dõi người bệnh (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL4] bài Nén và day điểm kích hoạt; ôn Giải phẫu nguyên ủy, bám tận, hướng thớ của cơ thang, cơ nâng vai, cơ dưới gai, cơ mông nhỡ, cơ bắp chân.",
        "Nắm vững: định nghĩa, đặc điểm và tiêu chuẩn xác định điểm kích hoạt; phân biệt điểm kích hoạt hoạt động và tiềm ẩn.",
        "Vẽ hoặc in bản đồ đau quy chiếu của 4 cơ: cơ thang trên, cơ nâng vai, cơ dưới gai, cơ mông nhỡ.",
      ],
      practice: [
        "Tự sờ tìm dải cơ căng ở cơ thang trên của bản thân/bạn học; ghi lại cảm giác và vùng đau quy chiếu (nếu có).",
        "Đọc quy trình kỹ thuật nén và day; xem Bảng kiểm và Rubric TH1.",
      ],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: [
        "Liên hệ các dạng đau đầu, đau vai gáy ở người làm việc văn phòng/sử dụng điện thoại nhiều; phân tích vai trò của tư thế trong hình thành điểm kích hoạt.",
      ],
    },
    refs: [
      "[TL4] Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II – bài Điểm kích hoạt, tr. …",
      "[MR3] Donnelly J.M. và cs. (2019), Travell, Simons & Simons’ Myofascial Pain and Dysfunction: The Trigger Point Manual, 3rd ed., Wolters Kluwer – các chương cơ thang, cơ nâng vai, cơ dưới gai, cơ mông nhỡ.",
    ],
    terms: [
      ["Điểm kích hoạt", "Myofascial trigger point (MTrP)", "Nốt tăng nhạy cảm trong dải cơ căng, ấn gây đau tại chỗ và quy chiếu."],
      ["Dải cơ căng", "Taut band", "Nhóm sợi cơ co rút sờ thấy như sợi dây trong cơ."],
      ["Đau quy chiếu", "Referred pain", "Đau cảm nhận ở vị trí xa điểm bị kích thích, theo kiểu đặc trưng của mỗi cơ."],
      ["Đáp ứng co giật tại chỗ", "Local twitch response (LTR)", "Co giật thoáng qua của dải cơ căng khi kích thích điểm kích hoạt."],
      ["Điểm kích hoạt hoạt động / tiềm ẩn", "Active / latent TrP", "Hoạt động: gây đau tự phát; tiềm ẩn: chỉ đau khi ấn."],
      ["Nén thiếu máu cục bộ", "Ischemic compression", "Ấn duy trì lực lên điểm kích hoạt đến khi mô giảm căng."],
      ["Sờ dẹt / sờ kẹp", "Flat / pincer palpation", "Hai cách sờ tìm dải cơ căng: ép cơ lên xương hoặc kẹp cơ giữa các ngón."],
    ],
    questions: [
      "Trình bày các đặc điểm lâm sàng giúp xác định một điểm kích hoạt.",
      "Phân tích cơ chế tác dụng của kỹ thuật nén thiếu máu cục bộ.",
      "Mô tả quy trình nén và day điểm kích hoạt (tư thế, lực, thời gian, tiêu chí kết thúc, biện pháp sau kỹ thuật).",
      "Liệt kê chống chỉ định và tai biến; nêu cách đề phòng.",
    ],
    mcq: [
      { q: "Dấu hiệu đặc trưng nhất giúp xác định điểm kích hoạt là:", opts: ["Sưng nóng đỏ tại chỗ", "Nốt tăng nhạy cảm trong dải cơ căng, ấn gây đau quy chiếu điển hình", "Teo cơ rõ", "Mất cảm giác vùng da tương ứng"], ans: "B" },
      { q: "Khi nén điểm kích hoạt, tiêu chí phù hợp để giảm lực/kết thúc lần nén là:", opts: ["Người bệnh bắt đầu thấy đau nhẹ", "Cảm nhận mô dưới tay giảm căng và đau giảm", "Sau đúng 5 giây", "Khi da vùng nén đỏ lên"], ans: "B" },
    ],
    caseStudy: {
      text: "Chị V., 28 tuổi, nhân viên kế toán, đau vùng cổ vai phải và đau đầu vùng thái dương phải 2 tháng, đau tăng khi làm việc máy tính lâu. Khám: sờ thấy dải cơ căng ở bờ trên cơ thang phải, ấn vào nốt đau tái hiện cơn đau thái dương; tầm vận động cổ nghiêng trái giảm nhẹ. Không có dấu hiệu thần kinh khu trú.",
      tasks: [
        "Xác định cơ có điểm kích hoạt và lý giải mối liên quan với đau đầu thái dương.",
        "Mô tả cách thực hiện nén và day điểm kích hoạt cho chị V. (tư thế, vị trí tay, lực, thời gian).",
        "Đề xuất hoạt động bổ sung sau kỹ thuật (kéo dãn, hướng dẫn tư thế làm việc).",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được cơ chế tác dụng, chỉ định, chống chỉ định và tai biến của nén và day điểm kích hoạt.", "CLO1"],
        ["Lựa chọn được kỹ thuật phù hợp với đáp ứng của người bệnh trong tình huống giả định.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện đúng kỹ thuật nén và day điểm kích hoạt trên các nhóm cơ chính) và LLO5 của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (Think–Pair–Share, câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: [
        "Soạn slide có bản đồ đau quy chiếu của các cơ chính; video sờ dẹt/sờ kẹp.",
        "Chuẩn bị 01 tình huống CBL (đau đầu thái dương do điểm kích hoạt cơ thang trên).",
      ],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 6; mang bản đồ đau quy chiếu."],
      materials: "Máy chiếu, laptop, slide, bảng; mô hình giải phẫu cơ vùng cổ vai; video minh họa.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["Think–Pair–Share: SV tự sờ bờ trên cơ thang của mình, tìm điểm đau và mô tả cảm giác; nêu LLO."], 10],
            ["Nội dung 1: Điểm kích hoạt – khái niệm, đặc điểm, phân loại, giả thuyết hình thành", ["GV trình bày; minh họa bằng hình ảnh dải cơ căng và cơ chế “khủng hoảng năng lượng” tại tấm vận động (LLO1)."], 25],
            ["Nội dung 2: Cách xác định", ["Tiêu chuẩn xác định; kỹ thuật sờ dẹt, sờ kẹp; bản đồ đau quy chiếu các cơ chính (LLO1).", "Polling: nhận diện cơ từ bản đồ đau quy chiếu."], 15],
            ["Nội dung 3: Cơ chế tác dụng, chỉ định, chống chỉ định, tai biến", ["Nén thiếu máu cục bộ → tăng tuần hoàn phản ứng, giảm co rút sarcomere; chỉ định, chống chỉ định, tai biến (LLO1)."], 15],
            ["Nội dung 4: Kỹ thuật nén và day", ["Quy trình: tư thế, định vị, tăng lực dần, duy trì, day, kết thúc bằng kéo dãn; video minh họa (LLO1)."], 15],
            ["CBL", ["Nhóm phân tích tình huống chị V.: xác định cơ, đề xuất kỹ thuật, hoạt động bổ sung; trình bày và phản hồi (LLO3)."], 15],
            ["Tổng kết – lượng giá", ["2 câu MCQ nhanh; tóm tắt; giao nhiệm vụ Bài 7."], 5],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 7 =======================
  {
    id: 7,
    part: "B",
    title: "Trượt dọc theo thớ cơ",
    lt: 1, th: 3, tuhoc: 4,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học giới thiệu kỹ thuật trượt dọc theo thớ cơ (trượt sâu dọc thớ – stripping) – một kỹ thuật tác động mô mềm trong đó kỹ thuật viên dùng ngón cái, khớp ngón tay hoặc cẳng tay trượt chậm, có lực sâu, liên tục dọc theo chiều dài thớ cơ từ đầu này đến đầu kia của cơ. Người học tìm hiểu cơ chế tác dụng (kéo giãn cục bộ các sarcomere co rút trong dải cơ căng, tăng tuần hoàn tại chỗ, giảm căng cơ và giảm đau), chỉ định, chống chỉ định và kỹ thuật thực hiện ở các nhóm cơ chính như cơ thang, cơ cạnh sống, cơ tứ đầu, cơ bắp chân. Kỹ thuật thường phối hợp với nén điểm kích hoạt và kéo dãn. Bài học giúp người học lý giải cơ chế (CLO1), lựa chọn kỹ thuật phù hợp (CLO3), thực hiện đúng hướng thớ cơ, lực phù hợp và an toàn (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL4] bài Trượt dọc theo thớ cơ; ôn hướng thớ cơ, nguyên ủy – bám tận của cơ thang, cơ cạnh sống, cơ tứ đầu, cơ bụng chân – dép.",
        "Nắm vững: cơ chế tác dụng, chỉ định, chống chỉ định; sự khác nhau giữa trượt dọc thớ cơ và thao tác vuốt.",
      ],
      practice: [
        "Vẽ trên hình giải phẫu hướng trượt cho 4 nhóm cơ chính; xem video kỹ thuật trên LMS.",
      ],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Liên hệ tình trạng căng cơ bắp chân ở người chạy bộ, người đứng lâu; đề xuất phối hợp kỹ thuật tác động mô mềm."],
    },
    refs: [
      "[TL4] Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II – bài Trượt dọc theo thớ cơ, tr. …",
      "[MR3] Donnelly J.M. và cs. (2019), Travell, Simons & Simons’ Myofascial Pain and Dysfunction: The Trigger Point Manual, 3rd ed. – phần kỹ thuật tác động mô mềm (stripping massage).",
    ],
    terms: [
      ["Trượt dọc thớ cơ", "Stripping massage / deep stroking", "Trượt chậm, sâu, liên tục dọc chiều dài thớ cơ."],
      ["Sarcomere", "Sarcomere", "Đơn vị co cơ; trong dải cơ căng các sarcomere bị co ngắn."],
      ["Hướng thớ cơ", "Muscle fibre direction", "Hướng sắp xếp của sợi cơ; quyết định hướng trượt."],
      ["Chất bôi trơn", "Lubricant", "Dầu/kem giúp trượt đều, tránh tổn thương da."],
    ],
    questions: [
      "Trình bày cơ chế tác dụng của kỹ thuật trượt dọc theo thớ cơ.",
      "So sánh trượt dọc thớ cơ với thao tác vuốt về lực, tốc độ, mục tiêu.",
      "Mô tả kỹ thuật trượt dọc thớ cơ ở cơ cạnh sống thắt lưng và cơ bụng chân.",
      "Liệt kê chống chỉ định của kỹ thuật.",
    ],
    mcq: [
      { q: "Đặc điểm đúng của kỹ thuật trượt dọc theo thớ cơ là:", opts: ["Trượt nhanh, lực nhẹ, theo hướng về tim", "Trượt chậm, lực sâu, liên tục dọc chiều dài thớ cơ", "Ấn tĩnh tại một điểm trong 90 giây", "Vỗ nhịp nhàng bằng cạnh bàn tay"], ans: "B" },
      { q: "Chống chỉ định của trượt dọc thớ cơ tại cẳng chân là:", opts: ["Căng cơ bắp chân mạn tính", "Giãn tĩnh mạch nông nặng vùng cẳng chân", "Điểm kích hoạt cơ bụng chân", "Co rút nhẹ cơ dép"], ans: "B" },
    ],
    caseStudy: {
      text: "Anh K., 35 tuổi, chạy bộ 30 km/tuần, đau căng bắp chân trái 3 tuần, đau tăng khi chạy lên dốc. Khám: căng cơ bụng chân trái, sờ có dải cơ căng ở đầu trong cơ bụng chân, không sưng nóng, không giãn tĩnh mạch, Doppler bình thường.",
      tasks: [
        "Phân tích cơ sở chỉ định kỹ thuật trượt dọc thớ cơ.",
        "Mô tả tư thế người bệnh, hướng trượt, phần tay sử dụng, lực và số lần.",
        "Đề xuất phối hợp với kỹ thuật khác trong cùng buổi điều trị.",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được cơ chế tác dụng, chỉ định và chống chỉ định của kỹ thuật trượt dọc theo thớ cơ.", "CLO1"],
        ["Lựa chọn được kỹ thuật phù hợp với đáp ứng của người bệnh.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện kỹ thuật ở các nhóm cơ chính) và LLO5 của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL (mini-case).",
      gvPrep: ["Soạn slide, hình giải phẫu hướng thớ cơ; chuẩn bị làm mẫu nhanh trên 1 SV tình nguyện.", "Chuẩn bị 01 mini-case."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 7."],
      materials: "Máy chiếu, laptop, slide, bảng; khăn, dầu; mô hình giải phẫu cơ.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu", ["Câu hỏi gợi mở: “Khác nhau giữa vuốt và trượt dọc thớ cơ?”; nêu LLO."], 5],
            ["Nội dung 1: Khái niệm và cơ chế tác dụng", ["GV trình bày; hình minh họa sarcomere co ngắn trong dải cơ căng (LLO1)."], 12],
            ["Nội dung 2: Chỉ định, chống chỉ định", ["Thảo luận nhanh cả lớp; GV chốt (LLO1)."], 8],
            ["Nội dung 3: Kỹ thuật ở các nhóm cơ chính", ["GV làm mẫu nhanh trên cơ cạnh sống và cơ bụng chân; SV quan sát có hướng dẫn theo phiếu (hướng – lực – tốc độ) (LLO1)."], 12],
            ["CBL mini", ["Cặp đôi phân tích tình huống người chạy bộ đau bắp chân; 2 cặp trình bày (LLO3)."], 10],
            ["Tổng kết", ["Tóm tắt; giao nhiệm vụ Bài 8."], 3],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 8 =======================
  {
    id: 8,
    part: "B",
    title: "Kéo dãn",
    lt: 1, th: 3, tuhoc: 4,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày kỹ thuật kéo dãn mô mềm nhằm gia tăng chiều dài cơ – gân và tầm vận động khớp. Người học tìm hiểu cơ chế tác dụng dựa trên tính chất đàn hồi – nhớt của mô (biến dạng từ từ, giãn ứng suất), các cơ chế thần kinh (phản xạ căng, ức chế tự sinh qua cơ quan gân Golgi, ức chế đối vận) và sự tăng dung nạp kéo dãn; các loại kéo dãn (tĩnh, động, thụ động, chủ động, tự kéo dãn, kéo dãn theo nguyên lý PNF); các thông số (cường độ, thời gian giữ, số lần, tần suất); chỉ định, chống chỉ định và nguyên tắc an toàn khi kéo dãn các nhóm cơ chính. Bài học là cầu nối giữa Phần B và Phần C (PNF), giúp người học lý giải cơ chế (CLO1), lựa chọn loại kéo dãn phù hợp (CLO3), thực hiện đúng và an toàn (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL4] bài Kéo dãn; ôn Sinh lý thần kinh – cơ: suốt cơ, cơ quan gân Golgi, phản xạ căng.",
        "Nắm vững: các loại kéo dãn và thông số; chỉ định, chống chỉ định; nguyên tắc cố định đầu gần – kéo đầu xa.",
        "Lập bảng kéo dãn 6 nhóm cơ chính (cơ thang trên, cơ ngực lớn, cơ gập háng, cơ tứ đầu, cơ ụ ngồi cẳng chân, cơ tam đầu cẳng chân): tư thế – cố định – hướng kéo.",
      ],
      practice: ["Tự thực hiện tự kéo dãn cơ ụ ngồi cẳng chân và cơ tam đầu cẳng chân; ghi nhận cảm giác căng, thời gian giữ."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6.", "Ôn tập toàn bộ Phần A, B để chuẩn bị bài kiểm tra LT1 và TH1."],
      reallife: ["Liên hệ thói quen “khởi động – kéo dãn” trước và sau tập luyện thể thao; nhận xét các sai lầm thường gặp (kéo dãn nảy, kéo khi cơ còn lạnh)."],
    },
    refs: [
      "[TL4] Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II – bài Kéo dãn, tr. …",
      "[MR4] Kisner C., Colby L.A., Borstad J. (2018), Therapeutic Exercise: Foundations and Techniques, 7th ed., F.A. Davis – chương Stretching for impaired mobility.",
    ],
    terms: [
      ["Kéo dãn tĩnh", "Static stretching", "Kéo cơ đến cảm giác căng và giữ nguyên trong một thời gian (thường 15–30 giây)."],
      ["Kéo dãn nảy", "Ballistic stretching", "Kéo dãn bằng động tác nảy nhanh – nguy cơ kích hoạt phản xạ căng, không khuyến cáo trong điều trị."],
      ["Biến dạng từ từ", "Creep", "Mô dài ra dần khi chịu một lực không đổi theo thời gian."],
      ["Giãn ứng suất", "Stress relaxation", "Lực cần để giữ mô ở một chiều dài giảm dần theo thời gian."],
      ["Ức chế tự sinh", "Autogenic inhibition", "Cơ quan gân Golgi ức chế chính cơ đang co/căng."],
      ["Ức chế đối vận", "Reciprocal inhibition", "Co cơ chủ vận gây ức chế cơ đối vận."],
      ["Co rút", "Contracture", "Tình trạng ngắn mô mềm làm hạn chế tầm vận động."],
    ],
    questions: [
      "Phân tích cơ chế cơ học và thần kinh của kéo dãn.",
      "So sánh kéo dãn tĩnh, kéo dãn động, kéo dãn nảy và kéo dãn theo nguyên lý PNF.",
      "Trình bày các thông số kéo dãn và nguyên tắc an toàn.",
      "Nêu chống chỉ định; vì sao không kéo dãn co rút đang giúp ổn định chức năng (ví dụ hiện tượng tenodesis ở người tổn thương tủy cổ)?",
    ],
    mcq: [
      { q: "Thời gian giữ kéo dãn tĩnh thường được khuyến cáo cho người lớn là:", opts: ["1–3 giây", "15–30 giây", "5–10 phút", "Càng lâu càng tốt"], ans: "B" },
      { q: "Chống chỉ định kéo dãn là:", opts: ["Hạn chế tầm vận động do co rút mô mềm", "Chặn xương (bony block) tại khớp", "Căng cơ ụ ngồi cẳng chân", "Tư thế xấu do ngắn cơ ngực"], ans: "B" },
    ],
    caseStudy: {
      text: "Em P., 19 tuổi, sinh viên, chơi bóng đá; đau mặt sau đùi phải khi chạy nước rút, kiểm tra nâng chân thẳng thụ động bên phải 60°, bên trái 80°; không đau lưng, không dấu hiệu chèn ép rễ, không tiền sử rách cơ gần đây.",
      tasks: [
        "Xác định nhóm cơ cần kéo dãn và lý giải.",
        "Đề xuất loại kéo dãn, tư thế, cố định, thông số (thời gian giữ, số lần, tần suất).",
        "Xây dựng chương trình tự kéo dãn tại nhà và hướng dẫn an toàn cho em P.",
      ],
    },
    pl4: {
      llo: [
        ["Phân tích được cơ chế tác dụng, chỉ định và chống chỉ định của kỹ thuật kéo dãn.", "CLO1"],
        ["Lựa chọn được kỹ thuật kéo dãn phù hợp với đáp ứng của người bệnh.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO2 (thực hiện đúng kỹ thuật kéo dãn các nhóm cơ chính, bảo đảm an toàn) và LLO5 của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (khởi động trải nghiệm, Think–Pair–Share, Quiz); Dạy học dựa trên tình huống – CBL (mini-case).",
      gvPrep: ["Soạn slide; hình ảnh suốt cơ, cơ quan gân Golgi; đồ thị creep, stress relaxation.", "Chuẩn bị 01 mini-case và quiz tổng hợp Phần B."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 8; mang bảng kéo dãn 6 nhóm cơ."],
      materials: "Máy chiếu, laptop, slide, bảng; thước đo góc (goniometer) để minh họa.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – trải nghiệm", ["SV đứng cúi người chạm ngón chân trước và sau 30 giây giữ căng; nhận xét sự thay đổi → câu hỏi “vì sao?”; nêu LLO."], 5],
            ["Nội dung 1: Cơ chế tác dụng", ["Tính đàn hồi – nhớt (creep, stress relaxation); phản xạ căng, ức chế tự sinh, ức chế đối vận; dung nạp kéo dãn (LLO1)."], 12],
            ["Nội dung 2: Phân loại và thông số", ["Kéo dãn tĩnh, động, nảy, thụ động, chủ động, tự kéo dãn, theo nguyên lý PNF; thông số (LLO1).", "Think–Pair–Share: chọn loại kéo dãn cho vận động viên trước thi đấu và cho người bệnh co rút sau bất động."], 10],
            ["Nội dung 3: Chỉ định, chống chỉ định, an toàn", ["Nguyên tắc khởi động, cố định đầu gần, kéo đầu xa, không kéo qua ngưỡng đau (LLO1)."], 8],
            ["CBL mini", ["Nhóm phân tích tình huống ngắn cơ ụ ngồi cẳng chân; đề xuất kỹ thuật và chương trình tự tập (LLO3)."], 12],
            ["Tổng kết Phần B", ["Sơ đồ tổng hợp 4 kỹ thuật tác động mô mềm; định hướng ôn tập LT1, TH1."], 3],
          ],
        },
      ],
      post: [
        "Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.",
        "Ôn tập Phần A, B theo các câu hỏi tự lượng giá Bài 1–8 để chuẩn bị bài kiểm tra LT1 (MCQ + tình huống) và TH1 (DOPS).",
      ],
    },
  },
];
