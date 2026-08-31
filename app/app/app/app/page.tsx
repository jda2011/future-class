'use client';

import React, { useState } from 'react';
import { Camera, User, Bell, MessageSquare, PlusCircle } from 'lucide-react';

export default function FutureClass() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [notices, setNotices] = useState([{ id: 1, text: "미래공학 학급 Next.js 홈페이지 개설!" }]);
  const [dailyPosts, setDailyPosts] = useState<{ name: string; text: string }[]>([]);
  const [userName, setUserName] = useState("");
  const [postInput, setPostInput] = useState("");

  const submitDailyPost = () => {
    if (!userName || !postInput) return alert("이름과 내용을 입력하세요.");
    setDailyPosts([{ name: userName, text: postInput }, ...dailyPosts]);
    setPostInput("");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#22d3ee', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto 30px', textAlign: 'center', borderBottom: '1px solid #155e75', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '-1px', margin: '0 0 10px 0' }}>
          ⚡ FUTURE ENGINEERING CLASS ⚡
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#0891b2', letterSpacing: '2px' }}>
          SYSTEM STATUS: ONLINE (NEXT.JS)
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <section style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginBottom: '15px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', margin: 0 }}>
              <Camera size={20} /> YEARLY ARCHIVE ({selectedYear}년)
            </h2>
            <select 
              style={{ backgroundColor: '#1e293b', color: '#22d3ee', border: '1px solid #0891b2', padding: '5px 10px', borderRadius: '4px' }}
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}년</option>)}
            </select>
          </div>
          
          <div style={{ height: '180px', border: '2px dashed #155e75', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer', backgroundColor: '#020617' }}>
            <PlusCircle size={36} style={{ marginBottom: '8px', marginTop: '40px' }} />
            <p style={{ margin: 0, fontWeight: 'bold' }}>{selectedYear}년도 학급 아카이브</p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              <User size={18} /> CLASS MEMBERS
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '6px', textAlign: 'center', border: '1px solid #1e293b' }}>
                  <span style={{ fontSize: '0.8rem' }}>학생 {i}</span>
                </div>
              ))}
            </div>
          </article>

          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop 0 }}>
              <Bell size={18} /> NEWS PORTAL
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}>
              {notices.map(n => (
                <li key={n.id} style={{ padding: '6px 0', borderBottom: '1px solid #1e293b' }}>
                  • {n.text}
                </li>
              ))}
            </ul>
          </article>

          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              <MessageSquare size={18} /> DAILY LOG
            </h3>
            <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #1e293b' }}>
              <input 
                type="text" 
                placeholder="작성자 이름" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #1e293b', color: '#fff', marginBottom: '8px', fontSize: '0.8rem' }} 
              />
              <textarea 
                placeholder="하고 싶은 말" 
                value={postInput} 
                onChange={(e) => setPostInput(e.target.value)} 
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none', color: '#fff', resize: 'none', height: '40px', fontSize: '0.8rem' }} 
              />
              <button 
                onClick={submitDailyPost} 
                style={{ width: '100%', backgroundColor: '#0891b2', border: 'none', color: '#000', fontWeight: 'bold', padding: '6px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                작성하기
              </button>
            </div>
            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
              {dailyPosts.map((p, i) => (
                <div key={i} style={{ padding: '6px', borderLeft: '2px solid #22d3ee', backgroundColor: '#020617', marginBottom: '6px', borderRadius: '0 4px 4px 0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{p.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{p.text}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
