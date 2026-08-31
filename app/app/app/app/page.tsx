'use client';

import React, { useState, useEffect } from 'react';
import { Camera, User, Bell, MessageSquare, PlusCircle, Trash2 } from 'lucide-react';

export default function FutureClass() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [years, setYears] = useState([2024, 2025, 2026]);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [warnings, setWarnings] = useState({});
  const [bannedUsers, setBannedUsers] = useState([]);
  
  const [notices, setNotices] = useState([{ id: 1, text: "미래공학 학급 Next.js 홈페이지 개설!" }]);
  const [dailyPosts, setDailyPosts] = useState([]);
  
  const [postInput, setPostInput] = useState("");
  const [userName, setUserName] = useState("");
  const [noticeInput, setNoticeInput] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const askAdmin = window.confirm("관리자(선생님) 권한으로 접속하시겠습니까?\n[확인] 관리자 / [취소] 학생 모드");
      setIsAdmin(askAdmin);
    }
  }, []);

  const triggerUpload = (id) => {
    const element = document.getElementById(id);
    if (element) element.click();
  };

  const submitDailyPost = () => {
    if (!userName || !postInput) return alert("이름과 내용을 입력하세요.");
    if (bannedUsers.includes(userName)) return alert("당신은 경고 3회 누적으로 차단되었습니다.");

    const badWords = ["욕설", "비난", "바보"]; 
    const hasBadWord = badWords.some(word => postInput.includes(word));

    if (hasBadWord) {
      const currentWarning = (warnings[userName] || 0) + 1;
      setWarnings({ ...warnings, [userName]: currentWarning });
      alert(`[경고] 부적절한 언어가 포함되었습니다. (현재 경고: ${currentWarning}/3)`);
      
      if (currentWarning >= 3) {
        setBannedUsers([...bannedUsers, userName]);
        alert("경고 3회 누적으로 영구 차단됩니다.");
      }
      return;
    }

    setDailyPosts([{ name: userName, text: postInput, date: new Date().toLocaleTimeString() }, ...dailyPosts]);
    setPostInput("");
  };

  const addNotice = () => {
    if (!noticeInput.trim()) return;
    setNotices([...notices, { id: Date.now(), text: noticeInput }]);
    setNoticeInput("");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#22d3ee', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto 30px', textAlign: 'center', borderBottom: '1px solid #155e75', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '-1px', margin: '0 0 10px 0' }}>
          ⚡ FUTURE ENGINEERING CLASS ⚡
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#0891b2', letterSpacing: '2px' }}>
          {isAdmin ? "SYSTEM STATUS: ADMIN ACCESS GRANTED (NEXT.JS)" : "SYSTEM STATUS: STUDENT ACCESS (NEXT.JS)"}
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
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            >
              {years.map(y => <option key={y} value={y}>{y}년</option>)}
            </select>
          </div>
          
          <div 
            onClick={() => triggerUpload('main-photo')}
            style={{ height: '180px', border: '2px dashed #155e75', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: '#020617' }}
          >
            <PlusCircle size={36} style={{ marginBottom: '8px' }} />
            <p style={{ margin: 0, fontWeight: 'bold' }}>{selectedYear}년도 사진을 넣어주세요 (클릭)</p>
            <input type="file" id="main-photo" style={{ display: 'none' }} />
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              <User size={18} /> CLASS MEMBERS
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '6px', textAlign: 'center', border: '1px solid #1e293b' }}>
                  <div onClick={() => triggerUpload(`std-${i}`)} style={{ cursor: 'pointer', fontSize: '0.7rem', color: '#0891b2', marginBottom: '5px' }}>사진 등록</div>
                  <input type="file" id={`std-${i}`} style={{ display: 'none' }} />
                  <input type="text" placeholder="학생 이름" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #1e293b', color: '#fff', textAlign: 'center', fontSize: '0.8rem' }} />
                </div>
              ))}
            </div>
          </article>

          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              <Bell size={18} /> NEWS PORTAL
            </h3>
            <div style={{ marginBottom: '15px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}>
                {notices.map(n => (
                  <li key={n.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1e293b' }}>
                    <span>• {n.text}</span>
                    {isAdmin && <Trash2 size={14} style={{ color: '#ef4444', cursor: 'pointer' }} onClick={() => setNotices(notices.filter(item => item.id !== n.id))} />}
                  </li>
                ))}
              </ul>
            </div>
            {isAdmin && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <input type="text" value={noticeInput} onChange={(e) => setNoticeInput(e.target.value)} placeholder="공지/소식 입력" style={{ flex: 1, backgroundColor: '#020617', border: '1px solid #1e293b', color: '#fff', padding: '5px', borderRadius: '4px', fontSize: '0.8rem' }} />
                <button onClick={addNotice} style={{ backgroundColor: '#0284c7', border: 'none', color: '#fff', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>등록</button>
              </div>
            )}
          </article>

          <article style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginTop: 0 }}>
              <MessageSquare size={18} /> DAILY LOG
            </h3>
            <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '6px', marginBottom: '15px', border: '1px solid #1e293b' }}>
              <input type="text" placeholder="작성자 이름" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #1e293b', color: '#fff', marginBottom: '8px', fontSize: '0.8rem' }} />
              <textarea placeholder="하고 싶은 말 (비난/욕설 시 경고)" value={postInput} onChange={(e) => setPostInput(e.target.value)} style={{ width: '100%', backgroundColor: 'transparent', border: 'none', color: '#fff', resize: 'none', height: '40px', fontSize: '0.8rem' }}></textarea>
              <button onClick={submitDailyPost} style={{ width: '100%', backgroundColor: '#0891b2', border: 'none', color: '#000', fontWeight: 'bold', padding: '6px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>작성하기</button>
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
