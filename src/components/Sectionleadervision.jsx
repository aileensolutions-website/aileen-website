"use client";
import { useEffect, useRef, useState } from "react";
const executivePhoto1 = "/img/profile/executive.png";
const executivePhoto2 = "/img/profile/member5.png";

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function SectionLeaderVision() {
  const [secRef, inView] = useInView(0.06);
  const anim = (kf, delay) => ({
    opacity: inView ? 1 : 0,
    animation: inView
      ? `${kf} .8s cubic-bezier(.22,1,.36,1) ${delay}ms both`
      : "none",
  });

  return (
    <section ref={secRef} className="lv8 pb-20 pt-20">
      {/* ── Header (same pattern as SectionTeam) ── */}
      <div className="lv8-header">
        <span
          className={`lv8-pill lv8-rv ${inView ? "on" : ""}`}
          style={{ animationDelay: "0ms" }}
        >
          <span className="lv8-hdot" />
          VISION &amp; LEADERSHIP
        </span>
        <h2
          className={`lv8-h2 lv8-rv ${inView ? "on" : ""}`}
          style={{ animationDelay: "80ms" }}
        >
          ผู้นำของเรา —{" "}
          <span className="lv8-grad">วิสัยทัศน์ที่ขับเคลื่อนองค์กร</span>
        </h2>
        <p
          className={`lv8-subtitle lv8-rv ${inView ? "on" : ""}`}
          style={{ animationDelay: "160ms" }}
        >
          ผู้นำที่มีวิสัยทัศน์ พร้อมขับเคลื่อนองค์กรของคุณสู่อนาคต
          ด้วยความเชี่ยวชาญและความมุ่งมั่น
        </p>
      </div>

      {/* ── Leader rows ── */}
      <div className="lv8-leaders">
        {/* Row 1: Photo LEFT, Content RIGHT */}
        <div className="lv8-row" style={anim("lv8Sc", 220)}>
          <div className="lv8-photo-panel">
            <div className="lv8-photo-inner">
              <img src={executivePhoto1} alt="Pramote T." />
              <div className="lv8-photo-overlay" />
              <div className="lv8-nameplate">
                <div className="lv8-person-name">Pramote.T</div>
                <div className="lv8-person-role">
                  Professional Services Director
                </div>
                <div className="lv8-person-co">Aileen Solutions Co., Ltd.</div>
              </div>
            </div>
          </div>

          <div className="lv8-content-panel" style={anim("lv8R", 360)}>
            <div className="lv8-accent-bar" />
            <div className="lv8-role-label">Professional Services Director</div>
            <span className="lv8-openquote">&ldquo;</span>
            <p className="lv8-quote">
              เรามุ่งมั่นเป็น<mark>พันธมิตรระยะยาว</mark>
              <br />
              ไม่ใช่เพียงผู้ขายโซลูชั่น
            </p>
            <p className="lv8-body">
              "ด้วยบริการตั้งแต่ให้คำปรึกษา ออกแบบ พัฒนา อบรม และดูแลต่อเนื่อง
              เพื่อเน้นให้เทคโนโลยีถูกนำไปใช้งานได้จริงและสร้างผลลัพธ์ที่วัดผลได้ไม่ใช่แค่เพียงทฤษฎี
              เพราะเราเชื่อว่า <strong>Sustainable Growth</strong>{" "}
              เกิดขึ้นได้จากกระบวนการทำงานที่แข็งแกร่ง และเทคโนโลยีที่ออกแบบให้เหมาะกับบริบทของแต่ละองค์กร"
            </p>
            <div className="lv8-tags">
              <span className="lv8-tag lv8-tag-b">Consult</span>
              <span className="lv8-tag lv8-tag-b">Design &amp; Develop</span>
              <span className="lv8-tag lv8-tag-g">Train &amp; Support</span>
              <span className="lv8-tag lv8-tag-s">Long-term Partnership</span>
            </div>
          </div>
        </div>

        {/* Row 2: Content LEFT, Photo RIGHT */}
        <div className="lv8-row lv8-row-reverse" style={anim("lv8Sc", 300)}>
          <div className="lv8-content-panel" style={anim("lv8L", 440)}>
            <div className="lv8-accent-bar" />
            <div className="lv8-role-label">Managing Director</div>
            <span className="lv8-openquote">&ldquo;</span>
            <p className="lv8-quote">
              ความสำเร็จที่ยั่งยืน
              <br />
              <mark>เริ่มต้นจากการมีเป้าหมายเดียวกัน</mark>
            </p>
            <p className="lv8-body">
              "เราเชื่อว่า ความสำเร็จที่ยั่งยืนเริ่มต้นจากการมีเป้าหมายเดียวกัน
              เรามุ่งมั่นในการสร้างวัฒนธรรมการทำงานที่มีการสื่อสารชัดเจน
              เป็นระบบ และร่วมงานกันด้วยความเคารพในบทบาทหน้าที่ของทุกๆ คน
              เมื่อทุกคนก้าวไปในทิศทางเดียวกัน องค์กรจะเติบโตได้อย่างมั่นคง
              และสามารถ<strong>ส่งมอบคุณค่าให้ลูกค้าได้อย่างแท้จริง</strong>
              เพราะการเติบโตที่ยั่งยืน คือการเติบโตไปพร้อมกันของทั้งองค์กร"
            </p>
            <div className="lv8-tags">
              <span className="lv8-tag lv8-tag-b">Sales Strategy</span>
              <span className="lv8-tag lv8-tag-v">Business Development</span>
              <span className="lv8-tag lv8-tag-g">Customer Success</span>
              <span className="lv8-tag lv8-tag-a">Trusted Advisor</span>
            </div>
          </div>

          <div className="lv8-photo-panel" style={anim("lv8R", 520)}>
            <div className="lv8-photo-inner">
              <img src={executivePhoto2} alt="Surinna T." />
              <div className="lv8-photo-overlay" />
              <div className="lv8-nameplate">
                <div className="lv8-person-name">Surinna.T</div>
                <div className="lv8-person-role">Managing Director</div>
                <div className="lv8-person-co">Aileen Solutions Co., Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
