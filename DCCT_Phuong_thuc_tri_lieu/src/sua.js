const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType, VerticalAlign } = require("docx");
const F = "Times New Roman";
const r = (t, o = {}) => new TextRun({ text: t, font: F, size: o.s || 26, bold: o.b, italics: o.i, color: o.c });
const p = (runs, o = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [r(runs, o)], alignment: o.a || AlignmentType.JUSTIFIED, spacing: { before: o.before || 0, after: o.after ?? 80, line: 300 }, keepNext: o.kn });
const h = (t) => p([r(t, { b: true })], { a: AlignmentType.LEFT, before: 200, kn: true });
const note = (t) => p([r(t, { i: true, c: "1F4E79" })]);
const bd = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const c = (lines, w, o = {}) => new TableCell({
  borders: { top: bd, bottom: bd, left: bd, right: bd }, width: { size: w, type: WidthType.DXA }, columnSpan: o.span,
  verticalAlign: o.v || VerticalAlign.TOP, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  margins: { top: 40, bottom: 40, left: 80, right: 80 },
  children: (Array.isArray(lines) ? lines : [lines]).map((t) => new Paragraph({ children: [r(t, { s: 22, b: o.b })], alignment: o.a || AlignmentType.LEFT, spacing: { after: 20 } })),
});
const tbl = (w, rows) => new Table({ width: { size: w.reduce((a, b) => a + b), type: WidthType.DXA }, columnWidths: w, rows: rows.map((x) => new TableRow({ children: x })) });
const C = AlignmentType.CENTER;

const body = [];
body.push(p([r("NỘI DUNG CẦN SỬA TRONG ĐỀ CƯƠNG CHI TIẾT HỌC PHẦN PHƯƠNG THỨC TRỊ LIỆU", { b: true })], { a: C }));
body.push(p([r("(Gộp Bài 6 “Nén và day điểm kích hoạt” và Bài 7 “Trượt dọc theo thớ cơ”; học phần còn 15 bài; tổng giờ 30 LT – 60 TH – 110 tự học không đổi)", { i: true })], { a: C, after: 160 }));

// ---------------- MỤC 4 ----------------
body.push(h("1. MỤC 4 – Bảng nội dung chi tiết và phân bổ thời gian"));
body.push(note("Thay toàn bộ các dòng PHẦN B (Bài 5–8 cũ) bằng 3 dòng dưới đây. Dòng Tổng giữ nguyên: 30 – 0 – 0 – 60 – 0 – 110 – 200."));
{
  const w = [4471, 600, 600, 700, 800, 600, 700, 600];
  const H = ["(1) Nội dung", "LT", "BT", "TLN", "TH", "TT", "Tự học", "Tổng"];
  const row = (name, items, nums) => [c([name].concat(items.map((x) => "- " + x)), w[0])].concat(nums.map((n, i) => c(String(n), w[i + 1], { a: C })));
  body.push(tbl(w, [
    H.map((x, i) => c(x, w[i], { b: true, a: C, fill: "D9E2F3" })),
    [c("PHẦN B. KỸ THUẬT TÁC ĐỘNG MÔ MỀM TRỊ LIỆU", 9071, { span: 8, b: true })],
    row("5. Xoa bóp tại chỗ", ["Khái niệm, tác dụng sinh lý và tác dụng điều trị.", "Chỉ định, chống chỉ định và nguyên tắc áp dụng.", "Các thao tác xoa bóp cơ bản và quy trình thực hiện."], [2, 0, 0, 3, 0, 6, 11]),
    row("6. Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", ["Điểm kích hoạt: khái niệm, đặc điểm và cách xác định.", "Cơ chế tác dụng, chỉ định, chống chỉ định và tai biến của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.", "Kỹ thuật nén và day điểm kích hoạt.", "Kỹ thuật trượt dọc theo thớ cơ ở các nhóm cơ chính."], [2, 0, 0, 6, 0, 8, 16]),
    row("7. Kéo dãn", ["Cơ chế tác dụng (cơ học, thần kinh); phân loại và thông số kéo dãn.", "Chỉ định và chống chỉ định.", "Kỹ thuật kéo dãn các nhóm cơ chính và nguyên tắc an toàn."], [2, 0, 0, 3, 0, 6, 11]),
    [c("Cộng Phần B", w[0], { b: true, a: AlignmentType.RIGHT }), ...[6, 0, 0, 12, 0, 20, 38].map((n, i) => c(String(n), w[i + 1], { a: C, b: true }))],
  ]));
}
body.push(note("Phần C: chỉ đổi số thứ tự, giờ giữ nguyên: 9→8 Đại cương; 10→9 Các mẫu chuyển động; 11→10 Những thao tác cơ bản của kỹ thuật tạo thuận; 12→11 Những kỹ thuật đặc hiệu; 13→12 Các mẫu PNF của cổ; 14→13 Các mẫu PNF của thân; 15→14 Các mẫu PNF của chi trên; 16→15 Các mẫu PNF của chi dưới. Đồng thời xóa dòng trống giữa bài “Các mẫu chuyển động” và “Những thao tác cơ bản” và sửa tiêu đề cột thứ 3 từ “(5)” thành “(3)”."));

body.push(h("Bảng “Sự đóng góp của các chương/bài học vào hình thành chuẩn đầu ra module” – thay toàn bộ phần thân bảng"));
{
  const w = [5571, 700, 700, 700, 700, 700];
  const all = ["✔", "✔", "✔", "✔", "✔"];
  const rows = [
    ["PHẦN A. ĐIỆN TRỊ LIỆU"],
    ["Bài 1. Năng lượng bức xạ, các định luật và điều trị bằng tia", "✔", "✔", "", "✔", "✔"],
    ["Bài 2. Điều trị bằng sóng", ...all], ["Bài 3. Các dòng điện xung", ...all], ["Bài 4. Máy kéo cột sống", ...all],
    ["PHẦN B. KỸ THUẬT TÁC ĐỘNG MÔ MỀM TRỊ LIỆU"],
    ["Bài 5. Xoa bóp tại chỗ", ...all],
    ["Bài 6. Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", ...all],
    ["Bài 7. Kéo dãn", ...all],
    ["PHẦN C. KỸ THUẬT TẠO THUẬN THẦN KINH CƠ CẢM THỤ BẢN THỂ (PNF)"],
    ["Bài 8. Đại cương", "✔", "", "", "✔", ""],
    ["Bài 9. Các mẫu chuyển động", "✔", "✔", "", "✔", "✔"],
    ["Bài 10. Những thao tác cơ bản của kỹ thuật tạo thuận", "✔", "✔", "", "✔", "✔"],
    ["Bài 11. Những kỹ thuật đặc hiệu", ...all], ["Bài 12. Các mẫu PNF của cổ", ...all], ["Bài 13. Các mẫu PNF của thân", ...all],
    ["Bài 14. Các mẫu PNF của chi trên", ...all], ["Bài 15. Các mẫu PNF của chi dưới", ...all],
  ];
  body.push(tbl(w, [["Chương/bài học", "CLO1", "CLO2", "CLO3", "CLO4", "CLO5"].map((x, i) => c(x, w[i], { b: true, a: C, fill: "D9E2F3" }))].concat(
    rows.map((x) => x.length === 1 ? [c(x[0], 9071, { span: 6, b: true })] : x.map((v, i) => c(v, w[i], { a: i ? C : AlignmentType.LEFT }))))));
}

// ---------------- MỤC 5 ----------------
body.push(h("2. MỤC 5 – Lịch trình tổ chức dạy học cụ thể"));
body.push(note("Xóa 2 khối bài “6. Nén và day điểm kích hoạt” và “7. Trượt dọc theo thớ cơ”; thay bằng khối bài 6 mới. Khối “8. Kéo dãn” đổi thành “7. Kéo dãn” và sửa LLO1. Các cột Chuẩn đầu ra học phần, Phương pháp lượng giá, Phương pháp dạy học, Hình thức, Giảng viên giữ nguyên như các bài khác của Phần B."));
{
  const w = [1700, 4271, 900, 2200];
  const head = ["Bài học", "Mục tiêu bài học", "CLO", "Phương pháp lượng giá"].map((x, i) => c(x, w[i], { b: true, a: C, fill: "D9E2F3" }));
  const lg = ["CLO1: LT1, Vấn đáp (bảng câu hỏi – thang điểm); KTHP, MCQ (đề thi MCQ và đáp án)", "CLO2: TH1, Quan sát đối chiếu (bảng kiểm)", "CLO3: TH1, Quan sát đối chiếu (bảng kiểm); KTHP, MCQ", "CLO4: CCTĐ, Chấm điểm theo quy định (chuyên cần, thái độ)", "CLO5: TH1, Quan sát đối chiếu (bảng kiểm: nhóm tiêu chí chuyên nghiệp)"];
  body.push(tbl(w, [head,
    [c("6. Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", w[0], { b: true }), c([
      "LLO1. Phân tích được khái niệm, đặc điểm, cách xác định điểm kích hoạt và cơ chế tác dụng, chỉ định, chống chỉ định, tai biến của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.",
      "LLO2. Thực hiện đúng kỹ thuật nén, day điểm kích hoạt và trượt dọc theo thớ cơ trên các nhóm cơ chính.",
      "LLO3. Lựa chọn được kỹ thuật phù hợp với đáp ứng của người bệnh.",
      "LLO4. Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.",
      "LLO5. Thể hiện sự chuyên nghiệp trong quá trình ra quyết định và thực hành nén, day điểm kích hoạt và trượt dọc theo thớ cơ trên mô hình hoặc tình huống lâm sàng giả định."], w[1]),
      c(["CLO1", "CLO2", "CLO3", "CLO4", "CLO5"], w[2], { a: C }), c(lg, w[3])],
    [c("7. Kéo dãn", w[0], { b: true }), c([
      "LLO1. Phân tích được cơ chế tác dụng, phân loại, thông số, chỉ định và chống chỉ định của kỹ thuật kéo dãn.",
      "LLO2. Thực hiện đúng kỹ thuật kéo dãn các nhóm cơ chính, bảo đảm an toàn.",
      "LLO3. Lựa chọn được kỹ thuật kéo dãn phù hợp với đáp ứng của người bệnh.",
      "LLO4. Thể hiện thái độ trách nhiệm, hợp tác và tự học trong các hoạt động học tập lý thuyết của bài.",
      "LLO5. Thể hiện sự chuyên nghiệp trong quá trình ra quyết định và thực hành kỹ thuật kéo dãn trên mô hình hoặc tình huống lâm sàng giả định."], w[1]),
      c(["CLO1", "CLO2", "CLO3", "CLO4", "CLO5"], w[2], { a: C }), c(lg, w[3])],
  ]));
}
body.push(note("Phương pháp dạy học cho cả 2 bài: Thuyết giảng tích cực; Dạy học dựa trên tình huống; Làm mẫu và hướng dẫn thực hành; Dạy học mô phỏng. Hình thức: Giảng đường; phòng thực hành. Các bài Phần C đổi số thứ tự 9–16 thành 8–15, nội dung không đổi."));

// ---------------- MỤC 10 ----------------
body.push(h("3. MỤC 10 – Đánh giá kết quả học tập"));
const rep = (where, from, to) => {
  body.push(p([r(where, { b: true, i: true })], { after: 30, kn: true }));
  body.push(p([r("Tìm: ", { b: true }), r(from)], { after: 30 }));
  body.push(p([r("Thay bằng: ", { b: true, c: "C00000" }), r(to)], { after: 120 }));
};
rep("Bảng “Đánh giá kết quả học tập và ma trận phân bổ…”, dòng TH1, cột Bài kiểm tra/Cột điểm:", "Thực hành Phần A, B (Bài 1–8: Điện trị liệu, Tác động mô mềm)", "Thực hành Phần A, B (Bài 1–7: Điện trị liệu, Tác động mô mềm)");
rep("Cùng bảng, dòng TH2:", "Thực hành Phần C (Bài 9–16: PNF)", "Thực hành Phần C (Bài 8–15: PNF)");
rep("Mục 10.1, đoạn “Kiểm tra thực hành (Mã TH1, TH2)”, gạch đầu dòng TH1:", "+ TH1 (Bài 1–8: Điện trị liệu, Tác động mô mềm): Sinh viên bốc thăm một kỹ thuật ngẫu nhiên trong phạm vi đã học (ví dụ: điều trị bằng sóng ngắn, dòng điện xung, xoa bóp, nén điểm kích hoạt, kéo dãn...)", "+ TH1 (Bài 1–7: Điện trị liệu, Tác động mô mềm): Sinh viên bốc thăm một kỹ thuật ngẫu nhiên trong phạm vi đã học (ví dụ: điều trị bằng sóng ngắn, dòng điện xung, xoa bóp, nén và day điểm kích hoạt, trượt dọc theo thớ cơ, kéo dãn...)");
rep("Mục 10.1, gạch đầu dòng TH2:", "+ TH2 (Bài 9–16: PNF):", "+ TH2 (Bài 8–15: PNF):");

// ---------------- PHỤ LỤC 2 ----------------
body.push(h("4. PHỤ LỤC 2 – Công cụ lượng giá"));
rep("Phiếu “LƯỢNG GIÁ KỸ THUẬT ĐIỆN TRỊ LIỆU / TÁC ĐỘNG MÔ MỀM (Mã TH1)”, mục I.3 Tên kỹ thuật:", "Thực hiện một kỹ thuật điện trị liệu hoặc tác động mô mềm (Bài 1-8) phù hợp với tình huống bốc thăm.", "Thực hiện một kỹ thuật điện trị liệu hoặc tác động mô mềm (Bài 1-7) phù hợp với tình huống bốc thăm.");
rep("Phiếu TH1, mục I.4 Tình huống – Giai đoạn 1:", "… thuộc phạm vi Bài 1-8.", "… thuộc phạm vi Bài 1-7.");
rep("Phiếu “LƯỢNG GIÁ KỸ THUẬT TẠO THUẬN … (PNF) (Mã TH2)”, mục I.3 Tên kỹ thuật:", "(cổ, thân, chi trên hoặc chi dưới - Bài 9-16)", "(cổ, thân, chi trên hoặc chi dưới - Bài 8-15)");
rep("Phiếu TH2, mục I.4 Tình huống – Giai đoạn 1:", "… thuộc phạm vi Bài 9-16.", "… thuộc phạm vi Bài 8-15.");
body.push(note("Checklist, Rubric TH1/TH2 và ma trận đề KTHP không cần sửa: tiêu chí đã viết chung cho “tác động mô mềm”, và số giờ lý thuyết từng phần (A: 10, B: 6, C: 14) không đổi nên tỷ lệ phân bổ câu hỏi giữ nguyên."));

body.push(h("5. Sửa thêm (không bắt buộc) – Mục 3 Tóm tắt nội dung học phần"));
rep("Câu mô tả Phần B:", "kỹ thuật tác động mô mềm (xoa bóp tại chỗ, nén và day điểm kích hoạt, trượt dọc thớ cơ, kéo dãn)", "kỹ thuật tác động mô mềm (xoa bóp tại chỗ; nén, day điểm kích hoạt và trượt dọc theo thớ cơ; kéo dãn)");

const doc = new Document({ styles: { default: { document: { run: { font: F, size: 26 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1701 } } }, children: body }] });
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("ok"); });
