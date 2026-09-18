window.NARK_REF_TAGS = {
  taste: ["医療", "モダンおしゃれ", "親しみ", "プロ"],
  mood: ["インパクト", "落ち着いた", "ポップ", "煽り", "ふざけ"],
  look: ["全体構成", "テロップ", "色", "編集テンポ", "BGM"],
  use: ["患者説明", "PR", "SNS", "広告"]
};

window.NARK_REF_SEED = [
  {
    id: "seed-todai",
    title: "東大病院小児外科　外来受診案内",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8fXHv8Y11ms",
    tags: ["医療", "親しみ", "落ち着いた", "全体構成", "患者説明"],
    note: "院長の顔出しから入る安心感。説明は丁寧で、待合の患者説明の空気に近い。",
    sample: true
  },
  {
    id: "seed-muji",
    title: "無印良品　気持ちいいのはなぜだろう。",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=DyLxL9OnXVg",
    tags: ["モダンおしゃれ", "落ち着いた", "色", "BGM", "PR"],
    note: "余白と静かな編集。医療の“おしゃれ系”を作るときの色と間の参考。",
    sample: true
  },
  {
    id: "seed-director",
    title: "院長ご挨拶（歯科）",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=RgWkuTQO10M",
    tags: ["医療", "親しみ", "落ち着いた", "全体構成", "PR"],
    note: "短い自己紹介。開業医の顔出しPRの尺と話し方。",
    sample: true
  },
  {
    id: "seed-heart",
    title: "東京ハートリズムクリニック　院長メッセージ",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=TAkjl43UHPc",
    tags: ["医療", "プロ", "インパクト", "全体構成", "PR"],
    note: "専門性を前に出す語り。プロ寄り・信頼寄りのトーン。",
    sample: true
  },
  {
    id: "seed-telop-calm",
    title: "テロップ見本　落ち着いた医療",
    type: "image",
    src: "thumbs/telop-calm.png",
    tags: ["医療", "落ち着いた", "テロップ", "患者説明"],
    note: "中央揃え、余白多め、明朝＋小さな補足。説明動画の基本形。",
    sample: true
  },
  {
    id: "seed-telop-modern",
    title: "テロップ見本　モダンおしゃれ",
    type: "image",
    src: "thumbs/telop-modern.png",
    tags: ["モダンおしゃれ", "落ち着いた", "テロップ", "色", "PR"],
    note: "左寄せ、ダーク背景、アクセント1色。余白で格を出す。",
    sample: true
  },
  {
    id: "seed-telop-pop",
    title: "テロップ見本　親しみポップ",
    type: "image",
    src: "thumbs/telop-pop.png",
    tags: ["親しみ", "ポップ", "テロップ", "SNS"],
    note: "丸み・暖色・短い呼びかけ。リールや院内サイネージ向き。",
    sample: true
  },
  {
    id: "seed-telop-impact",
    title: "テロップ見本　煽りインパクト",
    type: "image",
    src: "thumbs/telop-impact.png",
    tags: ["インパクト", "煽り", "テロップ", "広告"],
    note: "全画面帯＋特大文字。広告用。患者説明では使わない判断の見本。",
    sample: true
  },
  {
    id: "seed-telop-playful",
    title: "テロップ見本　ふざけ・くだけ",
    type: "image",
    src: "thumbs/telop-playful.png",
    tags: ["親しみ", "ふざけ", "ポップ", "テロップ", "SNS"],
    note: "傾きとツッコミ。SNS向け。医療本体には向かないことが多い。",
    sample: true
  }
];
