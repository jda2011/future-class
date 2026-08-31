'use client';

import React, { useState } from 'react';

export default function FutureClass() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [notices, setNotices] = useState([
    { id: 1, text: "미래공학 학급 공식 Next.js 누리집이 개설되었습니다." }
  ]);
  const [dailyPosts, setDailyPosts] = useState<{ name: string; text: string }[]>([]);
  const [userName, setUserName] = useState("");
  const [postInput, setPostInput] = useState("");

  const submitDailyPost = () => {
    if (!userName.trim() || !postInput.trim()) {
      alert("이름과 내용을 모두 입력해 주세요.");
      return;
    }
    setDailyPosts([{ name: userName, text: postInput }, ...dailyPosts]);
    setPostInput("");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#22d3ee', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto 30px', textAlign: 'center', borderBottom: '1px solid #155e75', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', letterSpacing: '-1px', margin: '0 0 10px 0' }}>
          ⚡ FUTURE ENGINEERING CLASS ⚡
        </h1>
        <div style={{ fontSize: '0.85rem', color: '#0891b2', letterSpacing: '2px' }}>
          SYSTEM STATUS: ONLINE (NEXT.JS)
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* 학급 아카이브 */}
        <section style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginBottom: '15px' }}>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>
              📷 YEARLY ARCHIVE ({selectedYear}년)
            </h2>
            <select 
              style={{ backgroundColor: '#1e293b', color: '#22d3ee', border: '1px solid #0891b2', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}년</option>)}
            </select>
          </div>
          
          <div style={{ height: '160px', border: '2px dashed #155e75', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#38bdf8' }}>{selectedYear}년도 학급 사진 보유 공간</p>
          </div>
        </section>

        {/* 2단 메인 컨텐츠 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {/* 소식 게시판 */}
          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              📢 NEWS PORTAL
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
              {notices.map(n => (
                <li key={n.id} style={{ padding: '8px 0', borderBottom: '1px solid #1e293b' }}>
                  • {n.text}
                </li>
              ))}
            </ul>
          </article>

          {/* 하루 글 (방명록) */}
          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              💬 DAILY LOG
            </h3>
            <div style={{ backgroundColor: '#020617', padding: '12px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #1e293b' }}>
              <input 
                type="text" 
                placeholder="작성자 이름" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#fff', padding: '6px', borderRadius: '4px', marginBottom: '8px', fontSize: '0.85rem', boxSizing: 'border-box' }} 
              />
              <textarea 
                placeholder="하고 싶은 말" 
                value={postInput} 
                onChange={(e) => setPostInput(e.target.value)} 
                style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#fff', padding: '6px', borderRadius: '4px', resize: 'none', height: '50px', fontSize: '0.85rem', boxSizing: 'border-box', marginBottom: '8px' }} 
              />
              <button 
                onClick={submitDailyPost} 
                style={{ width: '100%', backgroundColor: '#0891b2', border: 'none', color: '#000', fontWeight: 'bold', padding: '8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                작성하기
              </button>
            </div>
            
            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
              {dailyPosts.length === 0 ? (
                <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>남겨진 글이 없습니다.</p>
              ) : (
                dailyPosts.map((p, i) => (
                  <div key={i} style={{ padding: '8px', borderLeft: '3px solid #22d3ee', backgroundColor: '#020617', marginBottom: '8px', borderRadius: '0 4px 4px 0' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{p.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '2px' }}>{p.text}</div>
                  </div>
                ))
              )}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
