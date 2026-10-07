// Phần B – bản khung an toàn: chỉ dựa trên tiểu mục Mục 4 và LLO Mục 5 của ĐCCT 2026 (chưa có nguồn 2024).
// Không đưa thông số, tên thao tác cụ thể hay số liệu lâm sàng; Bộ môn bổ sung khi có giáo trình.
const VL2 = "Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II. Trường Đại học Kỹ thuật Y - Dược Đà Nẵng. Lưu hành nội bộ.";
const intro = "Sinh viên đọc, nghiên cứu giáo trình Các phương thức điều trị Vật lý trị liệu II trước ở nhà, mục tiêu bài học và quy trình kỹ thuật. Trước khi học, sinh viên cần nắm:";
const mind = "Sinh viên vẽ sơ đồ tư duy liên hệ nội dung bài học với các kiến thức giải phẫu, sinh lý đã học và với các phương thức điều trị vật lý khác trong học phần.";
const post = ["Làm bài quiz ngắn (5 câu) trên hệ thống E-learning trước buổi học kế tiếp.", "Gửi câu hỏi thắc mắc vào diễn đàn lớp học trên E-learning."];
const gv = ["Soạn slide trình chiếu (powerpoint) có hình ảnh, phim minh họa.", "Chuẩn bị câu hỏi mở và trò chơi động não (trả lời nhanh, sơ đồ tư duy).", "Chuẩn bị bài tập nhóm/nghiên cứu tình huống."];
const mat = "Máy chiếu, bảng, phấn/bút viết, laptop, slide trình chiếu có hình ảnh, phim.";
const steps = "chào hỏi, giao tiếp, kiểm tra thông tin người bệnh; hướng dẫn, giải thích kỹ thuật; đặt tư thế người bệnh và tư thế kỹ thuật viên; bộc lộ vùng điều trị; thực hiện kỹ thuật; theo dõi và xử trí khi người bệnh phản hồi cảm giác; kết thúc điều trị";

module.exports = [
  {
    title: "Xoa bóp tại chỗ", lt: 2, part: "B",
    summary: "Bài học trình bày khái niệm xoa bóp tại chỗ, các tác dụng sinh lý và tác dụng điều trị; chỉ định, chống chỉ định và nguyên tắc áp dụng; các thao tác xoa bóp cơ bản và quy trình thực hiện. Bài học giúp sinh viên lựa chọn thao tác xoa bóp phù hợp với tình trạng và đáp ứng của người bệnh, làm cơ sở để thực hiện đúng các thao tác theo quy trình trên người bệnh giả định.",
    prepIntro: intro,
    prep: ["Khái niệm xoa bóp tại chỗ.", "Tác dụng sinh lý và tác dụng điều trị của xoa bóp.", "Chỉ định, chống chỉ định và nguyên tắc áp dụng.", "Các thao tác xoa bóp cơ bản và quy trình thực hiện."],
    reallife: mind,
    think: ["Lên danh sách các bệnh/tình trạng được chỉ định xoa bóp tại chỗ.", "Những trường hợp nào không được xoa bóp?"],
    refs: [VL2],
    terms: "Xoa bóp tại chỗ; Tác dụng sinh lý; Tác dụng điều trị; Chỉ định; Chống chỉ định; Nguyên tắc áp dụng; Thao tác xoa bóp cơ bản; Quy trình kỹ thuật",
    questions: ["Trình bày khái niệm xoa bóp tại chỗ.", "Trình bày tác dụng sinh lý và tác dụng điều trị của xoa bóp.", "Kể các chỉ định và chống chỉ định của xoa bóp.", "Trình bày nguyên tắc áp dụng xoa bóp.", "Kể tên các thao tác xoa bóp cơ bản và quy trình thực hiện."],
    cases: [{ text: "Một bệnh nhân giả định được chỉ định xoa bóp tại chỗ tại phòng thực hành.", tasks: ["Liệt kê các chống chỉ định cần kiểm tra trước khi thực hiện.", "Lựa chọn thao tác xoa bóp phù hợp và giải thích.", "Trình bày các bước thực hiện kỹ thuật: " + steps + "."] }],
    llo: ["Phân tích được tác dụng, chỉ định, chống chỉ định và nguyên tắc áp dụng xoa bóp tại chỗ.", "Thực hiện đúng các thao tác xoa bóp cơ bản theo quy trình.", "Lựa chọn được thao tác xoa bóp phù hợp với tình trạng và đáp ứng của người bệnh.", "Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "Thể hiện sự chuyên nghiệp trong quá trình ra quyết định và thực hành kỹ thuật xoa bóp tại chỗ trên mô hình hoặc tình huống lâm sàng giả định."],
    gv, sv: ["Lên danh sách các bệnh/tình trạng được chỉ định xoa bóp."], materials: mat,
    acts: [
      ["1. Mở đầu", ["Ổn định lớp, kiểm tra sĩ số.", "Câu hỏi mở về vai trò của xoa bóp trong vật lý trị liệu.", "Giới thiệu LLO của bài học."], 5],
      ["2. Khái niệm, tác dụng sinh lý và tác dụng điều trị", ["Thuyết giảng tích cực (powerpoint, hình ảnh)."], 25],
      ["3. Chỉ định, chống chỉ định và nguyên tắc áp dụng", ["Thuyết giảng; trò chơi động não: phân loại chỉ định/chống chỉ định."], 25],
      ["4. Các thao tác xoa bóp cơ bản và quy trình", ["Thuyết giảng kết hợp phim minh họa.", "Học nhóm – nghiên cứu tình huống: lựa chọn thao tác cho bệnh nhân giả định; đại diện trình bày."], 35],
      ["5. Tổng kết và Lượng giá tại lớp", ["Tóm tắt bằng sơ đồ tư duy; câu hỏi nhanh.", "Dặn dò xem lại quy trình trước buổi thực hành."], 10],
    ],
    post,
  },
  {
    title: "Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", lt: 2, part: "B",
    summary: "Bài học trình bày khái niệm, đặc điểm và cách xác định điểm kích hoạt; cơ chế tác dụng, chỉ định, chống chỉ định và tai biến của kỹ thuật nén, day điểm kích hoạt và kỹ thuật trượt dọc theo thớ cơ; kỹ thuật nén và day điểm kích hoạt, kỹ thuật trượt dọc theo thớ cơ ở các nhóm cơ chính. Bài học giúp sinh viên lựa chọn kỹ thuật phù hợp với đáp ứng của người bệnh, làm cơ sở để thực hiện đúng kỹ thuật trên người bệnh giả định.",
    prepIntro: intro,
    prep: ["Khái niệm, đặc điểm và cách xác định điểm kích hoạt.", "Cơ chế tác dụng của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.", "Chỉ định, chống chỉ định và tai biến.", "Kỹ thuật nén và day điểm kích hoạt.", "Kỹ thuật trượt dọc theo thớ cơ ở các nhóm cơ chính.", "Giải phẫu các nhóm cơ chính liên quan."],
    reallife: mind,
    think: ["Lên danh sách các bệnh/tình trạng được chỉ định tác động điểm kích hoạt.", "Những tai biến nào có thể xảy ra và cách đề phòng?"],
    refs: [VL2],
    terms: "Điểm kích hoạt; Đặc điểm điểm kích hoạt; Cách xác định điểm kích hoạt; Nén điểm kích hoạt; Day điểm kích hoạt; Trượt dọc theo thớ cơ; Cơ chế tác dụng; Chỉ định; Chống chỉ định; Tai biến",
    questions: ["Trình bày khái niệm và đặc điểm của điểm kích hoạt.", "Trình bày cách xác định điểm kích hoạt.", "Trình bày cơ chế tác dụng, chỉ định, chống chỉ định và tai biến của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.", "Trình bày kỹ thuật nén và day điểm kích hoạt.", "Trình bày kỹ thuật trượt dọc theo thớ cơ ở các nhóm cơ chính."],
    cases: [{ text: "Một bệnh nhân giả định có điểm kích hoạt ở một nhóm cơ chính được chỉ định tác động điểm kích hoạt tại phòng thực hành.", tasks: ["Trình bày cách xác định điểm kích hoạt.", "Lựa chọn kỹ thuật phù hợp (nén, day hoặc trượt dọc theo thớ cơ) và giải thích.", "Trình bày các bước thực hiện kỹ thuật: " + steps + "."] }],
    llo: ["Phân tích được khái niệm, đặc điểm, cách xác định điểm kích hoạt và cơ chế tác dụng, chỉ định, chống chỉ định, tai biến của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.", "Thực hiện đúng kỹ thuật nén, day điểm kích hoạt và trượt dọc theo thớ cơ trên các nhóm cơ chính.", "Lựa chọn được kỹ thuật phù hợp với đáp ứng của người bệnh.", "Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "Thể hiện sự chuyên nghiệp trong quá trình ra quyết định và thực hành nén, day điểm kích hoạt và trượt dọc theo thớ cơ trên mô hình hoặc tình huống lâm sàng giả định."],
    gv, sv: ["Ôn lại giải phẫu các nhóm cơ chính."], materials: mat,
    acts: [
      ["1. Mở đầu", ["Ổn định lớp, kiểm tra sĩ số.", "Câu hỏi mở về điểm đau trong cơ.", "Giới thiệu LLO của bài học."], 5],
      ["2. Điểm kích hoạt: khái niệm, đặc điểm, cách xác định", ["Thuyết giảng tích cực (powerpoint, hình ảnh)."], 25],
      ["3. Cơ chế tác dụng, chỉ định, chống chỉ định, tai biến", ["Thuyết giảng; trò chơi động não: phân loại chỉ định/chống chỉ định."], 20],
      ["4. Kỹ thuật nén, day điểm kích hoạt và trượt dọc theo thớ cơ", ["Thuyết giảng kết hợp phim minh họa.", "Học nhóm – nghiên cứu tình huống: lựa chọn kỹ thuật cho bệnh nhân giả định; đại diện trình bày."], 40],
      ["5. Tổng kết và Lượng giá tại lớp", ["Tóm tắt bằng sơ đồ tư duy; câu hỏi nhanh.", "Dặn dò xem lại quy trình trước buổi thực hành."], 10],
    ],
    post,
  },
  {
    title: "Kéo dãn", lt: 2, part: "B",
    summary: "Bài học trình bày cơ chế tác dụng của kéo dãn (cơ học, thần kinh), phân loại và thông số kéo dãn; chỉ định và chống chỉ định; kỹ thuật kéo dãn các nhóm cơ chính và nguyên tắc an toàn. Bài học giúp sinh viên lựa chọn kỹ thuật kéo dãn phù hợp với đáp ứng của người bệnh, làm cơ sở để thực hiện đúng kỹ thuật, bảo đảm an toàn trên người bệnh giả định.",
    prepIntro: intro,
    prep: ["Cơ chế tác dụng của kéo dãn (cơ học, thần kinh).", "Phân loại và thông số kéo dãn.", "Chỉ định và chống chỉ định.", "Kỹ thuật kéo dãn các nhóm cơ chính.", "Nguyên tắc an toàn khi kéo dãn.", "Giải phẫu các nhóm cơ chính liên quan."],
    reallife: mind,
    think: ["Lên danh sách các bệnh/tình trạng được chỉ định kéo dãn.", "Những nguyên tắc nào giúp bảo đảm an toàn khi kéo dãn?"],
    refs: [VL2],
    terms: "Kéo dãn; Cơ chế tác dụng; Phân loại kéo dãn; Thông số kéo dãn; Chỉ định; Chống chỉ định; Nguyên tắc an toàn",
    questions: ["Trình bày cơ chế tác dụng của kéo dãn.", "Trình bày phân loại và thông số kéo dãn.", "Kể các chỉ định và chống chỉ định của kéo dãn.", "Trình bày kỹ thuật kéo dãn các nhóm cơ chính.", "Trình bày các nguyên tắc an toàn khi kéo dãn."],
    cases: [{ text: "Một bệnh nhân giả định có hạn chế tầm vận động do ngắn một nhóm cơ chính được chỉ định kéo dãn tại phòng thực hành.", tasks: ["Liệt kê các chống chỉ định cần kiểm tra.", "Lựa chọn loại kéo dãn và thông số phù hợp; giải thích.", "Trình bày các bước thực hiện kỹ thuật: " + steps + "."] }],
    llo: ["Phân tích được cơ chế tác dụng, phân loại, thông số, chỉ định và chống chỉ định của kỹ thuật kéo dãn.", "Thực hiện đúng kỹ thuật kéo dãn các nhóm cơ chính, bảo đảm an toàn.", "Lựa chọn được kỹ thuật kéo dãn phù hợp với đáp ứng của người bệnh.", "Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.", "Thể hiện sự chuyên nghiệp trong quá trình ra quyết định và thực hành kỹ thuật kéo dãn trên mô hình hoặc tình huống lâm sàng giả định."],
    gv, sv: ["Ôn lại giải phẫu các nhóm cơ chính."], materials: mat,
    acts: [
      ["1. Mở đầu", ["Ổn định lớp, kiểm tra sĩ số.", "Câu hỏi mở về vai trò của kéo dãn.", "Giới thiệu LLO của bài học."], 5],
      ["2. Cơ chế tác dụng", ["Thuyết giảng tích cực (powerpoint, hình ảnh): cơ chế cơ học và thần kinh."], 20],
      ["3. Phân loại và thông số kéo dãn", ["Thuyết giảng; trò chơi trả lời nhanh."], 20],
      ["4. Chỉ định, chống chỉ định; kỹ thuật và nguyên tắc an toàn", ["Thuyết giảng kết hợp phim minh họa kỹ thuật kéo dãn các nhóm cơ chính.", "Học nhóm – nghiên cứu tình huống: lựa chọn kỹ thuật cho bệnh nhân giả định; đại diện trình bày."], 45],
      ["5. Tổng kết và Lượng giá tại lớp", ["Tóm tắt Phần B bằng sơ đồ tư duy; câu hỏi nhanh.", "Dặn dò ôn tập Phần A, B chuẩn bị kiểm tra."], 10],
    ],
    post,
  },
];
