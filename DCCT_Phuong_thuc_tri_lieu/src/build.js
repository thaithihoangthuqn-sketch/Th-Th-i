const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType,
  BorderStyle, ShadingType, LevelFormat, PageBreak, Footer, Header, PageNumber, VerticalAlign,
} = require("docx");

const lessons = require("./lessonsA.js").concat(require("./lessonsC.js"));
const OUT = process.argv[2] || "PL3_PL4_Phuong_thuc_tri_lieu.docx";

const FONT = "Times New Roman";
const SZ = 26; // 13pt
const TSZ = 23; // 11.5pt trong bảng
const W = 9071; // vùng nội dung A4, lề trái 3 cm, phải 2 cm

const PARTS = {
  A: "PHẦN A. ĐIỆN TRỊ LIỆU",
  B: "PHẦN B. KỸ THUẬT TÁC ĐỘNG MÔ MỀM TRỊ LIỆU",
  C: "PHẦN C. KỸ THUẬT TẠO THUẬN THẦN KINH CƠ CẢM THỤ BẢN THỂ (PNF)",
};

// ---------- helpers ----------
const run = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || SZ, bold: o.bold, italics: o.italics, color: o.color });
const P = (children, o = {}) =>
  new Paragraph({
    children: Array.isArray(children) ? children : [typeof children === "string" ? run(children, o) : children],
    alignment: o.align || AlignmentType.JUSTIFIED,
    spacing: { before: o.before ?? 0, after: o.after ?? 80, line: o.line || 300 },
    indent: o.indent,
    keepNext: o.keepNext,
    pageBreakBefore: o.pageBreakBefore,
  });
const T = (text, o = {}) => P(text, o);
const B = (text, o = {}) =>
  new Paragraph({
    children: [run(text, o)],
    numbering: { reference: "dash", level: o.level || 0 },
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 60, line: 300 },
  });
const H = (text, o = {}) => P([run(text, { bold: true, size: o.size || SZ, italics: o.italics })], { align: o.align || AlignmentType.LEFT, before: o.before ?? 160, after: o.after ?? 80, keepNext: true, pageBreakBefore: o.pageBreakBefore });
const center = (text, o = {}) => P([run(text, { bold: o.bold !== false, size: o.size || SZ, italics: o.italics })], { align: AlignmentType.CENTER, after: o.after ?? 60, before: o.before ?? 0, pageBreakBefore: o.pageBreakBefore, keepNext: true });
const labelValue = (label, value) => P([run(label, { bold: true }), run(value)], { after: 60 });

const border = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const borders = { top: border, bottom: border, left: border, right: border };
const cell = (content, width, o = {}) =>
  new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    columnSpan: o.span,
    verticalAlign: o.valign || VerticalAlign.TOP,
    shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 50, bottom: 50, left: 90, right: 90 },
    children: (Array.isArray(content) ? content : [content]).map((c) =>
      typeof c === "string"
        ? new Paragraph({
            children: [run(c, { size: TSZ, bold: o.bold, italics: o.italics })],
            alignment: o.align || AlignmentType.LEFT,
            spacing: { after: 30, line: 264 },
          })
        : c
    ),
  });
const cellPara = (text, o = {}) =>
  new Paragraph({
    children: [run(text, { size: TSZ, bold: o.bold, italics: o.italics })],
    alignment: o.align || AlignmentType.LEFT,
    spacing: { after: 30, line: 264 },
    numbering: o.bullet ? { reference: "dash", level: 0 } : undefined,
  });
const table = (widths, rows) =>
  new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, rows });
const HEAD = "D9E2F3";
const headRow = (labels, widths) =>
  new TableRow({ tableHeader: true, children: labels.map((l, i) => cell(l, widths[i], { bold: true, fill: HEAD, align: AlignmentType.CENTER, valign: VerticalAlign.CENTER })) });

// Đảo vị trí đáp án đúng để tránh lặp một chữ cái
const LET = "ABCD";
function placeMCQ(m, seed) {
  const opts = m.opts.slice();
  const correct = opts[LET.indexOf(m.ans)];
  opts.splice(LET.indexOf(m.ans), 1);
  const target = seed % m.opts.length;
  opts.splice(target, 0, correct);
  return { q: m.q, opts, ans: LET[target] };
}

const assessOf = (l) => (l.part === "C" ? (l.th > 0 ? "LT2, TH2, KTHP, TCTN" : "LT2, KTHP, TCTN") : "LT1, TH1, KTHP, TCTN");

// Số hiệu LLO giữ nguyên theo Mục 5 – Lịch trình tổ chức dạy học cụ thể
const LLO_NUMS = { 1: [1, 2, 4], 2: [1, 3, 4], 3: [1, 3, 4], 4: [1, 3, 4], 5: [1, 3, 4], 6: [1, 3, 4], 7: [1, 3, 4], 8: [1, 3, 4],
  9: [1, 2], 10: [1, 2, 4], 11: [1, 2, 3, 4, 5], 12: [1, 2, 3, 4], 13: [1, 2, 4, 5], 14: [1, 2, 4, 5], 15: [1, 2, 4, 5], 16: [1, 2, 4, 5] };

const body = [];

// =====================================================================
// PHỤ LỤC 3
// =====================================================================
body.push(center("PHỤ LỤC 3", { size: 28 }));
body.push(center("HƯỚNG DẪN SINH VIÊN CHUẨN BỊ BÀI, TỰ HỌC", { size: 28 }));
body.push(center("Học phần: Phương thức trị liệu – Mã học phần: PTL024344", { bold: false, italics: true, after: 160 }));

body.push(H("I. HƯỚNG DẪN CHUNG"));
body.push(H("1. Mục đích", { before: 60 }));
body.push(T("Phụ lục này cụ thể hóa phương pháp Hướng dẫn tự học có định hướng (Guided Self-learning) theo Hướng dẫn số 292/HD-ĐHKTYDĐN về lựa chọn phương pháp dạy học, nhằm giúp sinh viên chủ động chuẩn bị bài trước giờ lý thuyết và thực hành, tự lượng giá sau mỗi bài và vận dụng kiến thức vào tình huống nghề nghiệp. Mỗi bài học được thiết kế liên kết đồng bộ (constructive alignment) giữa chuẩn đầu ra bài học (LLO), chuẩn đầu ra học phần (CLO1–CLO5), hoạt động tự học và các cột điểm đánh giá (TCTN, LT1, LT2, TH1, TH2, KTHP) theo Hướng dẫn số 216/HD-ĐHKTYDĐN và số 262/HD-ĐHKTYDĐN."));
body.push(H("2. Quy trình tự học cho mỗi bài", { before: 60 }));
[
  "Bước 1 – Trước giờ lý thuyết: đọc tài liệu có hướng dẫn theo mục 3 của từng bài; nắm các thuật ngữ ở mục 4; trả lời nháp các câu hỏi định hướng; ghi Nhật ký học tập (3 ý chính + 1 câu hỏi muốn hỏi giảng viên).",
  "Bước 2 – Trước giờ thực hành: đọc quy trình kỹ thuật; xem video do Bộ môn cung cấp trên LMS; đối chiếu Bảng kiểm và Rubric của TH1 (Bài 1–8) hoặc TH2 (Bài 9–16) tại Phụ lục 2 để biết các bước trọng yếu và tiêu chí sẽ được quan sát.",
  "Bước 3 – Sau buổi học: trả lời câu hỏi tự lượng giá (mục 5); làm quiz 5 câu trên hệ thống e-learning trước buổi học kế tiếp; giải bài tập tình huống (mục 6) và nộp lên LMS khi được giảng viên yêu cầu.",
].forEach((t) => body.push(B(t)));
body.push(H("3. Minh chứng tự học và liên kết với đánh giá", { before: 60 }));
[
  "Nhật ký học tập, kết quả quiz e-learning và bản giải tình huống nộp trên LMS là minh chứng cho tiêu chí “chuẩn bị bài” và “tinh thần tự học, tự nghiên cứu” của cột điểm Tự chủ trách nhiệm (TCTN, CLO4) – Mục 10.1.",
  "Câu hỏi tự lượng giá gồm câu hỏi ngắn và câu MCQ lý thuyết/MCQ tình huống, có cấu trúc tương tự bài kiểm tra LT1 (Phần A, B), LT2 (Phần C) và thi kết thúc học phần (KTHP) – CLO1, CLO3.",
  "Bài tập tình huống mô phỏng Giai đoạn 1 của bài thi thực hành TH1/TH2 (bốc thăm tình huống, xác định chỉ định – chống chỉ định, lựa chọn kỹ thuật) – CLO2, CLO3, CLO5.",
  "Đáp án các câu MCQ được cung cấp để sinh viên tự đối chiếu; câu hỏi ngắn và bài tập tình huống được giảng viên phản hồi trên lớp hoặc trên LMS.",
].forEach((t) => body.push(B(t)));

body.push(H("4. Phân bổ thời gian tự học (110 giờ) theo bài học", { before: 60 }));
{
  const w = [700, 3371, 800, 800, 1000, 1200, 1200];
  const rows = [headRow(["Bài", "Tên bài", "LT (tiết)", "TH (tiết)", "Tự học (giờ)", "CLO", "Cột điểm liên quan"], w)];
  let lastPart = null;
  let s = { lt: 0, th: 0, tu: 0 };
  lessons.forEach((l) => {
    if (l.part !== lastPart) {
      rows.push(new TableRow({ children: [cell(PARTS[l.part], W, { span: 7, bold: true, fill: "F2F2F2" })] }));
      lastPart = l.part;
    }
    s.lt += l.lt; s.th += l.th; s.tu += l.tuhoc;
    rows.push(new TableRow({ children: [
      cell(String(l.id), w[0], { align: AlignmentType.CENTER }), cell(l.title, w[1]),
      cell(String(l.lt), w[2], { align: AlignmentType.CENTER }), cell(String(l.th), w[3], { align: AlignmentType.CENTER }),
      cell(String(l.tuhoc), w[4], { align: AlignmentType.CENTER }), cell(l.clo, w[5]), cell(assessOf(l), w[6]),
    ] }));
  });
  rows.push(new TableRow({ children: [
    cell("Tổng", w[0] + w[1], { span: 2, bold: true, align: AlignmentType.CENTER }),
    cell(String(s.lt), w[2], { bold: true, align: AlignmentType.CENTER }), cell(String(s.th), w[3], { bold: true, align: AlignmentType.CENTER }),
    cell(String(s.tu), w[4], { bold: true, align: AlignmentType.CENTER }), cell("", w[5]), cell("", w[6]),
  ] }));
  body.push(table(w, rows));
  if (s.lt !== 30 || s.th !== 60 || s.tu !== 110) throw new Error("Tổng giờ không khớp Mục 4: " + JSON.stringify(s));
}

body.push(H("5. Danh mục tài liệu và ký hiệu sử dụng trong Phụ lục", { before: 160 }));
{
  const w = [900, 8171];
  const refs = [
    ["[TL1]", "Lê Quang Khanh (2018), Giáo trình Tạo thuận thần kinh cơ cảm thụ bản thể, Trường Đại học Kỹ thuật Y – Dược Đà Nẵng. (Tài liệu bắt buộc – Mục 6.1)"],
    ["[TL2]", "Nguyễn Thị Hạnh (2024), Bài giảng Bệnh lý và vật lý trị liệu hệ thần kinh cơ nâng cao, Trường Đại học Kỹ thuật Y – Dược Đà Nẵng. (Tài liệu bắt buộc – Mục 6.1)"],
    ["[TL3]", "Cao Bích Thủy (2016), Các phương thức điều trị Vật lý trị liệu I, Trường Đại học Kỹ thuật Y – Dược Đà Nẵng. (Tài liệu bắt buộc – Mục 6.1)"],
    ["[TL4]", "Lê Quang Khanh (2016), Các phương thức điều trị Vật lý trị liệu II, Trường Đại học Kỹ thuật Y – Dược Đà Nẵng. (Tài liệu bắt buộc – Mục 6.1)"],
    ["[TK1]", "Lê Khánh Điền, Nguyễn Thi Hương (2008), Kỹ thuật tạo thuận cảm thụ bản thể thần kinh cơ, Nhà xuất bản Y học, Hà Nội. (Tài liệu tham khảo – Mục 6.2)"],
    ["[TK2]", "Adler S.S., Beckers D., Buck M. (2014), PNF in Practice: An Illustrated Guide, 4th ed., Springer-Verlag Berlin Heidelberg. (Tài liệu tham khảo – Mục 6.2)"],
    ["[MR1]", "Bộ Y tế (2014), Hướng dẫn quy trình kỹ thuật chuyên ngành Phục hồi chức năng, ban hành kèm Quyết định số 54/QĐ-BYT ngày 06/01/2014. (Tài liệu mở rộng – đề xuất bổ sung Mục 6.2)"],
    ["[MR2]", "Cameron M.H. (2018), Physical Agents in Rehabilitation: An Evidence-Based Approach to Practice, 5th ed., Elsevier. (Tài liệu mở rộng – đề xuất bổ sung Mục 6.2)"],
    ["[MR3]", "Donnelly J.M., Fernández-de-las-Peñas C., Finnegan M., Freeman J.L. (2019), Travell, Simons & Simons’ Myofascial Pain and Dysfunction: The Trigger Point Manual, 3rd ed., Wolters Kluwer. (Tài liệu mở rộng – đề xuất bổ sung Mục 6.2)"],
    ["[MR4]", "Kisner C., Colby L.A., Borstad J. (2018), Therapeutic Exercise: Foundations and Techniques, 7th ed., F.A. Davis. (Tài liệu mở rộng – đề xuất bổ sung Mục 6.2)"],
  ];
  const rows = [headRow(["Ký hiệu", "Tài liệu"], w)].concat(refs.map((r) => new TableRow({ children: [cell(r[0], w[0], { bold: true, align: AlignmentType.CENTER }), cell(r[1], w[1])] })));
  body.push(table(w, rows));
  body.push(T("Ghi chú: “tr. …” là số trang theo bản tài liệu đang lưu hành tại Thư viện/Bộ môn; giảng viên cập nhật cụ thể và đăng kèm trên LMS trước mỗi học kỳ.", { italics: true, before: 60 }));
}

body.push(H("II. HƯỚNG DẪN CHUẨN BỊ BÀI, TỰ HỌC CHO TỪNG BÀI", { pageBreakBefore: true, before: 0 }));

let lastPart = null;
lessons.forEach((l, li) => {
  if (l.part !== lastPart) {
    body.push(center(PARTS[l.part], { before: li === 0 ? 60 : 240, after: 100 }));
    lastPart = l.part;
  }
  body.push(H(`Bài ${l.id}. ${l.title}`, { before: 200 }));
  body.push(P([run("Thời lượng: ", { italics: true, bold: true }), run(`Lý thuyết ${l.lt} tiết – Thực hành ${l.th} tiết – Tự học ${l.tuhoc} giờ. `, { italics: true }), run("Chuẩn đầu ra học phần: ", { italics: true, bold: true }), run(l.clo + ".", { italics: true })], { after: 80 }));

  body.push(H("1. Tóm tắt", { before: 80 }));
  body.push(T(l.summary));

  body.push(H("2. Các bước cần chuẩn bị", { before: 80 }));
  body.push(T("SV đọc kỹ “Tài liệu hướng dẫn sinh viên” của học phần và thực hiện các bước sau:", { after: 40 }));
  body.push(P([run("a) Trước giờ lý thuyết – SV nắm vững các nội dung sau:", { italics: true, bold: true })], { after: 40 }));
  l.prepare.before.forEach((t) => body.push(B(t)));
  body.push(P([run("b) Trước giờ thực hành:", { italics: true, bold: true })], { after: 40 }));
  l.prepare.practice.forEach((t) => body.push(B(t)));
  body.push(P([run("c) Sau buổi học:", { italics: true, bold: true })], { after: 40 }));
  l.prepare.after.forEach((t) => body.push(B(t)));
  body.push(P([run("d) Liên hệ thực tiễn:", { italics: true, bold: true })], { after: 40 }));
  l.prepare.reallife.forEach((t) => body.push(B(t)));

  body.push(H("3. Tài liệu cần tham khảo", { before: 80 }));
  l.refs.forEach((t) => body.push(B(t)));

  body.push(H("4. Các thuật ngữ cần nắm", { before: 80 }));
  {
    const w = [2300, 2600, 4171];
    const rows = [headRow(["Thuật ngữ", "Tiếng Anh", "Ý nghĩa"], w)].concat(
      l.terms.map((t) => new TableRow({ children: [cell(t[0], w[0], { bold: true }), cell(t[1], w[1], { italics: true }), cell(t[2], w[2])] }))
    );
    body.push(table(w, rows));
  }

  body.push(H("5. Các câu hỏi tự lượng giá", { before: 120 }));
  body.push(P([run("a) Câu hỏi ngắn:", { italics: true, bold: true })], { after: 40 }));
  l.questions.forEach((q, i) => body.push(T(`${i + 1}. ${q}`, { indent: { left: 284 }, after: 40 })));
  body.push(P([run("b) Câu hỏi trắc nghiệm (chọn 1 phương án đúng nhất):", { italics: true, bold: true })], { after: 40, before: 40 }));
  const answers = [];
  l.mcq.forEach((m0, i) => {
    const m = placeMCQ(m0, l.id + i * 2 + 1);
    answers.push(`${i + 1}–${m.ans}`);
    body.push(T(`Câu ${i + 1}. ${m.q}`, { indent: { left: 284 }, after: 20, keepNext: true }));
    m.opts.forEach((o, k) => body.push(T(`${LET[k]}. ${o}`, { indent: { left: 680 }, after: 10, keepNext: k < m.opts.length - 1 })));
  });
  body.push(P([run("Đáp án: ", { bold: true, italics: true }), run(answers.join("; ") + ".", { italics: true })], { indent: { left: 284 }, before: 40 }));

  body.push(H("6. Bài tập/tình huống cần chuẩn bị", { before: 80 }));
  body.push(P([run("Tình huống: ", { bold: true }), run(l.caseStudy.text)]));
  body.push(T("Yêu cầu:", { after: 30 }));
  l.caseStudy.tasks.forEach((t, i) => body.push(T(`${i + 1}) ${t}`, { indent: { left: 284 }, after: 30 })));
});

// =====================================================================
// PHỤ LỤC 4
// =====================================================================
body.push(center("PHỤ LỤC 4", { size: 28, pageBreakBefore: true }));
body.push(center("KẾ HOẠCH BÀI GIẢNG", { size: 28 }));
body.push(center("Học phần: Phương thức trị liệu – Mã học phần: PTL024344", { bold: false, italics: true, after: 160 }));

body.push(H("I. QUY ƯỚC CHUNG"));
[
  "Kế hoạch bài giảng áp dụng cho 30 tiết lý thuyết của học phần, hình thức trực tiếp trên lớp (giảng đường); 01 tiết = 50 phút.",
  "Chuẩn đầu ra bài học (LLO) được trích từ Mục 5 – Lịch trình tổ chức dạy học cụ thể và giữ nguyên số hiệu LLO như Mục 5. Trong giờ lý thuyết tập trung hình thành các LLO kiến thức, lựa chọn kỹ thuật (CLO1, CLO3) và thái độ học tập (CLO4); các LLO thực hiện kỹ thuật và tính chuyên nghiệp (CLO2, CLO5) được hình thành tại phòng thực hành bằng Làm mẫu và hướng dẫn thực hành, Dạy học mô phỏng và được đánh giá bằng TH1/TH2 (DOPS – Checklist + Rubric, Phụ lục 2).",
  "Tên phương pháp dạy học thống nhất theo Hướng dẫn số 292/HD-ĐHKTYDĐN: Thuyết giảng tích cực (kỹ thuật: Think–Pair–Share, động não, khảo sát nhanh – Polling, kiểm tra nhanh – Quiz) và Dạy học dựa trên tình huống – CBL (kỹ thuật: phân tích tình huống, thảo luận nhóm, trình bày kết quả).",
  "Giảng viên: theo kế hoạch phân công hằng năm của Bộ môn Vật lý trị liệu (danh sách tại Phụ lục 1).",
  "Đối tượng: sinh viên ngành Kỹ thuật Phục hồi chức năng năm thứ 2 (học kỳ II), trình độ đại học, hệ chính quy.",
].forEach((t) => body.push(B(t)));

body.push(H("II. BẢNG TỔNG HỢP KẾ HOẠCH GIẢNG DẠY LÝ THUYẾT", { before: 120 }));
{
  const w = [600, 2700, 700, 2671, 2400];
  const rows = [headRow(["Bài", "Tên bài giảng", "Số tiết", "Phương pháp dạy học", "Lượng giá liên quan"], w)];
  let lp = null;
  lessons.forEach((l) => {
    if (l.part !== lp) { rows.push(new TableRow({ children: [cell(PARTS[l.part], W, { span: 5, bold: true, fill: "F2F2F2" })] })); lp = l.part; }
    const hasCBL = /CBL/.test(l.pl4.methods);
    rows.push(new TableRow({ children: [
      cell(String(l.id), w[0], { align: AlignmentType.CENTER }), cell(l.title, w[1]), cell(String(l.lt), w[2], { align: AlignmentType.CENTER }),
      cell(hasCBL ? "Thuyết giảng tích cực; Dạy học dựa trên tình huống (CBL)" : "Thuyết giảng tích cực", w[3]),
      cell("Quiz tại lớp; quiz e-learning; " + (l.part === "C" ? "LT2" : "LT1") + "; KTHP", w[4]),
    ] }));
  });
  rows.push(new TableRow({ children: [cell("Tổng", w[0] + w[1], { span: 2, bold: true, align: AlignmentType.CENTER }), cell("30", w[2], { bold: true, align: AlignmentType.CENTER }), cell("", w[3]), cell("", w[4])] }));
  body.push(table(w, rows));
}

body.push(H("III. KẾ HOẠCH BÀI GIẢNG CHI TIẾT", { pageBreakBefore: true, before: 0 }));
lastPart = null;
lessons.forEach((l, li) => {
  const p = l.pl4;
  if (l.part !== lastPart) { body.push(center(PARTS[l.part], { before: li === 0 ? 60 : 200, after: 100 })); lastPart = l.part; }
  body.push(H(`KẾ HOẠCH BÀI GIẢNG BÀI ${l.id}`, { align: AlignmentType.CENTER, before: li === 0 ? 120 : 0, pageBreakBefore: li !== 0 && l.part === lessons[li - 1].part }));

  body.push(labelValue("1. Tên bài giảng: ", `Bài ${l.id}. ${l.title}`));
  body.push(labelValue("2. Giảng viên: ", "…………………………………… (theo kế hoạch phân công hằng năm của Bộ môn – Phụ lục 1)"));
  body.push(H("3. Chuẩn đầu ra bài học", { before: 40, after: 40 }));
  body.push(T("Kết thúc bài học này, sinh viên có khả năng:", { after: 40 }));
  const nums = LLO_NUMS[l.id];
  if (nums.length !== p.llo.length) throw new Error("LLO map mismatch bài " + l.id);
  p.llo.forEach((x, i) => body.push(P([run(`LLO${nums[i]}. `, { bold: true }), run(`${x[0]} (${x[1]})`)], { indent: { left: 284 }, after: 30 })));
  if (p.skillNote) body.push(P([run("Ghi chú: ", { italics: true, bold: true }), run(p.skillNote, { italics: true })], { before: 40 }));
  const minutes = l.lt * 50;
  body.push(labelValue("4. Thời lượng bài giảng: ", `${l.lt} tiết lý thuyết (${minutes} phút)` + (p.sessions.length > 1 ? `, chia thành ${p.sessions.length} buổi.` : ".")));
  body.push(labelValue("5. Đối tượng sinh viên: ", "Sinh viên ngành Kỹ thuật Phục hồi chức năng năm thứ 2."));
  body.push(H("6. Phần chuẩn bị", { before: 40, after: 40 }));
  body.push(P([run("Phương pháp dạy học: ", { bold: true, italics: true }), run(p.methods, { italics: true })], { after: 40 }));
  body.push(T("Đối với giảng viên:", { after: 30 }));
  p.gvPrep.forEach((t) => body.push(B(t)));
  body.push(T("Đối với sinh viên:", { after: 30 }));
  p.svPrep.concat(["Suy nghĩ về các ứng dụng trên thực tế của kiến thức được học (mục “Liên hệ thực tiễn” – Phụ lục 3)."]).forEach((t) => body.push(B(t)));
  body.push(H("7. Vật liệu giảng dạy", { before: 40, after: 40 }));
  body.push(T(p.materials));
  body.push(H("8. Hoạt động và lượng giá", { before: 40, after: 60 }));
  let total = 0;
  p.sessions.forEach((s) => {
    const w = [2200, 5971, 900];
    const rows = [headRow(["Hợp phần", "Mô tả và ghi chú", "Thời lượng (phút)"], w)];
    if (s.name) rows.push(new TableRow({ children: [cell(s.name, W, { span: 3, bold: true, italics: true, fill: "F2F2F2" })] }));
    let sub = 0;
    s.rows.forEach((r) => {
      sub += r[2];
      rows.push(new TableRow({ cantSplit: true, children: [
        cell(r[0], w[0], { bold: true }),
        cell(r[1].map((t) => cellPara(t, { bullet: r[1].length > 1 })), w[1]),
        cell(String(r[2]), w[2], { align: AlignmentType.CENTER, valign: VerticalAlign.CENTER }),
      ] }));
    });
    rows.push(new TableRow({ children: [cell("Cộng", w[0] + w[1], { span: 2, bold: true, align: AlignmentType.RIGHT }), cell(String(sub), w[2], { bold: true, align: AlignmentType.CENTER })] }));
    total += sub;
    body.push(table(w, rows));
    body.push(T("", { after: 40 }));
  });
  if (total !== minutes) throw new Error(`Bài ${l.id}: tổng phút ${total} ≠ ${minutes}`);
  body.push(H("9. Lượng giá sau lớp học", { before: 40, after: 40 }));
  p.post.forEach((t) => body.push(B(t)));
});

// ---------- document ----------
const doc = new Document({
  creator: "Bộ môn Vật lý trị liệu – Khoa Phục hồi chức năng",
  title: "Phụ lục 3, 4 – ĐCCT Phương thức trị liệu",
  styles: { default: { document: { run: { font: FONT, size: SZ } } } },
  numbering: {
    config: [{ reference: "dash", levels: [{ level: 0, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 568, hanging: 284 } } } }] }],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1701 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [run("ĐCCT học phần Phương thức trị liệu (PTL024344) – Phụ lục 3, 4", { size: 20, italics: true })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 22 })] })] }) },
    children: body,
  }],
});

Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(OUT, buf); console.log("Wrote", OUT, buf.length, "bytes"); });
