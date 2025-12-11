const GROUP_DURATION = 1800;
      const grid = document.getElementById("grid");
      const tiles = [...grid.querySelectorAll(".tile")];
      const groups = [
        ...new Set(
          tiles.flatMap((t) =>
            (t.dataset.group || "")
              .split(",")
              .map((g) => +g.trim())
              .filter(Number.isFinite)
          )
        ),
      ].sort((a, b) => a - b);
      let current = 0;
      const hasGroup = (el, g) =>
        (el.dataset.group || "")
          .split(",")
          .map((s) => +s.trim())
          .filter(Number.isFinite)
          .includes(g);

      const stage = document.getElementById("stage");
      const lines = document.getElementById("lines");

      /* g0 */
      const pAB = document.getElementById("lineAB");
      const pBC = document.getElementById("lineBC");
      const pV2 = document.getElementById("lineV2");
      const gAB = document.getElementById("gAB");
      const gBC = document.getElementById("gBC");
      const gV2 = document.getElementById("gV2");

      /* g1 */
      const p67 = document.getElementById("line67");
      const pUp = document.getElementById("line7_up");
      const pDn1 = document.getElementById("line7_10");
      const pDn2 = document.getElementById("line10_12");
      const g67 = document.getElementById("g67");
      const gUp = document.getElementById("gUp");
      const gDn1 = document.getElementById("gDn1");
      const gDn2 = document.getElementById("gDn2");

      /* g2 split */
      const g2_h1 = document.getElementById("g2_h1"); // 2→3
      const g2_h12 = document.getElementById("g2_h12"); // 12→13
      const g2_v = document.getElementById("g2_v"); // 13→15
      const g2_h2 = document.getElementById("g2_h2"); // 15→16
      const g2H1 = document.getElementById("g2H1");
      const g2H12 = document.getElementById("g2H12");
      const g2V = document.getElementById("g2V");
      const g2H2 = document.getElementById("g2H2");

      /* tiles refs */
      const el2 = grid.querySelector('.tile[data-id="2"]');
      const el3 = grid.querySelector('.tile[data-id="3"]');
      const el6 = grid.querySelector('.tile[data-id="6"]');
      const el7 = grid.querySelector('.tile[data-id="7"]');
      const el9 = grid.querySelector('.tile[data-id="9"]');
      const el10 = grid.querySelector('.tile[data-id="10"]');
      const el11 = grid.querySelector('.tile[data-id="11"]');
      const el12 = grid.querySelector('.tile[data-id="12"]');
      const el13 = grid.querySelector('.tile[data-id="13"]');
      const el15 = grid.querySelector('.tile[data-id="15"]');
      const el16 = grid.querySelector('.tile[data-id="16"]');

      const STROKE = 3,
        HALF = STROKE / 2;
      const i = (v) => Math.round(v);

      function rectIn(el, container) {
        const r = el.getBoundingClientRect(),
          c = container.getBoundingClientRect();
        return {
          left: r.left - c.left,
          top: r.top - c.top,
          width: r.width,
          height: r.height,
          get right() {
            return this.left + this.width;
          },
          get bottom() {
            return this.top + this.height;
          },
          get cx() {
            return this.left + this.width / 2;
          },
          get cy() {
            return this.top + this.height / 2;
          },
        };
      }

      function setPaths() {
        const rc = stage.getBoundingClientRect();
        lines.setAttribute("viewBox", `0 0 ${rc.width} ${rc.height}`);
        if (
          !el2 ||
          !el3 ||
          !el6 ||
          !el7 ||
          !el9 ||
          !el10 ||
          !el11 ||
          !el12 ||
          !el13 ||
          !el15 ||
          !el16
        )
          return;

        /* ----- g0: 9→6 (คู่เส้นรอบ id6) ----- */
        const A = rectIn(el9, stage),
          TOP = rectIn(el6, stage),
          BOT = rectIn(el11, stage);
        const sep =
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--sep")
          ) || 28;
        const xLeft = TOP.cx - sep / 2,
          xRight = TOP.cx + sep / 2;
        const yA = A.cy,
          yTopBottom = TOP.bottom + HALF,
          yBotTop = BOT.top - HALF;
        const Aout = { x: A.right + HALF, y: yA };

        pAB.setAttribute("d", `M ${i(Aout.x)} ${i(yA)} L ${i(xLeft)} ${i(yA)}`);
        pBC.setAttribute(
          "d",
          `M ${i(xLeft)} ${i(yA)} L ${i(xLeft)} ${i(yTopBottom)}`
        );
        pV2.setAttribute(
          "d",
          `M ${i(xRight)} ${i(yTopBottom)} L ${i(xRight)} ${i(yBotTop)}`
        );

        gAB.setAttribute("x1", i(Aout.x));
        gAB.setAttribute("y1", i(yA));
        gAB.setAttribute("x2", i(xLeft));
        gAB.setAttribute("y2", i(yA));
        gBC.setAttribute("x1", i(xLeft));
        gBC.setAttribute("y1", i(yA));
        gBC.setAttribute("x2", i(xLeft));
        gBC.setAttribute("y2", i(yTopBottom));
        gV2.setAttribute("x1", i(xRight));
        gV2.setAttribute("y1", i(yTopBottom));
        gV2.setAttribute("x2", i(xRight));
        gV2.setAttribute("y2", i(yBotTop));

        /* ----- g1: 6→7 + แตกกิ่งบน/ล่าง (แนวตั้งกึ่งกลางคอลัมน์) ----- */
        const SIX = rectIn(el6, stage),
          SEV = rectIn(el7, stage),
          TWO = rectIn(el2, stage),
          TEN = rectIn(el10, stage),
          TWL = rectIn(el12, stage);
        const xCenter = SEV.cx;

        const s67 = { x: SIX.right + HALF, y: SIX.cy },
          e67 = { x: SEV.left - HALF, y: SEV.cy };
        p67.setAttribute(
          "d",
          `M ${i(s67.x)} ${i(s67.y)} L ${i(e67.x)} ${i(e67.y)}`
        );
        g67.setAttribute("x1", i(s67.x));
        g67.setAttribute("y1", i(s67.y));
        g67.setAttribute("x2", i(e67.x));
        g67.setAttribute("y2", i(e67.y));

        const sUp = { x: xCenter, y: SEV.top - HALF },
          eUp = { x: xCenter, y: TWO.bottom + HALF };
        pUp.setAttribute(
          "d",
          `M ${i(sUp.x)} ${i(sUp.y)} L ${i(eUp.x)} ${i(eUp.y)}`
        );
        gUp.setAttribute("x1", i(sUp.x));
        gUp.setAttribute("y1", i(sUp.y));
        gUp.setAttribute("x2", i(eUp.x));
        gUp.setAttribute("y2", i(eUp.y));

        const sDn1 = { x: xCenter, y: SEV.bottom + HALF },
          eDn1 = { x: xCenter, y: TEN.top - HALF };
        pDn1.setAttribute(
          "d",
          `M ${i(sDn1.x)} ${i(sDn1.y)} L ${i(eDn1.x)} ${i(eDn1.y)}`
        );
        gDn1.setAttribute("x1", i(sDn1.x));
        gDn1.setAttribute("y1", i(sDn1.y));
        gDn1.setAttribute("x2", i(eDn1.x));
        gDn1.setAttribute("y2", i(eDn1.y));

        const sDn2 = { x: xCenter, y: TEN.bottom + HALF },
          eDn2 = { x: xCenter, y: TWL.top - HALF };
        pDn2.setAttribute(
          "d",
          `M ${i(sDn2.x)} ${i(sDn2.y)} L ${i(eDn2.x)} ${i(eDn2.y)}`
        );
        gDn2.setAttribute("x1", i(sDn2.x));
        gDn2.setAttribute("y1", i(sDn2.y));
        gDn2.setAttribute("x2", i(eDn2.x));
        gDn2.setAttribute("y2", i(eDn2.y));

        /* ----- g2 split ----- */
        const R2 = rectIn(el2, stage),
          R3 = rectIn(el3, stage),
          R12 = rectIn(el12, stage),
          R13 = rectIn(el13, stage),
          R15 = rectIn(el15, stage),
          R16 = rectIn(el16, stage);

        // 2→3 (แนวนอน)
        const h1s = { x: R2.right + HALF, y: R2.cy };
        const h1e = { x: R3.left - HALF, y: R3.cy };
        g2_h1.setAttribute(
          "d",
          `M ${i(h1s.x)} ${i(h1s.y)} L ${i(h1e.x)} ${i(h1e.y)}`
        );
        g2H1.setAttribute("x1", i(h1s.x));
        g2H1.setAttribute("y1", i(h1s.y));
        g2H1.setAttribute("x2", i(h1e.x));
        g2H1.setAttribute("y2", i(h1e.y));

        // 12→13 (แนวนอน อีกฝั่ง)
        const h12s = { x: R12.right + HALF, y: R12.cy };
        const h12e = { x: R13.left - HALF, y: R13.cy };
        g2_h12.setAttribute(
          "d",
          `M ${i(h12s.x)} ${i(h12s.y)} L ${i(h12e.x)} ${i(h12e.y)}`
        );
        g2H12.setAttribute("x1", i(h12s.x));
        g2H12.setAttribute("y1", i(h12s.y));
        g2H12.setAttribute("x2", i(h12e.x));
        g2H12.setAttribute("y2", i(h12e.y));

        // 13→15 (แนวตั้งกึ่งกลางคอลัมน์)
        const vs = { x: R13.cx, y: R13.bottom + HALF };
        const ve = { x: R13.cx, y: R15.top - HALF };
        g2_v.setAttribute(
          "d",
          `M ${i(vs.x)} ${i(vs.y)} L ${i(ve.x)} ${i(ve.y)}`
        );
        g2V.setAttribute("x1", i(vs.x));
        g2V.setAttribute("y1", i(vs.y));
        g2V.setAttribute("x2", i(ve.x));
        g2V.setAttribute("y2", i(ve.y));

        // 15→16 (แนวนอน)
        const h2s = { x: R15.right + HALF, y: R15.cy };
        const h2e = { x: R16.left - HALF, y: R16.cy };
        g2_h2.setAttribute(
          "d",
          `M ${i(h2s.x)} ${i(h2s.y)} L ${i(h2e.x)} ${i(h2e.y)}`
        );
        g2H2.setAttribute("x1", i(h2s.x));
        g2H2.setAttribute("y1", i(h2s.y));
        g2H2.setAttribute("x2", i(h2e.x));
        g2H2.setAttribute("y2", i(h2e.y));
      }

      /* ---- คำนวณเวลา/ดีเลย์ต่อกรุ๊ป ---- */
      function setDurations_g0() {
        const drawShare = 0.5,
          eraseShare = 0.5;
        const L_ab = pAB.getTotalLength?.() || 1,
          L_bc = pBC.getTotalLength?.() || 1,
          L_v2 = pV2.getTotalLength?.() || 1;
        const Ltot = Math.max(L_ab + L_bc + L_v2, 1e-6);
        const drawTotal = GROUP_DURATION * drawShare,
          eraseTotal = GROUP_DURATION * eraseShare;
        lines.style.setProperty(
          "--d-ab",
          (drawTotal * (L_ab / Ltot)) / 1000 + "s"
        );
        lines.style.setProperty(
          "--d-bc",
          (drawTotal * (L_bc / Ltot)) / 1000 + "s"
        );
        lines.style.setProperty(
          "--d-v2",
          (drawTotal * (L_v2 / Ltot)) / 1000 + "s"
        );
        lines.style.setProperty(
          "--e-ab",
          (eraseTotal * (L_ab / Ltot)) / 1000 + "s"
        );
        lines.style.setProperty(
          "--e-bc",
          (eraseTotal * (L_bc / Ltot)) / 1000 + "s"
        );
        lines.style.setProperty(
          "--e-v2",
          (eraseTotal * (L_v2 / Ltot)) / 1000 + "s"
        );
      }

      function setDurations_g1() {
        const drawShare = 0.5,
          eraseShare = 0.5;
        const L_h = p67.getTotalLength?.() || 1;
        const L_up = pUp.getTotalLength?.() || 1;
        const L_d1 = pDn1.getTotalLength?.() || 1;
        const L_d2 = pDn2.getTotalLength?.() || 1;
        const Lsum = L_h + L_up + L_d1 + L_d2;

        const drawTotal = GROUP_DURATION * drawShare,
          eraseTotal = GROUP_DURATION * eraseShare;
        const d_h = drawTotal * (L_h / Lsum);
        const d_up = drawTotal * (L_up / Lsum);
        const d_d1 = drawTotal * (L_d1 / Lsum);
        const d_d2 = drawTotal * (L_d2 / Lsum);
        const e_h = eraseTotal * (L_h / Lsum);
        const e_up = eraseTotal * (L_up / Lsum);
        const e_d1 = eraseTotal * (L_d1 / Lsum);
        const e_d2 = eraseTotal * (L_d2 / Lsum);

        lines.style.setProperty("--d-g1h", d_h / 1000 + "s");
        lines.style.setProperty("--d-up", d_up / 1000 + "s");
        lines.style.setProperty("--d-dn1", d_d1 / 1000 + "s");
        lines.style.setProperty("--d-dn2", d_d2 / 1000 + "s");
        lines.style.setProperty("--e-g1h", e_h / 1000 + "s");
        lines.style.setProperty("--e-up", e_up / 1000 + "s");
        lines.style.setProperty("--e-dn1", e_d1 / 1000 + "s");
        lines.style.setProperty("--e-dn2", e_d2 / 1000 + "s");

        const pause =
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--pause7"
            )
          ) || 0.12;
        const offUp = (d_h + pause * 1000) / 1000;
        const offDn1 = (d_h + pause * 1000) / 1000;
        const offDn2 = (d_h + pause * 1000 + d_d1) / 1000;
        lines.style.setProperty("--off-up", offUp + "s");
        lines.style.setProperty("--off-dn1", offDn1 + "s");
        lines.style.setProperty("--off-dn2", offDn2 + "s");

        const offE_h = Math.max(
          offUp + d_up / 1000,
          offDn1 + (d_d1 + d_d2) / 1000
        ); // เริ่มลบแนวนอนหลังวาดครบ
        const offE_up = offE_h + e_h / 1000;
        const offE_d1 = offE_up + e_up / 1000;
        const offE_d2 = offE_d1 + e_d1 / 1000;
        lines.style.setProperty("--offE-h", offE_h + "s");
        lines.style.setProperty("--offE-up", offE_up + "s");
        lines.style.setProperty("--offE-dn1", offE_d1 + "s");
        lines.style.setProperty("--offE-dn2", offE_d2 + "s");
      }

      function setDurations_g2() {
        const drawShare = 0.5,
          eraseShare = 0.5;
        const L_h1 = g2_h1.getTotalLength?.() || 1; // 2→3
        const L_h12 = g2_h12.getTotalLength?.() || 1; // 12→13
        const L_v = g2_v.getTotalLength?.() || 1; // 13→15
        const L_h2 = g2_h2.getTotalLength?.() || 1; // 15→16
        const Lsum = L_h1 + L_h12 + L_v + L_h2;

        const drawTotal = GROUP_DURATION * drawShare;
        const eraseTotal = GROUP_DURATION * eraseShare;

        const d_h1 = drawTotal * (L_h1 / Lsum);
        const d_h12 = drawTotal * (L_h12 / Lsum);
        const d_v = drawTotal * (L_v / Lsum);
        const d_h2 = drawTotal * (L_h2 / Lsum);

        const e_h2 = eraseTotal * (L_h2 / Lsum);
        const e_v = eraseTotal * (L_v / Lsum);
        const e_h12 = eraseTotal * (L_h12 / Lsum);
        const e_h1 = eraseTotal * (L_h1 / Lsum);

        lines.style.setProperty("--d-g2h1", d_h1 / 1000 + "s");
        lines.style.setProperty("--d-g2h12", d_h12 / 1000 + "s");
        lines.style.setProperty("--d-g2v", d_v / 1000 + "s");
        lines.style.setProperty("--d-g2h2", d_h2 / 1000 + "s");

        lines.style.setProperty("--e-g2h2", e_h2 / 1000 + "s");
        lines.style.setProperty("--e-g2v", e_v / 1000 + "s");
        lines.style.setProperty("--e-g2h12", e_h12 / 1000 + "s");
        lines.style.setProperty("--e-g2h1", e_h1 / 1000 + "s");

        /* ✅ แก้เฉพาะ “ตอนลบ” ของกรุ๊ป 2 ตามที่ขอ:
       - เริ่มลบพร้อมกันสองฝั่งหลังวาดครบทั้งหมด
       - ฝั่งซ้าย: ลบ h1 (2→3)
       - ฝั่งขวา: ลบ h12 (12→13) → ต่อ v (13→15) → ต่อ h2 (15→16) */
        const drawEndSec = Math.max(d_h1, d_h12 + d_v + d_h2) / 1000; // เวลาวาดครบทุกเส้น

        const off_h1 = drawEndSec; // เริ่มลบ 2→3 ทันทีที่วาดครบ
        const off_h12 = drawEndSec; // เริ่มลบ 12→13 พร้อมกันกับฝั่งซ้าย
        const off_v = off_h12 + e_h12 / 1000; // ต่อด้วย 13→15
        const off_h2 = off_v + e_v / 1000; // ต่อด้วย 15→16

        lines.style.setProperty("--offG2-h1", off_h1 + "s");
        lines.style.setProperty("--offG2-h12", off_h12 + "s");
        lines.style.setProperty("--offG2-v", off_v + "s");
        lines.style.setProperty("--offG2-h2", off_h2 + "s");
      }

      function triggerMode(mode) {
        [
          pAB,
          pBC,
          pV2,
          p67,
          pUp,
          pDn1,
          pDn2,
          g2_h1,
          g2_h12,
          g2_v,
          g2_h2,
        ].forEach((p) => {
          if (p) p.style.strokeDashoffset = 1;
        });
        setPaths();
        if (mode === "g0") setDurations_g0();
        else if (mode === "g1") setDurations_g1();
        else if (mode === "g2") setDurations_g2();
        lines.classList.remove("run");
        lines.setAttribute("data-mode", mode);
        void lines.offsetWidth;
        lines.classList.add("run");
      }
      function stopAll() {
        lines.classList.remove("run");
        [
          pAB,
          pBC,
          pV2,
          p67,
          pUp,
          pDn1,
          pDn2,
          g2_h1,
          g2_h12,
          g2_v,
          g2_h2,
        ].forEach((p) => {
          if (p) p.style.strokeDashoffset = 1;
        });
      }

      function paint() {
        const active = groups[current];
        tiles.forEach((t) => {
          const on = hasGroup(t, active);
          t.classList.toggle("active", on);
          t.classList.toggle("inactive", !on);
        });

        if (hasGroup(el9, active) && hasGroup(el6, active)) {
          triggerMode("g0");
        } else if (
          hasGroup(el6, active) &&
          hasGroup(el7, active) &&
          hasGroup(el10, active)
        ) {
          triggerMode("g1");
        } else if (hasGroup(el3, active) && hasGroup(el16, active)) {
          /* เข้ากรุ๊ป 2: แยกสองฝั่งตามที่กำหนด */
          triggerMode("g2");
        } else {
          stopAll();
        }
        current = (current + 1) % groups.length;
      }

      setPaths();
      paint();
      let timer = setInterval(paint, GROUP_DURATION);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) clearInterval(timer);
        else {
          paint();
          timer = setInterval(paint, GROUP_DURATION);
        }
      });

      function loop() {
        setPaths();
        requestAnimationFrame(loop);
      }
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", () => {
            setPaths();
            requestAnimationFrame(loop);
          })
        : (setPaths(), requestAnimationFrame(loop));
      window.addEventListener("resize", () => {
        setPaths();
        setDurations_g0();
        setDurations_g1();
        setDurations_g2();
      });
      window.addEventListener(
        "scroll",
        () => {
          setPaths();
        },
        { passive: true }
      );
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready
          .then(() => {
            setPaths();
            setDurations_g0();
            setDurations_g1();
            setDurations_g2();
          })
          .catch(() => {});
      }