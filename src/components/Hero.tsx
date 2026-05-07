export function Hero() {
  return (
    <section className="hero">
      <span className="eyebrow">A new home emerging</span>

      <h1 className="wordmark fade-up in">
        <span className="kath">Kath</span>
        <span className="wo">woman</span>
        <span className="mandu">du</span>
      </h1>

      <p className="tagline">Built to uplift</p>
      <p className="tagline-sub">
        for woman <span className="dot" /> by woman
      </p>

      <div className="hero-actions">
        <a className="scroll-cue" href="#manifesto">
          Read the manifesto
        </a>
        <span className="hero-actions-divider">·</span>
        <a className="scroll-cue alt" href="#join">
          Or just leave your email
        </a>
      </div>

      <svg
        className="hero-landscape"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="landscape-peaks far"
          d="M0,132 L0,116 L42,108 L82,88 L118,106 L158,72 L204,108 L248,82 L292,102 L338,54 L382,106 L426,80 L470,100 L520,66 L566,104 L610,50 L654,108 L704,82 L748,104 L804,36 L858,100 L908,70 L958,104 L1010,58 L1056,96 L1108,72 L1160,102 L1200,84 L1200,220 L0,220 Z"
        />
        <path
          className="landscape-peak-caps"
          d="M158,72 L188,100 L164,92 L148,108 L130,92 Z M338,54 L374,94 L344,82 L326,108 L302,86 Z M610,50 L646,96 L616,82 L600,110 L574,84 Z M804,36 L852,92 L816,78 L796,108 L762,82 Z M1010,58 L1048,92 L1016,82 L998,106 L974,84 Z"
        />
        <path
          className="landscape-peaks near"
          d="M0,152 C64,126 118,126 178,146 C238,166 284,126 356,136 C442,148 492,112 570,132 C650,152 714,118 798,132 C884,146 944,116 1030,130 C1098,140 1148,132 1200,118 L1200,220 L0,220 Z"
        />
        <path
          className="landscape-hills back"
          d="M0,172 C86,144 174,146 270,164 C376,184 466,136 584,154 C704,172 792,142 912,156 C1028,170 1114,150 1200,138 L1200,220 L0,220 Z"
        />
        <path
          className="landscape-hills front"
          d="M0,196 C92,166 188,170 286,188 C406,210 510,158 638,178 C764,198 842,164 960,178 C1058,190 1122,180 1200,158 L1200,220 L0,220 Z"
        />
      
      </svg>
    </section>
  );
}
