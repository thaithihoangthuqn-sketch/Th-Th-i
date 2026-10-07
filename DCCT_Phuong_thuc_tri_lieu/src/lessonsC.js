// Nội dung Phụ lục 3 & 4 – PHẦN C: Kỹ thuật tạo thuận thần kinh cơ cảm thụ bản thể (PNF)

const pnfRefs = (extra) => [
  "[TL1] Lê Quang Khanh (2018), Giáo trình Tạo thuận thần kinh cơ cảm thụ bản thể, Trường ĐH Kỹ thuật Y – Dược Đà Nẵng – " + extra.tl1 + ", tr. …",
  "[TK1] Lê Khánh Điền, Nguyễn Thi Hương (2008), Kỹ thuật tạo thuận cảm thụ bản thể thần kinh cơ, NXB Y học – phần " + extra.tk1 + ".",
  "[TK2] Adler S.S., Beckers D., Buck M. (2014), PNF in Practice, 4th ed., Springer-Verlag Berlin Heidelberg – chương " + extra.tk2 + ".",
].concat(extra.more || []);

// Tiến trình hoạt động chung cho các bài mẫu PNF theo vùng (Bài 13–16)
const patternSession = (o) => [
  ["Mở đầu – khởi động", [o.opener, "Nêu LLO."], 5],
  ["Nội dung 1: Tiến trình cơ bản cho một mẫu vận động", ["Ôn nhanh 7 bước của tiến trình (tư thế – đặt tay – kéo giãn/kéo tách/ép khớp – mệnh lệnh – chuyển động có kháng trở – thời điểm – vị trí kết thúc) qua câu hỏi gợi mở; áp dụng vào " + o.region + " (LLO1)."], 15],
  ["Nội dung 2: Kỹ thuật thao tác cho các mẫu " + o.region, ["GV làm mẫu trên SV tình nguyện từng mẫu: " + o.patterns + "; SV quan sát có hướng dẫn theo phiếu (tư thế KTV – vị trí tay – mệnh lệnh – thời điểm) (LLO2).", o.safety], 35],
  ["Nội dung 3: Áp dụng cho trường hợp điều trị cụ thể", ["Nguyên tắc lựa chọn mẫu và kỹ thuật đặc hiệu theo mục tiêu (khởi động, sức mạnh, ổn định, tầm vận động, phối hợp) (LLO4).", o.apply], 15],
  ["CBL", ["Nhóm 4–6 SV phân tích tình huống: " + o.cbl + "; đề xuất mẫu, kỹ thuật đặc hiệu, mệnh lệnh; trình bày và phản biện (LLO4)."], 20],
  ["Tổng kết – lượng giá", ["Quiz 3 câu (nhận diện mẫu từ hình ảnh/mô tả); tóm tắt; giao nhiệm vụ."], 10],
];

const pnfLLO = (region) => [
  ["Trình bày được các tiến trình cơ bản cho một mẫu vận động.", "CLO1"],
  ["Trình bày được kỹ thuật thao tác cho các mẫu " + region + ".", "CLO1"],
  ["Lựa chọn được mẫu và kỹ thuật PNF phù hợp cho trường hợp điều trị cụ thể " + region + ".", "CLO3"],
  ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
];

module.exports = [
  // ======================= BÀI 9 =======================
  {
    id: 9, part: "C",
    title: "Đại cương về kỹ thuật tạo thuận thần kinh cơ cảm thụ bản thể",
    lt: 1, th: 0, tuhoc: 4,
    clo: "CLO1, CLO4",
    summary:
      "Bài học mở đầu Phần C, giới thiệu lịch sử hình thành kỹ thuật tạo thuận thần kinh cơ cảm thụ bản thể (PNF) do bác sĩ Herman Kabat cùng các nhà vật lý trị liệu Margaret Knott và Dorothy Voss phát triển từ cuối những năm 1940; định nghĩa PNF qua ba thành tố: cảm thụ bản thể, thần kinh cơ và tạo thuận. Người học tìm hiểu triết lý của PNF (tiếp cận tích cực, hướng đến chức năng, huy động khả năng tiềm tàng, tiếp cận toàn diện người bệnh), các nguyên lý thần kinh sinh lý làm nền tảng (lan tỏa, cảm ứng nối tiếp, ức chế đối vận, tổng hợp theo thời gian và không gian, sau phóng điện) và tổng quan các nguyên tắc/thủ thuật cơ bản của PNF. Bài học tạo khung lý thuyết cho toàn bộ Phần C (CLO1) và hình thành thói quen tự học tài liệu chuyên môn (CLO4).",
    prepare: {
      before: [
        "Đọc [TL1] phần Đại cương; đọc [TK2] chương Introduction to PNF (đọc lướt, ghi lại 5 thuật ngữ tiếng Anh then chốt).",
        "Ôn Sinh lý thần kinh: thụ thể cảm thụ bản thể (suốt cơ, cơ quan gân Golgi, thụ thể khớp), cung phản xạ, đơn vị vận động.",
        "Nắm vững: định nghĩa, triết lý, các nguyên lý thần kinh sinh lý và danh sách các nguyên tắc/thủ thuật cơ bản của PNF.",
      ],
      practice: ["Bài này không có giờ thực hành; SV xem video giới thiệu PNF trên LMS để hình dung cách áp dụng."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning.", "Lập sơ đồ tư duy “PNF” (định nghĩa – triết lý – nguyên lý – thủ thuật cơ bản – kỹ thuật – mẫu vận động) làm khung ôn tập cho Phần C."],
      reallife: ["Quan sát các động tác sinh hoạt hằng ngày (chải tóc, đá bóng, xoay người lấy đồ): nhận xét tính chất chéo – xoắn của vận động chức năng."],
    },
    refs: pnfRefs({ tl1: "chương Đại cương", tk1: "Đại cương", tk2: "Introduction to PNF; Basic Procedures for Facilitation" }),
    terms: [
      ["Cảm thụ bản thể", "Proprioception", "Khả năng nhận biết vị trí, chuyển động của cơ thể nhờ các thụ thể ở cơ, gân, khớp."],
      ["Tạo thuận", "Facilitation", "Làm cho đáp ứng vận động dễ xảy ra hơn."],
      ["Lan tỏa", "Irradiation", "Sự lan truyền đáp ứng sang các cơ khác khi kích thích/kháng trở tăng."],
      ["Cảm ứng nối tiếp", "Successive induction", "Co cơ đối vận làm tăng kích thích cơ chủ vận sau đó."],
      ["Ức chế đối vận", "Reciprocal inhibition", "Co cơ chủ vận kèm ức chế cơ đối vận."],
      ["Tổng hợp", "Temporal / spatial summation", "Cộng gộp kích thích theo thời gian hoặc theo nhiều vị trí để đạt ngưỡng."],
      ["Sau phóng điện", "After-discharge", "Hiệu ứng kích thích kéo dài sau khi ngừng kích thích."],
    ],
    questions: [
      "Trình bày lịch sử hình thành và định nghĩa của PNF.",
      "Phân tích triết lý cơ bản của PNF và ý nghĩa đối với cách tiếp cận người bệnh.",
      "Giải thích các nguyên lý thần kinh sinh lý của Sherrington được ứng dụng trong PNF.",
      "Liệt kê các nguyên tắc/thủ thuật cơ bản của PNF.",
    ],
    mcq: [
      { q: "Người đặt nền móng cho PNF cùng với Margaret Knott và Dorothy Voss là:", opts: ["Berta Bobath", "Herman Kabat", "Signe Brunnstrom", "Margaret Rood"], ans: "B" },
      { q: "Hiện tượng kháng trở mạnh ở chi lành làm xuất hiện co cơ ở chi yếu được giải thích bằng nguyên lý:", opts: ["Ức chế đối vận", "Lan tỏa", "Ức chế tự sinh", "Sau phóng điện"], ans: "B" },
    ],
    caseStudy: {
      text: "Ông D., 60 tuổi, liệt nửa người trái sau nhồi máu não 6 tuần; gập khuỷu trái yếu, không tự gập được hết tầm; bên phải bình thường. Một bạn sinh viên cho rằng “chỉ nên tập bên liệt, không cần quan tâm bên lành”.",
      tasks: [
        "Dựa vào triết lý PNF, nhận xét ý kiến trên.",
        "Giải thích bằng nguyên lý lan tỏa và cảm ứng nối tiếp cách có thể dùng bên lành hoặc nhóm cơ mạnh để tạo thuận cho nhóm cơ yếu.",
      ],
    },
    pl4: {
      llo: [
        ["Trình bày được lịch sử, định nghĩa và những nguyên tắc chính của kỹ thuật tạo thuận thần kinh cơ cảm thụ bản thể.", "CLO1"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: null,
      methods: "Thuyết giảng tích cực (video khởi động, câu hỏi gợi mở, Think–Pair–Share, Quiz).",
      gvPrep: ["Soạn slide; video ngắn người bệnh tập PNF (đã ẩn danh/được đồng ý); sơ đồ tư duy mẫu.", "Chuẩn bị quiz 5 câu."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 9."],
      materials: "Máy chiếu, laptop, slide, bảng; video minh họa.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – khởi động", ["Chiếu video 1 phút người bệnh tập PNF; câu hỏi “Điều gì khác biệt so với tập vận động thông thường?”; nêu LLO."], 5],
            ["Nội dung 1: Lịch sử và định nghĩa", ["Kabat, Knott, Voss; ý nghĩa 3 thành tố cảm thụ bản thể – thần kinh cơ – tạo thuận (LLO1)."], 10],
            ["Nội dung 2: Triết lý và nguyên lý thần kinh sinh lý", ["Tiếp cận tích cực, chức năng, huy động tiềm năng, toàn diện; lan tỏa, cảm ứng nối tiếp, ức chế đối vận, tổng hợp, sau phóng điện (LLO1).", "Think–Pair–Share: tìm ví dụ cho mỗi nguyên lý trong sinh hoạt/tập luyện."], 12],
            ["Nội dung 3: Tổng quan nguyên tắc/thủ thuật cơ bản", ["Kháng trở, lan tỏa và tăng cường, tiếp xúc bằng tay, tư thế và cơ thể học, mệnh lệnh lời nói, thị giác, kéo tách – ép khớp, kéo giãn, thời điểm, mẫu vận động; giới thiệu sơ đồ tư duy Phần C (LLO1)."], 15],
            ["Củng cố – lượng giá – tổng kết", ["Quiz 5 câu, phản hồi tức thời; giao nhiệm vụ Bài 10 (LLO2)."], 8],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.", "Nộp sơ đồ tư duy “PNF” lên LMS."],
    },
  },

  // ======================= BÀI 10 =======================
  {
    id: 10, part: "C",
    title: "Các mẫu chuyển động",
    lt: 1, th: 2, tuhoc: 4,
    clo: "CLO1, CLO2, CLO4, CLO5",
    summary:
      "Bài học trình bày đặc điểm của mẫu chuyển động PNF – chuyển động theo đường chéo và xoắn, phù hợp với cấu trúc chéo – xoắn của hệ cơ và với các hoạt động chức năng hằng ngày. Người học phân tích ba thành phần của một mẫu chuyển động (gập/duỗi, dạng/khép, xoay), khái niệm rãnh của mẫu (groove), cách gọi tên mẫu theo khớp gần (vai, háng), hoạt động của các cơ chủ yếu và các loại co cơ (đẳng trương đồng tâm, ly tâm, giữ ổn định, đẳng trường) trong một mẫu; phân loại mẫu một bên, hai bên (đối xứng, không đối xứng, đối xứng đảo ngược). Bài học giúp người học có “bản đồ” để thực hiện chính xác các mẫu ở các bài sau (CLO1) và thực hiện đúng các mẫu chuyển động trên cơ thể bạn học (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Các mẫu chuyển động; [TK2] chương Patterns of Facilitation.",
        "Nắm vững: 3 thành phần của mẫu; rãnh của mẫu; tên 4 mẫu chi trên và 4 mẫu chi dưới; các cặp mẫu đối vận.",
        "Lập bảng cho mẫu Gập – Dạng – Xoay ngoài của chi trên: thành phần ở từng khớp (vai, khuỷu, cổ tay, ngón) và cơ chủ yếu.",
      ],
      practice: ["Tự thực hiện chủ động 8 mẫu chi trên – chi dưới trước gương, kiểm tra tính chéo – xoắn; quay video 1 mẫu để tự nhận xét."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Phân tích 3 hoạt động chức năng (chải tóc, cài khuy áo, bước lên bậc thang) và xác định mẫu PNF tương ứng."],
    },
    refs: pnfRefs({ tl1: "phần Các mẫu chuyển động", tk1: "Các mẫu vận động", tk2: "Patterns of Facilitation" }),
    terms: [
      ["Mẫu chuyển động", "Pattern of facilitation", "Chuyển động phối hợp theo đường chéo – xoắn gồm 3 thành phần."],
      ["Rãnh của mẫu", "Groove", "Đường đi của chuyển động; KTV đứng trong hoặc thẳng hàng với rãnh."],
      ["Đường chéo", "Diagonal", "Hướng chuyển động băng qua đường giữa cơ thể."],
      ["Co đẳng trương đồng tâm / ly tâm", "Concentric / eccentric contraction", "Co cơ kèm cơ ngắn lại / dài ra có kiểm soát."],
      ["Co giữ ổn định", "Stabilizing isotonic", "Có ý định chuyển động nhưng bị kháng trở nên giữ nguyên vị trí."],
      ["Mẫu hai bên đối xứng / không đối xứng / đối xứng đảo ngược", "Bilateral symmetrical / asymmetrical / reciprocal", "Cách phối hợp hai chi trong mẫu hai bên."],
    ],
    questions: [
      "Trình bày ba thành phần của một mẫu chuyển động và cách gọi tên mẫu.",
      "Liệt kê 4 mẫu chi trên và 4 mẫu chi dưới; chỉ ra các cặp mẫu đối vận.",
      "Phân tích hoạt động của các cơ chủ yếu và các loại co cơ trong mẫu Gập – Dạng – Xoay ngoài của chi trên.",
      "Phân biệt mẫu hai bên đối xứng, không đối xứng và đối xứng đảo ngược; cho ví dụ chức năng.",
    ],
    mcq: [
      { q: "Mẫu đối vận của mẫu chi trên Gập – Dạng – Xoay ngoài là:", opts: ["Gập – Khép – Xoay ngoài", "Duỗi – Khép – Xoay trong", "Duỗi – Dạng – Xoay trong", "Gập – Dạng – Xoay trong"], ans: "B" },
      { q: "Mẫu chuyển động PNF được gọi tên theo:", opts: ["Khớp xa nhất (cổ tay/cổ chân)", "Khớp gần (vai/háng)", "Nhóm cơ yếu nhất", "Tư thế khởi đầu của người bệnh"], ans: "B" },
    ],
    caseStudy: {
      text: "Chị A., 40 tuổi, sau phẫu thuật cố định gãy đầu trên xương cánh tay phải đã liền xương, khó khăn khi chải tóc và với lấy đồ trên giá cao.",
      tasks: [
        "Phân tích động tác chải tóc và xác định mẫu PNF chi trên tương ứng.",
        "Mô tả các thành phần ở vai, khuỷu, cổ tay, ngón của mẫu đã chọn và cơ chủ yếu tham gia.",
      ],
    },
    pl4: {
      llo: [
        ["Trình bày đúng và đầy đủ các thành phần của một mẫu chuyển động.", "CLO1"],
        ["Phân tích được hoạt động của các cơ chủ yếu và các loại co cơ trong một mẫu chuyển động.", "CLO1"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO3 (thực hiện đúng các mẫu chuyển động trên cơ thể người học) và LLO5 của Mục 5 được hình thành tại buổi thực hành (2 tiết).",
      methods: "Thuyết giảng tích cực (trải nghiệm vận động, Think–Pair–Share, Quiz).",
      gvPrep: ["Soạn slide có hình/hoạt họa đường chéo của các mẫu; bảng thành phần mẫu.", "Chuẩn bị quiz nhận diện mẫu từ hình ảnh."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 10; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; bóng nhỏ để minh họa động tác ném/đá.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu – trải nghiệm", ["SV đứng tại chỗ làm động tác ném bóng, đá bóng; nhận xét hướng chéo – xoắn; nêu LLO."], 5],
            ["Nội dung 1: Thành phần của một mẫu chuyển động", ["3 thành phần, rãnh của mẫu, gọi tên theo khớp gần; 4 mẫu chi trên, 4 mẫu chi dưới, cặp đối vận (LLO1)."], 15],
            ["Nội dung 2: Cơ chủ yếu và các loại co cơ", ["Phân tích mẫu Gập – Dạng – Xoay ngoài chi trên; Think–Pair–Share: cặp đôi phân tích mẫu Duỗi – Khép – Xoay ngoài chi dưới (LLO2)."], 15],
            ["Nội dung 3: Phân loại mẫu", ["Mẫu một bên, hai bên (đối xứng, không đối xứng, đối xứng đảo ngược), mẫu phối hợp; ví dụ chức năng (LLO1)."], 8],
            ["Củng cố – lượng giá", ["Quiz 5 câu nhận diện mẫu từ hình ảnh."], 5],
            ["Tổng kết", ["Tóm tắt; giao nhiệm vụ Bài 11."], 2],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 11 =======================
  {
    id: 11, part: "C",
    title: "Những thao tác cơ bản của kỹ thuật tạo thuận",
    lt: 2, th: 3, tuhoc: 6,
    clo: "CLO1, CLO2, CLO4, CLO5",
    summary:
      "Bài học trình bày các thao tác cơ bản mà kỹ thuật viên sử dụng để tạo thuận đáp ứng vận động trong PNF: cách đặt tay (kiểu cầm cơ giun, tiếp xúc trên bề mặt theo hướng chuyển động), tư thế và cơ thể học của kỹ thuật viên, cách truyền đạt mệnh lệnh bằng lời nói (lệnh chuẩn bị, lệnh hành động, lệnh sửa sai; ngữ điệu và thời điểm), sử dụng thị giác; ý nghĩa của kéo giãn, kéo tách và ép khớp; thời điểm bình thường (từ xa đến gần) và thời điểm tác động nhằm nhấn mạnh nhóm cơ yếu. Bài học đồng thời nhấn mạnh quy định thực hành nghề nghiệp, đạo đức và giao tiếp với người bệnh khi tiếp xúc cơ thể. Đây là các “công cụ” bắt buộc cho mọi mẫu và kỹ thuật PNF (CLO1), là nền tảng để thực hiện đúng (CLO2) và chuyên nghiệp (CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Những thao tác cơ bản; [TK2] chương Basic Procedures for Facilitation.",
        "Nắm vững: cách đặt tay kiểu cầm cơ giun; 3 loại mệnh lệnh; khi nào dùng kéo tách, khi nào dùng ép khớp; thời điểm bình thường và thời điểm tác động.",
        "Đọc lại quy định thực hành nghề nghiệp, quy tắc ứng xử của nhân viên y tế; chuẩn bị 3 câu giải thích – xin phép người bệnh trước khi tiếp xúc cơ thể.",
      ],
      practice: [
        "Tập đặt tay kiểu cầm cơ giun trên cẳng tay bạn học; tập nói lệnh “Nắm tay – kéo lên – chéo qua mặt!” với ngữ điệu và thời điểm phù hợp.",
        "Xem Bảng kiểm và Rubric TH2 (Phụ lục 2): bước 3 (đặt tay), bước 4 (mệnh lệnh), tiêu chí 2 và 4 của Rubric.",
      ],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Quan sát cách nhân viên y tế giao tiếp, xin phép trước khi chạm vào người bệnh tại cơ sở thực hành; ghi nhận một ví dụ tốt và một ví dụ cần cải thiện vào Nhật ký học tập."],
    },
    refs: pnfRefs({ tl1: "phần Những thao tác cơ bản", tk1: "Các nguyên tắc và thao tác cơ bản", tk2: "Basic Procedures for Facilitation" }),
    terms: [
      ["Cầm kiểu cơ giun", "Lumbrical grip", "Áp lực tạo bởi gập khớp bàn – ngón, ngón tay duỗi; kiểm soát tốt mà không gây đau."],
      ["Tiếp xúc bằng tay", "Manual contact", "Đặt tay lên bề mặt hướng chuyển động để kích thích và định hướng."],
      ["Mệnh lệnh lời nói", "Verbal command", "Lệnh chuẩn bị – hành động – sửa sai; ngắn, rõ, đúng thời điểm."],
      ["Kéo tách", "Traction", "Kéo dài thân chi/khớp; tạo thuận chuyển động, nhất là động tác kéo, chống trọng lực."],
      ["Ép khớp", "Approximation", "Nén các mặt khớp; tạo thuận ổn định và chịu trọng lượng."],
      ["Kéo giãn (phản xạ)", "Stretch / stretch reflex", "Kéo cơ ở tư thế dài để kích thích co cơ."],
      ["Thời điểm bình thường", "Normal timing", "Trình tự co cơ từ xa đến gần trong một mẫu."],
      ["Thời điểm tác động / nhấn mạnh", "Timing for emphasis", "Thay đổi trình tự bình thường để nhấn mạnh nhóm cơ cần tăng cường."],
    ],
    questions: [
      "Mô tả cách đặt tay kiểu cầm cơ giun và giải thích ưu điểm.",
      "Trình bày 3 loại mệnh lệnh; vì sao ngữ điệu và thời điểm của mệnh lệnh quan trọng?",
      "So sánh ý nghĩa và chỉ định của kéo tách và ép khớp.",
      "Phân biệt thời điểm bình thường và thời điểm tác động; cho ví dụ.",
      "Nêu các nguyên tắc đạo đức và giao tiếp khi thực hiện kỹ thuật PNF có tiếp xúc cơ thể người bệnh.",
    ],
    mcq: [
      { q: "Để tạo thuận sự ổn định khi người bệnh đứng chịu trọng lượng, thủ thuật phù hợp là:", opts: ["Kéo tách", "Ép khớp", "Kéo giãn nhanh", "Thời điểm bình thường"], ans: "B" },
      { q: "Trong một mẫu chi trên, thời điểm bình thường của chuyển động là:", opts: ["Vai chuyển động trước, bàn tay sau cùng", "Bàn tay và cổ tay chuyển động trước, sau đó đến các khớp gần", "Tất cả các khớp chuyển động cùng lúc", "Khuỷu chuyển động trước tiên"], ans: "B" },
    ],
    caseStudy: {
      text: "Trong buổi thực hành, bạn S. thực hiện mẫu chi trên cho bạn đóng vai người bệnh: S. nắm chặt cả bàn tay quanh cổ tay bạn, nói liên tục “cố lên, cố lên” trong suốt động tác, không giải thích trước và không quan sát nét mặt bạn. Bạn đóng vai than đau cổ tay.",
      tasks: [
        "Xác định các sai sót của S. về đặt tay, mệnh lệnh và giao tiếp.",
        "Đề xuất cách thực hiện đúng (đặt tay, lệnh chuẩn bị – hành động – sửa sai, quan sát).",
        "Liên hệ các tiêu chí tương ứng trong Bảng kiểm và Rubric TH2.",
      ],
    },
    pl4: {
      llo: [
        ["Trình bày được ý nghĩa và cách đặt tay để kích thích tạo thuận.", "CLO1"],
        ["Trình bày được cách truyền đạt mệnh lệnh để người bệnh thực hiện cử động.", "CLO1"],
        ["Phân tích được ý nghĩa các kỹ thuật kéo giãn, kéo tách, dồn khớp (ép khớp).", "CLO1"],
        ["Ứng dụng được thời điểm bình thường và thời điểm tác động trên các mẫu vận động.", "CLO1"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "LLO6 (chuyên nghiệp: quy định thực hành nghề nghiệp, đạo đức, giao tiếp) được định hướng trong giờ lý thuyết và được hình thành, đánh giá tại buổi thực hành (3 tiết) bằng Làm mẫu và hướng dẫn thực hành, Dạy học mô phỏng (TH2).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, đóng vai cặp đôi theo Think–Pair–Share, Polling, Quiz).",
      gvPrep: ["Soạn slide; video so sánh cách đặt tay đúng/sai, lệnh đúng/sai.", "Chuẩn bị phiếu quan sát cặp đôi (đặt tay – lệnh – giao tiếp)."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 11; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; video minh họa; phiếu quan sát.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu", ["Polling: “Điều gì khiến bạn thấy an toàn khi được người khác chạm vào để hướng dẫn vận động?”; nêu LLO."], 5],
            ["Nội dung 1: Đặt tay và tư thế kỹ thuật viên", ["Cầm kiểu cơ giun, tiếp xúc theo hướng chuyển động; tư thế – cơ thể học KTV; GV làm mẫu đúng/sai (LLO1)."], 20],
            ["Nội dung 2: Mệnh lệnh lời nói và thị giác", ["Lệnh chuẩn bị – hành động – sửa sai; ngữ điệu; vai trò thị giác.", "Đóng vai cặp đôi (Think–Pair–Share): một SV ra lệnh cho mẫu chi trên, SV kia nhận xét theo phiếu (LLO2)."], 15],
            ["Nội dung 3: Kéo giãn, kéo tách, ép khớp", ["Cơ sở thần kinh sinh lý và chỉ định của từng thủ thuật; thận trọng ở khớp đau/mất vững (LLO3)."], 20],
            ["Nội dung 4: Thời điểm bình thường và thời điểm tác động", ["Trình tự xa → gần; kỹ thuật nhấn mạnh (giữ phần mạnh để lan tỏa sang phần yếu); ví dụ trên mẫu chi dưới (LLO4)."], 20],
            ["Nội dung 5: Quy định thực hành nghề nghiệp, đạo đức, giao tiếp", ["Xin phép, giải thích, tôn trọng, bảo đảm kín đáo, quan sát phản ứng người bệnh; liên hệ tiêu chí 4 Rubric TH2 (LLO5, định hướng LLO6)."], 10],
            ["Tổng kết – lượng giá", ["Quiz 5 câu; tóm tắt; giao nhiệm vụ Bài 12."], 10],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 12 =======================
  {
    id: 12, part: "C",
    title: "Những kỹ thuật đặc hiệu",
    lt: 2, th: 5, tuhoc: 8,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày các kỹ thuật tạo thuận đặc hiệu của PNF và mục tiêu điều trị tương ứng: khởi đầu nhịp nhàng (khởi động vận động, dạy chuyển động), phối hợp co cơ đẳng trương (kiểm soát chủ động, co đồng tâm – ly tâm), đảo nghịch đối vận gồm đảo nghịch động/đảo nghịch chậm, đảo nghịch ổn định và ổn định nhịp nhàng (tăng sức mạnh, sức bền, ổn định và phối hợp), kéo giãn lặp lại từ đầu tầm và trong tầm (khởi phát và tăng cường co cơ), co – nghỉ và giữ – nghỉ (tăng tầm vận động, giảm đau), lặp lại (dạy kết quả vận động). Người học phân tích ý nghĩa, chỉ định của từng kỹ thuật, cách ứng dụng trong các mẫu vận động và trong các hoạt động chức năng như lăn trở, ngồi dậy, chuyển tư thế. Bài học giúp người học lựa chọn kỹ thuật phù hợp với mục tiêu và đáp ứng của người bệnh (CLO1, CLO3) và thực hiện đúng, an toàn (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Những kỹ thuật đặc hiệu; [TK2] chương Techniques.",
        "Lập bảng các kỹ thuật đặc hiệu theo cột: mô tả – mục tiêu – chỉ định – lưu ý; xếp nhóm: kỹ thuật cho cơ chủ vận / đảo nghịch đối vận / thư giãn – tăng tầm.",
        "Phân biệt co – nghỉ và giữ – nghỉ; phân biệt đảo nghịch ổn định và ổn định nhịp nhàng.",
      ],
      practice: ["Xem video các kỹ thuật đặc hiệu trên LMS; tập mệnh lệnh cho từng kỹ thuật (ví dụ: “Giữ lại – đừng để tôi đẩy được!” cho ổn định nhịp nhàng)."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6 theo nhóm."],
      reallife: ["Liên hệ các khó khăn vận động thường gặp: khó khởi động ở người Parkinson, mất vững thân ở người đột quỵ, hạn chế tầm vận động do đau; dự đoán kỹ thuật PNF phù hợp."],
    },
    refs: pnfRefs({ tl1: "phần Những kỹ thuật đặc hiệu", tk1: "Các kỹ thuật đặc hiệu", tk2: "Techniques", more: ["[TL2] Nguyễn Thị Hạnh (2024), Bài giảng Bệnh lý và vật lý trị liệu hệ thần kinh cơ nâng cao, Trường ĐH Kỹ thuật Y – Dược Đà Nẵng – phần ứng dụng PNF trong phục hồi chức năng thần kinh, tr. …"] }),
    terms: [
      ["Khởi đầu nhịp nhàng", "Rhythmic initiation", "Thụ động → chủ động có trợ giúp → chủ động → có kháng trở, nhịp nhàng."],
      ["Phối hợp co cơ đẳng trương", "Combination of isotonics", "Phối hợp co đồng tâm, giữ, ly tâm của cùng nhóm cơ chủ vận."],
      ["Đảo nghịch động", "Dynamic reversals (slow reversal)", "Chuyển động chủ động đổi chiều liên tục giữa chủ vận và đối vận."],
      ["Đảo nghịch ổn định", "Stabilizing reversals", "Co đẳng trương luân phiên với kháng trở đủ để giữ nguyên vị trí."],
      ["Ổn định nhịp nhàng", "Rhythmic stabilization", "Co đẳng trường luân phiên, không có ý định chuyển động."],
      ["Kéo giãn lặp lại", "Repeated stretch (repeated contractions)", "Phản xạ căng lặp lại ở đầu tầm hoặc trong tầm để tăng co cơ."],
      ["Co – nghỉ / Giữ – nghỉ", "Contract–relax / Hold–relax", "Kỹ thuật thư giãn – tăng tầm vận động; giữ – nghỉ ưu tiên khi có đau."],
      ["Lặp lại", "Replication", "Dạy người bệnh kết quả của chuyển động bằng cách đặt ở vị trí kết thúc rồi lặp lại."],
    ],
    questions: [
      "Phân nhóm các kỹ thuật đặc hiệu theo mục tiêu điều trị.",
      "So sánh co – nghỉ và giữ – nghỉ về cách thực hiện và chỉ định.",
      "Phân biệt đảo nghịch động, đảo nghịch ổn định và ổn định nhịp nhàng.",
      "Mô tả cách ứng dụng khởi đầu nhịp nhàng trong hoạt động lăn trở.",
      "Phân tích cách lựa chọn kỹ thuật đặc hiệu dựa trên đánh giá chức năng của người bệnh.",
    ],
    mcq: [
      { q: "Người bệnh Parkinson khó khởi động động tác lăn sang bên. Kỹ thuật đặc hiệu ưu tiên là:", opts: ["Giữ – nghỉ", "Khởi đầu nhịp nhàng", "Ổn định nhịp nhàng", "Co – nghỉ"], ans: "B" },
      { q: "Hạn chế tầm dạng vai kèm đau nhiều khi chuyển động. Kỹ thuật phù hợp nhất để tăng tầm vận động là:", opts: ["Co – nghỉ với co đẳng trương mạnh", "Giữ – nghỉ", "Kéo giãn lặp lại từ đầu tầm", "Đảo nghịch động nhanh"], ans: "B" },
      { q: "Kỹ thuật dùng co đẳng trường luân phiên chủ vận – đối vận, không có ý định chuyển động, nhằm tăng ổn định là:", opts: ["Đảo nghịch động", "Ổn định nhịp nhàng", "Phối hợp co cơ đẳng trương", "Lặp lại"], ans: "B" },
    ],
    caseStudy: {
      text: "Ông B., 67 tuổi, liệt nửa người phải sau đột quỵ 2 tháng; ngồi được nhưng thân nghiêng và mất vững khi với tay; chuyển từ nằm sang ngồi cần trợ giúp vừa; cơ gập háng phải yếu; nhận thức tốt, hợp tác.",
      tasks: [
        "Xác định 2 vấn đề vận động ưu tiên.",
        "Lựa chọn kỹ thuật đặc hiệu cho từng vấn đề, giải thích lý do.",
        "Mô tả cách áp dụng kỹ thuật đã chọn trong hoạt động chức năng (ngồi với tay, chuyển nằm – ngồi), kèm mệnh lệnh.",
      ],
    },
    pl4: {
      llo: [
        ["Trình bày được ý nghĩa của những kỹ thuật tạo thuận đặc hiệu.", "CLO1"],
        ["Ứng dụng được các kỹ thuật đặc hiệu trong các mẫu vận động để đạt được mục tiêu cụ thể.", "CLO1"],
        ["Lựa chọn được kỹ thuật đặc hiệu phù hợp cho các hoạt động chức năng của người bệnh.", "CLO3"],
        ["Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "CLO4"],
      ],
      skillNote: "Kỹ năng thực hiện kỹ thuật đặc hiệu (CLO2) và LLO5 (chuyên nghiệp) của Mục 5 được hình thành tại các buổi thực hành (5 tiết).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, Polling, Quiz); Dạy học dựa trên tình huống – CBL (3 tình huống, thảo luận nhóm, trình bày).",
      gvPrep: ["Soạn slide và video từng kỹ thuật; bảng phân nhóm kỹ thuật theo mục tiêu.", "Chuẩn bị 3 tình huống CBL kèm phiếu thảo luận."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 12; mang bảng các kỹ thuật đặc hiệu (bản nháp)."],
      materials: "Máy chiếu, laptop, slide, bảng; video minh họa; phiếu thảo luận CBL.",
      sessions: [
        {
          name: null,
          rows: [
            ["Mở đầu", ["Câu hỏi gợi mở: “Cùng một mẫu vận động, làm sao để đạt mục tiêu khác nhau: tăng sức mạnh, tăng ổn định hay tăng tầm vận động?”; nêu LLO."], 5],
            ["Nội dung 1: Ý nghĩa và phân nhóm kỹ thuật", ["Phân nhóm theo mục tiêu; nguyên tắc chọn kỹ thuật từ kết quả lượng giá (LLO1)."], 15],
            ["Nội dung 2: Kỹ thuật cho cơ chủ vận", ["Khởi đầu nhịp nhàng, phối hợp co cơ đẳng trương, kéo giãn lặp lại; GV làm mẫu kèm mệnh lệnh (LLO1, LLO2)."], 20],
            ["Nội dung 3: Đảo nghịch đối vận", ["Đảo nghịch động, đảo nghịch ổn định, ổn định nhịp nhàng; Polling phân biệt 3 kỹ thuật qua video (LLO1, LLO2)."], 20],
            ["Nội dung 4: Thư giãn – tăng tầm; lặp lại", ["Co – nghỉ, giữ – nghỉ (trực tiếp/gián tiếp); lặp lại; thận trọng khi có đau (LLO1)."], 15],
            ["CBL", ["3 tình huống: khó khởi động (Parkinson); mất vững thân (đột quỵ); hạn chế tầm do đau vai. Nhóm chọn kỹ thuật, mệnh lệnh, hoạt động chức năng ứng dụng; trình bày, GV phản hồi (LLO3)."], 20],
            ["Tổng kết", ["Bảng tổng hợp kỹ thuật – mục tiêu; giao nhiệm vụ Bài 13."], 5],
          ],
        },
      ],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.", "Nộp bản giải tình huống nhóm Bài 12 lên LMS."],
    },
  },

  // ======================= BÀI 13 =======================
  {
    id: 13, part: "C",
    title: "Các mẫu PNF của cổ",
    lt: 2, th: 3, tuhoc: 6,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học trình bày tiến trình cơ bản để thực hiện một mẫu vận động PNF và áp dụng cho vùng cổ: các mẫu gập kèm nghiêng và xoay về một bên, duỗi kèm nghiêng và xoay về bên đối diện; tư thế người bệnh (nằm ngửa, ngồi), tư thế kỹ thuật viên, vị trí đặt tay ở cằm, đỉnh đầu, vùng chẩm, mệnh lệnh và thời điểm. Người học phân tích vai trò của mẫu cổ trong kiểm soát đầu – cổ, trong tạo thuận và lan tỏa sang thân, cùng các lưu ý an toàn đặc thù vùng cổ (tránh kéo tách mạnh, theo dõi chóng mặt, thận trọng với mất vững, bệnh lý động mạch đốt sống). Người học vận dụng để lựa chọn mẫu và kỹ thuật đặc hiệu phù hợp cho trường hợp cụ thể như đau cổ, hạn chế vận động cổ, kém kiểm soát đầu. Bài học góp phần hình thành CLO1, CLO3 và chuẩn bị cho thực hành an toàn, chuyên nghiệp (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Các mẫu PNF của cổ; [TK2] chương The Neck.",
        "Ôn Giải phẫu – vận động học cột sống cổ: các cơ gập, duỗi, nghiêng, xoay cổ; khớp đội – chẩm, đội – trục.",
        "Nắm vững: tiến trình cơ bản 7 bước cho một mẫu; tên các mẫu cổ, vị trí đặt tay và mệnh lệnh.",
      ],
      practice: ["Viết mệnh lệnh cho mẫu gập – nghiêng – xoay trái và mẫu đối vận; xem Bảng kiểm TH2.", "Tìm hiểu các dấu hiệu cảnh báo (red flags) vùng cổ cần dừng tập và báo bác sĩ."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Quan sát tư thế cúi đầu khi dùng điện thoại; liên hệ hạn chế vận động cổ và vai trò của các mẫu cổ trong phục hồi."],
    },
    refs: pnfRefs({ tl1: "phần Các mẫu PNF của cổ", tk1: "Các mẫu vận động cổ", tk2: "The Neck" }),
    terms: [
      ["Mẫu gập cổ kèm nghiêng – xoay", "Neck flexion with lateral flexion and rotation", "Cằm thu vào, đầu gập và xoay về một bên theo đường chéo."],
      ["Mẫu duỗi cổ kèm nghiêng – xoay", "Neck extension with lateral flexion and rotation", "Đầu ngửa, nghiêng và xoay về bên đối diện."],
      ["Kiểm soát đầu", "Head control", "Khả năng giữ và điều chỉnh vị trí đầu."],
      ["Tiến trình cơ bản", "Basic procedure sequence", "Trình tự các bước thực hiện một mẫu PNF."],
      ["Dấu hiệu cảnh báo", "Red flags", "Triệu chứng gợi ý bệnh lý nghiêm trọng cần dừng can thiệp."],
    ],
    questions: [
      "Trình bày tiến trình cơ bản cho một mẫu vận động PNF.",
      "Mô tả tư thế người bệnh, tư thế kỹ thuật viên, vị trí tay và mệnh lệnh cho mẫu gập cổ kèm nghiêng – xoay trái.",
      "Nêu các lưu ý an toàn khi thực hiện mẫu PNF vùng cổ.",
      "Phân tích cách sử dụng mẫu cổ để tạo thuận cho thân.",
    ],
    mcq: [
      { q: "Khi thực hiện mẫu PNF vùng cổ, lưu ý an toàn quan trọng nhất là:", opts: ["Kéo tách thật mạnh để tăng tầm", "Tránh kéo tách mạnh, theo dõi chóng mặt và các dấu hiệu bất thường", "Thực hiện nhanh để tránh mỏi", "Không cần giải thích vì động tác đơn giản"], ans: "B" },
      { q: "Mẫu đối vận của mẫu gập cổ – nghiêng trái – xoay trái là:", opts: ["Gập – nghiêng phải – xoay phải", "Duỗi – nghiêng phải – xoay phải", "Duỗi – nghiêng trái – xoay trái", "Gập thẳng không xoay"], ans: "B" },
    ],
    caseStudy: {
      text: "Anh Q., 32 tuổi, đau và hạn chế xoay cổ sang phải 2 tuần sau khi ngủ sai tư thế; không chấn thương, không tê tay, không chóng mặt; co cứng cơ ức đòn chũm và cơ thang bên trái; đau khi chuyển động ở cuối tầm.",
      tasks: [
        "Lựa chọn mẫu cổ phù hợp để tăng tầm xoay phải và giải thích.",
        "Lựa chọn kỹ thuật đặc hiệu phù hợp (lưu ý có đau) và mô tả mệnh lệnh.",
        "Nêu các nội dung theo dõi an toàn trong quá trình thực hiện.",
      ],
    },
    pl4: {
      llo: pnfLLO("ở cổ"),
      skillNote: "LLO3 (thực hiện đúng kỹ thuật thao tác các mẫu ở cổ) và LLO6 (chuyên nghiệp) của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: ["Soạn slide, video mẫu cổ; chuẩn bị bàn tập/ghế để làm mẫu trên giảng đường.", "Chuẩn bị phiếu quan sát và 01 tình huống CBL."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 13; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; bàn tập hoặc ghế; phiếu quan sát.",
      sessions: [{ name: null, rows: patternSession({
        opener: "SV tự xoay – gập cổ chủ động, nhận xét chuyển động phối hợp xoay – nghiêng.",
        region: "ở cổ",
        patterns: "gập – nghiêng – xoay về một bên và mẫu đối vận duỗi – nghiêng – xoay về bên đối diện; mẫu cổ ở tư thế nằm ngửa và ngồi",
        safety: "Nhấn mạnh an toàn: không kéo tách mạnh, theo dõi chóng mặt, dừng khi có dấu hiệu cảnh báo.",
        apply: "Ví dụ: đau cổ cơ học, hạn chế xoay; kém kiểm soát đầu; dùng mẫu cổ để lan tỏa tạo thuận thân.",
        cbl: "đau và hạn chế xoay cổ phải sau ngủ sai tư thế",
      }) }],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 14 =======================
  {
    id: 14, part: "C",
    title: "Các mẫu PNF của thân",
    lt: 2, th: 3, tuhoc: 6,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học áp dụng tiến trình cơ bản của PNF cho vùng thân: mẫu chặt (gập thân kèm xoay, được dẫn dắt bởi mẫu hai chi trên không đối xứng) và mẫu nâng (duỗi thân kèm xoay), các mẫu hai chi dưới để tạo thuận thân dưới, cùng việc phối hợp mẫu cổ với mẫu thân. Người học tìm hiểu tư thế người bệnh (nằm ngửa, nằm nghiêng, ngồi), vị trí đặt tay, mệnh lệnh, thời điểm và các lưu ý an toàn cho cột sống. Trọng tâm là ứng dụng mẫu thân trong các hoạt động chức năng như lăn trở, chuyển từ nằm sang ngồi, kiểm soát thân khi ngồi và với tay ở người bệnh đột quỵ, chấn thương tủy mức thấp, đau thắt lưng. Bài học góp phần hình thành CLO1, CLO3 và là nền tảng cho thực hành mẫu thân an toàn, chuyên nghiệp (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Các mẫu PNF của thân; [TK2] chương The Trunk.",
        "Ôn vận động học thân: cơ bụng (thẳng bụng, chéo bụng), cơ duỗi lưng, cơ vuông thắt lưng; vai trò kiểm soát thân trong ngồi, đứng.",
        "Nắm vững: mẫu chặt, mẫu nâng; mẫu hai chi dưới cho thân dưới; vị trí tay và mệnh lệnh.",
      ],
      practice: ["Tự thực hiện mẫu chặt và nâng ở tư thế ngồi; viết mệnh lệnh cho mỗi mẫu; xem Bảng kiểm TH2."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Quan sát người cao tuổi chuyển từ nằm sang ngồi; phân tích vai trò của gập thân kèm xoay trong động tác này."],
    },
    refs: pnfRefs({ tl1: "phần Các mẫu PNF của thân", tk1: "Các mẫu vận động thân", tk2: "The Trunk; Mat Activities", more: ["[TL2] Nguyễn Thị Hạnh (2024), Bài giảng Bệnh lý và vật lý trị liệu hệ thần kinh cơ nâng cao – phần phục hồi kiểm soát thân, tr. …"] }),
    terms: [
      ["Mẫu chặt", "Chopping", "Gập thân kèm xoay, dẫn dắt bởi mẫu hai chi trên không đối xứng."],
      ["Mẫu nâng", "Lifting", "Duỗi thân kèm xoay, dẫn dắt bởi mẫu hai chi trên không đối xứng."],
      ["Kiểm soát thân", "Trunk control", "Khả năng ổn định và điều chỉnh thân trong tư thế và chuyển động."],
      ["Lăn trở", "Rolling", "Hoạt động chức năng chuyển từ nằm ngửa sang nằm nghiêng/sấp."],
      ["Mẫu hai chi dưới", "Bilateral lower extremity patterns", "Hai chân chuyển động cùng hướng, tạo thuận cơ thân dưới."],
    ],
    questions: [
      "Mô tả mẫu chặt và mẫu nâng: thành phần, tư thế, vị trí tay, mệnh lệnh.",
      "Phân tích cách dùng mẫu hai chi dưới để tạo thuận cơ thân dưới.",
      "Trình bày ứng dụng mẫu thân trong hoạt động lăn trở và chuyển nằm – ngồi.",
      "Nêu các lưu ý an toàn cho cột sống khi thực hiện mẫu thân.",
    ],
    mcq: [
      { q: "Mẫu thân phù hợp nhất để tạo thuận động tác chuyển từ nằm ngửa sang ngồi có xoay người là:", opts: ["Mẫu nâng", "Mẫu chặt", "Mẫu duỗi cổ", "Mẫu duỗi – khép – xoay ngoài chi dưới"], ans: "B" },
      { q: "Người bệnh ngồi mất vững thân. Kỹ thuật đặc hiệu thường phối hợp với mẫu thân để tăng ổn định là:", opts: ["Giữ – nghỉ", "Đảo nghịch ổn định / ổn định nhịp nhàng", "Kéo giãn lặp lại từ đầu tầm", "Lặp lại"], ans: "B" },
    ],
    caseStudy: {
      text: "Bà C., 70 tuổi, liệt nửa người trái sau đột quỵ 5 tuần; lăn sang bên phải được nhưng lăn sang trái khó; chuyển từ nằm sang ngồi cần trợ giúp nhiều; ngồi có tựa ổn định, không tựa thì nghiêng về bên trái. Không đau lưng, không loãng xương nặng.",
      tasks: [
        "Xác định vấn đề kiểm soát thân ưu tiên.",
        "Lựa chọn mẫu thân và kỹ thuật đặc hiệu để tạo thuận lăn trở và chuyển nằm – ngồi; mô tả mệnh lệnh.",
        "Đề xuất cách tăng ổn định thân khi ngồi.",
      ],
    },
    pl4: {
      llo: pnfLLO("ở thân"),
      skillNote: "LLO3 (thực hiện đúng kỹ thuật thao tác các mẫu ở thân) và LLO6 (chuyên nghiệp) của Mục 5 được hình thành tại buổi thực hành (3 tiết).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: ["Soạn slide, video mẫu chặt, nâng, mẫu hai chi dưới; chuẩn bị bàn tập để làm mẫu.", "Chuẩn bị phiếu quan sát và 01 tình huống CBL."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 14; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; bàn tập; phiếu quan sát.",
      sessions: [{ name: null, rows: patternSession({
        opener: "SV thực hiện động tác ngồi dậy từ tư thế nằm (tưởng tượng) và với tay lấy đồ phía sau; nhận diện gập/duỗi thân kèm xoay.",
        region: "ở thân",
        patterns: "mẫu chặt và mẫu nâng ở tư thế ngồi và nằm ngửa; mẫu hai chi dưới cho thân dưới; phối hợp mẫu cổ – thân",
        safety: "Lưu ý tư thế, cơ thể học của KTV và an toàn cột sống người bệnh.",
        apply: "Ví dụ: lăn trở, chuyển nằm – ngồi, kiểm soát thân khi ngồi ở người bệnh đột quỵ; đau thắt lưng cơ học.",
        cbl: "người bệnh đột quỵ khó lăn trở về bên liệt và ngồi mất vững",
      }) }],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 15 =======================
  {
    id: 15, part: "C",
    title: "Các mẫu PNF của chi trên",
    lt: 2, th: 4, tuhoc: 8,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học áp dụng tiến trình cơ bản cho chi trên: các mẫu xương bả vai (nâng ra trước – hạ ra sau, nâng ra sau – hạ ra trước) và bốn mẫu chi trên theo hai đường chéo: Gập – Dạng – Xoay ngoài, Duỗi – Khép – Xoay trong, Gập – Khép – Xoay ngoài, Duỗi – Dạng – Xoay trong, kèm các biến thể khuỷu gập, khuỷu duỗi, khuỷu thẳng. Với mỗi mẫu, người học tìm hiểu tư thế người bệnh và kỹ thuật viên, vị trí tay xa – tay gần, kéo giãn ở đầu tầm, mệnh lệnh, thời điểm bình thường và vị trí kết thúc. Người học vận dụng để lựa chọn mẫu và kỹ thuật đặc hiệu cho các trường hợp như liệt nửa người, hạn chế vận động vai sau chấn thương/phẫu thuật, yếu cơ chi trên, gắn với hoạt động chức năng (chải tóc, với lấy đồ, đưa tay ra sau). Bài học góp phần hình thành CLO1, CLO3 và chuẩn bị trực tiếp cho thực hành và đánh giá TH2 (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Các mẫu PNF của chi trên; [TK2] chương The Scapula and Pelvis và The Upper Extremity.",
        "Ôn Giải phẫu – vận động học đai vai, khớp vai, khuỷu, cổ tay, bàn tay.",
        "Lập bảng 4 mẫu chi trên: thành phần ở vai – khuỷu – cổ tay – ngón; vị trí tay xa/tay gần; mệnh lệnh.",
      ],
      practice: ["Tự thực hiện chủ động 4 mẫu chi trên và 4 hướng vận động xương bả vai trước gương; tập lệnh cho từng mẫu với bạn học; xem Bảng kiểm và Rubric TH2."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6."],
      reallife: ["Phân tích 3 hoạt động sinh hoạt (chải tóc, cài khóa áo ngực/thắt lưng sau lưng, với lấy đồ trên cao) theo mẫu chi trên PNF."],
    },
    refs: pnfRefs({ tl1: "phần Các mẫu PNF của chi trên", tk1: "Các mẫu vận động chi trên", tk2: "The Scapula and Pelvis; The Upper Extremity", more: ["[TL2] Nguyễn Thị Hạnh (2024), Bài giảng Bệnh lý và vật lý trị liệu hệ thần kinh cơ nâng cao – phần phục hồi chi trên sau đột quỵ, tr. …"] }),
    terms: [
      ["Mẫu Gập – Dạng – Xoay ngoài", "Flexion–abduction–external rotation", "Đường chéo đưa tay lên, ra ngoài, xoay ngoài (như chải tóc)."],
      ["Mẫu Duỗi – Khép – Xoay trong", "Extension–adduction–internal rotation", "Mẫu đối vận của mẫu trên."],
      ["Mẫu Gập – Khép – Xoay ngoài", "Flexion–adduction–external rotation", "Đường chéo đưa tay lên, chéo qua mặt."],
      ["Mẫu Duỗi – Dạng – Xoay trong", "Extension–abduction–internal rotation", "Mẫu đối vận của mẫu trên."],
      ["Mẫu xương bả vai", "Scapular patterns", "Nâng ra trước, hạ ra sau, nâng ra sau, hạ ra trước."],
      ["Tay xa / tay gần", "Distal / proximal hand", "Tay KTV đặt ở bàn tay – cổ tay (xa) và cánh tay – vai (gần)."],
    ],
    questions: [
      "Mô tả thành phần của 4 mẫu chi trên ở các khớp vai, khuỷu, cổ tay, ngón.",
      "Trình bày tư thế, vị trí tay, mệnh lệnh cho mẫu Gập – Dạng – Xoay ngoài với khuỷu thẳng.",
      "Nêu vai trò của các mẫu xương bả vai đối với chức năng chi trên.",
      "Phân tích cách lựa chọn mẫu và kỹ thuật đặc hiệu cho người bệnh liệt nửa người có yếu cơ gập vai.",
    ],
    mcq: [
      { q: "Động tác chải tóc tương ứng gần nhất với mẫu chi trên:", opts: ["Duỗi – Khép – Xoay trong", "Gập – Dạng – Xoay ngoài", "Duỗi – Dạng – Xoay trong", "Gập – Khép – Xoay trong"], ans: "B" },
      { q: "Khi thực hiện mẫu Gập – Khép – Xoay ngoài chi trên phải, ở đầu tầm (vị trí dài nhất) chi trên ở tư thế:", opts: ["Gập – khép – xoay ngoài", "Duỗi – dạng – xoay trong", "Gập – dạng – xoay ngoài", "Duỗi – khép – xoay trong"], ans: "B" },
    ],
    caseStudy: {
      text: "Bà E., 58 tuổi, liệt nửa người phải sau nhồi máu não 8 tuần; vai phải gập chủ động 60°, không đau vai, không bán trật khớp vai; cầm nắm thô được; mong muốn tự chải tóc và tự ăn bằng tay phải.",
      tasks: [
        "Phân tích các hoạt động chức năng mục tiêu theo mẫu chi trên.",
        "Lựa chọn mẫu, biến thể khuỷu và kỹ thuật đặc hiệu; giải thích lý do.",
        "Mô tả vị trí tay, mệnh lệnh và lưu ý an toàn khớp vai người bệnh liệt nửa người.",
      ],
    },
    pl4: {
      llo: pnfLLO("ở chi trên"),
      skillNote: "LLO3 (thực hiện đúng kỹ thuật thao tác các mẫu ở chi trên) và LLO6 (chuyên nghiệp) của Mục 5 được hình thành tại các buổi thực hành (4 tiết).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: ["Soạn slide, video 4 mẫu chi trên và mẫu xương bả vai; chuẩn bị bàn tập để làm mẫu.", "Chuẩn bị phiếu quan sát và 01 tình huống CBL."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 15; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; bàn tập; mô hình khớp vai; phiếu quan sát.",
      sessions: [{ name: null, rows: patternSession({
        opener: "SV thực hiện các động tác chải tóc, với lấy đồ, đưa tay ra sau lưng; nhận diện đường chéo.",
        region: "ở chi trên",
        patterns: "mẫu xương bả vai; Gập – Dạng – Xoay ngoài / Duỗi – Khép – Xoay trong; Gập – Khép – Xoay ngoài / Duỗi – Dạng – Xoay trong; biến thể khuỷu gập, khuỷu duỗi",
        safety: "Lưu ý an toàn khớp vai (người bệnh liệt nửa người, sau phẫu thuật): không kéo tách mạnh, chuẩn bị xương bả vai trước khi gập vai trên tầm.",
        apply: "Ví dụ: liệt nửa người, cứng khớp vai sau chấn thương, yếu cơ chi trên; gắn với chải tóc, ăn uống, mặc áo.",
        cbl: "người bệnh liệt nửa người phải muốn tự chải tóc và tự ăn",
      }) }],
      post: ["Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp."],
    },
  },

  // ======================= BÀI 16 =======================
  {
    id: 16, part: "C",
    title: "Các mẫu PNF của chi dưới",
    lt: 2, th: 4, tuhoc: 8,
    clo: "CLO1, CLO2, CLO3, CLO4, CLO5",
    summary:
      "Bài học áp dụng tiến trình cơ bản cho chi dưới: các mẫu khung chậu (nâng ra trước – hạ ra sau, nâng ra sau – hạ ra trước) và bốn mẫu chi dưới: Gập – Dạng – Xoay trong, Duỗi – Khép – Xoay ngoài, Gập – Khép – Xoay ngoài, Duỗi – Dạng – Xoay trong, kèm các biến thể gối gập, gối duỗi, gối thẳng. Người học tìm hiểu tư thế người bệnh và kỹ thuật viên, vị trí tay ở mu bàn chân – gan bàn chân và đùi, kéo giãn ở đầu tầm, mệnh lệnh, thời điểm bình thường và vị trí kết thúc; vận dụng mẫu khung chậu và mẫu chi dưới trong các hoạt động chức năng như lăn trở, bắc cầu, chuyển tư thế, đứng chịu trọng lượng và các pha của dáng đi. Bài học khép lại Phần C, giúp người học lựa chọn mẫu và kỹ thuật phù hợp cho người bệnh liệt nửa người, sau chấn thương – phẫu thuật chi dưới (CLO1, CLO3) và chuẩn bị cho thực hành, đánh giá TH2 (CLO2, CLO5).",
    prepare: {
      before: [
        "Đọc [TL1] phần Các mẫu PNF của chi dưới; [TK2] chương The Scapula and Pelvis, The Lower Extremity và Gait (đọc lướt).",
        "Ôn Giải phẫu – vận động học khung chậu, háng, gối, cổ chân; các pha của chu kỳ dáng đi.",
        "Lập bảng 4 mẫu chi dưới: thành phần ở háng – gối – cổ chân – ngón; vị trí tay; mệnh lệnh.",
      ],
      practice: ["Tự thực hiện chủ động 4 mẫu chi dưới và mẫu khung chậu; tập lệnh với bạn học; xem Bảng kiểm và Rubric TH2."],
      after: ["Trả lời câu hỏi tự lượng giá; làm quiz e-learning; giải tình huống mục 6.", "Ôn tập toàn bộ Phần C để chuẩn bị bài kiểm tra LT2, TH2 và thi kết thúc học phần."],
      reallife: ["Quan sát dáng đi của người cao tuổi và người bệnh liệt nửa người; xác định giai đoạn của dáng đi bị ảnh hưởng và mẫu PNF có thể tạo thuận."],
    },
    refs: pnfRefs({ tl1: "phần Các mẫu PNF của chi dưới", tk1: "Các mẫu vận động chi dưới", tk2: "The Scapula and Pelvis; The Lower Extremity; Gait Training", more: ["[TL2] Nguyễn Thị Hạnh (2024), Bài giảng Bệnh lý và vật lý trị liệu hệ thần kinh cơ nâng cao – phần phục hồi dáng đi, tr. …"] }),
    terms: [
      ["Mẫu Gập – Dạng – Xoay trong", "Flexion–abduction–internal rotation", "Háng gập, dạng, xoay trong kèm cổ chân gập mu – nghiêng ngoài."],
      ["Mẫu Duỗi – Khép – Xoay ngoài", "Extension–adduction–external rotation", "Mẫu đối vận; cổ chân gập lòng – nghiêng trong."],
      ["Mẫu Gập – Khép – Xoay ngoài", "Flexion–adduction–external rotation", "Háng gập, khép, xoay ngoài kèm cổ chân gập mu – nghiêng trong."],
      ["Mẫu Duỗi – Dạng – Xoay trong", "Extension–abduction–internal rotation", "Mẫu đối vận; cổ chân gập lòng – nghiêng ngoài."],
      ["Mẫu khung chậu", "Pelvic patterns", "Nâng ra trước, hạ ra sau, nâng ra sau, hạ ra trước."],
      ["Pha đứng / pha đu đưa", "Stance / swing phase", "Hai giai đoạn chính của chu kỳ dáng đi."],
    ],
    questions: [
      "Mô tả thành phần của 4 mẫu chi dưới ở háng, gối, cổ chân, ngón.",
      "Trình bày tư thế, vị trí tay, mệnh lệnh cho mẫu Gập – Khép – Xoay ngoài với gối gập.",
      "Nêu vai trò của các mẫu khung chậu trong lăn trở và dáng đi.",
      "Phân tích cách sử dụng mẫu chi dưới và kỹ thuật đặc hiệu để tạo thuận pha đu đưa ở người bệnh liệt nửa người.",
    ],
    mcq: [
      { q: "Ở mẫu chi dưới Gập – Dạng – Xoay trong, thành phần cổ chân là:", opts: ["Gập lòng – nghiêng trong", "Gập mu – nghiêng ngoài", "Gập lòng – nghiêng ngoài", "Gập mu – nghiêng trong"], ans: "B" },
      { q: "Người bệnh liệt nửa người kéo lê chân ở pha đu đưa do khó gập háng – gập mu cổ chân. Mẫu chi dưới thường được lựa chọn để tạo thuận là:", opts: ["Duỗi – Khép – Xoay ngoài", "Mẫu gập (ví dụ Gập – Khép – Xoay ngoài hoặc Gập – Dạng – Xoay trong) kèm gối gập", "Chỉ dùng mẫu khung chậu hạ ra sau", "Duỗi – Dạng – Xoay trong"], ans: "B" },
    ],
    caseStudy: {
      text: "Ông G., 63 tuổi, liệt nửa người trái sau xuất huyết não 3 tháng; đi được với gậy một chân nhưng kéo lê bàn chân trái ở pha đu đưa, khung chậu bên trái nâng lên – xoay ra sau khi bước; đứng chịu trọng lượng bên trái chưa vững; không đau, không co rút cổ chân.",
      tasks: [
        "Phân tích các vấn đề dáng đi theo pha đứng và pha đu đưa.",
        "Lựa chọn mẫu khung chậu, mẫu chi dưới, biến thể gối và kỹ thuật đặc hiệu cho từng vấn đề; giải thích.",
        "Mô tả vị trí tay, mệnh lệnh và cách chuyển kết quả tập sang hoạt động đi.",
      ],
    },
    pl4: {
      llo: pnfLLO("ở chi dưới"),
      skillNote: "LLO3 (thực hiện đúng kỹ thuật thao tác các mẫu ở chi dưới) và LLO6 (chuyên nghiệp) của Mục 5 được hình thành tại các buổi thực hành (4 tiết).",
      methods: "Thuyết giảng tích cực (làm mẫu minh họa, câu hỏi gợi mở, Quiz); Dạy học dựa trên tình huống – CBL.",
      gvPrep: ["Soạn slide, video 4 mẫu chi dưới và mẫu khung chậu; video dáng đi liệt nửa người (ẩn danh/được đồng ý).", "Chuẩn bị phiếu quan sát và 01 tình huống CBL; câu hỏi ôn tập tổng hợp Phần C."],
      svPrep: ["Hoàn thành phần chuẩn bị trước giờ lý thuyết Bài 16; mặc trang phục thuận tiện vận động."],
      materials: "Máy chiếu, laptop, slide, bảng; bàn tập; phiếu quan sát.",
      sessions: [{ name: null, rows: patternSession({
        opener: "Chiếu video dáng đi liệt nửa người; SV nhận xét bất thường ở khung chậu, háng, gối, cổ chân.",
        region: "ở chi dưới",
        patterns: "mẫu khung chậu; Gập – Dạng – Xoay trong / Duỗi – Khép – Xoay ngoài; Gập – Khép – Xoay ngoài / Duỗi – Dạng – Xoay trong; biến thể gối gập, gối duỗi",
        safety: "Lưu ý cơ thể học KTV khi nâng đỡ chi dưới và an toàn khớp gối, cổ chân của người bệnh.",
        apply: "Ví dụ: lăn trở, bắc cầu, đứng chịu trọng lượng, pha đu đưa – pha đứng của dáng đi ở người bệnh liệt nửa người, sau phẫu thuật gối/háng.",
        cbl: "người bệnh liệt nửa người kéo lê bàn chân ở pha đu đưa",
      }) }],
      post: [
        "Làm bài quiz ngắn (5 câu) trên hệ thống e-learning trước buổi học kế tiếp.",
        "Ôn tập Phần C theo các câu hỏi tự lượng giá Bài 9–16 để chuẩn bị LT2 (MCQ + tình huống), TH2 (DOPS) và KTHP.",
      ],
    },
  },
];
