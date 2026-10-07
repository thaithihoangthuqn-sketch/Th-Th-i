const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType, LevelFormat, Footer, PageNumber, VerticalAlign } = require("docx");
const L = require("./v2_data.js");
const F = "Times New Roman", SZ = 26, W = 9071;
const r = (t, o = {}) => new TextRun({ text: t, font: F, size: o.s || SZ, bold: o.b, italics: o.i });
const para = (runs, o = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [r(runs, o)], alignment: o.a || AlignmentType.JUSTIFIED,
  spacing: { before: o.before || 0, after: o.after ?? 60, line: 312 }, indent: o.ind, keepNext: o.kn, pageBreakBefore: o.pb });
const bold = (t, o = {}) => para([r(t, { b: true, i: o.i })], { a: o.a || AlignmentType.LEFT, before: o.before ?? 80, kn: true, pb: o.pb, after: o.after });
const dash = (t) => new Paragraph({ children: [r(t)], numbering: { reference: "dash", level: 0 }, alignment: AlignmentType.JUSTIFIED, spacing: { after: 40, line: 312 } });
const num = (t) => new Paragraph({ children: [r(t)], numbering: { reference: "num", level: 0, instance: num.inst }, alignment: AlignmentType.JUSTIFIED, spacing: { after: 40, line: 312 } });
const bd = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const cell = (kids, w, o = {}) => new TableCell({ borders: { top: bd, bottom: bd, left: bd, right: bd }, width: { size: w, type: WidthType.DXA }, columnSpan: o.span,
  verticalAlign: o.v || VerticalAlign.TOP, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: "auto" } : undefined, margins: { top: 50, bottom: 50, left: 90, right: 90 },
  children: kids.map((t) => new Paragraph({ children: [r(t, { b: o.b, i: o.i })], alignment: o.a || AlignmentType.LEFT, spacing: { after: 30, line: 276 } })) });
const two = (n) => String(n).padStart(2, "0");

const body = [];
// ======================= PHỤ LỤC 3 =======================
body.push(bold("PHỤ LỤC 3", { a: AlignmentType.CENTER, before: 0 }));
body.push(bold("HƯỚNG DẪN SINH VIÊN CHUẨN BỊ BÀI, TỰ HỌC", { a: AlignmentType.CENTER, before: 0, after: 160 }));
L.forEach((l, i) => {
  const n = i + 1;
  body.push(bold(`Bài ${n}. ${l.title.toUpperCase()}`, { before: i ? 280 : 120, after: 80 }));
  body.push(bold("1. Tóm tắt"));
  body.push(para(l.summary, { ind: { firstLine: 567 } }));
  body.push(bold("2. Các bước cần chuẩn bị"));
  body.push(para(l.prepIntro, { ind: { firstLine: 567 } }));
  l.prep.forEach((t) => body.push(dash(t)));
  body.push(para("Liên hệ thực tiễn:", { kn: true }));
  body.push(para(l.reallife, { ind: { firstLine: 567 } }));
  body.push(para("Sinh viên suy nghĩ về các tình huống sau:", { ind: { firstLine: 567 }, kn: true }));
  l.think.forEach((t) => body.push(dash(t)));
  body.push(bold("3. Tài liệu cần tham khảo"));
  l.refs.forEach((t) => body.push(para(t)));
  body.push(bold("4. Các thuật ngữ cần nắm"));
  body.push(para(l.terms));
  body.push(bold("5. Các câu hỏi tự lượng giá"));
  l.questions.forEach((t) => body.push(dash(t)));
  body.push(bold("6. Bài tập/tình huống cần chuẩn bị"));
  l.cases.forEach((c, k) => {
    body.push(para(l.cases.length > 1 ? `Tình huống giả định ${k + 1}:` : "Tình huống giả định:", { kn: true }));
    body.push(para(c.text, { ind: { firstLine: 567 } }));
    body.push(para("Yêu cầu đối với sinh viên:", { kn: true }));
    c.tasks.forEach((t) => body.push(dash(t)));
  });
});

// ======================= PHỤ LỤC 4 =======================
L.forEach((l, i) => {
  const n = i + 1, min = l.lt * 50;
  if (i === 0) body.push(bold("PHỤ LỤC 4", { a: AlignmentType.CENTER, before: 0, pb: true }));
  body.push(bold("KẾ HOẠCH BÀI GIẢNG", { a: AlignmentType.CENTER, before: 0, pb: i > 0, after: 120 }));
  body.push(para([r("1. Tên bài giảng: ", { b: true }), r(`BÀI ${n}. ${l.title.toUpperCase()}`)]));
  body.push(para([r("2. Giảng viên: ", { b: true }), r("ThS. ……………………………………")]));
  body.push(bold("3. Chuẩn đầu ra bài học", { before: 40 }));
  body.push(para("Kết thúc bài học này, sinh viên có khả năng:"));
  num.inst = n;
  l.llo.forEach((t) => body.push(num(t)));
  body.push(para([r("4. Thời lượng bài giảng: ", { b: true }), r(`${two(l.lt)} tiết lý thuyết (${min} phút)` + (l.lt === 5 ? ", chia 2 buổi (03 tiết + 02 tiết)" : ""))], { before: 40 }));
  body.push(para([r("5. Đối tượng sinh viên: ", { b: true }), r("Sinh viên ngành Kỹ thuật Phục hồi chức năng, năm thứ 2")]));
  body.push(bold("6. Phần chuẩn bị", { before: 40 }));
  body.push(para("Đối với giảng viên:", { kn: true }));
  l.gv.forEach((t) => body.push(dash(t)));
  body.push(para("Đối với sinh viên:", { kn: true }));
  [`Đọc trước tài liệu bài học và Phụ lục hướng dẫn tự học Bài ${n} trên E-learning.`].concat(l.sv).forEach((t) => body.push(dash(t)));
  body.push(bold("7. Vật liệu giảng dạy", { before: 40 }));
  body.push(para(l.materials));
  body.push(bold("8. Hoạt động và lượng giá", { before: 40, after: 80 }));
  const w = [2300, 5671, 1100];
  const rows = [new TableRow({ tableHeader: true, children: [cell(["Hợp phần"], w[0], { b: true, a: AlignmentType.CENTER, fill: "D9E2F3", v: VerticalAlign.CENTER }), cell(["Mô tả và ghi chú"], w[1], { b: true, a: AlignmentType.CENTER, fill: "D9E2F3", v: VerticalAlign.CENTER }), cell(["Thời lượng", "(phút)"], w[2], { b: true, a: AlignmentType.CENTER, fill: "D9E2F3" })] })];
  let tot = 0;
  l.acts.forEach((a) => {
    if (a.section) { rows.push(new TableRow({ children: [cell([a.section], W, { span: 3, b: true, i: true, fill: "F2F2F2" })] })); return; }
    tot += a[2];
    rows.push(new TableRow({ cantSplit: true, children: [cell([a[0]], w[0], { b: true }), cell(a[1].map((t) => "- " + t), w[1]), cell([`${a[2]} phút`], w[2], { a: AlignmentType.CENTER, v: VerticalAlign.CENTER })] }));
  });
  if (tot !== min) throw new Error(`Bài ${n}: ${tot} phút ≠ ${min}`);
  body.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: w, rows }));
  body.push(bold("9. Lượng giá sau lớp học", { before: 120 }));
  l.post.forEach((t) => body.push(dash(t)));
});

if (L.reduce((s, l) => s + l.lt, 0) !== 30) throw new Error("Tổng LT ≠ 30");
const numbering = { config: [
  { reference: "dash", levels: [{ level: 0, format: LevelFormat.BULLET, text: "-", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] },
  { reference: "num", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] },
] };
const doc = new Document({ styles: { default: { document: { run: { font: F, size: SZ } } } }, numbering,
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1701 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: F, size: 22 })] })] }) },
    children: body }] });
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("ok", b.length); });
