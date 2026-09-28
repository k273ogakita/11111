/* nARK 営業ファネル正本。数字が増えたらここを直して GitHub に上げる。 */
window.FUNNEL_DATA = {
  updated: "2026-09-28",
  version: 1,

  products: [
    {
      id: "patient-nark",
      name: "患者説明動画",
      brand: "nARK",
      status: "active",
      statusLabel: "稼働中",
      blurb: "nARKとして売る。動画の買い切り。ツール一式が欲しい院は狙わない。",
    },
    {
      id: "patient-wslink",
      name: "患者説明動画",
      brand: "W's Link",
      status: "building",
      statusLabel: "準備中",
      blurb: "W's Linkのサービスの一部として売る。まだ営業数字なし。",
    },
    {
      id: "end-of-life",
      name: "終活動画",
      brand: "nARK",
      status: "building",
      statusLabel: "準備中",
      blurb: "BtoC。リサーチから入る。ファネルの枠だけ先に置いてある。",
    },
    {
      id: "birth",
      name: "出産動画",
      brand: "nARK",
      status: "later",
      statusLabel: "まだ先",
      blurb: "BtoC。本人がレンタル機器を病院へ持っていく想定。まだだいぶ先。",
    },
  ],

  channels: [
    { id: "form", name: "フォーム営業", unit: "送信" },
    { id: "fax", name: "FAX営業", unit: "送信" },
    { id: "ads", name: "広告", unit: "表示" },
    { id: "referral", name: "知り合い紹介", unit: "声かけ" },
  ],

  /* 仮のものさし。件数が溜まったら見直す。率はすべて％。 */
  benchmarks: {
    form: {
      click: { ok: 1, good: 3, hint: "冷たいフォーム。1%未満は弱い。3%超えたら良い。" },
      inquiryFromReach: { ok: 0.05, good: 0.3, hint: "送信に対する問い合わせ。0.3%なら6000件で約18件。" },
      inquiryFromClick: { ok: 3, good: 8, hint: "LPを見た人のうち問い合わせた割合。ここが0ならLPかオファー。" },
      meetingFromInquiry: { ok: 30, good: 60, hint: "問い合わせから商談。" },
      winFromMeeting: { ok: 20, good: 40, hint: "商談から成約。" },
    },
    fax: {
      inquiryFromReach: { ok: 0.03, good: 0.15, hint: "FAXは反応が薄い前提。" },
      meetingFromInquiry: { ok: 30, good: 60, hint: "問い合わせから商談。" },
      winFromMeeting: { ok: 20, good: 40, hint: "商談から成約。" },
    },
    ads: {
      click: { ok: 1, good: 3, hint: "検索広告のクリック率の目安。" },
      inquiryFromClick: { ok: 3, good: 8, hint: "LPからの問い合わせ。" },
      meetingFromInquiry: { ok: 30, good: 60, hint: "問い合わせから商談。" },
      winFromMeeting: { ok: 20, good: 40, hint: "商談から成約。" },
    },
    referral: {
      inquiryFromReach: { ok: 10, good: 30, hint: "知り合いへの声かけ。反応はフォームより高くてよい。" },
      meetingFromInquiry: { ok: 40, good: 70, hint: "紹介は商談化しやすい。" },
      winFromMeeting: { ok: 30, good: 50, hint: "紹介は成約しやすい。" },
    },
  },

  campaigns: [
    {
      id: "2026-09-24-form-patient-nark",
      date: "2026-09-24",
      productId: "patient-nark",
      channelId: "form",
      title: "医療系施設 1回目",
      target: "医療系施設",
      copy: "2026-9フォーム営業文面",
      reach: 6000,
      clicks: 63,
      clickRate: 2.2,
      inquiries: 0,
      meetings: 0,
      wins: 0,
      extra: { hpClicks: 0, lpUrl: "https://lp.btobservice.com/bc81a18c6f50c43ad026a3113ee55607/" },
      notes: "リンク先は予定どおりLP。問い合わせは2026-09-28時点で0。",
    },
  ],

  experiments: [
    {
      date: "2026-09-24",
      productId: "patient-nark",
      channelId: "form",
      change: "初回送信。課題は説明の負担、オファーは買い切りの患者説明動画、リストは医療系施設。文面は2026-9フォーム営業文面。",
      result: "送信6000・LPクリック63（2.2%）・問い合わせ0。",
      verdict: "クリックは初回としてまずまず。ボトルネックはLPから問い合わせ。",
    },
    {
      date: "2026-09-28",
      productId: "patient-nark",
      channelId: "form",
      change: "リンク先がHPになっていないか確認。",
      result: "予定のLPに飛ばせていた。問い合わせはまだ0。",
      verdict: "URLミスではない。次はオファー・LP・リストのどれを変えるか。",
    },
  ],
};
