const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType, VerticalAlign } = require("docx");
const F = "Times New Roman";
const r = (t, o = {}) => new TextRun({ text: t, font: F, size: o.s || 26, bold: o.b, italics: o.i });
const p = (runs, o = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [r(runs, o)], alignment: o.a || AlignmentType.JUSTIFIED, spacing: { before: o.before || 0, after: o.after ?? 80, line: 300 }, indent: o.ind });
const bd = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const c = (lines, w, o = {}) => new TableCell({
  borders: { top: bd, bottom: bd, left: bd, right: bd }, width: { size: w, type: WidthType.DXA }, columnSpan: o.span, rowSpan: o.rows,
  verticalAlign: o.v || VerticalAlign.TOP, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
  margins: { top: 40, bottom: 40, left: 80, right: 80 },
  children: (Array.isArray(lines) ? lines : [lines]).map((t, k) => new Paragraph({ children: [r(t, { s: o.s || 24, b: !!(o.b && (k === 0 || o.s)), i: o.i })], alignment: o.a || AlignmentType.LEFT, spacing: { after: 20 } })),
});
const C = AlignmentType.CENTER, VC = VerticalAlign.CENTER;

// [tên bài, nội dung, LT, TH, Tự học]
const L = [
  { part: "PHẦN A. ĐIỆN TRỊ LIỆU" },
  ["1. Năng lượng bức xạ, các định luật và điều trị bằng tia", ["Sự phát sinh và đặc tính sóng của điện từ; quá trình phản chiếu, khúc xạ và hấp thu.", "Tia hồng ngoại: nguồn phát xạ, tác dụng sinh lý, tác dụng điều trị và ứng dụng lâm sàng.", "Chống chỉ định và tai biến khi điều trị bằng tia hồng ngoại.", "Kỹ thuật điều trị bằng tia hồng ngoại theo quy trình."], 1, 2, 4],
  ["2. Điều trị bằng sóng", ["Dòng cao tần và thấu nhiệt sóng ngắn: đại cương và ứng dụng điều trị.", "Laser trong vật lý trị liệu: đại cương và ứng dụng điều trị.", "Sóng xung kích trong vật lý trị liệu: đại cương và ứng dụng điều trị.", "Siêu âm điều trị: đại cương và ứng dụng điều trị.", "Chỉ định, chống chỉ định, tai biến và các biện pháp đề phòng; chuẩn bị máy và người bệnh.", "Kỹ thuật điều trị bằng sóng, bảo đảm an toàn cho người bệnh và máy trong quá trình điều trị."], 5, 8, 18],
  ["3. Các dòng điện xung", ["Khái niệm kích thích điện; kích thích điện thần kinh - cơ.", "Các dòng điện giảm đau.", "Lựa chọn dòng điện trong điều trị; xác định vị trí đặt điện cực.", "Kỹ thuật điều trị bằng điện cực điểm và điện cực tấm."], 3, 8, 14],
  ["4. Máy kéo cột sống", ["Các loại máy kéo cột sống và nguyên lý.", "Chỉ định và chống chỉ định của kéo cột sống.", "Nguyên tắc tổng quát và kỹ thuật điều trị bằng máy kéo cột sống.", "Biện pháp bảo đảm an toàn cho người bệnh trong quá trình điều trị."], 1, 2, 4],
  { part: "PHẦN B. KỸ THUẬT TÁC ĐỘNG MÔ MỀM TRỊ LIỆU" },
  ["5. Xoa bóp tại chỗ", ["Khái niệm, tác dụng sinh lý và tác dụng điều trị.", "Chỉ định, chống chỉ định và nguyên tắc áp dụng.", "Các thao tác xoa bóp cơ bản và quy trình thực hiện."], 2, 3, 6],
  ["6. Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", ["Điểm kích hoạt: khái niệm, đặc điểm và cách xác định.", "Cơ chế tác dụng, chỉ định, chống chỉ định và tai biến của nén, day điểm kích hoạt và trượt dọc theo thớ cơ.", "Kỹ thuật nén và day điểm kích hoạt.", "Kỹ thuật trượt dọc theo thớ cơ ở các nhóm cơ chính."], 2, 4, 8],
  ["7. Kéo dãn", ["Cơ chế tác dụng (cơ học, thần kinh); phân loại và thông số kéo dãn.", "Chỉ định và chống chỉ định.", "Kỹ thuật kéo dãn các nhóm cơ chính và nguyên tắc an toàn."], 2, 3, 6],
  { part: "PHẦN C. KỸ THUẬT TẠO THUẬN THẦN KINH CƠ CẢM THỤ BẢN THỂ (PNF)" },
  ["8. Đại cương", ["Lịch sử và định nghĩa của kỹ thuật tạo thuận thần kinh cơ cảm thụ bản thể.", "Các nguyên tắc chính của kỹ thuật PNF."], 1, 0, 4],
  ["9. Các mẫu chuyển động", ["Các thành phần của một mẫu chuyển động.", "Hoạt động của các cơ chủ yếu và các loại co cơ trong một mẫu chuyển động.", "Thực hiện các mẫu chuyển động trên cơ thể người học."], 1, 3, 4],
  ["10. Những thao tác cơ bản của kỹ thuật tạo thuận", ["Ý nghĩa và cách đặt tay để kích thích tạo thuận.", "Cách truyền đạt mệnh lệnh để người bệnh thực hiện cử động.", "Ý nghĩa các kỹ thuật kéo giãn, kéo tách, dồn khớp.", "Thời điểm bình thường và thời điểm tác động trên các mẫu vận động.", "Quy định thực hành nghề nghiệp, đạo đức và giao tiếp với người bệnh khi thực hiện kỹ thuật."], 2, 4, 6],
  ["11. Những kỹ thuật đặc hiệu", ["Ý nghĩa của những kỹ thuật tạo thuận đặc hiệu.", "Ứng dụng các kỹ thuật đặc hiệu trong các mẫu vận động để đạt mục tiêu cụ thể.", "Ứng dụng các kỹ thuật đặc hiệu lên các hoạt động chức năng."], 2, 5, 8],
  ["12. Các mẫu PNF của cổ", ["Tiến trình cơ bản cho một mẫu vận động.", "Kỹ thuật thao tác cho các mẫu ở cổ.", "Áp dụng các mẫu vận động ở cổ cho trường hợp điều trị cụ thể: lựa chọn mẫu và kỹ thuật phù hợp."], 2, 3, 6],
  ["13. Các mẫu PNF của thân", ["Tiến trình cơ bản cho một mẫu vận động.", "Kỹ thuật thao tác cho các mẫu ở thân.", "Áp dụng các mẫu vận động ở thân cho trường hợp điều trị cụ thể: lựa chọn mẫu và kỹ thuật phù hợp."], 2, 4, 6],
  ["14. Các mẫu PNF của chi trên", ["Tiến trình cơ bản cho một mẫu vận động.", "Kỹ thuật thao tác cho các mẫu ở chi trên.", "Áp dụng các mẫu vận động ở chi trên cho trường hợp điều trị cụ thể: lựa chọn mẫu và kỹ thuật phù hợp."], 2, 5, 8],
  ["15. Các mẫu PNF của chi dưới", ["Tiến trình cơ bản cho một mẫu vận động.", "Kỹ thuật thao tác cho các mẫu ở chi dưới.", "Áp dụng các mẫu vận động ở chi dưới cho trường hợp điều trị cụ thể: lựa chọn mẫu và kỹ thuật phù hợp."], 2, 6, 8],
];

const W = [3421, 650, 650, 800, 1000, 900, 950, 700]; // tổng 9071
const body = [];
body.push(p([r("4. Nội dung chi tiết học phần và phân bổ thời gian", { b: true })], { a: AlignmentType.LEFT }));
body.push(p("Hoạt động dạy - học được thiết kế theo nguyên tắc liên kết đồng bộ (constructive alignment) giữa CLO, nội dung, hoạt động học tập và đánh giá; phương pháp dạy học được lựa chọn phù hợp với bản chất năng lực cần hình thành và theo Hướng dẫn lựa chọn phương pháp dạy học hiện hành của Trường.", { ind: { firstLine: 567 } }));

const rows = [
  new TableRow({ tableHeader: true, children: [
    c(["Nội dung", "(Ghi chi tiết đến từng bài dạy của từng chương)"], W[0], { rows: 3, b: true, a: C, v: VC, fill: "D9E2F3" }),
    c("Hình thức tổ chức dạy học học phần", W.slice(1).reduce((a, b) => a + b), { span: 7, b: true, a: C, fill: "D9E2F3" }),
  ] }),
  new TableRow({ tableHeader: true, children: [
    c("Lên lớp", W[1] + W[2] + W[3], { span: 3, b: true, a: C, fill: "D9E2F3" }),
    c("Thực hành, thí nghiệm,…", W[4], { rows: 2, b: true, a: C, v: VC, fill: "D9E2F3", s: 22 }),
    c(["Thực tập", "bệnh viện, thực địa…"], W[5], { rows: 2, b: true, a: C, v: VC, fill: "D9E2F3", s: 22 }),
    c("SV tự nghiên cứu, tự học", W[6], { rows: 2, b: true, a: C, v: VC, fill: "D9E2F3", s: 22 }),
    c("Tổng", W[7], { rows: 2, b: true, a: C, v: VC, fill: "D9E2F3", s: 22 }),
  ] }),
  new TableRow({ tableHeader: true, children: [
    c("Lý thuyết", W[1], { b: true, a: C, fill: "D9E2F3", s: 22 }), c("Bài tập", W[2], { b: true, a: C, fill: "D9E2F3", s: 22 }), c("Thảo luận nhóm", W[3], { b: true, a: C, fill: "D9E2F3", s: 22 }),
  ] }),
  new TableRow({ children: ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)"].map((t, i) => c(t, W[i], { a: C, i: true })) }),
];
const tot = [0, 0, 0, 0, 0, 0, 0];
let sub = null;
const subs = [];
L.forEach((x) => {
  if (x.part) { sub = { name: x.part, v: [0, 0, 0, 0, 0, 0, 0] }; subs.push(sub); rows.push(new TableRow({ children: [c(x.part, 9071, { span: 8, b: true })] })); return; }
  const [name, items, lt, th, tu] = x;
  const v = [lt, 0, 0, th, 0, tu, lt + th + tu];
  v.forEach((n, i) => { tot[i] += n; sub.v[i] += n; });
  rows.push(new TableRow({ cantSplit: true, children: [c([name].concat(items.map((t) => "- " + t)), W[0], { b: true })].concat(v.map((n, i) => c(String(n), W[i + 1], { a: C }))) }));
});
rows.push(new TableRow({ children: [c("Tổng", W[0], { b: true, a: C })].concat(tot.map((n, i) => c(String(n), W[i + 1], { a: C, b: true }))) }));
if (tot[0] !== 30 || tot[3] !== 60 || tot[5] !== 110 || tot[6] !== 200) throw new Error("Tổng sai " + tot);
body.push(new Table({ width: { size: 9071, type: WidthType.DXA }, columnWidths: W, rows }));
body.push(p("Cột (1): ghi tên Chương/bài. Cột (2) (3) (4) (5) (6) (7) và (8): ghi số giờ (giờ tự học = 50 × số tín chỉ – các giờ còn lại).", { i: true, before: 60 }));

// Bảng tóm tắt theo phần (tham khảo, không bắt buộc dán vào đề cương)
body.push(p([r("Tóm tắt phân bổ theo phần (để đối chiếu, không bắt buộc đưa vào đề cương):", { b: true, i: true })], { before: 160 }));
const W2 = [4071, 1250, 1250, 1250, 1250];
body.push(new Table({ width: { size: 9071, type: WidthType.DXA }, columnWidths: W2, rows: [
  new TableRow({ children: ["Phần", "Lý thuyết", "Thực hành", "Tự học", "Tổng"].map((t, i) => c(t, W2[i], { b: true, a: C, fill: "D9E2F3" })) }),
  ...subs.map((s) => new TableRow({ children: [c(s.name, W2[0]), ...[s.v[0], s.v[3], s.v[5], s.v[6]].map((n, i) => c(String(n), W2[i + 1], { a: C }))] })),
  new TableRow({ children: [c("Tổng", W2[0], { b: true, a: C }), ...[tot[0], tot[3], tot[5], tot[6]].map((n, i) => c(String(n), W2[i + 1], { a: C, b: true }))] }),
] }));

// Ma trận bài – CLO
body.push(p([r("Sự đóng góp của các chương/bài học vào hình thành chuẩn đầu ra module", { b: true })], { a: AlignmentType.LEFT, before: 200 }));
const W3 = [5571, 700, 700, 700, 700, 700];
const all = ["✔", "✔", "✔", "✔", "✔"];
const M = [["PHẦN A. ĐIỆN TRỊ LIỆU"], ["Bài 1. Năng lượng bức xạ, các định luật và điều trị bằng tia", "✔", "✔", "", "✔", "✔"], ["Bài 2. Điều trị bằng sóng", ...all], ["Bài 3. Các dòng điện xung", ...all], ["Bài 4. Máy kéo cột sống", ...all],
  ["PHẦN B. KỸ THUẬT TÁC ĐỘNG MÔ MỀM TRỊ LIỆU"], ["Bài 5. Xoa bóp tại chỗ", ...all], ["Bài 6. Kỹ thuật tác động điểm kích hoạt: nén, day và trượt dọc theo thớ cơ", ...all], ["Bài 7. Kéo dãn", ...all],
  ["PHẦN C. KỸ THUẬT TẠO THUẬN THẦN KINH CƠ CẢM THỤ BẢN THỂ (PNF)"], ["Bài 8. Đại cương", "✔", "", "", "✔", ""], ["Bài 9. Các mẫu chuyển động", "✔", "✔", "", "✔", "✔"], ["Bài 10. Những thao tác cơ bản của kỹ thuật tạo thuận", "✔", "✔", "", "✔", "✔"],
  ["Bài 11. Những kỹ thuật đặc hiệu", ...all], ["Bài 12. Các mẫu PNF của cổ", ...all], ["Bài 13. Các mẫu PNF của thân", ...all], ["Bài 14. Các mẫu PNF của chi trên", ...all], ["Bài 15. Các mẫu PNF của chi dưới", ...all]];
body.push(new Table({ width: { size: 9071, type: WidthType.DXA }, columnWidths: W3, rows: [
  new TableRow({ children: ["Chương/bài học", "CLO1", "CLO2", "CLO3", "CLO4", "CLO5"].map((t, i) => c(t, W3[i], { b: true, a: C, fill: "D9E2F3" })) }),
  ...M.map((x) => new TableRow({ children: x.length === 1 ? [c(x[0], 9071, { span: 6, b: true })] : x.map((v, i) => c(v, W3[i], { a: i ? C : AlignmentType.LEFT })) })),
] }));
body.push(p("* Ghi chú: đánh ✔ vào ô có tham gia hình thành CLO", { i: true, before: 60 }));

const doc = new Document({ styles: { default: { document: { run: { font: F, size: 26 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1701 } } }, children: body }] });
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("ok", tot.join("/")); });
